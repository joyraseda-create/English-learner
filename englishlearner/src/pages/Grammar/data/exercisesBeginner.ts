import type { GrammarExercise } from '../grammarData'

export const beginnerExercises: GrammarExercise[] = [
  // ===================== 初级练习 =====================

  // --- am-is-are (10题) ---
  { lessonId: 'am-is-are', type: 'choice', question: 'She ___ a teacher.', options: ['am', 'is', 'are', 'be'], answer: 'is', explanation: '第三人称单数 she 用 is。' },
  { lessonId: 'am-is-are', type: 'choice', question: 'They ___ very happy today.', options: ['is', 'am', 'are', 'be'], answer: 'are', explanation: '复数主语 they 用 are。' },
  { lessonId: 'am-is-are', type: 'fill', question: 'I ___ a student. (用 be 动词)', answer: 'am', explanation: '第一人称 I 用 am。' },
  { lessonId: 'am-is-are', type: 'correct', question: 'He are my friend.', answer: 'He is my friend.', explanation: '第三人称单数 he 用 is，不是 are。' },
  { lessonId: 'am-is-are', type: 'choice', question: '___ you from China?', options: ['Am', 'Is', 'Are', 'Be'], answer: 'Are', explanation: '第二人称 you 用 are，疑问句提前。' },
  { lessonId: 'am-is-are', type: 'choice', question: 'My brother ___ tall and strong.', options: ['am', 'is', 'are', 'be'], answer: 'is', explanation: 'my brother 是第三人称单数，用 is。' },
  { lessonId: 'am-is-are', type: 'fill', question: 'The students ___ in the classroom.', answer: 'are', explanation: 'students 是复数，用 are。' },
  { lessonId: 'am-is-are', type: 'correct', question: 'Tom and Jack is good friends.', answer: 'Tom and Jack are good friends.', explanation: '两个人是复数主语，用 are。' },
  { lessonId: 'am-is-are', type: 'choice', question: 'There ___ a book on the desk.', options: ['am', 'is', 'are', 'be'], answer: 'is', explanation: 'there be 句型中，a book 是单数，用 is。' },
  { lessonId: 'am-is-are', type: 'fill', question: '___ your mother at home? (用 be 动词)', answer: 'Is', explanation: 'your mother 是第三人称单数，疑问句用 Is。' },

  // --- present-continuous-beginner (10题) ---
  { lessonId: 'present-continuous-beginner', type: 'choice', question: 'Look! It ___ now.', options: ['rains', 'is raining', 'rain', 'rained'], answer: 'is raining', explanation: '"Look!" 提示正在发生，用现在进行时。' },
  { lessonId: 'present-continuous-beginner', type: 'fill', question: 'She ___ (read) a book at the moment.', answer: 'is reading', explanation: 'at the moment 提示此刻正在进行，用 is + reading。' },
  { lessonId: 'present-continuous-beginner', type: 'correct', question: 'I am go to school now.', answer: 'I am going to school now.', explanation: '现在进行时用 am + 动词-ing。' },
  { lessonId: 'present-continuous-beginner', type: 'choice', question: 'They ___ football in the park right now.', options: ['play', 'are playing', 'plays', 'played'], answer: 'are playing', explanation: 'right now 提示正在进行，用 are playing。' },
  { lessonId: 'present-continuous-beginner', type: 'fill', question: 'We ___ (have) dinner now.', answer: 'are having', explanation: 'now 提示正在进行，用 are having。' },
  { lessonId: 'present-continuous-beginner', type: 'choice', question: 'Listen! Someone ___ at the door.', options: ['knocks', 'is knocking', 'knock', 'knocked'], answer: 'is knocking', explanation: 'Listen! 提示正在发生，用现在进行时。' },
  { lessonId: 'present-continuous-beginner', type: 'fill', question: 'The children ___ (play) in the garden.', answer: 'are playing', explanation: 'children 是复数，用 are + playing。' },
  { lessonId: 'present-continuous-beginner', type: 'correct', question: 'He is swim in the pool.', answer: 'He is swimming in the pool.', explanation: 'swim 是重读闭音节，双写 m 加 -ing：swimming。' },
  { lessonId: 'present-continuous-beginner', type: 'choice', question: 'What ___ you ___ now?', options: ['do, do', 'are, doing', 'is, doing', 'are, do'], answer: 'are, doing', explanation: '现在进行时疑问句：be + 主语 + doing？' },
  { lessonId: 'present-continuous-beginner', type: 'fill', question: 'She ___ (not watch) TV. She is studying.', answer: "isn't watching", explanation: '现在进行时否定：be + not + doing。' },

  // --- present-simple-beginner (10题) ---
  { lessonId: 'present-simple-beginner', type: 'choice', question: 'She ___ in a hospital.', options: ['work', 'works', 'working', 'is working'], answer: 'works', explanation: '第三人称单数加 -s：works。' },
  { lessonId: 'present-simple-beginner', type: 'correct', question: "He don't like coffee.", answer: "He doesn't like coffee.", explanation: '第三人称单数否定用 doesn\'t，不用 don\'t。' },
  { lessonId: 'present-simple-beginner', type: 'fill', question: 'The sun ___ (rise) in the east.', answer: 'rises', explanation: '普遍真理用一般现在时，第三人称单数加 -s。' },
  { lessonId: 'present-simple-beginner', type: 'choice', question: '___ you play tennis every weekend?', options: ['Do', 'Does', 'Are', 'Is'], answer: 'Do', explanation: '第二人称 you 用 Do 提问。' },
  { lessonId: 'present-simple-beginner', type: 'fill', question: "My father usually ___ (get) up at 6 o'clock.", answer: 'gets', explanation: 'usually 表示习惯，第三人称单数加 -s。' },
  { lessonId: 'present-simple-beginner', type: 'choice', question: 'Water ___ at 100°C.', options: ['boil', 'boils', 'is boiling', 'boiled'], answer: 'boils', explanation: '客观真理用一般现在时，water 是第三人称单数。' },
  { lessonId: 'present-simple-beginner', type: 'fill', question: 'She ___ (not go) to school on Sundays.', answer: "doesn't go", explanation: '第三人称单数否定用 doesn\'t + 动词原形。' },
  { lessonId: 'present-simple-beginner', type: 'correct', question: 'He watchs TV every evening.', answer: 'He watches TV every evening.', explanation: '以 -ch 结尾的动词，第三人称单数加 -es：watches。' },
  { lessonId: 'present-simple-beginner', type: 'choice', question: '___ your brother like chocolate?', options: ['Do', 'Does', 'Is', 'Are'], answer: 'Does', explanation: 'your brother 是第三人称单数，用 Does 提问。' },
  { lessonId: 'present-simple-beginner', type: 'fill', question: 'I always ___ (brush) my teeth before going to bed.', answer: 'brush', explanation: '第一人称 I 用动词原形。' },

  // --- present-simple-vs-continuous (8题) ---
  { lessonId: 'present-simple-vs-continuous', type: 'choice', question: 'I usually ___ tea, but today I ___ coffee.', options: ['drink, drink', 'drink, am drinking', 'am drinking, drink', 'am drinking, am drinking'], answer: 'drink, am drinking', explanation: '通常的习惯用一般现在时，今天临时改变用进行时。' },
  { lessonId: 'present-simple-vs-continuous', type: 'correct', question: 'I am knowing the answer.', answer: 'I know the answer.', explanation: 'know 是状态动词，不用进行时。' },
  { lessonId: 'present-simple-vs-continuous', type: 'choice', question: 'She ___ in a bank, but she ___ working today.', options: ['works, isn\'t', 'works, doesn\'t', 'is working, isn\'t', 'work, isn\'t'], answer: "works, isn't", explanation: '工作地点是常态用一般现在时；今天不上班用进行时否定。' },
  { lessonId: 'present-simple-vs-continuous', type: 'fill', question: '___ you ___ (understand) this question?', answer: 'Do, understand', explanation: 'understand 是状态动词，用一般现在时。' },
  { lessonId: 'present-simple-vs-continuous', type: 'choice', question: 'Look! The baby ___. She usually ___ very well at night.', options: ['cries, sleeps', 'is crying, sleeps', 'cries, is sleeping', 'is crying, is sleeping'], answer: 'is crying, sleeps', explanation: '此刻正在哭用进行时；通常睡得好是习惯，用一般现在时。' },
  { lessonId: 'present-simple-vs-continuous', type: 'correct', question: 'I am having a car.', answer: 'I have a car.', explanation: 'have 表示"拥有"是状态，不用进行时。' },
  { lessonId: 'present-simple-vs-continuous', type: 'fill', question: 'He ___ (live) in Beijing. But he ___ (stay) in Shanghai this week.', answer: 'lives, is staying', explanation: '长期居住是状态用一般现在时；这周暂住是临时情况用进行时。' },
  { lessonId: 'present-simple-vs-continuous', type: 'choice', question: 'Which sentence is correct?', options: ['I am liking music.', 'I like music.', 'I liking music.', 'I am like music.'], answer: 'I like music.', explanation: 'like 是状态动词，不用进行时。' },

  // --- have-got (8题) ---
  { lessonId: 'have-got', type: 'choice', question: '___ you got a pen?', options: ['Do', 'Have', 'Are', 'Does'], answer: 'Have', explanation: 'have got 的疑问句把 have 提前。' },
  { lessonId: 'have-got', type: 'correct', question: 'She don\'t have got a car.', answer: "She doesn't have a car.", explanation: 'don\'t have got 是错误的，应改为 doesn\'t have 或 hasn\'t got。' },
  { lessonId: 'have-got', type: 'fill', question: 'I ___ got two sisters.', answer: 'have', explanation: '第一人称 I 用 have got。' },
  { lessonId: 'have-got', type: 'choice', question: 'She ___ got a beautiful dress.', options: ['have', 'has', 'is', 'does'], answer: 'has', explanation: '第三人称单数 she 用 has got。' },
  { lessonId: 'have-got', type: 'fill', question: '___ he got a bike?', answer: 'Has', explanation: '第三人称单数疑问句用 Has...got?。' },
  { lessonId: 'have-got', type: 'correct', question: 'He hasn\'t got some money.', answer: "He hasn't got any money.", explanation: '否定句中用 any，不用 some。' },
  { lessonId: 'have-got', type: 'choice', question: 'They ___ a big house.', options: ['have got', 'has got', 'are got', 'is got'], answer: 'have got', explanation: '复数主语 they 用 have got。' },
  { lessonId: 'have-got', type: 'fill', question: 'I ___ (not got) time to play today.', answer: "haven't got", explanation: '否定形式：haven\'t got。' },

  // --- past-simple-beginner (10题) ---
  { lessonId: 'past-simple-beginner', type: 'choice', question: 'She ___ a new car yesterday.', options: ['buy', 'buys', 'bought', 'buyed'], answer: 'bought', explanation: 'buy 的过去式是不规则变化 bought。' },
  { lessonId: 'past-simple-beginner', type: 'correct', question: "I didn't went there.", answer: "I didn't go there.", explanation: 'didn\'t 后接动词原形 go，不用 went。' },
  { lessonId: 'past-simple-beginner', type: 'fill', question: 'They ___ (go) to the cinema two days ago.', answer: 'went', explanation: 'ago 提示过去时，go 的过去式是 went。' },
  { lessonId: 'past-simple-beginner', type: 'choice', question: '___ she buy it yesterday?', options: ['Do', 'Does', 'Did', 'Was'], answer: 'Did', explanation: '过去时疑问用 Did + 动词原形。' },
  { lessonId: 'past-simple-beginner', type: 'correct', question: 'He studyed hard.', answer: 'He studied hard.', explanation: 'study → studied（辅音+y 变 ies）。' },
  { lessonId: 'past-simple-beginner', type: 'fill', question: 'I ___ (see) a movie last night.', answer: 'saw', explanation: 'see 的过去式是 saw（不规则变化）。' },
  { lessonId: 'past-simple-beginner', type: 'choice', question: 'We ___ a great party last weekend.', options: ['have', 'has', 'had', 'having'], answer: 'had', explanation: 'have 的过去式是 had。' },
  { lessonId: 'past-simple-beginner', type: 'correct', question: 'I was eat breakfast at 7.', answer: 'I ate breakfast at 7.', explanation: 'eat 的过去式是 ate，不用 was eat。' },
  { lessonId: 'past-simple-beginner', type: 'fill', question: 'She ___ (not come) to school yesterday.', answer: "didn't come", explanation: '过去时否定用 didn\'t + 动词原形。' },
  { lessonId: 'past-simple-beginner', type: 'choice', question: 'When ___ you ___ to this city?', options: ['did, move', 'do, move', 'did, moved', 'are, moving'], answer: 'did, move', explanation: '过去时疑问句：Did + 主语 + 动词原形？' },

  // --- past-continuous-beginner (8题) ---
  { lessonId: 'past-continuous-beginner', type: 'choice', question: 'I ___ TV at 8 pm yesterday.', options: ['watch', 'watched', 'was watching', 'am watching'], answer: 'was watching', explanation: '过去某时刻正在做，用 was + watching。' },
  { lessonId: 'past-continuous-beginner', type: 'correct', question: 'I were sleeping.', answer: 'I was sleeping.', explanation: '第一人称 I 用 was，不用 were。' },
  { lessonId: 'past-continuous-beginner', type: 'fill', question: 'While she ___ (cook), the phone rang.', answer: 'was cooking', explanation: 'while 引导的背景动作用过去进行时。' },
  { lessonId: 'past-continuous-beginner', type: 'choice', question: 'They ___ outside when it started to rain.', options: ['play', 'were playing', 'played', 'are playing'], answer: 'were playing', explanation: '过去正在进行的背景动作。' },
  { lessonId: 'past-continuous-beginner', type: 'fill', question: 'What ___ you ___ (do) at 9 o\'clock last night?', answer: 'were, doing', explanation: '过去某时刻正在做什么，用过去进行时疑问句。' },
  { lessonId: 'past-continuous-beginner', type: 'correct', question: 'He was read a book when I came in.', answer: 'He was reading a book when I came in.', explanation: '过去进行时用 was + 动词-ing。' },
  { lessonId: 'past-continuous-beginner', type: 'choice', question: 'She ___ when the lights went out.', options: ['studied', 'was studying', 'studies', 'is studying'], answer: 'was studying', explanation: '灯灭的时候她正在学习，用过去进行时。' },
  { lessonId: 'past-continuous-beginner', type: 'fill', question: 'They ___ (not sleep) at midnight. They were still chatting.', answer: "weren't sleeping", explanation: '过去进行时否定：were + not + doing。' },

  // --- past-simple-vs-continuous (8题) ---
  { lessonId: 'past-simple-vs-continuous', type: 'choice', question: 'I ___ when the phone ___.', options: ['was reading, rang', 'read, rang', 'was reading, was ringing', 'read, was ringing'], answer: 'was reading, rang', explanation: '背景用进行时，打断事件用一般过去时。' },
  { lessonId: 'past-simple-vs-continuous', type: 'correct', question: 'When I was arriving, he was leaving.', answer: 'When I arrived, he was leaving.', explanation: '到达是短暂动作用一般过去时，离开是正在进行的用进行时。' },
  { lessonId: 'past-simple-vs-continuous', type: 'fill', question: 'He ___ (break) his leg while he ___ (play) football.', answer: 'broke, was playing', explanation: '打断事件用一般过去时，背景用过去进行时。' },
  { lessonId: 'past-simple-vs-continuous', type: 'choice', question: 'While I ___ dinner, the phone ___.', options: ['had, rang', 'was having, rang', 'had, was ringing', 'was having, was ringing'], answer: 'was having, rang', explanation: '吃饭是持续动作用进行时，电话响是短暂动作用过去时。' },
  { lessonId: 'past-simple-vs-continuous', type: 'correct', question: 'I saw him while he walked to school.', answer: 'I saw him while he was walking to school.', explanation: '走路是持续的背景动作，用过去进行时。' },
  { lessonId: 'past-simple-vs-continuous', type: 'fill', question: 'She ___ (write) a letter when I ___ (visit) her.', answer: 'was writing, visited', explanation: '写信是背景动作（进行时），拜访是打断动作（过去时）。' },
  { lessonId: 'past-simple-vs-continuous', type: 'choice', question: 'He ___ to the park every day when he was young.', options: ['went', 'was going', 'goes', 'is going'], answer: 'went', explanation: '过去的习惯用一般过去时，不用过去进行时。' },
  { lessonId: 'past-simple-vs-continuous', type: 'correct', question: 'I was knowing him for many years.', answer: 'I knew him for many years.', explanation: 'know 是状态动词，不用进行时。' },

  // --- present-perfect-beginner (10题) ---
  { lessonId: 'present-perfect-beginner', type: 'choice', question: 'I ___ my homework.', options: ['finish', 'finished', 'have finished', 'am finishing'], answer: 'have finished', explanation: '对现在造成影响（作业已完成），用现在完成时。' },
  { lessonId: 'present-perfect-beginner', type: 'correct', question: 'I have seen him yesterday.', answer: 'I saw him yesterday.', explanation: '明确的过去时间 yesterday 用一般过去时。' },
  { lessonId: 'present-perfect-beginner', type: 'fill', question: 'She ___ (live) here for ten years.', answer: 'has lived', explanation: 'for ten years 表示持续到现在，用现在完成时。' },
  { lessonId: 'present-perfect-beginner', type: 'choice', question: '___ you ever ___ to Japan?', options: ['Did, go', 'Have, been', 'Have, gone', 'Do, go'], answer: 'Have, been', explanation: 'ever 提示用现在完成时，been to 表示去过。' },
  { lessonId: 'present-perfect-beginner', type: 'correct', question: 'She has went to Beijing.', answer: 'She has gone to Beijing.', explanation: '现在完成时用 has + 过去分词 gone，不是 went。' },
  { lessonId: 'present-perfect-beginner', type: 'fill', question: 'I ___ already ___ (see) this movie.', answer: 'have, seen', explanation: 'already 常与现在完成时连用。' },
  { lessonId: 'present-perfect-beginner', type: 'choice', question: 'She ___ Paris three times.', options: ['has been to', 'has gone to', 'went to', 'goes to'], answer: 'has been to', explanation: '去过三次（已返回）用 has been to。' },
  { lessonId: 'present-perfect-beginner', type: 'correct', question: 'I have lived here since three years.', answer: 'I have lived here for three years.', explanation: 'for + 时间段，since + 时间点。' },
  { lessonId: 'present-perfect-beginner', type: 'fill', question: '___ you ___ (finish) your homework yet?', answer: 'Have, finished', explanation: 'yet 用于现在完成时疑问句。' },
  { lessonId: 'present-perfect-beginner', type: 'choice', question: 'He ___ just ___ home.', options: ['has, arrived', 'is, arriving', 'did, arrive', 'was, arriving'], answer: 'has, arrived', explanation: 'just 表示刚刚发生，用现在完成时。' },

  // --- going-to-will (8题) ---
  { lessonId: 'going-to-will', type: 'choice', question: 'Look at those clouds! It ___ rain.', options: ['will', 'is going to', 'goes to', 'shall'], answer: 'is going to', explanation: '有迹象（乌云）的预测用 be going to。' },
  { lessonId: 'going-to-will', type: 'choice', question: '"Can you help me?" "Sure, I ___ help you."', options: ['will', 'am going to', 'go to', 'shall'], answer: 'will', explanation: '临时决定用 will。' },
  { lessonId: 'going-to-will', type: 'fill', question: 'I ___ (visit) my aunt tomorrow.（已计划）', answer: 'am going to visit', explanation: '已计划的将来用 be going to。' },
  { lessonId: 'going-to-will', type: 'correct', question: 'I will to go home.', answer: 'I will go home.', explanation: 'will 后接动词原形，不需要 to。' },
  { lessonId: 'going-to-will', type: 'choice', question: 'She ___ 21 next month.', options: ['will be', 'is going to be', 'is', 'was'], answer: 'will be', explanation: '将来必然会发生的用 will。' },
  { lessonId: 'going-to-will', type: 'fill', question: 'We ___ (have) a party next week. We\'ve already invited everyone.', answer: 'are going to have', explanation: '已计划安排好的用 be going to。' },
  { lessonId: 'going-to-will', type: 'correct', question: 'He wills come tomorrow.', answer: 'He will come tomorrow.', explanation: 'will 是情态动词，不加 -s。' },
  { lessonId: 'going-to-will', type: 'choice', question: 'I think people ___ live on Mars one day.', options: ['will', 'are going to', 'go to', 'shall'], answer: 'will', explanation: '对未来的预测、认为会发生用 will。' },

  // --- can-could (8题) ---
  { lessonId: 'can-could', type: 'correct', question: 'She can speaks French.', answer: 'She can speak French.', explanation: '情态动词后接动词原形，不加 -s。' },
  { lessonId: 'can-could', type: 'choice', question: '___ you help me, please?（委婉请求）', options: ['Can', 'Could', 'Must', 'Should'], answer: 'Could', explanation: 'Could you...? 比 Can you...? 更礼貌。' },
  { lessonId: 'can-could', type: 'fill', question: 'When I was young, I ___ (can) run very fast.', answer: 'could', explanation: '过去的能力用 could。' },
  { lessonId: 'can-could', type: 'choice', question: 'I ___ swim, but my brother ___.', options: ['can, can\'t', 'can, doesn\'t', 'am, isn\'t', 'can, can not'], answer: "can, can't", explanation: '表示能力用 can，否定用 can\'t。' },
  { lessonId: 'can-could', type: 'fill', question: '___ I use your phone?（请求许可）', answer: 'Can', explanation: 'Can I...? 表示请求许可。' },
  { lessonId: 'can-could', type: 'correct', question: 'He can to drive a car.', answer: 'He can drive a car.', explanation: 'can 后接动词原形，不加 to。' },
  { lessonId: 'can-could', type: 'choice', question: 'She ___ read when she was only 4 years old.', options: ['can', 'could', 'should', 'must'], answer: 'could', explanation: '过去的能力用 could。' },
  { lessonId: 'can-could', type: 'fill', question: 'I ___ (not) understand this question. It\'s too difficult.', answer: "can't", explanation: '不能、不会用 can\'t。' },

  // --- must-should (8题) ---
  { lessonId: 'must-should', type: 'correct', question: 'You must to go now.', answer: 'You must go now.', explanation: 'must 后接动词原形，不需要 to。' },
  { lessonId: 'must-should', type: 'choice', question: 'You ___ smoke here. It\'s forbidden.', options: ['mustn\'t', 'don\'t must', 'shouldn\'t', 'needn\'t'], answer: "mustn't", explanation: '禁止做某事用 mustn\'t。' },
  { lessonId: 'must-should', type: 'fill', question: 'You ___ (not) eat so much sugar. It\'s bad for you.（建议）', answer: "shouldn't", explanation: '建议不要做某事用 shouldn\'t。' },
  { lessonId: 'must-should', type: 'choice', question: 'We ___ study hard for the exam.', options: ['should', 'mustn\'t', 'can\'t', 'needn\'t'], answer: 'should', explanation: '表示建议、应该做某事用 should。' },
  { lessonId: 'must-should', type: 'fill', question: 'I ___ finish this report today. My boss needs it.', answer: 'must', explanation: '必须做（因为外界要求）用 must。' },
  { lessonId: 'must-should', type: 'correct', question: 'You don\'t must park here.', answer: "You mustn't park here.", explanation: 'must 的否定是 mustn\'t，不用 don\'t must。' },
  { lessonId: 'must-should', type: 'choice', question: 'You ___ see a doctor if you feel sick.', options: ['should', 'mustn\'t', 'can\'t', 'needn\'t'], answer: 'should', explanation: '建议看医生用 should。' },
  { lessonId: 'must-should', type: 'fill', question: 'Students ___ (not) use phones in class. It\'s the rule.', answer: "mustn't", explanation: '规定禁止做某事用 mustn\'t。' },

  // --- articles-a-an (8题) ---
  { lessonId: 'articles-a-an', type: 'choice', question: 'She is ___ honest person.', options: ['a', 'an', 'the', '-'], answer: 'an', explanation: 'honest 的 h 不发音，以元音开头用 an。' },
  { lessonId: 'articles-a-an', type: 'choice', question: 'He is ___ university student.', options: ['a', 'an', 'the', '-'], answer: 'a', explanation: 'university 发音以 /j/ 辅音开头，用 a。' },
  { lessonId: 'articles-a-an', type: 'fill', question: 'There is ___ umbrella on the table.', answer: 'an', explanation: 'umbrella 以元音开头用 an。' },
  { lessonId: 'articles-a-an', type: 'choice', question: 'I saw ___ elephant at the zoo.', options: ['a', 'an', 'the', '-'], answer: 'an', explanation: 'elephant 以元音音素开头，用 an。' },
  { lessonId: 'articles-a-an', type: 'fill', question: 'She has ___ useful book.', answer: 'a', explanation: 'useful 发音以 /j/ 辅音开头，用 a。' },
  { lessonId: 'articles-a-an', type: 'correct', question: 'I have a apple.', answer: 'I have an apple.', explanation: 'apple 以元音开头，用 an。' },
  { lessonId: 'articles-a-an', type: 'choice', question: 'It is ___ easy question.', options: ['a', 'an', 'the', '-'], answer: 'an', explanation: 'easy 以元音音素开头，用 an。' },
  { lessonId: 'articles-a-an', type: 'fill', question: 'There is ___ "s" in the word "bus".', answer: 'an', explanation: '字母 s 发音以元音开头，用 an。' },

  // --- articles-the (8题) ---
  { lessonId: 'articles-the', type: 'choice', question: 'I play ___ basketball every weekend.', options: ['a', 'an', 'the', '-'], answer: '-', explanation: '球类运动前不加冠词。' },
  { lessonId: 'articles-the', type: 'correct', question: 'She plays piano.', answer: 'She plays the piano.', explanation: '乐器前要加 the。' },
  { lessonId: 'articles-the', type: 'fill', question: '___ sun is bright today.', answer: 'The', explanation: '独一无二的事物前加 the。' },
  { lessonId: 'articles-the', type: 'choice', question: 'This is ___ best movie I have ever seen.', options: ['a', 'an', 'the', '-'], answer: 'the', explanation: '形容词最高级前要加 the。' },
  { lessonId: 'articles-the', type: 'fill', question: 'He goes to ___ school every day.', answer: '-', explanation: 'go to school 是固定搭配，不加 the。' },
  { lessonId: 'articles-the', type: 'correct', question: 'The Earth is round.', answer: 'The Earth is round.', explanation: 'Earth 是独一无二的，加 the。（此句本身正确，体会用法）' },
  { lessonId: 'articles-the', type: 'choice', question: 'She is ___ tallest girl in our class.', options: ['a', 'an', 'the', '-'], answer: 'the', explanation: 'tallest 是最高级，前面加 the。' },
  { lessonId: 'articles-the', type: 'fill', question: 'My mother is in ___ hospital.（生病住院）', answer: '-', explanation: 'in hospital 表示住院，不加 the。' },

  // --- some-any (8题) ---
  { lessonId: 'some-any', type: 'choice', question: 'I didn\'t buy ___ oranges.', options: ['some', 'any', 'a', 'much'], answer: 'any', explanation: '否定句用 any。' },
  { lessonId: 'some-any', type: 'correct', question: 'I don\'t have some money.', answer: "I don't have any money.", explanation: '否定句用 any，不用 some。' },
  { lessonId: 'some-any', type: 'choice', question: 'Would you like ___ coffee?', options: ['any', 'some', 'a', 'much'], answer: 'some', explanation: '礼貌请求中用 some。' },
  { lessonId: 'some-any', type: 'fill', question: 'I have ___ good news for you.', answer: 'some', explanation: '肯定句中用 some。' },
  { lessonId: 'some-any', type: 'choice', question: 'Are there ___ students in the classroom?', options: ['some', 'any', 'much', 'little'], answer: 'any', explanation: '一般疑问句用 any。' },
  { lessonId: 'some-any', type: 'correct', question: 'I need any help.', answer: 'I need some help.', explanation: '肯定句用 some，不用 any。' },
  { lessonId: 'some-any', type: 'fill', question: 'There aren\'t ___ people in the park today.', answer: 'any', explanation: '否定句用 any。' },
  { lessonId: 'some-any', type: 'choice', question: 'Can I have ___ water, please?', options: ['some', 'any', 'many', 'few'], answer: 'some', explanation: '请求并希望得到肯定回答用 some。' },

  // --- comparatives (8题) ---
  { lessonId: 'comparatives', type: 'correct', question: 'She is more tall than him.', answer: 'She is taller than him.', explanation: 'tall 是短形容词，加 -er，不用 more。' },
  { lessonId: 'comparatives', type: 'choice', question: 'This book is ___ than that one.', options: ['interestinger', 'more interesting', 'most interesting', 'more interestinger'], answer: 'more interesting', explanation: 'interesting 是多音节词，用 more。' },
  { lessonId: 'comparatives', type: 'fill', question: 'Today is ___ (good) than yesterday.', answer: 'better', explanation: 'good 的比较级是 better。' },
  { lessonId: 'comparatives', type: 'choice', question: 'My sister is ___ than me.', options: ['more young', 'younger', 'youngest', 'more younger'], answer: 'younger', explanation: 'young 是单音节词，加 -er。' },
  { lessonId: 'comparatives', type: 'fill', question: 'This test is ___ (difficult) than the last one.', answer: 'more difficult', explanation: 'difficult 是多音节词，比较级用 more difficult。' },
  { lessonId: 'comparatives', type: 'correct', question: 'He is more stronger than me.', answer: 'He is stronger than me.', explanation: 'strong 是单音节词，直接加 -er，不用 more。' },
  { lessonId: 'comparatives', type: 'choice', question: 'The weather is ___ today than yesterday.', options: ['bad', 'worse', 'worst', 'more bad'], answer: 'worse', explanation: 'bad 的比较级是 worse（不规则变化）。' },
  { lessonId: 'comparatives', type: 'fill', question: 'She is ___ (happy) now than before.', answer: 'happier', explanation: 'happy → happier（辅音+y 变 ier）。' },

  // --- superlatives (8题) ---
  { lessonId: 'superlatives', type: 'correct', question: 'She is the most tall in the class.', answer: 'She is the tallest in the class.', explanation: 'tall 加 -est，不用 most。' },
  { lessonId: 'superlatives', type: 'choice', question: 'She is ___ girl I have ever seen.', options: ['the beautiful', 'the most beautiful', 'most beautiful', 'the more beautiful'], answer: 'the most beautiful', explanation: '多音节词用 most，最高级前加 the。' },
  { lessonId: 'superlatives', type: 'fill', question: 'This is the ___ (good) restaurant in town.', answer: 'best', explanation: 'good 的最高级是 best。' },
  { lessonId: 'superlatives', type: 'choice', question: 'Tom is ___ student in our class.', options: ['the smartest', 'the most smart', 'smarter', 'more smart'], answer: 'the smartest', explanation: 'smart 是单音节词，最高级加 -est，前面加 the。' },
  { lessonId: 'superlatives', type: 'fill', question: 'That was the ___ (bad) movie I have ever seen.', answer: 'worst', explanation: 'bad 的最高级是 worst（不规则变化）。' },
  { lessonId: 'superlatives', type: 'correct', question: 'He is most handsome boy in school.', answer: 'He is the most handsome boy in school.', explanation: '最高级前必须加 the。' },
  { lessonId: 'superlatives', type: 'choice', question: 'This is ___ day of my life!', options: ['the happiest', 'happiest', 'more happy', 'the most happy'], answer: 'the happiest', explanation: 'happy 的最高级是 the happiest。' },
  { lessonId: 'superlatives', type: 'fill', question: 'Which is ___ (long) river in the world?', answer: 'the longest', explanation: 'long 的最高级是 the longest。' },

  // --- possessive-s (8题) ---
  { lessonId: 'possessive-s', type: 'correct', question: 'This is my fathers car.', answer: "This is my father's car.", explanation: '单数名词所有格加 \'s。' },
  { lessonId: 'possessive-s', type: 'fill', question: 'The ___ (students) books are on the desk.', answer: "students'", explanation: '以 s 结尾的复数名词只加 \'。' },
  { lessonId: 'possessive-s', type: 'choice', question: 'This is ___ bag.', options: ['Lucys', 'Lucy\'s', 'Lucy', 'Lucys\''], answer: "Lucy's", explanation: '单数人名所有格加 \'s。' },
  { lessonId: 'possessive-s', type: 'fill', question: 'That is my ___ (sister) room.', answer: "sister's", explanation: '单数名词所有格加 \'s。' },
  { lessonId: 'possessive-s', type: 'correct', question: 'The mens room is over there.', answer: "The men's room is over there.", explanation: 'men 是不规则复数，所有格加 \'s。' },
  { lessonId: 'possessive-s', type: 'choice', question: 'Whose book is this? It\'s ___.', options: ['James', 'James\'', 'James\'s', 'Jame\'s'], answer: "James'", explanation: '以 s 结尾的人名，所有格可以只加 \'。' },
  { lessonId: 'possessive-s', type: 'fill', question: 'The ___ (children) toys are everywhere.', answer: "children's", explanation: 'children 是不规则复数，所有格加 \'s。' },
  { lessonId: 'possessive-s', type: 'correct', question: 'This is the house of my friend.', answer: "This is my friend's house.", explanation: '有生命的名词所有格通常用 \'s，不用 of。' },

  // --- object-pronouns (8题) ---
  { lessonId: 'object-pronouns', type: 'correct', question: 'He gave the book to she.', answer: 'He gave the book to her.', explanation: '介词 to 后用宾格 her。' },
  { lessonId: 'object-pronouns', type: 'choice', question: 'Come with ___!', options: ['I', 'me', 'my', 'mine'], answer: 'me', explanation: '介词 with 后用宾格 me。' },
  { lessonId: 'object-pronouns', type: 'fill', question: 'Can you help ___ (I)? I need help.', answer: 'me', explanation: '动词 help 后用宾格 me。' },
  { lessonId: 'object-pronouns', type: 'choice', question: 'Please tell ___ the truth.', options: ['he', 'him', 'his', 'himself'], answer: 'him', explanation: '动词 tell 后用宾格 him。' },
  { lessonId: 'object-pronouns', type: 'correct', question: 'I and she are good friends.', answer: 'She and I are good friends.', explanation: '主语用主格 I，且通常把 I 放在后面。' },
  { lessonId: 'object-pronouns', type: 'choice', question: 'The teacher gave ___ a good grade.', options: ['they', 'them', 'their', 'theirs'], answer: 'them', explanation: '动词 gave 后用宾格 them。' },
  { lessonId: 'object-pronouns', type: 'fill', question: 'I don\'t know ___ (she). Who is she?', answer: 'her', explanation: '动词 know 后用宾格 her。' },
  { lessonId: 'object-pronouns', type: 'correct', question: 'My mother bought I a new phone.', answer: 'My mother bought me a new phone.', explanation: 'bought 后用宾格 me。' },

  // --- quantifiers-beginner (8题) ---
  { lessonId: 'quantifiers-beginner', type: 'correct', question: 'How much books do you have?', answer: 'How many books do you have?', explanation: 'books 是可数名词，用 many。' },
  { lessonId: 'quantifiers-beginner', type: 'choice', question: 'There isn\'t ___ water left.', options: ['many', 'much', 'a lot', 'few'], answer: 'much', explanation: 'water 是不可数名词，用 much。' },
  { lessonId: 'quantifiers-beginner', type: 'fill', question: 'I have ___ (a lot) friends.', answer: 'a lot of', explanation: '肯定句中修饰可数名词用 a lot of。' },
  { lessonId: 'quantifiers-beginner', type: 'choice', question: 'How ___ money do you need?', options: ['many', 'much', 'a lot', 'few'], answer: 'much', explanation: 'money 是不可数名词，用 much。' },
  { lessonId: 'quantifiers-beginner', type: 'fill', question: 'There are ___ (很多) apples in the basket.', answer: 'a lot of', explanation: 'a lot of 可修饰可数名词复数。' },
  { lessonId: 'quantifiers-beginner', type: 'correct', question: 'There are much students in the library.', answer: 'There are many students in the library.', explanation: 'students 是可数名词复数，用 many。' },
  { lessonId: 'quantifiers-beginner', type: 'choice', question: 'I have very ___ time. I must go now.', options: ['few', 'little', 'a few', 'a little'], answer: 'little', explanation: 'time 是不可数名词，且表示"几乎没有"用 little。' },
  { lessonId: 'quantifiers-beginner', type: 'fill', question: 'I have ___ (几个) good friends here.', answer: 'a few', explanation: 'few 修饰可数名词，a few 表示"有几个"。' },

  // --- prepositions-place (8题) ---
  { lessonId: 'prepositions-place', type: 'choice', question: 'She is ___ the bus stop.', options: ['in', 'at', 'on', 'to'], answer: 'at', explanation: '具体地点点用 at。' },
  { lessonId: 'prepositions-place', type: 'correct', question: 'The cat is in the table.', answer: 'The cat is on the table.', explanation: '在桌面上用 on。' },
  { lessonId: 'prepositions-place', type: 'fill', question: 'I live ___ Shanghai.', answer: 'in', explanation: '大城市前用 in。' },
  { lessonId: 'prepositions-place', type: 'choice', question: 'The picture is ___ the wall.', options: ['in', 'on', 'at', 'by'], answer: 'on', explanation: '在墙的表面上用 on。' },
  { lessonId: 'prepositions-place', type: 'fill', question: 'She sits ___ me in class.（在我旁边）', answer: 'beside', explanation: '在...旁边用 beside。' },
  { lessonId: 'prepositions-place', type: 'correct', question: 'He works on London.', answer: 'He works in London.', explanation: '在城市里用 in。' },
  { lessonId: 'prepositions-place', type: 'choice', question: 'The bank is ___ the corner of the street.', options: ['in', 'on', 'at', 'to'], answer: 'on', explanation: '在街角用 on the corner。' },
  { lessonId: 'prepositions-place', type: 'fill', question: 'The keys are ___ the drawer.（在...里面）', answer: 'in', explanation: '在内部用 in。' },

  // --- prepositions-time (8题) ---
  { lessonId: 'prepositions-time', type: 'correct', question: 'I was born on 2000.', answer: 'I was born in 2000.', explanation: '年份用 in。' },
  { lessonId: 'prepositions-time', type: 'choice', question: 'I get up ___ 6 o\'clock.', options: ['in', 'on', 'at', 'by'], answer: 'at', explanation: '具体时刻用 at。' },
  { lessonId: 'prepositions-time', type: 'fill', question: 'We will meet ___ Sunday.', answer: 'on', explanation: '具体某天用 on。' },
  { lessonId: 'prepositions-time', type: 'choice', question: 'She came here ___ last week.', options: ['in', 'on', 'at', '-'], answer: '-', explanation: 'last week/this week/next week 前不加介词。' },
  { lessonId: 'prepositions-time', type: 'fill', question: 'I will finish the work ___ two days.', answer: 'in', explanation: 'in + 时间段，表示"在...之后"（将来时）。' },
  { lessonId: 'prepositions-time', type: 'correct', question: 'I go to school in the morning.', answer: 'I go to school in the morning.', explanation: 'in the morning 是固定搭配。（此句正确，体会用法）' },
  { lessonId: 'prepositions-time', type: 'choice', question: 'We have lunch ___ noon.', options: ['in', 'on', 'at', 'by'], answer: 'at', explanation: 'at noon 在中午。' },
  { lessonId: 'prepositions-time', type: 'fill', question: 'Her birthday is ___ May 5th.', answer: 'on', explanation: '具体某日用 on。' },

  // --- passive-voice-beginner (8题) ---
  { lessonId: 'passive-voice-beginner', type: 'correct', question: 'The book wrote by him.', answer: 'The book was written by him.', explanation: '被动语态用 be + 过去分词，was written。' },
  { lessonId: 'passive-voice-beginner', type: 'choice', question: 'English ___ all over the world.', options: ['speaks', 'is spoken', 'spoke', 'is speaking'], answer: 'is spoken', explanation: '被动语态：is + spoken。' },
  { lessonId: 'passive-voice-beginner', type: 'fill', question: 'The bridge ___ (build) in 1990.', answer: 'was built', explanation: '过去被动用 was + built。' },
  { lessonId: 'passive-voice-beginner', type: 'choice', question: 'These cars ___ in Germany.', options: ['make', 'made', 'are made', 'is made'], answer: 'are made', explanation: '复数主语的现在时被动：are + made。' },
  { lessonId: 'passive-voice-beginner', type: 'fill', question: 'The letter ___ (send) yesterday.', answer: 'was sent', explanation: '过去时被动：was + sent（send 的过去分词）。' },
  { lessonId: 'passive-voice-beginner', type: 'correct', question: 'The song sing by her.', answer: 'The song is sung by her.', explanation: '被动语态：be + 过去分词 sung。' },
  { lessonId: 'passive-voice-beginner', type: 'choice', question: 'The homework ___ already.', options: ['has finished', 'has been finished', 'finished', 'is finishing'], answer: 'has been finished', explanation: '现在完成时被动：has been + 过去分词。' },
  { lessonId: 'passive-voice-beginner', type: 'fill', question: 'The trees ___ (water) every day.', answer: 'are watered', explanation: '一般现在时被动：are + watered。' },

  // --- relative-clauses-beginner (8题) ---
  { lessonId: 'relative-clauses-beginner', type: 'correct', question: 'The man which is tall is my teacher.', answer: 'The man who/that is tall is my teacher.', explanation: '修饰人用 who 或 that，不用 which。' },
  { lessonId: 'relative-clauses-beginner', type: 'choice', question: 'This is the book ___ I bought yesterday.', options: ['who', 'which', 'what', 'whom'], answer: 'which', explanation: '修饰物用 which 或 that。' },
  { lessonId: 'relative-clauses-beginner', type: 'fill', question: 'I know a girl ___ can speak Chinese.', answer: 'who', explanation: '修饰人用 who。' },
  { lessonId: 'relative-clauses-beginner', type: 'choice', question: 'The movie ___ we watched was great.', options: ['who', 'which', 'what', 'whom'], answer: 'which', explanation: '修饰物（movie）用 which 或 that。' },
  { lessonId: 'relative-clauses-beginner', type: 'fill', question: 'The girl ___ is wearing a red dress is my sister.', answer: 'who', explanation: '修饰人（girl）用 who。' },
  { lessonId: 'relative-clauses-beginner', type: 'correct', question: 'I like the music who he plays.', answer: 'I like the music which/that he plays.', explanation: '修饰物（music）用 which 或 that，不用 who。' },
  { lessonId: 'relative-clauses-beginner', type: 'choice', question: 'Do you know the man ___ lives next door?', options: ['who', 'which', 'what', 'whom'], answer: 'who', explanation: '修饰人（man）用 who。' },
  { lessonId: 'relative-clauses-beginner', type: 'fill', question: 'This is the cat ___ I found yesterday.', answer: 'which/that', explanation: '修饰物（cat）用 which 或 that。' },
]
