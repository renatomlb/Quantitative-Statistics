// Full content for Section 3 — Correlational Statistics
// Primary sources:
//   Baptista, R. (2026). BPTY12 Statistics Lecture Slides [HLP-SLD], slides 29–42.
//   Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics. Class Health [SRC-B2].

export const CORRELATIONAL_CONTENT = {

  /* ── 3.1  Definition & Examples ──────────────────────────────────────── */
  'corr-definition': {
    definitions: [
      {
        term: 'Correlation',
        text: 'Correlation r is a numerical measure of the direction and strength of the linear relationship between two numerical variables.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 29. LUNEX University.',
      },
      {
        term: 'Bivariate Statistics',
        text: 'Bivariate techniques such as correlation and simple regression techniques allow the identification and description of the relationships that exist between two variables.',
        citation: 'Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics: A Guide for Healthcare Professionals. Class Health, p. 28.',
      },
      {
        term: 'Association',
        text: 'Two variables are associated if knowledge about one tells us something about the other.',
        citation: 'Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics. Class Health, p. 29.',
      },
    ],
    plainTerms: [
      'Correlation answers one simple question: when one variable changes, does the other tend to change with it — and how consistently? A high caloric intake tends to go with higher body weight; the amount of time you study tends to go with your grade. These are positively correlated.',
      'Poorly correlated (or uncorrelated) pairs show no consistent pattern: a cat\'s name and the food it prefers, or the cost of a car wash and the time you spend in a shop, move independently of each other.',
      'Correlation is useful for finding relationships between variables and making predictions about future events. It does not, on its own, tell you that one variable causes the other.',
      'Bivariate statistics focus on two variables at once. When researchers want to analyse three or more variables simultaneously they use multivariate methods (e.g. multiple regression) — these go beyond the scope of this module.',
    ],
    clinicalExample: {
      intro: 'A physiotherapy researcher asks: "Is grip strength associated with arm strength in patients recovering from stroke?"',
      bullets: [
        'Each patient provides two measurements: grip strength (kg) and arm strength (Nm). These form a pair — the raw material for a correlation analysis.',
        'If patients with higher grip strength also tend to have higher arm strength, a positive correlation exists.',
        'The researcher cannot yet conclude that one causes the other. Other factors — overall muscle mass, neurological recovery, motivation — may be driving both.',
        'Establishing the correlation is the first step; it tells the researcher whether investing in a more detailed causal study is worthwhile.',
      ],
    },
    diagramId: 'corr-definition',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What two properties of a linear relationship does the correlation coefficient r describe?',
          a: 'Direction (positive or negative) and strength (how closely the two variables co-vary). A positive r means both variables tend to move in the same direction; a negative r means they move in opposite directions.',
        },
        {
          q: 'Give one example of a highly correlated pair and one example of a poorly correlated pair from a physiotherapy context.',
          a: 'Highly correlated: grip strength and arm strength in stroke rehabilitation (both reflect upper-limb motor recovery). Poorly correlated: a patient\'s shoe size and their pain score — these variables are not expected to move together.',
        },
        {
          q: 'What is the difference between bivariate and multivariate statistics?',
          a: 'Bivariate statistics examine the relationship between exactly two variables (e.g. correlation). Multivariate statistics analyse three or more variables simultaneously (e.g. multiple regression), allowing more complex relationships to be modelled.',
        },
        {
          q: 'Does a strong correlation between two variables prove that one causes the other?',
          a: 'No. Correlation only establishes that the two variables tend to change together. A causal relationship requires additional evidence — for example, a randomised controlled trial or the application of Bradford Hill\'s criteria.',
        },
      ],
    },
  },

  /* ── 3.2  Reading the r-Coefficient ─────────────────────────────────── */
  'r-coefficient': {
    definitions: [
      {
        term: 'Correlation Coefficient',
        text: 'The numerical value ascribed to these relationships is the correlation coefficient, its value ranging between +1 (a perfect positive correlation) and –1 (a perfect negative correlation). Pearson\'s and Spearman\'s are the two best-known correlation coefficients.',
        citation: 'Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics. Class Health, p. 30.',
      },
      {
        term: 'Pearson Correlation Coefficient (r)',
        text: 'The correlation coefficient r or Pearson coefficient describes the strength and direction of the linear association between two continuous (interval or ratio) variables.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 30. LUNEX University.',
      },
      {
        term: 'Spearman Correlation Coefficient',
        text: 'When variables are qualitative ordinal scale variables, then Spearman correlation coefficient can be used as an alternative to the Pearson coefficient.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 30. LUNEX University.',
      },
      {
        term: 'Coefficient of Determination (r²)',
        text: 'The squared value of a correlation is called the coefficient of determination and measures the percentage of variability in one variable that is determined, or predicted, by its relationship with the other variable.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 36. LUNEX University.',
      },
    ],
    plainTerms: [
      'The r coefficient always falls between −1 and 1. Moving away from 0 in either direction means the relationship is getting stronger. Moving toward 0 means the variables are increasingly independent of each other.',
      'Sign tells you direction:\n• r > 0: positive association (both variables increase together)\n• r < 0: negative association (one increases as the other decreases)\n• r ≈ 0: very weak or no linear relationship',
      'Magnitude tells you strength: r = ±1 occurs only when all data points lie exactly on a straight line. As a rough guide: |r| < 0.3 = weak; 0.3–0.7 = moderate; > 0.7 = strong (these thresholds are conventions, not rules).',
      'Choosing between Pearson and Spearman:\n• Pearson requires both variables to be continuous (interval or ratio) and ideally normally distributed.\n• Spearman ranks the data first, so it is appropriate for ordinal variables or for continuous data that is heavily skewed or contains outliers.',
      'The coefficient of determination (\\(r^2\\)) is the proportion of variance in one variable explained by the other. For example, if r = 0.89, then \\(r^2 = 0.79\\) — meaning 79 % of the variation in one variable is accounted for by variation in the other.',
    ],
    clinicalExample: {
      intro: 'Two researchers study pain and disability in patients with chronic low back pain.',
      bullets: [
        'Researcher A correlates pain (NRS 0–10) with Oswestry Disability Index score. Both are on interval-like numeric scales — Pearson r is appropriate.',
        'Researcher B correlates pain severity using an ordinal 5-point scale (none/mild/moderate/severe/very severe) with mobility grade. Because one variable is ordinal, Spearman ρ is the correct choice.',
        'Researcher A finds r = 0.73 → \\(r^2 = 0.53\\): pain explains 53 % of the variance in disability score — a strong but imperfect relationship (other factors such as fear-avoidance and sleep disturbance contribute the remaining 47 %).',
        'Researcher B finds ρ = −0.61 → a moderate negative relationship: higher pain severity is associated with lower mobility grade.',
      ],
    },
    diagramId: 'r-coefficient',
    quiz: {
      intro: null,
      items: [
        {
          q: 'A study reports r = −0.82 between quadriceps strength and fall risk in older adults. What does this tell you about direction and strength?',
          a: 'Direction: negative — as quadriceps strength increases, fall risk decreases. Strength: |r| = 0.82 is strong, meaning the two variables track each other closely across participants.',
        },
        {
          q: 'Why would you choose the Spearman coefficient over the Pearson coefficient?',
          a: 'You would choose Spearman when: (1) one or both variables are measured on an ordinal scale (e.g. pain rating: none/mild/moderate/severe), or (2) the continuous data are non-normally distributed or contain outliers. Spearman is based on ranks, making it more robust in these situations.',
        },
        {
          q: 'A researcher reports \\(r = 0.71\\) between balance scores and walking speed. What percentage of variance in walking speed is explained by balance?',
          a: '\\(r^2 = 0.71^2 = 0.504\\), i.e. approximately 50 % of the variance in walking speed is explained by balance score. The remaining 50 % is attributable to other factors.',
        },
        {
          q: 'Coefficient r always lies between −1 and 1. What does r = −1 indicate?',
          a: 'A perfect negative linear relationship: all data points lie exactly on a straight line with a negative slope. Every unit increase in one variable corresponds to a perfectly proportional decrease in the other.',
        },
      ],
    },
  },

  /* ── 3.3  Mathematics: Height vs Weight ─────────────────────────────── */
  'corr-math': {
    definitions: [
      {
        term: 'Pearson Correlation Formula',
        text: '\\[r = \\frac{1}{n-1} \\sum_{i=1}^{n} \\left(\\frac{x_i - \\bar{x}}{s_x}\\right)\\left(\\frac{y_i - \\bar{y}}{s_y}\\right)\\] where \\(s_x\\) and \\(s_y\\) are respectively the sample standard deviation of X and of Y.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 35. LUNEX University.',
      },
      {
        term: 'Linear Regression',
        text: 'The variable being predicted is by convention known as the \'dependent variable\' and denoted by y, whereas the variable used for prediction is described as the \'independent variable\' and is denoted by x. The relationship between the two can be summarised using the following equation for a straight line: y = bx + a, where b is the slope, equal to the change in y per unit change in x, and a is a constant representing the point at which the line will intercept the y-axis.',
        citation: 'Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics. Class Health, p. 33.',
      },
    ],
    plainTerms: [
      'The Pearson formula converts each observation into a z-score (how many standard deviations from its mean), then multiplies the two z-scores for each data point. If both variables move in the same direction, those products are consistently positive → r > 0. If they move in opposite directions, the products are consistently negative → r < 0.',
      'Each term \\(\\left(\\frac{x_i - \\bar{x}}{s_x}\\right)\\) asks: "Is this person above or below average on X?" The corresponding \\(\\left(\\frac{y_i - \\bar{y}}{s_y}\\right)\\) asks the same for Y. A person above average on both contributes a positive product; a person above average on one but below on the other contributes a negative product.',
      'Adding a trendline (regression line) to a scatter plot helps visualise the tendency. The slope b tells you how many units Y changes for every one-unit increase in X. The intercept a tells you the predicted value of Y when X = 0.',
      'In the height vs weight example from the lecture: \\(r^2 = 0.79\\), so \\(r = \\sqrt{0.79} \\approx 0.89\\) — a strong positive relationship. About 79 % of the variance in weight is explained by height.',
    ],
    clinicalExample: {
      intro: 'Recreating the lecture example: 23 participants, height (cm) and weight (kg) measured. Scatter plot shows a clear positive trend.',
      bullets: [
        'Each participant provides a pair (height, weight). Plotted on a scatter plot, the cloud of points tilts upward left to right — taller people tend to weigh more.',
        'Computing z-scores: a participant who is 10 cm taller than the mean and 8 kg heavier than the mean will contribute a positive product to the sum.',
        'The trendline (y = bx + a) can be drawn using the method of least squares — minimising the sum of squared vertical distances from each point to the line.',
        '\\(r^2 = 0.79\\) → 79 % of weight variance is explained by height. The remaining 21 % is due to other factors: muscle mass, body composition, diet, etc.',
        'From the trendline we can predict: if a new patient is 175 cm tall, we can estimate their expected weight. This is regression — an extension of correlation.',
      ],
    },
    diagramId: 'corr-math',
    quiz: {
      intro: null,
      items: [
        {
          q: 'In the Pearson formula, what does the term \\(\\frac{x_i - \\bar{x}}{s_x}\\) represent for each observation?',
          a: 'It is the z-score for observation i on variable X — how many standard deviations above or below the mean that observation lies. Standardising both variables this way makes r unit-free and always bounded between −1 and 1.',
        },
        {
          q: 'In the linear regression equation y = bx + a, what does the slope b represent?',
          a: 'The slope b represents the expected change in Y for every one-unit increase in X. For example, if b = 0.7 in a height–weight regression (where height is in cm and weight in kg), we expect weight to increase by 0.7 kg for each additional centimetre of height.',
        },
        {
          q: 'A study of 25 physiotherapy patients finds \\(r = 0.89\\) between height and weight. What is \\(r^2\\) and what does it mean?',
          a: '\\(r^2 = 0.89^2 \\approx 0.79\\). This means approximately 79 % of the variance in weight is explained (statistically predicted) by height. The remaining 21 % of weight variability is due to other factors not captured by this model.',
        },
        {
          q: 'Why is adding a trendline useful when reporting a correlation?',
          a: 'A trendline makes the direction and magnitude of the relationship immediately visible and allows prediction: given a value of X, you can estimate the expected value of Y. It also helps readers judge whether the linear model is a reasonable fit or whether the relationship is curved.',
        },
      ],
    },
  },

  /* ── 3.4  Correlation vs Causation ──────────────────────────────────── */
  'corr-vs-causation': {
    definitions: [
      {
        term: 'Correlation ≠ Causation',
        text: 'The relationship is often more accurately described simply as an association between the two variables, with no claims being made about causality.',
        citation: 'Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics. Class Health, p. 29.',
      },
      {
        term: 'Bradford Hill\'s Criteria for Causality',
        text: '• Strength — A strong association is more likely to be causal than a weak one\n• Consistency — A causal association should be observed in different populations at different times\n• Temporality — The cause should precede the effect; in some cases, this may be extended such that removing a cause subsequently removes an effect\n• Gradient — The existence of a unidirectional dose–response curve\n• Plausibility — A hypothesis should be biologically plausible\n• Coherence — A cause and effect relationship should not conflict with what is already known to be true.',
        citation: 'Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics. Class Health, p. 28, Box 3.1.',
      },
    ],
    plainTerms: [
      'Correlation tells you that two variables move together. Causation tells you that one variable directly produces a change in the other. These are not the same thing.',
      'The classic illustration: on hot days, both ice cream sales and the number of people sunbathing increase. Ice cream sales and sunbathing are correlated — but eating ice cream does not cause sunbathing. Both are driven by a third variable (hot weather), called a confounding variable.',
      'In physiotherapy research this matters enormously. High-intensity exercise may correlate with improved function, but the real driver could be overall consistency of exercise, patient motivation, or baseline functional level — not intensity per se.',
      'To establish causation, researchers need randomised controlled trials (RCTs), where participants are randomly assigned to groups so that confounding variables are balanced out. Multivariable methods can also statistically control for known confounders.',
      'Bradford Hill\'s criteria provide a framework to assess whether a correlation is likely to be causal. No single criterion is sufficient — the stronger the evidence across multiple criteria, the more confidence we can have in a causal claim.',
    ],
    clinicalExample: {
      intro: 'Three physiotherapy examples where correlation is mistaken for causation:',
      bullets: [
        'Exercise intensity & improved function — Correlation: High-intensity exercise is associated with improved function in some studies. Misinterpretation: High intensity is necessary for improvement. Reality: Improvement could be related to overall consistency of exercise, not its intensity; baseline function, adherence, and motivation may play bigger roles.',
        'Manual therapy & increased ROM — Correlation: Increased range of motion is often observed after manual therapy. Misinterpretation: Manual therapy directly caused the ROM increase. Reality: ROM could improve due to relaxation, reduced guarding, or changes in pain perception rather than tissue changes induced by manual therapy.',
        'Aquatic therapy & faster recovery post-surgery — Correlation: Patients in aquatic therapy after surgery often recover faster. Misinterpretation: Aquatic therapy is solely responsible for faster recovery. Reality: Faster recovery could result from increased adherence due to the enjoyable nature of aquatic therapy, combined therapy approaches, or individualized care plans.',
      ],
    },
    diagramId: 'corr-vs-causation',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Ice cream sales and drowning rates are positively correlated. Does this mean eating ice cream causes drowning? Explain.',
          a: 'No. Both are driven by a confounding variable: hot weather. In summer, people both buy more ice cream and swim more often (increasing drowning risk). The correlation is real, but the causal explanation is the third variable — temperature — not a direct link between ice cream and drowning.',
        },
        {
          q: 'According to Bradford Hill\'s criteria, what is meant by "Temporality"?',
          a: 'Temporality means the cause must precede the effect. If we claim that X causes Y, we need to show that changes in X occur before changes in Y appear. This can be extended: if removing the cause subsequently removes the effect, that further supports causality.',
        },
        {
          q: 'A researcher finds that physiotherapy session attendance correlates strongly (r = 0.78) with functional improvement. What are two possible explanations other than "attendance causes improvement"?',
          a: '(1) Confounding: Highly motivated patients both attend more sessions and try harder in home exercises — motivation, not attendance per se, drives improvement. (2) Reverse causation: Patients who are already improving (e.g. because their condition is resolving naturally) feel better and therefore attend more sessions.',
        },
        {
          q: 'What study design is considered the gold standard for establishing causation, and why?',
          a: 'The randomised controlled trial (RCT). Random allocation of participants to treatment and control groups ensures that known and unknown confounding variables are, on average, balanced across groups. Any resulting difference in outcomes can then be more confidently attributed to the treatment itself.',
        },
      ],
    },
  },
};
