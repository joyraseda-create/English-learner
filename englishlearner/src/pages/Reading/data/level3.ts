import { ReadingItem } from '../readingData'

// 高级 - 高中及大学阶段 (50篇)
// 每篇文章：id, level=3, serial(1-50), category(限定10个), title, passage, vocabulary(6-10项), phrases(3-4项), questions(serial1-15为6题,16-35为7题,36-50为8题)
// 每道题：id, question, options(4个), answer(0-3), explanation
export const readingData: ReadingItem[] = [
  {
    id: 'read-lv3-01',
    level: 3,
    serial: 1,
    category: '科技前沿',
    title: 'The Quantum Computing Revolution',
    passage:
      'Quantum computing represents a fundamental shift in how we process information. Unlike classical computers that use bits, which represent either 0 or 1, quantum computers use quantum bits, or qubits, that can exist in multiple states simultaneously through a phenomenon known as superposition. This allows quantum machines to perform certain calculations exponentially faster than their classical counterparts. However, quantum computing faces significant obstacles. Qubits are extremely fragile and prone to errors caused by environmental interference, a problem called decoherence. To mitigate this issue, researchers place quantum processors in highly controlled environments, often cooled to temperatures near absolute zero. Despite these challenges, recent breakthroughs in error correction have brought practical quantum computing closer to reality. The implications of this technology are profound. In cryptography, quantum computers could break widely used encryption methods, forcing the development of quantum-resistant security protocols. In drug discovery, they could simulate molecular interactions with unprecedented accuracy, accelerating the development of new medicines. Materials science, climate modeling, and artificial intelligence are other fields poised for transformation. Yet the transition to quantum computing will not happen overnight. Building a fault-tolerant quantum computer remains one of the most ambitious engineering challenges of our time. Furthermore, the educational infrastructure required to train a quantum-literate workforce remains underdeveloped. Universities are scrambling to establish quantum-related curricula, and competition for talent has intensified. As nations and corporations race to achieve quantum supremacy, policymakers must consider how to distribute the benefits of this revolutionary technology fairly across society.',
    vocabulary: [
      { word: 'quantum', phonetic: '/ˈkwɒntəm/', meaning: '量子的；量子论的' },
      { word: 'superposition', phonetic: '/ˌsuːpəˈzɪʃən/', meaning: '叠加(态)' },
      { word: 'qubits', phonetic: '/ˈkjuːbɪts/', meaning: '量子比特' },
      { word: 'decoherence', phonetic: '/ˌdiːkəʊˈhɪərəns/', meaning: '退相干' },
      { word: 'exponentially', phonetic: '/ˌekspəˈnenʃəli/', meaning: '指数级地' },
      { word: 'cryptography', phonetic: '/krɪpˈtɒɡrəfi/', meaning: '密码学' },
      { word: 'unprecedented', phonetic: '/ʌnˈpresɪdentɪd/', meaning: '前所未有的' },
      { word: 'fault-tolerant', phonetic: '/fɔːlt ˈtɒlərənt/', meaning: '容错的' },
      { word: 'supremacy', phonetic: '/suːˈpreməsi/', meaning: '优势；优越性' },
      { word: 'mitigate', phonetic: '/ˈmɪtɪɡeɪt/', meaning: '减轻；缓解' }
    ],
    phrases: [
      { text: 'represents a fundamental shift in how we process information', meaning: '标志着我们处理信息方式的根本性转变' },
      { text: 'prone to errors caused by environmental interference', meaning: '容易因环境干扰而出错' },
      { text: 'brought practical quantum computing closer to reality', meaning: '使实用化量子计算更接近现实' },
      { text: 'force the development of quantum-resistant security protocols', meaning: '迫使人们开发抗量子的安全协议' }
    ],
    questions: [
      { id: 'q3-1', question: 'What is the main advantage of quantum computers over classical computers?', options: ['They consume far less electrical energy.', 'They can perform certain calculations exponentially faster.', 'They are significantly smaller in physical size.', 'They are considerably easier to program.'], answer: 1, explanation: 'The passage states in paragraph 1 that quantum machines "can perform certain calculations exponentially faster than their classical counterparts." This comparative clause, introduced by "Unlike... that..., ... can...", establishes the central advantage and supports option B.' },
      { id: 'q3-2', question: 'According to the passage, what is decoherence?', options: ['A type of quantum bit used in processors.', 'The process of cooling quantum computers.', 'A problem caused by environmental interference.', 'A recent breakthrough in error correction.'], answer: 2, explanation: 'Paragraph 2 explicitly defines decoherence as a problem caused by "environmental interference." Option C paraphrases this definition directly, while the other options describe unrelated technical elements mentioned elsewhere in the passage.' },
      { id: 'q3-3', question: 'Why are quantum processors often cooled to near absolute zero?', options: ['To reduce overall electricity consumption.', 'To make calculations noticeably faster.', 'To mitigate the problem of decoherence.', 'To encrypt sensitive stored data.'], answer: 2, explanation: 'The passage explains that qubits are "prone to errors caused by environmental interference" and that researchers cool processors "to mitigate this issue," referring back to decoherence. The inferential link between cooling and mitigation makes option C correct.' },
      { id: 'q3-4', question: 'Which of the following fields is NOT mentioned as being transformed by quantum computing?', options: ['Modern cryptography and encryption.', 'Modern drug discovery and medicine.', 'Large-scale agriculture and farming.', 'Modern materials science research.'], answer: 2, explanation: 'Paragraph 3 lists cryptography, drug discovery, materials science, climate modeling, and artificial intelligence as fields poised for transformation. Agriculture is conspicuously absent, making option C the only field not mentioned in this enumeration.' },
      { id: 'q3-5', question: 'What social concern does the passage raise about quantum computing?', options: ['It may widen existing disparities in access.', 'It cannot be used for any cryptography.', 'It will replace every classical computer.', 'It completely lacks practical applications.'], answer: 0, explanation: 'The final paragraph raises concerns about "equity and access" and how to "distribute the benefits of this revolutionary technology fairly across society." This argument structure moves from technological capabilities to potential social consequences, supporting option A.' },
      { id: 'q3-6', question: 'What is the author\'s overall tone toward quantum computing?', options: ['Uncritically enthusiastic and admiring.', 'Cautiously optimistic yet realistic.', 'Skeptical and largely dismissive.', 'Completely indifferent and detached.'], answer: 1, explanation: 'The passage acknowledges both the "profound" potential and the "significant obstacles" of quantum computing. The concessive conjunctions "However" and "Yet," together with phrases like "brought practical quantum computing closer to reality," indicate measured optimism, supporting option B.' }
    ]
  },
  {
    id: 'read-lv3-02',
    level: 3,
    serial: 2,
    category: '科技前沿',
    title: 'AI and the Future of Work',
    passage:
      'The rapid advancement of artificial intelligence has sparked intense debate about the future of work. Proponents argue that AI will liberate humans from repetitive tasks, allowing them to focus on creativity and meaningful problem-solving. Critics, however, warn that automation may displace millions of workers, deepening economic inequality and social instability. A growing body of research suggests that AI\'s impact will be neither uniformly catastrophic nor universally beneficial. Instead, its effects will vary significantly across industries, occupations, and geographic regions. Routine clerical work, basic legal research, and many customer service functions are particularly vulnerable to automation. By contrast, jobs requiring emotional intelligence, complex judgment, and physical dexterity in unpredictable environments are likely to remain human domains for the foreseeable future. History offers a useful perspective. Previous technological revolutions, from the steam engine to the internet, ultimately created more jobs than they destroyed, though the transition was often painful. The current AI revolution may follow a similar pattern, but the pace of change appears faster, leaving less time for workers and institutions to adapt. Reskilling programs, robust safety nets, and lifelong learning initiatives have therefore become urgent priorities. Perhaps most importantly, the question is not whether AI will transform work, but how societies will choose to manage that transformation. Whether the technology becomes a force for widespread prosperity or concentrated wealth depends largely on policy decisions, educational investment, and the values that guide its deployment.',
    vocabulary: [
      { word: 'artificial', phonetic: '/ˌɑːtɪˈfɪʃəl/', meaning: '人工的；人造的' },
      { word: 'automation', phonetic: '/ˌɔːtəˈmeɪʃən/', meaning: '自动化' },
      { word: 'displace', phonetic: '/dɪsˈpleɪs/', meaning: '取代；使失业' },
      { word: 'inequality', phonetic: '/ˌɪnɪˈkwɒləti/', meaning: '不平等' },
      { word: 'catastrophic', phonetic: '/ˌkætəˈstrɒfɪk/', meaning: '灾难性的' },
      { word: 'dexterity', phonetic: '/ˈdekstərəti/', meaning: '灵巧；熟练' },
      { word: 'reskilling', phonetic: '/riːˈskɪlɪŋ/', meaning: '再培训' },
      { word: 'deployment', phonetic: '/dɪˈplɔɪmənt/', meaning: '部署；应用' },
      { word: 'transformation', phonetic: '/ˌtrænsfəˈmeɪʃən/', meaning: '转变；变革' },
      { word: 'instability', phonetic: '/ˌɪnstəˈbɪləti/', meaning: '不稳定' }
    ],
    phrases: [
      { text: 'sparked intense debate about the future of work', meaning: '引发了关于工作未来的激烈争论' },
      { text: 'displace millions of workers across many sectors', meaning: '取代数百万跨行业工人的岗位' },
      { text: 'neither uniformly catastrophic nor universally beneficial', meaning: '既非普遍灾难性的，也非普遍有益的' },
      { text: 'remained human domains for the foreseeable future', meaning: '在可预见的未来仍是人类的领域' }
    ],
    questions: [
      { id: 'q3-7', question: 'According to the passage, how will AI most likely affect different industries?', options: ['It will harm all industries in equal measure.', 'It will benefit all industries in equal measure.', 'Its impact will vary significantly across sectors.', 'It will have absolutely no effect on employment.'], answer: 2, explanation: 'Paragraph 2 states explicitly that AI\'s effects "will vary significantly across industries, occupations, and geographic regions." The adverb "significantly" emphasizes variation, directly supporting option C and contrasting with the absolute claims in A and B.' },
      { id: 'q3-8', question: 'Which type of work is described as most vulnerable to AI automation?', options: ['Creative writing and design work.', 'Routine clerical work in offices.', 'Emotional counseling and therapy.', 'Emergency surgery in hospitals.'], answer: 1, explanation: 'The passage specifies that "Routine clerical work, basic legal research, and many customer service functions are particularly vulnerable to automation." Option B is directly cited as vulnerable, while the other options require human qualities described as safer from automation.' },
      { id: 'q3-9', question: 'What historical comparison does the author draw in the passage?', options: ['AI is completely unlike any past technology.', 'Previous technological revolutions ultimately created more jobs.', 'The internet eliminated all middle-class jobs.', 'The steam engine caused permanent unemployment.'], answer: 1, explanation: 'Paragraph 3 observes that "Previous technological revolutions... ultimately created more jobs than they destroyed." This historical analogy uses past examples to suggest a possible pattern for AI, though it also notes the faster pace of current change, supporting option B.' },
      { id: 'q3-10', question: 'What does the passage suggest is the most urgent policy response to AI displacement?', options: ['Banning artificial intelligence entirely worldwide.', 'Investing in reskilling and lifelong learning programs.', 'Reducing working hours in every industry.', 'Increasing tariffs on imported technology products.'], answer: 1, explanation: 'The passage states that "Reskilling programs, robust safety nets, and lifelong learning initiatives have therefore become urgent priorities." The inferential "therefore" links this conclusion to the preceding argument about fast-paced displacement, making option B correct.' },
      { id: 'q3-11', question: 'According to the author, what is the key question about AI and work?', options: ['Whether artificial intelligence will exist at all.', 'Whether AI is technically feasible today.', 'How societies will manage AI\'s transformation.', 'Whether AI can truly think like humans.'], answer: 2, explanation: 'The final paragraph states, "the question is not whether AI will transform work, but how societies will choose to manage that transformation." The rhetorical contrast using "not... but..." shifts emphasis from prediction to governance, supporting option C.' },
      { id: 'q3-12', question: 'What is the author\'s stance on AI\'s overall effect on society?', options: ['AI will inevitably cause mass unemployment.', 'AI will inevitably create universal prosperity.', 'The outcome depends on policy and societal choices.', 'AI has essentially no economic impact.'], answer: 2, explanation: 'The concluding sentence states that whether AI becomes "a force for widespread prosperity or concentrated wealth depends largely on policy decisions, educational investment, and the values that guide its deployment." This conditional structure makes the outcome contingent on human choices, supporting option C.' }
    ]
  },
  {
    id: 'read-lv3-03',
    level: 3,
    serial: 3,
    category: '科技前沿',
    title: 'CRISPR and the Ethics of Gene Editing',
    passage:
      'In 2012, researchers developed CRISPR-Cas9, a revolutionary gene-editing tool that allows scientists to modify DNA with unprecedented precision and ease. Often described as "molecular scissors," CRISPR has transformed biology and opened possibilities once confined to science fiction. Today, it is used in laboratories worldwide to study disease, develop new therapies, and engineer crops resistant to pests and drought. The technology has also raised profound ethical questions. In 2018, a Chinese scientist announced the birth of the first gene-edited babies, an act widely condemned by the scientific community. The incident highlighted the absence of clear international guidelines governing heritable human gene editing. While such edits could potentially eliminate devastating genetic diseases, they also raise concerns about consent, equity, and the very definition of what it means to be human. Proponents argue that responsible gene editing could spare future generations from suffering, while critics caution against a slippery slope toward designer babies and a new form of eugenics. Regulators now face the difficult task of balancing scientific freedom with social responsibility. Some countries have moved to permit certain therapeutic applications while banning enhancements that offer no medical benefit. The coming decade will likely determine whether gene editing becomes a celebrated tool of medicine or a source of lasting moral regret, depending on the frameworks societies choose to adopt.',
    vocabulary: [
      { word: 'CRISPR', phonetic: '/ˈkrɪspər/', meaning: '一种基因编辑技术' },
      { word: 'heritable', phonetic: '/ˈherɪtəbl/', meaning: '可遗传的' },
      { word: 'eugenics', phonetic: '/juːˈdʒenɪks/', meaning: '优生学' },
      { word: 'precision', phonetic: '/prɪˈsɪʒən/', meaning: '精确；精准' },
      { word: 'condemned', phonetic: '/kənˈdemd/', meaning: '谴责；指责' },
      { word: 'enhancement', phonetic: '/ɪnˈhɑːnsmənt/', meaning: '增强；强化' },
      { word: 'eliminate', phonetic: '/ɪˈlɪmɪneɪt/', meaning: '消除；消灭' },
      { word: 'slippery', phonetic: '/ˈslɪpəri/', meaning: '滑的；难以把握的' },
      { word: 'therapeutic', phonetic: '/ˌθerəˈpjuːtɪk/', meaning: '治疗的；治疗性的' },
      { word: 'consent', phonetic: '/kənˈsent/', meaning: '同意；许可' }
    ],
    phrases: [
      { text: 'modify DNA with unprecedented precision and ease', meaning: '以前所未有的精确度和便捷性修改DNA' },
      { text: 'highlighted the absence of clear international guidelines', meaning: '凸显出缺乏明确的国际准则' },
      { text: 'spare future generations from unnecessary suffering', meaning: '使后代免于不必要的痛苦' },
      { text: 'a slippery slope toward designer babies', meaning: '通往"设计婴儿"的滑坡' }
    ],
    questions: [
      { id: 'q3-13', question: 'What is the main purpose of the CRISPR-Cas9 technology described in the passage?', options: ['To replace traditional fossil fuels.', 'To modify DNA with high precision.', 'To communicate across long distances.', 'To monitor global climate change.'], answer: 1, explanation: 'Paragraph 1 states that CRISPR "allows scientists to modify DNA with unprecedented precision and ease." This direct definition identifies gene editing as the technology\'s central purpose, making option B correct.' },
      { id: 'q3-14', question: 'Why was the 2018 announcement of gene-edited babies widely criticized?', options: ['The technology used was completely ineffective.', 'It violated clear international regulations.', 'It highlighted a lack of clear governance frameworks.', 'It proved that human cloning was impossible.'], answer: 2, explanation: 'The passage states that the announcement "highlighted the absence of clear international guidelines governing heritable human gene editing." The contrast between the act and the absence of regulation—not the violation of existing clear rules—makes option C accurate.' },
      { id: 'q3-15', question: 'Which concern about gene editing does the passage specifically mention?', options: ['It might increase global food production.', 'It could lead to a slippery slope toward eugenics.', 'It would reduce dependence on fossil fuels.', 'It could replace all forms of traditional medicine.'], answer: 1, explanation: 'The passage explicitly warns against "a slippery slope toward designer babies and a new form of eugenics." The metaphor "slippery slope" signals an ethical warning, and option B directly echoes the passage\'s language, supporting it as the correct answer.' },
      { id: 'q3-16', question: 'What regulatory approach does the passage describe?', options: ['A complete global ban on all gene editing.', 'Allowing therapeutic use but banning enhancements.', 'Unrestricted scientific freedom in all nations.', 'Government ownership of all biotechnology firms.'], answer: 1, explanation: 'The passage notes that "Some countries have moved to permit certain therapeutic applications while banning enhancements that offer no medical benefit." This middle-ground approach of selective permission matches option B, while the other options represent extremes the passage does not endorse.' },
      { id: 'q3-17', question: 'What does the word "heritable" in paragraph 2 most nearly mean?', options: ['Easily reversible in future generations.', 'Capable of being passed to offspring.', 'Immediately effective in all patients.', 'Strictly forbidden by international law.'], answer: 1, explanation: 'Contextually, "heritable human gene editing" refers to edits that can be transmitted to future generations. The root "herit-" relates to inheritance, and the surrounding phrases "future generations" and "designer babies" reinforce this meaning, making option B correct.' },
      { id: 'q3-18', question: 'According to the author, what will determine whether gene editing is celebrated or regretted?', options: ['The speed of future technological breakthroughs.', 'The cost of medical procedures to patients.', 'The ethical and regulatory frameworks societies adopt.', 'The number of countries that ban the technology.'], answer: 2, explanation: 'The closing sentence states that the outcome "depends on the frameworks societies choose to adopt." This conditional structure places responsibility on collective choices about ethics and regulation, supporting option C over more deterministic alternatives.' }
    ]
  },
  {
    id: 'read-lv3-04',
    level: 3,
    serial: 4,
    category: '科技前沿',
    title: 'Brain-Computer Interfaces: Merging Mind and Machine',
    passage:
      'Brain-computer interfaces, often abbreviated as BCIs, are devices that establish a direct communication pathway between the brain and an external machine. Once the stuff of science fiction, BCIs are now helping paralyzed patients move robotic limbs, communicate through synthetic speech, and even regain a degree of tactile sensation. The technology works by translating electrical signals from neurons into commands that a computer can interpret. Some systems are invasive, requiring surgical implantation of electrodes, while others rely on non-invasive sensors placed on the scalp. Each approach involves trade-offs between signal clarity and medical risk. Beyond medical applications, BCIs are attracting interest from companies hoping to enhance cognitive performance, enable seamless interaction with virtual environments, and even allow humans to control devices by thought alone. Such possibilities have stirred excitement as well as anxiety. Critics warn that BCIs could become yet another arena of inequality, available only to the wealthy, or that they might blur the boundaries between human cognition and artificial systems in unsettling ways. They also raise issues of mental privacy: if a device can read thoughts, who owns the data? As research accelerates, society will need to grapple with these questions before the technology becomes a routine part of daily life. The coming era may demand new legal definitions of identity, agency, and consent.',
    vocabulary: [
      { word: 'interface', phonetic: '/ˈɪntəfeɪs/', meaning: '接口；交互界面' },
      { word: 'paralyzed', phonetic: '/ˈpærəlaɪzd/', meaning: '瘫痪的' },
      { word: 'tactile', phonetic: '/ˈtæktaɪl/', meaning: '触觉的' },
      { word: 'neurons', phonetic: '/ˈnjʊərɒnz/', meaning: '神经元' },
      { word: 'electrodes', phonetic: '/ɪˈlektrəʊdz/', meaning: '电极' },
      { word: 'cognitive', phonetic: '/ˈkɒɡnətɪv/', meaning: '认知的' },
      { word: 'arena', phonetic: '/əˈriːnə/', meaning: '舞台；领域' },
      { word: 'agency', phonetic: '/ˈeɪdʒənsi/', meaning: '能动性；代理' },
      { word: 'non-invasive', phonetic: '/nɒn ɪnˈveɪsɪv/', meaning: '非侵入性的' },
      { word: 'unsettling', phonetic: '/ʌnˈsetlɪŋ/', meaning: '令人不安的' }
    ],
    phrases: [
      { text: 'establish a direct communication pathway between the brain and an external machine', meaning: '在大脑与外部机器之间建立直接的沟通通道' },
      { text: 'regain a degree of tactile sensation in paralyzed limbs', meaning: '在瘫痪肢体上恢复一定程度的触觉' },
      { text: 'blur the boundaries between human cognition and artificial systems', meaning: '模糊人类认知与人工系统之间的界限' },
      { text: 'grapple with these questions before the technology becomes routine', meaning: '在该技术变得司空见惯之前努力应对这些问题' }
    ],
    questions: [
      { id: 'q3-19', question: 'What is the primary function of a brain-computer interface (BCI)?', options: ['To replace damaged human organs entirely.', 'To allow direct communication between brain and machine.', 'To improve the speed of internet connections.', 'To translate spoken languages automatically.'], answer: 1, explanation: 'The passage defines BCIs as devices that "establish a direct communication pathway between the brain and an external machine." This functional definition makes option B the correct answer; the other options describe unrelated technologies.' },
      { id: 'q3-20', question: 'What is one trade-off between invasive and non-invasive BCI systems mentioned in the passage?', options: ['Cost versus portability of the device.', 'Signal clarity versus medical risk.', 'Battery life versus processing speed.', 'Color of the device versus user comfort.'], answer: 1, explanation: 'The passage notes that "Each approach involves trade-offs between signal clarity and medical risk." This paired contrast explicitly identifies the relevant trade-off, making option B the only accurate choice among the listed pairs.' },
      { id: 'q3-21', question: 'Which concern about BCIs does the passage specifically mention?', options: ['They may cause widespread unemployment.', 'They could deepen inequality between groups.', 'They might replace all forms of human communication.', 'They would eliminate the need for education.'], answer: 1, explanation: 'The passage warns that BCIs "could become yet another arena of inequality, available only to the wealthy." This concern about unequal access matches option B, while the other options are not discussed in the passage.' },
      { id: 'q3-22', question: 'What question does the passage raise about mental privacy?', options: ['Whether thoughts can be deleted completely.', 'Who owns the data produced by thought-reading devices?', 'Whether thoughts can be legally copyrighted.', 'Who should pay for brain surgery costs.'], answer: 1, explanation: 'The passage directly asks, "if a device can read thoughts, who owns the data?" This rhetorical question highlights data ownership as a core privacy concern, matching option B precisely.' },
      { id: 'q3-23', question: 'What does the word "tactile" in paragraph 1 most nearly mean?', options: ['Related to vision and sight.', 'Related to touch and physical contact.', 'Related to hearing and sound.', 'Related to taste and flavor.'], answer: 1, explanation: 'In the phrase "regain a degree of tactile sensation," the context refers to physical feeling in paralyzed limbs. The Latin root "tact-" relates to touching, and "sensation" reinforces this meaning, making option B correct.' },
      { id: 'q3-24', question: 'According to the passage, what new concepts might society need to redefine?', options: ['Identity, agency, and consent.', 'Currency, trade, and taxation.', 'Weather, climate, and seasons.', 'Sports, games, and recreation.'], answer: 0, explanation: 'The closing sentence states that the new era "may demand new legal definitions of identity, agency, and consent." This triple enumeration matches option A exactly, and reflects the passage\'s argument about the philosophical challenges of BCIs.' }
    ]
  },
  {
    id: 'read-lv3-05',
    level: 3,
    serial: 5,
    category: '科技前沿',
    title: 'The Rise of Generative AI',
    passage:
      'Generative AI refers to artificial intelligence systems capable of producing original text, images, music, and even code based on patterns learned from vast datasets. Within just a few years, tools built on this technology have moved from research labs into classrooms, newsrooms, and offices around the world. The implications are sweeping. For creative professionals, generative AI offers powerful assistance: it can draft articles, suggest design variations, and brainstorm ideas at remarkable speed. For students, it serves as a tireless tutor that explains difficult concepts on demand. Yet the same capabilities that make these tools useful also raise serious concerns. The line between human-authored and machine-generated content is becoming increasingly difficult to detect, fueling anxieties about academic dishonesty, misinformation, and the erosion of trust in media. Moreover, generative systems often reproduce biases embedded in their training data, perpetuating stereotypes and unfair outcomes. Artists and writers have voiced particular alarm about their livelihoods and the devaluation of human craft. Governments, too, are racing to develop regulations that protect consumers without stifling innovation. Some institutions have begun to demand transparency by requiring AI-generated content to be labeled. Others advocate for stronger intellectual property frameworks to protect creators whose work may have been used without consent. Whether generative AI becomes a partner in human creativity or a force that destabilizes it will depend on the choices societies make today.',
    vocabulary: [
      { word: 'generative', phonetic: '/ˈdʒenərətɪv/', meaning: '生成的；有生产力的' },
      { word: 'datasets', phonetic: '/ˈdeɪtəsets/', meaning: '数据集' },
      { word: 'sweeping', phonetic: '/ˈswiːpɪŋ/', meaning: '广泛的；影响深远的' },
      { word: 'misinformation', phonetic: '/ˌmɪsɪnfəˈmeɪʃən/', meaning: '虚假信息' },
      { word: 'erosion', phonetic: '/ɪˈrəʊʒən/', meaning: '侵蚀；削弱' },
      { word: 'perpetuate', phonetic: '/pəˈpetjʊeɪt/', meaning: '使持续；使永久化' },
      { word: 'stifle', phonetic: '/ˈstaɪfl/', meaning: '压制；扼杀' },
      { word: 'transparency', phonetic: '/trænsˈpærənsi/', meaning: '透明度' },
      { word: 'devastate', phonetic: '/ˈdevəsteɪt/', meaning: '严重破坏；毁灭' },
      { word: 'devaluation', phonetic: '/diːˌvæljuˈeɪʃən/', meaning: '贬值；贬低' }
    ],
    phrases: [
      { text: 'producing original text, images, music, and even code', meaning: '生成原创的文本、图像、音乐甚至代码' },
      { text: 'fuel anxieties about academic dishonesty and misinformation', meaning: '加剧人们对学术不端和虚假信息的担忧' },
      { text: 'perpetuate stereotypes embedded in their training data', meaning: '延续训练数据中固有的刻板印象' },
      { text: 'protect consumers without stifling innovation', meaning: '保护消费者却不扼杀创新' }
    ],
    questions: [
      { id: 'q3-25', question: 'What is generative AI, according to the passage?', options: ['A system that only analyzes existing data.', 'AI that produces original content based on patterns.', 'A new type of computer hardware.', 'A protocol for secure internet communication.'], answer: 1, explanation: 'The passage defines generative AI as "artificial intelligence systems capable of producing original text, images, music, and even code based on patterns learned from vast datasets." This definition matches option B, distinguishing generative AI from analytical systems.' },
      { id: 'q3-26', question: 'Which benefit of generative AI is specifically mentioned in the passage?', options: ['It completely replaces human teachers.', 'It explains difficult concepts on demand.', 'It eliminates all forms of bias online.', 'It guarantees employment for all writers.'], answer: 1, explanation: 'The passage states that for students, generative AI "serves as a tireless tutor that explains difficult concepts on demand." This specific educational benefit matches option B, while the other options are exaggerations not supported by the text.' },
      { id: 'q3-27', question: 'What problem related to bias does the passage highlight?', options: ['AI is too objective to detect bias.', 'AI may reproduce biases from training data.', 'AI always eliminates bias completely.', 'AI bias only affects non-English speakers.'], answer: 1, explanation: 'The passage warns that generative systems "often reproduce biases embedded in their training data, perpetuating stereotypes and unfair outcomes." The adverb "often" indicates prevalence, making option B the correct answer.' },
      { id: 'q3-28', question: 'What regulatory approach does the passage mention?', options: ['A complete ban on all AI tools globally.', 'Requiring AI-generated content to be labeled.', 'Forbidding all uses of AI in education.', 'Mandating the use of AI in every classroom.'], answer: 1, explanation: 'The passage notes that "Some institutions have begun to demand transparency by requiring AI-generated content to be labeled." This transparency measure corresponds to option B, while the other options describe positions the passage does not advocate.' },
      { id: 'q3-29', question: 'What does the word "erosion" most nearly mean in paragraph 2?', options: ['Rapid growth and expansion.', 'Gradual wearing away or decline.', 'Sudden collapse and destruction.', 'Careful preservation and protection.'], answer: 1, explanation: 'In context, "the erosion of trust in media" describes a gradual weakening of confidence. The metaphorical use of a geological term implies slow wearing away, matching option B rather than growth or sudden collapse.' },
      { id: 'q3-30', question: 'What is the author\'s overall view of generative AI?', options: ['It is wholly beneficial with no risks.', 'It is wholly harmful with no benefits.', 'Its impact will depend on societal choices.', 'It will inevitably replace all human creativity.'], answer: 2, explanation: 'The passage presents both benefits and concerns, then concludes that "Whether generative AI becomes a partner in human creativity or a force that destabilizes it will depend on the choices societies make today." This conditional outcome aligns with option C and reflects a balanced, contingent perspective.' }
    ]
  },
  {
    id: 'read-lv3-06',
    level: 3,
    serial: 6,
    category: '自然科学',
    title: 'The Mystery of Dark Matter',
    passage:
      'For decades, astronomers have observed that galaxies rotate faster than visible matter alone can explain. According to the laws of physics, stars at the outer edges of galaxies should move more slowly than those near the center, much as the outer planets in our solar system orbit the sun more slowly than the inner ones. Yet observations consistently show that stars in galactic outskirts rotate at nearly the same speed as those closer in. To account for this discrepancy, scientists proposed the existence of dark matter, an invisible substance that does not emit, absorb, or reflect light, but exerts gravitational influence on visible objects. Numerous independent lines of evidence now support this hypothesis. The bending of light around massive galaxy clusters, a phenomenon known as gravitational lensing, matches predictions only if large amounts of unseen mass are present. The cosmic microwave background, a faint afterglow of the Big Bang, also displays patterns consistent with dark matter accounting for roughly 27 percent of the universe. Despite this accumulating evidence, no one has yet detected dark matter directly. Experiments deep underground have searched for hypothetical particles called WIMPs, while other researchers have proposed alternative theories involving modified gravity. If dark matter is eventually identified, it would reshape our understanding of physics, possibly pointing to entirely new particles or dimensions. If it is not, scientists may need to fundamentally revise some of their most cherished theories of cosmology.',
    vocabulary: [
      { word: 'astronomers', phonetic: '/əˈstrɒnəməz/', meaning: '天文学家' },
      { word: 'discrepancy', phonetic: '/dɪsˈkrepənsi/', meaning: '差异；不一致' },
      { word: 'gravitational', phonetic: '/ˌɡrævɪˈteɪʃənəl/', meaning: '引力的；重力引起的' },
      { word: 'lensing', phonetic: '/ˈlenzɪŋ/', meaning: '透镜效应' },
      { word: 'cosmic', phonetic: '/ˈkɒzmɪk/', meaning: '宇宙的' },
      { word: 'microwave', phonetic: '/ˈmaɪkrəweɪv/', meaning: '微波' },
      { word: 'hypothesis', phonetic: '/haɪˈpɒθəsɪs/', meaning: '假说；假设' },
      { word: 'substance', phonetic: '/ˈsʌbstəns/', meaning: '物质' },
      { word: 'accumulate', phonetic: '/əˈkjuːmjəleɪt/', meaning: '积累；积聚' },
      { word: 'revise', phonetic: '/rɪˈvaɪz/', meaning: '修订；修改' }
    ],
    phrases: [
      { text: 'rotate faster than visible matter alone can explain', meaning: '旋转速度快于仅凭可见物质所能解释的程度' },
      { text: 'exert gravitational influence on visible objects', meaning: '对可见物体施加引力影响' },
      { text: 'a faint afterglow of the Big Bang', meaning: '大爆炸的微弱余晖' },
      { text: 'reshape our understanding of fundamental physics', meaning: '重塑我们对基础物理学的理解' }
    ],
    questions: [
      { id: 'q3-31', question: 'What observation first suggested the existence of dark matter?', options: ['Stars in galaxies rotate faster than visible matter can explain.', 'Galaxies appear stationary in the night sky.', 'Light travels faster than expected in a vacuum.', 'The sun appears to change color over decades.'], answer: 0, explanation: 'The passage opens by stating that astronomers have observed that "galaxies rotate faster than visible matter alone can explain." This anomaly is the foundational evidence supporting dark matter, making option A correct.' },
      { id: 'q3-32', question: 'According to the passage, what is gravitational lensing?', options: ['A telescope used to photograph distant stars.', 'The bending of light around massive objects.', 'A new form of nuclear fusion reaction.', 'A type of optical illusion in the eye.'], answer: 1, explanation: 'The passage explicitly defines gravitational lensing as "the bending of light around massive galaxy clusters." This definition directly matches option B, while the other options describe unrelated phenomena.' },
      { id: 'q3-33', question: 'Approximately what fraction of the universe does dark matter account for, according to the passage?', options: ['Less than 1 percent.', 'About 5 percent.', 'Roughly 27 percent.', 'More than 90 percent.'], answer: 2, explanation: 'The passage states that the cosmic microwave background shows patterns "consistent with dark matter accounting for roughly 27 percent of the universe." The specific figure of 27 percent matches option C exactly.' },
      { id: 'q3-34', question: 'Why have scientists not yet confirmed dark matter directly?', options: ['Because it does not interact with light or detectors.', 'Because telescopes are too small to see it.', 'Because the universe is too young to form it.', 'Because all scientists have stopped searching.'], answer: 0, explanation: 'The passage explains that dark matter "does not emit, absorb, or reflect light," making direct optical detection impossible. Experiments search for hypothetical particles like WIMPs, but no confirmed detection exists, supporting option A.' },
      { id: 'q3-35', question: 'What alternative to dark matter does the passage mention?', options: ['Modified theories of gravity.', 'The existence of many extra suns.', 'A new model of planetary motion.', 'A theory of expanding human consciousness.'], answer: 0, explanation: 'The passage notes that "other researchers have proposed alternative theories involving modified gravity." This specific alternative to particle-based dark matter matches option A, while the others are not discussed.' },
      { id: 'q3-36', question: 'What is the author\'s purpose in the final paragraph?', options: ['To declare dark matter conclusively proven.', 'To present two possible future outcomes.', 'To summarize the history of astronomy.', 'To criticize the scientific method.'], answer: 1, explanation: 'The final paragraph outlines two contrasting scenarios: "If dark matter is eventually identified..." versus "If it is not, scientists may need to fundamentally revise..." This conditional structure presents two possible outcomes, supporting option B.' }
    ]
  },
  {
    id: 'read-lv3-07',
    level: 3,
    serial: 7,
    category: '自然科学',
    title: 'Climate Feedback Loops',
    passage:
      'Climate feedback loops are processes in which an initial change in the climate triggers secondary effects that either amplify or dampen the original change. Positive feedback loops intensify warming, while negative feedback loops reduce it. Understanding these dynamics is essential for predicting the future of Earth\'s climate. One of the most concerning positive feedbacks involves Arctic sea ice. As global temperatures rise, white ice that reflects sunlight melts, exposing darker ocean water that absorbs more heat. This additional heat further accelerates ice loss, creating a self-reinforcing cycle. A similar mechanism affects permafrost, the permanently frozen ground underlying vast stretches of the Arctic. As permafrost thaws, organic matter decomposes and releases methane and carbon dioxide, both powerful greenhouse gases. Their release further warms the atmosphere, accelerating the thaw. Scientists estimate that permafrost stores twice as much carbon as is currently present in the atmosphere, making this loop potentially catastrophic. Negative feedbacks also exist. Increased atmospheric carbon dioxide can stimulate plant growth, drawing some carbon from the air, although the scale of this effect is limited. Cloud cover can also reflect sunlight, though how clouds will respond to warming remains uncertain. The interplay of these multiple, sometimes opposing, processes makes accurate climate prediction extraordinarily difficult. Yet one conclusion is increasingly clear: even small human-caused perturbations can set in motion feedback loops with consequences far larger than the initial trigger, demanding urgent and sustained action to limit further warming.',
    vocabulary: [
      { word: 'feedback', phonetic: '/ˈfiːdbæk/', meaning: '反馈' },
      { word: 'amplify', phonetic: '/ˈæmplɪfaɪ/', meaning: '放大；增强' },
      { word: 'dampen', phonetic: '/ˈdæmpən/', meaning: '抑制；减弱' },
      { word: 'permafrost', phonetic: '/ˈpɜːməfrɒst/', meaning: '永久冻土' },
      { word: 'decompose', phonetic: '/ˌdiːkəmˈpəʊz/', meaning: '分解' },
      { word: 'methane', phonetic: '/ˈmiːθeɪn/', meaning: '甲烷' },
      { word: 'perturbation', phonetic: '/ˌpɜːtəˈbeɪʃən/', meaning: '扰动；干扰' },
      { word: 'catastrophic', phonetic: '/ˌkætəˈstrɒfɪk/', meaning: '灾难性的' },
      { word: 'stimulate', phonetic: '/ˈstɪmjʊleɪt/', meaning: '刺激；促进' },
      { word: 'uncertain', phonetic: '/ʌnˈsɜːtn/', meaning: '不确定的' }
    ],
    phrases: [
      { text: 'triggers secondary effects that either amplify or dampen the original change', meaning: '触发二次效应，放大或减弱最初的变化' },
      { text: 'a self-reinforcing cycle of warming and ice loss', meaning: '变暖与冰损失的自我强化循环' },
      { text: 'releases methane and carbon dioxide into the atmosphere', meaning: '将甲烷和二氧化碳释放到大气中' },
      { text: 'set in motion feedback loops with consequences far larger than the initial trigger', meaning: '启动后果远大于初始触发因素的反馈循环' }
    ],
    questions: [
      { id: 'q3-37', question: 'What is a positive climate feedback loop?', options: ['A process that reduces the original climate change.', 'A process that amplifies the original climate change.', 'A weather event that lasts only one day.', 'A government policy about the climate.'], answer: 1, explanation: 'The passage defines positive feedback loops as those that "intensify warming," while negative ones "reduce it." The defining feature of amplifying the original change corresponds directly to option B.' },
      { id: 'q3-38', question: 'How does Arctic sea ice loss contribute to further warming?', options: ['It releases large amounts of oxygen.', 'Darker ocean water absorbs more heat after ice melts.', 'It creates new sources of fossil fuels.', 'It reflects more sunlight than before.'], answer: 1, explanation: 'The passage explains that melting ice exposes "darker ocean water that absorbs more heat," which "further accelerates ice loss." This albedo effect directly supports option B and reflects the mechanism of positive feedback.' },
      { id: 'q3-39', question: 'Why is thawing permafrost a major concern, according to the passage?', options: ['It contains twice as much carbon as the atmosphere.', 'It prevents all plant growth nearby.', 'It stops ocean currents completely.', 'It releases harmful bacteria into cities.'], answer: 0, explanation: 'The passage states that "permafrost stores twice as much carbon as is currently present in the atmosphere, making this loop potentially catastrophic." This quantitative comparison makes option A the correct answer.' },
      { id: 'q3-40', question: 'Which is an example of a negative feedback loop mentioned in the passage?', options: ['Melting sea ice exposes darker water.', 'Thawing permafrost releases greenhouse gases.', 'Increased CO2 stimulates some plant growth.', 'Forest fires release stored carbon.'], answer: 2, explanation: 'The passage describes "Increased atmospheric carbon dioxide can stimulate plant growth, drawing some carbon from the air" as a negative feedback. Option C directly paraphrases this example, while the others are positive feedbacks.' },
      { id: 'q3-41', question: 'Why is accurate climate prediction described as "extraordinarily difficult"?', options: ['Because scientists do not have computers.', 'Because many opposing feedback loops interact.', 'Because the climate has not changed recently.', 'Because weather data is no longer collected.'], answer: 1, explanation: 'The passage states that "the interplay of these multiple, sometimes opposing, processes makes accurate climate prediction extraordinarily difficult." The complexity of interacting feedbacks, summarized in option B, is the reason given.' },
      { id: 'q3-42', question: 'What is the author\'s main point in the final sentence?', options: ['Small changes can trigger large consequences.', 'Climate change is not worth worrying about.', 'Feedback loops always have equal effects.', 'Climate models are already perfectly accurate.'], answer: 0, explanation: 'The final sentence argues that "even small human-caused perturbations can set in motion feedback loops with consequences far larger than the initial trigger." This causal chain, from small input to large consequence, directly supports option A.' }
    ]
  },
  {
    id: 'read-lv3-08',
    level: 3,
    serial: 8,
    category: '自然科学',
    title: 'The Origin of Consciousness',
    passage:
      'Consciousness remains one of the most enigmatic phenomena in science. At its core, it refers to the subjective experience of being: the feeling of seeing red, the sensation of pain, the awareness of one\'s own thoughts. Despite centuries of philosophical inquiry and decades of neuroscientific research, there is no consensus on how, or even whether, consciousness can be fully explained by physical processes. Some philosophers, known as physicalists, argue that consciousness arises from the complex interactions of neurons and is, in principle, no different from any other natural phenomenon. Others, often labeled dualists, maintain that subjective experience cannot be reduced to physical matter and may require additional explanatory principles. A more recent perspective, integrated information theory, proposes that consciousness corresponds to the degree to which a system integrates information. By this view, even simple organisms may possess minimal forms of consciousness, while highly integrated systems like the human brain exhibit rich inner lives. Scientists have made progress identifying the neural correlates of consciousness—brain regions whose activity reliably tracks conscious experience—but correlation is not explanation. The "hard problem," as philosopher David Chalmers famously termed it, asks why any physical process should give rise to subjective experience at all. Until researchers address this question, consciousness may remain a frontier where philosophy, psychology, and neuroscience meet without a unified answer.',
    vocabulary: [
      { word: 'enigmatic', phonetic: '/ˌenɪɡˈmætɪk/', meaning: '神秘的；难以理解的' },
      { word: 'subjective', phonetic: '/səbˈdʒektɪv/', meaning: '主观的' },
      { word: 'physicalists', phonetic: '/ˈfɪzɪkəlɪsts/', meaning: '物理主义者' },
      { word: 'dualists', phonetic: '/ˈdjuːəlɪsts/', meaning: '二元论者' },
      { word: 'integrated', phonetic: '/ˈɪntɪɡreɪtɪd/', meaning: '整合的；综合的' },
      { word: 'neural', phonetic: '/ˈnjʊərəl/', meaning: '神经的' },
      { word: 'correlates', phonetic: '/ˈkɒrələts/', meaning: '相关物；相关因素' },
      { word: 'phenomenon', phonetic: '/fəˈnɒmɪnən/', meaning: '现象' },
      { word: 'reduction', phonetic: '/rɪˈdʌkʃən/', meaning: '简化；还原' },
      { word: 'frontier', phonetic: '/frʌnˈtɪə/', meaning: '前沿；边缘' }
    ],
    phrases: [
      { text: 'subjective experience of being in the world', meaning: '存在于世的主观体验' },
      { text: 'arises from the complex interactions of neurons', meaning: '源于神经元之间复杂的相互作用' },
      { text: 'cannot be reduced to physical matter alone', meaning: '不能仅仅被还原为物理物质' },
      { text: 'the degree to which a system integrates information', meaning: '一个系统整合信息的程度' }
    ],
    questions: [
      { id: 'q3-43', question: 'What does the passage say consciousness fundamentally involves?', options: ['Purely mechanical reactions of the body.', 'Subjective experience and inner awareness.', 'A precise mathematical formula.', 'The exact mass of the human brain.'], answer: 1, explanation: 'Paragraph 1 states that consciousness "refers to the subjective experience of being: the feeling of seeing red, the sensation of pain, the awareness of one\'s own thoughts." This definition directly matches the focus on subjective experience in option B.' },
      { id: 'q3-44', question: 'What is the view of physicalists?', options: ['Consciousness cannot exist in any form.', 'Consciousness arises from complex neural interactions.', 'Consciousness is unrelated to brain activity.', 'Consciousness is purely a social construct.'], answer: 1, explanation: 'The passage explains that physicalists "argue that consciousness arises from the complex interactions of neurons." This view matches option B, while the other options represent positions the physicalists explicitly do not hold.' },
      { id: 'q3-45', question: 'According to integrated information theory, what determines the level of consciousness?', options: ['The age of the organism in years.', 'How much information a system integrates.', 'The number of neurons in absolute terms.', 'The color of the surrounding environment.'], answer: 1, explanation: 'The passage states that integrated information theory "proposes that consciousness corresponds to the degree to which a system integrates information." This conceptual claim makes option B the correct answer.' },
      { id: 'q3-46', question: 'Why are neural correlates of consciousness not a full explanation?', options: ['They have never been observed by scientists.', 'Correlation does not imply causation or explanation.', 'They only exist in non-human animals.', 'They are too simple to be meaningful.'], answer: 1, explanation: 'The passage explicitly notes that while scientists have identified neural correlates, "correlation is not explanation." This reasoning emphasizes the gap between correlation and full understanding, supporting option B.' },
      { id: 'q3-47', question: 'What is "the hard problem" of consciousness, according to the passage?', options: ['Why physical processes give rise to subjective experience.', 'How to measure brain temperature accurately.', 'Why humans sleep every single night.', 'How to build artificial intelligence faster.'], answer: 0, explanation: 'The passage explains that the hard problem "asks why any physical process should give rise to subjective experience at all." This philosophical question about the explanatory gap matches option A exactly.' },
      { id: 'q3-48', question: 'What is the author\'s attitude toward current theories of consciousness?', options: ['They believe a single theory has clearly won.', 'They suggest no unified answer currently exists.', 'They insist consciousness is purely mystical.', 'They argue science has solved the problem.'], answer: 1, explanation: 'The closing sentence notes that consciousness "may remain a frontier where philosophy, psychology, and neuroscience meet without a unified answer." This acknowledgment of ongoing uncertainty supports option B.' }
    ]
  },
  {
    id: 'read-lv3-09',
    level: 3,
    serial: 9,
    category: '自然科学',
    title: 'Plate Tectonics and Continental Drift',
    passage:
      'The theory of plate tectonics revolutionized the earth sciences in the twentieth century. It holds that the outer shell of the Earth, known as the lithosphere, is broken into large plates that move slowly over the underlying asthenosphere. These plates carry both continents and ocean floors, and their interactions at boundaries produce earthquakes, volcanic eruptions, and mountain ranges. The concept of continental drift, first proposed in detail by Alfred Wegener in 1912, suggested that today\'s continents were once joined in a single supercontinent called Pangaea. Although Wegener amassed compelling fossil and geological evidence, he could not explain the mechanism driving such movement. The answer came decades later with the discovery of seafloor spreading, in which new oceanic crust forms at mid-ocean ridges and pushes older crust aside. This process, powered by heat from the Earth\'s interior, is now understood to drive continental motion. The implications of plate tectonics extend far beyond geology. The distribution of fossils, the locations of mineral deposits, and the patterns of past climate change all reflect the wanderings of ancient plates. Even the evolution of life has been shaped by tectonic activity, as shifting landmasses have isolated populations and created new habitats. Today, plate tectonics provides a unifying framework for understanding the dynamic Earth, linking phenomena once thought unrelated into a coherent global story.',
    vocabulary: [
      { word: 'tectonics', phonetic: '/tekˈtɒnɪks/', meaning: '构造地质学；板块构造' },
      { word: 'lithosphere', phonetic: '/ˈlɪθəsfɪə/', meaning: '岩石圈' },
      { word: 'asthenosphere', phonetic: '/æsˈθenəsfɪə/', meaning: '软流圈' },
      { word: 'eruption', phonetic: '/ɪˈrʌpʃən/', meaning: '喷发；爆发' },
      { word: 'continental', phonetic: '/ˌkɒntɪˈnentl/', meaning: '大陆的' },
      { word: 'fossil', phonetic: '/ˈfɒsl/', meaning: '化石' },
      { word: 'spreading', phonetic: '/ˈspredɪŋ/', meaning: '扩展；扩张' },
      { word: 'ridges', phonetic: '/ˈrɪdʒɪz/', meaning: '山脊；洋脊' },
      { word: 'unifying', phonetic: '/ˈjuːnɪfaɪɪŋ/', meaning: '统一的' },
      { word: 'isolated', phonetic: '/ˈaɪsəleɪtɪd/', meaning: '孤立的；隔离的' }
    ],
    phrases: [
      { text: 'broken into large plates that move slowly over the underlying asthenosphere', meaning: '分裂成在下方软流圈上缓慢移动的巨大板块' },
      { text: 'amassed compelling fossil and geological evidence', meaning: '积累了引人注目的化石和地质证据' },
      { text: 'new oceanic crust forms at mid-ocean ridges', meaning: '新的洋壳在大洋中脊处形成' },
      { text: 'linking phenomena once thought unrelated into a coherent global story', meaning: '将曾被认为互不相关的现象联系成一个连贯的全球图景' }
    ],
    questions: [
      { id: 'q3-49', question: 'What does the theory of plate tectonics primarily describe?', options: ['The motion of the moon around the Earth.', 'The movement of large plates across the Earth\'s surface.', 'The life cycle of individual stars.', 'The behavior of ocean tides each day.'], answer: 1, explanation: 'The passage explains that plate tectonics holds that the lithosphere "is broken into large plates that move slowly over the underlying asthenosphere." This central description matches option B directly.' },
      { id: 'q3-50', question: 'Who first proposed the idea of continental drift in detail?', options: ['Isaac Newton in the seventeenth century.', 'Alfred Wegener in the early twentieth century.', 'Charles Darwin in the nineteenth century.', 'Albert Einstein in the early 1900s.'], answer: 1, explanation: 'The passage credits Alfred Wegener with the original detailed proposal in 1912. The specific name and date make option B the correct answer, while the other figures proposed unrelated theories.' },
      { id: 'q3-51', question: 'What was Wegener unable to explain about continental drift?', options: ['The basic shape of the continents.', 'The mechanism that drives such movement.', 'The age of the planet itself.', 'The composition of the inner core.'], answer: 1, explanation: 'The passage states that Wegener "could not explain the mechanism driving such movement." The contrast between his evidence and his missing explanation makes option B the precise answer.' },
      { id: 'q3-52', question: 'According to the passage, what is seafloor spreading?', options: ['A type of earthquake measurement system.', 'A process where new crust forms and pushes older crust aside.', 'A model of ocean current movement.', 'A theory about ancient sea levels.'], answer: 1, explanation: 'The passage defines seafloor spreading as "new oceanic crust forms at mid-ocean ridges and pushes older crust aside." This mechanical description matches option B precisely.' },
      { id: 'q3-53', question: 'Which phenomenon is NOT mentioned as a result of plate interactions?', options: ['Volcanic eruptions and earthquakes.', 'The formation of mountain ranges.', 'The creation of solar eclipses.', 'The formation of ocean trenches.'], answer: 2, explanation: 'Paragraph 1 lists "earthquakes, volcanic eruptions, and mountain ranges" as consequences of plate interactions. Solar eclipses are unrelated astronomical events, making option C the correct choice among options not implied by tectonic activity.' },
      { id: 'q3-54', question: 'How has plate tectonics affected the evolution of life, according to the passage?', options: ['It has eliminated all fossil species.', 'It has isolated populations and created new habitats.', 'It has slowed evolutionary processes.', 'It has prevented all migration on land.'], answer: 1, explanation: 'The passage explains that "shifting landmasses have isolated populations and created new habitats." This dual effect supports option B, while the other options contradict the passage or describe unrelated phenomena.' }
    ]
  },
  {
    id: 'read-lv3-10',
    level: 3,
    serial: 10,
    category: '自然科学',
    title: 'The Search for Extraterrestrial Life',
    passage:
      'For centuries, humans have wondered whether life exists beyond Earth. Modern science has transformed this philosophical question into an empirical research program. Scientists now search for extraterrestrial life using several complementary strategies. Robotic probes analyze the geology and chemistry of Mars, looking for evidence of past water and possibly preserved microbes. Telescopes study the atmospheres of distant exoplanets, hoping to detect biosignatures such as oxygen, methane, or other gases that, in combination, would strongly suggest biological activity. Radio astronomers listen for narrow-band signals from space, on the assumption that intelligent civilizations might intentionally transmit detectable messages. So far, no confirmed discovery has been made, but the absence of evidence is not evidence of absence. The sheer scale of the universe, with its hundreds of billions of galaxies each containing billions of stars, makes it statistically unlikely that Earth is the sole abode of life. Yet life may also require very specific conditions to arise, conditions that could be rare. This tension between probability and rarity keeps the question genuinely open. Some researchers advocate a cautious approach, warning that contact with a vastly more advanced civilization might carry risks for humanity. Others argue that the search itself has value, expanding our understanding of biology, chemistry, and our place in the cosmos. Whether or not we eventually find neighbors among the stars, the effort already reshapes how we see ourselves.',
    vocabulary: [
      { word: 'extraterrestrial', phonetic: '/ˌekstrəˈterɪstriəl/', meaning: '地球外的；外星的' },
      { word: 'empirical', phonetic: '/ɪmˈpɪrɪkəl/', meaning: '经验主义的；以实验为依据的' },
      { word: 'probes', phonetic: '/prəʊbz/', meaning: '探测器' },
      { word: 'exoplanets', phonetic: '/ˈeksəʊplænɪts/', meaning: '系外行星' },
      { word: 'biosignatures', phonetic: '/ˈbaɪəʊˌsɪɡnətʃəz/', meaning: '生物特征' },
      { word: 'abode', phonetic: '/əˈbəʊd/', meaning: '住所；居所' },
      { word: 'statistically', phonetic: '/stəˈtɪstɪkli/', meaning: '统计上地' },
      { word: 'cosmos', phonetic: '/ˈkɒzmɒs/', meaning: '宇宙' },
      { word: 'complementary', phonetic: '/ˌkɒmplɪˈmentəri/', meaning: '互补的' },
      { word: 'cautious', phonetic: '/ˈkɔːʃəs/', meaning: '谨慎的' }
    ],
    phrases: [
      { text: 'transformed this philosophical question into an empirical research program', meaning: '将这一哲学问题转化为一个实证研究项目' },
      { text: 'detect biosignatures such as oxygen or methane', meaning: '探测氧气或甲烷等生物特征' },
      { text: 'the absence of evidence is not evidence of absence', meaning: '缺乏证据并不等于证明不存在' },
      { text: 'keeps the question genuinely open for further investigation', meaning: '使该问题真正保持开放以待进一步研究' }
    ],
    questions: [
      { id: 'q3-55', question: 'How has modern science changed the search for extraterrestrial life?', options: ['It has dismissed the question entirely.', 'It turned philosophy into empirical research.', 'It proved life exists on other planets.', 'It ended funding for space programs.'], answer: 1, explanation: 'The passage states that modern science has "transformed this philosophical question into an empirical research program." This transition from philosophy to empirical science directly matches option B.' },
      { id: 'q3-56', question: 'What do scientists look for in exoplanet atmospheres?', options: ['Loud sounds from distant planets.', 'Biosignatures such as oxygen and methane.', 'The exact color of alien stars.', 'Samples of alien soil directly.'], answer: 1, explanation: 'The passage explains that telescopes study exoplanet atmospheres "hoping to detect biosignatures such as oxygen, methane, or other gases." This specific list of chemical indicators matches option B.' },
      { id: 'q3-57', question: 'Why does the passage suggest that Earth might not be the only place with life?', options: ['Because Earth is very old in cosmic terms.', 'Because the universe contains vast numbers of stars.', 'Because all aliens look like humans.', 'Because telescopes can see everything clearly.'], answer: 1, explanation: 'The passage argues that "the sheer scale of the universe, with its hundreds of billions of galaxies... makes it statistically unlikely that Earth is the sole abode of life." The vast scale argument matches option B.' },
      { id: 'q3-58', question: 'What does "the absence of evidence is not evidence of absence" mean in context?', options: ['Not finding aliens proves they exist.', 'Not finding aliens yet does not prove they do not exist.', 'Scientists have already found extraterrestrial life.', 'All searches will definitely succeed soon.'], answer: 1, explanation: 'This aphorism, explained by the surrounding context, means that the failure to find extraterrestrial life does not logically prove that life is absent. Option B paraphrases this logical point accurately.' },
      { id: 'q3-59', question: 'According to the passage, why do some researchers favor caution in contacting alien civilizations?', options: ['Because all aliens are hostile by nature.', 'Because contact with a more advanced civilization could be risky.', 'Because aliens do not speak any language.', 'Because radio telescopes are extremely expensive.'], answer: 1, explanation: 'The passage states that "contact with a vastly more advanced civilization might carry risks for humanity." This potential risk is the reason given for caution, matching option B.' },
      { id: 'q3-60', question: 'What is the author\'s overall view of the search for extraterrestrial life?', options: ['It is pointless and should be stopped.', 'It has value regardless of immediate results.', 'It has already succeeded beyond all doubt.', 'It is dangerous to scientists in the field.'], answer: 1, explanation: 'The passage argues that "the search itself has value, expanding our understanding of biology, chemistry, and our place in the cosmos." Whether or not we find life, the effort is meaningful, matching option B.' }
    ]
  },
  {
    id: 'read-lv3-11',
    level: 3,
    serial: 11,
    category: '哲学思辨',
    title: 'The Problem of Free Will',
    passage:
      'The question of whether humans possess free will has occupied philosophers for millennia, and it remains deeply contested today. Compatibilists argue that free will is compatible with determinism, the view that every event, including human actions, is caused by prior conditions. According to this view, a person acts freely when their actions flow from their own desires and reasoning, even if those internal states were themselves determined. By contrast, libertarian philosophers maintain that free will requires genuine alternative possibilities: that a person could have done otherwise in exactly the same circumstances. If determinism is true, libertarians argue, such alternatives are illusory. Neuroscience has added a new dimension to the debate. Experiments in which brain activity predicts a decision seconds before the subject becomes consciously aware of it have been interpreted by some as evidence that conscious choice is a retrospective illusion. Critics counter that such studies oversimplify the relationship between brain activity and intentional action. The debate has practical consequences. If people are not the ultimate authors of their decisions, what becomes of moral responsibility? Should praise and blame be rethought? The law, for its part, generally operates on the assumption that individuals can choose otherwise, but some scholars argue that emerging scientific findings should prompt reforms in how society treats offenders. Far from being an abstract academic puzzle, the question of free will touches nearly every aspect of human life.',
    vocabulary: [
      { word: 'compatibilists', phonetic: '/kəmˈpætɪbɪlɪsts/', meaning: '相容论者' },
      { word: 'determinism', phonetic: '/dɪˈtɜːmɪnɪzəm/', meaning: '决定论' },
      { word: 'libertarian', phonetic: '/ˌlɪbəˈteəriən/', meaning: '自由意志论者' },
      { word: 'illusory', phonetic: '/ɪˈluːsəri/', meaning: '虚幻的；幻觉的' },
      { word: 'retrospective', phonetic: '/ˌretrəˈspektɪv/', meaning: '回顾的；追溯的' },
      { word: 'oversimplify', phonetic: '/ˌəʊvəˈsɪmplɪfaɪ/', meaning: '过于简化' },
      { word: 'responsibility', phonetic: '/rɪˌspɒnsɪˈbɪləti/', meaning: '责任' },
      { word: 'offenders', phonetic: '/əˈfendəz/', meaning: '违法者；冒犯者' },
      { word: 'intentional', phonetic: '/ɪnˈtenʃənəl/', meaning: '有意的；故意的' },
      { word: 'abstract', phonetic: '/ˈæbstrækt/', meaning: '抽象的' }
    ],
    phrases: [
      { text: 'occupied philosophers for millennia without resolution', meaning: '千百年来一直困扰着哲学家们而无法解决' },
      { text: 'every event is caused by prior conditions', meaning: '每个事件都是由先前的条件引起的' },
      { text: 'a retrospective illusion constructed after the fact', meaning: '事后构建的一种回顾性幻觉' },
      { text: 'touches nearly every aspect of human life', meaning: '触及人类生活的几乎每一个方面' }
    ],
    questions: [
      { id: 'q3-61', question: 'According to compatibilists, when does a person act freely?', options: ['Only when no prior causes exist.', 'When actions flow from their own desires and reasoning.', 'Only when outcomes are unpredictable.', 'When no one else is watching them.'], answer: 1, explanation: 'The passage explains that for compatibilists, "a person acts freely when their actions flow from their own desires and reasoning." This definition directly matches option B, while option A reflects the libertarian position.' },
      { id: 'q3-62', question: 'What is the libertarian position on free will?', options: ['Free will requires no conditions at all.', 'Free will requires genuine alternative possibilities.', 'Free will depends only on social context.', 'Free will is a pure illusion everywhere.'], answer: 1, explanation: 'The passage states that libertarians "maintain that free will requires genuine alternative possibilities: that a person could have done otherwise in exactly the same circumstances." This requirement of alternatives matches option B.' },
      { id: 'q3-63', question: 'How has neuroscience influenced the free will debate?', options: ['It has proven free will definitively.', 'It has shown brain activity can predict decisions before awareness.', 'It has disproved the existence of choice entirely.', 'It has ended all philosophical inquiry.'], answer: 1, explanation: 'The passage explains that "brain activity predicts a decision seconds before the subject becomes consciously aware of it." This temporal finding is the key neuroscientific contribution to the debate, matching option B.' },
      { id: 'q3-64', question: 'Why is the free will debate considered practically important?', options: ['It is purely academic with no impact.', 'It affects moral responsibility and the law.', 'It only concerns religious doctrines.', 'It influences athletic performance directly.'], answer: 1, explanation: 'The passage states that "the debate has practical consequences," specifically affecting moral responsibility and prompting questions about how society treats offenders. These practical impacts match option B.' },
      { id: 'q3-65', question: 'What does the word "illusory" most nearly mean in paragraph 3?', options: ['Real and tangible in nature.', 'Based on accurate observation.', 'Appearing to exist but not real.', 'Mathematically precise and clear.'], answer: 2, explanation: 'In context, "alternatives are illusory" means that the apparent choices people believe they have are not real options. This definition matches option C, where things appear real without being so.' },
      { id: 'q3-66', question: 'What is the author\'s attitude toward the free will debate?', options: ['It has been conclusively settled by science.', 'It is an important and unresolved question.', 'It is unimportant for ordinary people.', 'It disproves the existence of morality.'], answer: 1, explanation: 'The passage describes the question as "deeply contested" and emphasizes that "far from being an abstract academic puzzle, the question of free will touches nearly every aspect of human life." This balanced emphasis on importance and ongoing contestation supports option B.' }
    ]
  },
  {
    id: 'read-lv3-12',
    level: 3,
    serial: 12,
    category: '哲学思辨',
    title: 'Ethics in the Age of Artificial Intelligence',
    passage:
      'As artificial intelligence systems grow more capable, they force humanity to confront a series of profound ethical questions. One of the most pressing concerns bias. AI systems often inherit the prejudices of the data on which they are trained, producing outcomes that unfairly disadvantage certain groups. When such systems are deployed in hiring, lending, or criminal justice, the consequences can be life-altering. Transparency is another concern. Many advanced AI models operate as "black boxes," producing decisions whose internal logic cannot easily be inspected. If a person is denied a loan or a job by an algorithm, do they have a right to an explanation? Privacy presents yet another dilemma. AI thrives on data, and the systems that personalize our feeds and predict our behavior often do so by collecting intimate details about our lives. Autonomy is also at stake. As algorithms shape what we see, buy, and believe, they risk narrowing human choice rather than expanding it. Finally, questions of accountability arise. When a self-driving car crashes, when a medical AI misdiagnoses a patient, or when an autonomous weapon causes harm, who is responsible? Society has not yet settled these questions. Some experts argue that AI development should pause until ethical frameworks catch up. Others contend that slowing innovation harms those who would benefit most. What is certain is that ethical reflection must keep pace with technological change, lest powerful systems outrun the values meant to guide them.',
    vocabulary: [
      { word: 'profound', phonetic: '/prəˈfaʊnd/', meaning: '深刻的；意义重大的' },
      { word: 'inherit', phonetic: '/ɪnˈherɪt/', meaning: '继承；遗传' },
      { word: 'transparent', phonetic: '/trænsˈpærənt/', meaning: '透明的' },
      { word: 'algorithm', phonetic: '/ˈælɡərɪðəm/', meaning: '算法' },
      { word: 'autonomy', phonetic: '/ɔːˈtɒnəmi/', meaning: '自主；自治' },
      { word: 'accountability', phonetic: '/əˌkaʊntəˈbɪləti/', meaning: '问责；责任' },
      { word: 'autonomous', phonetic: '/ɔːˈtɒnəməs/', meaning: '自主的；自治的' },
      { word: 'dilemma', phonetic: '/dɪˈlemə/', meaning: '两难境地' },
      { word: 'pause', phonetic: '/pɔːz/', meaning: '暂停' },
      { word: 'outrun', phonetic: '/ˌaʊtˈrʌn/', meaning: '超过；跑赢' }
    ],
    phrases: [
      { text: 'force humanity to confront a series of profound ethical questions', meaning: '迫使人类面对一系列深刻的伦理问题' },
      { text: 'inherit the prejudices of the data on which they are trained', meaning: '继承训练数据中的偏见' },
      { text: 'produce outcomes that unfairly disadvantage certain groups', meaning: '产生不公平地损害某些群体的结果' },
      { text: 'operating as black boxes whose internal logic cannot easily be inspected', meaning: '作为内部逻辑难以审查的"黑箱"运行' }
    ],
    questions: [
      { id: 'q3-67', question: 'What is one ethical concern about AI mentioned in the passage?', options: ['AI is always too transparent.', 'AI systems may inherit biases from training data.', 'AI only uses very limited amounts of data.', 'AI decisions never affect real people.'], answer: 1, explanation: 'Paragraph 1 states that "AI systems often inherit the prejudices of the data on which they are trained." This specific concern about inherited bias matches option B.' },
      { id: 'q3-68', question: 'Why is transparency a concern with AI systems?', options: ['Because AI systems are too small.', 'Because many operate as opaque black boxes.', 'Because AI always tells the truth.', 'Because humans can easily read AI source code.'], answer: 1, explanation: 'The passage explains that "Many advanced AI models operate as \'black boxes,\' producing decisions whose internal logic cannot easily be inspected." This opacity makes option B correct.' },
      { id: 'q3-69', question: 'How might AI affect human autonomy, according to the passage?', options: ['It always increases human choices.', 'It might narrow human choice rather than expand it.', 'It has no influence on human behavior.', 'It forces people to be more independent.'], answer: 1, explanation: 'The passage warns that "As algorithms shape what we see, buy, and believe, they risk narrowing human choice rather than expanding it." This narrowing effect matches option B.' },
      { id: 'q3-70', question: 'What accountability question does the passage raise?', options: ['Who designs AI hardware chips?', 'Who is responsible when AI causes harm?', 'Who pays for electricity at AI labs?', 'Who invented the first computer.'], answer: 1, explanation: 'The passage poses a series of questions about "When a self-driving car crashes... who is responsible?" This focus on assigning responsibility for AI harm matches option B.' },
      { id: 'q3-71', question: 'What does "outrun" most nearly mean in the final sentence?', options: ['Physically move slower than something.', 'Move faster than or surpass something.', 'Remain exactly equal to something.', 'Lag far behind in every way.'], answer: 1, explanation: 'In context, "powerful systems outrun the values meant to guide them" means that technological progress has overtaken ethical reflection. The metaphorical use of "outrun" implies surpassing, matching option B.' },
      { id: 'q3-72', question: 'What is the author\'s overall stance on AI ethics?', options: ['AI should be banned outright everywhere.', 'Ethical reflection must keep pace with technology.', 'Ethics is irrelevant to AI development.', 'Only engineers should decide AI policy.'], answer: 1, explanation: 'The closing sentence argues that "ethical reflection must keep pace with technological change, lest powerful systems outrun the values meant to guide them." This call for alignment between ethics and technology supports option B.' }
    ]
  },
  {
    id: 'read-lv3-13',
    level: 3,
    serial: 13,
    category: '哲学思辨',
    title: 'The Nature of Consciousness',
    passage:
      'Consciousness is the most intimate yet most mysterious feature of human existence. Each of us knows what it is like to be aware from the inside: to feel the warmth of sunlight, the ache of sadness, the surprise of a sudden idea. Philosophers call these qualitative experiences qualia. Yet explaining how such subjective states arise from the physical activity of neurons remains one of science\'s deepest puzzles. Materialists argue that consciousness is nothing more than brain activity, and that once neuroscience matures, every mental state will be explained in purely physical terms. Opponents reply that no description of neural firing patterns captures what it is like to taste coffee or see the color red. Functionalists attempt a middle path, suggesting that what matters is not the specific substance of the brain but the way information is processed. By this view, sufficiently advanced computers or alien beings with different biology could in principle be conscious. Mystical and panpsychist accounts go further, proposing that consciousness may be a fundamental feature of reality, present even in elementary particles. While such claims are difficult to test, they challenge the assumption that mind is something the physical world must eventually explain away. What is clear is that the question of consciousness sits at the intersection of philosophy, science, and personal experience, demanding both rigorous inquiry and a certain humility before the mystery.',
    vocabulary: [
      { word: 'qualia', phonetic: '/ˈkwɒliə/', meaning: '感受性；质感' },
      { word: 'materialists', phonetic: '/məˈtɪəriəlɪsts/', meaning: '唯物主义者' },
      { word: 'functionalists', phonetic: '/ˈfʌŋkʃənəlɪsts/', meaning: '功能主义者' },
      { word: 'panpsychist', phonetic: '/pænˈsaɪkɪst/', meaning: '泛心论者' },
      { word: 'intersection', phonetic: '/ˌɪntəˈsekʃən/', meaning: '交叉；交汇' },
      { word: 'rigorous', phonetic: '/ˈrɪɡərəs/', meaning: '严格的；严谨的' },
      { word: 'humility', phonetic: '/hjuːˈmɪləti/', meaning: '谦逊' },
      { word: 'intimate', phonetic: '/ˈɪntɪmət/', meaning: '内在的；私密的' },
      { word: 'puzzle', phonetic: '/ˈpʌzl/', meaning: '谜；难题' },
      { word: 'sufficiently', phonetic: '/səˈfɪʃəntli/', meaning: '足够地' }
    ],
    phrases: [
      { text: 'the most intimate yet most mysterious feature of human existence', meaning: '人类存在中最内在却又最神秘的特性' },
      { text: 'knows what it is like to be aware from the inside', meaning: '从内部知道"有所意识"是什么感觉' },
      { text: 'challenge the assumption that mind must be explained away', meaning: '挑战"心灵必须被解释掉"的假设' },
      { text: 'demanding both rigorous inquiry and a certain humility', meaning: '既要求严谨探究，也要求某种谦逊' }
    ],
    questions: [
      { id: 'q3-73', question: 'What are qualia, according to the passage?', options: ['Mathematical formulas about the brain.', 'Qualitative subjective experiences.', 'A type of computer program.', 'Medical diagnoses for mental illness.'], answer: 1, explanation: 'The passage defines qualia as "qualitative experiences," illustrated by examples like "the warmth of sunlight" and "the surprise of a sudden idea." This subjective experiential definition matches option B.' },
      { id: 'q3-74', question: 'What is the materialist view of consciousness?', options: ['Consciousness is a divine gift.', 'Consciousness is essentially brain activity.', 'Consciousness exists in all atoms.', 'Consciousness cannot be studied at all.'], answer: 1, explanation: 'The passage states that materialists "argue that consciousness is nothing more than brain activity." This identification of mind with physical processes matches option B.' },
      { id: 'q3-75', question: 'What do functionalists emphasize?', options: ['The substance of the brain.', 'The way information is processed.', 'The color of neurons in detail.', 'The divine origin of thought.'], answer: 1, explanation: 'The passage explains that functionalists focus on "the way information is processed" rather than the specific substance. This functional emphasis matches option B.' },
      { id: 'q3-76', question: 'What is the panpsychist view mentioned in the passage?', options: ['Only humans possess consciousness.', 'Consciousness may be a fundamental feature of reality.', 'Consciousness can be deleted easily.', 'Consciousness comes from eating certain foods.'], answer: 1, explanation: 'The passage notes that panpsychists propose "consciousness may be a fundamental feature of reality, present even in elementary particles." This foundational view matches option B.' },
      { id: 'q3-77', question: 'Why is the problem of consciousness described as a "puzzle"?', options: ['Because it has nothing to do with science.', 'Because subjective experience resists physical explanation.', 'Because no one thinks about consciousness.', 'Because it can be solved by buying a book.'], answer: 1, explanation: 'The passage explains that "explaining how such subjective states arise from the physical activity of neurons remains one of science\'s deepest puzzles." This explanatory gap is the source of the puzzle, matching option B.' },
      { id: 'q3-78', question: 'What is the author\'s tone toward the mystery of consciousness?', options: ['Defeatist and dismissive in attitude.', 'Respectful and intellectually humble.', 'Completely certain science has solved it.', 'Bored and uninterested in the topic.'], answer: 1, explanation: 'The passage closes by saying the question demands "rigorous inquiry and a certain humility before the mystery." The phrase "certain humility" signals intellectual respect, making option B the correct answer.' }
    ]
  },
  {
    id: 'read-lv3-14',
    level: 3,
    serial: 14,
    category: '哲学思辨',
    title: 'Moral Relativism vs. Moral Absolutism',
    passage:
      'Few debates in ethics generate more heat than the dispute between moral relativism and moral absolutism. Moral relativism holds that ethical judgments are rooted in particular cultures, historical periods, or individual perspectives, and that no single moral standard applies universally. Moral absolutism, by contrast, insists that certain moral principles are valid everywhere and at all times, independent of cultural variation. Relativists point to historical practices, such as slavery or foot-binding, that were once widely accepted but are now universally condemned, arguing that morality clearly evolves. Absolutists counter that the eventual condemnation of such practices reflects the discovery of timeless moral truths, not the invention of new ones. The debate has practical consequences. In a globalized world, where people from radically different traditions must coexist, should human rights be framed in universal terms or in ways that respect cultural diversity? Some philosophers attempt a middle way, distinguishing between a thin core of universal principles and a thicker set of values that may legitimately vary across societies. Critics on both sides find such compromises unsatisfying. Relativists worry that universal claims mask a particular cultural agenda, while absolutists fear that tolerance of difference can become indifference to injustice. The controversy touches law, diplomacy, education, and everyday interaction, reminding us that how we answer the question shapes not only abstract philosophy but the lived realities of communities worldwide.',
    vocabulary: [
      { word: 'relativism', phonetic: '/ˈrelətɪvɪzəm/', meaning: '相对主义' },
      { word: 'absolutism', phonetic: '/ˈæbsəluːtɪzəm/', meaning: '绝对主义' },
      { word: 'universal', phonetic: '/ˌjuːnɪˈvɜːsl/', meaning: '普遍的；通用的' },
      { word: 'condemned', phonetic: '/kənˈdemd/', meaning: '谴责；指责' },
      { word: 'globalized', phonetic: '/ˈɡləʊbəlaɪzd/', meaning: '全球化的' },
      { word: 'diversity', phonetic: '/daɪˈvɜːsəti/', meaning: '多样性' },
      { word: 'legitimately', phonetic: '/lɪˈdʒɪtɪmətli/', meaning: '合法地；合理地' },
      { word: 'coexist', phonetic: '/ˌkəʊɪɡˈzɪst/', meaning: '共存' },
      { word: 'indifference', phonetic: '/ɪnˈdɪfrəns/', meaning: '漠不关心' },
      { word: 'compromises', phonetic: '/ˈkɒmprəmaɪzɪz/', meaning: '妥协' }
    ],
    phrases: [
      { text: 'generate more heat than most philosophical disputes', meaning: '比大多数哲学争论更激烈' },
      { text: 'rooted in particular cultures and historical periods', meaning: '植根于特定的文化和历史时期' },
      { text: 'distinguishing between a thin core of universal principles', meaning: '区分一小组核心的普遍原则' },
      { text: 'tolerance of difference can become indifference to injustice', meaning: '对差异的宽容可能变成对不公正的漠视' }
    ],
    questions: [
      { id: 'q3-79', question: 'What does moral relativism claim?', options: ['Ethics is the same in every culture.', 'Ethics is rooted in particular cultures and perspectives.', 'Ethics comes only from religion.', 'Ethics is decided by scientists alone.'], answer: 1, explanation: 'The passage defines relativism as the view that "ethical judgments are rooted in particular cultures, historical periods, or individual perspectives." This cultural grounding matches option B.' },
      { id: 'q3-80', question: 'What does moral absolutism claim?', options: ['Morality is purely a personal taste.', 'Some moral principles are valid everywhere and always.', 'Ethics has no connection to reason.', 'Morality changes every decade.'], answer: 1, explanation: 'The passage states that absolutism "insists that certain moral principles are valid everywhere and at all times, independent of cultural variation." This universal validity matches option B.' },
      { id: 'q3-81', question: 'How do relativists use historical examples like slavery?', options: ['To prove morality never changes.', 'To argue morality clearly evolves over time.', 'To show that slavery is still ethical.', 'To argue that cultures never interact.'], answer: 1, explanation: 'The passage explains that relativists point to practices like slavery to argue "that morality clearly evolves." This use of history to support moral change matches option B.' },
      { id: 'q3-82', question: 'What middle way do some philosophers propose?', options: ['A ban on all ethical discussion.', 'A thin core of universal principles with varied cultural values.', 'A complete victory for relativism.', 'A return to ancient law codes.'], answer: 1, explanation: 'The passage describes philosophers who distinguish "between a thin core of universal principles and a thicker set of values that may legitimately vary." This two-tier model matches option B.' },
      { id: 'q3-83', question: 'What concern do absolutists raise about tolerance of difference?', options: ['It always produces economic growth.', 'It can become indifference to injustice.', 'It eliminates all religious practice.', 'It increases scientific certainty.'], answer: 1, explanation: 'The passage states that absolutists "fear that tolerance of difference can become indifference to injustice." This concern about moral indifference matches option B.' },
      { id: 'q3-84', question: 'What is the author\'s overall purpose in this passage?', options: ['To declare one side the clear winner.', 'To explore the debate and its practical stakes.', 'To dismiss both sides as worthless.', 'To argue only about abstract metaphysics.'], answer: 1, explanation: 'The passage presents both relativism and absolutism in balanced terms and explores "practical consequences" across law, diplomacy, and education. This balanced exploration of practical stakes matches option B.' }
    ]
  },
  {
    id: 'read-lv3-15',
    level: 3,
    serial: 15,
    category: '哲学思辨',
    title: 'The Paradox of Tolerance',
    passage:
      'The paradox of tolerance, famously articulated by philosopher Karl Popper, raises a profound question: should a society that values tolerance also tolerate those who are intolerant? If tolerance is extended without limit, even to those who seek to destroy it, the result may be the disappearance of tolerance itself. Popper argued that unlimited tolerance ultimately leads to the withdrawal of tolerance, because the intolerant will exploit open societies to seize power and silence dissent. The response, he suggested, is not to abandon tolerance but to refine it. A tolerant society may withhold tolerance from those who would use democratic freedoms to undermine them. Critics of Popper\'s formulation point out practical difficulties. Determining who counts as truly intolerant is rarely straightforward. Accusations of intolerance have sometimes been weaponized to suppress legitimate dissent. Moreover, the very act of suppressing intolerance may require the kind of coercive authority that tolerant societies wish to avoid. Some philosophers therefore urge caution, recommending restrictions only against imminent threats rather than ideas considered merely offensive. Others argue that contemporary examples of resurgent authoritarianism validate Popper\'s warning. The debate remains unresolved, but it forces a difficult conversation about the boundaries of open discourse. How societies answer this question reveals not only their commitment to freedom but also their understanding of what a free society is ultimately for.',
    vocabulary: [
      { word: 'paradox', phonetic: '/ˈpærədɒks/', meaning: '悖论' },
      { word: 'intolerant', phonetic: '/ɪnˈtɒlərənt/', meaning: '不容忍的；偏狭的' },
      { word: 'seize', phonetic: '/siːz/', meaning: '夺取' },
      { word: 'dissent', phonetic: '/dɪˈsent/', meaning: '异议' },
      { word: 'undermine', phonetic: '/ˌʌndəˈmaɪn/', meaning: '削弱；破坏' },
      { word: 'weaponized', phonetic: '/ˈwepənaɪzd/', meaning: '武器化的' },
      { word: 'imminent', phonetic: '/ˈɪmɪnənt/', meaning: '即将发生的；紧迫的' },
      { word: 'authoritarianism', phonetic: '/ɔːˌθɒrɪˈteəriənɪzəm/', meaning: '威权主义' },
      { word: 'discourse', phonetic: '/ˈdɪskɔːs/', meaning: '话语；讨论' },
      { word: 'formulation', phonetic: '/ˌfɔːmjʊˈleɪʃən/', meaning: '阐述；表述' }
    ],
    phrases: [
      { text: 'famously articulated by philosopher Karl Popper', meaning: '由哲学家卡尔·波普尔明确阐述' },
      { text: 'unlimited tolerance ultimately leads to the disappearance of tolerance', meaning: '无限的宽容最终会导致宽容本身的消失' },
      { text: 'withhold tolerance from those who would use democratic freedoms to undermine them', meaning: '对那些企图利用民主自由来破坏它们的人不予宽容' },
      { text: 'determine who counts as truly intolerant in any given case', meaning: '判断在某个具体情境下谁真正属于不容忍者' }
    ],
    questions: [
      { id: 'q3-85', question: 'What is the paradox of tolerance?', options: ['All tolerance is impossible to define.', 'Tolerating intolerance may destroy tolerance itself.', 'Tolerance is always harmful in society.', 'Tolerant people are usually weak in character.'], answer: 1, explanation: 'The passage states that "unlimited tolerance ultimately leads to the withdrawal of tolerance." This self-defeating consequence is the core of the paradox, matching option B.' },
      { id: 'q3-86', question: 'Who originally articulated this paradox?', options: ['Aristotle in ancient Greece.', 'Immanuel Kant in the 18th century.', 'Karl Popper in the 20th century.', 'Confucius in ancient China.'], answer: 2, explanation: 'The passage directly states that the paradox was "famously articulated by philosopher Karl Popper." This attribution makes option C correct.' },
      { id: 'q3-87', question: 'What practical difficulty do critics raise?', options: ['Popper lived too long ago.', 'Determining who is truly intolerant is rarely straightforward.', 'All countries already agree fully.', 'Tolerance is never tested in reality.'], answer: 1, explanation: 'The passage notes that "Determining who counts as truly intolerant is rarely straightforward." This practical challenge to Popper\'s principle matches option B.' },
      { id: 'q3-88', question: 'How might the paradox be misused, according to critics?', options: ['To support unlimited free speech.', 'To suppress legitimate dissent by labeling it intolerant.', 'To increase religious tolerance everywhere.', 'To end all government institutions.'], answer: 1, explanation: 'The passage warns that "Accusations of intolerance have sometimes been weaponized to suppress legitimate dissent." This risk of misuse matches option B.' },
      { id: 'q3-89', question: 'What do some philosophers recommend instead of broad suppression?', options: ['Restrictions only against imminent threats.', 'Banning all unpopular opinions immediately.', 'Abolishing all forms of government.', 'Forcing everyone to agree on everything.'], answer: 0, explanation: 'The passage states that some philosophers recommend "restrictions only against imminent threats rather than ideas considered merely offensive." This narrow scope of restriction matches option A.' },
      { id: 'q3-90', question: 'Why does the author consider this debate important?', options: ['It is purely theoretical with no impact.', 'It reveals what free societies are ultimately for.', 'It concerns only a single historical period.', 'It only affects professional philosophers.'], answer: 1, explanation: 'The closing sentence states that how societies answer this question reveals "not only their commitment to freedom but also their understanding of what a free society is ultimately for." This deep significance matches option B.' }
    ]
  },
  {
    id: 'read-lv3-16',
    level: 3,
    serial: 16,
    category: '心理学',
    title: 'The Myth of Multitasking',
    passage:
      'The myth of multitasking has shaped workplace culture for decades, yet neuroscience research increasingly shows that genuine parallel processing is largely fictional. What feels like simultaneous task performance is in reality a rapid, unconscious switching between activities, a process that imposes a measurable cognitive cost each time it occurs. When the brain is forced to rapidly redirect attention from one demand to another, productivity typically declines rather than climbs. Each switch forces the mind to reload rules, goals, and context, draining mental resources that could otherwise deepen the work. Studies of chronic multitaskers find that those who frequently juggle emails, meetings, and creative tasks actually perform worse on tests of memory, comprehension, and accuracy than those who concentrate on one task at a time. Sequential tasks performed under interruption show switching costs that may reach fifteen percent of total working time. Modern offices compound the problem by normalizing constant notifications and open chat channels, fragmenting attention further. The most productive workers increasingly protect long, uninterrupted blocks for deep focus, treating distraction as the primary enemy of meaningful output. Recognizing that multitasking is largely a cognitive illusion is the first step toward reclaiming genuine mental bandwidth and producing work of lasting value.',
    vocabulary: [
      { word: 'multitasking', phonetic: '/ˈmʌltitɑːskɪŋ/', meaning: '多任务处理' },
      { word: 'simultaneous', phonetic: '/ˌsɪməlˈteɪniəs/', meaning: '同时发生的' },
      { word: 'cognitive', phonetic: '/ˈkɒɡnətɪv/', meaning: '认知的' },
      { word: 'productivity', phonetic: '/prəˌdʌkˈtɪvəti/', meaning: '生产力；生产效率' },
      { word: 'neuroscience', phonetic: '/ˌnjʊərəʊˈsaɪəns/', meaning: '神经科学' },
      { word: 'distraction', phonetic: '/dɪˈstrækʃən/', meaning: '分心；干扰' },
      { word: 'chronic', phonetic: '/ˈkrɒnɪk/', meaning: '长期的；慢性的' },
      { word: 'sequential', phonetic: '/sɪˈkwenʃəl/', meaning: '顺序的；连续的' },
      { word: 'attention', phonetic: '/əˈtenʃən/', meaning: '注意力' },
      { word: 'juggling', phonetic: '/ˈdʒʌɡlɪŋ/', meaning: '同时兼顾' }
    ],
    phrases: [
      { text: 'What feels like simultaneous task performance is in reality a rapid, unconscious switching between activities', meaning: '看似在同时执行多项任务的感觉，实际上是任务间快速无意识的切换' },
      { text: 'the brain is forced to rapidly redirect attention from one demand to another', meaning: '大脑被迫在不同需求之间快速转移注意力' },
      { text: 'chronic multitaskers find that those who frequently juggle emails, meetings, and creative tasks actually perform worse', meaning: '研究表明经常兼顾邮件、会议和创意工作的长期多任务者实际上表现更差' },
      { text: 'a measurable cognitive cost each time it occurs', meaning: '每次发生都会带来可度量的认知代价' }
    ],
    questions: [
      { id: 'q3-91', question: 'What is actually happening when people believe they are multitasking, according to the passage?', options: ['A single task is being completed with unusual effort.', 'The brain is rapidly switching between activities rather than processing them in parallel.', 'The brain produces two completely independent thoughts at once.', 'The body performs one task while the mind rests entirely.'], answer: 1, explanation: 'The passage states that "What feels like simultaneous task performance is in reality a rapid, unconscious switching between activities." The contrast marked by "in reality" highlights the difference between perception and mechanism, supporting option B.' },
      { id: 'q3-92', question: 'Why does switching between tasks often reduce productivity?', options: ['The body becomes physically exhausted by movement.', 'The tasks are usually identical and therefore boring.', 'Each switch forces the mind to reload rules, goals, and context.', 'Productivity is unrelated to mental processes in the passage.'], answer: 2, explanation: 'The passage explains that "Each switch forces the mind to reload rules, goals, and context, draining mental resources." This enumeration of cognitive costs makes option C the correct answer.' },
      { id: 'q3-93', question: 'According to the passage, which group performs worse on memory and comprehension tests?', options: ['Chronic multitaskers who frequently juggle many tasks.', 'Occasional multitaskers who focus on one task at a time.', 'Workers who avoid digital devices entirely.', 'Students who study only at night.'], answer: 0, explanation: 'The passage states that "chronic multitaskers... actually perform worse on tests of memory, comprehension, and accuracy." The comparison identifies the chronic group as the underperforming one, matching option A.' },
      { id: 'q3-94', question: 'What is one negative effect of constant notifications in modern offices, according to the passage?', options: ['They increase physical fitness among employees.', 'They further fragment attention and add to cognitive load.', 'They reduce the cost of office equipment.', 'They completely eliminate the need for meetings.'], answer: 1, explanation: 'The passage notes that offices "normalize constant notifications and open chat channels, fragmenting attention further." The adverb "further" indicates that notifications compound the existing problem of fragmentation, supporting option B.' },
      { id: 'q3-95', question: 'What practice do highly productive workers increasingly adopt?', options: ['Working late into the night on multiple screens.', 'Protecting long, uninterrupted blocks for deep focus.', 'Attending as many meetings as possible each day.', 'Reading social media feeds during work hours.'], answer: 1, explanation: 'The passage states that "The most productive workers increasingly protect long, uninterrupted blocks for deep focus." This specific behavioral recommendation matches option B directly.' },
      { id: 'q3-96', question: 'What does the word "cognitive" most nearly mean in this passage?', options: ['Related to physical strength and athletic ability.', 'Related to thinking, memory, and mental processing.', 'Related to financial accounting and bookkeeping.', 'Related to emotional expression and artistic feeling.'], answer: 1, explanation: 'In context, "cognitive cost" and "cognitive illusion" both refer to mental processes. The Latin root "cognit-" relates to knowing or thinking, and surrounding words such as "brain," "mind," and "memory" reinforce this meaning, making option B correct.' },
      { id: 'q3-97', question: 'What is the author\'s main argument about multitasking?', options: ['Multitasking is largely a cognitive illusion with measurable costs.', 'Multitasking is the most efficient way to manage modern work.', 'Multitasking is impossible and should be criminalized.', 'Multitasking has no relationship to productivity at all.'], answer: 0, explanation: 'The concluding sentence states that "Recognizing that multitasking is largely a cognitive illusion is the first step toward reclaiming genuine mental bandwidth." The phrase "cognitive illusion" captures the author\'s main argument, matching option A.' }
    ]
  },
  {
    id: 'read-lv3-17',
    level: 3,
    serial: 17,
    category: '心理学',
    title: 'The Growth Mindset',
    passage:
      'Psychologist Carol Dweck\'s research on the growth mindset has transformed how educators, parents, and coaches understand achievement. The central idea is that intelligence and ability are not fixed traits but qualities that can be developed through effort, strategy, and resilience. Students who adopt a growth mindset tend to view challenges as opportunities to learn, while those with a fixed mindset often avoid difficulty for fear of appearing incompetent. Neuroscience provides striking support for this view. Studies of brain plasticity show that neural pathways reorganize themselves in response to sustained practice, contradicting the older notion that intelligence is innate and unchangeable. As learners persist through difficult problems, the brain forms new connections that strengthen understanding over time. Yet the growth mindset is not a panacea. Simply telling students to "try harder" rarely produces change unless the surrounding environment rewards effort rather than mere outcomes. Feedback that praises strategy and perseverance, for example, fosters self-efficacy far more effectively than praise for raw talent. Schools that have embraced the mindset have redesigned assessment, homework, and teacher training around the principle that mistakes are a natural part of learning. Critics caution against oversimplifying the concept, noting that structural inequalities can constrain even the most determined learners. Still, when paired with realistic support, the growth mindset offers a powerful framework for cultivating lifelong learning and a healthier relationship with failure.',
    vocabulary: [
      { word: 'mindset', phonetic: '/ˈmaɪndset/', meaning: '思维模式；心态' },
      { word: 'resilience', phonetic: '/rɪˈzɪliəns/', meaning: '韧性；复原力' },
      { word: 'intelligence', phonetic: '/ɪnˈtelɪdʒəns/', meaning: '智力' },
      { word: 'perseverance', phonetic: '/ˌpɜːsɪˈvɪərəns/', meaning: '坚持不懈' },
      { word: 'plasticity', phonetic: '/plæˈstɪsəti/', meaning: '可塑性' },
      { word: 'innate', phonetic: '/ɪˈneɪt/', meaning: '天生的；先天的' },
      { word: 'self-efficacy', phonetic: '/self ˈefɪkəsi/', meaning: '自我效能感' },
      { word: 'feedback', phonetic: '/ˈfiːdbæk/', meaning: '反馈' },
      { word: 'panacea', phonetic: '/ˌpænəˈsiːə/', meaning: '万灵药' },
      { word: 'achievement', phonetic: '/əˈtʃiːvmənt/', meaning: '成就；成绩' }
    ],
    phrases: [
      { text: 'view challenges as opportunities to learn', meaning: '把挑战视为学习的机会' },
      { text: 'neural pathways reorganize themselves in response to sustained practice', meaning: '神经通路会因持续练习而重新组织' },
      { text: 'praise strategy and perseverance rather than raw talent', meaning: '表扬策略与坚持，而不是天赋本身' },
      { text: 'mistakes are a natural part of learning', meaning: '错误是学习中自然而然的一部分' }
    ],
    questions: [
      { id: 'q3-98', question: 'What is the central claim of the growth mindset, according to the passage?', options: ['Intelligence and ability can be developed through effort and strategy.', 'Talent is the only reliable predictor of success.', 'Practice has no measurable effect on the brain.', 'Students should avoid difficult tasks whenever possible.'], answer: 0, explanation: 'The passage states that "intelligence and ability are not fixed traits but qualities that can be developed through effort, strategy, and resilience." The contrast "not... but..." establishes development as the central claim, supporting option A.' },
      { id: 'q3-99', question: 'What does the passage say students with a fixed mindset typically do?', options: ['They embrace every challenge with enthusiasm.', 'They avoid difficulty for fear of appearing incompetent.', 'They outperform students with a growth mindset.', 'They rely primarily on innate talent alone.'], answer: 1, explanation: 'The passage states that those with a fixed mindset "often avoid difficulty for fear of appearing incompetent." This behavioral description matches option B directly.' },
      { id: 'q3-100', question: 'How does neuroscience support the growth mindset, according to the passage?', options: ['It proves that intelligence is fixed at birth.', 'It shows that neural pathways reorganize with sustained practice.', 'It denies any role for effort in learning.', 'It only applies to adult learners, not children.'], answer: 1, explanation: 'The passage notes that "Studies of brain plasticity show that neural pathways reorganize themselves in response to sustained practice." This biological mechanism directly supports option B and contradicts the fixed-mindset view.' },
      { id: 'q3-101', question: 'What is one criticism the passage raises about the growth mindset?', options: ['It is too effective in every school setting.', 'Simply telling students to try harder rarely produces change alone.', 'It has no relationship to educational practice.', 'It applies only to athletes, not students.'], answer: 1, explanation: 'The passage warns that "Simply telling students to \'try harder\' rarely produces change unless the surrounding environment rewards effort." The conditional structure highlights the limitation, matching option B.' },
      { id: 'q3-102', question: 'What kind of feedback is described as more effective for fostering self-efficacy?', options: ['Praise for raw talent alone.', 'Public ranking against other students.', 'Feedback that praises strategy and perseverance.', 'Strict criticism of every mistake made.'], answer: 2, explanation: 'The passage states that "Feedback that praises strategy and perseverance, for example, fosters self-efficacy far more effectively than praise for raw talent." This comparison makes option C correct.' },
      { id: 'q3-103', question: 'What does the word "innate" most nearly mean in paragraph 2?', options: ['Developed through deliberate training.', 'Inherited and present from birth.', 'Acquired late in life through study.', 'Randomly assigned by lottery.'], answer: 1, explanation: 'The passage contrasts "innate and unchangeable" intelligence with traits developed through practice. The Latin root "innat-" means "born in," and the context of fixed traits indicates an inborn quality, supporting option B.' },
      { id: 'q3-104', question: 'What is the author\'s overall view of the growth mindset?', options: ['It is a useless idea with no practical value.', 'It is a powerful framework when paired with realistic support.', 'It should replace all traditional teaching immediately.', 'It applies only to highly gifted students.'], answer: 1, explanation: 'The final sentence states that "when paired with realistic support, the growth mindset offers a powerful framework for cultivating lifelong learning." The conditional "when paired with" signals measured endorsement rather than absolute approval, supporting option B.' }
    ]
  },
  {
    id: 'read-lv3-18',
    level: 3,
    serial: 18,
    category: '心理学',
    title: 'The Power of Habits',
    passage:
      'Habits are the invisible architecture of daily life, shaping much of what we do without conscious thought. Researchers estimate that nearly half of all human behavior is repeated in roughly the same context each day, from brushing teeth to checking a phone upon waking. Each habit operates through a simple loop: a cue triggers a routine, and the routine delivers a reward that the brain learns to crave. Over time, this loop becomes so automatic that the conscious mind barely participates. The implications are profound. Once understood, the cue-routine-reward structure can be used to break bad habits and build better ones. Identifying the cue that prompts an unwanted behavior is often the first step toward change. Replacing the routine while preserving the reward allows new patterns to take root without disrupting the underlying craving. Conversely, attempts to eliminate a habit by sheer willpower rarely succeed when the cue and reward remain unchanged. Habits are also deeply social. The routines of those around us shape our own behaviors in subtle but powerful ways, which is why workplace culture and family rituals can either reinforce or undermine personal change. Although the brain\'s habit system evolved for efficiency, modern environments offer an abundance of cues and rewards that can entrench unhealthy routines. Learning to recognize the architecture of one\'s own habits is therefore a vital skill for anyone seeking sustained personal growth.',
    vocabulary: [
      { word: 'habit', phonetic: '/ˈhæbɪt/', meaning: '习惯' },
      { word: 'cue', phonetic: '/kjuː/', meaning: '提示；线索' },
      { word: 'routine', phonetic: '/ruːˈtiːn/', meaning: '惯例；常规' },
      { word: 'reward', phonetic: '/rɪˈwɔːd/', meaning: '回报；奖赏' },
      { word: 'automatic', phonetic: '/ˌɔːtəˈmætɪk/', meaning: '自动的；无意识的' },
      { word: 'willpower', phonetic: '/ˈwɪlpaʊə/', meaning: '意志力' },
      { word: 'craving', phonetic: '/ˈkreɪvɪŋ/', meaning: '渴望' },
      { word: 'entrench', phonetic: '/ɪnˈtrentʃ/', meaning: '使根深蒂固' },
      { word: 'sustained', phonetic: '/səˈsteɪnd/', meaning: '持续的' },
      { word: 'trigger', phonetic: '/ˈtrɪɡə/', meaning: '触发；引发' }
    ],
    phrases: [
      { text: 'a cue triggers a routine, and the routine delivers a reward', meaning: '提示触发惯例，惯例带来回报' },
      { text: 'attempts to eliminate a habit by sheer willpower rarely succeed', meaning: '单纯靠意志力消除习惯的尝试很少成功' },
      { text: 'workplace culture and family rituals can either reinforce or undermine personal change', meaning: '职场文化和家庭仪式既能强化也能削弱个人改变' },
      { text: 'an abundance of cues and rewards that can entrench unhealthy routines', meaning: '大量提示与回报，可能让不健康的惯例根深蒂固' }
    ],
    questions: [
      { id: 'q3-105', question: 'What does the passage say about the proportion of human behavior that is habitual?', options: ['Almost none of daily behavior is habitual.', 'Nearly half of human behavior is repeated in similar contexts.', 'Exactly ninety percent of behavior is habit-driven.', 'Only professional routines involve habit.'], answer: 1, explanation: 'The passage states that "researchers estimate that nearly half of all human behavior is repeated in roughly the same context each day." The quantitative claim "nearly half" matches option B.' },
      { id: 'q3-106', question: 'What are the three parts of the habit loop described in the passage?', options: ['Desire, fear, and memory.', 'Cue, routine, and reward.', 'Dream, action, and result.', 'Goal, plan, and reflection.'], answer: 1, explanation: 'The passage explicitly describes the loop as "a cue triggers a routine, and the routine delivers a reward." This three-part structure directly corresponds to option B.' },
      { id: 'q3-107', question: 'According to the passage, what is often the first step toward changing an unwanted habit?', options: ['Punishing oneself for past failures.', 'Identifying the cue that prompts the behavior.', 'Deliberately forgetting the routine.', 'Increasing the reward associated with the habit.'], answer: 1, explanation: 'The passage states that "Identifying the cue that prompts an unwanted behavior is often the first step toward change." This recommended starting point matches option B directly.' },
      { id: 'q3-108', question: 'Why do willpower-based attempts to eliminate habits often fail, according to the passage?', options: ['Because people lack physical strength entirely.', 'Because the cue and reward remain unchanged.', 'Because the brain stops forming any new connections.', 'Because habits cannot be analyzed scientifically.'], answer: 1, explanation: 'The passage explains that "attempts to eliminate a habit by sheer willpower rarely succeed when the cue and reward remain unchanged." The conditional "when... remain unchanged" identifies the unchanged cue and reward as the reason for failure, supporting option B.' },
      { id: 'q3-109', question: 'How does the passage describe the social dimension of habits?', options: ['Habits are entirely individual and unaffected by others.', 'The routines of those around us shape our own behaviors in powerful ways.', 'Only children are influenced by social habits.', 'Social influence eliminates all personal autonomy.'], answer: 1, explanation: 'The passage states that "the routines of those around us shape our own behaviors in subtle but powerful ways." This phrase directly supports option B, while the other options contradict the social emphasis in the passage.' },
      { id: 'q3-110', question: 'What does the word "entrench" most nearly mean in the final paragraph?', options: ['To make something disappear quickly.', 'To establish something so deeply that change becomes difficult.', 'To celebrate a recent accomplishment.', 'To translate an idea into another language.'], answer: 1, explanation: 'In context, modern environments "entrench unhealthy routines." The word suggests deep and resistant establishment, often with military or strategic connotations, matching option B rather than disappearance or celebration.' },
      { id: 'q3-111', question: 'What is the author\'s main point about understanding habits?', options: ['Habits are impossible to study scientifically.', 'Recognizing the architecture of one\'s own habits is a vital skill for personal growth.', 'Habits should be eliminated entirely from modern life.', 'Habits only matter for professional success.'], answer: 1, explanation: 'The closing sentence states that "Learning to recognize the architecture of one\'s own habits is therefore a vital skill for anyone seeking sustained personal growth." The phrase "vital skill" and the inferential "therefore" emphasize the central importance the author places on this understanding, matching option B.' }
    ]
  },
  {
    id: 'read-lv3-19',
    level: 3,
    serial: 19,
    category: '心理学',
    title: 'Decision Fatigue',
    passage:
      'Every day, people make thousands of decisions, from what to eat for breakfast to how to respond to complex workplace problems. Psychologists have observed that the quality of these decisions tends to deteriorate as the day progresses, a phenomenon known as decision fatigue. The underlying mechanism involves a gradual depletion of the mental energy required for self-control and deliberate thought. Early in the morning, after rest and sleep, people are typically more able to weigh options carefully and resist impulsive choices. By evening, after hours of meetings, parenting, and problem-solving, even small decisions can feel exhausting, and the brain tends to default to easier, more familiar options. Studies of judges, for instance, have shown that favorable rulings are most common at the start of the day and decline sharply before lunch and court breaks. The implications extend to personal finance, health, and ethics. Shoppers who face countless micro-decisions in a crowded store are more likely to make unplanned purchases, while dieters who exhaust their willpower by afternoon may indulge in sugary snacks. To counteract decision fatigue, experts recommend simplifying choices, establishing routines, and reserving the most important decisions for moments of mental clarity. Making consequential decisions in the morning, reducing trivial daily decisions, and protecting time for rest can all help preserve cognitive resources. In a world of endless options, learning to manage one\'s own decision-making budget has become a vital practical skill.',
    vocabulary: [
      { word: 'fatigue', phonetic: '/fəˈtiːɡ/', meaning: '疲劳；疲乏' },
      { word: 'willpower', phonetic: '/ˈwɪlpaʊə/', meaning: '意志力' },
      { word: 'deliberation', phonetic: '/dɪˌlɪbəˈreɪʃən/', meaning: '深思熟虑；商议' },
      { word: 'depletion', phonetic: '/dɪˈpliːʃən/', meaning: '消耗；枯竭' },
      { word: 'cognitive', phonetic: '/ˈkɒɡnətɪv/', meaning: '认知的' },
      { word: 'impulsive', phonetic: '/ɪmˈpʌlsɪv/', meaning: '冲动的' },
      { word: 'self-control', phonetic: '/self kənˈtrəʊl/', meaning: '自制力' },
      { word: 'unplanned', phonetic: '/ʌnˈplænd/', meaning: '未经计划的' },
      { word: 'indulge', phonetic: '/ɪnˈdʌldʒ/', meaning: '沉溺；放纵' },
      { word: 'exhaust', phonetic: '/ɪɡˈzɔːst/', meaning: '使精疲力竭' }
    ],
    phrases: [
      { text: 'the quality of these decisions tends to deteriorate as the day progresses', meaning: '决策质量往往随着一天推进而下降' },
      { text: 'a gradual depletion of the mental energy required for self-control', meaning: '逐渐耗尽维持自制力所需的心理能量' },
      { text: 'even small decisions can feel exhausting, and the brain tends to default to easier, more familiar options', meaning: '即便小决定也会让人精疲力竭，大脑倾向于默认选择更简单熟悉的选项' },
      { text: 'reserving the most important decisions for moments of mental clarity', meaning: '把最重要的决定留到头脑最清醒的时刻' }
    ],
    questions: [
      { id: 'q3-112', question: 'What is decision fatigue, according to the passage?', options: ['A physical injury caused by long working hours.', 'A gradual decline in decision quality as mental energy is depleted.', 'A pleasant feeling of accomplishment after many choices.', 'A type of food that boosts mental performance.'], answer: 1, explanation: 'The passage defines decision fatigue as a phenomenon in which "the quality of these decisions tends to deteriorate as the day progresses" because of "a gradual depletion of the mental energy." This combined definition matches option B.' },
      { id: 'q3-113', question: 'What pattern did studies of judges reveal about decision-making?', options: ['Judges rule randomly throughout the day.', 'Favorable rulings decline before lunch and court breaks.', 'Judges always rule favorably in the afternoon.', 'Judges stop making decisions after lunch.'], answer: 1, explanation: 'The passage states that "favorable rulings are most common at the start of the day and decline sharply before lunch and court breaks." The pattern of decline before breaks directly supports option B.' },
      { id: 'q3-114', question: 'Why are dieters who exhaust their willpower by afternoon more likely to indulge in sugary snacks?', options: ['Because sugar tastes better in the evening.', 'Because their mental energy for self-control has been depleted.', 'Because diet rules require evening eating.', 'Because willpower increases naturally with time.'], answer: 1, explanation: 'The passage explains that "dieters who exhaust their willpower by afternoon may indulge in sugary snacks" because of the depletion of cognitive resources for self-control. This causal link matches option B.' },
      { id: 'q3-115', question: 'What strategy do experts recommend to counteract decision fatigue?', options: ['Making more decisions to strengthen the brain.', 'Avoiding all rest and sleep entirely.', 'Simplifying choices and establishing routines.', 'Always deciding things in the evening.'], answer: 2, explanation: 'The passage lists expert recommendations: "simplifying choices, establishing routines, and reserving the most important decisions for moments of mental clarity." This strategy of simplification matches option C.' },
      { id: 'q3-116', question: 'When does the passage suggest people should make the most consequential decisions?', options: ['Late at night when others are asleep.', 'In the morning, when mental energy is freshest.', 'Immediately after a heavy meal.', 'Only on weekends regardless of energy.'], answer: 1, explanation: 'The passage recommends "Making consequential decisions in the morning" because mental energy is highest at that time. This specific timing recommendation matches option B.' },
      { id: 'q3-117', question: 'What does the word "impulsive" most nearly mean in paragraph 2?', options: ['Carefully considered over many days.', 'Done on sudden urge without thought.', 'Required by formal legal procedure.', 'Approved by a team of experts.'], answer: 1, explanation: 'In context, the brain tends to "default to easier, more familiar options" rather than making "impulsive choices." The surrounding discussion of willpower and deliberate thought indicates that "impulsive" means acting on sudden urge, matching option B.' },
      { id: 'q3-118', question: 'What is the author\'s overall message about decision fatigue?', options: ['It is irrelevant to modern life.', 'Managing one\'s decision-making budget is a vital practical skill.', 'It only affects professional decision-makers.', 'It is impossible to counteract in any way.'], answer: 1, explanation: 'The final sentence states that "learning to manage one\'s own decision-making budget has become a vital practical skill." The phrase "vital practical skill" captures the author\'s message, matching option B.' }
    ]
  },
  {
    id: 'read-lv3-20',
    level: 3,
    serial: 20,
    category: '心理学',
    title: 'The Placebo Effect',
    passage:
      'The placebo effect is one of the most fascinating phenomena in medicine and psychology. When patients receive a sham treatment, such as a sugar pill or an inert injection, and believe it to be genuine, they often experience real improvements in symptoms. The effect reveals how powerfully expectation and belief shape physical and mental states. Clinical trials routinely use placebos as controls to separate the psychological impact of receiving care from the specific action of a drug. Even when patients know they may be receiving a placebo, studies have found measurable benefits, suggesting that ritual and context contribute to healing beyond conscious belief. Brain imaging research has identified specific neural pathways activated by placebo treatments, including regions involved in pain regulation and reward anticipation. These findings challenge the traditional division between mind and body, suggesting that expectation can trigger genuine physiological responses. The implications for clinical practice are significant. Doctors who communicate warmth, confidence, and clear explanations tend to produce better patient outcomes, partly because of the placebo responses their care evokes. Placebo effects also complicate drug development, since new treatments must outperform not only placebos but also the often substantial placebo responses observed in trials for conditions such as depression, pain, and Parkinson\'s disease. Understanding the placebo effect is therefore essential, both for designing rigorous research and for appreciating the complex ways in which mind, body, and meaning interact in human health.',
    vocabulary: [
      { word: 'placebo', phonetic: '/pləˈsiːbəʊ/', meaning: '安慰剂' },
      { word: 'sham', phonetic: '/ʃæm/', meaning: '假的；欺骗性的' },
      { word: 'expectation', phonetic: '/ˌekspekˈteɪʃən/', meaning: '期望；预期' },
      { word: 'symptom', phonetic: '/ˈsɪmptəm/', meaning: '症状' },
      { word: 'clinical', phonetic: '/ˈklɪnɪkəl/', meaning: '临床的' },
      { word: 'ritual', phonetic: '/ˈrɪtʃuəl/', meaning: '仪式；惯例' },
      { word: 'inert', phonetic: '/ɪˈnɜːt/', meaning: '惰性的；无作用的' },
      { word: 'healing', phonetic: '/ˈhiːlɪŋ/', meaning: '治愈；康复' },
      { word: 'anticipation', phonetic: '/ænˌtɪsɪˈpeɪʃən/', meaning: '预期；期待' },
      { word: 'rigorous', phonetic: '/ˈrɪɡərəs/', meaning: '严格的；严密的' }
    ],
    phrases: [
      { text: 'experience real improvements in symptoms despite receiving an inert treatment', meaning: '即便接受了无效治疗，症状也出现真正的改善' },
      { text: 'separate the psychological impact of receiving care from the specific action of a drug', meaning: '把接受治疗带来的心理影响与药物本身的特定作用区分开来' },
      { text: 'trigger genuine physiological responses in the brain and body', meaning: '在大脑和身体中触发真正的生理反应' },
      { text: 'the complex ways in which mind, body, and meaning interact in human health', meaning: '心智、身体与意义在人类健康中交互作用的复杂方式' }
    ],
    questions: [
      { id: 'q3-119', question: 'What is the placebo effect, according to the passage?', options: ['A harmful side effect of strong medicine.', 'Real symptom improvement from belief in a sham treatment.', 'A psychological test that always fails in practice.', 'A legal requirement for all clinical trials.'], answer: 1, explanation: 'The passage states that "When patients receive a sham treatment... and believe it to be genuine, they often experience real improvements in symptoms." The combination of belief and sham treatment matches option B.' },
      { id: 'q3-120', question: 'Why do clinical trials use placebos?', options: ['To save money on real medicine.', 'To separate psychological impact from the specific action of a drug.', 'To make the trial more confusing for participants.', 'To test the patience of researchers.'], answer: 1, explanation: 'The passage states that "Clinical trials routinely use placebos as controls to separate the psychological impact of receiving care from the specific action of a drug." This methodological purpose matches option B.' },
      { id: 'q3-121', question: 'What did brain imaging research reveal about the placebo effect?', options: ['It activates no measurable brain activity.', 'It activates specific neural pathways involved in pain regulation and reward.', 'It only affects the heart, not the brain.', 'It can be entirely eliminated by scanners.'], answer: 1, explanation: 'The passage notes that "Brain imaging research has identified specific neural pathways activated by placebo treatments, including regions involved in pain regulation and reward anticipation." This finding directly supports option B.' },
      { id: 'q3-122', question: 'What does the passage suggest about doctors who communicate warmth and confidence?', options: ['They tend to produce worse patient outcomes.', 'They tend to produce better outcomes partly because of placebo responses.', 'They are required by law to behave this way.', 'They have no measurable effect on healing.'], answer: 1, explanation: 'The passage states that "Doctors who communicate warmth, confidence, and clear explanations tend to produce better patient outcomes, partly because of the placebo responses their care evokes." This causal link matches option B.' },
      { id: 'q3-123', question: 'Why do placebo responses complicate drug development, according to the passage?', options: ['Because patients refuse to take real medicine.', 'Because new treatments must outperform substantial placebo responses.', 'Because placebos are always cheaper than drugs.', 'Because regulators ban all placebo-based studies.'], answer: 1, explanation: 'The passage explains that "new treatments must outperform not only placebos but also the often substantial placebo responses observed in trials." This performance requirement is what complicates development, matching option B.' },
      { id: 'q3-124', question: 'What does the word "inert" most nearly mean in paragraph 1?', options: ['Highly active and powerful.', 'Chemically inactive and without effect.', 'Emotionally moving and inspiring.', 'Quickly absorbed by the body.'], answer: 1, explanation: 'In context, an "inert injection" is a sham treatment that lacks active ingredients. The Latin root "inert-" means lacking action, matching option B rather than powerful or quickly absorbed.' },
      { id: 'q3-125', question: 'What is the author\'s main conclusion about the placebo effect?', options: ['It is a medical myth with no scientific basis.', 'It reveals the complex interaction of mind, body, and meaning in health.', 'It should be banned from all future clinical trials.', 'It only affects patients with weak characters.'], answer: 1, explanation: 'The closing sentence states that "Understanding the placebo effect is therefore essential... for appreciating the complex ways in which mind, body, and meaning interact in human health." This integrative conclusion matches option B.' }
    ]
  },
  {
    id: 'read-lv3-21',
    level: 3,
    serial: 21,
    category: '心理学',
    title: 'Cognitive Biases in Daily Decisions',
    passage:
      'Every day, people make thousands of decisions, often without realizing how strongly their judgments are shaped by mental shortcuts. Psychologists call these shortcuts cognitive biases, systematic patterns of deviation from rationality that influence how we interpret information. One common example is confirmation bias, the tendency to seek evidence that supports what we already believe while ignoring contradictory facts. Another is the anchoring effect, in which the first piece of information encountered unduly influences subsequent estimates, even when the anchor is arbitrary. These biases operate largely outside conscious awareness, which makes them difficult to detect and correct. They evolved because quick judgments once helped our ancestors survive threatening environments, but in modern life they often produce errors in reasoning. Behavioral research has shown that even trained professionals fall prey to bias when under time pressure or emotional stress. For example, financial analysts may overweight recent market trends, and doctors may overdiagnose familiar conditions. Understanding the conditions under which bias intensifies is therefore crucial for improving everyday decisions. Practical strategies include seeking dissenting opinions, slowing down deliberation, and keeping a record of past predictions. Although no individual can eliminate bias entirely, awareness of its patterns helps individuals make more deliberate and accurate choices.',
    vocabulary: [
      { word: 'cognitive', phonetic: '/\'kɒɡnətɪv/', meaning: '认知的' },
      { word: 'bias', phonetic: '/\'baɪəs/', meaning: '偏见；偏向' },
      { word: 'systematic', phonetic: '/ˌsɪstə\'mætɪk/', meaning: '系统的' },
      { word: 'rationality', phonetic: '/ˌræʃə\'næləti/', meaning: '理性' },
      { word: 'confirmation', phonetic: '/kənˌfɜːmə\'teɪʃən/', meaning: '证实；确认' },
      { word: 'anchor', phonetic: '/\'æŋkə/', meaning: '锚；锚定' },
      { word: 'arbitrary', phonetic: '/\'ɑːbətrəri/', meaning: '任意的' },
      { word: 'deliberate', phonetic: '/dɪ\'lɪbərət/', meaning: '深思熟虑的' },
      { word: 'intensify', phonetic: '/ɪn\'tensɪfaɪ/', meaning: '加剧；增强' },
      { word: 'prediction', phonetic: '/prɪ\'dɪkʃən/', meaning: '预测；预言' }
    ],
    phrases: [
      { text: 'fall prey to bias under time pressure', meaning: '在时间压力下受到偏见的影响' },
      { text: 'overweight recent market trends and familiar conditions', meaning: '过分看重最近的市场趋势和熟悉的情况' },
      { text: 'seek evidence that supports what we already believe', meaning: '寻找支持我们已有观点的证据' },
      { text: 'keep a record of past predictions for self-correction', meaning: '记录过去的预测以便自我修正' }
    ],
    questions: [
      { id: 'q3-126', question: 'What are cognitive biases?', options: ['Deliberate lies told by advertisers to manipulate consumers.', 'Systematic mental shortcuts that shape judgments in patterned ways.', 'Random errors with no common pattern across individuals.', 'Decisions always made by computers rather than by people.'], answer: 1, explanation: 'The passage defines cognitive biases as "systematic patterns of deviation from rationality that influence how we interpret information," which directly matches option B.' },
      { id: 'q3-127', question: 'What is confirmation bias?', options: ['A bias affecting only professional scientists.', 'A bias causing people to seek evidence that supports existing beliefs.', 'A bias that improves the accuracy of predictions.', 'A bias that has been entirely eliminated by modern education.'], answer: 1, explanation: 'The passage defines confirmation bias as "the tendency to seek evidence that supports what we already believe while ignoring contradictory facts." This definition matches option B.' },
      { id: 'q3-128', question: 'What does the anchoring effect describe?', options: ['A bias in which earlier information unduly influences later estimates.', 'A bias in which anchors hold ships steady in harbors.', 'A bias favoring the last piece of information received.', 'A bias affecting only investment professionals.'], answer: 0, explanation: 'The passage states that the anchoring effect is one "in which the first piece of information encountered unduly influences subsequent estimates." This primacy effect matches option A.' },
      { id: 'q3-129', question: 'Why are cognitive biases difficult to correct?', options: ['Because they operate largely outside conscious awareness.', 'Because they were invented by advertisers in the 20th century.', 'Because they only occur in laboratory settings.', 'Because laws specifically protect biased thinking.'], answer: 0, explanation: 'The passage explicitly states "These biases operate largely outside conscious awareness, which makes them difficult to detect and correct." This reason matches option A.' },
      { id: 'q3-130', question: 'How do financial analysts illustrate cognitive bias, according to the passage?', options: ['They always refuse to consider market trends.', 'They may overweight recent market trends and rely on familiar patterns.', 'They rely entirely on algorithmic predictions.', 'They never make errors in their forecasts.'], answer: 1, explanation: 'The passage states that "financial analysts may overweight recent market trends." This specific example matches option B.' },
      { id: 'q3-131', question: 'What does the word "arbitrary" most nearly mean in paragraph 2?', options: ['Based on strict logical proof.', 'Chosen at random without reason.', 'Required by international law.', 'Confirmed by repeated experiments.'], answer: 1, explanation: 'In context, the anchoring effect remains powerful "even when the anchor is arbitrary," meaning even when the initial number has no logical basis. This usage matches option B.' },
      { id: 'q3-132', question: 'What is the author\'s main point about cognitive biases?', options: ['They are a permanent excuse for poor decisions.', 'Awareness of their patterns can improve everyday decisions.', 'They only affect people with low intelligence.', 'They can be eliminated by taking vitamins.'], answer: 1, explanation: 'The closing sentence states that "awareness of its patterns helps individuals make more deliberate and accurate choices." This conclusion about the value of awareness matches option B.' }
    ]
  },
  {
    id: 'read-lv3-22',
    level: 3,
    serial: 22,
    category: '哲学思辨',
    title: 'The Problem of Free Will',
    passage:
      'The question of whether humans possess free will has occupied philosophers for centuries, and it remains one of the most debated topics in philosophy of mind. Compatibilists argue that free will is compatible with determinism because agents can still act voluntarily when their choices arise from their own desires and reasoning, free from external compulsion. By contrast, hard incompatibilists maintain that if determinism is true, no one is ultimately responsible for their actions, since every choice is the inevitable consequence of prior causes. Neuroscience has added fuel to the debate, with experiments in the 1980s suggesting that brain activity precedes conscious decision by several hundred milliseconds. Some interpreters read this finding as evidence that the conscious sense of willing is merely an illusion constructed after the fact. Others caution that such studies measure only simple perceptual choices and do not generalize to complex moral deliberation. The practical stakes of the debate are high. If free will is an illusion, the traditional justifications for praise, blame, and punishment require re-examination. Retributive justice, in particular, presupposes agents capable of choosing otherwise. Yet even if determinism holds, societies may still benefit from holding people accountable, because sanctions shape future behavior. The wise approach may therefore be to acknowledge the philosophical complexity while preserving the social practices that encourage responsibility and reflection.',
    vocabulary: [
      { word: 'compatibilist', phonetic: '/kəm\'pætɪbəlɪst/', meaning: '相容论者' },
      { word: 'determinism', phonetic: '/dɪ\'tɜːmɪnɪzəm/', meaning: '决定论' },
      { word: 'agent', phonetic: '/\'eɪdʒənt/', meaning: '行为者' },
      { word: 'voluntary', phonetic: '/\'vɒləntəri/', meaning: '自愿的' },
      { word: 'compulsion', phonetic: '/kəm\'pʌlʃən/', meaning: '强迫' },
      { word: 'inevitably', phonetic: '/ɪn\'evɪtəbli/', meaning: '不可避免地' },
      { word: 'neuroscience', phonetic: '/ˌnjʊərəʊ\'saɪəns/', meaning: '神经科学' },
      { word: 'illusion', phonetic: '/ɪ\'ljuːʒən/', meaning: '幻觉；错觉' },
      { word: 'deliberation', phonetic: '/dɪˌlɪbə\'reɪʃən/', meaning: '深思熟虑' },
      { word: 'retributive', phonetic: '/rɪ\'trɪbjətɪv/', meaning: '报应性的' }
    ],
    phrases: [
      { text: 'free from external compulsion and direct coercion', meaning: '不受外部强制和直接胁迫' },
      { text: 'the inevitable consequence of prior causes in a deterministic chain', meaning: '决定论链条中先前原因的必然结果' },
      { text: 'add fuel to the philosophical debate about responsibility', meaning: '为关于责任的哲学辩论火上浇油' },
      { text: 'capable of choosing otherwise in identical circumstances', meaning: '在相同情境下能够另作选择' }
    ],
    questions: [
      { id: 'q3-133', question: 'What is compatibilism, according to the passage?', options: ['The view that free will and determinism cannot coexist.', 'The view that free will is compatible with determinism when actions are voluntary.', 'The view that humans have no free will at all.', 'The view that neuroscience has settled the debate.'], answer: 1, explanation: 'The passage defines compatibilism as the view that "free will is compatible with determinism because agents can still act voluntarily when their choices arise from their own desires and reasoning." This matches option B.' },
      { id: 'q3-134', question: 'What do hard incompatibilists believe?', options: ['That free will requires supernatural intervention.', 'That if determinism is true, no one is ultimately responsible for actions.', 'That neuroscience proves the existence of free will.', 'That compatibilism is the only correct position.'], answer: 1, explanation: 'The passage states that hard incompatibilists "maintain that if determinism is true, no one is ultimately responsible for their actions." This position matches option B.' },
      { id: 'q3-135', question: 'What did neuroscience experiments in the 1980s suggest, according to the passage?', options: ['That the brain never shows activity before decisions.', 'That brain activity can precede conscious decisions by hundreds of milliseconds.', 'That all decisions are made consciously before any brain activity.', 'That neuroscience has no relevance to philosophy.'], answer: 1, explanation: 'The passage reports that "experiments in the 1980s suggesting that brain activity precedes conscious decision by several hundred milliseconds." This finding matches option B.' },
      { id: 'q3-136', question: 'Why do some scholars dispute those neuroscience findings?', options: ['Because the studies were conducted on plants rather than humans.', 'Because they argue the studies measure only simple perceptual choices and do not generalize to moral deliberation.', 'Because the findings were rejected by every philosopher.', 'Because the studies proved the opposite of what critics claim.'], answer: 1, explanation: 'The passage notes that critics caution that "such studies measure only simple perceptual choices and do not generalize to complex moral deliberation." This criticism matches option B.' },
      { id: 'q3-137', question: 'Why is retributive justice at stake in this debate?', options: ['Because retributive justice presupposes agents capable of choosing otherwise.', 'Because retributive justice has been abolished in all democracies.', 'Because retributive justice applies only to corporations.', 'Because retributive justice requires no free will at all.'], answer: 0, explanation: 'The passage states that "Retributive justice, in particular, presupposes agents capable of choosing otherwise." This presupposition is what puts it at stake in the debate, matching option A.' },
      { id: 'q3-138', question: 'What does the word "illusion" most nearly mean in paragraph 3?', options: ['A genuine perception of external reality.', 'A misleading appearance that does not match underlying truth.', 'A scientific law describing brain chemistry.', 'A type of measurement used in laboratories.'], answer: 1, explanation: 'In context, the conscious sense of willing may be "merely an illusion constructed after the fact," meaning it is a misleading appearance rather than a true reflection of underlying causation. This matches option B.' },
      { id: 'q3-139', question: 'What pragmatic approach does the author suggest at the end of the passage?', options: ['Abolishing all systems of punishment immediately.', 'Acknowledging philosophical complexity while preserving practices that encourage responsibility.', 'Adopting hard incompatibilism as official state policy.', 'Refusing to discuss free will in any public setting.'], answer: 1, explanation: 'The closing sentence recommends "acknowledge the philosophical complexity while preserving the social practices that encourage responsibility and reflection." This balanced pragmatic approach matches option B.' }
    ]
  },
  {
    id: 'read-lv3-23',
    level: 3,
    serial: 23,
    category: '科技前沿',
    title: 'The Rise of Neuromorphic Computing',
    passage:
      'Neuromorphic computing is an emerging field that designs computer hardware inspired by the structure and operation of the human brain. Unlike traditional processors, which execute instructions sequentially in separate logic and memory units, neuromorphic chips integrate computation and storage within networks of artificial synapses and neurons. This architecture promises dramatic improvements in energy efficiency, particularly for tasks involving pattern recognition, sensory processing, and adaptive learning. Modern applications such as autonomous vehicles, real-time translation, and wearable health monitors demand computations that conventional chips struggle to perform without draining batteries. Neuromorphic systems address these constraints by mimicking the brain\'s event-driven signaling, activating only the pathways required for a given stimulus. Early prototypes have demonstrated remarkable capabilities in tasks like gesture recognition and acoustic event detection, often using a fraction of the power consumed by general-purpose processors. However, scaling these systems poses formidable challenges. Software ecosystems, programming models, and benchmarks have not yet matured, and many algorithms designed for conventional hardware must be rewritten to exploit the new architecture. Industry analysts expect commercial neuromorphic accelerators to play a complementary role alongside classical CPUs and GPUs rather than replace them outright. As research progresses, neuromorphic computing is likely to deepen our understanding of biological intelligence while delivering practical tools for the next generation of low-power, always-on intelligent devices.',
    vocabulary: [
      { word: 'neuromorphic', phonetic: '/ˌnjʊərəʊ\'mɔːfɪk/', meaning: '神经形态的' },
      { word: 'hardware', phonetic: '/\'hɑːdweə/', meaning: '硬件' },
      { word: 'sequentially', phonetic: '/sɪ\'kwenʃəli/', meaning: '按顺序地' },
      { word: 'integrate', phonetic: '/\'ɪntɪɡreɪt/', meaning: '整合；集成' },
      { word: 'synapse', phonetic: '/\'sɪnæps/', meaning: '突触' },
      { word: 'neuron', phonetic: '/\'njʊərɒn/', meaning: '神经元' },
      { word: 'architecture', phonetic: '/\'ɑːkɪtektʃə/', meaning: '架构' },
      { word: 'prototype', phonetic: '/\'prəʊtətaɪp/', meaning: '原型' },
      { word: 'algorithm', phonetic: '/\'ælɡərɪðəm/', meaning: '算法' },
      { word: 'complementary', phonetic: '/ˌkɒmplɪ\'mentəri/', meaning: '互补的' }
    ],
    phrases: [
      { text: 'integrate computation and storage within networks of artificial synapses and neurons', meaning: '在人工突触和神经元网络中整合计算与存储' },
      { text: 'use only a fraction of the power consumed by general-purpose processors', meaning: '只使用通用处理器所耗电力的零头' },
      { text: 'mimic the brain\'s event-driven signaling for greater efficiency', meaning: '模仿大脑的事件驱动信号以提高效率' },
      { text: 'play a complementary role alongside classical CPUs and GPUs', meaning: '与传统CPU和GPU一起发挥互补作用' }
    ],
    questions: [
      { id: 'q3-140', question: 'What is neuromorphic computing?', options: ['A type of brain surgery performed by robots.', 'Hardware design inspired by the structure and operation of the human brain.', 'A new programming language for writing science fiction.', 'A method of teaching neuroscience to schoolchildren.'], answer: 1, explanation: 'The passage defines neuromorphic computing as "an emerging field that designs computer hardware inspired by the structure and operation of the human brain." This definition matches option B.' },
      { id: 'q3-141', question: 'How do neuromorphic chips differ from traditional processors?', options: ['They use larger batteries than ordinary laptops.', 'They integrate computation and storage within networks of artificial synapses and neurons.', 'They require constant internet connectivity to operate.', 'They have no memory units at all.'], answer: 1, explanation: 'The passage states that "neuromorphic chips integrate computation and storage within networks of artificial synapses and neurons," unlike traditional chips with separate logic and memory units. This architectural difference matches option B.' },
      { id: 'q3-142', question: 'What advantage do neuromorphic systems offer over conventional chips?', options: ['They are always slower but more colorful.', 'They promise dramatic improvements in energy efficiency for pattern recognition tasks.', 'They can only be used in research laboratories.', 'They have no need for software updates.'], answer: 1, explanation: 'The passage states that the architecture "promises dramatic improvements in energy efficiency, particularly for tasks involving pattern recognition, sensory processing, and adaptive learning." This advantage matches option B.' },
      { id: 'q3-143', question: 'Which tasks have early neuromorphic prototypes successfully handled?', options: ['Building entire cities from scratch.', 'Gesture recognition and acoustic event detection using very little power.', 'Cooking meals in autonomous kitchens.', 'Flying commercial passenger aircraft without pilots.'], answer: 1, explanation: 'The passage states that "Early prototypes have demonstrated remarkable capabilities in tasks like gesture recognition and acoustic event detection." This specific capability matches option B.' },
      { id: 'q3-144', question: 'What challenges remain for neuromorphic systems, according to the passage?', options: ['Software ecosystems, programming models, and benchmarks have not yet matured.', 'The chips are too small to manufacture at any scale.', 'There is no scientific theory behind the approach.', 'They are illegal in most countries.'], answer: 0, explanation: 'The passage explains that "Software ecosystems, programming models, and benchmarks have not yet matured, and many algorithms designed for conventional hardware must be rewritten." This challenge matches option A.' },
      { id: 'q3-145', question: 'What does the word "sequentially" most nearly mean in paragraph 1?', options: ['In a random and unpredictable order.', 'One after another in a fixed order.', 'All at the same moment in parallel.', 'Only when triggered by external sensors.'], answer: 1, explanation: 'In context, traditional processors "execute instructions sequentially," meaning one after another in order, as opposed to the brain\'s parallel operation. This usage matches option B.' },
      { id: 'q3-146', question: 'What is the author\'s overall view of neuromorphic computing\'s future?', options: ['It will replace every computer on Earth within five years.', 'It will likely complement classical processors and deepen our understanding of biological intelligence.', 'It is a passing fad with no practical applications.', 'It should be banned until safety can be guaranteed.'], answer: 1, explanation: 'The closing sentence projects that neuromorphic computing "is likely to deepen our understanding of biological intelligence while delivering practical tools for the next generation of low-power devices." This optimistic but measured outlook matches option B.' }
    ]
  },
  {
    id: 'read-lv3-24',
    level: 3,
    serial: 24,
    category: '经济学',
    title: 'Behavioral Economics in Markets',
    passage:
      'Behavioral economics has reshaped the study of markets by integrating insights from psychology into economic models. Classical theory assumes that actors are rational, with stable preferences and access to all relevant information. In reality, however, people rely on heuristics, suffer from cognitive biases, and are strongly influenced by social context. Behavioral research has shown that investors often overreact to recent news, that consumers are swayed by default options, and that traders sometimes create asset bubbles through shared optimism. These findings have profound implications for policy and regulation. Defaults in retirement savings plans, for instance, can dramatically increase participation rates because most people stick with whatever option is initially selected. Similarly, framing energy bills in terms of losses rather than savings motivates households to reduce consumption more effectively. Critics argue that behavioral insights produce only marginal changes and cannot replace rigorous structural reforms. Defenders respond that even modest, well-designed nudges can yield significant social benefits at low cost, especially when combined with traditional fiscal policy. The field has therefore earned a permanent place in both academic research and government practice, encouraging decision-makers to design institutions that align with how people actually behave rather than how idealized models assume they should.',
    vocabulary: [
      { word: 'reshape', phonetic: '/ˌriː\'ʃeɪp/', meaning: '重塑；改造' },
      { word: 'insight', phonetic: '/\'ɪnsaɪt/', meaning: '洞察' },
      { word: 'rational', phonetic: '/\'ræʃənəl/', meaning: '理性的' },
      { word: 'preference', phonetic: '/\'prefərəns/', meaning: '偏好' },
      { word: 'heuristic', phonetic: '/hjʊə\'rɪstɪk/', meaning: '启发法；直觉' },
      { word: 'asset', phonetic: '/\'æset/', meaning: '资产' },
      { word: 'bubble', phonetic: '/\'bʌbəl/', meaning: '泡沫' },
      { word: 'default', phonetic: '/dɪ\'fɔːlt/', meaning: '默认' },
      { word: 'framing', phonetic: '/\'freɪmɪŋ/', meaning: '框架' },
      { word: 'nudge', phonetic: '/nʌdʒ/', meaning: '助推' }
    ],
    phrases: [
      { text: 'rely on heuristics to make rapid judgments under uncertainty', meaning: '在不确定下依赖启发法做出快速判断' },
      { text: 'create asset bubbles through shared optimism among traders', meaning: '交易者通过共同乐观情绪制造资产泡沫' },
      { text: 'dramatically increase participation rates in savings programs', meaning: '显著提高储蓄计划的参与率' },
      { text: 'align with how people actually behave rather than idealized assumptions', meaning: '与人们的实际行为而非理想化假设相一致' }
    ],
    questions: [
      { id: 'q3-147', question: 'How has behavioral economics changed the study of markets?', options: ['By replacing all mathematics with philosophical speculation.', 'By integrating insights from psychology into economic models.', 'By abolishing the use of data in financial analysis.', 'By focusing exclusively on rural agricultural economies.'], answer: 1, explanation: 'The passage states that behavioral economics has "reshaped the study of markets by integrating insights from psychology into economic models." This disciplinary integration matches option B.' },
      { id: 'q3-148', question: 'What assumption of classical economic theory does the passage challenge?', options: ['That markets always exist in some form.', 'That actors are rational with stable preferences and full information.', 'That governments should never regulate business.', 'That money is the only measure of value.'], answer: 1, explanation: 'The passage identifies the assumption that "actors are rational, with stable preferences and access to all relevant information" as a classical premise that reality contradicts. This matches option B.' },
      { id: 'q3-149', question: 'What example illustrates the power of default options?', options: ['Customers who refuse to buy any product at any price.', 'Retirement savings plans where default enrollment boosts participation rates.', 'Auctions in which the highest bidder always wins.', 'Trade agreements signed between two governments.'], answer: 1, explanation: 'The passage explains that "Defaults in retirement savings plans, for instance, can dramatically increase participation rates because most people stick with whatever option is initially selected." This example matches option B.' },
      { id: 'q3-150', question: 'How does framing affect consumer behavior, according to the passage?', options: ['It has no measurable effect on choices.', 'Framing energy bills as losses motivates households to reduce consumption more effectively.', 'Framing only matters in political campaigns, not markets.', 'Framing always leads to irrational decisions.'], answer: 1, explanation: 'The passage states that "framing energy bills in terms of losses rather than savings motivates households to reduce consumption more effectively." This framing effect matches option B.' },
      { id: 'q3-151', question: 'What criticism do critics level at behavioral insights?', options: ['They are too mathematical to be applied to real life.', 'They produce only marginal changes and cannot replace rigorous structural reforms.', 'They require the use of experimental drugs on consumers.', 'They have been banned in all democracies.'], answer: 1, explanation: 'The passage reports that critics argue "behavioral insights produce only marginal changes and cannot replace rigorous structural reforms." This criticism matches option B.' },
      { id: 'q3-152', question: 'What does the word "heuristic" most nearly mean in paragraph 1?', options: ['A formal mathematical proof written by academics.', 'A practical mental shortcut used for quick decisions.', 'A type of laboratory equipment for measuring risk.', 'A legal contract signed between two parties.'], answer: 1, explanation: 'In context, people "rely on heuristics" rather than full rational calculation, meaning they use quick mental shortcuts to reach judgments. This usage matches option B.' },
      { id: 'q3-153', question: 'What conclusion does the author reach about behavioral economics?', options: ['It is a temporary fashion that will soon fade.', 'It has earned a permanent place in research and policy.', 'It applies only to wealthy industrialized nations.', 'It should be confined to classroom discussions.'], answer: 1, explanation: 'The passage concludes that the field "has therefore earned a permanent place in both academic research and government practice." This conclusion matches option B.' }
    ]
  },  {
    id: 'read-lv3-25',
    level: 3,
    serial: 25,
    category: '文化与社会',
    title: 'The Digital Transformation of Social Life',
    passage:
      'The rapid spread of digital technologies has profoundly reshaped how individuals form relationships, build communities, and understand themselves. Social media platforms allow people to maintain contact across continents, yet critics worry that these same platforms encourage shallow interactions, performative self-presentation, and political polarization. Sociologists debate whether online networks strengthen or weaken traditional forms of social capital, the trust and reciprocity that bind neighborhoods and civic associations together. Some scholars argue that digital tools enable new forms of collective action, from crowdfunding campaigns to global climate movements, that would have been impossible in earlier eras. Others warn that algorithmic curation creates filter bubbles, exposing users primarily to viewpoints that confirm their existing beliefs and eroding exposure to difference. Meanwhile, questions of privacy and surveillance have become central, as personal data is harvested, traded, and analyzed on an industrial scale. Young people in particular navigate a paradox: they are more digitally connected than any previous generation, yet report rising levels of loneliness and anxiety. Researchers caution against simple narratives of technological determinism, emphasizing that societies can shape technologies through regulation, education, and civic design. The challenge is to harness the benefits of digital life while safeguarding the relationships, attention, and democratic discourse on which healthy communities depend.',
    vocabulary: [
      { word: 'profoundly', phonetic: '/prə\'faʊndli/', meaning: '深刻地' },
      { word: 'performative', phonetic: '/pə\'fɔːmətɪv/', meaning: '表演性的' },
      { word: 'polarization', phonetic: '/ˌpəʊləraɪ\'zeɪʃən/', meaning: '极化' },
      { word: 'reciprocity', phonetic: '/ˌrɪsɪ\'prɒsəti/', meaning: '互惠' },
      { word: 'crowdfunding', phonetic: '/\'kraʊdfʌndɪŋ/', meaning: '众筹' },
      { word: 'algorithmic', phonetic: '/ˌælɡə\'rɪðmɪk/', meaning: '算法的' },
      { word: 'curation', phonetic: '/kjʊə\'reɪʃən/', meaning: '策展；精选' },
      { word: 'surveillance', phonetic: '/sɜː\'veɪləns/', meaning: '监视' },
      { word: 'determinism', phonetic: '/dɪ\'tɜːmɪnɪzəm/', meaning: '决定论' },
      { word: 'discourse', phonetic: '/\'dɪskɔːs/', meaning: '话语；讨论' }
    ],
    phrases: [
      { text: 'maintain contact across continents through social media', meaning: '通过社交媒体跨越洲际保持联系' },
      { text: 'from crowdfunding campaigns to global climate movements', meaning: '从众筹活动到全球气候运动' },
      { text: 'harvested, traded, and analyzed on an industrial scale', meaning: '以工业规模被收集、交易和分析' },
      { text: 'more digitally connected than any previous generation', meaning: '比以往任何一代都更加数字化互联' }
    ],
    questions: [
      { id: 'q3-154', question: 'How have digital technologies changed social life, according to the passage?', options: ['They have eliminated all human relationships.', 'They have profoundly reshaped how people form relationships and communities.', 'They have no measurable effect on daily interactions.', 'They apply only to teenagers and not to older adults.'], answer: 1, explanation: 'The passage states that digital technologies have "profoundly reshaped how individuals form relationships, build communities, and understand themselves." This conclusion matches option B.' },
      { id: 'q3-155', question: 'What worries do critics raise about social media?', options: ['That it is too cheap for ordinary users.', 'That it encourages shallow interactions and political polarization.', 'That it requires too much physical exercise.', 'That it cannot display photographs correctly.'], answer: 1, explanation: 'The passage reports that critics worry that platforms "encourage shallow interactions, performative self-presentation, and political polarization." These concerns match option B.' },
      { id: 'q3-156', question: 'What is social capital in the passage\'s definition?', options: ['Money stored in community-owned banks.', 'The trust and reciprocity that bind neighborhoods and civic associations together.', 'The latest smartphone models and broadband speeds.', 'The number of votes cast in local elections.'], answer: 1, explanation: 'The passage defines social capital as "the trust and reciprocity that bind neighborhoods and civic associations together." This definition matches option B.' },
      { id: 'q3-157', question: 'How do some scholars view online networks positively?', options: ['They argue that online networks are pure waste of time.', 'They argue that digital tools enable new forms of collective action such as climate movements.', 'They argue that only government should use the internet.', 'They argue that print newspapers are superior in every way.'], answer: 1, explanation: 'The passage states that "Some scholars argue that digital tools enable new forms of collective action, from crowdfunding campaigns to global climate movements." This positive view matches option B.' },
      { id: 'q3-158', question: 'What is a filter bubble, according to the passage?', options: ['A physical bubble surrounding servers in data centers.', 'An algorithmic environment exposing users mainly to views that confirm existing beliefs.', 'A new type of soap that cleans computer screens.', 'A small filter placed inside air purifiers.'], answer: 1, explanation: 'The passage explains that "algorithmic curation creates filter bubbles, exposing users primarily to viewpoints that confirm their existing beliefs." This definition matches option B.' },
      { id: 'q3-159', question: 'What paradox do young people face, according to the passage?', options: ['They are wealthy but unable to travel.', 'They are more digitally connected than any previous generation yet report rising loneliness.', 'They are highly educated but cannot read.', 'They are physically strong but emotionally weak.'], answer: 1, explanation: 'The passage states that "Young people in particular navigate a paradox: they are more digitally connected than any previous generation, yet report rising levels of loneliness and anxiety." This paradox matches option B.' },
      { id: 'q3-160', question: 'What does the author suggest societies should do regarding digital technology?', options: ['Ban all digital tools immediately.', 'Shape technologies through regulation, education, and civic design while safeguarding relationships.', 'Replace all human teachers with chatbots.', 'Leave digital development entirely to private corporations.'], answer: 1, explanation: 'The passage concludes that "societies can shape technologies through regulation, education, and civic design," and emphasizes "safeguarding the relationships, attention, and democratic discourse." This balanced recommendation matches option B.' }
    ]
  },  {
    id: 'read-lv3-26',
    level: 3,
    serial: 26,
    category: '自然科学',
    title: 'The Wonders of Photosynthesis',
    passage:
      'Photosynthesis is the biochemical process by which green plants, algae, and certain bacteria convert sunlight into chemical energy, sustaining nearly all life on Earth. In a series of reactions occurring within chloroplasts, organisms use sunlight to transform carbon dioxide and water into glucose and oxygen. The process is divided into two main stages: the light-dependent reactions, in which chlorophyll captures solar energy to produce ATP and NADPH, and the Calvin cycle, in which these energy carriers fix carbon into sugar molecules. Photosynthesis not only feeds plants but also produces the oxygen that animals breathe and removes carbon dioxide from the atmosphere, helping to regulate the global climate. Recent research has uncovered remarkable diversity in photosynthetic strategies, including forms that use infrared rather than visible light and others that switch between photosynthetic and chemosynthetic modes depending on environmental conditions. These discoveries are inspiring attempts to design artificial photosynthetic systems capable of producing clean fuels directly from sunlight, water, and carbon dioxide. If successful, such systems could revolutionize renewable energy by providing a sustainable substitute for fossil fuels. However, transferring the efficiency and robustness of biological photosynthesis to synthetic devices remains a profound engineering challenge. Understanding this ancient process continues to deepen our appreciation of how life captures and channels energy, and it may ultimately guide humanity toward a more sustainable relationship with the planet.',
    vocabulary: [
      { word: 'biochemical', phonetic: '/ˌbaɪəʊ\'kemɪkəl/', meaning: '生物化学的' },
      { word: 'chloroplast', phonetic: '/\'klɔːrəplæst/', meaning: '叶绿体' },
      { word: 'chlorophyll', phonetic: '/\'klɒrəfɪl/', meaning: '叶绿素' },
      { word: 'glucose', phonetic: '/\'ɡluːkəʊs/', meaning: '葡萄糖' },
      { word: 'transform', phonetic: '/træns\'fɔːm/', meaning: '转化' },
      { word: 'chemosynthetic', phonetic: '/ˌkiːməʊsɪn\'θetɪk/', meaning: '化能合成的' },
      { word: 'infrared', phonetic: '/ˌɪnfrə\'red/', meaning: '红外的' },
      { word: 'robust', phonetic: '/rəʊ\'bʌst/', meaning: '强健的；耐用的' },
      { word: 'synthetic', phonetic: '/sɪn\'θetɪk/', meaning: '合成的' },
      { word: 'fossil', phonetic: '/\'fɒsəl/', meaning: '化石的' }
    ],
    phrases: [
      { text: 'convert sunlight into chemical energy within chloroplasts', meaning: '在叶绿体中将阳光转化为化学能' },
      { text: 'produce clean fuels directly from sunlight, water, and carbon dioxide', meaning: '直接利用阳光、水和二氧化碳生产清洁燃料' },
      { text: 'a sustainable substitute for fossil fuels in the global energy mix', meaning: '全球能源结构中化石燃料的可持续替代品' },
      { text: 'deepen our appreciation of how life captures and channels energy', meaning: '加深我们对生命如何获取和引导能量的理解' }
    ],
    questions: [
      { id: 'q3-161', question: 'What is photosynthesis?', options: ['A process by which animals digest food in the stomach.', 'A biochemical process by which organisms convert sunlight into chemical energy.', 'A method used by geologists to date ancient rocks.', 'A technique for filtering drinking water.'], answer: 1, explanation: 'The passage defines photosynthesis as "the biochemical process by which green plants, algae, and certain bacteria convert sunlight into chemical energy." This definition matches option B.' },
      { id: 'q3-162', question: 'What are the two stages of photosynthesis?', options: ['Digestion and respiration.', 'Light-dependent reactions and the Calvin cycle.', 'Pollination and seed dispersal.', 'Transpiration and absorption.'], answer: 1, explanation: 'The passage states that the process is divided into "the light-dependent reactions" and "the Calvin cycle." This two-stage description matches option B.' },
      { id: 'q3-163', question: 'Why is photosynthesis important for the atmosphere, according to the passage?', options: ['Because it produces methane gas.', 'Because it produces the oxygen animals breathe and removes carbon dioxide.', 'Because it has no relation to atmospheric composition.', 'Because it cools the planet by emitting aerosols.'], answer: 1, explanation: 'The passage states that photosynthesis "produces the oxygen that animals breathe and removes carbon dioxide from the atmosphere, helping to regulate the global climate." This atmospheric role matches option B.' },
      { id: 'q3-164', question: 'What diversity has recent research revealed in photosynthetic strategies?', options: ['All organisms photosynthesize in exactly the same way.', 'Some use infrared light or switch between photosynthetic and chemosynthetic modes.', 'Photosynthesis only occurs in tropical rainforests.', 'Only mammals are capable of photosynthesis.'], answer: 1, explanation: 'The passage notes "forms that use infrared rather than visible light and others that switch between photosynthetic and chemosynthetic modes." This diversity matches option B.' },
      { id: 'q3-165', question: 'What are artificial photosynthetic systems designed to do?', options: ['Replace all green plants on Earth.', 'Produce clean fuels directly from sunlight, water, and carbon dioxide.', 'Generate electricity for household lamps.', 'Create new species of algae.'], answer: 1, explanation: 'The passage states that artificial photosynthetic systems are being designed to be "capable of producing clean fuels directly from sunlight, water, and carbon dioxide." This purpose matches option B.' },
      { id: 'q3-166', question: 'What challenge remains for artificial photosynthesis?', options: ['There are no plants left to study.', 'Transferring the efficiency and robustness of biological photosynthesis to synthetic devices.', 'Synthetic devices are illegal under international law.', 'The sun has stopped shining in some regions.'], answer: 1, explanation: 'The passage identifies the challenge: "transferring the efficiency and robustness of biological photosynthesis to synthetic devices remains a profound engineering challenge." This matches option B.' },
      { id: 'q3-167', question: 'What does the word "robust" most nearly mean in paragraph 4?', options: ['Brittle and easily broken.', 'Strong and able to withstand difficult conditions.', 'Brightly colored and decorative.', 'Quiet and unobtrusive.'], answer: 1, explanation: 'In context, "robustness of biological photosynthesis" refers to its ability to function reliably under varied conditions. This usage matches option B.' }
    ]
  },  {
    id: 'read-lv3-27',
    level: 3,
    serial: 27,
    category: '历史与文明',
    title: 'The Renaissance and Humanism',
    passage:
      'The Renaissance, a cultural movement that began in fourteenth-century Italy and gradually spread across Europe, marked a turning point in the history of Western civilization. At its heart was humanism, an intellectual movement that emphasized the dignity, creativity, and rational capacities of human beings. Humanist scholars revived the study of classical Greek and Roman texts, seeking not only to recover ancient knowledge but also to apply its insights to contemporary life. Figures such as Petrarch and Erasmus championed education in rhetoric, history, and moral philosophy, believing that a well-rounded citizen required both linguistic skill and ethical reflection. Renaissance humanism was not merely antiquarian; it produced new ways of thinking about politics, science, and the arts. Artists like Leonardo da Vinci and Michelangelo applied careful observation of anatomy and nature to their work, producing masterpieces that celebrated both human beauty and the natural world. At the same time, political thinkers such as Niccolò Machiavelli analyzed the realities of statecraft with unprecedented frankness. The invention of the printing press amplified these ideas by making books widely affordable. By promoting critical inquiry, individual responsibility, and empirical investigation, humanism laid the intellectual groundwork for the Scientific Revolution and the Enlightenment that followed, shaping modern conceptions of education, citizenship, and human rights.',
    vocabulary: [
      { word: 'dignity', phonetic: '/\'dɪɡnəti/', meaning: '尊严' },
      { word: 'creativity', phonetic: '/ˌkriːeɪ\'tɪvəti/', meaning: '创造力' },
      { word: 'revival', phonetic: '/rɪ\'vaɪvəl/', meaning: '复兴' },
      { word: 'rhetoric', phonetic: '/\'retərɪk/', meaning: '修辞学' },
      { word: 'moral', phonetic: '/\'mɒrəl/', meaning: '道德的' },
      { word: 'antiquarian', phonetic: '/ˌæntɪ\'kweəriən/', meaning: '好古的；文物研究的' },
      { word: 'masterpiece', phonetic: '/\'mɑːstəpiːs/', meaning: '杰作' },
      { word: 'anatomy', phonetic: '/ə\'nætəmi/', meaning: '解剖学' },
      { word: 'statecraft', phonetic: '/\'steɪtkrɑːft/', meaning: '治国之术' },
      { word: 'empirical', phonetic: '/ɪm\'pɪrɪkəl/', meaning: '经验主义的' }
    ],
    phrases: [
      { text: 'emphasized the dignity, creativity, and rational capacities of human beings', meaning: '强调人的尊严、创造力与理性能力' },
      { text: 'recover ancient knowledge and apply its insights to contemporary life', meaning: '恢复古代知识并将其洞见应用于当代生活' },
      { text: 'produced masterpieces that celebrated both human beauty and the natural world', meaning: '创作出赞美人之美和自然之美的杰作' },
      { text: 'laid the intellectual groundwork for the Scientific Revolution', meaning: '为科学革命奠定了思想基础' }
    ],
    questions: [
      { id: 'q3-168', question: 'What was humanism in the Renaissance?', options: ['A religious revival led by monks.', 'An intellectual movement emphasizing the dignity, creativity, and rational capacities of human beings.', 'A style of painting that avoided human figures.', 'A military campaign to conquer Italy.'], answer: 1, explanation: 'The passage defines humanism as "an intellectual movement that emphasized the dignity, creativity, and rational capacities of human beings." This definition matches option B.' },
      { id: 'q3-169', question: 'How did humanist scholars approach classical texts?', options: ['They rejected all classical learning as pagan.', 'They revived study of Greek and Roman texts to recover ancient knowledge and apply it to contemporary life.', 'They translated them into a single European language and stopped there.', 'They collected them only as museum objects.'], answer: 1, explanation: 'The passage states that humanists "revived the study of classical Greek and Roman texts, seeking not only to recover ancient knowledge but also to apply its insights to contemporary life." This dual purpose matches option B.' },
      { id: 'q3-170', question: 'Who were key figures in Renaissance humanism?', options: ['Petrarch, Erasmus, Leonardo, Michelangelo, and Machiavelli.', 'Only kings and military commanders.', 'Exclusively farmers and tradespeople.', 'Only painters of religious icons.'], answer: 0, explanation: 'The passage names Petrarch, Erasmus, Leonardo, Michelangelo, and Machiavelli as figures associated with Renaissance humanism. This list matches option A.' },
      { id: 'q3-171', question: 'What was distinctive about Renaissance artists like Leonardo?', options: ['They painted only in black and white.', 'They applied careful observation of anatomy and nature to produce masterpieces.', 'They refused to depict human figures.', 'They worked exclusively for the printing press.'], answer: 1, explanation: 'The passage notes that "Artists like Leonardo da Vinci and Michelangelo applied careful observation of anatomy and nature to their work, producing masterpieces." This observational approach matches option B.' },
      { id: 'q3-172', question: 'What did Machiavelli analyze?', options: ['The chemistry of precious metals.', 'The realities of statecraft with unprecedented frankness.', 'The orbital paths of distant planets.', 'The causes of the Black Death.'], answer: 1, explanation: 'The passage states that "political thinkers such as Niccolò Machiavelli analyzed the realities of statecraft with unprecedented frankness." This subject matches option B.' },
      { id: 'q3-173', question: 'How did the printing press affect Renaissance ideas?', options: ['It buried ideas under layers of censorship.', 'It amplified the spread of humanist ideas by making books widely affordable.', 'It applied only to religious texts.', 'It had no effect on literacy at all.'], answer: 1, explanation: 'The passage states that "The invention of the printing press amplified these ideas by making books widely affordable." This amplification matches option B.' },
      { id: 'q3-174', question: 'What legacy did humanism leave for later centuries?', options: ['It disappeared without any lasting influence.', 'It laid the intellectual groundwork for the Scientific Revolution and the Enlightenment.', 'It was confined to Italy and never reached other countries.', 'It opposed all forms of empirical investigation.'], answer: 1, explanation: 'The passage concludes that humanism "laid the intellectual groundwork for the Scientific Revolution and the Enlightenment that followed." This lasting legacy matches option B.' }
    ]
  },
  {
    id: 'read-lv3-28',
    level: 3,
    serial: 28,
    category: '教育',
    title: 'The Future of Higher Education',
    passage:
      'Higher education is undergoing profound transformation as digital technologies, shifting labor markets, and changing student expectations reshape the university. Traditional models built around full-time residential study and the four-year degree are giving way to more flexible arrangements, including online degrees, hybrid programs, and modular credentials that recognize specific skills. Employers increasingly value demonstrable competencies over formal qualifications, prompting institutions to develop new forms of assessment such as digital portfolios, project-based evaluations, and micro-credentials. At the same time, the cost of tuition continues to climb in many countries, raising urgent questions about accessibility and student debt. Critics argue that universities have grown too large and bureaucratic, losing sight of their core mission of cultivating critical inquiry. Defenders counter that universities remain irreplaceable laboratories of research, environments where new knowledge is produced and where students encounter diverse perspectives. Hybrid learning models now combine asynchronous online lectures with intensive in-person workshops, attempting to preserve the social and collaborative benefits of campus life while expanding access. The most successful institutions appear to be those that embrace experimentation, partner with industry, and treat teaching as seriously as research. Whatever form it takes, higher education must continue to balance the demands of economic competitiveness with the broader civic and intellectual purposes that justify its public investment.',
    vocabulary: [
      { word: 'transformation', phonetic: '/ˌtrænsfə\'meɪʃən/', meaning: '转变' },
      { word: 'modular', phonetic: '/\'mɒdjʊlə/', meaning: '模块化的' },
      { word: 'credential', phonetic: '/krə\'denʃəl/', meaning: '证书；凭证' },
      { word: 'competency', phonetic: '/\'kɒmpɪtənsi/', meaning: '能力' },
      { word: 'tuition', phonetic: '/tjʊ\'ɪʃən/', meaning: '学费' },
      { word: 'bureaucratic', phonetic: '/ˌbjʊərə\'krætɪk/', meaning: '官僚的' },
      { word: 'irreplaceable', phonetic: '/ˌɪrɪ\'pleɪsəbəl/', meaning: '不可替代的' },
      { word: 'asynchronous', phonetic: '/ə\'sɪŋkrənəs/', meaning: '异步的' },
      { word: 'civic', phonetic: '/\'sɪvɪk/', meaning: '公民的' },
      { word: 'competitiveness', phonetic: '/kəm\'petətɪvnəs/', meaning: '竞争力' }
    ],
    phrases: [
      { text: 'cultivate critical inquiry across disciplines and years of study', meaning: '在多年学习和跨学科中培养批判性探究' },
      { text: 'treat teaching as seriously as research across the institution', meaning: '在整个机构中像对待研究一样严肃地对待教学' },
      { text: 'balance the demands of economic competitiveness with broader civic purposes', meaning: '在经济竞争力要求与更广泛的公民目的之间取得平衡' },
      { text: 'embrace experimentation and partner with industry for innovation', meaning: '拥抱实验并与产业合作以推动创新' }
    ],
    questions: [
      { id: 'q3-175', question: 'How are traditional higher education models changing?', options: ['They are becoming more rigid and expensive than ever.', 'They are giving way to flexible arrangements like online degrees and modular credentials.', 'They have disappeared completely in most countries.', 'They now require all students to study abroad.'], answer: 1, explanation: 'The passage states that "Traditional models built around full-time residential study and the four-year degree are giving way to more flexible arrangements, including online degrees, hybrid programs, and modular credentials." This shift matches option B.' },
      { id: 'q3-176', question: 'What new forms of assessment are emerging?', options: ['Single oral exams at the end of each semester.', 'Digital portfolios, project-based evaluations, and micro-credentials.', 'Only handwritten essays graded by one professor.', 'Random guessing in standardized tests.'], answer: 1, explanation: 'The passage notes that institutions "develop new forms of assessment such as digital portfolios, project-based evaluations, and micro-credentials." These new forms match option B.' },
      { id: 'q3-177', question: 'What financial concerns does the passage raise about higher education?', options: ['Salaries of famous athletes.', 'Rising tuition costs and questions about accessibility and student debt.', 'The price of gold on international markets.', 'Petrol prices for college commuters.'], answer: 1, explanation: 'The passage observes that "the cost of tuition continues to climb in many countries, raising urgent questions about accessibility and student debt." These financial concerns match option B.' },
      { id: 'q3-178', question: 'How do critics view contemporary universities?', options: ['As perfect institutions that need no improvement.', 'As too large and bureaucratic, having lost sight of cultivating critical inquiry.', 'As places where students only learn to dance.', 'As institutions without any teachers.'], answer: 1, explanation: 'The passage reports that critics argue "universities have grown too large and bureaucratic, losing sight of their core mission of cultivating critical inquiry." This critique matches option B.' },
      { id: 'q3-179', question: 'What do defenders say universities still provide?', options: ['Only free parking for visitors.', 'Irreplaceable laboratories of research where new knowledge is produced.', 'Complimentary meals for all students.', 'Daily weather forecasts.'], answer: 1, explanation: 'The passage states that defenders counter that "universities remain irreplaceable laboratories of research, environments where new knowledge is produced and where students encounter diverse perspectives." This defense matches option B.' },
      { id: 'q3-180', question: 'What does the word "asynchronous" most nearly mean in paragraph 4?', options: ['Happening at the same time for everyone.', 'Occurring at different times according to individual schedules.', 'Always recorded on magnetic tape.', 'Necessarily requiring physical presence in a classroom.'], answer: 1, explanation: 'In context, asynchronous online lectures allow learners to study at different times according to their own schedules, rather than simultaneously. This matches option B.' },
      { id: 'q3-181', question: 'What balance does the author argue higher education must maintain?', options: ['Only catering to wealthy international students.', 'Balancing economic competitiveness with broader civic and intellectual purposes.', 'Focusing exclusively on athletic achievement.', 'Avoiding any form of technological adoption.'], answer: 1, explanation: 'The passage concludes that higher education must "balance the demands of economic competitiveness with the broader civic and intellectual purposes that justify its public investment." This balanced view matches option B.' }
    ]
  },
  {
    id: 'read-lv3-29',
    level: 3,
    serial: 29,
    category: '艺术与文学',
    title: 'The Novel in the 21st Century',
    passage:
      'The novel, once the dominant literary form of the modern era, continues to evolve in unexpected ways in the twenty-first century. While traditional print fiction remains widely read, digital platforms have created new possibilities for serialized storytelling, interactive fiction, and hybrid works that blend text, audio, and visual media. Authors increasingly experiment with structure, perspective, and language to reflect the fragmented attention and global mobility of contemporary readers. Some contemporary novels address themes of migration, climate anxiety, and digital identity, while others revive historical genres with fresh perspectives on empire, race, and gender. The global bestseller list now features writers from an unprecedented variety of linguistic and cultural backgrounds, challenging the historical dominance of European and American voices. Critics continue to debate whether literary fiction can survive in an age of short attention spans, social media, and infinite entertainment choices. Defenders argue that the novel\'s capacity to immerse readers in inner experience remains unique, and that great fiction has always adapted to the technologies of its era. Reading itself is changing: audiobook consumption has surged, online book clubs flourish, and translated fiction reaches wider audiences than ever before. The novel\'s future will likely be shaped by the ongoing negotiation between artistic ambition, commercial pressures, and the changing habits of readers around the world.',
    vocabulary: [
      { word: 'evolution', phonetic: '/ˌiːvə\'luːʃən/', meaning: '演变' },
      { word: 'serialized', phonetic: '/\'sɪəriəlaɪzd/', meaning: '连载的' },
      { word: 'interactive', phonetic: '/ˌɪntər\'æktɪv/', meaning: '交互式的' },
      { word: 'fragmented', phonetic: '/\'fræɡməntɪd/', meaning: '碎片化的' },
      { word: 'migration', phonetic: '/maɪ\'ɡreɪʃən/', meaning: '移民；迁移' },
      { word: 'bestseller', phonetic: '/\'bestɪˌselə/', meaning: '畅销书' },
      { word: 'unprecedented', phonetic: '/ʌn\'presɪdentɪt/', meaning: '史无前例的' },
      { word: 'immerse', phonetic: '/ɪ\'mɜːs/', meaning: '使沉浸' },
      { word: 'ambition', phonetic: '/æm\'bɪʃən/', meaning: '抱负' },
      { word: 'negotiation', phonetic: '/nɪˌɡəʊʃɪ\'eɪʃən/', meaning: '协商' }
    ],
    phrases: [
      { text: 'blend text, audio, and visual media in hybrid works', meaning: '在混合作品中融合文字、音频与视觉媒介' },
      { text: 'reflect the fragmented attention of contemporary readers', meaning: '反映当代读者碎片化的注意力' },
      { text: 'challenge the historical dominance of European and American voices', meaning: '挑战欧美声音的历史主导地位' },
      { text: 'the ongoing negotiation between artistic ambition and commercial pressures', meaning: '艺术抱负与商业压力之间持续进行的协商' }
    ],
    questions: [
      { id: 'q3-182', question: 'How is the novel evolving in the twenty-first century?', options: ['It has disappeared from public view.', 'Digital platforms enable serialized, interactive, and hybrid works that blend text, audio, and visuals.', 'Only printed novels are accepted in libraries.', 'All novels now follow the same traditional structure.'], answer: 1, explanation: 'The passage states that "digital platforms have created new possibilities for serialized storytelling, interactive fiction, and hybrid works that blend text, audio, and visual media." This evolution matches option B.' },
      { id: 'q3-183', question: 'What themes do contemporary novels address?', options: ['Only recipes for cooking vegetables.', 'Migration, climate anxiety, digital identity, and fresh perspectives on history.', 'Stock prices and quarterly earnings.', 'The choreography of medieval dances.'], answer: 1, explanation: 'The passage states that contemporary novels address "themes of migration, climate anxiety, and digital identity, while others revive historical genres with fresh perspectives on empire, race, and gender." These themes match option B.' },
      { id: 'q3-184', question: 'What does the global bestseller list now reflect?', options: ['Only writers from a single country.', 'Writers from an unprecedented variety of linguistic and cultural backgrounds.', 'Exclusively poets from ancient civilizations.', 'Solely textbooks and academic monographs.'], answer: 1, explanation: 'The passage notes that "The global bestseller list now features writers from an unprecedented variety of linguistic and cultural backgrounds, challenging the historical dominance of European and American voices." This diversity matches option B.' },
      { id: 'q3-185', question: 'Why do critics worry about literary fiction\'s future?', options: ['Because too many novels are written in invisible ink.', 'Because of short attention spans, social media, and infinite entertainment choices.', 'Because paper is now more expensive than gold.', 'Because libraries refuse to stock fiction.'], answer: 1, explanation: 'The passage reports that critics debate "whether literary fiction can survive in an age of short attention spans, social media, and infinite entertainment choices." These concerns match option B.' },
      { id: 'q3-186', question: 'How do defenders of fiction respond to those critics?', options: ['They say novels should be banned entirely.', 'They argue the novel\'s capacity to immerse readers in inner experience remains unique.', 'They say reading has been scientifically disproved.', 'They recommend switching to television only.'], answer: 1, explanation: 'The passage states that defenders argue "the novel\'s capacity to immerse readers in inner experience remains unique, and that great fiction has always adapted to the technologies of its era." This defense matches option B.' },
      { id: 'q3-187', question: 'What does the word "immerse" most nearly mean in paragraph 4?', options: ['To push something out of water.', 'To engage deeply and absorb completely.', 'To dry something completely.', 'To replace one substance with another.'], answer: 1, explanation: 'In context, the novel can "immerse readers in inner experience," meaning it absorbs them deeply in mental and emotional experience. This matches option B.' },
      { id: 'q3-188', question: 'What will shape the novel\'s future, according to the author?', options: ['Only one specific author\'s preferences.', 'The ongoing negotiation between artistic ambition, commercial pressures, and changing reader habits.', 'The elimination of all publishing houses.', 'A single national policy decision.'], answer: 1, explanation: 'The passage concludes that the novel\'s future will be shaped by "the ongoing negotiation between artistic ambition, commercial pressures, and the changing habits of readers around the world." This conclusion matches option B.' }
    ]
  },  {
    id: 'read-lv3-30',
    level: 3,
    serial: 30,
    category: '环境与气候',
    title: 'Climate Adaptation Strategies',
    passage:
      'As global temperatures continue to rise, societies are increasingly turning to climate adaptation, the practice of adjusting human systems to actual or expected climatic changes. Unlike mitigation, which seeks to reduce greenhouse gas emissions at their source, adaptation focuses on minimizing the damage that warmer temperatures, rising seas, and extreme weather will inevitably cause. Coastal cities are constructing sea walls and restoring mangrove forests, while agricultural regions are developing drought-resistant crop varieties and more efficient irrigation systems. Urban planners are redesigning neighborhoods to include green roofs, permeable pavements, and shaded public spaces that reduce heat-island effects. Public health authorities are preparing for the expansion of heat-related illnesses and vector-borne diseases into new regions. Adaptation strategies vary widely depending on local geography, political capacity, and economic resources, with wealthier nations able to invest in sophisticated infrastructure while poorer regions often rely on community-based initiatives. International funding mechanisms such as the Green Climate Fund aim to bridge these gaps, although the level of finance remains far below what is needed. Effective adaptation requires not only technological investment but also inclusive governance, indigenous knowledge, and long-term planning that anticipates a range of possible futures. The choices societies make today will determine how resilient communities become to the climatic changes already locked into the global system.',
    vocabulary: [
      { word: 'adaptation', phonetic: '/ˌædæp\'teɪʃən/', meaning: '适应' },
      { word: 'mitigation', phonetic: '/ˌmɪtɪ\'ɡeɪʃən/', meaning: '缓解' },
      { word: 'mangrove', phonetic: '/\'mæŋɡrəʊv/', meaning: '红树林' },
      { word: 'drought-resistant', phonetic: '/draʊt rɪ\'zɪstənt/', meaning: '抗旱的' },
      { word: 'irrigation', phonetic: '/ˌɪrɪ\'ɡeɪʃən/', meaning: '灌溉' },
      { word: 'permeable', phonetic: '/\'pɜːmiəbəl/', meaning: '可渗透的' },
      { word: 'heat-island', phonetic: '/\'hiːt ˌaɪlənd/', meaning: '热岛' },
      { word: 'vector-borne', phonetic: '/\'vektə bɔːn/', meaning: '病媒传播的' },
      { word: 'resilience', phonetic: '/rɪ\'zɪliəns/', meaning: '韧性' },
      { word: 'inclusive', phonetic: '/ɪn\'kluːsɪv/', meaning: '包容的' }
    ],
    phrases: [
      { text: 'minimize the damage that warmer temperatures and rising seas will inevitably cause', meaning: '将气温上升和海平面上升不可避免造成的损害降到最低' },
      { text: 'develop drought-resistant crop varieties and more efficient irrigation systems', meaning: '培育抗旱作物品种并发展更高效的灌溉系统' },
      { text: 'inclusive governance and indigenous knowledge for long-term planning', meaning: '包容性治理与原住民知识用于长期规划' },
      { text: 'how resilient communities become to climatic changes already locked into the system', meaning: '社区对系统内已不可避免的气候变化能产生多大的韧性' }
    ],
    questions: [
      { id: 'q3-189', question: 'What is climate adaptation?', options: ['A practice of adjusting human systems to actual or expected climatic changes.', 'A new type of fashion trend for hot weather.', 'A method of stopping all rainfall worldwide.', 'A way of building underground bunkers.'], answer: 0, explanation: 'The passage defines adaptation as "the practice of adjusting human systems to actual or expected climatic changes." This definition matches option A.' },
      { id: 'q3-190', question: 'How does adaptation differ from mitigation?', options: ['They are identical in every respect.', 'Mitigation reduces greenhouse gas emissions, while adaptation minimizes damage from climate impacts.', 'Adaptation focuses on space exploration.', 'Mitigation is only about planting trees in cities.'], answer: 1, explanation: 'The passage explains that "mitigation, which seeks to reduce greenhouse gas emissions at their source, adaptation focuses on minimizing the damage." This contrast matches option B.' },
      { id: 'q3-191', question: 'What strategies are coastal cities adopting?', options: ['Building higher mountains inland.', 'Constructing sea walls and restoring mangrove forests.', 'Eliminating all harbors and ports.', 'Banning all shipping in the ocean.'], answer: 1, explanation: 'The passage states that "Coastal cities are constructing sea walls and restoring mangrove forests." This strategy matches option B.' },
      { id: 'q3-192', question: 'How is agriculture responding to climate change?', options: ['By stopping all farming entirely.', 'By developing drought-resistant crop varieties and more efficient irrigation systems.', 'By importing all food from other planets.', 'By giving up on rural development.'], answer: 1, explanation: 'The passage notes that "agricultural regions are developing drought-resistant crop varieties and more efficient irrigation systems." This agricultural response matches option B.' },
      { id: 'q3-193', question: 'Why do adaptation strategies vary between regions?', options: ['Because climate change is not real.', 'Because of differences in local geography, political capacity, and economic resources.', 'Because governments always use identical templates.', 'Because no country takes adaptation seriously.'], answer: 1, explanation: 'The passage explains that "Adaptation strategies vary widely depending on local geography, political capacity, and economic resources." This variation matches option B.' },
      { id: 'q3-194', question: 'What does the Green Climate Fund aim to do?', options: ['To collect taxes from green-colored shops.', 'To bridge funding gaps and support adaptation in poorer regions.', 'To replace all existing banks with green offices.', 'To ban the use of paper money.'], answer: 1, explanation: 'The passage states that "International funding mechanisms such as the Green Climate Fund aim to bridge these gaps." This bridging purpose matches option B.' },
      { id: 'q3-195', question: 'What does the word "resilient" most nearly mean in the final sentence?', options: ['Easily damaged by stress.', 'Able to recover quickly from difficulties.', 'Permanently destroyed.', 'Permanently frozen.'], answer: 1, explanation: 'In context, "how resilient communities become" refers to how well communities can absorb shocks and recover from climatic stresses. This matches option B.' }
    ]
  },
  {
    id: 'read-lv3-31',
    level: 3,
    serial: 31,
    category: '心理学',
    title: 'The Psychology of Flow States',
    passage:
      'Flow, a concept developed by psychologist Mihaly Csikszentmihalyi, describes a mental state in which a person becomes fully absorbed in an activity, losing self-consciousness and the sense of time. Flow occurs when the challenge of a task is well matched to the individual\'s skill, neither so easy as to produce boredom nor so hard as to generate anxiety. Athletes, artists, musicians, and surgeons frequently report experiencing flow during peak performance, when action and awareness merge seamlessly. The experience brings deep enjoyment, intrinsic motivation, and a sense of mastery that external rewards cannot replicate. Researchers have found several conditions that foster flow, including clear goals, immediate feedback, and concentration on the present moment. Distractions, by contrast, work against flow by fragmenting attention and lowering the quality of engagement. Modern technology, with its constant notifications and competing demands, makes sustained focus increasingly difficult. Some companies now design their workplaces to encourage flow by providing quiet zones, scheduling blocks of uninterrupted time, and limiting meetings. Educational researchers have applied flow theory to classrooms, designing curricula that gradually increase challenge and offer frequent formative feedback. Understanding flow can help individuals structure their work and leisure in ways that maximize engagement, creativity, and personal fulfillment, while reminding societies of the enduring value of deep, focused attention in an age of perpetual distraction.',
    vocabulary: [
      { word: 'absorbed', phonetic: '/əb\'zɔːbd/', meaning: '全神贯注的' },
      { word: 'boredom', phonetic: '/\'bɔːdəm/', meaning: '无聊' },
      { word: 'anxiety', phonetic: '/æŋ\'zaɪəti/', meaning: '焦虑' },
      { word: 'intrinsic', phonetic: '/ɪn\'trɪnsɪk/', meaning: '内在的' },
      { word: 'motivation', phonetic: '/ˌməʊtɪ\'veɪʃən/', meaning: '动机' },
      { word: 'mastery', phonetic: '/\'mɑːstəri/', meaning: '精通' },
      { word: 'replicate', phonetic: '/\'replɪkeɪt/', meaning: '复制；再现' },
      { word: 'distraction', phonetic: '/dɪ\'strækʃən/', meaning: '分心' },
      { word: 'engagement', phonetic: '/ɪn\'ɡeɪdʒmənt/', meaning: '投入' },
      { word: 'fulfillment', phonetic: '/fʊl\'fɪlmənt/', meaning: '满足感' }
    ],
    phrases: [
      { text: 'become fully absorbed in an activity for sustained attention', meaning: '在一项活动中完全沉浸以保持持续注意' },
      { text: 'neither so easy as to produce boredom nor so hard as to generate anxiety', meaning: '既不太容易以至于无聊，也不太难以至于焦虑' },
      { text: 'merge seamlessly with awareness during peak performance', meaning: '在巅峰表现中与意识无缝融合' },
      { text: 'schedule blocks of uninterrupted time for deep work', meaning: '安排不被打断的时间段用于深度工作' }
    ],
    questions: [
      { id: 'q3-196', question: 'What is flow, according to Csikszentmihalyi?', options: ['A type of river current in geography.', 'A mental state in which a person becomes fully absorbed in an activity.', 'A measurement of heart rate during exercise.', 'A diagnostic label for mental illness.'], answer: 1, explanation: 'The passage defines flow as "a mental state in which a person becomes fully absorbed in an activity, losing self-consciousness and the sense of time." This definition matches option B.' },
      { id: 'q3-197', question: 'What condition produces flow?', options: ['A task whose challenge is well matched to the individual\'s skill.', 'A task that is impossible for the person to attempt.', 'A task that no one has ever tried before.', 'A task that requires no skill whatsoever.'], answer: 0, explanation: 'The passage states that "Flow occurs when the challenge of a task is well matched to the individual\'s skill, neither so easy as to produce boredom nor so hard as to generate anxiety." This matching condition matches option A.' },
      { id: 'q3-198', question: 'Who commonly experiences flow?', options: ['Only children under five years old.', 'Athletes, artists, musicians, and surgeons during peak performance.', 'Only amateur gardeners.', 'Only people who dislike their jobs.'], answer: 1, explanation: 'The passage states that "Athletes, artists, musicians, and surgeons frequently report experiencing flow during peak performance." These examples match option B.' },
      { id: 'q3-199', question: 'Which conditions foster flow, according to researchers?', options: ['Chaos and constant interruption.', 'Clear goals, immediate feedback, and concentration on the present moment.', 'Long periods of sleep and inactivity.', 'Strict avoidance of all feedback.'], answer: 1, explanation: 'The passage notes that flow is fostered by "clear goals, immediate feedback, and concentration on the present moment." These conditions match option B.' },
      { id: 'q3-200', question: 'How do distractions interfere with flow?', options: ['They help people focus more deeply.', 'They fragment attention and lower the quality of engagement.', 'They are required for flow to occur.', 'They improve learning in every situation.'], answer: 1, explanation: 'The passage states that "Distractions, by contrast, work against flow by fragmenting attention and lowering the quality of engagement." This interference matches option B.' },
      { id: 'q3-201', question: 'How have some companies redesigned workplaces to encourage flow?', options: ['By installing loud music in every room.', 'By providing quiet zones, uninterrupted time, and limiting meetings.', 'By requiring all employees to share one open desk.', 'By removing all furniture from offices.'], answer: 1, explanation: 'The passage states that companies "design their workplaces to encourage flow by providing quiet zones, scheduling blocks of uninterrupted time, and limiting meetings." These measures match option B.' },
      { id: 'q3-202', question: 'What does the author suggest about deep attention in modern life?', options: ['It is unnecessary for personal fulfillment.', 'It has enduring value in an age of perpetual distraction.', 'It can only be achieved through medication.', 'It applies only to artists and musicians.'], answer: 1, explanation: 'The passage concludes by reminding "societies of the enduring value of deep, focused attention in an age of perpetual distraction." This reminder matches option B.' }
    ]
  },
  {
    id: 'read-lv3-32',
    level: 3,
    serial: 32,
    category: '哲学思辨',
    title: 'Ethics in Artificial Intelligence',
    passage:
      'As artificial intelligence becomes embedded in everyday life, ethicists have intensified their examination of the moral questions raised by autonomous systems. One central concern is bias: because machine learning models are trained on historical data, they often reproduce and amplify the inequalities already present in society. Hiring algorithms, for instance, have been found to disadvantage women and minority candidates, while predictive policing tools have reinforced discriminatory patterns in law enforcement. Transparency is a related issue. Many advanced models operate as opaque black boxes, making it difficult for users and regulators to understand how specific decisions are reached. Accountability is another concern. When an autonomous vehicle causes an accident or a medical algorithm makes a harmful recommendation, it can be unclear who bears moral and legal responsibility. Philosophers also ask whether AI systems themselves can possess moral status, particularly as they grow more sophisticated and possibly approach general intelligence. Some argue that treating advanced systems with respect is a matter of moral consistency, while others insist that moral consideration requires sentience, which current AI lacks. International bodies have begun drafting ethical guidelines, emphasizing fairness, accountability, transparency, and human oversight. Whether such principles will translate into effective regulation remains uncertain, but the conversation itself is shaping how societies imagine their technological futures and the values they wish to preserve.',
    vocabulary: [
      { word: 'ethical', phonetic: '/\'eθɪkəl/', meaning: '伦理的' },
      { word: 'autonomous', phonetic: '/ɔː\'tɒnəməs/', meaning: '自主的' },
      { word: 'inequality', phonetic: '/ˌɪnɪ\'kwɒləti/', meaning: '不平等' },
      { word: 'disadvantage', phonetic: '/ˌdɪsəd\'vɑːntɪdʒ/', meaning: '使处于不利地位' },
      { word: 'minority', phonetic: '/maɪ\'nɒrəti/', meaning: '少数群体' },
      { word: 'opaque', phonetic: '/əʊ\'peɪk/', meaning: '不透明的；难懂的' },
      { word: 'accountability', phonetic: '/əˌkaʊntə\'bɪləti/', meaning: '问责' },
      { word: 'sophisticated', phonetic: '/sə\'fɪstɪkeɪtɪd/', meaning: '复杂的；精密的' },
      { word: 'sentience', phonetic: '/\'senʃəns/', meaning: '感知力' },
      { word: 'regulation', phonetic: '/ˌreɡju\'leɪʃən/', meaning: '监管' }
    ],
    phrases: [
      { text: 'reproduce and amplify the inequalities already present in society', meaning: '重现并放大社会中已经存在的不平等' },
      { text: 'operate as opaque black boxes that resist easy interpretation', meaning: '作为不透明、难以解释的黑箱运行' },
      { text: 'bear moral and legal responsibility for harmful outcomes', meaning: '对有害结果承担道德与法律责任' },
      { text: 'draft ethical guidelines emphasizing fairness, accountability, and transparency', meaning: '起草强调公平、问责和透明的伦理准则' }
    ],
    questions: [
      { id: 'q3-203', question: 'What central ethical concerns does the passage identify in AI?', options: ['Only the cost of electricity for data centers.', 'Bias, lack of transparency, and unclear accountability.', 'The number of programmers employed in the industry.', 'The color schemes used in software interfaces.'], answer: 1, explanation: 'The passage identifies three central concerns: bias ("because machine learning models are trained on historical data"), transparency ("Many advanced models operate as opaque black boxes"), and accountability ("who bears moral and legal responsibility"). This matches option B.' },
      { id: 'q3-204', question: 'How can machine learning perpetuate bias?', options: ['By ignoring all historical data entirely.', 'By training on historical data that already contains social inequalities.', 'By using only mathematical equations without data.', 'By running exclusively on solar power.'], answer: 1, explanation: 'The passage states that "because machine learning models are trained on historical data, they often reproduce and amplify the inequalities already present in society." This mechanism matches option B.' },
      { id: 'q3-205', question: 'Why is transparency a problem in advanced AI?', options: ['Because users prefer colorful interfaces.', 'Because many models operate as opaque black boxes whose decisions are hard to interpret.', 'Because governments refuse to publish any AI papers.', 'Because transparency has been banned by international law.'], answer: 1, explanation: 'The passage notes that "Many advanced models operate as opaque black boxes, making it difficult for users and regulators to understand how specific decisions are reached." This opacity matches option B.' },
      { id: 'q3-206', question: 'What accountability issues arise with autonomous systems?', options: ['All accidents are automatically blamed on pets.', 'It can be unclear who bears moral and legal responsibility for harmful outcomes.', 'Accountability issues only apply to bicycles.', 'They have been completely resolved worldwide.'], answer: 1, explanation: 'The passage states that "When an autonomous vehicle causes an accident or a medical algorithm makes a harmful recommendation, it can be unclear who bears moral and legal responsibility." This ambiguity matches option B.' },
      { id: 'q3-207', question: 'Do AI systems themselves have moral status, according to the passage?', options: ['Yes, every chatbot is a legal person.', 'Philosophers debate whether AI can possess moral status, often tying it to sentience.', 'All scientists agree that AI is already conscious.', 'The question has been permanently banned from discussion.'], answer: 1, explanation: 'The passage notes that "Philosophers also ask whether AI systems themselves can possess moral status, particularly as they grow more sophisticated," with some arguing for sentience-based consideration. This debate matches option B.' },
      { id: 'q3-208', question: 'What principles do international ethical guidelines emphasize?', options: ['Exclusively the importance of profit margins.', 'Fairness, accountability, transparency, and human oversight.', 'Abolishing all forms of public oversight.', 'Random color choices for corporate logos.'], answer: 1, explanation: 'The passage states that international bodies are "drafting ethical guidelines, emphasizing fairness, accountability, transparency, and human oversight." These principles match option B.' },
      { id: 'q3-209', question: 'What does the word "opaque" most nearly mean in paragraph 3?', options: ['Perfectly clear and easy to interpret.', 'Difficult to see through or understand.', 'Brightly colored and decorative.', 'Cheap to manufacture.'], answer: 1, explanation: 'In context, advanced AI models "operate as opaque black boxes, making it difficult for users and regulators to understand" them. This usage matches option B.' }
    ]
  },
  {
    id: 'read-lv3-33',
    level: 3,
    serial: 33,
    category: '科技前沿',
    title: 'Blockchain Beyond Cryptocurrency',
    passage:
      'Although blockchain first gained fame as the technology behind cryptocurrencies, its applications now extend far beyond digital money. A blockchain is a distributed ledger in which transactions are recorded across many computers, making the records extremely difficult to alter without the agreement of the network. This combination of transparency and tamper resistance has inspired uses in supply chain management, where companies trace the origin of goods to verify sustainability claims and to detect counterfeits. In finance, blockchain enables faster cross-border settlements and the tokenization of assets such as real estate and fine art. Healthcare systems are exploring blockchain to give patients secure control over their medical records while allowing providers to access verified information. Public registries in some countries use blockchain to record land titles, reducing fraud and streamlining bureaucracy. Critics caution, however, that blockchains consume significant energy, that transactions can be slow, and that the technology cannot prevent fraud when bad data is entered in the first place. Regulators continue to grapple with how to classify digital assets and how to protect consumers without stifling innovation. Despite these challenges, blockchain\'s core properties of decentralization, immutability, and shared verification suggest that it will remain an important part of the digital infrastructure for years to come.',
    vocabulary: [
      { word: 'cryptocurrency', phonetic: '/ˌkrɪptəʊ\'kʌrənsi/', meaning: '加密货币' },
      { word: 'distributed', phonetic: '/dɪ\'strɪbjʊtɪd/', meaning: '分布式的' },
      { word: 'ledger', phonetic: '/\'ledʒə/', meaning: '账本' },
      { word: 'tamper', phonetic: '/\'tæmpə/', meaning: '篡改' },
      { word: 'settlement', phonetic: '/\'setlmənt/', meaning: '结算' },
      { word: 'tokenization', phonetic: '/ˌtəʊkənaɪ\'zeɪʃən/', meaning: '代币化' },
      { word: 'immutability', phonetic: '/ɪˌmjuːtə\'bɪləti/', meaning: '不可篡改性' },
      { word: 'bureaucracy', phonetic: '/bjʊə\'rɒkrəsi/', meaning: '官僚机构' },
      { word: 'counterfeits', phonetic: '/\'kaʊntəfɪts/', meaning: '假冒品' },
      { word: 'decentralization', phonetic: '/ˌdiːˌsentrəlaɪ\'zeɪʃən/', meaning: '去中心化' }
    ],
    phrases: [
      { text: 'trace the origin of goods to verify sustainability claims', meaning: '追溯商品来源以核实可持续性声明' },
      { text: 'give patients secure control over their medical records', meaning: '让患者安全地掌控自己的医疗记录' },
      { text: 'reduce fraud and streamline bureaucracy in public registries', meaning: '在公共登记中减少欺诈并精简官僚程序' },
      { text: 'protect consumers without stifling innovation in digital markets', meaning: '在不扼杀创新的情况下保护数字市场消费者' }
    ],
    questions: [
      { id: 'q3-210', question: 'How did blockchain originally gain fame?', options: ['As a brand of kitchen appliances.', 'As the technology behind cryptocurrencies.', 'As a new type of indoor plant.', 'As a fashion trend in Tokyo.'], answer: 1, explanation: 'The passage states that "blockchain first gained fame as the technology behind cryptocurrencies." This historical fact matches option B.' },
      { id: 'q3-211', question: 'What is a blockchain?', options: ['A single computer used for accounting.', 'A distributed ledger in which transactions are recorded across many computers.', 'A type of physical chain found in bicycle locks.', 'A new type of social media platform.'], answer: 1, explanation: 'The passage defines a blockchain as "a distributed ledger in which transactions are recorded across many computers." This definition matches option B.' },
      { id: 'q3-212', question: 'How is blockchain used in supply chains?', options: ['To replace every truck driver with robots.', 'To trace the origin of goods and verify sustainability claims while detecting counterfeits.', 'To produce unlimited amounts of free food.', 'To invent new types of packaging.'], answer: 1, explanation: 'The passage states that in supply chains, companies "trace the origin of goods to verify sustainability claims and to detect counterfeits." This application matches option B.' },
      { id: 'q3-213', question: 'What financial applications does blockchain enable?', options: ['Free haircuts for everyone.', 'Faster cross-border settlements and the tokenization of assets such as real estate.', 'The replacement of all banknotes with chocolate coins.', 'An end to all taxation worldwide.'], answer: 1, explanation: 'The passage notes that "In finance, blockchain enables faster cross-border settlements and the tokenization of assets such as real estate and fine art." These applications match option B.' },
      { id: 'q3-214', question: 'How might blockchain benefit healthcare?', options: ['By eliminating the need for any medicine.', 'By giving patients secure control over their medical records while allowing provider access.', 'By replacing doctors with parrots.', 'By banning all hospitals permanently.'], answer: 1, explanation: 'The passage states that "Healthcare systems are exploring blockchain to give patients secure control over their medical records while allowing providers to access verified information." This benefit matches option B.' },
      { id: 'q3-215', question: 'What criticisms do skeptics raise about blockchain?', options: ['That blockchains are made of glass and break easily.', 'That they consume significant energy, can be slow, and cannot fix bad data at the source.', 'That they are free of any flaws whatsoever.', 'That they cure every known disease.'], answer: 1, explanation: 'The passage reports that critics caution that "blockchains consume significant energy, that transactions can be slow, and that the technology cannot prevent fraud when bad data is entered in the first place." This critique matches option B.' },
      { id: 'q3-216', question: 'What does the phrase "tamper resistance" most nearly mean in paragraph 2?', options: ['Easy to alter without leaving traces.', 'Extremely difficult to alter without network agreement.', 'Able to be eaten as a snack.', 'Painted with bright colors.'], answer: 1, explanation: 'In context, tamper resistance makes blockchain records "extremely difficult to alter without the agreement of the network." This property matches option B.' }
    ]
  },  {
    id: 'read-lv3-34',
    level: 3,
    serial: 34,
    category: '经济学',
    title: 'Income Inequality in Modern Economies',
    passage:
      'Income inequality has emerged as one of the defining economic issues of the twenty-first century, with wealth concentrated in fewer hands across most advanced economies. Economists measure inequality using tools such as the Gini coefficient, which summarizes how evenly income is distributed within a population. While inequality has complex and contested causes, researchers generally point to several drivers, including skill-biased technological change, globalization, declining union membership, and tax policies that favor capital over labor. The consequences are wide-ranging. High inequality has been linked to reduced social mobility, weaker aggregate demand, political polarization, and poorer health outcomes. Some scholars argue that modest inequality can incentivize effort and risk-taking, providing the rewards necessary for entrepreneurship and innovation. Others maintain that extreme inequality undermines social cohesion, distorts democratic institutions, and prevents large segments of the population from reaching their potential. Policy responses vary considerably across the ideological spectrum. Some propose higher marginal tax rates on top earners, expanded access to education, and stronger labor protections. Others favor universal basic income, wealth taxes, or reforms to corporate governance. There is no simple fix for inequality, and most economists agree that coordinated, evidence-based interventions are needed to ensure that economic growth translates into broadly shared prosperity.',
    vocabulary: [
      { word: 'concentration', phonetic: '/ˌkɒnsən\'treɪʃən/', meaning: '集中' },
      { word: 'Gini coefficient', phonetic: '/\'dʒiːni ˌkəʊɪ\'fɪʃənt/', meaning: '基尼系数' },
      { word: 'mobility', phonetic: '/məʊ\'bɪləti/', meaning: '流动性' },
      { word: 'globalization', phonetic: '/ˌɡləʊbəlaɪ\'zeɪʃən/', meaning: '全球化' },
      { word: 'polarization', phonetic: '/ˌpəʊləraɪ\'zeɪʃən/', meaning: '极化' },
      { word: 'cohesion', phonetic: '/kəʊ\'hiːʒən/', meaning: '凝聚力' },
      { word: 'entrepreneurship', phonetic: '/ˌɒntrəprə\'nɜːʃɪp/', meaning: '创业精神' },
      { word: 'marginal', phonetic: '/\'mɑːdʒɪnəl/', meaning: '边际的' },
      { word: 'prosperity', phonetic: '/\'prɒsperəti/', meaning: '繁荣' },
      { word: 'intervention', phonetic: '/ˌɪntə\'venʃən/', meaning: '干预' }
    ],
    phrases: [
      { text: 'wealth concentrated in fewer hands across most advanced economies', meaning: '在大多数发达经济体中财富集中于少数人手中' },
      { text: 'skill-biased technological change that rewards highly educated workers', meaning: '偏向高技能工人的技术变革' },
      { text: 'linked to weaker aggregate demand and poorer health outcomes', meaning: '与更弱的总需求和更差的健康结果相关' },
      { text: 'translate economic growth into broadly shared prosperity', meaning: '将经济增长转化为广泛共享的繁荣' }
    ],
    questions: [
      { id: 'q3-217', question: 'Why has income inequality become a defining issue?', options: ['Because nobody is interested in economics anymore.', 'Because wealth is concentrated in fewer hands across most advanced economies.', 'Because everyone earns exactly the same salary.', 'Because all money has been banned worldwide.'], answer: 1, explanation: 'The passage states that "wealth concentrated in fewer hands across most advanced economies" makes inequality a defining issue of the century. This concentration matches option B.' },
      { id: 'q3-218', question: 'What tool do economists use to measure inequality?', options: ['A thermometer.', 'The Gini coefficient.', 'A kitchen scale.', 'A simple abacus from antiquity.'], answer: 1, explanation: 'The passage states that "Economists measure inequality using tools such as the Gini coefficient." This measure matches option B.' },
      { id: 'q3-219', question: 'What drivers of inequality do researchers identify?', options: ['Skill-biased technological change, globalization, declining unions, and tax policy favoring capital.', 'Eating too much chocolate.', 'Watching too much television.', 'Reading too many books.'], answer: 0, explanation: 'The passage lists "skill-biased technological change, globalization, declining union membership, and tax policies that favor capital over labor." These drivers match option A.' },
      { id: 'q3-220', question: 'What consequences of inequality are mentioned?', options: ['Improved taste in music.', 'Reduced social mobility, weaker aggregate demand, polarization, and poorer health.', 'Faster internet speeds.', 'More sunny days in winter.'], answer: 1, explanation: 'The passage states that high inequality has been "linked to reduced social mobility, weaker aggregate demand, political polarization, and poorer health outcomes." These consequences match option B.' },
      { id: 'q3-221', question: 'How do supporters of inequality defend it?', options: ['They argue it makes everyone unhappy.', 'They argue modest inequality can incentivize effort, risk-taking, and entrepreneurship.', 'They argue all wealth should be confiscated.', 'They argue inequality is required by physics.'], answer: 1, explanation: 'The passage notes that "Some scholars argue that modest inequality can incentivize effort and risk-taking, providing the rewards necessary for entrepreneurship and innovation." This defense matches option B.' },
      { id: 'q3-222', question: 'What policy responses does the passage discuss?', options: ['Higher marginal tax rates, expanded education, stronger labor protections, UBI, and wealth taxes.', 'Abolishing all governments overnight.', 'Giving everyone free diamonds forever.', 'Forcing everyone to live in caves.'], answer: 0, explanation: 'The passage lists "higher marginal tax rates on top earners, expanded access to education, and stronger labor protections," plus "universal basic income, wealth taxes, or reforms to corporate governance." This policy range matches option A.' },
      { id: 'q3-223', question: 'What does the word "marginal" most nearly mean in this economic context?', options: ['Relating to the additional unit rather than the total.', 'Found only on the edges of pages.', 'Extremely rare in modern life.', 'Connected with banknotes and coins.'], answer: 0, explanation: 'In economic context, a "marginal tax rate" applies to each additional unit of income, rather than to the total. This technical usage matches option A.' }
    ]
  },
  {
    id: 'read-lv3-35',
    level: 3,
    serial: 35,
    category: '文化与社会',
    title: 'Language Death and Revival',
    passage:
      'Languages are living systems that grow, change, and sometimes disappear. Linguists estimate that of the roughly seven thousand languages currently spoken, perhaps half will be lost within a century, a process known as language death. When a community shifts to a dominant language for education, employment, and media, its native tongue may no longer be transmitted to children, the crucial test of a language\'s vitality. The loss of any language is more than a technical inconvenience; it carries with it the erosion of cultural memory, oral tradition, and unique ways of categorizing experience. Some languages encode knowledge about local ecosystems, medicinal plants, and sustainable practices that have been refined over centuries. Others contain grammatical structures and metaphors that expand our understanding of human cognition. Yet efforts to document and revive endangered languages have grown in recent decades. Communities in places such as Wales, Hawaii, and New Zealand have launched educational programs, digital archives, and public media initiatives to restore everyday use of their ancestral languages. Technology, including machine translation and online learning platforms, has made it easier for younger generations to access resources in endangered tongues. While not every language can be saved, linguists argue that supporting these efforts enriches scientific knowledge, honors the dignity of indigenous communities, and preserves irreplaceable parts of humanity\'s intellectual heritage.',
    vocabulary: [
      { word: 'disappearance', phonetic: '/ˌdɪsə\'pɪərəns/', meaning: '消失' },
      { word: 'shift', phonetic: '/ʃɪft/', meaning: '转移' },
      { word: 'vitality', phonetic: '/vaɪ\'tæləti/', meaning: '活力' },
      { word: 'erosion', phonetic: '/ɪ\'rəʊʒən/', meaning: '侵蚀' },
      { word: 'medicinal', phonetic: '/mə\'dɪsɪnəl/', meaning: '药用的' },
      { word: 'refine', phonetic: '/rɪ\'faɪn/', meaning: '精炼；改进' },
      { word: 'grammatical', phonetic: '/ɡrə\'mætɪkəl/', meaning: '语法的' },
      { word: 'archive', phonetic: '/\'ɑːkaɪv/', meaning: '档案' },
      { word: 'indigenous', phonetic: '/ɪn\'dɪdʒənəs/', meaning: '原住民的' },
      { word: 'heritage', phonetic: '/\'herɪtɪdʒ/', meaning: '遗产' }
    ],
    phrases: [
      { text: 'transmitted to children and across generations in everyday use', meaning: '通过日常使用在儿童之间和代际之间传递' },
      { text: 'encode knowledge about local ecosystems and medicinal plants', meaning: '编码关于当地生态系统和药用植物的知识' },
      { text: 'educational programs, digital archives, and public media initiatives', meaning: '教育项目、数字档案和公共媒体倡议' },
      { text: 'irreplaceable parts of humanity\'s intellectual heritage', meaning: '人类知识遗产中不可替代的部分' }
    ],
    questions: [
      { id: 'q3-224', question: 'What is language death?', options: ['A ritual performed at funerals.', 'A process in which languages cease to be transmitted to new generations and disappear.', 'A type of poetry contest.', 'A government policy banning certain words.'], answer: 1, explanation: 'The passage describes language death as a process by which "perhaps half will be lost within a century," and explains that "its native tongue may no longer be transmitted to children." This definition matches option B.' },
      { id: 'q3-225', question: 'How does a language typically become endangered?', options: ['Through deliberate government bans.', 'When communities shift to a dominant language for education, employment, and media.', 'Through overuse in schools.', 'Through excessive translation into other languages.'], answer: 1, explanation: 'The passage states that "When a community shifts to a dominant language for education, employment, and media, its native tongue may no longer be transmitted to children." This shift explains endangerment, matching option B.' },
      { id: 'q3-226', question: 'What kinds of knowledge can endangered languages encode?', options: ['Knowledge about local ecosystems, medicinal plants, and sustainable practices.', 'Only lists of common nouns.', 'Recipes for chocolate cake.', 'The names of ancient kings.'], answer: 0, explanation: 'The passage states that "Some languages encode knowledge about local ecosystems, medicinal plants, and sustainable practices that have been refined over centuries." This knowledge matches option A.' },
      { id: 'q3-227', question: 'What efforts have communities made to revive languages?', options: ['They have abandoned their languages entirely.', 'They have launched educational programs, digital archives, and public media initiatives.', 'They have replaced their languages with codes.', 'They have burned all language textbooks.'], answer: 1, explanation: 'The passage notes that communities "have launched educational programs, digital archives, and public media initiatives to restore everyday use of their ancestral languages." These efforts match option B.' },
      { id: 'q3-228', question: 'How has technology helped language revival?', options: ['By making all languages extinct.', 'By making machine translation and online learning platforms available in endangered tongues.', 'By replacing indigenous languages with computer code.', 'By deleting all recordings of old languages.'], answer: 1, explanation: 'The passage states that "Technology, including machine translation and online learning platforms, has made it easier for younger generations to access resources in endangered tongues." This use matches option B.' },
      { id: 'q3-229', question: 'What does the word "transmitted" most nearly mean in paragraph 2?', options: ['Thrown across a room.', 'Passed on or communicated to others.', 'Painted on a wall.', 'Transformed into electricity.'], answer: 1, explanation: 'In context, a language is "transmitted to children," meaning it is passed on to the next generation through daily use. This usage matches option B.' },
      { id: 'q3-230', question: 'What is the author\'s overall message about language preservation?', options: ['Languages are not worth saving.', 'Supporting revival efforts enriches science, honors indigenous dignity, and preserves irreplaceable heritage.', 'All languages must be replaced with one global tongue.', 'Linguists should stop working entirely.'], answer: 1, explanation: 'The passage concludes that "supporting these efforts enriches scientific knowledge, honors the dignity of indigenous communities, and preserves irreplaceable parts of humanity\'s intellectual heritage." This conclusion matches option B.' }
    ]
  },  {
    id: 'read-lv3-36',
    level: 3,
    serial: 36,
    category: '自然科学',
    title: 'The Mysteries of Deep-Sea Ecosystems',
    passage:
      'Far below the sunlit surface of the oceans lies a vast and alien world that scientists are only beginning to understand. The deep sea, defined as the waters and seabed below about two hundred meters, includes some of the most extreme environments on Earth. At these depths, sunlight does not penetrate, temperatures approach freezing, and pressures can exceed a thousand atmospheres. Yet life flourishes in surprising abundance. Hydrothermal vents, where superheated mineral-rich water erupts from the ocean floor, host entire ecosystems based on chemosynthetic bacteria that convert chemicals into food. Cold seeps, sunken whale carcasses, and abyssal plains each support distinctive communities of worms, crustaceans, fish, and microbes specially adapted to perpetual darkness. Many deep-sea species display remarkable biological adaptations, including enormous jaws for capturing scarce prey, light-producing organs for communication and hunting, and slow metabolisms to endure long periods without food. Recent expeditions using deep-diving submersibles have discovered new species at a steady pace, suggesting that the great majority of deep-sea biodiversity remains undescribed. These ecosystems are also fragile. Commercial deep-sea trawling, plastic pollution, and the prospect of deep-sea mining threaten habitats that recover from disturbance only over geological timescales. Understanding the deep sea is therefore not merely an academic pursuit; it is essential for guiding policies that protect one of the planet\'s last great reservoirs of unknown life.',
    vocabulary: [
      { word: 'penetrate', phonetic: '/\'penɪtreɪt/', meaning: '穿透；渗入' },
      { word: 'extreme', phonetic: '/ɪk\'striːm/', meaning: '极端的' },
      { word: 'abyssal', phonetic: '/ə\'bɪsəl/', meaning: '深海的；深渊的' },
      { word: 'hydrothermal', phonetic: '/ˌhaɪdrəʊ\'θɜːməl/', meaning: '热液的' },
      { word: 'chemosynthetic', phonetic: '/ˌkiːməʊsɪn\'θetɪk/', meaning: '化能合成的' },
      { word: 'crustacean', phonetic: '/krʌ\'steɪʃən/', meaning: '甲壳类动物' },
      { word: 'metabolism', phonetic: '/mə\'tæbəlɪzəm/', meaning: '新陈代谢' },
      { word: 'submersible', phonetic: '/səb\'mɜːsɪbəl/', meaning: '可潜入水中的' },
      { word: 'biodiversity', phonetic: '/ˌbaɪəʊdaɪ\'vɜːsəti/', meaning: '生物多样性' },
      { word: 'geological', phonetic: '/ˌdʒiːə\'lɒdʒɪkəl/', meaning: '地质学的' }
    ],
    phrases: [
      { text: 'flourish in surprising abundance despite permanent darkness', meaning: '在永久黑暗中以惊人的丰度繁盛生长' },
      { text: 'support entire ecosystems based on chemosynthetic bacteria', meaning: '支撑依赖化能合成细菌的完整生态系统' },
      { text: 'recover from disturbance only over geological timescales', meaning: '只有经过地质时间尺度才能从扰动中恢复' },
      { text: 'protect one of the planet\'s last great reservoirs of unknown life', meaning: '保护地球上最后的未知生命宝库之一' }
    ],
    questions: [
      { id: 'q3-231', question: 'How is the deep sea defined in the passage?', options: ['Any water below twenty meters.', 'The waters and seabed below about two hundred meters.', 'Any lake more than fifty meters deep.', 'Underground aquifers beneath continents.'], answer: 1, explanation: 'The passage defines the deep sea as "the waters and seabed below about two hundred meters." This definition matches option B.' },
      { id: 'q3-232', question: 'What conditions characterize the deep sea, according to the passage?', options: ['Bright sunlight and warm temperatures.', 'No sunlight, near-freezing temperatures, and pressures exceeding a thousand atmospheres.', 'Calm winds and abundant vegetation.', 'Tropical conditions with colorful coral.'], answer: 1, explanation: 'The passage states that "sunlight does not penetrate, temperatures approach freezing, and pressures can exceed a thousand atmospheres." These conditions match option B.' },
      { id: 'q3-233', question: 'What supports ecosystems around hydrothermal vents?', options: ['Photosynthetic plants floating on the surface.', 'Chemosynthetic bacteria that convert chemicals into food.', 'Sunlight carried by underwater mirrors.', 'Migrating whales that bring food down.'], answer: 1, explanation: 'The passage states that hydrothermal vents "host entire ecosystems based on chemosynthetic bacteria that convert chemicals into food." This foundation matches option B.' },
      { id: 'q3-234', question: 'What biological adaptations do many deep-sea species display?', options: ['Colorful feathers and high metabolism.', 'Enormous jaws, light-producing organs, and slow metabolisms.', 'Bright scales and fast swimming.', 'Large lungs for breathing surface air.'], answer: 1, explanation: 'The passage lists "enormous jaws for capturing scarce prey, light-producing organs for communication and hunting, and slow metabolisms to endure long periods without food." These adaptations match option B.' },
      { id: 'q3-235', question: 'What do recent deep-diving expeditions suggest about deep-sea biodiversity?', options: ['That all species have already been catalogued.', 'That most deep-sea biodiversity remains undescribed.', 'That only mammals live at depth.', 'That deep-sea species live for only a few days.'], answer: 1, explanation: 'The passage notes that "expeditions using deep-diving submersibles have discovered new species at a steady pace, suggesting that the great majority of deep-sea biodiversity remains undescribed." This conclusion matches option B.' },
      { id: 'q3-236', question: 'What threats do deep-sea ecosystems face?', options: ['Commercial deep-sea trawling, plastic pollution, and the prospect of deep-sea mining.', 'Excessive rainfall and flooding.', 'Solar flares from distant stars.', 'Tourists with loud music.'], answer: 0, explanation: 'The passage lists "Commercial deep-sea trawling, plastic pollution, and the prospect of deep-sea mining" as threats. These threats match option A.' },
      { id: 'q3-237', question: 'Why is understanding the deep sea important beyond academic interest?', options: ['Because it helps people win diving competitions.', 'Because it is essential for guiding policies that protect one of the planet\'s last great reservoirs of unknown life.', 'Because deep-sea creatures are widely eaten.', 'Because the deep sea contains hidden treasure chests.'], answer: 1, explanation: 'The passage concludes that understanding the deep sea "is essential for guiding policies that protect one of the planet\'s last great reservoirs of unknown life." This policy relevance matches option B.' },
      { id: 'q3-238', question: 'What does the word "penetrate" most nearly mean in paragraph 1?', options: ['Pass through or into something.', 'Remain on the outer surface only.', 'Bounce back from a barrier.', 'Float gently above an object.'], answer: 0, explanation: 'In context, "sunlight does not penetrate" means sunlight does not pass through the deep ocean waters. This usage matches option A.' }
    ]
  },  {
    id: 'read-lv3-37',
    level: 3,
    serial: 37,
    category: '历史与文明',
    title: 'The Industrial Revolution\'s Lasting Impact',
    passage:
      'The Industrial Revolution, which began in late-eighteenth-century Britain and gradually spread across Europe and North America, fundamentally transformed human societies. The replacement of hand production with machines, the rise of the factory system, and the harnessing of coal and steam power enabled levels of economic output previously unimaginable. Productivity surged, urban populations swelled, and new social classes of industrial capitalists and wage laborers emerged. These changes brought unprecedented material wealth and technological progress, but they also produced new forms of hardship. Child labor, dangerous working conditions, polluted cities, and vast inequalities between factory owners and workers prompted calls for reform. Over the nineteenth and twentieth centuries, movements for trade unions, public education, sanitary regulation, and labor laws gradually addressed many of these abuses. The revolution also reshaped the global environment. Vast consumption of fossil fuels drove a sustained increase in atmospheric carbon dioxide, while industrial agriculture and resource extraction altered landscapes on a continental scale. Culturally, industrialization altered daily rhythms, family structures, and even the experience of time itself, as factory discipline imposed new schedules on previously agricultural societies. Although the heaviest industrialization is now associated with rapidly developing economies in Asia, the long-term consequences first set in motion by British factories remain visible in climate patterns, urban design, and global trade networks. The Industrial Revolution\'s legacy is therefore neither wholly positive nor wholly negative, but it is undeniably foundational to the modern world.',
    vocabulary: [
      { word: 'transform', phonetic: '/træns\'fɔːm/', meaning: '彻底改变' },
      { word: 'productivity', phonetic: '/ˌprɒdʌk\'tɪvəti/', meaning: '生产力' },
      { word: 'capitalist', phonetic: '/\'kæpɪtəlɪst/', meaning: '资本家' },
      { word: 'surge', phonetic: '/sɜːdʒ/', meaning: '激增' },
      { word: 'hardship', phonetic: '/\'hɑːdʃɪp/', meaning: '困苦' },
      { word: 'regulation', phonetic: '/ˌreɡju\'leɪʃən/', meaning: '法规' },
      { word: 'extraction', phonetic: '/ɪk\'strækʃən/', meaning: '开采' },
      { word: 'rhythm', phonetic: '/\'rɪðəm/', meaning: '节奏' },
      { word: 'continental', phonetic: '/ˌkɒntɪ\'nentəl/', meaning: '大陆的' },
      { word: 'foundational', phonetic: '/faʊn\'deɪʃənəl/', meaning: '基础的' }
    ],
    phrases: [
      { text: 'fundamentally transformed human societies across continents', meaning: '从根本上改变了各大洲的人类社会' },
      { text: 'productivity surged as machines replaced hand production', meaning: '随着机器取代手工生产，生产力激增' },
      { text: 'address the abuses of unregulated industrial labor', meaning: '应对不受监管的工业劳动的弊端' },
      { text: 'laid the foundations of the modern industrial world', meaning: '奠定了现代工业世界的基础' }
    ],
    questions: [
      { id: 'q3-239', question: 'Where and when did the Industrial Revolution begin, according to the passage?', options: ['In ancient Greece around 500 BC.', 'In late-eighteenth-century Britain.', 'In modern China around 2000.', 'In the United States during the 1960s.'], answer: 1, explanation: 'The passage states that the Industrial Revolution "began in late-eighteenth-century Britain and gradually spread across Europe and North America." This origin matches option B.' },
      { id: 'q3-240', question: 'What economic changes did the Industrial Revolution bring?', options: ['Replacement of machines with hand production.', 'Replacement of hand production with machines, rise of factories, and use of coal and steam.', 'A return to subsistence agriculture across Europe.', 'A ban on all international trade.'], answer: 1, explanation: 'The passage lists "replacement of hand production with machines, the rise of the factory system, and the harnessing of coal and steam power." These economic changes match option B.' },
      { id: 'q3-241', question: 'What new social classes emerged during industrialization?', options: ['Industrial capitalists and wage laborers.', 'Only farmers and fishermen.', 'A single uniform class of monks.', 'Exclusively foreign diplomats.'], answer: 0, explanation: 'The passage notes that industrialization saw "new social classes of industrial capitalists and wage laborers" emerge. These classes match option A.' },
      { id: 'q3-242', question: 'What hardships did industrialization produce?', options: ['Universal free vacations for all.', 'Child labor, dangerous conditions, polluted cities, and vast inequalities.', 'An immediate end to all diseases.', 'Equal pay for every worker from day one.'], answer: 1, explanation: 'The passage lists "Child labor, dangerous working conditions, polluted cities, and vast inequalities" as hardships produced by industrialization. These hardships match option B.' },
      { id: 'q3-243', question: 'How did societies gradually address these abuses?', options: ['By ignoring them completely.', 'Through unions, public education, sanitary regulation, and labor laws.', 'By sending everyone to live on other planets.', 'By banning all factories permanently.'], answer: 1, explanation: 'The passage states that "movements for trade unions, public education, sanitary regulation, and labor laws gradually addressed many of these abuses." These reforms match option B.' },
      { id: 'q3-244', question: 'How did industrialization affect the global environment?', options: ['It had no effect at all.', 'It drove sustained increases in atmospheric carbon dioxide and altered landscapes through extraction.', 'It reduced carbon dioxide levels worldwide.', 'It made all forests grow twice as fast.'], answer: 1, explanation: 'The passage states that "Vast consumption of fossil fuels drove a sustained increase in atmospheric carbon dioxide, while industrial agriculture and resource extraction altered landscapes on a continental scale." These environmental effects match option B.' },
      { id: 'q3-245', question: 'How did industrialization change the experience of time, according to the passage?', options: ['Time stopped altogether.', 'Factory discipline imposed new schedules on previously agricultural societies.', 'Days became exactly forty-eight hours long.', 'People no longer needed clocks at all.'], answer: 1, explanation: 'The passage states that industrialization "altered daily rhythms, family structures, and even the experience of time itself, as factory discipline imposed new schedules on previously agricultural societies." This temporal change matches option B.' },
      { id: 'q3-246', question: 'What is the author\'s overall assessment of the Industrial Revolution\'s legacy?', options: ['It was purely positive with no downsides.', 'It is neither wholly positive nor wholly negative, but undeniably foundational to the modern world.', 'It should be entirely erased from history.', 'It had no lasting impact on modern life.'], answer: 1, explanation: 'The closing sentence states that the Industrial Revolution\'s legacy "is therefore neither wholly positive nor wholly negative, but it is undeniably foundational to the modern world." This balanced assessment matches option B.' }
    ]
  },
  {
    id: 'read-lv3-38',
    level: 3,
    serial: 38,
    category: '教育',
    title: 'Lifelong Learning in the Modern Era',
    passage:
      'Lifelong learning, the practice of continuing education throughout one\'s life, has become a defining feature of contemporary societies. Where formal schooling once occupied a fixed period at the beginning of adulthood, today\'s rapidly changing economies require workers to update skills repeatedly across multiple careers. The rise of digital platforms, open educational resources, and short-format courses has made it easier than ever for adults to acquire new competencies on their own schedules. Universities now offer massive open online courses and micro-credentials that recognize specific skills rather than entire degrees. Employers increasingly value demonstrable learning over static credentials, and many provide tuition reimbursement or in-house training to encourage continuous development. Beyond the workplace, lifelong learning supports personal growth, civic engagement, and social inclusion, particularly for older adults seeking to remain active and connected. Yet significant challenges remain. Access to high-quality learning is unevenly distributed, with rural residents, low-income workers, and older learners often facing barriers of cost, time, and digital literacy. Motivation can also fade once the structures of formal schooling are left behind. Researchers emphasize that effective lifelong learning depends on a mix of self-direction, supportive institutions, and public policies that fund adult education. When these conditions are in place, learning across the life course becomes not just a response to economic change but a powerful source of meaning, resilience, and democratic vitality.',
    vocabulary: [
      { word: 'contemporary', phonetic: '/kən\'tempərəri/', meaning: '当代的' },
      { word: 'competency', phonetic: '/\'kɒmpɪtənsi/', meaning: '能力' },
      { word: 'credential', phonetic: '/krə\'denʃəl/', meaning: '证书；凭证' },
      { word: 'tuition', phonetic: '/tjʊ\'ɪʃən/', meaning: '学费' },
      { word: 'inclusion', phonetic: '/ɪn\'kluːʒən/', meaning: '包容' },
      { word: 'unevenly', phonetic: '/ʌn\'iːvənli/', meaning: '不均衡地' },
      { word: 'literacy', phonetic: '/\'lɪtərəsi/', meaning: '素养' },
      { word: 'self-direction', phonetic: '/ˌself dəˈrekʃən/', meaning: '自我导向' },
      { word: 'resilience', phonetic: '/rɪ\'zɪliəns/', meaning: '韧性' },
      { word: 'vitality', phonetic: '/vaɪ\'tæləti/', meaning: '活力' }
    ],
    phrases: [
      { text: 'continue education throughout one\'s life and across multiple careers', meaning: '在人的一生中以及跨越多种职业的过程中持续接受教育' },
      { text: 'recognize specific skills rather than entire degrees', meaning: '认可具体技能而非整个学位' },
      { text: 'barriers of cost, time, and digital literacy for adult learners', meaning: '成人学习者在成本、时间和数字素养方面的障碍' },
      { text: 'a powerful source of meaning, resilience, and democratic vitality', meaning: '意义、韧性与民主活力的有力源泉' }
    ],
    questions: [
      { id: 'q3-247', question: 'What is lifelong learning, according to the passage?', options: ['A fixed program completed in childhood.', 'The practice of continuing education throughout one\'s life.', 'An exclusive program for retired people.', 'A type of corporate internship.'], answer: 1, explanation: 'The passage defines lifelong learning as "the practice of continuing education throughout one\'s life." This definition matches option B.' },
      { id: 'q3-248', question: 'Why has lifelong learning become more important in modern economies?', options: ['Because workers must update skills repeatedly across multiple careers.', 'Because books have become too expensive.', 'Because schools no longer offer any classes.', 'Because computers no longer function.'], answer: 0, explanation: 'The passage states that "today\'s rapidly changing economies require workers to update skills repeatedly across multiple careers." This dynamic economy explanation matches option A.' },
      { id: 'q3-249', question: 'What technologies have made adult learning easier?', options: ['Telegraph machines and rotary phones.', 'Digital platforms, open educational resources, and short-format courses.', 'Smoke signals and carrier pigeons.', 'Printed newspapers from the 19th century only.'], answer: 1, explanation: 'The passage notes that "The rise of digital platforms, open educational resources, and short-format courses has made it easier than ever for adults to acquire new competencies." These technologies match option B.' },
      { id: 'q3-250', question: 'What new educational formats do universities now offer?', options: ['Only printed textbooks.', 'Massive open online courses and micro-credentials recognizing specific skills.', 'Free flights to international conferences.', 'Mandatory in-person exams for everyone.'], answer: 1, explanation: 'The passage states that "Universities now offer massive open online courses and micro-credentials that recognize specific skills rather than entire degrees." These formats match option B.' },
      { id: 'q3-251', question: 'What benefits does lifelong learning offer beyond the workplace?', options: ['Personal growth, civic engagement, and social inclusion, especially for older adults.', 'Free movie tickets every weekend.', 'Automatic promotion to CEO level.', 'Exemption from all taxes.'], answer: 0, explanation: 'The passage notes that "lifelong learning supports personal growth, civic engagement, and social inclusion, particularly for older adults." These non-workplace benefits match option A.' },
      { id: 'q3-252', question: 'What challenges does lifelong learning face?', options: ['Uneven access, barriers of cost and time, fading motivation after formal schooling.', 'Excessive government subsidies for all learners.', 'Too many teachers in every classroom.', 'Lifelong learning has no challenges at all.'], answer: 0, explanation: 'The passage identifies "Access to high-quality learning is unevenly distributed" and barriers of "cost, time, and digital literacy," along with motivation challenges. These obstacles match option A.' },
      { id: 'q3-253', question: 'What conditions support effective lifelong learning, according to researchers?', options: ['Self-direction, supportive institutions, and public policies funding adult education.', 'A ban on all digital learning tools.', 'Strict in-person attendance requirements only.', 'The elimination of all public libraries.'], answer: 0, explanation: 'The passage states that "effective lifelong learning depends on a mix of self-direction, supportive institutions, and public policies that fund adult education." These conditions match option A.' },
      { id: 'q3-254', question: 'What is the author\'s broader view of lifelong learning?', options: ['It is a response to economic change and a source of meaning, resilience, and democratic vitality.', 'It only matters for computer programmers.', 'It should be limited to people under 30 years old.', 'It has no real value in modern life.'], answer: 0, explanation: 'The passage concludes that learning across the life course is "not just a response to economic change but a powerful source of meaning, resilience, and democratic vitality." This broader view matches option A.' }
    ]
  },  {
    id: 'read-lv3-39',
    level: 3,
    serial: 39,
    category: '艺术与文学',
    title: 'The Evolution of Modern Poetry',
    passage:
      'Modern poetry has undergone profound transformations since the late nineteenth century, when writers such as Baudelaire, Rimbaud, and the early Yeats began to challenge the conventions of formal verse. The twentieth century saw successive waves of experimentation. The Imagists called for clear, precise language and the presentation of concrete images, rejecting the abstractions of Victorian rhetoric. Modernists like T. S. Eliot and Ezra Pound introduced fragmentation, allusion, and multiple voices, producing works such as The Waste Land and the Cantos that demanded active readers. Mid-century confessional poets such as Sylvia Plath and Robert Lowell brought intensely personal experience into the public poem, while Beat poets like Allen Ginsberg celebrated spontaneity and rebellion. The latter half of the century expanded poetry\'s audience through spoken-word performances, slam competitions, and hybrid works blending poetry with music and visual art. Today, contemporary poets navigate a digital culture of memes, social media, and infinite scroll, incorporating code, video, and collaborative platforms into their practice. Throughout these shifts, certain concerns have endured: the relationship between language and reality, the poet\'s role in society, and the power of lyric to articulate experiences that prose cannot easily reach. Modern poetry is thus neither a single style nor a fixed tradition but a continuing conversation about how words can renew perception in every generation.',
    vocabulary: [
      { word: 'transformation', phonetic: '/ˌtrænsfə\'meɪʃən/', meaning: '转变' },
      { word: 'convention', phonetic: '/kən\'venʃən/', meaning: '惯例；传统' },
      { word: 'precise', phonetic: '/prɪ\'saɪs/', meaning: '精确的' },
      { word: 'concrete', phonetic: '/\'kɒŋkriːt/', meaning: '具体的' },
      { word: 'fragmentation', phonetic: '/ˌfræɡmən\'teɪʃən/', meaning: '碎片化' },
      { word: 'allusion', phonetic: '/ə\'luːʒən/', meaning: '典故；暗示' },
      { word: 'confessional', phonetic: '/kən\'feʃənəl/', meaning: '自白的' },
      { word: 'spontaneity', phonetic: '/ˌspɒntə\'neɪəti/', meaning: '自发性' },
      { word: 'lyric', phonetic: '/\'lɪrɪk/', meaning: '抒情的' },
      { word: 'articulate', phonetic: '/ɑː\'tɪkjʊleɪt/', meaning: '清楚地表达' }
    ],
    phrases: [
      { text: 'challenge the conventions of formal verse inherited from earlier centuries', meaning: '挑战从早期继承而来的正式诗歌传统' },
      { text: 'rejected the abstractions of Victorian rhetoric in favor of concrete images', meaning: '摒弃维多利亚时代的抽象修辞，转向具体意象' },
      { text: 'demand active readers who can navigate fragmentation and allusion', meaning: '要求读者主动参与，穿越碎片与典故' },
      { text: 'a continuing conversation about how words can renew perception in every generation', meaning: '关于语言如何在每一代中更新感知的持续对话' }
    ],
    questions: [
      { id: 'q3-255', question: 'Which late-nineteenth-century writers began challenging poetic conventions, according to the passage?', options: ['Baudelaire, Rimbaud, and the early Yeats.', 'Only Shakespeare and his contemporaries.', 'Modern pop-song lyricists of the 1980s.', 'Writers of medieval epic poetry.'], answer: 0, explanation: 'The passage states that "writers such as Baudelaire, Rimbaud, and the early Yeats began to challenge the conventions of formal verse." These writers match option A.' },
      { id: 'q3-256', question: 'What did the Imagist movement call for?', options: ['Lengthy abstract meditations on philosophy.', 'Clear, precise language and concrete images, rejecting Victorian abstractions.', 'Rigid adherence to rhymed couplets.', 'Complete abolition of all imagery.'], answer: 1, explanation: 'The passage states that "The Imagists called for clear, precise language and the presentation of concrete images, rejecting the abstractions of Victorian rhetoric." This Imagist program matches option B.' },
      { id: 'q3-257', question: 'What techniques did Modernist poets like Eliot and Pound introduce?', options: ['Strict classical imitation.', 'Fragmentation, allusion, and multiple voices demanding active readers.', 'Exclusively rhymed couplets and sonnets.', 'Banning of all foreign vocabulary.'], answer: 1, explanation: 'The passage states that "Modernists like T. S. Eliot and Ezra Pound introduced fragmentation, allusion, and multiple voices, producing works... that demanded active readers." These techniques match option B.' },
      { id: 'q3-258', question: 'What did confessional poets of the mid-century bring into their poems?', options: ['Strict rules of classical prosody.', 'Intensely personal experience.', 'Recipes for cooking regional dishes.', 'Lists of equipment for industrial machinery.'], answer: 1, explanation: 'The passage notes that "Mid-century confessional poets such as Sylvia Plath and Robert Lowell brought intensely personal experience into the public poem." This personal focus matches option B.' },
      { id: 'q3-259', question: 'How did poetry expand its audience in the latter half of the twentieth century?', options: ['Through silent reading in libraries only.', 'Through spoken-word performances, slam competitions, and hybrid works blending poetry with music and visual art.', 'By being banned from public venues.', 'Through mandatory school drills only.'], answer: 1, explanation: 'The passage states that "the latter half of the century expanded poetry\'s audience through spoken-word performances, slam competitions, and hybrid works blending poetry with music and visual art." This expansion matches option B.' },
      { id: 'q3-260', question: 'How do contemporary poets respond to digital culture?', options: ['They ignore all technology.', 'They incorporate code, video, and collaborative platforms into their practice.', 'They write exclusively on typewriters.', 'They refuse to publish anything online.'], answer: 1, explanation: 'The passage states that contemporary poets "incorporate code, video, and collaborative platforms into their practice." This digital response matches option B.' },
      { id: 'q3-261', question: 'What enduring concerns does modern poetry continue to address?', options: ['The relationship between language and reality, the poet\'s social role, and lyric\'s expressive power.', 'The price of postage stamps worldwide.', 'Recipes for traditional national dishes.', 'Schedules of commuter trains.'], answer: 0, explanation: 'The passage states that "certain concerns have endured: the relationship between language and reality, the poet\'s role in society, and the power of lyric to articulate experiences." These enduring concerns match option A.' },
      { id: 'q3-262', question: 'How does the author characterize modern poetry overall?', options: ['As a fixed tradition that never changes.', 'As a continuing conversation about how words can renew perception in every generation.', 'As a meaningless collection of random words.', 'As a fading art form with no future.'], answer: 1, explanation: 'The closing sentence states that "Modern poetry is thus neither a single style nor a fixed tradition but a continuing conversation about how words can renew perception in every generation." This characterization matches option B.' }
    ]
  },  {
    id: 'read-lv3-40',
    level: 3,
    serial: 40,
    category: '环境与气候',
    title: 'The Circular Economy Model',
    passage:
      'The circular economy is an economic model that seeks to eliminate waste and keep materials in use for as long as possible. In contrast to the traditional linear economy, which follows a take-make-dispose pattern, a circular system designs products for durability, repairability, and eventual recycling. Materials are recovered at the end of a product\'s life and re-enter the production cycle, reducing demand for virgin resources and limiting pollution. Circular approaches can be seen in product-as-service models, where customers pay for the use of a product rather than owning it outright, giving manufacturers incentives to design for longevity. Industrial symbiosis, in which the waste of one firm becomes the input of another, has reduced environmental impacts in regions from Scandinavia to East Asia. The European Union has adopted circular economy legislation requiring recycled content in packaging, electronics, and vehicles. Proponents argue that the model creates jobs, drives innovation, and decouples economic growth from resource consumption. Critics caution that without careful design, recycling itself can be energy-intensive and that some materials cannot easily be recovered at scale. They also warn that circular strategies can become a form of greenwashing if companies continue to expand overall production while making individual products slightly less wasteful. Realizing the full promise of the circular economy will therefore require not only new technologies but also shifts in consumer behavior, business models, and public policy that prioritize sufficiency and long-term resilience.',
    vocabulary: [
      { word: 'eliminate', phonetic: '/ɪ\'lɪmɪneɪt/', meaning: '消除' },
      { word: 'durability', phonetic: '/ˌdjʊərə\'bɪləti/', meaning: '耐用性' },
      { word: 'repairability', phonetic: '/rɪˌpeərə\'bɪləti/', meaning: '可修复性' },
      { word: 'recycling', phonetic: '/rɪ\'saɪklɪŋ/', meaning: '回收利用' },
      { word: 'virgin', phonetic: '/\'vɜːdʒɪn/', meaning: '未加工的；原生的' },
      { word: 'symbiosis', phonetic: '/ˌsɪmbaɪ\'əʊsɪs/', meaning: '共生' },
      { word: 'decouple', phonetic: '/diː\'kʌpəl/', meaning: '使脱钩' },
      { word: 'greenwashing', phonetic: '/\'ɡriːnˌwɒʃɪŋ/', meaning: '漂绿' },
      { word: 'sufficiency', phonetic: '/sə\'fɪʃənsi/', meaning: '足量；适度' },
      { word: 'resilience', phonetic: '/rɪ\'zɪliəns/', meaning: '韧性' }
    ],
    phrases: [
      { text: 'follow a take-make-dispose pattern that generates large amounts of waste', meaning: '遵循产生大量废弃物的取用-制造-丢弃模式' },
      { text: 'design products for durability, repairability, and eventual recycling', meaning: '为耐用性、可修复性和最终回收而设计产品' },
      { text: 'the waste of one firm becomes the input of another', meaning: '一家企业的废弃物成为另一家企业的原料' },
      { text: 'decouple economic growth from resource consumption', meaning: '将经济增长与资源消耗脱钩' }
    ],
    questions: [
      { id: 'q3-263', question: 'What is the circular economy, according to the passage?', options: ['A model that produces as much waste as possible.', 'An economic model that seeks to eliminate waste and keep materials in use.', 'A new type of cryptocurrency.', 'A purely agricultural system.'], answer: 1, explanation: 'The passage defines the circular economy as "an economic model that seeks to eliminate waste and keep materials in use for as long as possible." This definition matches option B.' },
      { id: 'q3-264', question: 'How does the circular economy differ from the traditional linear economy?', options: ['There is no difference.', 'The linear model follows take-make-dispose; the circular model designs for durability, repair, and recycling.', 'Both rely on unlimited resource extraction.', 'The linear model is a myth.'], answer: 1, explanation: 'The passage states that the linear economy "follows a take-make-dispose pattern, [while] a circular system designs products for durability, repairability, and eventual recycling." This contrast matches option B.' },
      { id: 'q3-265', question: 'What is the product-as-service model?', options: ['A free gift with every purchase.', 'A model where customers pay for the use of a product rather than owning it.', 'A model that bans all products.', 'A subscription to a TV streaming service only.'], answer: 1, explanation: 'The passage explains that product-as-service is "where customers pay for the use of a product rather than owning it outright, giving manufacturers incentives to design for longevity." This matches option B.' },
      { id: 'q3-266', question: 'What is industrial symbiosis?', options: ['A type of insect behavior.', 'A model in which the waste of one firm becomes the input of another.', 'A romantic relationship between two engineers.', 'A kind of agricultural pest control.'], answer: 1, explanation: 'The passage defines industrial symbiosis as "in which the waste of one firm becomes the input of another." This definition matches option B.' },
      { id: 'q3-267', question: 'What circular economy legislation has the European Union adopted?', options: ['Laws banning all recycling.', 'Requirements for recycled content in packaging, electronics, and vehicles.', 'Mandatory vegetarian meals in schools.', 'A tax on fresh air.'], answer: 1, explanation: 'The passage notes that "The European Union has adopted circular economy legislation requiring recycled content in packaging, electronics, and vehicles." This legislation matches option B.' },
      { id: 'q3-268', question: 'What benefits do proponents claim for the circular economy?', options: ['It creates jobs, drives innovation, and decouples growth from resource consumption.', 'It causes mass unemployment.', 'It has no measurable benefits.', 'It only helps large corporations.'], answer: 0, explanation: 'The passage states that proponents argue the model "creates jobs, drives innovation, and decouples economic growth from resource consumption." These benefits match option A.' },
      { id: 'q3-269', question: 'What criticisms do skeptics raise about circular strategies?', options: ['Recycling can be energy-intensive, some materials cannot be recovered at scale, and circular claims can mask continued overproduction.', 'The model is flawless and needs no improvement.', 'It only works for tropical climates.', 'It has been universally banned.'], answer: 0, explanation: 'The passage lists three criticisms: recycling can be energy-intensive, some materials cannot easily be recovered at scale, and circular strategies can become a form of greenwashing. These criticisms match option A.' },
      { id: 'q3-270', question: 'What broader changes does the author say are needed to realize the circular economy?', options: ['Only new technology.', 'Shifts in consumer behavior, business models, and public policy that prioritize sufficiency and resilience.', 'An end to all manufacturing.', 'Strict isolationism for every nation.'], answer: 1, explanation: 'The passage concludes that "Realizing the full promise of the circular economy will therefore require not only new technologies but also shifts in consumer behavior, business models, and public policy that prioritize sufficiency and long-term resilience." This broader conclusion matches option B.' }
    ]
  },  {
    id: 'read-lv3-41',
    level: 3,
    serial: 41,
    category: '心理学',
    title: 'Memory Construction and False Recall',
    passage:
      'Human memory is not a faithful recording of experience but an active process of construction that is prone to error. Elizabeth Loftus\'s pioneering research on the misinformation effect showed that when people are exposed to misleading information after an event, they often incorporate that information into their later recollections, confidently recalling details that never actually occurred. Such false memories can be vivid, detailed, and emotionally compelling, even when entirely fabricated. Brain imaging studies suggest that recalling a true memory and a false one activates many of the same neural networks, making the two difficult to distinguish from the inside. Researchers have documented false memories for events as varied as getting lost in a shopping mall as a child, witnessing a plane crash, or being attacked by a wild animal. The mechanisms underlying memory distortion include suggestive questioning, repeated imagination of events, and the natural tendency to fill gaps with plausible inferences. The implications extend well beyond the laboratory. In legal settings, mistaken eyewitness testimony has contributed to wrongful convictions. In clinical practice, memories recovered during therapy must be treated with caution, especially when suggestive techniques are used. Yet memory construction also has adaptive value: by integrating fragments into coherent narratives, people make sense of their past, plan for the future, and maintain a stable sense of identity. Understanding both the fallibility and the creativity of memory is therefore essential for science, law, and everyday life.',
    vocabulary: [
      { word: 'construction', phonetic: '/kən\'strʌkʃən/', meaning: '构建' },
      { word: 'misinformation', phonetic: '/ˌmɪsɪnfə\'meɪʃən/', meaning: '错误信息' },
      { word: 'fabricate', phonetic: '/\'fæbrɪkeɪt/', meaning: '编造' },
      { word: 'compelling', phonetic: '/kəm\'pelɪŋ/', meaning: '引人注目的' },
      { word: 'distort', phonetic: '/dɪs\'tɔːt/', meaning: '扭曲' },
      { word: 'plausible', phonetic: '/\'plɔːzəbəl/', meaning: '看似合理的' },
      { word: 'testimony', phonetic: '/\'testɪməʊni/', meaning: '证词' },
      { word: 'wrongful', phonetic: '/\'rɒŋfəl/', meaning: '错误的；不当的' },
      { word: 'fallibility', phonetic: '/ˌfælə\'bɪləti/', meaning: '易错性' },
      { word: 'adaptive', phonetic: '/ə\'dæptɪv/', meaning: '适应的' }
    ],
    phrases: [
      { text: 'incorporate misleading information into later recollections', meaning: '将误导性信息融入之后的回忆中' },
      { text: 'confidently recall details that never actually occurred', meaning: '自信地回忆起实际从未发生的细节' },
      { text: 'mistaken eyewitness testimony in legal settings', meaning: '法律场景中错误的目击者证词' },
      { text: 'maintain a stable sense of identity across time', meaning: '随时间保持稳定的身份感' }
    ],
    questions: [
      { id: 'q3-271', question: 'What does the passage say about human memory?', options: ['It is a perfect recording of experience.', 'It is an active construction prone to error and distortion.', 'It has been scientifically abolished.', 'It never changes once formed.'], answer: 1, explanation: 'The passage states that "Human memory is not a faithful recording of experience but an active process of construction that is prone to error." This characterization matches option B.' },
      { id: 'q3-272', question: 'What did Elizabeth Loftus\'s research demonstrate?', options: ['That people never forget anything they witness.', 'That misleading information after an event can be incorporated into later recollections.', 'That all eyewitnesses are perfectly accurate.', 'That dreams have no relation to memory.'], answer: 1, explanation: 'The passage notes that Loftus\'s research showed that "when people are exposed to misleading information after an event, they often incorporate that information into their later recollections." This finding matches option B.' },
      { id: 'q3-273', question: 'What do brain imaging studies suggest about true and false memories?', options: ['They activate completely different brain regions.', 'They activate many of the same neural networks, making them hard to distinguish.', 'They have no measurable neural activity.', 'They cause permanent brain damage.'], answer: 1, explanation: 'The passage states that "recalling a true memory and a false one activates many of the same neural networks, making the two difficult to distinguish from the inside." This neurological finding matches option B.' },
      { id: 'q3-274', question: 'What kinds of false memories have researchers documented?', options: ['Getting lost in a mall, witnessing a crash, or being attacked by an animal.', 'Only pleasant birthday parties.', 'Memories of meeting famous historical figures personally.', 'Memories of traveling to other galaxies.'], answer: 0, explanation: 'The passage lists false memories for events "as varied as getting lost in a shopping mall as a child, witnessing a plane crash, or being attacked by a wild animal." These documented memories match option A.' },
      { id: 'q3-275', question: 'What mechanisms contribute to memory distortion?', options: ['Suggestive questioning, repeated imagination, and filling gaps with plausible inferences.', 'Banning all forms of speech.', 'Reading the same book over and over.', 'Strict silence in all environments.'], answer: 0, explanation: 'The passage lists "suggestive questioning, repeated imagination of events, and the natural tendency to fill gaps with plausible inferences" as mechanisms of distortion. These mechanisms match option A.' },
      { id: 'q3-276', question: 'Why is mistaken eyewitness testimony significant?', options: ['It has contributed to wrongful convictions in legal settings.', 'It has ended all crime worldwide.', 'It always produces perfectly fair trials.', 'It only matters in fiction novels.'], answer: 0, explanation: 'The passage notes that "In legal settings, mistaken eyewitness testimony has contributed to wrongful convictions." This legal significance matches option A.' },
      { id: 'q3-277', question: 'What adaptive value does memory construction have?', options: ['It allows people to make sense of their past, plan for the future, and maintain identity.', 'It prevents people from learning new languages.', 'It causes permanent amnesia in every adult.', 'It eliminates all emotional experience.'], answer: 0, explanation: 'The passage states that "by integrating fragments into coherent narratives, people make sense of their past, plan for the future, and maintain a stable sense of identity." This adaptive value matches option A.' },
      { id: 'q3-278', question: 'What does the word "plausible" most nearly mean in paragraph 3?', options: ['Clearly false and absurd.', 'Appearing reasonable or believable.', 'Strictly mathematical.', 'Written in invisible ink.'], answer: 1, explanation: 'In context, "plausible inferences" are inferences that appear reasonable or believable enough to fill memory gaps. This usage matches option B.' }
    ]
  },  {
    id: 'read-lv3-42',
    level: 3,
    serial: 42,
    category: '哲学思辨',
    title: 'The Nature of Consciousness',
    passage:
      'Consciousness, the subjective experience of being aware of oneself and one\'s surroundings, is often called the hardest problem in philosophy. While scientists can describe the brain\'s physical processes in increasing detail, it remains mysterious how electrical activity in neurons gives rise to the felt quality of experience, the redness of red, the pain of a headache, or the taste of coffee. This is the so-called hard problem of consciousness, distinguished from easier problems about attention, memory, and behavior. Several major theories attempt to explain consciousness. Materialists hold that consciousness is nothing more than physical processes in the brain and that, in principle, a sufficiently detailed neuroscience will fully account for it. Dualists, by contrast, argue that mental phenomena are not reducible to physical ones and may involve non-physical substances or properties. Panpsychists suggest that consciousness is a fundamental feature of the universe, present even in elementary particles in some minimal form. Other researchers focus on integrated information theory, which links consciousness to a system\'s capacity to integrate information, regardless of whether the system is biological or artificial. Despite vigorous debate, no theory has yet won general acceptance, in part because consciousness is intrinsically first-personal and difficult to study using only third-person methods. Yet practical progress continues: brain imaging, clinical neurology, and anesthesia research have all deepened our understanding. The investigation of consciousness remains one of the most exciting frontiers where philosophy, psychology, and neuroscience meet.',
    vocabulary: [
      { word: 'subjective', phonetic: '/səb\'dʒektɪv/', meaning: '主观的' },
      { word: 'neuron', phonetic: '/\'njʊərɒn/', meaning: '神经元' },
      { word: 'materialist', phonetic: '/mə\'tɪəriəlɪst/', meaning: '唯物主义者' },
      { word: 'dualist', phonetic: '/\'djuːəlɪst/', meaning: '二元论者' },
      { word: 'panpsychist', phonetic: '/pæn\'saɪkɪst/', meaning: '泛心论者' },
      { word: 'elementary', phonetic: '/ˌelɪ\'mentəri/', meaning: '基本的' },
      { word: 'integrated', phonetic: '/ˈɪntɪɡreɪtɪd/', meaning: '整合的' },
      { word: 'anesthesia', phonetic: '/ˌænɪs\'θiːziə/', meaning: '麻醉' },
      { word: 'intrinsically', phonetic: '/ɪn\'trɪnsɪkli/', meaning: '本质上地' },
      { word: 'neurology', phonetic: '/njʊə\'rɒlədʒi/', meaning: '神经病学' }
    ],
    phrases: [
      { text: 'the subjective experience of being aware of oneself and one\'s surroundings', meaning: '意识到自我和周围环境的主观体验' },
      { text: 'give rise to the felt quality of experience', meaning: '产生体验的内在质感' },
      { text: 'a system\'s capacity to integrate information regardless of substrate', meaning: '系统整合信息的能力，与载体无关' },
      { text: 'intrinsically first-personal and difficult to study using third-person methods', meaning: '本质上第一人称的，难以用第三人称方法研究' }
    ],
    questions: [
      { id: 'q3-279', question: 'What is often called the hardest problem in philosophy, according to the passage?', options: ['The nature of mathematics.', 'The nature of consciousness.', 'The problem of free will only.', 'The existence of chocolate ice cream.'], answer: 1, explanation: 'The passage states that "Consciousness, the subjective experience of being aware of oneself and one\'s surroundings, is often called the hardest problem in philosophy." This identification matches option B.' },
      { id: 'q3-280', question: 'What is the hard problem of consciousness?', options: ['Why some people dislike loud music.', 'How physical brain processes give rise to the felt quality of subjective experience.', 'Why people forget their dreams.', 'How to repair broken televisions.'], answer: 1, explanation: 'The passage describes the hard problem as how "electrical activity in neurons gives rise to the felt quality of experience." This matches option B.' },
      { id: 'q3-281', question: 'What do materialists believe about consciousness?', options: ['It is created by magic spells.', 'It is nothing more than physical processes in the brain.', 'It exists only in dreams.', 'It can be bought in any shop.'], answer: 1, explanation: 'The passage states that "Materialists hold that consciousness is nothing more than physical processes in the brain." This materialist view matches option B.' },
      { id: 'q3-282', question: 'What do dualists argue?', options: ['That mental phenomena are not reducible to physical ones.', 'That consciousness is a type of ice cream.', 'That the brain is unnecessary for thought.', 'That only animals are conscious.'], answer: 0, explanation: 'The passage states that dualists "argue that mental phenomena are not reducible to physical ones and may involve non-physical substances or properties." This dualist position matches option A.' },
      { id: 'q3-283', question: 'What is the panpsychist view?', options: ['That consciousness is a fundamental feature of the universe, present even in elementary particles.', 'That consciousness exists only in human brains.', 'That consciousness is a myth.', 'That only robots can be conscious.'], answer: 0, explanation: 'The passage states that panpsychists "suggest that consciousness is a fundamental feature of the universe, present even in elementary particles in some minimal form." This view matches option A.' },
      { id: 'q3-284', question: 'What does integrated information theory link consciousness to?', options: ['The number of pages in a book.', 'A system\'s capacity to integrate information, regardless of substrate.', 'The color of a system\'s paint.', 'The age of a computer program.'], answer: 1, explanation: 'The passage states that integrated information theory "links consciousness to a system\'s capacity to integrate information, regardless of whether the system is biological or artificial." This theoretical link matches option B.' },
      { id: 'q3-285', question: 'Why has no theory of consciousness yet won general acceptance?', options: ['Because nobody studies consciousness.', 'Because consciousness is intrinsically first-personal and difficult to study using third-person methods.', 'Because all theories are illegal.', 'Because the brain does not exist.'], answer: 1, explanation: 'The passage notes that "no theory has yet won general acceptance, in part because consciousness is intrinsically first-personal and difficult to study using only third-person methods." This methodological challenge matches option B.' },
      { id: 'q3-286', question: 'What practical progress has deepened our understanding of consciousness?', options: ['Brain imaging, clinical neurology, and anesthesia research.', 'Only ancient poetry.', 'Exclusively cooking recipes.', 'Banning of all scientific inquiry.'], answer: 0, explanation: 'The passage notes that "brain imaging, clinical neurology, and anesthesia research have all deepened our understanding." This practical progress matches option A.' }
    ]
  },  {
    id: 'read-lv3-43',
    level: 3,
    serial: 43,
    category: '科技前沿',
    title: 'Quantum Computing\'s Practical Promise',
    passage:
      'Quantum computing promises to solve certain classes of problems far beyond the reach of classical computers. While ordinary machines store information as bits that are either 0 or 1, quantum computers use quantum bits, or qubits, that can exist in superpositions of 0 and 1. Through entanglement, qubits can also be linked so that the state of one instantaneously correlates with another, allowing massively parallel computation. The most famous potential application is Shor\'s algorithm, which could one day factor large integers efficiently and therefore challenge widely used cryptographic systems. Quantum computers are also well suited to simulating quantum systems in chemistry and materials science, where classical computers struggle to track the behavior of many interacting particles. In practice, building useful quantum machines has proven extraordinarily difficult. Qubits are fragile, easily disturbed by stray electromagnetic radiation, vibration, or temperature fluctuations, and most contemporary systems require elaborate cooling near absolute zero. Error rates remain high, and scaling to thousands or millions of stable qubits demands new hardware, software, and theoretical breakthroughs. Despite these hurdles, governments and companies are investing billions, hoping to achieve a practical quantum advantage for specific tasks such as drug discovery, logistics, and machine learning. Critics caution that many advertised quantum advantages are confined to narrow benchmarks and that the timeline for transformative impact remains uncertain. Even so, the field has catalyzed cross-disciplinary research and may eventually reshape how we approach some of the most complex problems in science.',
    vocabulary: [
      { word: 'superposition', phonetic: '/ˌsuːpəpə\'zɪʃən/', meaning: '叠加态' },
      { word: 'entanglement', phonetic: '/ɪn\'tæŋɡəlmənt/', meaning: '纠缠' },
      { word: 'cryptographic', phonetic: '/ˌkrɪptə\'ɡræfɪk/', meaning: '密码学的' },
      { word: 'simulate', phonetic: '/\'sɪmjʊleɪt/', meaning: '模拟' },
      { word: 'fragment', phonetic: '/\'fræɡmənt/', meaning: '碎片；使成碎片' },
      { word: 'electromagnetic', phonetic: '/ɪˌlektrəʊmæɡ\'netɪk/', meaning: '电磁的' },
      { word: 'breakthrough', phonetic: '/\'breɪkθruː/', meaning: '突破' },
      { word: 'catalyzed', phonetic: '/\'kætəlaɪzd/', meaning: '促进；催化' },
      { word: 'logistics', phonetic: '/lə\'dʒɪstɪks/', meaning: '物流' },
      { word: 'cross-disciplinary', phonetic: '/ˌkrɒs dɪsɪplɪnəri/', meaning: '跨学科的' }
    ],
    phrases: [
      { text: 'exist in superpositions of 0 and 1 simultaneously', meaning: '同时以0和1的叠加态存在' },
      { text: 'factor large integers efficiently and challenge widely used cryptographic systems', meaning: '高效分解大整数并挑战广泛使用的密码系统' },
      { text: 'elaborate cooling required near absolute zero to stabilize qubits', meaning: '需要在接近绝对零度的环境中进行精密冷却以稳定量子比特' },
      { text: 'catalyze cross-disciplinary research at the frontier of physics and computer science', meaning: '在物理与计算机科学的前沿促进跨学科研究' }
    ],
    questions: [
      { id: 'q3-287', question: 'How does a quantum bit differ from a classical bit?', options: ['It can only be 0.', 'It can exist in superpositions of 0 and 1.', 'It cannot be changed after creation.', 'It only works on Sundays.'], answer: 1, explanation: 'The passage states that quantum computers use qubits "that can exist in superpositions of 0 and 1," unlike classical bits that are either 0 or 1. This difference matches option B.' },
      { id: 'q3-288', question: 'What is entanglement, according to the passage?', options: ['A type of fishing knot.', 'A phenomenon in which qubits can be linked so the state of one correlates with another.', 'A method of untangling headphones.', 'A new kind of sandwich.'], answer: 1, explanation: 'The passage defines entanglement as a phenomenon in which "qubits can also be linked so that the state of one instantaneously correlates with another." This definition matches option B.' },
      { id: 'q3-289', question: 'What is Shor\'s algorithm famous for potentially doing?', options: ['Composing music.', 'Factoring large integers efficiently and challenging cryptographic systems.', 'Predicting weather decades ahead.', 'Painting portraits of cats.'], answer: 1, explanation: 'The passage states that Shor\'s algorithm "could one day factor large integers efficiently and therefore challenge widely used cryptographic systems." This application matches option B.' },
      { id: 'q3-290', question: 'Why are quantum computers well suited to simulating chemistry and materials science?', options: ['Because they are painted green.', 'Because classical computers struggle to track many interacting quantum particles.', 'Because they have larger screens.', 'Because they refuse to do math otherwise.'], answer: 1, explanation: 'The passage states that quantum computers are suited to simulation "where classical computers struggle to track the behavior of many interacting particles." This reasoning matches option B.' },
      { id: 'q3-291', question: 'What practical challenges do quantum computers face?', options: ['They require cooling near absolute zero, have high error rates, and need scaling breakthroughs.', 'They are too large to fit in any building.', 'They run only on Tuesdays.', 'They are limited to processing recipes.'], answer: 0, explanation: 'The passage identifies challenges: "Qubits are fragile," "most contemporary systems require elaborate cooling near absolute zero," "Error rates remain high," and "scaling to thousands or millions of stable qubits demands new hardware." These challenges match option A.' },
      { id: 'q3-292', question: 'Why are governments and companies investing in quantum computing?', options: ['To achieve practical quantum advantage for drug discovery, logistics, and machine learning.', 'To replace all engineers with robots.', 'To ban the use of classical computers.', 'To write poetry more efficiently.'], answer: 0, explanation: 'The passage states that investors hope "to achieve a practical quantum advantage for specific tasks such as drug discovery, logistics, and machine learning." This motivation matches option A.' },
      { id: 'q3-293', question: 'What caution do critics offer about quantum advantages?', options: ['Quantum advantages are often confined to narrow benchmarks and transformative impact remains uncertain.', 'Quantum computers are illegal everywhere.', 'Quantum computers can only solve toy puzzles.', 'Quantum advantages have been banned by philosophers.'], answer: 0, explanation: 'The passage notes that critics caution "that many advertised quantum advantages are confined to narrow benchmarks and that the timeline for transformative impact remains uncertain." This caution matches option A.' },
      { id: 'q3-294', question: 'What broader impact has the quantum field had, according to the author?', options: ['It has catalyzed cross-disciplinary research and may eventually reshape approaches to complex problems.', 'It has ended all other forms of research.', 'It has eliminated mathematics from science.', 'It has produced no measurable effect.'], answer: 0, explanation: 'The passage concludes that the field "has catalyzed cross-disciplinary research and may eventually reshape how we approach some of the most complex problems in science." This broader impact matches option A.' }
    ]
  },  {
    id: 'read-lv3-44',
    level: 3,
    serial: 44,
    category: '经济学',
    title: 'Central Banks and Monetary Policy',
    passage:
      'Central banks are public institutions that manage a country\'s money supply, set benchmark interest rates, and oversee the stability of the financial system. In most advanced economies, central banks operate independently from direct political control so that they can pursue long-term objectives such as price stability and full employment without short-term electoral pressure. The principal instrument of monetary policy is the policy interest rate, which influences the cost of borrowing throughout the economy. When central banks lower rates, credit becomes cheaper, encouraging investment, consumption, and economic activity, though sometimes at the cost of higher inflation. When they raise rates, borrowing becomes more expensive, slowing demand and helping to keep prices stable. In addition to interest rates, central banks use unconventional tools such as quantitative easing, in which they purchase large quantities of government and corporate bonds to inject liquidity into financial markets. Critics warn that prolonged low rates can inflate asset bubbles, encourage excessive risk-taking, and erode savings. The 2008 global financial crisis and the inflation surge of 2022 have sharpened debates about the appropriate balance between supporting growth and containing inflation. International coordination also matters: exchange rates, capital flows, and cross-border lending link the monetary policies of different countries. As new challenges such as digital currencies and climate-related financial risks emerge, central banks are being asked to expand their mandates and adapt their tools, ensuring that monetary policy remains effective in a rapidly changing global economy.',
    vocabulary: [
      { word: 'benchmark', phonetic: '/\'bentʃmɑːk/', meaning: '基准' },
      { word: 'independently', phonetic: '/ˌɪndɪ\'pendəntli/', meaning: '独立地' },
      { word: 'electoral', phonetic: '/ɪ\'lektərəl/', meaning: '选举的' },
      { word: 'inflation', phonetic: '/ɪn\'fleɪʃən/', meaning: '通货膨胀' },
      { word: 'quantitative', phonetic: '/\'kwɒntɪtətɪv/', meaning: '定量的' },
      { word: 'liquidity', phonetic: '/lɪ\'kwɪdəti/', meaning: '流动性' },
      { word: 'bubble', phonetic: '/\'bʌbəl/', meaning: '泡沫' },
      { word: 'mandate', phonetic: '/\'mændeɪt/', meaning: '授权；职责' },
      { word: 'stability', phonetic: '/stə\'bɪləti/', meaning: '稳定性' },
      { word: 'surge', phonetic: '/sɜːdʒ/', meaning: '激增' }
    ],
    phrases: [
      { text: 'manage a country\'s money supply and oversee financial stability', meaning: '管理一国的货币供给并监督金融稳定' },
      { text: 'pursue long-term objectives such as price stability and full employment', meaning: '追求价格稳定和充分就业等长期目标' },
      { text: 'purchase large quantities of government and corporate bonds to inject liquidity', meaning: '购买大量政府与企业债券以注入流动性' },
      { text: 'the appropriate balance between supporting growth and containing inflation', meaning: '在支持增长与抑制通胀之间的适当平衡' }
    ],
    questions: [
      { id: 'q3-295', question: 'What are the main roles of central banks, according to the passage?', options: ['Managing money supply, setting benchmark interest rates, and ensuring financial stability.', 'Designing national flags and anthems.', 'Baking bread for the population.', 'Publishing romance novels.'], answer: 0, explanation: 'The passage states that central banks "manage a country\'s money supply, set benchmark interest rates, and oversee the stability of the financial system." These roles match option A.' },
      { id: 'q3-296', question: 'Why do central banks typically operate independently from political control?', options: ['To pursue long-term goals such as price stability and full employment without short-term electoral pressure.', 'To print their own currency without limits.', 'To avoid paying any taxes.', 'To replace the national parliament.'], answer: 0, explanation: 'The passage notes that central banks operate independently "so that they can pursue long-term objectives such as price stability and full employment without short-term electoral pressure." This reasoning matches option A.' },
      { id: 'q3-297', question: 'What is the principal instrument of monetary policy?', options: ['The color of money.', 'The policy interest rate.', 'The size of bank buildings.', 'The number of bank holidays.'], answer: 1, explanation: 'The passage states that "The principal instrument of monetary policy is the policy interest rate." This instrument matches option B.' },
      { id: 'q3-298', question: 'What happens when central banks lower interest rates?', options: ['Borrowing becomes cheaper, encouraging investment and consumption.', 'All loans are immediately canceled.', 'Money becomes worthless overnight.', 'Banks are forced to close.'], answer: 0, explanation: 'The passage explains that when central banks lower rates, "credit becomes cheaper, encouraging investment, consumption, and economic activity." This effect matches option A.' },
      { id: 'q3-299', question: 'What is quantitative easing?', options: ['A new type of mathematics test.', 'A policy in which central banks purchase large quantities of bonds to inject liquidity.', 'A method of training athletes.', 'A way of cooking vegetables quickly.'], answer: 1, explanation: 'The passage defines quantitative easing as a tool "in which they purchase large quantities of government and corporate bonds to inject liquidity into financial markets." This definition matches option B.' },
      { id: 'q3-300', question: 'What risks do critics associate with prolonged low interest rates?', options: ['Asset bubbles, excessive risk-taking, and erosion of savings.', 'Improved public health.', 'Higher literacy rates worldwide.', 'Increased snowfall.'], answer: 0, explanation: 'The passage warns that "prolonged low rates can inflate asset bubbles, encourage excessive risk-taking, and erode savings." These risks match option A.' },
      { id: 'q3-301', question: 'Why does international coordination matter for monetary policy?', options: ['Because exchange rates, capital flows, and cross-border lending link countries.', 'Because all countries must use the same currency.', 'Because central banks must publish in every language.', 'Because global cuisine depends on it.'], answer: 0, explanation: 'The passage states that "exchange rates, capital flows, and cross-border lending link the monetary policies of different countries." This interdependence matches option A.' },
      { id: 'q3-302', question: 'What new challenges are central banks facing, according to the passage?', options: ['Digital currencies and climate-related financial risks.', 'Invasion by foreign armies.', 'Lack of office furniture.', 'The abolition of paper money entirely.'], answer: 0, explanation: 'The passage notes that "As new challenges such as digital currencies and climate-related financial risks emerge, central banks are being asked to expand their mandates and adapt their tools." These challenges match option A.' }
    ]
  },  {
    id: 'read-lv3-45',
    level: 3,
    serial: 45,
    category: '文化与社会',
    title: 'Migration and Cultural Identity',
    passage:
      'Human migration has shaped civilizations for millennia, carrying languages, religions, cuisines, and artistic forms across continents. Today, more people than ever live outside their country of birth, and migration patterns have grown increasingly complex, mixing voluntary movement for work or study with forced displacement caused by conflict and climate change. Migrants often navigate the difficult task of maintaining a sense of cultural identity while integrating into new societies. Some pursue assimilation, deliberately adopting the customs and language of their new home; others emphasize transnationalism, retaining strong ties to their places of origin while building new lives abroad. The outcomes depend on many factors, including the policies of receiving countries, the size and cohesion of diaspora communities, and individual circumstances such as age and education. Host societies, meanwhile, wrestle with questions about national identity, social cohesion, and the economic effects of migration. Research suggests that, on average, migrants contribute positively to economic growth and innovation, while also placing demands on public services that require careful planning. Cultural exchange fostered by migration can enrich art, music, and cuisine, broadening the experience of long-term residents. Yet prejudice and political tension often accompany rapid demographic change, reminding societies that successful integration requires deliberate effort from both migrants and hosts. Understanding migration as a long-running human story, rather than a sudden crisis, can help societies develop humane and effective responses.',
    vocabulary: [
      { word: 'migration', phonetic: '/maɪ\'ɡreɪʃən/', meaning: '迁移；移民' },
      { word: 'displacement', phonetic: '/dɪs\'pleɪsmənt/', meaning: '被迫迁移' },
      { word: 'assimilation', phonetic: '/əˌsɪmɪ\'leɪʃən/', meaning: '同化' },
      { word: 'transnationalism', phonetic: '/ˌtrænz\'næʃənəlɪzəm/', meaning: '跨国主义' },
      { word: 'diaspora', phonetic: '/daɪ\'æspərə/', meaning: '散居群体' },
      { word: 'cohesion', phonetic: '/kəʊ\'hiːʒən/', meaning: '凝聚力' },
      { word: 'prejudice', phonetic: '/\'predʒʊdɪs/', meaning: '偏见' },
      { word: 'demographic', phonetic: '/ˌdemə\'ɡræfɪk/', meaning: '人口的' },
      { word: 'humane', phonetic: '/hjʊ\'meɪn/', meaning: '人道的' },
      { word: 'integration', phonetic: '/ˌɪntɪ\'ɡreɪʃən/', meaning: '融合' }
    ],
    phrases: [
      { text: 'carry languages, religions, cuisines, and artistic forms across continents', meaning: '将语言、宗教、饮食和艺术形式带到各大洲' },
      { text: 'retain strong ties to their places of origin while building new lives abroad', meaning: '与原籍保持紧密联系，同时在海外建立新生活' },
      { text: 'the economic and cultural effects of migration on host societies', meaning: '移民对东道国的经济和文化影响' },
      { text: 'successful integration requires deliberate effort from both migrants and hosts', meaning: '成功的融合需要移民和东道国的共同努力' }
    ],
    questions: [
      { id: 'q3-303', question: 'How has migration shaped civilizations, according to the passage?', options: ['It has had no significant impact.', 'It has carried languages, religions, cuisines, and artistic forms across continents for millennia.', 'It only happens during wartime.', 'It applies only to birds and fish.'], answer: 1, explanation: 'The passage states that "Human migration has shaped civilizations for millennia, carrying languages, religions, cuisines, and artistic forms across continents." This characterization matches option B.' },
      { id: 'q3-304', question: 'What makes modern migration patterns increasingly complex?', options: ['A mix of voluntary movement for work or study with forced displacement from conflict and climate change.', 'A ban on all international travel.', 'Strict immigration quotas enforced worldwide.', 'The disappearance of all borders.'], answer: 0, explanation: 'The passage notes that migration patterns have "grown increasingly complex, mixing voluntary movement for work or study with forced displacement caused by conflict and climate change." This complexity matches option A.' },
      { id: 'q3-305', question: 'What is assimilation in the context of migration?', options: ['A type of climate phenomenon.', 'A process of deliberately adopting the customs and language of a new home.', 'A medical treatment for disease.', 'A method of cooking vegetables.'], answer: 1, explanation: 'The passage states that some migrants pursue assimilation, "deliberately adopting the customs and language of their new home." This definition matches option B.' },
      { id: 'q3-306', question: 'What is transnationalism?', options: ['Retaining strong ties to places of origin while building new lives abroad.', 'A worldwide ban on passports.', 'A new type of automobile.', 'A political party platform.'], answer: 0, explanation: 'The passage defines transnationalism as "retaining strong ties to their places of origin while building new lives abroad." This definition matches option A.' },
      { id: 'q3-307', question: 'What factors influence migration outcomes?', options: ['Receiving country policies, diaspora cohesion, and individual circumstances.', 'Only the phase of the moon.', 'Solely random chance.', 'The brand of luggage used.'], answer: 0, explanation: 'The passage states that outcomes depend on "the policies of receiving countries, the size and cohesion of diaspora communities, and individual circumstances." These factors match option A.' },
      { id: 'q3-308', question: 'What does research suggest about migrants\' economic effects?', options: ['On average, migrants contribute positively to economic growth and innovation.', 'Migrants always harm the economy.', 'Migrants only consume public services.', 'Migration has been banned in all economic models.'], answer: 0, explanation: 'The passage states that "research suggests that, on average, migrants contribute positively to economic growth and innovation." This research finding matches option A.' },
      { id: 'q3-309', question: 'How can cultural exchange through migration benefit long-term residents?', options: ['It can enrich art, music, and cuisine, broadening residents\' experiences.', 'It forces residents to leave their homes.', 'It bans all traditional arts.', 'It replaces all native languages immediately.'], answer: 0, explanation: 'The passage notes that "Cultural exchange fostered by migration can enrich art, music, and cuisine, broadening the experience of long-term residents." This enrichment matches option A.' },
      { id: 'q3-310', question: 'How does the author suggest societies should approach migration?', options: ['As a long-running human story requiring humane and effective responses.', 'As a sudden crisis to be solved with force.', 'As a problem that should be ignored entirely.', 'As a fashion trend to be copied by everyone.'], answer: 0, explanation: 'The passage concludes that "Understanding migration as a long-running human story, rather than a sudden crisis, can help societies develop humane and effective responses." This framing matches option A.' }
    ]
  },  {
    id: 'read-lv3-46',
    level: 3,
    serial: 46,
    category: '自然科学',
    title: 'The Frontier of Gene Editing',
    passage:
      'Gene editing has moved from science fiction to laboratory reality with remarkable speed, offering unprecedented power to alter the DNA of living organisms. The most versatile tool is CRISPR-Cas9, a molecular system adapted from bacterial immune defense that allows scientists to cut DNA at precise locations and modify sequences with relative ease. Researchers have used CRISPR to create disease-resistant crops, treat genetic disorders in animals, and explore the basic biology of life. In medicine, the first gene-editing therapies have been approved for conditions such as sickle cell disease, demonstrating that the technology can move safely from bench to bedside. Yet serious ethical questions accompany these advances. Editing the human germline, meaning sperm, eggs, or embryos, would allow changes to be passed to future generations, raising concerns about consent, equity, and the long-term consequences for the human gene pool. Critics worry that germline editing could enable designer babies or be used to non-select against traits unrelated to disease. International scientific bodies have called for temporary moratoria on clinical germline editing until safety and ethical frameworks can be agreed. Off-target effects, in which the editing system alters unintended regions of DNA, remain a technical challenge requiring further refinement. Public engagement and transparent regulation will therefore be essential as gene editing moves from research into wider application, ensuring that its benefits are shared broadly and its risks are carefully managed.',
    vocabulary: [
      { word: 'versatile', phonetic: '/\'vɜːsətaɪl/', meaning: '多用途的' },
      { word: 'molecular', phonetic: '/mə\'lekjʊlə/', meaning: '分子的' },
      { word: 'precise', phonetic: '/prɪ\'saɪs/', meaning: '精确的' },
      { word: 'germline', phonetic: '/\'dʒɜːmlaɪn/', meaning: '种系' },
      { word: 'equity', phonetic: '/\'ekwəti/', meaning: '公平' },
      { word: 'moratorium', phonetic: '/ˌmɒrə\'tɔːriəm/', meaning: '暂停' },
      { word: 'consent', phonetic: '/kən\'sent/', meaning: '同意' },
      { word: 'refinement', phonetic: '/rɪ\'faɪnmənt/', meaning: '精炼' },
      { word: 'transplant', phonetic: '/træns\'plɑːnt/', meaning: '移植' },
      { word: 'regulation', phonetic: '/ˌreɡju\'leɪʃən/', meaning: '监管' }
    ],
    phrases: [
      { text: 'cut DNA at precise locations and modify sequences with relative ease', meaning: '在精确位置切割DNA并相对容易地修改序列' },
      { text: 'allow changes to be passed to future generations through the germline', meaning: '通过种系使变化传递给后代' },
      { text: 'enable designer babies or be used to non-select against traits unrelated to disease', meaning: '可能催生设计婴儿或用于非疾病相关特征的筛选' },
      { text: 'transparent regulation ensures that benefits are shared broadly and risks are managed', meaning: '透明的监管确保利益被广泛共享且风险得到管理' }
    ],
    questions: [
      { id: 'q3-311', question: 'What is CRISPR-Cas9, according to the passage?', options: ['A type of sandwich.', 'A molecular system adapted from bacteria that allows precise DNA editing.', 'A new video game console.', 'A popular music band.'], answer: 1, explanation: 'The passage states that CRISPR-Cas9 is "a molecular system adapted from bacterial immune defense that allows scientists to cut DNA at precise locations." This description matches option B.' },
      { id: 'q3-312', question: 'What applications has CRISPR been used for in research?', options: ['Creating disease-resistant crops, treating genetic disorders in animals, and exploring basic biology.', 'Designing children\'s cartoons.', 'Replacing all modern medicine.', 'Building new types of houses.'], answer: 0, explanation: 'The passage notes that researchers "have used CRISPR to create disease-resistant crops, treat genetic disorders in animals, and explore the basic biology of life." These applications match option A.' },
      { id: 'q3-313', question: 'What medical condition has been treated with approved gene-editing therapies?', options: ['Sickle cell disease.', 'Common seasonal allergies.', 'Mild headaches.', 'Temporary hicness.'], answer: 0, explanation: 'The passage mentions that gene-editing therapies have been approved "for conditions such as sickle cell disease." This condition matches option A.' },
      { id: 'q3-314', question: 'What ethical concerns does germline editing raise?', options: ['Changes would be passed to future generations, raising issues of consent and equity.', 'It makes plants grow faster.', 'It reduces the cost of electricity.', 'It improves the flavor of coffee.'], answer: 0, explanation: 'The passage states that germline editing "would allow changes to be passed to future generations, raising concerns about consent, equity, and the long-term consequences." These ethical concerns match option A.' },
      { id: 'q3-315', question: 'What additional worries do critics express about germline editing?', options: ['It could enable designer babies or be used to non-select against traits unrelated to disease.', 'It could improve educational outcomes.', 'It could reduce air pollution.', 'It could eliminate traffic jams.'], answer: 0, explanation: 'The passage notes that critics worry germline editing "could enable designer babies or be used to non-select against traits unrelated to disease." These additional worries match option A.' },
      { id: 'q3-316', question: 'What have international bodies recommended?', options: ['Temporary moratoria on clinical germline editing until safety and ethics are agreed.', 'Immediate unrestricted clinical use.', 'A complete permanent ban on all biology.', 'Mandatory use in all hospitals today.'], answer: 0, explanation: 'The passage states that "International scientific bodies have called for temporary moratoria on clinical germline editing until safety and ethical frameworks can be agreed." This recommendation matches option A.' },
      { id: 'q3-317', question: 'What technical challenge remains for gene editing?', options: ['Off-target effects, in which unintended regions of DNA are altered.', 'Difficulty reading text on a screen.', 'Lack of electricity in laboratories.', 'Shortage of laboratory glassware.'], answer: 0, explanation: 'The passage notes that "Off-target effects, in which the editing system alters unintended regions of DNA, remain a technical challenge." This challenge matches option A.' },
      { id: 'q3-318', question: 'What does the author emphasize as essential for the future of gene editing?', options: ['Public engagement and transparent regulation to share benefits and manage risks.', 'Complete secrecy from the public.', 'Banishment of all scientists.', 'Universal application without review.'], answer: 0, explanation: 'The passage concludes that "Public engagement and transparent regulation will therefore be essential as gene editing moves from research into wider application." This emphasis matches option A.' }
    ]
  },  {
    id: 'read-lv3-47',
    level: 3,
    serial: 47,
    category: '历史与文明',
    title: 'Cold War Legacies in Science',
    passage:
      'The Cold War, the decades-long geopolitical tension between the United States and the Soviet Union, left deep imprints on the practice and structure of science. Military competition drove massive public investment in research, particularly in physics, aerospace, and computing. The space race, sparked by the launch of Sputnik in 1957, generated enormous funding for rocket science, satellite technology, and materials engineering, eventually producing Apollo missions and global communications networks. Defense agencies funded the development of the internet\'s precursors, advanced materials, and the early architecture of artificial intelligence research. Nuclear physics flourished under the shadow of weapons programs, producing both devastating technologies and foundational discoveries about matter. At the same time, the Cold War shaped scientific institutions in less visible ways. Universities became deeply entangled with defense funding, sometimes at the cost of open inquiry. International scientific exchange was constrained by ideological suspicion, with conferences split and collaborations restricted. Whistleblowers such as Andrei Sakharov raised ethical questions about scientists\' responsibilities, helping to inspire later discussions of research ethics. The end of the Cold War reduced some military research budgets but also revealed vast networks of previously secret laboratories. Today, Cold War legacies continue to influence science policy: debates over the militarization of research, the role of national security in restricting publication, and the balance between basic and applied science all trace back to that era. Understanding these legacies helps societies navigate the complex relationship between science, state power, and the public good.',
    vocabulary: [
      { word: 'geopolitical', phonetic: '/ˌdʒiːəʊpə\'lɪtɪkəl/', meaning: '地缘政治的' },
      { word: 'aerospace', phonetic: '/\'eərəʊspeɪs/', meaning: '航空航天' },
      { word: 'rocket', phonetic: '/\'rɒkɪt/', meaning: '火箭' },
      { word: 'satellite', phonetic: '/\'sætəlaɪt/', meaning: '卫星' },
      { word: 'precursor', phonetic: '/priː\'kɜːsə/', meaning: '先驱' },
      { word: 'ideological', phonetic: '/ˌaɪdiə\'lɒdʒɪkəl/', meaning: '意识形态的' },
      { word: 'whistleblower', phonetic: '/\'wɪsbəlˌbləʊə/', meaning: '吹哨人' },
      { word: 'foundational', phonetic: '/faʊn\'deɪʃənəl/', meaning: '基础的' },
      { word: 'militarization', phonetic: '/ˌmɪlɪtəraɪ\'zeɪʃən/', meaning: '军事化' },
      { word: 'applied', phonetic: '/ə\'plaɪd/', meaning: '应用的' }
    ],
    phrases: [
      { text: 'military competition drove massive public investment in research', meaning: '军事竞争推动了大规模的公共科研投入' },
      { text: 'universities became deeply entangled with defense funding', meaning: '大学与国防经费深度交织在一起' },
      { text: 'raised ethical questions about scientists\' responsibilities to society', meaning: '提出了关于科学家对社会责任的伦理问题' },
      { text: 'debates over the militarization of research and the role of national security', meaning: '关于研究军事化和国家安全角色的争论' }
    ],
    questions: [
      { id: 'q3-319', question: 'What does the passage identify as the main cause of major Cold War science investment?', options: ['A love of poetry among politicians.', 'Military competition between the United States and the Soviet Union.', 'Random chance.', 'A shortage of movies to watch.'], answer: 1, explanation: 'The passage states that "Military competition drove massive public investment in research." This competition is identified as the cause, matching option B.' },
      { id: 'q3-320', question: 'What event in 1957 helped spark the space race?', options: ['The launch of Sputnik by the Soviet Union.', 'The invention of the bicycle.', 'The publication of a famous cookbook.', 'An international film festival.'], answer: 0, explanation: 'The passage states that "The space race, sparked by the launch of Sputnik in 1957, generated enormous funding." This event matches option A.' },
      { id: 'q3-321', question: 'What technologies benefited from space race funding, according to the passage?', options: ['Rocket science, satellite technology, and materials engineering.', 'Cooking utensils only.', 'Underwater basket weaving.', 'Traditional pottery alone.'], answer: 0, explanation: 'The passage notes that the space race "generated enormous funding for rocket science, satellite technology, and materials engineering, eventually producing Apollo missions and global communications networks." These technologies match option A.' },
      { id: 'q3-322', question: 'What non-space technologies did Cold War funding help develop?', options: ['The internet\'s precursors, advanced materials, and early AI research.', 'New flavors of toothpaste.', 'Coloring books for adults.', 'Traditional wooden toys.'], answer: 0, explanation: 'The passage states that defense agencies funded "the development of the internet\'s precursors, advanced materials, and the early architecture of artificial intelligence research." These technologies match option A.' },
      { id: 'q3-323', question: 'How did the Cold War shape universities, according to the passage?', options: ['They became deeply entangled with defense funding, sometimes at the cost of open inquiry.', 'They banned all scientific research.', 'They expelled all science students.', 'They required every lecture to be in Latin.'], answer: 0, explanation: 'The passage notes that "Universities became deeply entangled with defense funding, sometimes at the cost of open inquiry." This entanglement matches option A.' },
      { id: 'q3-324', question: 'What ethical questions did whistleblowers like Andrei Sakharov raise?', options: ['Questions about scientists\' responsibilities to society.', 'Questions about the price of bread.', 'Questions about sports rules.', 'Questions about hairstyles.'], answer: 0, explanation: 'The passage notes that Sakharov "raised ethical questions about scientists\' responsibilities, helping to inspire later discussions of research ethics." These ethical questions match option A.' },
      { id: 'q3-325', question: 'What did the end of the Cold War reveal?', options: ['Vast networks of previously secret laboratories.', 'That the moon was made of cheese.', 'That all scientific laws were invalid.', 'That all research had been wasted.'], answer: 0, explanation: 'The passage states that "the end of the Cold War reduced some military research budgets but also revealed vast networks of previously secret laboratories." This revelation matches option A.' },
      { id: 'q3-326', question: 'Which contemporary debates do the authors trace back to Cold War legacies?', options: ['Militarization of research, national security\'s role in restricting publication, and the balance between basic and applied science.', 'Debates about pizza toppings.', 'Debates about fashion colors.', 'Debates about pet ownership.'], answer: 0, explanation: 'The passage concludes that "debates over the militarization of research, the role of national security in restricting publication, and the balance between basic and applied science all trace back to that era." These debates match option A.' }
    ]
  },  {
    id: 'read-lv3-48',
    level: 3,
    serial: 48,
    category: '教育',
    title: 'Critical Thinking Across Disciplines',
    passage:
      'Critical thinking, the disciplined analysis of evidence and arguments, is widely regarded as a central aim of education. Although the precise emphasis varies, the core skills include identifying assumptions, evaluating evidence, recognizing logical fallacies, distinguishing correlation from causation, and considering alternative perspectives. These habits of mind are essential in every discipline, from the natural sciences and history to philosophy and the arts. In the natural sciences, critical thinking helps researchers design controlled experiments, interpret data cautiously, and revise theories in light of new findings. In history, it requires attention to source reliability, perspective, and the social context in which documents were produced. In philosophy, it means rigorously examining the premises of arguments and the coherence of conceptual frameworks. Across all fields, critical thinkers must also reflect on the ethical implications of their conclusions, recognizing that knowledge production has social consequences. Effective teaching of critical thinking moves beyond rote memorization. It engages students with real-world problems, encourages collaborative inquiry, and provides structured opportunities to practice reasoning aloud. Assessment must also evolve: multiple-choice exams rarely reveal whether students can construct and defend arguments. Portfolios, research projects, oral examinations, and peer-reviewed writing offer richer evidence of critical capacity. Ultimately, critical thinking is not a single technique but a lifelong disposition of curiosity, humility, and care, qualities that education should nurture in every learner regardless of their eventual profession.',
    vocabulary: [
      { word: 'disciplined', phonetic: '/\'dɪsɪplɪnd/', meaning: '严格的；有纪律的' },
      { word: 'assumption', phonetic: '/ə\'sʌmpʃən/', meaning: '假设' },
      { word: 'fallacy', phonetic: '/\'fæləsi/', meaning: '谬误' },
      { word: 'correlation', phonetic: '/ˌkɒrə\'leɪʃən/', meaning: '相关性' },
      { word: 'causation', phonetic: '/kɔː\'zeɪʃən/', meaning: '因果关系' },
      { word: 'coherence', phonetic: '/kəʊ\'hɪərəns/', meaning: '连贯性' },
      { word: 'rigorously', phonetic: '/\'rɪɡərəsli/', meaning: '严格地' },
      { word: 'disposition', phonetic: '/ˌdɪspə\'zɪʃən/', meaning: '倾向；性情' },
      { word: 'humility', phonetic: '/hjʊ\'mɪləti/', meaning: '谦逊' },
      { word: 'nurture', phonetic: '/\'nɜːtʃə/', meaning: '培养' }
    ],
    phrases: [
      { text: 'identify assumptions and evaluate evidence in any field of inquiry', meaning: '在任何研究领域中识别假设并评估证据' },
      { text: 'distinguish correlation from causation in interpreting data', meaning: '在解读数据时区分相关性和因果关系' },
      { text: 'engage students with real-world problems and encourage collaborative inquiry', meaning: '用真实世界的问题吸引学生并鼓励协作探究' },
      { text: 'a lifelong disposition of curiosity, humility, and care', meaning: '一种持续一生的好奇心、谦逊和审慎的性情' }
    ],
    questions: [
      { id: 'q3-327', question: 'What is critical thinking, according to the passage?', options: ['The disciplined analysis of evidence and arguments.', 'A type of physical exercise.', 'A new social media platform.', 'A flavor of ice cream.'], answer: 0, explanation: 'The passage defines critical thinking as "the disciplined analysis of evidence and arguments." This definition matches option A.' },
      { id: 'q3-328', question: 'What core skills does critical thinking include?', options: ['Identifying assumptions, evaluating evidence, recognizing fallacies, distinguishing correlation from causation, and considering alternative perspectives.', 'Memorizing phone numbers.', 'Avoiding all disagreements.', 'Only reading textbooks cover to cover.'], answer: 0, explanation: 'The passage lists "identifying assumptions, evaluating evidence, recognizing logical fallacies, distinguishing correlation from causation, and considering alternative perspectives." These skills match option A.' },
      { id: 'q3-329', question: 'How does critical thinking function in the natural sciences, according to the passage?', options: ['It helps design controlled experiments, interpret data cautiously, and revise theories.', 'It encourages researchers to ignore all evidence.', 'It requires scientists to never revise their ideas.', 'It bans the use of mathematics.'], answer: 0, explanation: 'The passage states that "In the natural sciences, critical thinking helps researchers design controlled experiments, interpret data cautiously, and revise theories in light of new findings." This function matches option A.' },
      { id: 'q3-330', question: 'What must critical thinkers in history pay attention to?', options: ['Source reliability, perspective, and the social context of documents.', 'The price of ink used in manuscripts.', 'The color of book covers only.', 'How loudly historical documents are read.'], answer: 0, explanation: 'The passage states that in history, critical thinking "requires attention to source reliability, perspective, and the social context in which documents were produced." These attentions match option A.' },
      { id: 'q3-331', question: 'How is critical thinking applied in philosophy?', options: ['By rigorously examining premises and the coherence of conceptual frameworks.', 'By avoiding all philosophical questions.', 'By adopting the first idea that comes to mind.', 'By replacing arguments with slogans.'], answer: 0, explanation: 'The passage states that in philosophy, critical thinking "means rigorously examining the premises of arguments and the coherence of conceptual frameworks." This application matches option A.' },
      { id: 'q3-332', question: 'What must critical thinkers reflect on across all fields?', options: ['The ethical implications of their conclusions and the social consequences of knowledge.', 'The taste of their lunch.', 'The color of their notebooks.', 'The day of the week.'], answer: 0, explanation: 'The passage states that critical thinkers must "reflect on the ethical implications of their conclusions, recognizing that knowledge production has social consequences." This reflection matches option A.' },
      { id: 'q3-333', question: 'What teaching approaches does the passage recommend for critical thinking?', options: ['Engagement with real-world problems, collaborative inquiry, and structured practice of reasoning aloud.', 'Strict rote memorization only.', 'Silent reading with no discussion.', 'Endless repetition of the same fact.'], answer: 0, explanation: 'The passage notes that effective teaching "engages students with real-world problems, encourages collaborative inquiry, and provides structured opportunities to practice reasoning aloud." These approaches match option A.' },
      { id: 'q3-334', question: 'What is the author\'s broader view of critical thinking?', options: ['It is a lifelong disposition of curiosity, humility, and care that education should nurture.', 'It applies only to philosophy students.', 'It is no longer needed in the modern world.', 'It should be restricted to a few elite scholars.'], answer: 0, explanation: 'The passage concludes that "critical thinking is not a single technique but a lifelong disposition of curiosity, humility, and care, qualities that education should nurture in every learner." This broader view matches option A.' }
    ]
  },  {
    id: 'read-lv3-49',
    level: 3,
    serial: 49,
    category: '艺术与文学',
    title: 'Documentary Film as Social Mirror',
    passage:
      'Documentary film occupies a unique place among art forms, combining aesthetic ambition with the claim to represent reality. Unlike fiction, documentary draws its power from the belief that what is shown actually happened, or at least reflects genuine social conditions. The history of documentary stretches back to early travelogues and newsreels, but the form matured in the twentieth century as filmmakers such as Robert Flaherty, John Grierson, and later Frederick Wiseman, Agnes Varda, and Ava DuVernay expanded its expressive range. Observational documentaries aim to capture subjects with minimal interference, allowing events to unfold naturally before the camera. Expository documentaries use voice-over narration to argue a position, while participatory works involve the filmmaker directly in the scene. More recent approaches blend animation, archival footage, and personal essay, reflecting the hybrid nature of contemporary storytelling. Documentary filmmakers often grapple with difficult ethical questions: how to treat vulnerable subjects, how to balance fairness with narrative coherence, and how to avoid distorting the truth through editing. The genre has proven especially powerful as a social mirror, exposing injustice, raising marginalized voices, and shaping public debate on issues ranging from environmental destruction to human rights. In the age of streaming platforms and smartphones, when nearly anyone can record and distribute moving images, documentary\'s central question has become both more urgent and more democratic: how do we distinguish credible testimony from manipulation, and what responsibilities do viewers share with makers in maintaining the integrity of the recorded image?',
    vocabulary: [
      { word: 'aesthetic', phonetic: '/iːs\'θetɪk/', meaning: '美学的' },
      { word: 'representation', phonetic: '/ˌreprɪzen\'teɪʃən/', meaning: '表现；再现' },
      { word: 'observational', phonetic: '/ˌɒbzə\'veɪʃənəl/', meaning: '观察式的' },
      { word: 'expository', phonetic: '/ɪk\'spɒzɪtəri/', meaning: '说明性的' },
      { word: 'participatory', phonetic: '/pɑːˌtɪsɪ\'peɪtəri/', meaning: '参与式的' },
      { word: 'archive', phonetic: '/\'ɑːkaɪv/', meaning: '档案' },
      { word: 'integrity', phonetic: '/ɪn\'teɡrəti/', meaning: '完整性' },
      { word: 'manipulation', phonetic: '/məˌnɪpjʊ\'leɪʃən/', meaning: '操纵' },
      { word: 'marginalized', phonetic: '/\'mɑːdʒɪnəlaɪzd/', meaning: '边缘化的' },
      { word: 'democratic', phonetic: '/ˌdemə\'krætɪk/', meaning: '民主的' }
    ],
    phrases: [
      { text: 'combine aesthetic ambition with the claim to represent reality', meaning: '将美学抱负与再现现实的诉求结合起来' },
      { text: 'capture subjects with minimal interference before the camera', meaning: '在镜头前以最少的干预记录拍摄对象' },
      { text: 'shape public debate on issues ranging from environmental destruction to human rights', meaning: '塑造从环境破坏到人权等议题的公共辩论' },
      { text: 'distinguish credible testimony from manipulation in the recorded image', meaning: '在记录的影像中区分可信的证词与操纵' }
    ],
    questions: [
      { id: 'q3-335', question: 'What makes documentary film unique compared to fiction, according to the passage?', options: ['It combines aesthetic ambition with the claim to represent reality.', 'It is always shorter than feature films.', 'It is produced only in Hollywood.', 'It avoids all use of sound.'], answer: 0, explanation: 'The passage states that documentary film "occupies a unique place among art forms, combining aesthetic ambition with the claim to represent reality." This uniqueness matches option A.' },
      { id: 'q3-336', question: 'Which directors helped expand the documentary form in the twentieth century?', options: ['Robert Flaherty, John Grierson, Frederick Wiseman, Agnes Varda, and Ava DuVernay.', 'Only directors working today.', 'No directors at all.', 'Only those who worked in silent films.'], answer: 0, explanation: 'The passage names "Robert Flaherty, John Grierson, and later Frederick Wiseman, Agnes Varda, and Ava DuVernay" as filmmakers who expanded the form. This list matches option A.' },
      { id: 'q3-337', question: 'What do observational documentaries aim to do?', options: ['Capture subjects with minimal interference, allowing events to unfold naturally.', 'Reenact every scene.', 'Use only animated footage.', 'Require all participants to follow scripts.'], answer: 0, explanation: 'The passage states that observational documentaries "aim to capture subjects with minimal interference, allowing events to unfold naturally before the camera." This aim matches option A.' },
      { id: 'q3-338', question: 'How do expository documentaries differ from observational ones?', options: ['They use voice-over narration to argue a position.', 'They feature no human voices.', 'They are filmed only at night.', 'They are always made for television.'], answer: 0, explanation: 'The passage states that "Expository documentaries use voice-over narration to argue a position." This distinction matches option A.' },
      { id: 'q3-339', question: 'What ethical questions do documentary filmmakers face?', options: ['How to treat vulnerable subjects, balance fairness with narrative, and avoid distorting truth.', 'How to maximize popcorn sales.', 'How to avoid showing faces.', 'How to choose the most flattering camera angles.'], answer: 0, explanation: 'The passage notes that filmmakers grapple with "how to treat vulnerable subjects, how to balance fairness with narrative coherence, and how to avoid distorting the truth through editing." These questions match option A.' },
      { id: 'q3-340', question: 'How has documentary served as a social mirror?', options: ['By exposing injustice, raising marginalized voices, and shaping public debate.', 'By avoiding all controversial subjects.', 'By promoting a single political party.', 'By refusing to address any real issues.'], answer: 0, explanation: 'The passage notes that documentary has proven "especially powerful as a social mirror, exposing injustice, raising marginalized voices, and shaping public debate." This role matches option A.' },
      { id: 'q3-341', question: 'What new challenge has streaming and smartphone technology created for documentary?', options: ['It is now harder to distinguish credible testimony from manipulation.', 'All documentaries have been banned from streaming platforms.', 'Only amateur footage is allowed online.', 'Documentaries must now be exactly one minute long.'], answer: 0, explanation: 'The passage notes that in the age of streaming and smartphones, the central question is "how do we distinguish credible testimony from manipulation." This challenge matches option A.' },
      { id: 'q3-342', question: 'What responsibility does the author say viewers share with makers?', options: ['Maintaining the integrity of the recorded image.', 'Filming every public event personally.', 'Paying for cinema tickets every weekend.', 'Refusing to watch documentaries entirely.'], answer: 0, explanation: 'The passage concludes by asking "what responsibilities do viewers share with makers in maintaining the integrity of the recorded image." This shared responsibility matches option A.' }
    ]
  },  {
    id: 'read-lv3-50',
    level: 3,
    serial: 50,
    category: '环境与气候',
    title: 'Urban Planning for Climate Resilience',
    passage:
      'As climate change intensifies, urban planners are increasingly tasked with designing cities that can withstand both slow-onset stresses and sudden shocks. Urban areas concentrate people, infrastructure, and economic activity, but they also concentrate vulnerability: heat islands intensify heat waves, paved surfaces worsen floods, and aging infrastructure struggles to absorb the stresses of a changing climate. Planners now draw on a growing toolkit of climate-resilient strategies. Green roofs, street trees, and urban wetlands cool cities through shade and evapotranspiration, while permeable pavements and restored floodplains absorb stormwater that would otherwise overwhelm drainage systems. Coastal cities are investing in living shorelines, sea walls, and managed retreat from the most exposed areas. Energy systems are being decentralized, with rooftop solar, district heating, and microgrids providing backup during climate-related outages. Public health considerations are woven into plans, including shaded bus stops, cooled public buildings as refuge during heat waves, and expanded green space to promote physical activity. Effective climate-resilient planning also foregrounds equity, ensuring that lower-income neighborhoods, which often suffer the worst heat and flood risks, receive protective investments. Public participation is vital: residents bring local knowledge about flood patterns, shade, and vulnerability that planners working from satellite maps alone may miss. Although no city can become fully climate-proof, thoughtful planning can dramatically reduce losses, shorten recovery times, and produce urban environments that are healthier and more enjoyable even as the climate changes around them.',
    vocabulary: [
      { word: 'resilience', phonetic: '/rɪ\'zɪliəns/', meaning: '韧性' },
      { word: 'vulnerability', phonetic: '/ˌvʌlnərə\'bɪləti/', meaning: '脆弱性' },
      { word: 'evapotranspiration', phonetic: '/iːˌvæpəʊˌtrænspɪ\'reɪʃən/', meaning: '蒸散' },
      { word: 'permeable', phonetic: '/\'pɜːmiəbəl/', meaning: '可渗透的' },
      { word: 'stormwater', phonetic: '/\'stɔːmˌwɔːtə/', meaning: '雨水' },
      { word: 'shoreline', phonetic: '/\'ʃɔːlaɪn/', meaning: '海岸线' },
      { word: 'decentralize', phonetic: '/diː\'sentrəlaɪz/', meaning: '分散化' },
      { word: 'microgrid', phonetic: '/\'maɪkrəʊɡrɪd/', meaning: '微电网' },
      { word: 'retreat', phonetic: '/rɪ\'triːt/', meaning: '撤退；后退' },
      { word: 'equity', phonetic: '/\'ekwəti/', meaning: '公平' }
    ],
    phrases: [
      { text: 'withstand both slow-onset stresses and sudden climate shocks', meaning: '同时承受缓慢发展的压力和突如其来的气候冲击' },
      { text: 'cool cities through shade and evapotranspiration from vegetation', meaning: '通过植被的遮荫和蒸散来为城市降温' },
      { text: 'absorb stormwater that would otherwise overwhelm drainage systems', meaning: '吸收雨水以免排水系统不堪重负' },
      { text: 'foreground equity so that vulnerable neighborhoods receive protective investments', meaning: '把公平放在前面，让脆弱社区获得保护性投资' }
    ],
    questions: [
      { id: 'q3-343', question: 'Why are urban areas both concentrated and vulnerable, according to the passage?', options: ['Because cities concentrate people and infrastructure but also intensify heat-islands, flooding, and infrastructure stress.', 'Because cities are built entirely on sand.', 'Because all urban residents are very wealthy.', 'Because cities have no public services.'], answer: 0, explanation: 'The passage states that "Urban areas concentrate people, infrastructure, and economic activity, but they also concentrate vulnerability." This concentration of vulnerability matches option A.' },
      { id: 'q3-344', question: 'How do green roofs, street trees, and urban wetlands cool cities?', options: ['Through shade and evapotranspiration from vegetation.', 'By releasing cold air from underground caves.', 'By covering cities with ice cubes.', 'By using electric fans in every home.'], answer: 0, explanation: 'The passage states that these features "cool cities through shade and evapotranspiration." This mechanism matches option A.' },
      { id: 'q3-345', question: 'How do permeable pavements help with flooding?', options: ['They absorb stormwater that would otherwise overwhelm drainage systems.', 'They reflect sunlight into space.', 'They produce electricity when stepped on.', 'They change color when wet.'], answer: 0, explanation: 'The passage states that permeable pavements and restored floodplains "absorb stormwater that would otherwise overwhelm drainage systems." This flood-control function matches option A.' },
      { id: 'q3-346', question: 'What coastal strategies do cities adopt?', options: ['Living shorelines, sea walls, and managed retreat from exposed areas.', 'Banning all seaside construction permanently.', 'Draining the entire ocean.', 'Building underground submarine bases.'], answer: 0, explanation: 'The passage states that "Coastal cities are investing in living shorelines, sea walls, and managed retreat from the most exposed areas." These strategies match option A.' },
      { id: 'q3-347', question: 'How are energy systems being made more climate-resilient?', options: ['Through decentralized approaches like rooftop solar, district heating, and microgrids.', 'By eliminating all electricity production.', 'By requiring every citizen to own a diesel generator.', 'By banning renewable energy sources.'], answer: 0, explanation: 'The passage states that "Energy systems are being decentralized, with rooftop solar, district heating, and microgrids providing backup during climate-related outages." These measures match option A.' },
      { id: 'q3-348', question: 'What public health measures are part of resilient urban planning?', options: ['Shaded bus stops, cooled public buildings as refuge, and expanded green space.', 'Removing all benches from sidewalks.', 'Banning exercise in parks.', 'Requiring everyone to wear winter coats in summer.'], answer: 0, explanation: 'The passage mentions "shaded bus stops, cooled public buildings as refuge during heat waves, and expanded green space to promote physical activity." These measures match option A.' },
      { id: 'q3-349', question: 'Why is equity an important part of climate-resilient planning?', options: ['Lower-income neighborhoods often face worse heat and flood risks and need protective investments.', 'Because richer neighborhoods always have fewer risks.', 'Because equity applies only to historic buildings.', 'Because climate change ignores wealthy areas entirely.'], answer: 0, explanation: 'The passage notes that effective planning "foregrounds equity, ensuring that lower-income neighborhoods, which often suffer the worst heat and flood risks, receive protective investments." This equity reasoning matches option A.' },
      { id: 'q3-350', question: 'What is the author\'s overall conclusion about climate-resilient urban planning?', options: ['No city can be fully climate-proof, but thoughtful planning reduces losses and produces healthier environments.', 'Every city is already perfectly resilient.', 'Climate change is not real.', 'All cities must be abandoned permanently.'], answer: 0, explanation: 'The passage concludes that "no city can become fully climate-proof, [but] thoughtful planning can dramatically reduce losses, shorten recovery times, and produce urban environments that are healthier and more enjoyable." This conclusion matches option A.' }
    ]
  },]
