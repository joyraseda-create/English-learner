(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Feature Radar ---
  var chart1 = echarts.init(document.getElementById('chart-radar'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: { appendToBody: true },
    legend: {
      data: ['English Learner', '百词斩', '墨墨背单词', '不背单词', '多邻国'],
      top: 0,
      textStyle: { color: muted, fontSize: 11 },
      itemWidth: 12,
      itemHeight: 8
    },
    radar: {
      indicator: [
        { name: '词汇背诵', max: 10 },
        { name: '句子/语法', max: 10 },
        { name: '打字肌肉记忆', max: 10 },
        { name: '听力/口语', max: 10 },
        { name: '趣味性', max: 10 },
        { name: '免费程度', max: 10 },
        { name: '应试适配', max: 10 }
      ],
      shape: 'polygon',
      splitNumber: 5,
      axisName: { color: ink, fontSize: 11 },
      splitLine: { lineStyle: { color: rule } },
      splitArea: { show: false },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'radar',
      data: [
        { value: [7, 9, 10, 6, 5, 10, 7], name: 'English Learner', areaStyle: { color: accent + '33' }, lineStyle: { color: accent, width: 2 } },
        { value: [8, 3, 2, 4, 9, 7, 8], name: '百词斩', areaStyle: { color: accent2 + '22' }, lineStyle: { color: accent2, width: 1.5, type: 'dashed' } },
        { value: [10, 3, 3, 2, 3, 6, 10], name: '墨墨背单词', areaStyle: { color: muted + '15' }, lineStyle: { color: muted, width: 1.5, type: 'dashed' } },
        { value: [9, 5, 2, 6, 7, 7, 7], name: '不背单词', areaStyle: { color: accent2 + '10' }, lineStyle: { color: accent2, width: 1.5, type: 'dotted' } },
        { value: [5, 6, 1, 8, 10, 8, 2], name: '多邻国', areaStyle: { color: muted + '10' }, lineStyle: { color: muted, width: 1.5, type: 'dotted' } }
      ]
    }]
  });
  window.addEventListener('resize', function() { chart1.resize(); });

  // --- Chart: Market Share ---
  var chart2 = echarts.init(document.getElementById('chart-share'), null, { renderer: 'svg' });
  chart2.setOption({
    animation: false,
    tooltip: { appendToBody: true, trigger: 'item', formatter: '{b}: {c}%' },
    legend: { bottom: 0, textStyle: { color: muted, fontSize: 11 }, itemWidth: 12, itemHeight: 8 },
    series: [{
      type: 'pie',
      radius: ['35%', '65%'],
      center: ['50%', '45%'],
      label: { color: ink, fontSize: 12, formatter: '{b}\n{c}%' },
      labelLine: { lineStyle: { color: rule } },
      data: [
        { value: 19.7, name: '墨墨背单词', itemStyle: { color: accent } },
        { value: 15.2, name: '扇贝', itemStyle: { color: accent2 } },
        { value: 12.5, name: '百词斩', itemStyle: { color: '#8b5cf6' } },
        { value: 10.8, name: '不背单词', itemStyle: { color: '#6366f1' } },
        { value: 8.3, name: '其他', itemStyle: { color: muted } }
      ]
    }]
  });
  window.addEventListener('resize', function() { chart2.resize(); });
})();
