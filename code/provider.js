async function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {
  await loadTool("AIScheduleTools")
  const dqxnxq = 'https://ehall.ynu.edu.cn/jwapp/sys/wdkb/modules/jshkcb/dqxnxq.do' //获取现在处于第几学期的请求路径
  const xskcb = 'https://ehall.ynu.edu.cn/jwapp/sys/wdkb/modules/xskcb/xskcb.do'//查询已经安排时间的课程请求路径
  const xswpkc = 'https://ehall.ynu.edu.cn/jwapp/sys/wdkb/modules/xskcb/xswpkc.do'//查询未安排时间的课程请求路径
  const userConfrim = await AIScheduleConfirm({
    titleText: "提示", // 标题内容，字体比较大，超过10个字不给显示的喔，也可以不传就不显示
    contentText: "请在登录后进入可用应用-本科教务-我的课表-学生组后(即看到自己的课表后)再点击导入(因为我没有研究生账号，不知道研究生能不能用)", // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试，为必传，不传显示版本号
    cancelText: "我还未看到我的课表", // 取消按钮文字，可不传默认为取消
    confirmText: "我已经看到我的课表", // 确认按钮文字，可不传默认为确认
  })
  if (userConfrim) {
    let XNXQDM = ''//记录现在是处于那一年的哪一个学期
    let SKZC = ''//现在是第几周
    let scheduledCourses = []//记录已经安排的课程
    let unscheduledCourses = []//记录未安排的课程
    try {
      //获取现在所处的学期
      const res_dm = await fetch(dqxnxq, {
        method: 'POST'
      })
        .then(response => response.json())
        .then((data) => {
          console.log('现在所在的学期是')
          XNXQDM = data.datas.dqxnxq.rows[0].DM
          console.log(XNXQDM)
        })
    } catch (error) {
      await AIScheduleAlert("请在登录后进入可用应用-本科教务-我的课表-学生组后(即看到自己的课表后)再点击导入")
      return 'do not continue'
    }
    try {
      let searchParams = new URLSearchParams()//请求参数
      searchParams.append('XNXQDM', XNXQDM)//请求参数：学年学期
      //获取已经安排时间的课程
      let res_xskcb = await fetch(xskcb, {
        method: 'POST',
        body: searchParams
      }).then(response => response.json())
        .then((data) => {
          for (let j = 0; j < data.datas.xskcb.rows.length; j++) {
            if (scheduledCourses.find(item => item.KCH === data.datas.xskcb.rows[j].KCH) === undefined) {
              scheduledCourses.push(data.datas.xskcb.rows[j])
            }
          }
          // scheduledCourses=data.datas.xskcb.rows
          // console.log(scheduledCourses)
        })
      //获取未安排时间的课程
      let res_xswpkc = await fetch(xswpkc, {
        method: 'POST',
        body: searchParams
      }).then(response => response.json())
        .then((data) => {
          for (let j = 0; j < data.datas.xswpkc.rows.length; j++) {
            if (unscheduledCourses.find(item => item.JXBID === data.datas.xswpkc.rows[j].JXBID) === undefined) {
              unscheduledCourses.push(data.datas.xswpkc.rows[j])
            }
          }
          // unscheduledCourses=data.datas.xswpkc.rows
        })

      console.log("已经安排时间的课程")
      console.log(scheduledCourses)
      console.log("未安排时间的课程")
      console.log(unscheduledCourses)
      let unscheduledCoursesHtml = ''
      if (unscheduledCourses.length > 0) {
        for (let i = 0; i < unscheduledCourses.length; i++) {
          unscheduledCoursesHtml += '《' + unscheduledCourses[i].KCM + '》--' + unscheduledCourses[i].SKJS + '\n'
        }
        await AIScheduleAlert('以下课程目前未安排上课时间、地点，这类课程一般是通过证书认定学分的课程，' +
          '或者是安排在假期的实训课程，但也不排除这些课程教务暂时没有安排好时间但是需要到教室上课，这些课程' +
          '不会被导入小爱课程表中，请留意后续课程是否会变化\n' + unscheduledCoursesHtml)
      }

    } catch (error) {
      await AIScheduleAlert("请在登录后进入可用应用-本科教务-我的课表-学生组后(即看到自己的课表后)再点击导入")
      return 'do not continue'//取消
    }
    console.log(scheduledCourses.length)
    return JSON.stringify(scheduledCourses);
  } else {
    return 'do not continue'//取消
  }
}