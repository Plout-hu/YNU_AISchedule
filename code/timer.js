/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
async function scheduleTimer({
} = {}) {
  const csjcs = 'https://ehall.ynu.edu.cn/jwapp/sys/wdkb/modules/jshkcb/cxjcs.do'//获取开学第一周的时间请求路径
  const dqxnxq = 'https://ehall.ynu.edu.cn/jwapp/sys/wdkb/modules/jshkcb/dqxnxq.do' //获取现在处于第几学期的请求路径
  let XNXQDM = ''//记录现在是处于那一年的哪一个学期
  let XN = ''//学年
  let XQ = ''//记录现在是第几学期
  let XQKSRQ = ''//学期开始时间
  const res_dm = await fetch(dqxnxq, {
    method: 'POST'
  })
    .then(response => response.json())
    .then((data) => {
      console.log('现在所在的学期是')
      XNXQDM = data.datas.dqxnxq.rows[0].DM
      XN = XNXQDM.slice(0, XNXQDM.length - 2)
      XQ = XNXQDM.slice(-1)
      console.log(XNXQDM)
    })
  // 返回时间配置JSON，所有项都为可选项，如果不进行时间配置，请返回空对象
  let searchParams = new URLSearchParams()//请求参数
  searchParams.append("XN", XN)
  searchParams.append("XQ", XQ)
  const res_xqksrq = await fetch(csjcs, {
    method: 'POST',
    body: searchParams
  }).then(response => response.json())
    .then((data) => {
      console.log('开学时间是' + data.datas.cxjcs.rows[0].XQKSRQ)
      XQKSRQ = new Date(data.datas.cxjcs.rows[0].XQKSRQ).getTime().toString()
    })
  await loadTool("AIScheduleTools")
  const userSelect = await AIScheduleConfirm({
    titleText: '提示', // 标题内容，字体比较大，超过10个字不给显示的喔，也可以不传就不显示
    contentText: '请选择你所在校区', // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试，为必传，不传显示版本号
    cancelText: '东陆校区', // 取消按钮文字，可不传默认为取消
    confirmText: '呈贡校区', // 确认按钮文字，可不传默认为确认
  })
  if (userSelect) {//如果为呈贡校区，则使用呈贡校区的作息时间
    return {
      totalWeek: 18, // 总周数：[1, 30]之间的整数
      startSemester: XQKSRQ, // 开学时间：时间戳，13位长度字符串，推荐用代码生成
      startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
      showWeekend: true, // 是否显示周末
      forenoon: 4, // 上午课程节数：[1, 10]之间的整数
      afternoon: 4, // 下午课程节数：[0, 10]之间的整数
      night: 3, // 晚间课程节数：[0, 10]之间的整数
      sections: [{
        section: 1, // 节次：[1, 30]之间的整数
        startTime: '08:30', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '09:15', // 结束时间：同上
      }, {
        section: 2, // 节次：[1, 30]之间的整数
        startTime: '09:25', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '10:10', // 结束时间：同上
      }, {
        section: 3, // 节次：[1, 30]之间的整数
        startTime: '10:30', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '11:15', // 结束时间：同上
      }, {
        section: 4, // 节次：[1, 30]之间的整数
        startTime: '11:25', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '12:10', // 结束时间：同上
      }, {
        section: 5, // 节次：[1, 30]之间的整数
        startTime: '14:00', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '14:45', // 结束时间：同上
      }, {
        section: 6, // 节次：[1, 30]之间的整数
        startTime: '14:55', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '15:40', //结束时间：同上
      }, {
        section: 7, // 节次：[1, 30]之间的整数
        startTime: '16:00', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '16:45', // 结束时间：同上
      }, {
        section: 8, // 节次：[1, 30]之间的整数
        startTime: '16:55', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '17:40', // 结束时间：同上
      }, {
        section: 9, // 节次：[1, 30]之间的整数
        startTime: '19:00', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '19:45', // 结束时间：同上
      }, {
        section: 10, // 节次：[1, 30]之间的整数
        startTime: '19:55', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '20:40', // 结束时间：同上
      }, {
        section: 111, // 节次：[1, 30]之间的整数
        startTime: '20:50', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '21:35', // 结束时间：同上
      }], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
    }
  } else {
    return {
      totalWeek: 18, // 总周数：[1, 30]之间的整数
      startSemester: XQKSRQ, // 开学时间：时间戳，13位长度字符串，推荐用代码生成
      startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
      showWeekend: true, // 是否显示周末
      forenoon: 4, // 上午课程节数：[1, 10]之间的整数
      afternoon: 4, // 下午课程节数：[0, 10]之间的整数
      night: 3, // 晚间课程节数：[0, 10]之间的整数
      sections: [{
        section: 1, // 节次：[1, 30]之间的整数
        startTime: '08:00', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '08:45', // 结束时间：同上
      }, {
        section: 2, // 节次：[1, 30]之间的整数
        startTime: '08:55', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '09:40', // 结束时间：同上
      }, {
        section: 3, // 节次：[1, 30]之间的整数
        startTime: '10:00', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '10:45', // 结束时间：同上
      }, {
        section: 4, // 节次：[1, 30]之间的整数
        startTime: '10:55', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '11:40', // 结束时间：同上
      }, {
        section: 5, // 节次：[1, 30]之间的整数
        startTime: '14:00', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '14:45', // 结束时间：同上
      }, {
        section: 6, // 节次：[1, 30]之间的整数
        startTime: '14:55', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '15:40', //结束时间：同上
      }, {
        section: 7, // 节次：[1, 30]之间的整数
        startTime: '16:00', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '16:45', // 结束时间：同上
      }, {
        section: 8, // 节次：[1, 30]之间的整数
        startTime: '16:55', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '17:40', // 结束时间：同上
      }, {
        section: 9, // 节次：[1, 30]之间的整数
        startTime: '19:30', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '20:15', // 结束时间：同上
      }, {
        section: 10, // 节次：[1, 30]之间的整数
        startTime: '20:25', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '21:10', // 结束时间：同上
      }, {
        section: 11, // 节次：[1, 30]之间的整数
        startTime: '21:20', // 开始时间：参照这个标准格式5位长度字符串
        endTime: '22:05', // 结束时间：同上
      }], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
    }
  }

  // PS: 夏令时什么的还是让用户在夏令时的时候重新导入一遍吧，在这个函数里边适配吧！奥里给！————不愿意透露姓名的嘤某人
}