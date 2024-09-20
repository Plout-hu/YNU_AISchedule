function scheduleHtmlParser(html) {
  let results = []
  let data = JSON.parse(html)
  for (let i = 0; i < data.length; i++) {
    let ypsjdd = data[i].YPSJDD
    const pattern = /(?<=((\S{1,}\s{1,}){3}[^,]{0,})),/g;//将课程信息分段处理
    // 先将三个空格加逗号替换为一个分割标记
    let replaceStr = ypsjdd.replace(pattern, '|||')
    let parts = replaceStr.split('|||')
    for (let j = 0; j < parts.length; j++) {
      let result =
      {
        name: '',
        position: '',
        teacher: '',
        weeks: [],
        day: 0,
        sections: []
      }
      result.name = data[i].KCM//课程名称
      result.teacher = data[i].SKJS == null ? '未安排教师' : data[i].SKJS//上课教师
      let info = parts[j].split(' ')//按照空格分隔得到各段信息
      let weekInfo = info[0];//周数信息
      let dayInfo = info[1];//星期信息
      let sectionsInfo = info[2];//节数信息
      let positionInfo = info.length > 3 ? info[3] : null//上课地点
      let weeks = []
      result.weeks = []
      result.sections = []
      result.position = positionInfo ? positionInfo : '未安排课程地点'
      // 匹配单个周数、范围周数、单双周的格式
      const weekPattern = /(\d+)(?:-(\d+))?周(?:\((单|双)\))?/g;
      let match;
      // 解析周数
      while ((match = weekPattern.exec(weekInfo)) !== null) {
        let startWeek = parseInt(match[1]); // 开始周数
        let endWeek = match[2] ? parseInt(match[2]) : startWeek; // 结束周数（如果没有结束周数，则与开始周数相同）
        let weekType = match[3]; // 可能是 '单' 或 '双'

        // 根据匹配的周数范围生成周数数组
        let tempWeeks = [];
        for (let k = startWeek; k <= endWeek; k++) {
          tempWeeks.push(k);
        }
        // 如果是单周或双周，进行过滤
        if (weekType === '单') {
          tempWeeks = tempWeeks.filter(week => week % 2 === 1);
        } else if (weekType === '双') {
          tempWeeks = tempWeeks.filter(week => week % 2 === 0);
        }
        // 将解析出的周数加入结果数组
        weeks = weeks.concat(tempWeeks)
      }
      result.weeks = weeks
      //匹配解析上课所在星期
      const weekdayRegex = /星期[一二三四五六日]/
      const match2 = weekdayRegex.exec(dayInfo)
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
      const match3 = periodRegex.exec(sectionsInfo)
      const startPeriod = parseInt(match3[1])
      const endPeriod = parseInt(match3[2])
      for (let k = startPeriod; k <= endPeriod; k++) {
        result.sections.push(k)
      }
      console.log(result)
      results.push(result)
    }
  }
  return results
} 