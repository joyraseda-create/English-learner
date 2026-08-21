import type { GrammarExercise } from '../grammarData'

export const advancedExercises: GrammarExercise[] = [
  // ===================== 高级练习 =====================

  // --- present-perfect-simple-vs-continuous (8题) ---
  { lessonId: 'present-perfect-simple-vs-continuous', type: 'correct', question: 'I have been writing three letters.', answer: 'I have written three letters.', explanation: '数量完成用一般完成时。' },
  { lessonId: 'present-perfect-simple-vs-continuous', type: 'choice', question: 'I ___ the room all morning.', options: ['have painted', 'have been painting', 'painted', 'am painting'], answer: 'have been painting', explanation: '强调持续过程用完成进行时。' },
  { lessonId: 'present-perfect-simple-vs-continuous', type: 'fill', question: 'I ___ (write) five emails today.', answer: 'have written', explanation: '强调完成的数量用现在完成时（一般式）。' },
  { lessonId: 'present-perfect-simple-vs-continuous', type: 'choice', question: 'She\'s out of breath. She ___.', options: ['has run', 'has been running', 'is running', 'runs'], answer: 'has been running', explanation: '强调一直在做这个动作（导致现在累），用完成进行时。' },
  { lessonId: 'present-perfect-simple-vs-continuous', type: 'fill', question: 'I ___ (read) this book all week, but I\'m only halfway through.', answer: "have been reading", explanation: '强调还在持续的过程，用完成进行时。' },
  { lessonId: 'present-perfect-simple-vs-continuous', type: 'correct', question: 'I have been knowing him for years.', answer: 'I have known him for years.', explanation: 'know 是状态动词，不用进行时。' },
  { lessonId: 'present-perfect-simple-vs-continuous', type: 'choice', question: 'How many books ___ this year?', options: ['have you read', 'have you been reading', 'did you read', 'are you reading'], answer: 'have you read', explanation: '问数量用现在完成时（一般式）。' },
  { lessonId: 'present-perfect-simple-vs-continuous', type: 'fill', question: 'He ___ (work) here since 2010. He still works here.', answer: 'has worked / has been working', explanation: '现在完成时和完成进行时都可以表示持续到现在的动作。' },

  // --- past-perfect-continuous (6题) ---
  { lessonId: 'past-perfect-continuous', type: 'correct', question: 'She had been studied for hours.', answer: 'She had been studying for hours.', explanation: '完成进行时用 had been + 动词-ing。' },
  { lessonId: 'past-perfect-continuous', type: 'choice', question: 'The ground was wet because it ___.', options: ['rained', 'had rained', 'had been raining', 'was raining'], answer: 'had been raining', explanation: '之前持续下雨用过去完成进行时。' },
  { lessonId: 'past-perfect-continuous', type: 'fill', question: 'He was tired because he ___ (work) all day.', answer: 'had been working', explanation: '过去之前一直在做的事，用过去完成进行时。' },
  { lessonId: 'past-perfect-continuous', type: 'choice', question: 'She had been waiting ___ two hours before he finally arrived.', options: ['since', 'for', 'in', 'at'], answer: 'for', explanation: 'for + 时间段。' },
  { lessonId: 'past-perfect-continuous', type: 'fill', question: 'I ___ (drive) for an hour when the car broke down.', answer: 'had been driving', explanation: '在车坏之前一直在开车，用过去完成进行时。' },
  { lessonId: 'past-perfect-continuous', type: 'correct', question: 'They had been played tennis all afternoon.', answer: 'They had been playing tennis all afternoon.', explanation: '过去完成进行时：had been + doing。' },

  // --- future-in-the-past (6题) ---
  { lessonId: 'future-in-the-past', type: 'correct', question: 'He said he will call me.', answer: 'He said he would call me.', explanation: '间接引语中 will → would。' },
  { lessonId: 'future-in-the-past', type: 'fill', question: 'She ___ (be) going to apply but changed her mind.', answer: 'was', explanation: 'was going to 表示过去计划的将来。' },
  { lessonId: 'future-in-the-past', type: 'choice', question: 'I knew he ___ pass the exam.', options: ['will', 'would', 'can', 'shall'], answer: 'would', explanation: '从过去的角度看将来，用 would。' },
  { lessonId: 'future-in-the-past', type: 'fill', question: 'They told me they ___ (arrive) the next day.', answer: 'would arrive', explanation: 'the next day 是过去的将来，用 would + 动词原形。' },
  { lessonId: 'future-in-the-past', type: 'correct', question: 'I was about leaving when the phone rang.', answer: 'I was about to leave when the phone rang.', explanation: 'be about to do 表示正要做某事。' },
  { lessonId: 'future-in-the-past', type: 'choice', question: 'She was ___ when I saw her.', options: ['about to leave', 'about leaving', 'about leave', 'to leave about'], answer: 'about to leave', explanation: 'be about to do 正要做某事。' },

  // --- modals-past (8题) ---
  { lessonId: 'modals-past', type: 'correct', question: 'It must rained last night.', answer: 'It must have rained last night.', explanation: '对过去的推测用 must have + 过去分词。' },
  { lessonId: 'modals-past', type: 'choice', question: 'You ___ told me earlier.', options: ['should have', 'should', 'must', 'could'], answer: 'should have', explanation: '本应该做用 should have + 过去分词。' },
  { lessonId: 'modals-past', type: 'fill', question: 'She ___ (can\'t have, forget) my birthday. She\'s usually so good at remembering.', answer: "can't have forgotten", explanation: '对过去的否定推测（不可能）用 can\'t have + 过去分词。' },
  { lessonId: 'modals-past', type: 'choice', question: 'I ___ the exam, but I was too nervous.', options: ['could pass', 'could have passed', 'must have passed', 'should pass'], answer: 'could have passed', explanation: '本能够通过（但没通过）用 could have + 过去分词。' },
  { lessonId: 'modals-past', type: 'fill', question: 'You ___ (needn\'t, come) so early. The meeting was canceled.', answer: "needn't have come", explanation: '本不必做（但做了）用 needn\'t have + 过去分词。' },
  { lessonId: 'modals-past', type: 'correct', question: 'He must has gone home.', answer: 'He must have gone home.', explanation: 'must have + 过去分词，不用 has。' },
  { lessonId: 'modals-past', type: 'choice', question: 'The lights are off. They ___ already ___.', options: ['must have, left', 'should have, left', 'could have, left', 'would have, left'], answer: 'must have, left', explanation: '有根据的肯定推测用 must have + 过去分词。' },
  { lessonId: 'modals-past', type: 'fill', question: 'I ___ (may, lose) my keys. I can\'t find them anywhere.', answer: 'may have lost', explanation: '对过去可能发生的事用 may have + 过去分词。' },

  // --- passive-advanced (8题) ---
  { lessonId: 'passive-advanced', type: 'correct', question: 'I cut my hair yesterday.（让别人剪的）', answer: 'I had my hair cut yesterday.', explanation: '让别人做某事用 have + 宾语 + 过去分词。' },
  { lessonId: 'passive-advanced', type: 'choice', question: '___ is believed that he is innocent.', options: ['It', 'He', 'That', 'This'], answer: 'It', explanation: 'It is said/believed that 是固定句型。' },
  { lessonId: 'passive-advanced', type: 'fill', question: 'She got ___ (promote) last month.', answer: 'promoted', explanation: 'get + 过去分词表示被动，更口语化。' },
  { lessonId: 'passive-advanced', type: 'choice', question: 'The report needs ___.', options: ['to finish', 'to be finished', 'finish', 'finished'], answer: 'to be finished', explanation: 'need to be done 需要被做。' },
  { lessonId: 'passive-advanced', type: 'fill', question: 'I had my watch ___ (steal) last week.', answer: 'stolen', explanation: 'have sth done 表示遭遇到不好的事。' },
  { lessonId: 'passive-advanced', type: 'correct', question: 'He was born in 1990 by his mother.', answer: 'He was born in 1990.', explanation: 'be born 通常不加 by 短语。' },
  { lessonId: 'passive-advanced', type: 'choice', question: 'The problem is worth ___.', options: ['discussing', 'to discuss', 'discussed', 'being discussed'], answer: 'discussing', explanation: 'be worth doing 主动形式表被动意义。' },
  { lessonId: 'passive-advanced', type: 'fill', question: 'The book is said ___ (translate) into 20 languages.', answer: 'to have been translated', explanation: 'sth is said to have been done 据说已经被...' },

  // --- mixed-conditionals (6题) ---
  { lessonId: 'mixed-conditionals', type: 'correct', question: 'If I had studied medicine, I would have been a doctor now.', answer: 'If I had studied medicine, I would be a doctor now.', explanation: '过去条件→现在结果，主句用 would + 动词原形。' },
  { lessonId: 'mixed-conditionals', type: 'choice', question: 'If I ___ taken that job, I would be living in London now.', options: ['had', 'have', 'was', 'would'], answer: 'had', explanation: '过去条件用 If + had done。' },
  { lessonId: 'mixed-conditionals', type: 'fill', question: 'If I ___ (be) taller, I would have become a basketball player.', answer: 'were', explanation: '与现在事实相反的条件 → 过去的结果，是混合虚拟。但这里 if 从句表现在状态用 were。' },
  { lessonId: 'mixed-conditionals', type: 'choice', question: 'If I ___ you, I would have accepted the offer.', options: ['am', 'was', 'were', 'had been'], answer: 'were', explanation: 'if I were you（与现在事实相反）+ 主句 would have done（过去结果）。' },
  { lessonId: 'mixed-conditionals', type: 'correct', question: 'If he hadn\'t missed the bus, he would be late now.', answer: 'If he hadn\'t missed the bus, he wouldn\'t be late now.', explanation: '过去否定条件 → 现在结果，主句用 wouldn\'t do。' },
  { lessonId: 'mixed-conditionals', type: 'fill', question: 'If she ___ (study) harder, she would have a better job now.', answer: 'had studied', explanation: '过去条件 → 现在结果，if 从句用过去完成时。' },

  // --- inversion (8题) ---
  { lessonId: 'inversion', type: 'correct', question: 'Never I have seen such a place.', answer: 'Never have I seen such a place.', explanation: '否定副词放句首时部分倒装。' },
  { lessonId: 'inversion', type: 'choice', question: '___ I known the truth, I would have helped.', options: ['If', 'Had', 'Have', 'Did'], answer: 'Had', explanation: '省略 if 的虚拟条件句倒装。' },
  { lessonId: 'inversion', type: 'fill', question: 'Rarely ___ (she, go) to the cinema.', answer: 'does she go', explanation: 'rarely 放句首用部分倒装。' },
  { lessonId: 'inversion', type: 'choice', question: 'Not only ___ the book, but he also wrote it.', options: ['he read', 'did he read', 'he did read', 'read he'], answer: 'did he read', explanation: 'not only 放句首用部分倒装。' },
  { lessonId: 'inversion', type: 'fill', question: 'Only then ___ (I, realize) my mistake.', answer: 'did I realize', explanation: 'only + 状语放句首用部分倒装。' },
  { lessonId: 'inversion', type: 'correct', question: 'Seldom I have heard such nonsense.', answer: 'Seldom have I heard such nonsense.', explanation: 'seldom 放句首用部分倒装。' },
  { lessonId: 'inversion', type: 'choice', question: 'No sooner ___ home than it started to rain.', options: ['I got', 'did I get', 'had I got', 'I had got'], answer: 'had I got', explanation: 'no sooner...than 用过去完成时 + 倒装。' },
  { lessonId: 'inversion', type: 'fill', question: 'Hardly ___ (she, finish) speaking when the bell rang.', answer: 'had she finished', explanation: 'hardly...when 用过去完成时 + 倒装。' },

  // --- cleft-sentences (6题) ---
  { lessonId: 'cleft-sentences', type: 'correct', question: 'It was John that he broke the window.', answer: 'It was John who/that broke the window.', explanation: '强调句中不应有多余的 he。' },
  { lessonId: 'cleft-sentences', type: 'fill', question: '___ I need is more time.', answer: 'What', explanation: 'What...is... 也是一种强调句型。' },
  { lessonId: 'cleft-sentences', type: 'choice', question: 'It was not until midnight ___ he came back.', options: ['that', 'when', 'before', 'then'], answer: 'that', explanation: '强调 not until 句型用 It is/was not until...that...。' },
  { lessonId: 'cleft-sentences', type: 'fill', question: 'It was in Paris ___ I met my wife.', answer: 'that', explanation: '强调地点用 It was + 地点 + that...。' },
  { lessonId: 'cleft-sentences', type: 'correct', question: 'It is because he is lazy why he failed.', answer: 'It is because he is lazy that he failed.', explanation: '强调原因状语从句用 that，不用 why。' },
  { lessonId: 'cleft-sentences', type: 'choice', question: 'What ___ is that we need more time.', options: ['matters', 'does matter', 'matter', 'is matters'], answer: 'matters', explanation: 'What matters is... 重要的是...。' },

  // --- noun-clauses (8题) ---
  { lessonId: 'noun-clauses', type: 'correct', question: 'I don\'t know where is he.', answer: "I don't know where he is.", explanation: '名词性从句用陈述语序。' },
  { lessonId: 'noun-clauses', type: 'choice', question: '___ she will come is uncertain.', options: ['If', 'Whether', 'That', 'What'], answer: 'Whether', explanation: '句首用 whether，不用 if。' },
  { lessonId: 'noun-clauses', type: 'fill', question: '___ he said was true.', answer: 'What', explanation: 'what 引导主语从句，相当于 the thing that。' },
  { lessonId: 'noun-clauses', type: 'choice', question: 'The fact ___ he lied to me hurts.', options: ['which', 'that', 'what', 'why'], answer: 'that', explanation: 'that 引导同位语从句，说明 fact 的内容。' },
  { lessonId: 'noun-clauses', type: 'fill', question: 'I have no idea ___ he went.', answer: 'where', explanation: 'have no idea 后接同位语从句，where 引导。' },
  { lessonId: 'noun-clauses', type: 'correct', question: 'I think that not he is right.', answer: 'I don\'t think he is right.', explanation: '宾语从句的否定要前移到主句。' },
  { lessonId: 'noun-clauses', type: 'choice', question: 'It is important ___ we stay calm.', options: ['that', 'what', 'which', 'whether'], answer: 'that', explanation: 'It is important that... 句型中用 that 引导主语从句。' },
  { lessonId: 'noun-clauses', type: 'fill', question: 'The question is ___ we can finish on time.', answer: 'whether', explanation: 'whether 引导表语从句，表示"是否"。' },

  // --- ellipsis (6题) ---
  { lessonId: 'ellipsis', type: 'correct', question: 'While walk in the park, I met a friend.', answer: 'While walking in the park, I met a friend.', explanation: '省略主语+be 后保留 -ing。' },
  { lessonId: 'ellipsis', type: 'choice', question: 'Though ___, he kept working.', options: ['tired', 'he tired', 'tiring', 'he was tiring'], answer: 'tired', explanation: '省略主语+be，保留形容词。' },
  { lessonId: 'ellipsis', type: 'fill', question: 'If ___ (ask), say you don\'t know anything.', answer: 'asked', explanation: 'if + 过去分词，表示被动。' },
  { lessonId: 'ellipsis', type: 'choice', question: 'He is taller than ___.', options: ['I am', 'I', 'me am', 'me is'], answer: 'I', explanation: '比较状语从句中可省略与主句相同的部分。' },
  { lessonId: 'ellipsis', type: 'correct', question: 'When was in Paris, I visited the Eiffel Tower.', answer: 'When in Paris, I visited the Eiffel Tower.', explanation: 'when 引导的从句中，可省略主语 + be。' },
  { lessonId: 'ellipsis', type: 'fill', question: 'She stood there as if ___ (wait) for someone.', answer: 'waiting', explanation: 'as if + doing，省略主语 + be。' },

  // --- conjunctions-contrast (8题) ---
  { lessonId: 'conjunctions-contrast', type: 'correct', question: 'Despite it was raining, we went out.', answer: 'Although it was raining, we went out.', explanation: 'despite 后接名词/动名词，不接从句。' },
  { lessonId: 'conjunctions-contrast', type: 'choice', question: '___ the rain, we went out.', options: ['Although', 'Despite', 'Because', 'Since'], answer: 'Despite', explanation: 'despite + 名词。' },
  { lessonId: 'conjunctions-contrast', type: 'correct', question: 'Although tired, but she kept working.', answer: 'Although tired, she kept working.', explanation: 'although 和 but 不能连用。' },
  { lessonId: 'conjunctions-contrast', type: 'choice', question: '___ he is rich, he is not happy.', options: ['Although', 'Despite', 'In spite of', 'However'], answer: 'Although', explanation: 'although + 从句。' },
  { lessonId: 'conjunctions-contrast', type: 'fill', question: '___ the fact that he was tired, he helped me.', answer: 'Despite', explanation: 'despite the fact that + 从句。' },
  { lessonId: 'conjunctions-contrast', type: 'correct', question: 'Even she is young, she is very mature.', answer: 'Even though she is young, she is very mature.', explanation: 'even 不能引导从句，要用 even though。' },
  { lessonId: 'conjunctions-contrast', type: 'choice', question: 'It was raining; ___, we went out.', options: ['however', 'although', 'despite', 'in spite of'], answer: 'however', explanation: 'however 可以连接两个独立的句子，用分号或句号隔开。' },
  { lessonId: 'conjunctions-contrast', type: 'fill', question: '___ hard he tried, he couldn\'t lift it.', answer: 'However', explanation: 'however + 形容词/副词 + 主语 + 动词，表示"无论多么"。' },

  // --- reduced-relative-clauses (6题) ---
  { lessonId: 'reduced-relative-clauses', type: 'correct', question: 'The man stands there is my father.', answer: 'The man standing there is my father.', explanation: '简化为 -ing 形式。' },
  { lessonId: 'reduced-relative-clauses', type: 'choice', question: 'The book ___ by him is a bestseller.', options: ['writing', 'written', 'writes', 'wrote'], answer: 'written', explanation: '被动简化为 -ed 形式。' },
  { lessonId: 'reduced-relative-clauses', type: 'fill', question: 'The people ___ (wait) for the bus are getting impatient.', answer: 'waiting', explanation: '主动且正在进行，简化为 -ing 形式。' },
  { lessonId: 'reduced-relative-clauses', type: 'choice', question: 'The house ___ last year is very beautiful.', options: ['built', 'building', 'was built', 'build'], answer: 'built', explanation: '被动且已完成，简化为过去分词。' },
  { lessonId: 'reduced-relative-clauses', type: 'correct', question: 'The girl is talking to Mary is my sister.', answer: 'The girl talking to Mary is my sister.', explanation: '定语从句简化为 -ing 形式。' },
  { lessonId: 'reduced-relative-clauses', type: 'fill', question: 'The first person ___ (arrive) was Tom.', answer: 'to arrive', explanation: '有序数词修饰时，用不定式作后置定语。' },

  // --- subjunctive-advanced (8题) ---
  { lessonId: 'subjunctive-advanced', type: 'correct', question: 'He suggested that we should left early.', answer: 'He suggested that we (should) leave early.', explanation: 'should + 动词原形。' },
  { lessonId: 'subjunctive-advanced', type: 'fill', question: 'It is essential that everyone ___ (be) informed.', answer: 'be', explanation: '虚拟语气用动词原形（should 可省略）。' },
  { lessonId: 'subjunctive-advanced', type: 'choice', question: 'I wish I ___ a bird.', options: ['am', 'was', 'were', 'be'], answer: 'were', explanation: 'wish 后接虚拟语气，be 动词用 were。' },
  { lessonId: 'subjunctive-advanced', type: 'fill', question: 'If only I ___ (have) more time!', answer: 'had', explanation: 'if only 引导的感叹句用虚拟语气，与现在事实相反用过去时。' },
  { lessonId: 'subjunctive-advanced', type: 'correct', question: 'I would rather you go alone.', answer: 'I would rather you went alone.', explanation: 'would rather + 从句，从句用过去时表示现在/将来。' },
  { lessonId: 'subjunctive-advanced', type: 'choice', question: 'It\'s high time we ___ home.', options: ['go', 'went', 'have gone', 'had gone'], answer: 'went', explanation: 'It\'s (high) time + 从句，用过去时表示虚拟。' },
  { lessonId: 'subjunctive-advanced', type: 'fill', question: 'The teacher demanded that the homework ___ (hand) in on Monday.', answer: 'be handed', explanation: 'demand 后接 that 从句，用 (should) be done 虚拟。' },
  { lessonId: 'subjunctive-advanced', type: 'choice', question: 'Suppose you ___ a million dollars, what would you do?', options: ['have', 'had', 'will have', 'would have'], answer: 'had', explanation: 'suppose 引导的假设用虚拟语气。' },

  // --- articles-advanced (6题) ---
  { lessonId: 'articles-advanced', type: 'correct', question: 'The love is important.', answer: 'Love is important.', explanation: '泛指抽象名词不加 the。' },
  { lessonId: 'articles-advanced', type: 'choice', question: '___ rich should help ___ poor.', options: ['The, the', '-, -', 'A, a', 'The, -'], answer: 'The, the', explanation: 'the + 形容词 = 一类人。' },
  { lessonId: 'articles-advanced', type: 'fill', question: '___ knowledge is power.', answer: '-', explanation: '泛指抽象名词（knowledge）不加冠词。' },
  { lessonId: 'articles-advanced', type: 'choice', question: 'He plays ___ violin beautifully.', options: ['a', 'an', 'the', '-'], answer: 'the', explanation: '乐器前加 the。' },
  { lessonId: 'articles-advanced', type: 'correct', question: 'The history is a fascinating subject.', answer: 'History is a fascinating subject.', explanation: '泛指学科名称不加 the。' },
  { lessonId: 'articles-advanced', type: 'fill', question: '___ Smiths are coming to dinner tonight.', answer: 'The', explanation: 'the + 姓氏复数 = 一家人。' },

  // --- compound-nouns (6题) ---
  { lessonId: 'compound-nouns', type: 'correct', question: 'the stop bus', answer: 'the bus stop', explanation: '名词+名词，前一个修饰后一个。' },
  { lessonId: 'compound-nouns', type: 'choice', question: 'The ___ is closed today.', options: ['swim pool', 'swimming pool', 'swimming\'s pool', 'pool swimming'], answer: 'swimming pool', explanation: '动名词修饰名词。' },
  { lessonId: 'compound-nouns', type: 'fill', question: 'I need a new pair of ___ (太阳镜).', answer: 'sunglasses', explanation: 'sun + glasses = sunglasses 太阳镜。' },
  { lessonId: 'compound-nouns', type: 'choice', question: 'She is a ___ teacher.', options: ['high school', 'high-school', 'high school\'s', 'school high'], answer: 'high school', explanation: '名词短语作定语，用单数形式。' },
  { lessonId: 'compound-nouns', type: 'correct', question: 'There are three passers-bys on the street.', answer: 'There are three passers-by on the street.', explanation: '合成名词复数：主体名词变复数，passers-by。' },
  { lessonId: 'compound-nouns', type: 'fill', question: 'My mother-in-law ___ (be) coming to visit us.', answer: 'is', explanation: 'mother-in-law 的复数是 mothers-in-law，但这里是单数。' },
]
