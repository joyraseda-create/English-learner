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
]
