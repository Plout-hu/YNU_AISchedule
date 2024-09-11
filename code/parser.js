function scheduleHtmlParser(html) {
  let results = []
  let data = JSON.parse(html)
  //1-9周 星期二 1-2节 格物楼1栋1403,3-16周 星期二 3-4节 信息学院2203
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
    result.position = data[i].JASMC == null ? '未安排课程地点' : data[i].JASMC//上课教室位置
    result.taecher = data[i].SKJS == null ? '未安排教师' : data[i].SKJS//上课教师
    let ypsjdd = data[i].YPSJDD
    let weekInform = data[i].ZCMC
    let weeks = [];
    // 匹配单个周数、范围周数、单双周的格式
    const weekPattern = /(\d+)(?:-(\d+))?周(?:\((单|双)\))?/g;

    let match;
    // 针对每个分段进行匹配和解析
    while ((match = weekPattern.exec(weekInform)) !== null) {
      let startWeek = parseInt(match[1]); // 开始周数
      let endWeek = match[2] ? parseInt(match[2]) : startWeek; // 结束周数（如果没有结束周数，则与开始周数相同）
      let weekType = match[3]; // 可能是 '单' 或 '双'

      // 根据匹配的周数范围生成周数数组
      let tempWeeks = [];
      for (let i = startWeek; i <= endWeek; i++) {
        tempWeeks.push(i);
      }

      // 如果是单周或双周，进行过滤
      if (weekType === '单') {
        tempWeeks = tempWeeks.filter(week => week % 2 === 1);
      } else if (weekType === '双') {
        tempWeeks = tempWeeks.filter(week => week % 2 === 0);
      }

      // 将解析出的周数加入结果数组
      weeks = weeks.concat(tempWeeks);
    }
    result.weeks = weeks
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
    let sectionInfo = ypsjdd.slice(ypsjdd.indexOf(weekInform))
    //匹配解析上课节数
    const periodRegex = /(\d+)-(\d+)节/
    const match3 = periodRegex.exec(sectionInfo)
    const startPeriod = parseInt(match3[1])
    const endPeriod = parseInt(match3[2])
    for (let k = startPeriod; k <= endPeriod; k++) {
      result.sections.push(k)
    }
    results.push(result)
  }
  return results
} 