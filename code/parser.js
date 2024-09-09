function scheduleHtmlParser(html) {
  let results = []
  let data = JSON.parse(html)
  for (let i = 0; i < data.length; i++) {
    let result =
    {
      name: '',
      position: '',
      taecher: '',
      weeks: [],
      day: 0,
      sections: []
    }
    result.name = data[i].KCM//课程名称
    result.position = data[i].JASMC==null?'未安排课程地点':data[i].JASMC//上课教室位置
    result.taecher = data[i].SKJS==null?'未安排教师':data[i].SKJS//上课教师
    let ypsjdd = data[i].YPSJDD
    //匹配解析上课周数
    const weekRangeRegex = /(\d+)-(\d+)周(?:\((单|双)\))?/
    const match1 = weekRangeRegex.exec(ypsjdd)
    const satrtWeek = parseInt(match1[1])
    const endWeek = parseInt(match1[2])
    const weekType = match1[3]
    for (let j = satrtWeek; j <= endWeek; j++) {
      result.weeks.push(j)
    }
    if (weekType === '单') {
      result.weeks = result.weeks.filter(week => week % 2 === 1)
    } else if (weekType === '双') {
      result.weeks = result.weeks.filter(week => week % 2 === 0)
    }
    //匹配解析上课所在星期
    const weekdayRegex = /星期[一二三四五六日]/
    const match2 = weekdayRegex.exec(ypsjdd)
    const weekdayMap = {
      '星期一': 1,
      '星期二': 2,
      '星期三': 3,
      '星期四': 4,
      '星期五': 5,
      '星期六': 6,
      '星期日': 7
    }
    result.day = weekdayMap[match2[0]]
    //匹配解析上课节数
    const periodRegex = /(\d+)-(\d+)节/
    const match3 = periodRegex.exec(ypsjdd)
    const startPeriod = parseInt(match3[1])
    const endPeriod = parseInt(match3[2])
    for (let k = startPeriod; k <= endPeriod; k++) {
      result.sections.push(k)
    }
    results.push(result)
  }
  return results
}