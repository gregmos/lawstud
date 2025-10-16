// For GitHub Pages: React loaded via CDN
const { useState } = React;

// Простые SVG иконки
const CheckCircle = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const AlertCircle = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const XCircle = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);

const Star = ({ className }) => {
  const isFilled = className && className.includes('fill-current');
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isFilled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
};

const LawStudentAssessment = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [criticalAnswers, setCriticalAnswers] = useState({});

  const questions = [
    {
      id: 1,
      category: 'career_expectations',
      text: 'Как быстро для вас важно получение достойной заработной платы после выпуска?',
      options: [
        { value: 5, label: 'Очень важно начать зарабатывать сразу после выпуска', weight: 1.2 },
        { value: 3, label: 'Готов(а) подождать 2-3 года ради лучших перспектив', weight: 1.0 },
        { value: 1, label: 'Готов(а) инвестировать 5+ лет в развитие карьеры', weight: 0.8 }
      ]
    },
    {
      id: 2,
      category: 'personality',
      text: 'Считаете ли вы себя предпринимательски настроенным человеком?',
      options: [
        { value: 5, label: 'Да, я постоянно ищу новые возможности и инициативен', weight: 1.5 },
        { value: 3, label: 'Иногда проявляю инициативу, но предпочитаю стабильность', weight: 1.0 },
        { value: 1, label: 'Нет, предпочитаю четкие инструкции и структуру', weight: 0.7 }
      ]
    },
    {
      id: 3,
      category: 'mobility',
      text: 'Хотите ли вы иметь возможность работать в разных странах?',
      options: [
        { value: 5, label: 'Да, международная карьера - моя цель', weight: 1.3 },
        { value: 3, label: 'Возможно, но это не приоритет', weight: 1.0 },
        { value: 1, label: 'Нет, хочу работать в своей стране/городе', weight: 0.9 }
      ]
    },
    {
      id: 4,
      category: 'motivation',
      text: 'Почему вы выбрали юридическое образование?',
      options: [
        { value: 5, label: 'Это моя осознанная мечта, я увлечен правом', weight: 1.5 },
        { value: 3, label: 'Мне интересно, но были и другие варианты', weight: 1.1 },
        { value: 1, label: 'По совету родителей/окружения или за компанию', weight: 0.8 }
      ]
    },
    {
      id: 5,
      category: 'work_life_balance',
      text: 'Насколько важен для вас баланс работы и личной жизни?',
      options: [
        { value: 5, label: 'Готов(а) жертвовать личным временем ради карьеры', weight: 1.2 },
        { value: 3, label: 'Важен баланс, но готов(а) к периодическим перегрузкам', weight: 1.0 },
        { value: 1, label: 'Личная жизнь превыше всего, нужен строгий график', weight: 0.8 }
      ]
    },
    {
      id: 6,
      category: 'stress_tolerance',
      text: 'Как вы справляетесь с конфликтными ситуациями?',
      options: [
        { value: 5, label: 'Конфликты меня мотивируют, я умею их разрешать', weight: 1.4 },
        { value: 3, label: 'Справляюсь, но они выматывают эмоционально', weight: 1.0 },
        { value: 1, label: 'Конфликты причиняют мне сильный дискомфорт', weight: 0.8 }
      ]
    },
    {
      id: 7,
      category: 'work_style',
      text: 'Как вы относитесь к работе с большими объемами документов?',
      options: [
        { value: 5, label: 'Люблю работать с деталями и документацией', weight: 1.4 },
        { value: 3, label: 'Нормально отношусь, если это часть интересной задачи', weight: 1.0 },
        { value: 1, label: 'Рутинная работа с бумагами меня угнетает', weight: 0.8 }
      ]
    },
    {
      id: 8,
      category: 'learning',
      text: 'Готовы ли вы постоянно учиться и следить за изменениями законодательства?',
      options: [
        { value: 5, label: 'Да, я люблю постоянно развиваться и учиться новому', weight: 1.4 },
        { value: 3, label: 'Готов(а) учиться, когда это необходимо', weight: 1.0 },
        { value: 1, label: 'Предпочитаю применять уже полученные знания', weight: 0.8 }
      ]
    },
    {
      id: 9,
      category: 'communication',
      text: 'Насколько комфортно вы чувствуете себя в публичных выступлениях?',
      options: [
        { value: 5, label: 'Очень комфортно, люблю выступать публично', weight: 1.4 },
        { value: 3, label: 'Могу выступать, но нервничаю', weight: 1.0 },
        { value: 1, label: 'Публичные выступления - мой кошмар', weight: 0.7 }
      ]
    },
    {
      id: 10,
      category: 'career_expectations',
      text: 'Что важнее: быстрый рост зарплаты или долгосрочные перспективы без потолка?',
      options: [
        { value: 1, label: 'Быстрый рост зарплаты, даже если будет потолок', weight: 0.8 },
        { value: 3, label: 'Баланс между скоростью роста и перспективами', weight: 1.0 },
        { value: 5, label: 'Долгосрочные перспективы, готов(а) ждать', weight: 1.5 }
      ]
    },
    {
      id: 11,
      category: 'work_style',
      text: 'Как вы относитесь к работе в условиях жестких дедлайнов?',
      options: [
        { value: 5, label: 'Дедлайны мобилизуют меня, работаю эффективнее', weight: 1.3 },
        { value: 3, label: 'Справляюсь, но это стрессово', weight: 1.0 },
        { value: 1, label: 'Дедлайны парализуют меня', weight: 0.8 }
      ]
    },
    {
      id: 12,
      category: 'intellectual',
      text: 'Интересуетесь ли вы сложными интеллектуальными задачами и головоломками?',
      options: [
        { value: 5, label: 'Да, это то, что меня вдохновляет', weight: 1.4 },
        { value: 3, label: 'Иногда интересно, но не всегда', weight: 1.0 },
        { value: 1, label: 'Предпочитаю практические, а не теоретические задачи', weight: 0.8 }
      ]
    },
    {
      id: 13,
      category: 'ethics',
      text: 'Насколько важны для вас этические аспекты работы?',
      options: [
        { value: 5, label: 'Крайне важны, не готов(а) идти на компромиссы', weight: 1.4 },
        { value: 3, label: 'Важны, но понимаю необходимость гибкости', weight: 1.0 },
        { value: 1, label: 'Прагматизм важнее этических соображений', weight: 0.7 }
      ]
    },
    {
      id: 14,
      category: 'personality',
      text: 'Как часто вы интересуетесь новостями, трендами, новыми знаниями?',
      options: [
        { value: 5, label: 'Ежедневно, я очень любознательный человек', weight: 1.5 },
        { value: 3, label: 'Периодически, когда есть время', weight: 1.0 },
        { value: 1, label: 'Редко, только если это нужно для работы/учебы', weight: 0.6 }
      ]
    },
    {
      id: 15,
      category: 'work_environment',
      text: 'В какой рабочей среде вы предпочитаете работать?',
      options: [
        { value: 5, label: 'Динамичная, конкурентная среда крупной компании', weight: 1.2 },
        { value: 3, label: 'Средняя компания с балансом стабильности и динамики', weight: 1.0 },
        { value: 2, label: 'Небольшая компания или госструктура со стабильностью', weight: 0.8 }
      ]
    },
    {
      id: 16,
      category: 'writing',
      text: 'Как вы относитесь к написанию длинных, структурированных текстов?',
      options: [
        { value: 5, label: 'Люблю писать, могу часами работать над текстом', weight: 1.4 },
        { value: 3, label: 'Пишу нормально, когда необходимо', weight: 1.0 },
        { value: 1, label: 'Письменная работа дается мне с трудом', weight: 0.8 }
      ]
    },
    {
      id: 17,
      category: 'analytical',
      text: 'Насколько хорошо вы работаете с большими объемами информации?',
      options: [
        { value: 5, label: 'Отлично, люблю анализировать и систематизировать', weight: 1.4 },
        { value: 3, label: 'Справляюсь, но это требует усилий', weight: 1.0 },
        { value: 1, label: 'Большие объемы информации меня перегружают', weight: 0.8 }
      ]
    },
    {
      id: 18,
      category: 'client_work',
      text: 'Готовы ли вы работать с требовательными клиентами?',
      options: [
        { value: 5, label: 'Да, это часть профессии, умею находить подход', weight: 1.4 },
        { value: 3, label: 'Готов(а), но это выматывает', weight: 1.0 },
        { value: 1, label: 'Предпочитаю минимум контактов с клиентами', weight: 0.8 }
      ]
    },
    {
      id: 19,
      category: 'monotony',
      text: 'Как вы переносите монотонную, повторяющуюся работу?',
      options: [
        { value: 5, label: 'Нормально, понимаю её важность, она меня не раздражает', weight: 1.2 },
        { value: 3, label: 'Терплю, если она чередуется с интересными задачами', weight: 1.0 },
        { value: 1, label: 'Монотонность убивает мою мотивацию', weight: 0.8 }
      ]
    },
    {
      id: 20,
      category: 'career_path',
      text: 'Как вы представляете себе идеальную карьеру через 10 лет?',
      options: [
        { value: 5, label: 'Руководящая позиция с влиянием на решения', weight: 1.4 },
        { value: 3, label: 'Стабильная позиция эксперта в своей области', weight: 1.0 },
        { value: 1, label: 'Комфортная работа с балансом жизни', weight: 0.8 }
      ]
    },
    {
      id: 21,
      category: 'financial',
      text: 'Готовы ли вы к тому, что первые 2-3 года зарплата может быть скромной?',
      options: [
        { value: 5, label: 'Да, это нормально для развития карьеры', weight: 1.4 },
        { value: 3, label: 'Готов(а), но с трудом', weight: 1.0 },
        { value: 1, label: 'Нет, мне нужна достойная зарплата сразу', weight: 0.8 }
      ]
    },
    {
      id: 22,
      category: 'perfectionism',
      text: 'Насколько вы перфекционист в работе?',
      options: [
        { value: 5, label: 'Очень, каждая деталь должна быть идеальной', weight: 1.3 },
        { value: 3, label: 'Стремлюсь к качеству, но понимаю реальность', weight: 1.0 },
        { value: 1, label: 'Главное - результат, детали вторичны', weight: 0.8 }
      ]
    },
    {
      id: 23,
      category: 'overtime',
      text: 'Как вы относитесь к возможности работать сверхурочно и по выходным?',
      options: [
        { value: 5, label: 'Нормально, если работа интересная и оплачивается', weight: 1.2 },
        { value: 3, label: 'В исключительных случаях - да', weight: 1.0 },
        { value: 1, label: 'Недопустимо, мне нужны четкие границы', weight: 0.8 }
      ]
    },
    {
      id: 24,
      category: 'networking',
      text: 'Насколько вам комфортно заводить профессиональные связи (нетворкинг)?',
      options: [
        { value: 5, label: 'Очень комфортно, я люблю знакомиться с людьми', weight: 1.4 },
        { value: 3, label: 'Могу при необходимости, но это требует усилий', weight: 1.0 },
        { value: 1, label: 'Это даётся мне очень тяжело', weight: 0.8 }
      ]
    },
    {
      id: 25,
      category: 'alternative',
      text: 'Рассматривали ли вы альтернативные профессии так же серьезно, как юриспруденцию?',
      options: [
        { value: 1, label: 'Да, у меня было много вариантов', weight: 0.7 },
        { value: 3, label: 'Были мысли, но право всё же приоритетнее', weight: 1.0 },
        { value: 5, label: 'Нет, только юриспруденция', weight: 1.5 }
      ]
    },
    {
      id: 26,
      category: 'mobility',
      text: 'Насколько важна для вас возможность свободно путешествовать и работать из разных стран?',
      options: [
        { value: 5, label: 'Критически важно, я хочу работать и путешествовать одновременно', weight: 1.4 },
        { value: 3, label: 'Было бы приятно, но не обязательно', weight: 1.0 },
        { value: 1, label: 'Не важно, предпочитаю стабильную локацию', weight: 0.8 }
      ]
    }
  ];

  const handleAnswer = (questionId, value, weight) => {
    setAnswers({
      ...answers,
      [questionId]: { value, weight }
    });
  };

  const toggleCritical = (questionId) => {
    setCriticalAnswers({
      ...criticalAnswers,
      [questionId]: !criticalAnswers[questionId]
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    let totalScore = 0;
    let maxScore = 0;
    let categoryScores = {};

    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        // Если ответ помечен как критический, увеличиваем его вес в 1.3 раза
        const criticalMultiplier = criticalAnswers[question.id] ? 1.3 : 1.0;
        const effectiveWeight = answer.weight * criticalMultiplier;

        const weightedScore = answer.value * effectiveWeight;
        totalScore += weightedScore;
        maxScore += 5 * effectiveWeight;

        if (!categoryScores[question.category]) {
          categoryScores[question.category] = { score: 0, max: 0 };
        }
        categoryScores[question.category].score += weightedScore;
        categoryScores[question.category].max += 5 * effectiveWeight;
      }
    });

    let percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

    // Система "красных флагов" - вычитаем проценты за критические ответы
    let redFlagsPenalty = 0;
    const redFlags = [];

    // Критические красные флаги (-10% каждый)
    if (answers[4] && answers[4].value === 1) {
      redFlagsPenalty += 10;
      redFlags.push({
        severity: 'critical',
        message: 'Вы выбрали юриспруденцию по совету окружения - без внутренней мотивации профессия может разочаровать'
      });
    }
    if (answers[6] && answers[6].value === 1) {
      redFlagsPenalty += 10;
      redFlags.push({
        severity: 'critical',
        message: 'Конфликты причиняют вам дискомфорт - юристы регулярно сталкиваются с конфликтными ситуациями'
      });
    }
    if (answers[11] && answers[11].value === 1) {
      redFlagsPenalty += 10;
      redFlags.push({
        severity: 'critical',
        message: 'Дедлайны парализуют вас - юридическая работа построена на строгих сроках'
      });
    }

    // Серьезные красные флаги (-8% каждый)
    if (answers[7] && answers[7].value === 1) {
      redFlagsPenalty += 8;
      redFlags.push({
        severity: 'serious',
        message: 'Рутинная работа угнетает вас - значительная часть работы юриста это проверка документов'
      });
    }
    if (answers[19] && answers[19].value === 1) {
      redFlagsPenalty += 8;
      redFlags.push({
        severity: 'serious',
        message: 'Монотонность убивает вашу мотивацию - многие юридические задачи повторяющиеся'
      });
    }

    // Предупреждающие флаги (-5% каждый)
    if (answers[26] && answers[26].value === 5) {
      redFlagsPenalty += 5;
      redFlags.push({
        severity: 'warning',
        message: 'Вы хотите свободно путешествовать между странами - юристы завязаны на праве конкретной юрисдикции, международная мобильность ограничена'
      });
    }
    if (answers[23] && answers[23].value === 1) {
      redFlagsPenalty += 5;
      redFlags.push({
        severity: 'warning',
        message: 'Вам нужны четкие границы работы - юридическая карьера часто требует гибкости по времени'
      });
    }

    // Применяем штраф за красные флаги к общему баллу
    percentage = Math.max(0, percentage - redFlagsPenalty);

    // Критические категории
    const criticalCategories = ['motivation', 'stress_tolerance', 'work_style'];
    let criticalScore = 0;
    let criticalMax = 0;

    criticalCategories.forEach(cat => {
      if (categoryScores[cat]) {
        criticalScore += categoryScores[cat].score;
        criticalMax += categoryScores[cat].max;
      }
    });

    let criticalPercentage = criticalMax > 0 ? (criticalScore / criticalMax) * 100 : 0;

    // Применяем штраф за красные флаги к критическим параметрам
    // (те же флаги влияют на критические параметры, т.к. многие из них относятся к motivation, stress_tolerance, work_style)
    criticalPercentage = Math.max(0, criticalPercentage - redFlagsPenalty);

    // Расчет профиля для рекомендаций
    const profile = calculateProfile(categoryScores, answers);

    return {
      percentage: Math.round(percentage),
      criticalPercentage: Math.round(criticalPercentage),
      categoryScores,
      profile,
      redFlags,
      redFlagsPenalty
    };
  };

  const calculateProfile = (categoryScores, answers) => {
    const getPercent = (category) => {
      if (!categoryScores[category]) return 0;
      const max = categoryScores[category].max;
      return max > 0 ? (categoryScores[category].score / max) * 100 : 0;
    };

    return {
      stressTolerance: getPercent('stress_tolerance'),
      communication: getPercent('communication'),
      analytical: getPercent('analytical'),
      workLifeBalance: getPercent('work_life_balance'),
      entrepreneurial: getPercent('personality'),
      clientWork: getPercent('client_work'),
      writing: getPercent('writing'),
      monotony: getPercent('monotony'),
      perfectionism: getPercent('perfectionism'),
      overtime: getPercent('overtime'),
      networking: getPercent('networking'),
      mobility: getPercent('mobility'),
      ethics: getPercent('ethics'),
      careerAmbition: getPercent('career_path'),
      financialSpeed: answers[1]?.value || 3,
      motivation: getPercent('motivation')
    };
  };

  const getSpecializations = (profile) => {
    const specializations = [];

    // Судебная практика и арбитраж
    const litigationScore = (
      (profile.stressTolerance >= 70 ? 30 : profile.stressTolerance >= 65 ? 25 : profile.stressTolerance >= 60 ? 15 : 0) +
      (profile.communication >= 65 ? 25 : profile.communication >= 60 ? 20 : profile.communication >= 55 ? 10 : 0) +
      (profile.analytical >= 65 ? 20 : profile.analytical >= 60 ? 15 : profile.analytical >= 55 ? 10 : 0) +
      (profile.writing >= 60 ? 15 : profile.writing >= 55 ? 10 : 0) +
      (profile.perfectionism >= 55 ? 10 : 0)
    );

    if (litigationScore >= 60) {
      specializations.push({
        name: 'Судебная практика и арбитраж',
        match: litigationScore,
        description: 'Представительство в судах, ведение споров, арбитраж',
        reasons: [
          'Высокая стрессоустойчивость',
          'Отличные коммуникативные навыки',
          'Готовность к конфликтам'
        ],
        employers: ['Крупные юрфирмы', 'Бутики litigation', 'Инхаус с большим портфелем споров']
      });
    }

    // Корпоративное право и M&A
    const corporateScore = (
      (profile.analytical >= 70 ? 30 : profile.analytical >= 65 ? 25 : profile.analytical >= 60 ? 15 : 0) +
      (profile.writing >= 65 ? 25 : profile.writing >= 60 ? 20 : profile.writing >= 55 ? 10 : 0) +
      (profile.perfectionism >= 65 ? 20 : profile.perfectionism >= 60 ? 15 : profile.perfectionism >= 55 ? 10 : 0) +
      (profile.monotony >= 55 ? 15 : profile.monotony >= 50 ? 10 : 0) +
      (profile.overtime >= 55 ? 10 : 0)
    );

    if (corporateScore >= 60) {
      specializations.push({
        name: 'Корпоративное право и M&A',
        match: corporateScore,
        description: 'Сделки слияний и поглощений, корпоративная реструктуризация, due diligence',
        reasons: [
          'Сильные аналитические способности',
          'Внимание к деталям',
          'Навыки работы с документами'
        ],
        employers: ['Топовые юрфирмы', 'Инвестиционные банки', 'Крупные корпорации']
      });
    }

    // Налоговое право
    const taxScore = (
      (profile.analytical >= 70 ? 35 : profile.analytical >= 65 ? 30 : profile.analytical >= 60 ? 20 : 0) +
      (profile.monotony >= 60 ? 30 : profile.monotony >= 55 ? 25 : profile.monotony >= 50 ? 15 : 0) +
      (profile.perfectionism >= 60 ? 20 : profile.perfectionism >= 55 ? 15 : 0) +
      (profile.stressTolerance <= 50 ? 15 : profile.stressTolerance <= 60 ? 10 : 0)
    );

    if (taxScore >= 60) {
      specializations.push({
        name: 'Налоговое право',
        match: taxScore,
        description: 'Налоговое планирование, консультирование, налоговые споры',
        reasons: [
          'Аналитический склад ума',
          'Терпение к сложным расчетам',
          'Структурированность'
        ],
        employers: ['Big4', 'Налоговые бутики', 'Инхаус крупных компаний']
      });
    }

    // Интеллектуальная собственность
    const ipScore = (
      (profile.analytical >= 70 ? 30 : profile.analytical >= 65 ? 25 : profile.analytical >= 60 ? 15 : 0) +
      (profile.perfectionism >= 65 ? 30 : profile.perfectionism >= 60 ? 25 : profile.perfectionism >= 55 ? 15 : 0) +
      (profile.writing >= 65 ? 25 : profile.writing >= 60 ? 20 : profile.writing >= 55 ? 10 : 0) +
      (profile.monotony >= 55 ? 15 : profile.monotony >= 50 ? 10 : 0)
    );

    if (ipScore >= 60) {
      specializations.push({
        name: 'Интеллектуальная собственность',
        match: ipScore,
        description: 'Патенты, товарные знаки, авторское право, лицензирование',
        reasons: [
          'Аналитические способности',
          'Внимание к деталям',
          'Навыки письменной работы'
        ],
        employers: ['IP-бутики', 'Tech-компании', 'Юрфирмы с IP-практикой']
      });
    }

    // Трудовое право и HR
    const laborScore = (
      (profile.clientWork >= 65 ? 30 : profile.clientWork >= 60 ? 25 : profile.clientWork >= 55 ? 15 : 0) +
      (profile.ethics >= 70 ? 25 : profile.ethics >= 65 ? 20 : profile.ethics >= 60 ? 10 : 0) +
      (profile.communication >= 65 ? 25 : profile.communication >= 60 ? 20 : profile.communication >= 55 ? 10 : 0) +
      (profile.stressTolerance >= 60 ? 20 : profile.stressTolerance >= 55 ? 15 : 0)
    );

    if (laborScore >= 60) {
      specializations.push({
        name: 'Трудовое право',
        match: laborScore,
        description: 'Трудовые споры, HR-консультирование, внутренние расследования',
        reasons: [
          'Эмпатия и работа с людьми',
          'Этические принципы',
          'Коммуникабельность'
        ],
        employers: ['HR-отделы корпораций', 'Юрфирмы', 'Специализированные бутики']
      });
    }

    // Комплаенс и регуляторика
    const complianceScore = (
      (profile.workLifeBalance >= 65 ? 30 : profile.workLifeBalance >= 60 ? 25 : profile.workLifeBalance >= 55 ? 15 : 0) +
      (profile.analytical >= 70 ? 25 : profile.analytical >= 65 ? 20 : profile.analytical >= 60 ? 10 : 0) +
      (profile.overtime <= 40 ? 20 : profile.overtime <= 50 ? 15 : profile.overtime <= 60 ? 10 : 0) +
      (profile.perfectionism >= 60 ? 15 : profile.perfectionism >= 55 ? 10 : 0) +
      (profile.monotony >= 55 ? 10 : 0)
    );

    if (complianceScore >= 65) {
      specializations.push({
        name: 'Комплаенс и регуляторика',
        match: complianceScore,
        description: 'Соответствие законодательству, внутренний контроль, политики и процедуры',
        reasons: [
          'Баланс работы и жизни',
          'Аналитический подход',
          'Системное мышление'
        ],
        employers: ['Банки', 'Крупные корпорации', 'Финтех', 'Фармацевтика']
      });
    }

    // Международное право
    const internationalScore = (
      (profile.mobility >= 70 ? 35 : profile.mobility >= 65 ? 30 : profile.mobility >= 60 ? 20 : 0) +
      (profile.analytical >= 70 ? 25 : profile.analytical >= 65 ? 20 : profile.analytical >= 60 ? 10 : 0) +
      (profile.networking >= 65 ? 20 : profile.networking >= 60 ? 15 : profile.networking >= 55 ? 10 : 0) +
      (profile.communication >= 60 ? 15 : profile.communication >= 55 ? 10 : 0) +
      (profile.stressTolerance >= 60 ? 5 : 0)
    );

    if (internationalScore >= 70) {
      specializations.push({
        name: 'Международное право и арбитраж',
        match: internationalScore,
        description: 'Трансграничные сделки, международный арбитраж, внешнеторговые контракты',
        reasons: [
          'Желание международной карьеры',
          'Сильная аналитика',
          'Навыки нетворкинга'
        ],
        employers: ['Международные юрфирмы', 'Международные организации', 'Экспортные компании']
      });
    }

    // Уголовное право
    const criminalScore = (
      (profile.stressTolerance >= 75 ? 30 : profile.stressTolerance >= 70 ? 25 : profile.stressTolerance >= 65 ? 15 : 0) +
      (profile.ethics >= 75 ? 25 : profile.ethics >= 70 ? 20 : profile.ethics >= 65 ? 15 : 0) +
      (profile.communication >= 70 ? 25 : profile.communication >= 65 ? 20 : profile.communication >= 60 ? 10 : 0) +
      (profile.careerAmbition >= 60 ? 10 : 0)
    );

    if (criminalScore >= 70) {
      specializations.push({
        name: 'Уголовное право',
        match: criminalScore,
        description: 'Защита в уголовных делах, белые воротнички, экономические преступления',
        reasons: [
          'Очень высокая стрессоустойчивость',
          'Сильные этические принципы',
          'Отличная коммуникация'
        ],
        employers: ['Адвокатские бюро', 'Инхаус (корпоративные расследования)', 'Прокуратура']
      });
    }

    // Контрактное право
    const contractScore = (
      (profile.monotony >= 70 ? 35 : profile.monotony >= 65 ? 30 : profile.monotony >= 60 ? 20 : 0) +
      (profile.writing >= 75 ? 30 : profile.writing >= 70 ? 25 : profile.writing >= 65 ? 15 : 0) +
      (profile.perfectionism >= 70 ? 25 : profile.perfectionism >= 65 ? 20 : profile.perfectionism >= 60 ? 10 : 0) +
      (profile.analytical >= 60 ? 10 : 0)
    );

    if (contractScore >= 65) {
      specializations.push({
        name: 'Контрактное право',
        match: contractScore,
        description: 'Разработка и согласование договоров, сопровождение сделок',
        reasons: [
          'Терпение к рутинной работе',
          'Отличные письменные навыки',
          'Внимание к деталям'
        ],
        employers: ['Любые компании (инхаус)', 'Юрфирмы', 'Госконтракты']
      });
    }

    // Банкротство и реструктуризация
    const bankruptcyScore = (
      (profile.analytical >= 70 ? 30 : profile.analytical >= 65 ? 25 : profile.analytical >= 60 ? 15 : 0) +
      (profile.stressTolerance >= 70 ? 30 : profile.stressTolerance >= 65 ? 25 : profile.stressTolerance >= 60 ? 15 : 0) +
      (profile.financialSpeed <= 2 ? 20 : profile.financialSpeed <= 3 ? 15 : profile.financialSpeed <= 4 ? 10 : 0) +
      (profile.perfectionism >= 60 ? 15 : profile.perfectionism >= 55 ? 10 : 0) +
      (profile.clientWork >= 55 ? 5 : 0)
    );

    if (bankruptcyScore >= 60) {
      specializations.push({
        name: 'Банкротство и реструктуризация',
        match: bankruptcyScore,
        description: 'Процедуры банкротства, финансовая реструктуризация, взыскание долгов',
        reasons: [
          'Аналитическое мышление',
          'Стрессоустойчивость',
          'Терпение к долгим процессам'
        ],
        employers: ['Юрфирмы', 'Арбитражные управляющие', 'Банки']
      });
    }

    // Legal Tech и инновации
    const legalTechScore = (
      (profile.entrepreneurial >= 70 ? 30 : profile.entrepreneurial >= 65 ? 25 : profile.entrepreneurial >= 60 ? 15 : 0) +
      (profile.analytical >= 70 ? 25 : profile.analytical >= 65 ? 20 : profile.analytical >= 60 ? 10 : 0) +
      (profile.motivation >= 75 ? 25 : profile.motivation >= 70 ? 20 : profile.motivation >= 65 ? 10 : 0) +
      (profile.networking >= 60 ? 15 : profile.networking >= 55 ? 10 : 0) +
      (profile.careerAmbition >= 60 ? 5 : 0)
    );

    if (legalTechScore >= 70) {
      specializations.push({
        name: 'Legal Tech и инновации',
        match: legalTechScore,
        description: 'Автоматизация юридических процессов, правовое регулирование технологий',
        reasons: [
          'Предпринимательский подход',
          'Интерес к инновациям',
          'Высокая мотивация'
        ],
        employers: ['Legal Tech стартапы', 'IT-компании', 'Инновационные юрфирмы']
      });
    }

    // Собственная практика / Предпринимательство
    const privatePracticeScore = (
      (profile.entrepreneurial >= 75 ? 35 : profile.entrepreneurial >= 70 ? 30 : profile.entrepreneurial >= 65 ? 20 : 0) +
      (profile.networking >= 70 ? 30 : profile.networking >= 65 ? 25 : profile.networking >= 60 ? 15 : 0) +
      (profile.clientWork >= 70 ? 25 : profile.clientWork >= 65 ? 20 : profile.clientWork >= 60 ? 10 : 0) +
      (profile.motivation >= 70 ? 10 : profile.motivation >= 65 ? 5 : 0)
    );

    if (privatePracticeScore >= 70) {
      specializations.push({
        name: 'Собственная практика / Предпринимательство',
        match: privatePracticeScore,
        description: 'Открытие собственного адвокатского бюро, частная юридическая практика',
        reasons: [
          'Предпринимательская жилка',
          'Навыки нетворкинга и привлечения клиентов',
          'Высокая мотивация и самостоятельность'
        ],
        employers: ['Собственное адвокатское бюро', 'Частная практика', 'Юридический бутик с партнерами']
      });
    }

    // Недвижимость и строительство
    const realEstateScore = (
      (profile.monotony >= 65 ? 30 : profile.monotony >= 60 ? 25 : profile.monotony >= 55 ? 15 : 0) +
      (profile.clientWork >= 65 ? 30 : profile.clientWork >= 60 ? 25 : profile.clientWork >= 55 ? 15 : 0) +
      (profile.analytical >= 65 ? 25 : profile.analytical >= 60 ? 20 : profile.analytical >= 55 ? 10 : 0) +
      (profile.networking >= 60 ? 15 : profile.networking >= 55 ? 10 : 0)
    );

    if (realEstateScore >= 65) {
      specializations.push({
        name: 'Недвижимость и строительство',
        match: realEstateScore,
        description: 'Сделки с недвижимостью, строительные контракты, земельное право',
        reasons: [
          'Способность к систематической работе',
          'Работа с клиентами',
          'Аналитические навыки'
        ],
        employers: ['Девелоперы', 'Юрфирмы', 'Риэлторские компании']
      });
    }

    // Сортируем по совпадению
    specializations.sort((a, b) => b.match - a.match);

    return specializations.slice(0, 5); // Топ-5 направлений
  };

  const getEmployerTypes = (profile) => {
    const employers = [];

    // Крупные юридические фирмы (Big Law)
    const bigLawScore = (
      (profile.stressTolerance >= 65 ? 25 : profile.stressTolerance >= 60 ? 20 : profile.stressTolerance >= 55 ? 10 : 0) +
      (profile.overtime >= 55 ? 20 : profile.overtime >= 50 ? 15 : 0) +
      (profile.careerAmbition >= 65 ? 25 : profile.careerAmbition >= 60 ? 20 : profile.careerAmbition >= 55 ? 10 : 0) +
      (profile.financialSpeed >= 4 ? 15 : profile.financialSpeed >= 3 ? 10 : 0) +
      (profile.networking >= 60 ? 15 : profile.networking >= 55 ? 10 : 0)
    );

    if (bigLawScore >= 65) {
      employers.push({
        type: 'Крупные юридические фирмы (Big Law)',
        match: bigLawScore,
        pros: [
          'Высокие зарплаты: NewLF 120-200 тыс. (junior), российские 80-120 тыс.',
          'Престиж и имя в резюме',
          'Сложные проекты и крупные клиенты',
          'Быстрое профессиональное развитие',
          'Годовые бонусы (78-81% получают)'
        ],
        cons: [
          'Переработки: 43% работают 41-50 часов/неделю',
          'Жесткая иерархия',
          'Высокая конкуренция',
          'Риск выгорания'
        ],
        examples: [
          'Бывшие международные (NewLF): Nextons (бывш. Dentons), Melling Voytishkin (бывш. Baker McKenzie), SEAMLESS Legal (бывш. CMS)',
          'Российские: Пепеляев Групп, ЕПАМ, АЛРУД'
        ],
        fit: profile.overtime >= 60 && profile.stressTolerance >= 70 ? 'Отлично подходит' : 'Подходит с оговорками',
        salary: 'Junior: NewLF 120-200 тыс., российские 80-120 тыс. | Senior: NewLF 500-600 тыс., российские 200-300 тыс.'
      });
    }

    // Инхаус (корпоративный юрист)
    const inhouseScore = (
      (profile.workLifeBalance >= 60 ? 30 : 0) +
      (profile.overtime <= 50 ? 20 : 0) +
      (profile.clientWork >= 60 ? 20 : 0) +
      (profile.monotony >= 50 ? 15 : 0) +
      (profile.analytical >= 60 ? 15 : 0)
    );

    if (inhouseScore >= 60) {
      employers.push({
        type: 'Инхаус юрист (корпорации)',
        match: inhouseScore,
        pros: [
          'Лучший баланс: 36% работают 30-40 часов/неделю',
          'Стабильность и соцпакет',
          'Один работодатель - глубокое понимание бизнеса',
          'Меньше стресса, чем в юрфирмах',
          'Годовые бонусы (69% получают)'
        ],
        cons: [
          'Зарплата растет медленнее (+15-20% в год, при повышении +30-40%)',
          'Меньше разнообразия задач',
          'Ограниченный карьерный рост',
          'Зависимость от одной компании'
        ],
        examples: [
          'Tech: Яндекс, VK, Ozon, Wildberries',
          'Банки: Сбер, ВТБ, Альфа-Банк, Тинькофф',
          'Корпорации: Газпром, ЛУКОЙЛ, МТС, X5 Retail'
        ],
        fit: profile.workLifeBalance >= 60 ? 'Отлично подходит' : 'Возможно подойдет',
        salary: 'Junior: 80-120 тыс. | Юрист: 140-180 тыс. | Senior: 180-250 тыс. | CLO: 400-600 тыс.'
      });
    }

    // Бутиковые юрфирмы
    const boutiqueScore = (
      (profile.entrepreneurial >= 60 ? 25 : profile.entrepreneurial >= 55 ? 20 : 0) +
      (profile.networking >= 55 ? 20 : profile.networking >= 50 ? 15 : 0) +
      (profile.workLifeBalance >= 45 ? 20 : profile.workLifeBalance >= 40 ? 15 : 0) +
      (profile.motivation >= 65 ? 20 : profile.motivation >= 60 ? 15 : 0) +
      (profile.clientWork >= 60 ? 15 : profile.clientWork >= 55 ? 10 : 0)
    );

    if (boutiqueScore >= 65) {
      employers.push({
        type: 'Бутиковые юридические фирмы',
        match: boutiqueScore,
        pros: [
          'Специализация в узкой области',
          'Более человечная атмосфера',
          'Быстрый рост до партнера (5-7 лет vs 10+ в Big Law)',
          'Интересные клиенты и проекты'
        ],
        cons: [
          'Зарплаты ниже, чем в Big Law (на 20-40%)',
          'Меньше стабильности',
          'Нужно больше "продавать себя"',
          'Ограниченные ресурсы'
        ],
        examples: ['IP-бутики', 'Tax-бутики', 'Litigation-бутики', 'Партнерские бюро'],
        fit: profile.entrepreneurial >= 65 ? 'Отлично подходит' : 'Может подойти',
        salary: 'Junior: 80-150 тыс. | Middle: 180-350 тыс. | Senior/Partner: 400-800 тыс.+'
      });
    }

    // Государственная служба
    const govScore = (
      (profile.workLifeBalance >= 70 ? 30 : 0) +
      (profile.ethics >= 75 ? 25 : 0) +
      (profile.overtime <= 40 ? 20 : 0) +
      (profile.stressTolerance <= 60 ? 15 : 0) +
      (profile.financialSpeed <= 2 ? 10 : 0)
    );

    if (govScore >= 50) {
      employers.push({
        type: 'Государственная служба',
        match: govScore,
        pros: [
          'Максимальная стабильность',
          'Четкий график (обычно до 18:00)',
          'Социальные гарантии, льготы, пенсия',
          'Престиж (для некоторых ведомств)'
        ],
        cons: [
          'Низкие зарплаты (в 2-3 раза ниже частного сектора)',
          'Бюрократия и медленные процессы',
          'Ограниченное развитие',
          'Политическая зависимость'
        ],
        examples: ['Министерства (юстиции, финансов)', 'Федеральные службы (ФНС, Росреестр)', 'Региональные администрации', 'Госкорпорации'],
        fit: profile.workLifeBalance >= 70 && profile.ethics >= 75 ? 'Хорошо подходит' : 'Возможный вариант',
        salary: 'Начальные позиции: 50-100 тыс. | Средний уровень: 100-200 тыс. | Руководители: 200-400 тыс.'
      });
    }

    // Суды
    const courtScore = (
      (profile.ethics >= 75 ? 30 : profile.ethics >= 70 ? 25 : profile.ethics >= 65 ? 15 : 0) +
      (profile.analytical >= 70 ? 25 : profile.analytical >= 65 ? 20 : profile.analytical >= 60 ? 10 : 0) +
      (profile.perfectionism >= 65 ? 20 : profile.perfectionism >= 60 ? 15 : profile.perfectionism >= 55 ? 10 : 0) +
      (profile.workLifeBalance >= 60 ? 15 : profile.workLifeBalance >= 55 ? 10 : 0) +
      (profile.careerAmbition >= 55 ? 10 : 0)
    );

    if (courtScore >= 65) {
      employers.push({
        type: 'Судебная система',
        match: courtScore,
        pros: [
          'Высокий социальный статус и уважение',
          'Независимость в принятии решений',
          'Пожизненное назначение, стабильность',
          'Интеллектуально сложная работа'
        ],
        cons: [
          'Средние зарплаты (ниже частного сектора)',
          'Огромная ответственность',
          'Психологическое давление',
          'Долгий путь к высоким позициям (10-15+ лет)'
        ],
        examples: ['Арбитражные суды', 'Суды общей юрисдикции', 'Мировые судьи', 'Конституционный суд (топ-юристы)'],
        fit: profile.ethics >= 80 && profile.analytical >= 75 ? 'Отлично подходит' : 'Стоит рассмотреть',
        salary: 'Помощник судьи: 70-120 тыс. | Судья районного суда: 150-250 тыс. | Судья регионального/ВС: 250-400 тыс.'
      });
    }

    // Правоохранительные органы
    const lawEnforcementScore = (
      (profile.ethics >= 75 ? 25 : 0) +
      (profile.stressTolerance >= 75 ? 25 : 0) +
      (profile.communication >= 65 ? 20 : 0) +
      (profile.overtime >= 60 ? 15 : 0) +
      (profile.careerAmbition >= 65 ? 15 : 0)
    );

    if (lawEnforcementScore >= 60) {
      employers.push({
        type: 'Правоохранительные органы',
        match: lawEnforcementScore,
        pros: [
          'Служение обществу и закону',
          'Карьерный рост через звания',
          'Социальные льготы (жилье, лечение, ранняя пенсия)',
          'Разнообразие задач'
        ],
        cons: [
          'Высокий стресс и опасность',
          'Регулярные переработки',
          'Бюрократия',
          'Зарплаты ниже частного сектора (в 2-3 раза)'
        ],
        examples: ['Прокуратура (надзор, обвинение)', 'Следственный комитет', 'МВД (экономическая безопасность)', 'ФСБ (правовые службы)'],
        fit: profile.ethics >= 75 && profile.stressTolerance >= 75 ? 'Хорошо подходит' : 'Требует тщательного обдумывания',
        salary: 'Начальные позиции: 80-150 тыс. | Средний уровень: 150-250 тыс. | Высшие звания: 250-400 тыс.'
      });
    }

    // Big4
    const big4Score = (
      (profile.analytical >= 65 ? 25 : profile.analytical >= 60 ? 20 : profile.analytical >= 55 ? 10 : 0) +
      (profile.monotony >= 50 ? 20 : profile.monotony >= 45 ? 15 : 0) +
      (profile.workLifeBalance >= 45 ? 15 : profile.workLifeBalance >= 40 ? 10 : 0) +
      (profile.clientWork >= 60 ? 20 : profile.clientWork >= 55 ? 15 : 0) +
      (profile.mobility >= 55 ? 20 : profile.mobility >= 50 ? 15 : 0)
    );

    if (big4Score >= 65) {
      employers.push({
        type: 'Бывшие Big4 (теперь российские компании)',
        match: big4Score,
        pros: [
          'Хорошее имя в резюме',
          'Структурированное обучение',
          'Разнообразие проектов (tax, compliance, M&A support)',
          'Годовые бонусы (примерно 70% получают)'
        ],
        cons: [
          'Зарплаты на 30-50% ниже, чем в NewLF',
          'Много рутинной работы',
          'Иерархичность',
          'Фокус на продажах услуг (billable hours)'
        ],
        examples: [
          'Деловые решения и технологии (бывш. Deloitte)',
          'Технологии доверия (бывш. PwC)',
          'Б1 (бывш. EY)',
          'Кэпт (бывш. KPMG)'
        ],
        fit: profile.analytical >= 70 && profile.monotony >= 55 ? 'Хорошо подходит' : 'Возможный вариант',
        salary: 'Analyst: 80-150 тыс. | Consultant: 150-300 тыс. | Manager: 300-600 тыс. | Partner: 800 тыс. - 2+ млн'
      });
    }

    // Предпринимательство
    const entrepreneurScore = (
      (profile.entrepreneurial >= 70 ? 30 : profile.entrepreneurial >= 65 ? 25 : 0) +
      (profile.networking >= 65 ? 25 : profile.networking >= 60 ? 20 : 0) +
      (profile.clientWork >= 65 ? 20 : profile.clientWork >= 60 ? 15 : 0) +
      (profile.motivation >= 75 ? 15 : profile.motivation >= 70 ? 10 : 0) +
      (profile.careerAmbition >= 65 ? 10 : profile.careerAmbition >= 60 ? 5 : 0)
    );

    if (entrepreneurScore >= 65) {
      employers.push({
        type: 'Собственная практика / Предпринимательство',
        match: entrepreneurScore,
        pros: [
          'Полная свобода и независимость',
          'Неограниченный доход (потенциально)',
          'Выбор клиентов и проектов',
          'Построение собственного бренда',
          'Гибкий график'
        ],
        cons: [
          'Высокие финансовые риски',
          'Нестабильный доход первые 3-5 лет',
          'Нужно самому искать клиентов (продажи)',
          'Административная нагрузка (бухгалтерия, налоги)',
          'Рекомендуется опыт 5-7 лет перед стартом'
        ],
        examples: ['Собственное адвокатское бюро', 'Частная практика', 'Юридический бутик с партнерами', 'Консультант-фрилансер'],
        fit: profile.entrepreneurial >= 75 && profile.networking >= 70 ? 'Отлично подходит' : 'Требует предпринимательской жилки',
        salary: 'Первый год: 0-100 тыс./мес (нестабильно) | 2-3 год: 100-300 тыс. | 5+ лет: от 300 тыс. до неограниченно'
      });
    }

    // НКО и правозащита
    const ngoScore = (
      (profile.ethics >= 80 ? 30 : 0) +
      (profile.motivation >= 75 ? 25 : 0) +
      (profile.financialSpeed <= 2 ? 20 : 0) +
      (profile.communication >= 65 ? 15 : 0) +
      (profile.stressTolerance >= 60 ? 10 : 0)
    );

    if (ngoScore >= 60) {
      employers.push({
        type: 'НКО и правозащитные организации',
        match: ngoScore,
        pros: [
          'Смысл работы - помощь людям',
          'Работа над системными проблемами',
          'Свобода действий',
          'Международные связи',
          'Моральное удовлетворение'
        ],
        cons: [
          'Очень низкие зарплаты (в 3-5 раз ниже частного сектора)',
          'Нестабильное финансирование',
          'Эмоциональное выгорание',
          'Политические риски',
          'Нагрузка на энтузиазме'
        ],
        examples: ['Правозащитные центры', 'Pro bono практики при юрфирмах', 'Международные организации (ООН, ОБСЕ)', 'Центры бесплатной юрпомощи'],
        fit: profile.ethics >= 80 && profile.financialSpeed <= 2 ? 'Может отлично подойти' : 'Для идеалистов',
        salary: 'Начальные позиции: 30-80 тыс. | Средний уровень: 80-120 тыс. | Руководители: 120-200 тыс.'
      });
    }

    // Legal Tech и стартапы
    const techScore = (
      (profile.entrepreneurial >= 75 ? 30 : 0) +
      (profile.motivation >= 80 ? 25 : 0) +
      (profile.analytical >= 70 ? 20 : 0) +
      (profile.overtime >= 65 ? 15 : 0) +
      (profile.networking >= 70 ? 10 : 0)
    );

    if (techScore >= 70) {
      employers.push({
        type: 'Legal Tech и стартапы',
        match: techScore,
        pros: [
          'Инновации и современные технологии',
          'Акции/опционы (возможность разбогатеть)',
          'Быстрый карьерный рост',
          'Креативная среда, молодая команда',
          'Гибкость'
        ],
        cons: [
          'Высокие риски (стартап может закрыться)',
          'Нестабильность первые годы',
          'Переработки на старте',
          'Неясные перспективы',
          'Низкая зарплата на старте (но опционы)'
        ],
        examples: ['Legal Tech стартапы (автоматизация)', 'IT-компании (Яндекс, VK правовые отделы)', 'Fintech', 'Блокчейн-проекты', 'AI в праве'],
        fit: profile.entrepreneurial >= 75 && profile.motivation >= 80 ? 'Для амбициозных новаторов' : 'Высокорискованный вариант',
        salary: 'Стартап: 80-200 тыс. + опционы (риск/потенциал) | IT-компании инхаус: 150-400 тыс. | Senior: 400 тыс. - 1+ млн'
      });
    }

    // Сортируем по совпадению
    employers.sort((a, b) => b.match - a.match);

    return employers.slice(0, 6); // Топ-6 типов работодателей
  };

  const getRecommendation = (percentage, criticalPercentage) => {
    // Проверяем критически низкие значения ПЕРВЫМИ
    if (percentage < 35 || criticalPercentage < 30) {
      return {
        type: 'error',
        icon: XCircle,
        title: 'Рекомендуем пересмотреть выбор',
        text: '⚠️ Важно помнить: это всего лишь тест, отражающий мое субъективное видение. Не воспринимайте результат как приговор. Однако если вы получили "Рекомендуем пересмотреть выбор", стоит серьезно задуматься и обсудить варианты с карьерным консультантом.'
      };
    }

    if (percentage >= 70 && criticalPercentage >= 65) {
      return {
        type: 'success',
        icon: CheckCircle,
        title: 'Настоятельно рекомендуем',
        text: 'Юриспруденция отлично подходит вам! У вас есть необходимые качества, мотивация и понимание специфики профессии. Вы готовы к вызовам юридической карьеры.'
      };
    } else if (percentage >= 55 && criticalPercentage >= 50) {
      return {
        type: 'warning',
        icon: TrendingUp,
        title: 'Рекомендуем с оговорками',
        text: 'У вас есть потенциал для карьеры юриста, но важно учесть некоторые моменты. Возможно, стоит поработать над определенными аспектами или выбрать специализацию, которая лучше соответствует вашим сильным сторонам.'
      };
    } else {
      return {
        type: 'caution',
        icon: AlertCircle,
        title: 'Требуется тщательное обдумывание',
        text: 'Результаты показывают, что некоторые аспекты юридической профессии могут быть для вас сложными. Это не означает, что вы не можете стать юристом, но важно честно оценить свою готовность.'
      };
    }
  };

  const getCategoryName = (category) => {
    const names = {
      career_expectations: 'Карьерные ожидания',
      personality: 'Личностные качества',
      mobility: 'Географическая мобильность',
      motivation: 'Мотивация',
      work_life_balance: 'Баланс работы и жизни',
      stress_tolerance: 'Стрессоустойчивость',
      work_style: 'Стиль работы',
      learning: 'Обучаемость',
      communication: 'Коммуникация',
      intellectual: 'Интеллектуальные интересы',
      ethics: 'Этика',
      work_environment: 'Рабочая среда',
      writing: 'Письменная работа',
      analytical: 'Аналитические способности',
      client_work: 'Работа с клиентами',
      monotony: 'Отношение к рутине',
      career_path: 'Карьерный путь',
      financial: 'Финансовые ожидания',
      perfectionism: 'Перфекционизм',
      overtime: 'Переработки',
      networking: 'Нетворкинг',
      alternative: 'Альтернативы'
    };
    return names[category] || category;
  };

  const restart = () => {
    setTestStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setCriticalAnswers({});
  };

  const startTest = () => {
    setTestStarted(true);
  };

  // Intro page
  if (!testStarted) {
    return (
      <div className="min-h-screen bg-white p-4 md:p-8 relative overflow-hidden">
        {/* Gradient Orbs Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-100/60 to-cyan-200/40 rounded-full blur-3xl opacity-80"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/60 to-purple-200/40 rounded-full blur-3xl opacity-80"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-blue-200/30 rounded-full blur-3xl opacity-70"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-300">
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Lawyer / Not Lawyer?
              </h1>
              <p className="text-lg text-gray-600 mb-3">If Lawyer — Where?</p>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full shadow-lg shadow-cyan-500/30"></div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white/50 backdrop-blur-sm border border-cyan-200/60 rounded-xl p-5 hover:bg-white/90 transition-all duration-300">
                <h2 className="text-lg font-bold text-gray-900 mb-2">Кому подойдет?</h2>
                <ul className="space-y-1.5 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Тем, кто думает стать юристом</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Тем, кто сомневается, стоит ли продолжать карьеру юриста или может просто сменить специализацию</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Юристам, которые любят проходить тесты</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/50 backdrop-blur-sm border border-purple-200/60 rounded-xl p-5 hover:bg-white/90 transition-all duration-300">
                <h2 className="text-lg font-bold text-gray-900 mb-2">О тесте</h2>
                <p className="text-gray-700 text-sm mb-2">
                  Тест создан по авторской методике и основан на личном видении профессии, при этом внутри довольно значимая математика, поэтому можно использовать не только для развлечения :)
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  В то же время, любой тест — это не приговор, очень много особенностей личности невозможно учесть. <strong>При сомнениях — обращайтесь к карьерному консультанту.</strong>
                </p>
                <p className="text-gray-700 text-sm">
                  Данные по зарплатам взяты из Обзора зарплат 2024-2025 от{' '}
                  <a
                    href="https://t.me/max_legal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 underline font-medium"
                  >
                    Max Legal
                  </a>. Никакие данные не собираются.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50/50 to-green-50/50 border border-emerald-200/60 rounded-xl p-5 transition-all duration-300">
                <h2 className="text-lg font-bold text-gray-900 mb-2">Об авторе</h2>
                <p className="text-gray-700 text-sm">
                  Тест разработан <strong>Москалёвым Григорием</strong> — юристом и tech энтузиастом, автором{' '}
                  <a
                    href="https://t.me/legaltech101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 underline font-medium"
                  >
                    Legal Tech 101
                  </a>
                </p>
              </div>
            </div>

            <button
              onClick={startTest}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/30 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg text-lg"
            >
              Начать тест
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const results = calculateResults();
    const recommendation = getRecommendation(results.percentage, results.criticalPercentage);
    const specializations = getSpecializations(results.profile);
    const employerTypes = getEmployerTypes(results.profile);
    const Icon = recommendation.icon;

    return (
      <div className="min-h-screen bg-white p-4 md:p-8 relative overflow-hidden">
        {/* Gradient Orbs Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-100/60 to-cyan-200/40 rounded-full blur-3xl opacity-80"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/60 to-purple-200/40 rounded-full blur-3xl opacity-80"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-blue-200/30 rounded-full blur-3xl opacity-70"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-lg p-6 md:p-10 transition-all duration-300">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Результаты тестирования
            </h1>

            <div className={`rounded-xl p-6 mb-8 bg-white/50 backdrop-blur-sm border transition-all duration-300 hover:shadow-xl ${
              recommendation.type === 'success' ? 'border-emerald-200' :
              recommendation.type === 'warning' ? 'border-amber-200' :
              recommendation.type === 'caution' ? 'border-amber-200' :
              'border-gray-300'
            }`}>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl mr-4 ${
                  recommendation.type === 'success' ? 'bg-emerald-100 border border-emerald-200' :
                  recommendation.type === 'warning' ? 'bg-amber-100 border border-amber-200' :
                  recommendation.type === 'caution' ? 'bg-amber-100 border border-amber-200' :
                  'bg-gray-100 border border-gray-200'
                }`}>
                  <Icon className={`w-8 h-8 ${
                    recommendation.type === 'success' ? 'text-emerald-600' :
                    recommendation.type === 'warning' ? 'text-amber-600' :
                    recommendation.type === 'caution' ? 'text-amber-600' :
                    'text-gray-600'
                  }`} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{recommendation.title}</h2>
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">{recommendation.text}</p>
            </div>

            {/* Критические предупреждения (красные флаги) */}
            {results.redFlags && results.redFlags.length > 0 && (
              <div className="mb-8">
                <div className="rounded-xl p-6 bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-red-500 shadow-lg shadow-red-500/30 mr-3">
                      <div className="w-6 h-6 text-white flex items-center justify-center font-bold">⚠</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Критические предупреждения</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">
                    Следующие аспекты могут существенно осложнить вашу карьеру в юриспруденции. Штраф: -{results.redFlagsPenalty}% от итогового балла.
                  </p>
                  <ul className="space-y-3">
                    {results.redFlags.map((flag, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`mr-2 mt-0.5 flex-shrink-0 ${
                          flag.severity === 'critical' ? 'text-red-600' :
                          flag.severity === 'serious' ? 'text-orange-600' :
                          'text-amber-600'
                        }`}>
                          {flag.severity === 'critical' ? '🔴' : flag.severity === 'serious' ? '🟠' : '🟡'}
                        </span>
                        <span className="text-gray-800 text-sm">{flag.message}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Предупреждение если нет подходящих специализаций */}
            {specializations.length === 0 && (
              <div className="mb-8">
                <div className="rounded-xl p-6 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-300 shadow-sm">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">⚠️</span>
                    <h3 className="text-xl font-bold text-gray-900">Нет подходящих специализаций</h3>
                  </div>
                  <p className="text-gray-800 text-sm">
                    Ни одна юридическая специализация не подходит вам более чем на 65%. Это серьезный сигнал пересмотреть выбор профессии и обратиться к карьерному консультанту.
                  </p>
                </div>
              </div>
            )}

            {/* Предупреждение если нет подходящих работодателей */}
            {employerTypes.length === 0 && (
              <div className="mb-8">
                <div className="rounded-xl p-6 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-300 shadow-sm">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">⚠️</span>
                    <h3 className="text-xl font-bold text-gray-900">Нет подходящих работодателей</h3>
                  </div>
                  <p className="text-gray-800 text-sm">
                    Ни один тип работодателя не подходит вам достаточно. Возможно стоит рассмотреть смежные области или обсудить ваши варианты с карьерным консультантом.
                  </p>
                </div>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Общая оценка соответствия</h3>
              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Общий балл</span>
                  <span className="text-gray-900 font-bold">{results.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200/50 rounded-full h-4 backdrop-blur-sm">
                  <div
                    className={`h-4 rounded-full transition-all duration-500 shadow-lg ${
                      results.percentage >= 75 ? 'bg-gradient-to-r from-emerald-500 to-green-600 shadow-emerald-500/30' :
                      results.percentage >= 60 ? 'bg-gradient-to-r from-amber-500 to-yellow-600 shadow-amber-500/30' :
                      results.percentage >= 45 ? 'bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/30' :
                      'bg-gradient-to-r from-gray-500 to-gray-600 shadow-gray-500/30'
                    }`}
                    style={{ width: `${results.percentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Критические параметры</span>
                  <span className="text-gray-900 font-bold">{results.criticalPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200/50 rounded-full h-4 backdrop-blur-sm">
                  <div
                    className={`h-4 rounded-full transition-all duration-500 shadow-lg ${
                      results.criticalPercentage >= 70 ? 'bg-gradient-to-r from-emerald-500 to-green-600 shadow-emerald-500/30' :
                      results.criticalPercentage >= 60 ? 'bg-gradient-to-r from-amber-500 to-yellow-600 shadow-amber-500/30' :
                      results.criticalPercentage >= 45 ? 'bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/30' :
                      'bg-gradient-to-r from-gray-500 to-gray-600 shadow-gray-500/30'
                    }`}
                    style={{ width: `${results.criticalPercentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1 italic">
                  Оценка только ключевых для юриста категорий: мотивация, стрессоустойчивость и стиль работы
                </p>
              </div>

              <div className="mt-4 bg-blue-50/50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Что означают эти показатели?</strong><br />
                  <strong>Общий балл</strong> — это оценка по всем ответам теста, показывает общее соответствие профессии юриста.<br />
                  <strong>Критические параметры</strong> — оценка только самых важных для юриста качеств (мотивация, стрессоустойчивость, стиль работы). Даже при высоком общем балле низкие критические параметры могут указывать на сложности в профессии.
                </p>
              </div>
            </div>

            {/* Рекомендации по направлениям */}
            {specializations.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 mr-3">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Рекомендуемые направления в юриспруденции
                  </h3>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  На основе ваших ответов мы подобрали специализации, которые лучше всего соответствуют вашему профилю
                </p>
                <div className="space-y-4">
                  {specializations.map((spec, index) => (
                    <div key={index} className="group relative bg-white/50 backdrop-blur-sm rounded-lg p-5 border border-cyan-200/60 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-purple-100/20 to-blue-100/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                          <h4 className="text-lg font-bold text-gray-900 break-words">{spec.name}</h4>
                          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/30 whitespace-nowrap self-start">
                            {spec.match}% совпадение
                          </span>
                        </div>
                        <p className="text-gray-700 mb-3 break-words">{spec.description}</p>
                        <div className="mb-3">
                          <p className="font-semibold text-gray-900 mb-1">Почему подходит:</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {spec.reasons.map((reason, i) => (
                              <li key={i} className="break-words">{reason}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded p-3 border border-gray-200/60">
                          <p className="font-semibold text-gray-900 mb-1">Где работать:</p>
                          <p className="text-gray-700 text-sm break-words">{spec.employers.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Рекомендации по работодателям */}
            {employerTypes.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/30 mr-3">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Рекомендуемые типы работодателей
                  </h3>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  Типы организаций, где вы можете быть наиболее успешны и удовлетворены
                </p>
                <div className="space-y-5">
                  {employerTypes.map((employer, index) => (
                    <div key={index} className="group relative bg-white/50 backdrop-blur-sm rounded-lg p-5 border border-gray-200/60 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-purple-100/20 to-blue-100/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                          <h4 className="text-lg font-bold text-gray-900 break-words">{employer.type}</h4>
                          <div className="flex items-center self-start">
                            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/30 whitespace-nowrap">
                              {employer.match}%
                            </span>
                          </div>
                        </div>

                        <div className="bg-cyan-50 border border-cyan-100 rounded-lg p-3 mb-3">
                          <p className="font-semibold text-cyan-900 text-sm break-words">{employer.fit}</p>
                        </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="font-semibold text-emerald-700 mb-2">Плюсы:</p>
                          <ul className="space-y-1">
                            {employer.pros.map((pro, i) => (
                              <li key={i} className="text-sm text-gray-700 break-words">• {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-amber-700 mb-2">Минусы:</p>
                          <ul className="space-y-1">
                            {employer.cons.map((con, i) => (
                              <li key={i} className="text-sm text-gray-700 break-words">• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white/70 backdrop-blur-sm rounded p-3 border border-gray-200/60">
                        <p className="font-semibold text-gray-900 text-sm mb-1">Примеры:</p>
                        <p className="text-gray-700 text-sm break-words">{employer.examples.join(', ')}</p>
                      </div>

                      {employer.salary && (
                        <div className="bg-purple-50 border border-purple-100 rounded p-3 mt-3">
                          <p className="font-semibold text-purple-900 text-sm mb-1">Зарплаты (Москва, 2025):</p>
                          <p className="text-purple-800 text-sm break-words">{employer.salary}</p>
                        </div>
                      )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Детализация по категориям</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(results.categoryScores).map(([category, scores]) => {
                  const percentage = scores.max > 0 ? Math.round((scores.score / scores.max) * 100) : 0;
                  return (
                    <div key={category} className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/60 hover:bg-white/90 hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {getCategoryName(category)}
                        </span>
                        <span className="text-sm font-bold text-gray-900">{percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200/50 rounded-full h-2 backdrop-blur-sm">
                        <div
                          className={`h-2 rounded-full shadow-sm transition-all duration-500 ${
                            percentage >= 70 ? 'bg-gradient-to-r from-emerald-500 to-green-600' :
                            percentage >= 50 ? 'bg-gradient-to-r from-amber-500 to-yellow-600' :
                            'bg-gradient-to-r from-gray-400 to-gray-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-blue-50/50 border border-blue-100 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Как интерпретировать результаты</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>75%+</strong> - Отличное соответствие. Юриспруденция - ваш путь!</li>
                <li><strong>60-74%</strong> - Хорошее соответствие. Можно идти, но важно учесть слабые зоны.</li>
                <li><strong>45-59%</strong> - Среднее соответствие. Нужно тщательно взвесить все "за" и "против".</li>
                <li><strong>Ниже 45%</strong> - Низкое соответствие. Возможно, стоит рассмотреть альтернативы.</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50/50 to-green-50/50 border border-emerald-100 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Источник данных о зарплатах</h3>
              <p className="text-gray-700 mb-2">
                Все данные о зарплатах и условиях работы основаны на <strong>Обзоре зарплат юристов Legal Jobs 2024-2025</strong>
              </p>
              <p className="text-gray-700 break-words">
                Подробнее:{' '}
                <a
                  href="https://t.me/max_legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-700 underline font-medium break-all"
                >
                  Max Legal
                </a>
              </p>
            </div>

            <button
              onClick={restart}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/30 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg"
            >
              Пройти тест заново
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const isAnswered = answers[question.id] !== undefined;

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 relative overflow-hidden">
      {/* Gradient Orbs Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-100/60 to-cyan-200/40 rounded-full blur-3xl opacity-80"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/60 to-purple-200/40 rounded-full blur-3xl opacity-80"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-blue-200/30 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-lg p-4 md:p-8 transition-all duration-300 hover:shadow-xl hover:bg-white/90">
          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-base md:text-lg font-bold text-gray-900">
                Тест для будущего юриста
              </h1>
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200/50 rounded-full h-3 backdrop-blur-sm">
              <div
                className="bg-gradient-to-r from-cyan-600 to-blue-600 h-3 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-3 leading-snug">
              {question.text}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(question.id, option.value, option.weight)}
                  className={`group relative w-full text-left p-3 md:p-4 rounded-xl border transition-all duration-300 ${
                    answers[question.id]?.value === option.value
                      ? 'border-cyan-300 bg-white/90 shadow-lg shadow-cyan-500/10'
                      : 'border-gray-200/60 bg-white/50 hover:border-cyan-200 hover:bg-white/90 hover:shadow-xl'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-purple-100/20 to-blue-100/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center relative z-10">
                    <div className={`w-6 h-6 flex-shrink-0 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
                      answers[question.id]?.value === option.value
                        ? 'border-cyan-600 bg-gradient-to-br from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/30'
                        : 'border-gray-300'
                    }`}>
                      {answers[question.id]?.value === option.value && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {isAnswered && (
              <div className="mt-4 bg-amber-50/50 border border-amber-200/60 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex-1">
                    <p className="text-xs text-gray-700">
                      <strong>Особо важный вопрос?</strong> Отметьте, если критически важен — получит больший вес в анализе.
                    </p>
                  </div>
                  <button
                    onClick={() => toggleCritical(question.id)}
                    className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      criticalAnswers[question.id]
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/30'
                        : 'bg-white border border-amber-200 text-gray-700 hover:bg-amber-50'
                    }`}
                  >
                    <Star className={`w-4 h-4 ${criticalAnswers[question.id] ? 'fill-current' : ''}`} />
                    <span>{criticalAnswers[question.id] ? 'Помечено' : 'Пометить'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                currentQuestion === 0
                  ? 'bg-gray-200/50 text-gray-400 cursor-not-allowed'
                  : 'bg-white/70 text-gray-700 border border-gray-200/60 hover:bg-white/90 hover:shadow-lg backdrop-blur-sm'
              }`}
            >
              Назад
            </button>
            <button
              onClick={nextQuestion}
              disabled={!isAnswered}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                !isAnswered
                  ? 'bg-gray-200/50 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Показать результаты' : 'Далее'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};