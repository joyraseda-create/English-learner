import type { GrammarExercise } from '../grammarData'

export const intermediateExercises: GrammarExercise[] = [
  // ===================== 中级练习 =====================

  // --- present-perfect-continuous (8题) ---
  { lessonId: 'present-perfect-continuous', type: 'correct', question: 'I have been read this book.', answer: 'I have been reading this book.', explanation: '完成进行时用 have been + 动词-ing。' },
  { lessonId: 'present-perfect-continuous', type: 'choice', question: 'I ___ English for three hours.', options: ['have studied', 'have been studying', 'am studying', 'studied'], answer: 'have been studying', explanation: '持续到现在的动作用现在完成进行时。' },
  { lessonId: 'present-perfect-continuous', type: 'fill', question: 'It ___ (rain) all day.', answer: 'has been raining', explanation: '一整天持续下雨用 has been raining。' },
  { lessonId: 'present-perfect-continuous', type: 'choice', question: 'She looks tired. She ___ all night.', options: ['has worked', 'has been working', 'is working', 'works'], answer: 'has been working', explanation: '强调持续的过程（导致现在累），用完成进行时。' },
  { lessonId: 'present-perfect-continuous', type: 'fill', question: 'How long ___ you ___ (learn) English?', answer: 'have, been learning', explanation: '询问持续多久的动作，用现在完成进行时。' },
  { lessonId: 'present-perfect-continuous', type: 'correct', question: 'She has been work here since 2020.', answer: 'She has been working here since 2020.', explanation: 'have been + 动词-ing，不是动词原形。' },
  { lessonId: 'present-perfect-continuous', type: 'choice', question: 'I\'m out of breath. I ___.', options: ['have run', 'have been running', 'am running', 'ran'], answer: 'have been running', explanation: '刚结束的动作但强调过程和现在的结果，用完成进行时。' },
  { lessonId: 'present-perfect-continuous', type: 'fill', question: 'They ___ (build) the bridge for two years and it\'s still not finished.', answer: 'have been building', explanation: '未完成且还在继续的动作，用现在完成进行时。' },

  // --- present-perfect-vs-simple (8题) ---
  { lessonId: 'present-perfect-vs-simple', type: 'correct', question: 'I have seen him yesterday.', answer: 'I saw him yesterday.', explanation: '明确的过去时间用一般过去时。' },
  { lessonId: 'present-perfect-vs-simple', type: 'choice', question: 'I ___ my keys. I can\'t open the door.', options: ['lost', 'have lost', 'was losing', 'had lost'], answer: 'have lost', explanation: '影响持续到现在（打不开门），用现在完成时。' },
  { lessonId: 'present-perfect-vs-simple', type: 'fill', question: 'She ___ (never, be) to Paris.', answer: 'has never been', explanation: 'never 提示到现在为止，用现在完成时。' },
  { lessonId: 'present-perfect-vs-simple', type: 'choice', question: 'I ___ five books this month.', options: ['read', 'have read', 'was reading', 'had read'], answer: 'have read', explanation: 'this month 是到现在为止的时间段，用现在完成时。' },
  { lessonId: 'present-perfect-vs-simple', type: 'fill', question: 'He ___ (write) three letters this morning. He finished at noon.', answer: 'wrote', explanation: 'this morning 如果已经过去，用一般过去时。' },
  { lessonId: 'present-perfect-vs-simple', type: 'correct', question: 'I have finished my homework yesterday.', answer: 'I finished my homework yesterday.', explanation: 'yesterday 是明确的过去时间，用一般过去时。' },
  { lessonId: 'present-perfect-vs-simple', type: 'choice', question: 'She ___ here since 2015.', options: ['lives', 'has lived', 'lived', 'is living'], answer: 'has lived', explanation: 'since + 时间点，用现在完成时。' },
  { lessonId: 'present-perfect-vs-simple', type: 'fill', question: 'I ___ (see) that movie last week.', answer: 'saw', explanation: 'last week 是明确的过去时间，用一般过去时。' },

  // --- past-perfect-intermediate (8题) ---
  { lessonId: 'past-perfect-intermediate', type: 'correct', question: 'When I arrived, he left.', answer: 'When I arrived, he had left.', explanation: '先离开用过去完成时 had left。' },
  { lessonId: 'past-perfect-intermediate', type: 'choice', question: 'By the time we arrived, the movie ___.', options: ['started', 'had started', 'has started', 'was starting'], answer: 'had started', explanation: '在到达之前已开始，用过去完成时。' },
  { lessonId: 'past-perfect-intermediate', type: 'fill', question: 'When I got home, I realized I ___ (lose) my wallet.', answer: 'had lost', explanation: '丢钱包发生在到家之前，用过去完成时。' },
  { lessonId: 'past-perfect-intermediate', type: 'choice', question: 'She couldn\'t get in because she ___ her keys.', options: ['forgot', 'had forgotten', 'has forgotten', 'was forgetting'], answer: 'had forgotten', explanation: '忘钥匙发生在进不去之前，用过去完成时。' },
  { lessonId: 'past-perfect-intermediate', type: 'fill', question: 'After I ___ (finish) dinner, I went to bed.', answer: 'had finished', explanation: '吃完饭发生在睡觉之前，用过去完成时。' },
  { lessonId: 'past-perfect-intermediate', type: 'correct', question: 'He said he has finished the work.', answer: 'He said he had finished the work.', explanation: '间接引语中，现在完成时变为过去完成时。' },
  { lessonId: 'past-perfect-intermediate', type: 'choice', question: 'I had never ___ sushi before I went to Japan.', options: ['eat', 'ate', 'eaten', 'eating'], answer: 'eaten', explanation: '过去完成时：had + 过去分词 eaten。' },
  { lessonId: 'past-perfect-intermediate', type: 'fill', question: 'By 10 o\'clock, he ___ (already, leave).', answer: 'had already left', explanation: 'by + 过去时间点，用过去完成时。' },

  // --- used-to (8题) ---
  { lessonId: 'used-to', type: 'correct', question: 'I used to playing tennis.', answer: 'I used to play tennis.', explanation: 'used to 后接动词原形，不是 -ing。' },
  { lessonId: 'used-to', type: 'choice', question: 'Did you ___ live here?', options: ['used to', 'use to', 'using to', 'uses to'], answer: 'use to', explanation: '疑问句用 Did + use to。' },
  { lessonId: 'used-to', type: 'fill', question: 'I am used to ___ (get) up early.（习惯于）', answer: 'getting', explanation: 'be used to + doing 表示"习惯于"。' },
  { lessonId: 'used-to', type: 'choice', question: 'She ___ be shy, but now she is very outgoing.', options: ['used to', 'use to', 'is used to', 'was used to'], answer: 'used to', explanation: '过去曾经（现在不这样了）用 used to + 动词原形。' },
  { lessonId: 'used-to', type: 'fill', question: 'I ___ (not use to) like coffee, but now I drink it every day.', answer: "didn't use to", explanation: 'used to 的否定是 didn\'t use to。' },
  { lessonId: 'used-to', type: 'correct', question: 'I am used to wake up early.', answer: 'I am used to waking up early.', explanation: 'be used to 后接 doing，不是动词原形。' },
  { lessonId: 'used-to', type: 'choice', question: 'He ___ living in the countryside now.', options: ['used to', 'is used to', 'use to', 'was used to'], answer: 'is used to', explanation: '习惯于做某事用 be used to + doing。' },
  { lessonId: 'used-to', type: 'fill', question: 'There ___ (use to) be a park here.（过去曾经有）', answer: 'used to', explanation: 'there used to be 表示过去曾经有。' },

  // --- future-forms (8题) ---
  { lessonId: 'future-forms', type: 'correct', question: 'When he will arrive, I tell him.', answer: 'When he arrives, I will tell him.', explanation: '时间状语从句中用一般现在时表将来。' },
  { lessonId: 'future-forms', type: 'choice', question: 'We ___ to Tokyo on Monday.（已安排）', options: ['will fly', 'are flying', 'fly', 'flew'], answer: 'are flying', explanation: '已安排好的将来用现在进行时。' },
  { lessonId: 'future-forms', type: 'fill', question: 'I ___ (think) it will rain tomorrow.', answer: 'think', explanation: 'I think 后接 will 表预测。' },
  { lessonId: 'future-forms', type: 'choice', question: 'Look at the sky! It ___ snow.', options: ['will', 'is going to', 'snows', 'shall'], answer: 'is going to', explanation: '有迹象的预测用 be going to。' },
  { lessonId: 'future-forms', type: 'fill', question: 'The train ___ (leave) at 8:30 tomorrow morning.', answer: 'leaves', explanation: '按时刻表发生的用一般现在时表将来。' },
  { lessonId: 'future-forms', type: 'correct', question: 'I will go to the party if I will have time.', answer: 'I will go to the party if I have time.', explanation: 'if 条件句中用一般现在时表将来。' },
  { lessonId: 'future-forms', type: 'choice', question: 'I promise I ___ you tomorrow.', options: ['call', 'will call', 'am calling', 'am going to call'], answer: 'will call', explanation: '承诺用 will。' },
  { lessonId: 'future-forms', type: 'fill', question: 'What ___ you ___ (do) this weekend?（问计划安排）', answer: 'are, doing', explanation: '问计划安排用现在进行时。' },

  // --- future-continuous-perfect (8题) ---
  { lessonId: 'future-continuous-perfect', type: 'correct', question: 'This time tomorrow I will fly to Paris.', answer: 'This time tomorrow I will be flying to Paris.', explanation: '将来某时刻正在进行用将来进行时。' },
  { lessonId: 'future-continuous-perfect', type: 'choice', question: 'By next month, she ___ graduated.', options: ['will', 'will be', 'will have', 'has'], answer: 'will have', explanation: '将来之前已完成用 will have + 过去分词。' },
  { lessonId: 'future-continuous-perfect', type: 'fill', question: 'This time next week, I ___ (lie) on a beach in Hawaii.', answer: "will be lying", explanation: '将来某时刻正在做某事，用将来进行时。' },
  { lessonId: 'future-continuous-perfect', type: 'choice', question: 'By the end of the year, I ___ this book.', options: ['will finish', 'will have finished', 'finish', 'am finishing'], answer: 'will have finished', explanation: 'by the end of + 将来时间，用将来完成时。' },
  { lessonId: 'future-continuous-perfect', type: 'fill', question: 'Don\'t call me at 7. I ___ (have) dinner then.', answer: "will be having", explanation: '将来某时刻正在进行，用将来进行时。' },
  { lessonId: 'future-continuous-perfect', type: 'correct', question: 'By 2030, he will work here for 20 years.', answer: 'By 2030, he will have been working here for 20 years.', explanation: '到将来某时为止持续了多久，用将来完成进行时。' },
  { lessonId: 'future-continuous-perfect', type: 'choice', question: 'She ___ for you when you arrive.', options: ['will wait', 'will be waiting', 'waits', 'has waited'], answer: 'will be waiting', explanation: '你到达时她将正在等你，用将来进行时。' },
  { lessonId: 'future-continuous-perfect', type: 'fill', question: 'By next summer, they ___ (build) the new hospital.', answer: "will have built", explanation: '到明年夏天为止完成，用将来完成时。' },

  // --- modals-deduction (8题) ---
  { lessonId: 'modals-deduction', type: 'correct', question: 'He mustn\'t be at home. The lights are on.', answer: "He can't be at home. The lights are on.", explanation: '表否定推测用 can\'t，mustn\'t 表示禁止。' },
  { lessonId: 'modals-deduction', type: 'choice', question: 'The ground is wet. It ___ rained last night.', options: ['must have', 'can\'t have', 'might', 'should'], answer: 'must have', explanation: '有根据的肯定推测用 must have + 过去分词。' },
  { lessonId: 'modals-deduction', type: 'fill', question: 'He ___ (might, be) in the office.（不确定推测）', answer: 'might be', explanation: '可能性推测用 might + 动词原形。' },
  { lessonId: 'modals-deduction', type: 'choice', question: 'She looks very young. She ___ over 30.', options: ['must be', 'can\'t be', 'might be', 'should be'], answer: "can't be", explanation: '否定推测（不可能）用 can\'t。' },
  { lessonId: 'modals-deduction', type: 'fill', question: 'The phone is ringing. It ___ (must, be) Tom. He said he would call.', answer: 'must be', explanation: '肯定的推测用 must + 动词原形。' },
  { lessonId: 'modals-deduction', type: 'correct', question: 'He must have eat something bad.', answer: 'He must have eaten something bad.', explanation: 'must have + 过去分词，eat → eaten。' },
  { lessonId: 'modals-deduction', type: 'choice', question: 'I don\'t know where she is. She ___ shopping.', options: ['must have gone', 'might have gone', 'can\'t have gone', 'should have gone'], answer: 'might have gone', explanation: '不确定的过去推测用 might have + 过去分词。' },
  { lessonId: 'modals-deduction', type: 'fill', question: 'You ___ (can\'t, be) serious! That can\'t be true.', answer: "can't be", explanation: '表示不相信、不可能，用 can\'t be。' },

  // --- should-have (8题) ---
  { lessonId: 'should-have', type: 'correct', question: 'You should studied harder.', answer: 'You should have studied harder.', explanation: '对过去的评价用 should have + 过去分词。' },
  { lessonId: 'should-have', type: 'choice', question: 'I ___ so much. I feel sick now.', options: ['should eat', 'shouldn\'t have eaten', 'should have eaten', 'shouldn\'t eat'], answer: "shouldn't have eaten", explanation: '本不该吃（但吃了）用 shouldn\'t have + 过去分词。' },
  { lessonId: 'should-have', type: 'fill', question: 'You ___ (should, tell) me about the meeting. I missed it.', answer: 'should have told', explanation: '本应该告诉（但没告诉）用 should have + 过去分词。' },
  { lessonId: 'should-have', type: 'choice', question: 'He failed the exam. He ___ harder.', options: ['should study', 'should have studied', 'must study', 'had to study'], answer: 'should have studied', explanation: '本应该更努力（但没努力）用 should have studied。' },
  { lessonId: 'should-have', type: 'fill', question: 'I ___ (not, should) watch TV last night. I had too much homework.', answer: "shouldn't have watched", explanation: '本不该看电视（但看了）用 shouldn\'t have + 过去分词。' },
  { lessonId: 'should-have', type: 'correct', question: 'You should had come earlier.', answer: 'You should have come earlier.', explanation: 'should have + 过去分词，不用 had。' },
  { lessonId: 'should-have', type: 'choice', question: 'The movie was great! You ___ it.', options: ['should see', 'should have seen', 'must see', 'had to see'], answer: 'should have seen', explanation: '本应该看（但没看）用 should have seen。' },
  { lessonId: 'should-have', type: 'fill', question: 'She ___ (could, pass) the test if she had studied harder.', answer: 'could have passed', explanation: '本能够通过（但没通过）用 could have + 过去分词。' },

  // --- have-to (8题) ---
  { lessonId: 'have-to', type: 'correct', question: 'I must to go now.', answer: 'I must go now.', explanation: 'must 后接动词原形。' },
  { lessonId: 'have-to', type: 'choice', question: 'Yesterday I ___ stay home.', options: ['must', 'have to', 'had to', 'must to'], answer: 'had to', explanation: 'must 的过去式用 had to。' },
  { lessonId: 'have-to', type: 'fill', question: 'She ___ (not have to) work on weekends.', answer: "doesn't have to", explanation: '不必做某事用 don\'t/doesn\'t have to。' },
  { lessonId: 'have-to', type: 'choice', question: 'You ___ park here. It\'s not allowed.', options: ['don\'t have to', 'mustn\'t', 'needn\'t', 'haven\'t to'], answer: "mustn't", explanation: '禁止做某事用 mustn\'t。' },
  { lessonId: 'have-to', type: 'fill', question: 'We ___ (must, not) be late for the meeting. It\'s very important.', answer: "mustn't", explanation: '禁止、不允许用 mustn\'t。' },
  { lessonId: 'have-to', type: 'correct', question: 'You don\'t have to smoke here. It\'s forbidden.', answer: "You mustn't smoke here. It's forbidden.", explanation: '禁止用 mustn\'t，don\'t have to 是不必。' },
  { lessonId: 'have-to', type: 'choice', question: 'It\'s Sunday tomorrow, so I ___ get up early.', options: ['mustn\'t', 'don\'t have to', 'haven\'t to', 'needn\'t to'], answer: "don't have to", explanation: '不必做（可以不做）用 don\'t have to。' },
  { lessonId: 'have-to', type: 'fill', question: 'I ___ (have) wear a uniform at work. It\'s the rule.', answer: 'have to', explanation: '不得不做（因为规定）用 have to。' },

  // --- conditionals-intermediate (8题) ---
  { lessonId: 'conditionals-intermediate', type: 'correct', question: 'If it will rain, I stay home.', answer: 'If it rains, I will stay home.', explanation: '主将从现，if 从句用一般现在时。' },
  { lessonId: 'conditionals-intermediate', type: 'choice', question: 'If I ___ rich, I would travel the world.', options: ['am', 'was', 'were', 'will be'], answer: 'were', explanation: '第二条件句虚拟语气用 were。' },
  { lessonId: 'conditionals-intermediate', type: 'fill', question: 'If I ___ (study) harder, I would have passed the exam.', answer: 'had studied', explanation: '第三条件句用 If + 过去完成时。' },
  { lessonId: 'conditionals-intermediate', type: 'choice', question: 'If I have time, I ___ you.', options: ['help', 'will help', 'would help', 'helped'], answer: 'will help', explanation: '第一条件句：if + 一般现在时，主句用 will。' },
  { lessonId: 'conditionals-intermediate', type: 'fill', question: 'If I were you, I ___ (accept) the job offer.', answer: 'would accept', explanation: '第二条件句：if + 过去时，主句用 would + 动词原形。' },
  { lessonId: 'conditionals-intermediate', type: 'correct', question: 'If I would have known, I would have told you.', answer: 'If I had known, I would have told you.', explanation: 'if 从句中不用 would，用 had done。' },
  { lessonId: 'conditionals-intermediate', type: 'choice', question: 'I would have been there on time if my car ___.', options: ['didn\'t break down', 'hadn\'t broken down', 'wouldn\'t break down', 'doesn\'t break down'], answer: "hadn't broken down", explanation: '第三条件句：if + had done。' },
  { lessonId: 'conditionals-intermediate', type: 'fill', question: 'If she ___ (come), tell her to wait for me.', answer: 'comes', explanation: '第一条件句，if 从句用一般现在时。' },

  // --- wish (8题) ---
  { lessonId: 'wish', type: 'correct', question: 'I wish I can fly.', answer: 'I wish I could fly.', explanation: 'wish 后用虚拟语气，can → could。' },
  { lessonId: 'wish', type: 'choice', question: 'I wish I ___ more money.', options: ['have', 'had', 'will have', 'can have'], answer: 'had', explanation: '对现在的愿望用 wish + 过去时。' },
  { lessonId: 'wish', type: 'fill', question: 'I wish I ___ (study) harder.（对过去遗憾）', answer: 'had studied', explanation: '对过去的遗憾用 wish + 过去完成时。' },
  { lessonId: 'wish', type: 'choice', question: 'I wish it ___ raining. I want to go out.', options: ['stops', 'stopped', 'will stop', 'would stop'], answer: 'would stop', explanation: '对将来的愿望（希望某事发生/停止）用 wish + would。' },
  { lessonId: 'wish', type: 'fill', question: 'She wishes she ___ (be) taller.', answer: 'were', explanation: '对现在的愿望，be 动词用 were。' },
  { lessonId: 'wish', type: 'correct', question: 'I wish I have more time.', answer: 'I wish I had more time.', explanation: 'wish 后用虚拟语气，have → had。' },
  { lessonId: 'wish', type: 'choice', question: 'He wishes he ___ that to her.', options: ['didn\'t say', 'hadn\'t said', 'wouldn\'t say', 'doesn\'t say'], answer: "hadn't said", explanation: '对过去的后悔用 wish + had done。' },
  { lessonId: 'wish', type: 'fill', question: 'I wish you ___ (not talk) so loudly. I\'m trying to study.', answer: "wouldn't talk", explanation: '希望某人做/不做某事用 wish + would(n\'t)。' },

  // --- relative-clauses-intermediate (8题) ---
  { lessonId: 'relative-clauses-intermediate', type: 'correct', question: 'My brother, that lives in Paris, is an engineer.', answer: 'My brother, who lives in Paris, is an engineer.', explanation: '非限定性从句不能用 that，用 who。' },
  { lessonId: 'relative-clauses-intermediate', type: 'choice', question: 'The woman ___ car was stolen is my neighbor.', options: ['who', 'which', 'whose', 'that'], answer: 'whose', explanation: '表所属关系用 whose。' },
  { lessonId: 'relative-clauses-intermediate', type: 'fill', question: 'This is the hotel ___ we stayed.', answer: 'where', explanation: '表地点用 where。' },
  { lessonId: 'relative-clauses-intermediate', type: 'choice', question: 'Do you remember the day ___ we first met?', options: ['which', 'when', 'where', 'that'], answer: 'when', explanation: '表时间用 when。' },
  { lessonId: 'relative-clauses-intermediate', type: 'fill', question: 'The reason ___ he left is unclear.', answer: 'why', explanation: '表原因用 why。' },
  { lessonId: 'relative-clauses-intermediate', type: 'correct', question: 'This is the book what I bought.', answer: 'This is the book which/that I bought.', explanation: 'what 不能引导定语从句，用 which 或 that。' },
  { lessonId: 'relative-clauses-intermediate', type: 'choice', question: 'He is the man ___ I told you about.', options: ['who', 'which', 'whose', 'whom'], answer: 'whom', explanation: '介词 about 的宾语用 whom（正式），口语中也可用 who/that 或省略。' },
  { lessonId: 'relative-clauses-intermediate', type: 'fill', question: 'The city ___ she was born is very beautiful.', answer: 'where', explanation: '表地点（city）用 where。' },

  // --- reported-speech (8题) ---
  { lessonId: 'reported-speech', type: 'correct', question: 'She said she is tired.', answer: 'She said she was tired.', explanation: '间接引语中时态倒退：is → was。' },
  { lessonId: 'reported-speech', type: 'choice', question: 'He said he ___ call me.', options: ['will', 'would', 'can', 'shall'], answer: 'would', explanation: 'will → would。' },
  { lessonId: 'reported-speech', type: 'fill', question: 'He asked me where I ___. (live)', answer: 'lived', explanation: '间接疑问句用陈述语序，时态倒退。' },
  { lessonId: 'reported-speech', type: 'choice', question: 'She told me that she ___ the day before.', options: ['arrived', 'had arrived', 'has arrived', 'was arriving'], answer: 'had arrived', explanation: 'the day before 是过去的过去，用过去完成时。' },
  { lessonId: 'reported-speech', type: 'fill', question: 'He said, "I am happy." → He said he ___ happy.', answer: 'was', explanation: '直接引语变间接引语，am → was。' },
  { lessonId: 'reported-speech', type: 'correct', question: 'She asked me what did I want.', answer: 'She asked me what I wanted.', explanation: '间接疑问句用陈述语序。' },
  { lessonId: 'reported-speech', type: 'choice', question: 'The teacher told us ___ quiet.', options: ['be', 'to be', 'being', 'been'], answer: 'to be', explanation: 'tell sb to do sth 告诉某人做某事。' },
  { lessonId: 'reported-speech', type: 'fill', question: '"Don\'t be late," she said. → She told me ___ late.', answer: "not to be", explanation: '间接引语否定：tell sb not to do sth。' },

  // --- gerund-infinitive-intermediate (8题) ---
  { lessonId: 'gerund-infinitive-intermediate', type: 'correct', question: 'I enjoy to swim.', answer: 'I enjoy swimming.', explanation: 'enjoy 后接动名词 doing。' },
  { lessonId: 'gerund-infinitive-intermediate', type: 'choice', question: 'She decided ___ early.', options: ['leave', 'to leave', 'leaving', 'left'], answer: 'to leave', explanation: 'decide 后接不定式 to do。' },
  { lessonId: 'gerund-infinitive-intermediate', type: 'fill', question: 'He stopped ___ (smoke). He quit. → He stopped ___.', answer: 'smoking', explanation: '停止正在做的事用 stop doing。' },
  { lessonId: 'gerund-infinitive-intermediate', type: 'choice', question: 'Remember ___ the door before you leave.', options: ['lock', 'to lock', 'locking', 'locked'], answer: 'to lock', explanation: '记得要做（还没做）用 remember to do。' },
  { lessonId: 'gerund-infinitive-intermediate', type: 'fill', question: 'I forgot ___ (lock) the door. Can you check?', answer: 'to lock', explanation: '忘记要做某事用 forget to do。' },
  { lessonId: 'gerund-infinitive-intermediate', type: 'correct', question: 'I want going home.', answer: 'I want to go home.', explanation: 'want 后接不定式 to do。' },
  { lessonId: 'gerund-infinitive-intermediate', type: 'choice', question: 'She suggested ___ to the cinema.', options: ['go', 'to go', 'going', 'went'], answer: 'going', explanation: 'suggest 后接动名词 doing。' },
  { lessonId: 'gerund-infinitive-intermediate', type: 'fill', question: 'I used ___ (play) the piano, but I don\'t anymore.', answer: 'to play', explanation: 'used to do 过去常常做某事。' },

  // --- reflexive-pronouns (6题) ---
  { lessonId: 'reflexive-pronouns', type: 'correct', question: 'She hurt sheself.', answer: 'She hurt herself.', explanation: 'she 的反身代词是 herself。' },
  { lessonId: 'reflexive-pronouns', type: 'choice', question: 'Did you enjoy ___ at the party?', options: ['yourself', 'you', 'your', 'yourselves'], answer: 'yourselves', explanation: 'you 复数的反身代词是 yourselves。' },
  { lessonId: 'reflexive-pronouns', type: 'fill', question: 'I taught ___ (I) how to play the guitar.', answer: 'myself', explanation: '自学用 teach oneself。' },
  { lessonId: 'reflexive-pronouns', type: 'choice', question: 'The cat cleaned ___.', options: ['it', 'itself', 'it self', 'its'], answer: 'itself', explanation: '动物的反身代词用 itself。' },
  { lessonId: 'reflexive-pronouns', type: 'fill', question: 'We built this house ___ (we).', answer: 'ourselves', explanation: '我们自己用 ourselves。' },
  { lessonId: 'reflexive-pronouns', type: 'correct', question: 'He did it all by hisself.', answer: 'He did it all by himself.', explanation: '他自己用 himself。' },

  // --- quantifiers-intermediate (8题) ---
  { lessonId: 'quantifiers-intermediate', type: 'choice', question: '___ of them likes coffee.', options: ['Both', 'Neither', 'All', 'Every'], answer: 'Neither', explanation: '两个都不用 neither。' },
  { lessonId: 'quantifiers-intermediate', type: 'correct', question: 'Both of student passed.', answer: 'Both of the students passed.', explanation: 'both of 后接复数名词。' },
  { lessonId: 'quantifiers-intermediate', type: 'fill', question: '___ student received a certificate.（强调个体）', answer: 'Each', explanation: '强调个体用 each。' },
  { lessonId: 'quantifiers-intermediate', type: 'choice', question: '___ the students passed the exam.', options: ['Both', 'All', 'Each', 'Every'], answer: 'All', explanation: '三个或以上全部用 all。' },
  { lessonId: 'quantifiers-intermediate', type: 'fill', question: 'There are two ways to get there. ___ way is fine.', answer: 'Either', explanation: '两个中的任意一个用 either。' },
  { lessonId: 'quantifiers-intermediate', type: 'correct', question: 'Every student like the teacher.', answer: 'Every student likes the teacher.', explanation: 'every + 单数名词，动词用第三人称单数。' },
  { lessonId: 'quantifiers-intermediate', type: 'choice', question: 'He has ___ friends. He is very lonely.', options: ['few', 'a few', 'little', 'a little'], answer: 'few', explanation: '几乎没有（修饰可数）用 few。' },
  { lessonId: 'quantifiers-intermediate', type: 'fill', question: 'I need ___ more time. Can you wait a bit?', answer: 'a little', explanation: '有一点（修饰不可数）用 a little。' },

  // --- adjective-order (6题) ---
  { lessonId: 'adjective-order', type: 'correct', question: 'a Chinese beautiful old table', answer: 'a beautiful old Chinese table', explanation: '顺序：观点→新旧→产地。' },
  { lessonId: 'adjective-order', type: 'choice', question: 'a ___ bag', options: ['leather small black', 'small black leather', 'black small leather', 'small leather black'], answer: 'small black leather', explanation: '大小→颜色→材料。' },
  { lessonId: 'adjective-order', type: 'fill', question: 'She bought a ___ (new / big / red) dress.', answer: 'big new red', explanation: '大小→新旧→颜色。' },
  { lessonId: 'adjective-order', type: 'choice', question: 'a(n) ___ chair', options: ['old wooden comfortable', 'comfortable old wooden', 'wooden old comfortable', 'comfortable wooden old'], answer: 'comfortable old wooden', explanation: '观点→新旧→材料。' },
  { lessonId: 'adjective-order', type: 'correct', question: 'a blue lovely small vase', answer: 'a lovely small blue vase', explanation: '观点→大小→颜色。' },
  { lessonId: 'adjective-order', type: 'fill', question: 'an ___ (French / amazing / old) castle', answer: 'amazing old French', explanation: '观点→新旧→产地。' },

  // --- ed-ing-adjectives (6题) ---
  { lessonId: 'ed-ing-adjectives', type: 'correct', question: 'I am boring.', answer: 'I am bored.', explanation: '描述人的感受用 -ed。' },
  { lessonId: 'ed-ing-adjectives', type: 'choice', question: 'The movie is very ___.', options: ['bored', 'boring', 'bore', 'boredly'], answer: 'boring', explanation: '描述事物性质用 -ing。' },
  { lessonId: 'ed-ing-adjectives', type: 'fill', question: 'I was ___ (surprise) to hear the news.', answer: 'surprised', explanation: '人的感受用 -ed。' },
  { lessonId: 'ed-ing-adjectives', type: 'choice', question: 'The news is very ___.', options: ['excited', 'exciting', 'excite', 'excitedly'], answer: 'exciting', explanation: '事物令人兴奋用 -ing。' },
  { lessonId: 'ed-ing-adjectives', type: 'correct', question: 'She was very disappointing with the result.', answer: 'She was very disappointed with the result.', explanation: '人的感受（失望的）用 -ed。' },
  { lessonId: 'ed-ing-adjectives', type: 'fill', question: 'The book is very ___ (interest). I couldn\'t put it down.', answer: 'interesting', explanation: '事物有趣用 -ing。' },

  // --- so-such (6题) ---
  { lessonId: 'so-such', type: 'correct', question: 'It was so beautiful day.', answer: 'It was such a beautiful day.', explanation: '修饰名词短语用 such。' },
  { lessonId: 'so-such', type: 'choice', question: 'The movie was ___ good that I watched it twice.', options: ['such', 'so', 'such a', 'so a'], answer: 'so', explanation: '修饰形容词用 so。' },
  { lessonId: 'so-such', type: 'fill', question: 'It was ___ a good book that I read it in one day.', answer: 'such', explanation: 'such + a/an + 形容词 + 名词。' },
  { lessonId: 'so-such', type: 'choice', question: 'There were ___ people that we couldn\'t get in.', options: ['so much', 'so many', 'such many', 'such much'], answer: 'so many', explanation: 'so many + 可数名词复数。' },
  { lessonId: 'so-such', type: 'correct', question: 'He is such clever boy.', answer: 'He is such a clever boy.', explanation: 'such + a + 形容词 + 单数名词。' },
  { lessonId: 'so-such', type: 'fill', question: 'She ate ___ much food that she felt sick.', answer: 'so', explanation: 'so much + 不可数名词。' },

  // --- for-since (6题) ---
  { lessonId: 'for-since', type: 'correct', question: 'I have lived here since ten years.', answer: 'I have lived here for ten years.', explanation: '时间段用 for。' },
  { lessonId: 'for-since', type: 'choice', question: 'She has been working ___ 9 o\'clock.', options: ['for', 'since', 'from', 'at'], answer: 'since', explanation: '时间点用 since。' },
  { lessonId: 'for-since', type: 'fill', question: 'I have known her ___ 2010.', answer: 'since', explanation: 'since + 年份（时间点）。' },
  { lessonId: 'for-since', type: 'choice', question: 'They have been married ___ 20 years.', options: ['since', 'for', 'from', 'in'], answer: 'for', explanation: 'for + 时间段。' },
  { lessonId: 'for-since', type: 'correct', question: 'I have learned English since three months.', answer: 'I have learned English for three months.', explanation: 'three months 是时间段，用 for。' },
  { lessonId: 'for-since', type: 'fill', question: 'He has been waiting ___ two hours.', answer: 'for', explanation: 'for + 时间段。' },

  // --- phrasal-verbs-intermediate (6题) ---
  { lessonId: 'phrasal-verbs-intermediate', type: 'correct', question: 'Turn on it.', answer: 'Turn it on.', explanation: '代词宾语放在动词和副词中间。' },
  { lessonId: 'phrasal-verbs-intermediate', type: 'choice', question: 'I need to ___ this word in the dictionary.', options: ['look up', 'look up to', 'look for', 'look out'], answer: 'look up', explanation: 'look up = 查字典。' },
  { lessonId: 'phrasal-verbs-intermediate', type: 'fill', question: 'The meeting was ___ (put) until next week.', answer: 'put off', explanation: 'put off = 推迟。' },
  { lessonId: 'phrasal-verbs-intermediate', type: 'choice', question: 'The fire ___ in the middle of the night.', options: ['broke out', 'broke up', 'broke down', 'broke in'], answer: 'broke out', explanation: 'break out = （火灾、战争）爆发。' },
  { lessonId: 'phrasal-verbs-intermediate', type: 'correct', question: 'I look forward to see you.', answer: 'I look forward to seeing you.', explanation: 'look forward to 后接 doing。' },
  { lessonId: 'phrasal-verbs-intermediate', type: 'choice', question: 'She ___ her mother. They look very similar.', options: ['takes after', 'takes off', 'takes up', 'takes in'], answer: 'takes after', explanation: 'take after = 长得像（父母）。' },

  // --- past-continuous (8题) ---
  { lessonId: 'past-continuous', type: 'choice', question: 'I ___ TV at 8 o\'clock last night.', options: ['watched', 'was watching', 'am watching', 'have watched'], answer: 'was watching', explanation: '过去某一时刻正在做，用过去进行时。' },
  { lessonId: 'past-continuous', type: 'choice', question: 'They ___ football when it started to rain.', options: ['play', 'played', 'were playing', 'are playing'], answer: 'were playing', explanation: 'when 引导的瞬间动作 + 过去进行时表持续动作。' },
  { lessonId: 'past-continuous', type: 'fill', question: 'While she ___ (cook), the phone rang.', answer: 'was cooking', explanation: 'while 引导的背景动作，用过去进行时。' },
  { lessonId: 'past-continuous', type: 'correct', question: 'I were sleeping when you called.', answer: 'I was sleeping when you called.', explanation: '第一人称 I 用 was，不用 were。' },
  { lessonId: 'past-continuous', type: 'choice', question: 'What ___ you ___ at this time yesterday?', options: ['were, doing', 'did, do', 'are, doing', 'was, doing'], answer: 'were, doing', explanation: '过去某时刻正在做什么，过去进行时疑问句：were/was + 主语 + doing？' },
  { lessonId: 'past-continuous', type: 'fill', question: 'She ___ (not watch) TV at 9 pm last night; she was studying.', answer: 'wasn\'t watching', explanation: '过去进行时否定：was/were + not + doing。' },
  { lessonId: 'past-continuous', type: 'correct', question: 'He was read a book when I came in.', answer: 'He was reading a book when I came in.', explanation: 'was + 动词-ing：was reading。' },
  { lessonId: 'past-continuous', type: 'choice', question: 'At 10 o\'clock this morning, they ___ in the library.', options: ['studied', 'were studying', 'are studying', 'study'], answer: 'were studying', explanation: '过去某时刻正在进行的动作，用 were studying。' },

  // --- object-clauses (8题) ---
  { lessonId: 'object-clauses', type: 'choice', question: 'I believe ___ he is honest.', options: ['that', 'if', 'what', 'whether'], answer: 'that', explanation: '陈述性宾语从句用 that（可省略）。' },
  { lessonId: 'object-clauses', type: 'choice', question: 'She asked me ___ I liked coffee.', options: ['that', 'if', 'what', 'which'], answer: 'if', explanation: '一般疑问句转化的宾语从句用 if / whether。' },
  { lessonId: 'object-clauses', type: 'fill', question: 'He told me ___ he lived.', answer: 'where', explanation: '特殊疑问句转化的宾语从句用疑问词 where。' },
  { lessonId: 'object-clauses', type: 'correct', question: 'He asked where did I live.', answer: 'He asked where I lived.', explanation: '宾语从句用陈述语序，不倒装。' },
  { lessonId: 'object-clauses', type: 'choice', question: 'I don\'t know ___ he will come.', options: ['if or not', 'whether', 'that', 'which or not'], answer: 'whether', explanation: '在 whether ... or not 结构中用 whether 而非 if。' },
  { lessonId: 'object-clauses', type: 'fill', question: 'I think (that) he ___ (be) right.', answer: 'is', explanation: '主句一般现在时，从句也用一般现在时。' },
  { lessonId: 'object-clauses', type: 'correct', question: 'She said where does he live?', answer: 'She asked where he lived.', explanation: '间接引语 + 宾语从句，从句用陈述语序和过去时呼应。' },
  { lessonId: 'object-clauses', type: 'choice', question: 'Could you tell me ___ the station is?', options: ['where', 'what', 'if', 'that'], answer: 'where', explanation: '询问地点用 where，从句用陈述语序。' },

  // --- adverbial-clauses (8题) ---
  { lessonId: 'adverbial-clauses', type: 'choice', question: '___ I arrived, he was reading.', options: ['When', 'Because', 'If', 'Although'], answer: 'When', explanation: '时间状语从句用 when。' },
  { lessonId: 'adverbial-clauses', type: 'choice', question: 'I stayed home ___ it was raining.', options: ['when', 'because', 'if', 'although'], answer: 'because', explanation: '原因状语从句用 because。' },
  { lessonId: 'adverbial-clauses', type: 'fill', question: 'If it ___ (rain) tomorrow, we will stay home.', answer: 'rains', explanation: '主将从现：主句将来时，条件从句用现在时。' },
  { lessonId: 'adverbial-clauses', type: 'correct', question: 'Although he is rich, but he is unhappy.', answer: 'Although he is rich, he is unhappy.', explanation: 'although 与 but 不可同句并用。' },
  { lessonId: 'adverbial-clauses', type: 'choice', question: 'It was ___ cold ___ the lake froze.', options: ['so, that', 'such, that', 'too, that', 'very, that'], answer: 'so, that', explanation: 'so + 形容词/副词 + that 从句。' },
  { lessonId: 'adverbial-clauses', type: 'fill', question: 'We will leave ___ soon ___ possible.', answer: 'as, as', explanation: 'as ... as possible 尽可能...。' },
  { lessonId: 'adverbial-clauses', type: 'correct', question: 'If it will rain, I won\'t go.', answer: 'If it rains, I won\'t go.', explanation: '主将从现：从句用一般现在时表示将来。' },
  { lessonId: 'adverbial-clauses', type: 'choice', question: 'I\'ll call you ___ I arrive.', options: ['as soon as', 'as long as', 'as much as', 'as well as'], answer: 'as soon as', explanation: 'as soon as = 一...就，表紧接。' },

  // --- passive-voice-basic (8题) ---
  { lessonId: 'passive-voice-basic', type: 'choice', question: 'English ___ in many countries.', options: ['is spoken', 'speaks', 'spoke', 'is speaking'], answer: 'is spoken', explanation: '一般现在时被动：is/are + 过去分词。' },
  { lessonId: 'passive-voice-basic', type: 'choice', question: 'The cake ___ by my grandmother.', options: ['made', 'is made', 'was made', 'has made'], answer: 'was made', explanation: '一般过去时被动：was/were + 过去分词。' },
  { lessonId: 'passive-voice-basic', type: 'fill', question: 'The window ___ (break).', answer: 'has been broken', explanation: '现在完成时被动：have/has been + 过去分词。' },
  { lessonId: 'passive-voice-basic', type: 'correct', question: 'The cake made by grandma.', answer: 'The cake was made by grandma.', explanation: '缺少 be 动词，被动语态应为 was made。' },
  { lessonId: 'passive-voice-basic', type: 'choice', question: 'A new library ___ next year.', options: ['will build', 'will be built', 'is built', 'builds'], answer: 'will be built', explanation: '一般将来时被动：will be + 过去分词。' },
  { lessonId: 'passive-voice-basic', type: 'fill', question: 'This book ___ (must return) before Friday.', answer: 'must be returned', explanation: '情态被动：情态动词 + be + 过去分词。' },
  { lessonId: 'passive-voice-basic', type: 'correct', question: 'English is speak in many countries.', answer: 'English is spoken in many countries.', explanation: '被动语态：is + spoken（过去分词）。' },
  { lessonId: 'passive-voice-basic', type: 'choice', question: 'This song ___ by many singers.', options: ['is sung', 'is singed', 'sings', 'sang'], answer: 'is sung', explanation: 'sing 的过去分词 sung，被动用 is sung。' },

  // --- comparative-superlative (8题) ---
  { lessonId: 'comparative-superlative', type: 'choice', question: 'Tom is ___ than Jack.', options: ['tall', 'taller', 'tallest', 'most tall'], answer: 'taller', explanation: '比较级：tall → taller。' },
  { lessonId: 'comparative-superlative', type: 'choice', question: 'This book is ___ interesting than that one.', options: ['more', 'most', 'much', 'many'], answer: 'more', explanation: 'interesting 是长形容词，比较级前加 more。' },
  { lessonId: 'comparative-superlative', type: 'fill', question: 'She is ___ (good) student in our class.', answer: 'the best', explanation: '最高级 the best，且前加 the。' },
  { lessonId: 'comparative-superlative', type: 'correct', question: 'Tom is more tall than Jack.', answer: 'Tom is taller than Jack.', explanation: '短形容词用 -er 形式比较级。' },
  { lessonId: 'comparative-superlative', type: 'choice', question: 'Of the three, this is ___ expensive one.', options: ['the most', 'more', 'most', 'the more'], answer: 'the most', explanation: '三者以上最高级 the most expensive。' },
  { lessonId: 'comparative-superlative', type: 'fill', question: 'Today is ___ (bad) than yesterday.', answer: 'worse', explanation: 'bad 的比较级是不规则变化 worse。' },
  { lessonId: 'comparative-superlative', type: 'correct', question: 'She is the most tall girl in her class.', answer: 'She is the tallest girl in her class.', explanation: '短形容词最高级加 -est，不用 most。' },
  { lessonId: 'comparative-superlative', type: 'choice', question: 'I have ___ money than you.', options: ['fewer', 'less', 'littler', 'smaller'], answer: 'less', explanation: 'money 是不可数名词，比较级用 less。' },

  // --- conjunctions (6题) ---
  { lessonId: 'conjunctions', type: 'choice', question: 'I like tea ___ coffee.', options: ['and', 'but', 'or', 'so'], answer: 'and', explanation: 'and 表并列关系"和"。' },
  { lessonId: 'conjunctions', type: 'choice', question: 'He is poor ___ happy.', options: ['and', 'but', 'or', 'because'], answer: 'but', explanation: 'but 表转折"但是"。' },
  { lessonId: 'conjunctions', type: 'fill', question: 'Hurry up, ___ you will be late.', answer: 'or', explanation: 'or 表否则。' },
  { lessonId: 'conjunctions', type: 'correct', question: 'Because he was sick, so he stayed home.', answer: 'Because he was sick, he stayed home.', explanation: 'because 和 so 不能同句并用。' },
  { lessonId: 'conjunctions', type: 'choice', question: 'It was ___ a hot day ___ we stayed inside.', options: ['so, that', 'such, that', 'so, so', 'such, so'], answer: 'such, that', explanation: 'such + a + 形容词 + 单数名词 + that。' },
  { lessonId: 'conjunctions', type: 'fill', question: '___ you work hard, you will fail.', answer: 'Unless', explanation: 'unless = if not，"除非...否则..."。' },

  // --- tag-questions (6题) ---
  { lessonId: 'tag-questions', type: 'choice', question: 'You are a student, ___?', options: ['aren\'t you', 'are you', 'do you', 'don\'t you'], answer: 'aren\'t you', explanation: '前肯后否：陈述句肯定 → 附加疑问句否定。' },
  { lessonId: 'tag-questions', type: 'choice', question: 'She can swim, ___?', options: ['can she', 'can\'t she', 'doesn\'t she', 'won\'t she'], answer: 'can\'t she', explanation: '情态动词 can → can\'t。' },
  { lessonId: 'tag-questions', type: 'fill', question: 'They didn\'t go home, ___ they?', answer: 'did', explanation: '过去否定 → did 肯定；前否后肯。' },
  { lessonId: 'tag-questions', type: 'correct', question: 'I am right, am I not?', answer: 'I am right, aren\'t I?', explanation: 'I am 后的反问用 aren\'t I（特殊形式）。' },
  { lessonId: 'tag-questions', type: 'choice', question: 'Let\'s go for a walk, ___?', options: ['shall we', 'will we', 'do we', 'don\'t we'], answer: 'shall we', explanation: 'Let\'s 开头的祈使句反问用 shall we。' },
  { lessonId: 'tag-questions', type: 'fill', question: 'He never comes late, ___ he?', answer: 'does', explanation: '前否后肯：never 表否定 → does。' },

  // --- past-future-tense (8题) ---
  { lessonId: 'past-future-tense', type: 'choice', question: 'He said he ___ come back the next day.', options: ['will', 'would', 'comes', 'is coming'], answer: 'would', explanation: '主句过去时 + 宾语从句表过去将来，从句用 would。' },
  { lessonId: 'past-future-tense', type: 'choice', question: 'I knew she ___ to leave soon.', options: ['will go', 'is going', 'was going', 'goes'], answer: 'was going', explanation: '从过去看原定的计划，用 was going to do。' },
  { lessonId: 'past-future-tense', type: 'fill', question: 'We ___ (be about to) leave when the phone rang.', answer: 'were about to', explanation: 'be about to 表示"正要..."，主语是 we 用 were。' },
  { lessonId: 'past-future-tense', type: 'correct', question: 'He said he will come tomorrow.', answer: 'He said he would come the next day.', explanation: '间接引语：will → would；tomorrow → the next day。' },
  { lessonId: 'past-future-tense', type: 'choice', question: 'The meeting ___ at 9, but the speaker was late.', options: ['will start', 'starts', 'was to start', 'is starting'], answer: 'was to start', explanation: 'was to do 表示"原定要..."。' },
  { lessonId: 'past-future-tense', type: 'fill', question: 'She told me she ___ (visit) Paris the following month.', answer: 'would visit', explanation: '过去将来时在宾语从句中用 would + 动词原形。' },
  { lessonId: 'past-future-tense', type: 'correct', question: 'I was about to leave at 5 pm.', answer: 'I was about to leave. (about to 不接具体时间状语)', explanation: 'be about to 强调"正要立刻做"，不接具体时间状语。' },
  { lessonId: 'past-future-tense', type: 'choice', question: 'I didn\'t know if he ___ come the next day.', options: ['will', 'would', 'comes', 'is coming'], answer: 'would', explanation: '主句过去时，宾语从句中表过去将来用 would。' },

  // ===================== 词形变换专题（20节配套练习，140题）=====================
  // wf-verb-5forms (7)
  { lessonId: 'wf-verb-5forms', type: 'choice', question: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'gone'], answer: 'goes', explanation: '第三人称单数现在时加 -es。' },
  { lessonId: 'wf-verb-5forms', type: 'fill', question: 'I ___ (work) late last night.', answer: 'worked', explanation: '过去式 worked。' },
  { lessonId: 'wf-verb-5forms', type: 'correct', question: 'He work hard every day.', answer: 'He works hard every day.', explanation: '第三人称单数现在时加 -s。' },
  { lessonId: 'wf-verb-5forms', type: 'choice', question: 'They ___ TV when I called.', options: ['watch', 'watched', 'are watching', 'were watching'], answer: 'were watching', explanation: '过去进行时 was/were + doing。' },
  { lessonId: 'wf-verb-5forms', type: 'fill', question: 'He has ___ (finish) his homework.', answer: 'finished', explanation: '现在完成时 has + 过去分词。' },
  { lessonId: 'wf-verb-5forms', type: 'choice', question: 'I ___ a book now.', options: ['read', 'reads', 'am reading', 'have read'], answer: 'am reading', explanation: '现在进行时 am + V-ing。' },
  { lessonId: 'wf-verb-5forms', type: 'correct', question: 'She is play football.', answer: 'She is playing football.', explanation: '现在进行时 be + V-ing。' },

  // wf-irregular-verbs (7)
  { lessonId: 'wf-irregular-verbs', type: 'choice', question: 'I ___ my homework yesterday.', options: ['do', 'did', 'done', 'doing'], answer: 'did', explanation: 'do 的过去式是 did。' },
  { lessonId: 'wf-irregular-verbs', type: 'fill', question: 'I have ___ (go) to Beijing twice.', answer: 'gone', explanation: 'go 的过去分词是 gone（A-B-C 型）。' },
  { lessonId: 'wf-irregular-verbs', type: 'choice', question: 'She ___ a beautiful dress yesterday.', options: ['buy', 'bought', 'buys', 'buying'], answer: 'bought', explanation: 'buy 的过去式是 bought（A-B-B 型）。' },
  { lessonId: 'wf-irregular-verbs', type: 'correct', question: 'I have went there before.', answer: 'I have gone there before.', explanation: 'go 的过去分词是 gone，不是 went。' },
  { lessonId: 'wf-irregular-verbs', type: 'fill', question: 'He ___ (cut) his finger yesterday.', answer: 'cut', explanation: 'cut 是 A-A-A 型，原形/过去式/过去分词同形。' },
  { lessonId: 'wf-irregular-verbs', type: 'choice', question: 'She ___ home late last night.', options: ['come', 'comes', 'came', 'coming'], answer: 'came', explanation: 'come 的过去式是 came（A-B-A 型）。' },
  { lessonId: 'wf-irregular-verbs', type: 'correct', question: 'She has took the book.', answer: 'She has taken the book.', explanation: 'take 的过去分词是 taken（A-B-C 型）。' },

  // wf-verbals (7)
  { lessonId: 'wf-verbals', type: 'choice', question: 'I want ___ to the park.', options: ['go', 'going', 'to go', 'gone'], answer: 'to go', explanation: 'want 后接不定式 to do。' },
  { lessonId: 'wf-verbals', type: 'fill', question: 'I enjoy ___ (read) books.', answer: 'reading', explanation: 'enjoy 后接动名词 doing。' },
  { lessonId: 'wf-verbals', type: 'correct', question: 'I look forward to meet you.', answer: 'I look forward to meeting you.', explanation: 'look forward to 中 to 是介词，后接 doing。' },
  { lessonId: 'wf-verbals', type: 'choice', question: 'The window ___ in the storm has been repaired.', options: ['break', 'broke', 'breaking', 'broken'], answer: 'broken', explanation: '过去分词作定语，表被动或完成。' },
  { lessonId: 'wf-verbals', type: 'fill', question: 'The boy ___ (sit) there is my brother.', answer: 'sitting', explanation: '现在分词作定语，表主动或进行。' },
  { lessonId: 'wf-verbals', type: 'correct', question: 'I enjoy to swim.', answer: 'I enjoy swimming.', explanation: 'enjoy 后接动名词，不用不定式。' },
  { lessonId: 'wf-verbals', type: 'choice', question: 'Let him ___ alone.', options: ['to go', 'go', 'going', 'gone'], answer: 'go', explanation: '使役动词 let 后接省 to 的不定式。' },

  // wf-adjective-degree (7)
  { lessonId: 'wf-adjective-degree', type: 'choice', question: 'Tom is ___ than Jack.', options: ['tall', 'taller', 'tallest', 'most tall'], answer: 'taller', explanation: '比较级 -er。' },
  { lessonId: 'wf-adjective-degree', type: 'fill', question: 'She is ___ (good) student in our class.', answer: 'the best', explanation: '最高级 the best。' },
  { lessonId: 'wf-adjective-degree', type: 'correct', question: 'Tom is more tall than Jack.', answer: 'Tom is taller than Jack.', explanation: '短形容词用 -er 形式比较级。' },
  { lessonId: 'wf-adjective-degree', type: 'choice', question: 'This book is ___ interesting than that one.', options: ['more', 'most', 'much', 'many'], answer: 'more', explanation: '多音节形容词比较级前加 more。' },
  { lessonId: 'wf-adjective-degree', type: 'fill', question: 'Today is ___ (bad) than yesterday.', answer: 'worse', explanation: 'bad 的比较级是不规则变化 worse。' },
  { lessonId: 'wf-adjective-degree', type: 'correct', question: 'She is the most tall girl.', answer: 'She is the tallest girl.', explanation: '短形容词最高级加 -est，不用 most。' },
  { lessonId: 'wf-adjective-degree', type: 'choice', question: 'I have ___ money than you.', options: ['fewer', 'less', 'littler', 'smaller'], answer: 'less', explanation: 'money 不可数，比较级用 less。' },

  // wf-noun-number (7)
  { lessonId: 'wf-noun-number', type: 'choice', question: 'I have two ___ (child).', options: ['childs', 'childes', 'children', 'child'], answer: 'children', explanation: 'child 的复数是 children（不规则加 -en）。' },
  { lessonId: 'wf-noun-number', type: 'fill', question: 'There are many ___ (box) in the room.', answer: 'boxes', explanation: 'box 结尾 -x，加 -es。' },
  { lessonId: 'wf-noun-number', type: 'correct', question: 'She bought three knifes.', answer: 'She bought three knives.', explanation: 'knife 复数是 knives（-fe → -ves）。' },
  { lessonId: 'wf-noun-number', type: 'choice', question: 'I have two ___ (baby).', options: ['babys', 'babies', 'babyes', 'baby'], answer: 'babies', explanation: '辅音 + y 改 y 为 i 加 -es。' },
  { lessonId: 'wf-noun-number', type: 'fill', question: 'Three ___ (sheep) are eating grass.', answer: 'sheep', explanation: 'sheep 单复同形。' },
  { lessonId: 'wf-noun-number', type: 'correct', question: 'I have two childs.', answer: 'I have two children.', explanation: 'child 的复数是不规则的 children。' },
  { lessonId: 'wf-noun-number', type: 'choice', question: 'My ___ (foot) hurt.', options: ['foots', 'feet', 'footes', 'footes'], answer: 'feet', explanation: 'foot 的复数是不规则的 feet（oo → ee）。' },

  // wf-numerals (7)
  { lessonId: 'wf-numerals', type: 'choice', question: 'Today is her ___ (twelve) birthday.', options: ['twelve', 'twelveth', 'twelfth', 'twelveth'], answer: 'twelfth', explanation: '12 的序数是 twelfth（去 e 加 th）。' },
  { lessonId: 'wf-numerals', type: 'fill', question: 'He lives on the ___ (twenty-three) floor.', answer: 'twenty-third', explanation: '复合数词序数词个位决定词尾。' },
  { lessonId: 'wf-numerals', type: 'correct', question: 'I have thirtien apples.', answer: 'I have thirteen apples.', explanation: '13 拼写是 thirteen。' },
  { lessonId: 'wf-numerals', type: 'choice', question: 'She is the ___ (one) to arrive.', options: ['one', 'first', 'oneth', 'onest'], answer: 'first', explanation: '1 的序数是 first（特例）。' },
  { lessonId: 'wf-numerals', type: 'fill', question: '___ (3/4) of the students passed.', answer: 'Three quarters', explanation: '分数分子基数 + 分母序数（>1 加 s）。' },
  { lessonId: 'wf-numerals', type: 'correct', question: 'Today is her twelveth birthday.', answer: 'Today is her twelfth birthday.', explanation: '12 的序数是 twelfth（注意 f 字母）。' },
  { lessonId: 'wf-numerals', type: 'choice', question: 'There are ___ (40) students.', options: ['fourty', 'fourteen', 'forty', 'fourthy'], answer: 'forty', explanation: '40 拼写是 forty（无 u）。' },

  // wf-conversion (7)
  { lessonId: 'wf-conversion', type: 'choice', question: 'Please ___ the flowers.', options: ['water (n.)', 'water (v.)', 'waters', 'watering'], answer: 'water (v.)', explanation: '作动词"浇水"，零派生。' },
  { lessonId: 'wf-conversion', type: 'fill', question: 'I want to ___ (book v.) a table for two.', answer: 'book', explanation: 'book 作动词"预订"，零派生。' },
  { lessonId: 'wf-conversion', type: 'correct', question: 'This room needs clean.', answer: 'This room needs cleaning.', explanation: 'needs 后接动名词 doing。' },
  { lessonId: 'wf-conversion', type: 'choice', question: 'He is a ___ (clean adj.) boy.', options: ['clean', 'cleans', 'cleaning', 'cleaned'], answer: 'clean', explanation: '形容词 clean。' },
  { lessonId: 'wf-conversion', type: 'fill', question: 'The room is ___ (clean adj.).', answer: 'clean', explanation: '系动词后用形容词。' },
  { lessonId: 'wf-conversion', type: 'correct', question: 'Please waters the plants.', answer: 'Please water the plants.', explanation: '动词 water 不加 -s。' },
  { lessonId: 'wf-conversion', type: 'choice', question: 'He ___ (name v.) his dog Lucky.', options: ['name', 'names', 'named', 'naming'], answer: 'named', explanation: 'name 作动词"命名"，过去式 named。' },

  // wf-affixes (7)
  { lessonId: 'wf-affixes', type: 'choice', question: 'He is ___ (happy) with the result.', options: ['unhappy', 'inhappy', 'dishappy', 'nonhappy'], answer: 'unhappy', explanation: '否定前缀 un- 加在 happy 前。' },
  { lessonId: 'wf-affixes', type: 'fill', question: 'The ___ (develop) of the project took years.', answer: 'development', explanation: '动词 + -ment 变名词 development。' },
  { lessonId: 'wf-affixes', type: 'correct', question: 'He is unkindly.', answer: 'He is unkind.', explanation: '形容词用 un-，副词用 un- + -ly。' },
  { lessonId: 'wf-affixes', type: 'choice', question: 'Be ___ (care)! The road is dangerous.', options: ['careful', 'careless', 'uncaring', 'careing'], answer: 'careful', explanation: '形容词后缀 -ful = 充满...的。' },
  { lessonId: 'wf-affixes', type: 'fill', question: 'Her explanation is ___ (believe) unbelievable.', answer: '', explanation: '占位（un- + believe + -able = unbelievable）。' },
  { lessonId: 'wf-affixes', type: 'correct', question: 'She is happyness.', answer: 'She is happy. / She is filled with happiness.', explanation: '形容词 happy；名词 happiness。' },
  { lessonId: 'wf-affixes', type: 'choice', question: 'The book is very ___ (interest).', options: ['interest', 'interested', 'interesting', 'interests'], answer: 'interesting', explanation: '物用 -ing。' },

  // wf-pronouns (7)
  { lessonId: 'wf-pronouns', type: 'choice', question: 'She gave ___ (I) a book.', options: ['I', 'me', 'my', 'mine'], answer: 'me', explanation: '宾格 me。' },
  { lessonId: 'wf-pronouns', type: 'fill', question: 'This book is ___ (my).', answer: 'mine', explanation: '名词性物主代词 mine，独立使用。' },
  { lessonId: 'wf-pronouns', type: 'correct', question: 'This book is the mine.', answer: 'This book is mine.', explanation: '名词性物主代词前不加 the。' },
  { lessonId: 'wf-pronouns', type: 'choice', question: 'He hurt ___ (he) while playing.', options: ['he', 'him', 'his', 'himself'], answer: 'himself', explanation: '主语与宾语同指时用反身代词。' },
  { lessonId: 'wf-pronouns', type: 'fill', question: 'We enjoyed ___ (we) at the party.', answer: 'ourselves', explanation: 'we 的反身代词是 ourselves。' },
  { lessonId: 'wf-pronouns', type: 'correct', question: 'He hurt his self.', answer: 'He hurt himself.', explanation: '反身代词合写，不分 his + self。' },
  { lessonId: 'wf-pronouns', type: 'choice', question: 'This is ___ (my) book.', options: ['me', 'my', 'mine', 'I'], answer: 'my', explanation: '形容词性物主代词后接名词。' },

  // wf-determiners (7)
  { lessonId: 'wf-determiners', type: 'choice', question: 'I need ___ advice.', options: ['a', 'an', 'some', 'many'], answer: 'some', explanation: 'advice 不可数，用 some。' },
  { lessonId: 'wf-determiners', type: 'fill', question: 'He is ___ (university) student.', answer: 'a', explanation: 'university 首个音是 /j/，是辅音音素，用 a。' },
  { lessonId: 'wf-determiners', type: 'correct', question: 'He is an university student.', answer: 'He is a university student.', explanation: 'university 发音 /ˌjuː.../，首个音素是 j（辅音），用 a。' },
  { lessonId: 'wf-determiners', type: 'choice', question: 'I have ___ (much/many) friends.', options: ['much', 'many', 'a little', 'any'], answer: 'many', explanation: 'friends 是复数可数，用 many。' },
  { lessonId: 'wf-determiners', type: 'fill', question: 'This is ___ (honest) man.', answer: 'an', explanation: 'honest 首个音是元音（不发音的 h），用 an。' },
  { lessonId: 'wf-determiners', type: 'correct', question: 'I need a advices.', answer: 'I need some advice.', explanation: 'advice 不可数，不能加 -s。' },
  { lessonId: 'wf-determiners', type: 'choice', question: 'She has ___ money.', options: ['many', 'few', 'little', 'a few'], answer: 'little', explanation: 'money 不可数，用 little 表否定"几乎没有"。' },

  // wf-tense-aspect (7)
  { lessonId: 'wf-tense-aspect', type: 'choice', question: 'He ___ (must leave) already.', options: ['must leave', 'must have left', 'must be leaving', 'must leaves'], answer: 'must have left', explanation: '情态 + have done 表对过去的肯定推测。' },
  { lessonId: 'wf-tense-aspect', type: 'fill', question: 'The window ___ (break) by the ball.', answer: 'was broken', explanation: '一般过去被动 was + p.p.。' },
  { lessonId: 'wf-tense-aspect', type: 'correct', question: 'He must left already.', answer: 'He must have left already.', explanation: 'must have done 表对过去的推测。' },
  { lessonId: 'wf-tense-aspect', type: 'choice', question: 'The work ___ (finish).', options: ['has finished', 'has been finished', 'is finished', 'finished'], answer: 'has been finished', explanation: '现在完成被动 have/has been + p.p.。' },
  { lessonId: 'wf-tense-aspect', type: 'fill', question: 'If I ___ (be) you, I would go.', answer: 'were', explanation: 'were 型虚拟：I/he/she/it 都用 were。' },
  { lessonId: 'wf-tense-aspect', type: 'correct', question: 'If I was you, I would go.', answer: 'If I were you, I would go.', explanation: '虚拟语气用 were，不用 was。' },
  { lessonId: 'wf-tense-aspect', type: 'choice', question: 'You ___ (should tell) me earlier.', options: ['should tell', 'should have told', 'should telling', 'should told'], answer: 'should have told', explanation: 'should have done = 本应做却没做（遗憾）。' },

  // wf-adj-adv (7)
  { lessonId: 'wf-adj-adv', type: 'choice', question: 'He works ___ (hard) every day.', options: ['hard', 'hardly', 'hardship', 'harden'], answer: 'hard', explanation: '"努力地"用 hard，不是 hardly（几乎不）。' },
  { lessonId: 'wf-adj-adv', type: 'fill', question: 'I ___ (hard) know him.', answer: 'hardly', explanation: 'hardly = 几乎不。' },
  { lessonId: 'wf-adj-adv', type: 'correct', question: 'He works hardly.', answer: 'He works hard.', explanation: '"努力工作"用 hard，hardly 意为"几乎不"。' },
  { lessonId: 'wf-adj-adv', type: 'choice', question: 'He is ___ (high) respected.', options: ['high', 'highly', 'height', 'higher'], answer: 'highly', explanation: 'highly 抽象"高度地"；high 物理"高高地"。' },
  { lessonId: 'wf-adj-adv', type: 'fill', question: 'I am ___ (good) today, thank you.', answer: 'well', explanation: '健康状况用 well，不是 good。' },
  { lessonId: 'wf-adj-adv', type: 'correct', question: 'I am good today.', answer: 'I am well today.', explanation: '"身体健康"用 well；good 表"好"。' },
  { lessonId: 'wf-adj-adv', type: 'choice', question: 'She held the baby ___ (close).', options: ['close', 'closely', 'closer', 'closest'], answer: 'close', explanation: '"紧紧地抱着"物理动作用 close；closely 表抽象"紧密地"。' },

  // wf-compounds (7)
  { lessonId: 'wf-compounds', type: 'choice', question: 'I have two ___ (mother-in-law).', options: ['mother-in-laws', 'mothers-in-law', 'mother-in-law', 'mothers-in-lawes'], answer: 'mothers-in-law', explanation: '复合名词复数在主名词（最后的 law）上变。' },
  { lessonId: 'wf-compounds', type: 'fill', question: 'He is a ___ (five-year-old) boy.', answer: 'five-year-old', explanation: '复合形容词数+名+adj：名词必须单数。' },
  { lessonId: 'wf-compounds', type: 'correct', question: 'He is a five-years-old boy.', answer: 'He is a five-year-old boy.', explanation: '复合形容词中名词用单数（five-year-old），不是复数。' },
  { lessonId: 'wf-compounds', type: 'choice', question: 'This is a ___ (part-time) job.', options: ['part-time', 'parttime', 'parts-time', 'part-times'], answer: 'part-time', explanation: '复合形容词加连字符 part-time。' },
  { lessonId: 'wf-compounds', type: 'fill', question: 'I bought a new ___ (bedside table).', answer: 'bedside table', explanation: '复合名词 n+n，bedside + table（可分开写也可用连字符）。' },
  { lessonId: 'wf-compounds', type: 'correct', question: 'I have two mother-in-laws.', answer: 'I have two mothers-in-law.', explanation: '复合名词复数在主名词（law）上变。' },
  { lessonId: 'wf-compounds', type: 'choice', question: 'There are five ___ (looker-on) watching the game.', options: ['looker-on', 'lookers-on', 'lookers-ones', 'looker-ons'], answer: 'lookers-on', explanation: '复合名词复数在主名词（前面的 looker）上变。' },

  // wf-related-pairs (7)
  { lessonId: 'wf-related-pairs', type: 'choice', question: 'His ___ (succeed n.) made him happy.', options: ['succeed', 'success', 'successful', 'successfully'], answer: 'success', explanation: 'success 是名词；succeed 是动词。' },
  { lessonId: 'wf-related-pairs', type: 'fill', question: 'He will ___ (succeed v.) in the exam.', answer: 'succeed', explanation: '动词 succeed。' },
  { lessonId: 'wf-related-pairs', type: 'correct', question: 'I success in the exam.', answer: 'I succeed in the exam.', explanation: 'success 是名词；动词用 succeed。' },
  { lessonId: 'wf-related-pairs', type: 'choice', question: 'Please ___ (advise) me on what to do.', options: ['advice', 'advise', 'advices', 'advisable'], answer: 'advise', explanation: '动词 advise；名词 advice（不可数）。' },
  { lessonId: 'wf-related-pairs', type: 'fill', question: 'She gave me some good ___ (advice n.).', answer: 'advice', explanation: '名词 advice，不可数。' },
  { lessonId: 'wf-related-pairs', type: 'correct', question: 'She adviced me to go.', answer: 'She advised me to go.', explanation: 'advise 的过去式是 advised（-se 不变 -sed）。' },
  { lessonId: 'wf-related-pairs', type: 'choice', question: 'His ___ (lose n.) is a great loss.', options: ['lose', 'loss', 'lost', 'loosing'], answer: 'loss', explanation: 'lose 是动词；名词是 loss。' },

  // wf-ing-ed-adjectives (7)
  { lessonId: 'wf-ing-ed-adjectives', type: 'choice', question: 'The movie is ___ (interest).', options: ['interested', 'interesting', 'interest', 'interests'], answer: 'interesting', explanation: '物用 -ing。' },
  { lessonId: 'wf-ing-ed-adjectives', type: 'fill', question: 'I am ___ (interest) in the movie.', answer: 'interested', explanation: '人用 -ed。' },
  { lessonId: 'wf-ing-ed-adjectives', type: 'correct', question: 'I am interesting in the book.', answer: 'I am interested in the book.', explanation: '"我对书感兴趣"人感受用 -ed。' },
  { lessonId: 'wf-ing-ed-adjectives', type: 'choice', question: 'The news was ___ (shock).', options: ['shocked', 'shocking', 'shock', 'shocks'], answer: 'shocking', explanation: '消息本身特征用 -ing。' },
  { lessonId: 'wf-ing-ed-adjectives', type: 'fill', question: 'We were ___ (shock) by the news.', answer: 'shocked', explanation: '人的感受用 -ed。' },
  { lessonId: 'wf-ing-ed-adjectives', type: 'correct', question: 'The movie was bored.', answer: 'The movie was boring.', explanation: '电影特征用 -ing；-ed 表人的感受。' },
  { lessonId: 'wf-ing-ed-adjectives', type: 'choice', question: 'The film is ___ (excite). I am very ___ (excite).', options: ['excited, exciting', 'exciting, excited', 'excites, exciting', 'exciting, exciting'], answer: 'exciting, excited', explanation: '物用 -ing，人用 -ed。' },

  // wf-abbreviations (7)
  { lessonId: 'wf-abbreviations', type: 'choice', question: 'I ___ (am) looking forward to seeing you.', options: ['am', 'I\'m', '\'m', 'Im'], answer: 'I\'m', explanation: 'I am 的缩约词是 I\'m（必须有撇号）。' },
  { lessonId: 'wf-abbreviations', type: 'fill', question: 'He ___ (will not) come.', answer: 'won\'t', explanation: 'will not 的不规则缩约是 won\'t。' },
  { lessonId: 'wf-abbreviations', type: 'correct', question: 'He dont know.', answer: 'He doesn\'t know.', explanation: '第三人称单数否定用 doesn\'t；缩约必须加撇号。' },
  { lessonId: 'wf-abbreviations', type: 'choice', question: 'The city was covered in ___ (smoke + fog).', options: ['smog', 'smug', 'foggy', 'smoky'], answer: 'smog', explanation: 'smog = smoke + fog（混成词）。' },
  { lessonId: 'wf-abbreviations', type: 'fill', question: 'Let\'s have ___ (breakfast + lunch) on Sunday.', answer: 'brunch', explanation: 'brunch = breakfast + lunch。' },
  { lessonId: 'wf-abbreviations', type: 'correct', question: 'I am go there.', answer: 'I\'m going there.', explanation: '缩约 I\'m + 现在进行时 am going。' },
  { lessonId: 'wf-abbreviations', type: 'choice', question: 'She works at the UN. UN stands for ___ ___ ___.', options: ['United Nations', 'United Nation', 'United Network', 'Universal Nations'], answer: 'United Nations', explanation: 'UN = United Nations。' },

  // wf-number-prefixes (7)
  { lessonId: 'wf-number-prefixes', type: 'choice', question: 'A ___ (3 sides) has three sides.', options: ['bicycle', 'triangle', 'octagon', 'pentagon'], answer: 'triangle', explanation: 'tri- = 三，triangle = 三角形。' },
  { lessonId: 'wf-number-prefixes', type: 'fill', question: 'She is in her ___ (20-29 years old).', answer: 'twenties', explanation: '年代必须加 -s：in her twenties。' },
  { lessonId: 'wf-number-prefixes', type: 'correct', question: 'She is in her twenty.', answer: 'She is in her twenties.', explanation: '表示年龄段必须加 -s。' },
  { lessonId: 'wf-number-prefixes', type: 'choice', question: 'October comes from Latin "octo", meaning ___.', options: ['ten', 'seven', 'eight', 'nine'], answer: 'eight', explanation: 'oct- = 八（古罗马历第 8 月）。' },
  { lessonId: 'wf-number-prefixes', type: 'fill', question: 'A ___ (5 sides) shape is a pentagon.', answer: 'five-sided', explanation: 'five + -sided 复合形容词。' },
  { lessonId: 'wf-number-prefixes', type: 'correct', question: 'He rides a tricycle. (Wait — 1 wheel?)', answer: 'He rides a unicycle.', explanation: 'uni- = 一；tri- = 三；two 轮用 bicycle。' },
  { lessonId: 'wf-number-prefixes', type: 'choice', question: 'A ___ (2 wheels) has two wheels.', options: ['unicycle', 'tricycle', 'bicycle', 'motorcycle'], answer: 'bicycle', explanation: 'bi- = 二，bicycle = 自行车（双轮）。' },

  // wf-time-date (7)
  { lessonId: 'wf-time-date', type: 'choice', question: 'My birthday is on ___ 5th.', options: ['June', '5 June', 'the June 5', 'June of 5'], answer: 'June', explanation: '美式 May 5th / June 5th。' },
  { lessonId: 'wf-time-date', type: 'fill', question: 'I was born in ___ (1995).', answer: 'nineteen ninety-five', explanation: '年份两位两位读，1905 = nineteen o five。' },
  { lessonId: 'wf-time-date', type: 'correct', question: 'She was born in one thousand nine hundred ninety-five.', answer: 'She was born in nineteen ninety-five.', explanation: '年份两位两位读，不用完整读千位。' },
  { lessonId: 'wf-time-date', type: 'choice', question: 'It\'s 7:15. How to say it?', options: ['seven fifteen', 'a quarter past seven', 'both A and B', 'seven past fifteen'], answer: 'both A and B', explanation: '7:15 = seven fifteen / a quarter past seven。' },
  { lessonId: 'wf-time-date', type: 'fill', question: 'She arrived at ___ (half past three).', answer: 'half past three', explanation: '3:30 = half past three。' },
  { lessonId: 'wf-time-date', type: 'correct', question: 'It is seven fifteen o\'clock.', answer: 'It is seven fifteen.', explanation: 'o\'clock 仅用于整点；非整点不加 o\'clock。' },
  { lessonId: 'wf-time-date', type: 'choice', question: 'The 1990s is pronounced as ___.', options: ['nineteen ninety', 'nineteen hundreds', 'the nineties', 'both A and C'], answer: 'both A and C', explanation: '年代可读 nineteen ninety / the nineties（必加 -s）。' },

  // wf-sentence-patterns (7)
  { lessonId: 'wf-sentence-patterns', type: 'choice', question: 'Birds fly. This is sentence pattern ___.', options: ['S+V', 'S+V+O', 'S+V+P', 'S+V+O+O'], answer: 'S+V', explanation: '主谓句型：S+V。' },
  { lessonId: 'wf-sentence-patterns', type: 'fill', question: 'I love music. This is sentence pattern ___.', answer: 'S+V+O', explanation: '主谓宾结构：S+V+O。' },
  { lessonId: 'wf-sentence-patterns', type: 'correct', question: 'He gave a book. (Incomplete)', answer: 'He gave me a book.', explanation: '双宾语动词需要间接宾语和直接宾语。' },
  { lessonId: 'wf-sentence-patterns', type: 'choice', question: 'We elected him monitor. This is pattern ___.', options: ['S+V', 'S+V+O', 'S+V+O+O', 'S+V+O+C'], answer: 'S+V+O+C', explanation: '主谓宾宾补：elect sb + 宾补。' },
  { lessonId: 'wf-sentence-patterns', type: 'fill', question: 'He is happy. This is pattern ___.', answer: 'S+V+P', explanation: '主系表结构：S+V+P。' },
  { lessonId: 'wf-sentence-patterns', type: 'correct', question: 'She is a teacher. (Misread as S+V+O)', answer: 'She is a teacher. (Pattern: S+V+P, 系表结构)', explanation: 'is a teacher 是系表结构，不是主谓宾。' },
  { lessonId: 'wf-sentence-patterns', type: 'choice', question: '___ modifies nouns; ___ modifies verbs.', options: ['Adverb, Adjective', 'Adjective, Adverb', 'Subject, Object', 'Noun, Verb'], answer: 'Adjective, Adverb', explanation: '形容词作定语修饰名词；副词作状语修饰动词。' },

  // wf-ch-en-differences (7)
  { lessonId: 'wf-ch-en-differences', type: 'choice', question: 'I ___ (think) he will come.', options: ['think he is not', 'don\'t think he will', 'don\'t think he is', 'no think'], answer: 'don\'t think he will', explanation: '否定转移：think 等动词的宾语从句否定前移到主句。' },
  { lessonId: 'wf-ch-en-differences', type: 'fill', question: 'I met him ___ Beijing yesterday.', answer: 'in', explanation: '地点在前，时间在后。' },
  { lessonId: 'wf-ch-en-differences', type: 'correct', question: 'I think he is not right.', answer: 'I don\'t think he is right.', explanation: '否定转移：think 后从句否定要前移到主句。' },
  { lessonId: 'wf-ch-en-differences', type: 'choice', question: 'In English, adjectives follow a specific order. ___ goes first.', options: ['Opinion', 'Size', 'Color', 'Material'], answer: 'Opinion', explanation: '形容词顺序：观点→大小→颜色→材料→用途。' },
  { lessonId: 'wf-ch-en-differences', type: 'fill', question: 'She has a beautiful ___ (small old red Italian leather) bag.', answer: 'small old red Italian leather', explanation: '形容词顺序：观点→大小→年龄→颜色→国籍→材料。' },
  { lessonId: 'wf-ch-en-differences', type: 'correct', question: 'Yesterday I met him in Beijing.', answer: 'I met him in Beijing yesterday.', explanation: '英文先地点后时间，中文相反。' },
  { lessonId: 'wf-ch-en-differences', type: 'choice', question: '"开车要小心" is best translated as ___.', options: ['Drive careful.', 'Be careful when driving.', 'You must be careful when driving.', 'To drive careful.'], answer: 'You must be careful when driving.', explanation: '英文必须有主语；动名词 driving 表伴随。' },

  // --- sub-clause-object (6题) ---
  { lessonId: 'sub-clause-object', type: 'choice', question: 'I think ___ (that) he is right.', options: ['that', 'which', 'what', 'if'], answer: 'that', explanation: '陈述句作宾语用 that 引导，口语中可省略。' },
  { lessonId: 'sub-clause-object', type: 'fill', question: 'I wonder ___ he is at home.（是否）', answer: 'whether / if', explanation: '一般疑问句作宾语用 whether 或 if 引导。' },
  { lessonId: 'sub-clause-object', type: 'correct', question: 'Could you tell me where does he live?', answer: 'Could you tell me where he lives?', explanation: '宾语从句必须用陈述语序，主语在前动词在后。' },
  { lessonId: 'sub-clause-object', type: 'choice', question: 'Could you tell me ___ the train station is?', options: ['where', 'where is', 'what', 'when is'], answer: 'where', explanation: '特殊疑问句作宾语保留疑问词，用陈述语序。' },
  { lessonId: 'sub-clause-object', type: 'fill', question: 'She doesn\'t know ___ he will come tomorrow.', answer: 'whether / if', explanation: '对将来不确定用 whether / if 引导。' },
  { lessonId: 'sub-clause-object', type: 'correct', question: 'He said me that he was tired.', answer: 'He told me that he was tired.', explanation: '陈述内容用 tell / say to，say 不接双宾语；say 后接 that 从句。' },

  // --- sub-clause-adverbial (6题) ---
  { lessonId: 'sub-clause-adverbial', type: 'choice', question: 'When he ___, I will tell him the news.', options: ['arrives', 'will arrive', 'arrived', 'is arriving'], answer: 'arrives', explanation: '主将从现：主句将来时，时间状语从句用一般现在时。' },
  { lessonId: 'sub-clause-adverbial', type: 'fill', question: 'She stayed home ___ she was ill.（因为）', answer: 'because', explanation: 'because 引导原因状语从句（最强因果关系）。' },
  { lessonId: 'sub-clause-adverbial', type: 'correct', question: 'Because he was tired, so he went to bed.', answer: 'Because he was tired, he went to bed.', explanation: 'because 与 so 不可并用，保留其一。' },
  { lessonId: 'sub-clause-adverbial', type: 'choice', question: '___ he is young, he is very mature.', options: ['Although', 'Because', 'If', 'So'], answer: 'Although', explanation: 'although / though 引导让步状语从句（虽然…但是…）。' },
  { lessonId: 'sub-clause-adverbial', type: 'fill', question: 'If it ___ tomorrow, we will cancel the trip.', answer: 'rains', explanation: '主将从现：if 条件句用一般现在时。' },
  { lessonId: 'sub-clause-adverbial', type: 'correct', question: 'Although he is rich, but he is unhappy.', answer: 'Although he is rich, he is unhappy.', explanation: 'although 与 but 不可并用，保留其一。' },

  // --- sub-clause-relative (6题) ---
  { lessonId: 'sub-clause-relative', type: 'choice', question: 'The man ___ is over there is my father.', options: ['who', 'which', 'where', 'what'], answer: 'who', explanation: '指人做主语用关系代词 who（不用 which）。' },
  { lessonId: 'sub-clause-relative', type: 'fill', question: 'This is the city ___ I was born.（地点）', answer: 'where', explanation: '表地点用关系副词 where (= in which)。' },
  { lessonId: 'sub-clause-relative', type: 'correct', question: 'The man which is talking to my mother is Tom.', answer: 'The man who is talking to my mother is Tom.', explanation: '指人用 who / that，不用 which。' },
  { lessonId: 'sub-clause-relative', type: 'choice', question: 'I have a friend ___ father is a pilot.', options: ['whose', 'who', 'which', 'whom'], answer: 'whose', explanation: 'whose 表所属关系（某人的），既可指人也可指物。' },
  { lessonId: 'sub-clause-relative', type: 'fill', question: 'The book ___ I bought yesterday is interesting.', answer: 'which/that', explanation: '物作宾语用 which / that，常可省略。' },
  { lessonId: 'sub-clause-relative', type: 'correct', question: 'This is the house where I visited last year.', answer: 'This is the house (which/that) I visited last year.', explanation: 'visit 缺宾语用 which/that（=the house which I visited），不是地点状语不能用 where。' },
]
