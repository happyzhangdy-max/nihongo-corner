/* Curated learning scopes. Legacy labels are accepted only for saved selections. */
(function (root) {
  'use strict';
  const sceneGroups = [
    ['daily', '餐饮与购物'], ['journey', '交通与旅行'], ['settling', '在日生活'],
    ['career', '学习与工作'], ['connection', '社交与休闲'], ['wellbeing', '健康与求助']
  ];
  const sceneRows = [
    ['restaurant', '餐厅点餐', 'daily', 'food', '订位、点单与结账', 'レストラン 食事 注文'],
    ['cafe', '咖啡店', 'daily', 'food', '饮品、定制与外带', 'カフェ コーヒー 喫茶店'],
    ['supermarket', '超市采购', 'daily', 'shopping', '找商品、称量与付款', 'スーパー 食材 買い物'],
    ['shopping', '购物退换', 'daily', 'shopping', '试穿、尺寸与退换货', '服 試着 返品'],
    ['station', '车站乘车', 'journey', 'travel', '买票、换乘与到站', '駅 電車 切符'],
    ['directions', '问路出行', 'journey', 'travel', '位置、方向与步行路线', '道 交差点 バス'],
    ['airport', '机场出入境', 'journey', 'travel', '值机、行李与入境', '空港 飛行機 パスポート'],
    ['hotel', '酒店入住', 'journey', 'travel', '预订、入住与客房需求', 'ホテル 旅館 宿泊'],
    ['housing', '租房搬家', 'settling', 'home', '看房、签约与搬家', '賃貸 引っ越し 部屋'],
    ['cityhall', '市役所办事', 'settling', 'services', '窗口、证件与申请', '役所 住民票 在留'],
    ['bank', '银行支付', 'settling', 'services', '账户、汇款与支付', '銀行 口座 振込'],
    ['delivery', '邮寄快递', 'settling', 'services', '寄件、收件与再次配送', '郵便 宅配 荷物'],
    ['classroom', '课堂学习', 'career', 'study', '听课、提问与作业', '学校 授業 宿題'],
    ['exam', '备考应试', 'career', 'study', '报名、复习与考试', '試験 受験 復習'],
    ['interview', '求职面试', 'career', 'work', '应聘、经历与自我介绍', '就職 面接 履歴書'],
    ['meeting', '会议协作', 'career', 'work', '汇报、讨论与安排任务', '会議 仕事 資料'],
    ['introduction', '初次见面', 'connection', 'social', '介绍自己、称呼与寒暄', '自己紹介 挨拶 名前'],
    ['invitation', '邀约做客', 'connection', 'social', '邀请、约定与拜访', '誘う 訪問 約束'],
    ['hobby', '兴趣活动', 'connection', 'leisure', '运动、展览与业余活动', '趣味 スポーツ 音楽'],
    ['online', '线上沟通', 'connection', 'technology', '消息、视频通话与文件', 'ネット チャット オンライン'],
    ['clinic', '挂号就诊', 'wellbeing', 'health', '预约、问诊与描述症状', '病院 診察 医者'],
    ['pharmacy', '药店取药', 'wellbeing', 'health', '处方、取药与询问药师', '薬局 薬 処方箋'],
    ['emergency', '紧急求助', 'wellbeing', 'services', '说明位置、遗失与求助', '救急 交番 助け'],
    ['disaster', '防灾避难', 'wellbeing', 'nature', '预警、避难场所与联络', '地震 台風 避難']
  ];
  const topicRows = [
    ['food', '餐饮食材', '生活基础', '食物、味道与烹饪'],
    ['shopping', '购物消费', '生活基础', '商品、价格与消费'],
    ['home', '居家生活', '生活基础', '家居、家务与居住'],
    ['travel', '交通旅行', '生活基础', '交通工具、路线与旅途'],
    ['services', '公共服务', '社会生活', '办事、邮政、支付与求助'],
    ['health', '身体健康', '社会生活', '身体、症状与就诊沟通'],
    ['study', '学习教育', '学习与工作', '课程、学习方法与考试'],
    ['work', '工作职场', '学习与工作', '职业、任务与协作'],
    ['social', '人际交往', '交流与探索', '关系、礼貌与沟通'],
    ['leisure', '兴趣文化', '交流与探索', '娱乐、运动与文化活动'],
    ['nature', '自然环境', '交流与探索', '天气、自然与环境'],
    ['technology', '数字生活', '交流与探索', '设备、网络与信息交流']
  ];
  const specialRows = [
    ['listening', 'N2听力', '听力表达与对话信号'], ['reading', 'N2阅读', '阅读表达与逻辑连接'],
    ['onomatopoeia', '拟声拟态', '声音、动作与状态'], ['loanwords', '外来语', '常见片假名词'],
    ['kanji', '易混汉字词', '辨析读音与词义']
  ];
  const members = [{"id":"food","vocabIds":[53,657,697,712,737,1039,1330,1386,1414,1682,1718,1719,1720,1721,1724,1725,1854,1943,1944,1947,1963,1964,1967,2765,2781,2782,2791,3043,3044,5572,5601,6172]},{"id":"shopping","vocabIds":[24,213,353,1408,1654,1681,1728,1746,1768,1910,1911,1912,2180,2182,2325,2438,2912,2913,2914,2915,2920,2921,2922,3800]},{"id":"home","vocabIds":[310,447,676,1298,1317,1331,1380,1451,1734,1737,1743,1906,2198,2199,2201,2202,2203,2207,2208,2214,2216,2456,2936,2937,2938,2940,3909,3910,4584,5100,6596,8688]},{"id":"travel","vocabIds":[32,143,156,309,527,561,846,1279,1300,1321,1471,1729,1754,1755,1756,1757,1981,2154,2155,2163,2164,2165,2167,2950,2956,3913,4102,4290,4385,4881,5159,5379,5492,5929]},{"id":"services","vocabIds":[308,337,446,547,642,643,814,1069,1315,1401,1463,1920,1985,1986,1987,2429,2430,2435,2491,3020,3391,3792,3816,3982,5742,8835,8854,9918]},{"id":"health","vocabIds":[342,440,448,541,589,661,741,768,923,1318,1404,1421,1473,1475,1480,1488,1519,1528,1787,1931,1933,2257,2258,2259,2261,2531,2605,2616,2924,2981,4092,4453,4803,5007,5264]},{"id":"study","vocabIds":[38,75,78,106,124,138,141,163,208,271,281,306,307,432,700,725,1273,1285,1301,1426,1430,1726,1740,1741,1767,1781,1927,2001,2273,2276,2674,2690,2691,2692,3015,3271,3768,4047,6166,6499,9673]},{"id":"work","vocabIds":[23,65,76,84,91,104,113,197,242,406,1409,1769,2008,2009,2010,2011,2012,2013,2014,2015,2017,2019,2022,2137,2300,2301,2304,2311,2374,2809,2813,2972,3389,4019,4067,4205,4307,4523,4866,6017]},{"id":"social","vocabIds":[20,133,139,140,187,313,443,450,453,559,565,1118,1327,1335,1350,1381,1382,1393,1423,1443,1517,1531,1591,1708,1709,1710,1711,1712,1760,1770,2106,2111,2112,2315,2504,2758,3315,3473,3916,4537,4825,5038]},{"id":"leisure","vocabIds":[31,149,302,322,399,433,459,1043,1147,1160,1320,1352,1427,1467,1486,1762,1763,1864,1936,1937,1938,1942,1988,1989,1990,1991,2069,2772,2775,3211,3639,4496,4517,4656,4996,5317,5479,5720,6127]},{"id":"nature","vocabIds":[7,92,273,299,300,426,458,714,755,1311,1356,1456,1466,1491,1501,1505,1513,1520,1775,1776,1777,1902,2032,2033,2051,2052,2056,2060,2063,2065,2066,2067,2070,2117,2517,2518,3081,3089,3090,3208,3506,3534,3704,5749]},{"id":"technology","vocabIds":[216,409,517,1752,1753,1904,1905,1917,1918,1919,2362,2363,2365,2370,2371,2822,2823,2824,2825,2828,2829,2833,2834,2835,2836,2837,2849,2850,2852,2854,4298,4661,5698,8618,8744,9303,9313,9319,9964]}];
  const topicIds = new Map(members.map(item => [item.id, new Set(item.vocabIds)]));
  const scenes = sceneRows.map(([id, label, group, topicId, description, keywords]) => ({id: 'scene:' + id, label, group: sceneGroups.find(g => g[0] === group)[1], topicId, description, keywords, kind: 'scene'}));
  const topics = topicRows.map(([id, label, group, description]) => ({id: 'topic:' + id, label, group, description, kind: 'topic'}));
  const specials = specialRows.map(([id, label, description]) => ({id: 'special:' + id, label, group: '语言专项', description, kind: 'special'}));
  const entries = [...scenes, ...topics, ...specials];
  const byId = new Map(entries.map(item => [item.id, item]));
  function matches(word, id) {
    if (id === 'legacy:all') return true;
    const entry = byId.get(id);
    if (!entry) return word.category === id;
    if (entry.kind === 'scene') return word.sceneId === id.slice(6);
    if (entry.kind === 'topic') return word.topicId === id.slice(6) || !!topicIds.get(id.slice(6))?.has(word.id);
    return word.category === entry.label;
  }
  function select(vocab, ids) {
    return vocab.filter(word => ids.some(id => matches(word, id)));
  }
  function label(id) { return byId.get(id)?.label || (id === 'legacy:all' ? '全部词库（原设置）' : id + '（旧分类）'); }
  function list(vocab, kind) {
    return entries.filter(entry => entry.kind === kind).map(entry => {
      const words = select(vocab, [entry.id]);
      return {...entry, count: words.length, words, search: [entry.label, entry.description, entry.keywords || '', ...words.flatMap(v => [v.word, v.reading, v.meaning])].join(' ').toLowerCase()};
    });
  }
  function wordLabel(word) {
    const scene = scenes.find(entry => matches(word, entry.id));
    const topic = topics.find(entry => matches(word, entry.id));
    const special = specials.find(entry => matches(word, entry.id));
    return (scene || topic || special)?.label || '';
  }
  const api = {entries, scenes, topics, specials, matches, select, label, list, wordLabel};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.VocabularyCatalog = api;
})(typeof window !== 'undefined' ? window : globalThis);
