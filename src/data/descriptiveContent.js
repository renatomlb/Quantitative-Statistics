export const DESCRIPTIVE_CONTENT = {

  /* ── 2.1  Central Tendency ────────────────────────────────────────────── */
  'central-tendency': {
    definitions: [
      {
        term: 'Central Tendency',
        text: 'The central tendency provides information about the characteristics of a sample. The central tendency is usually expressed in mean or median values.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 9]. LUNEX University.',
      },
      {
        term: 'Variability',
        text: 'The variability describes the distribution of values around the mean. The standard deviation is usually used as an indicator of variability in a sample.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 9]. LUNEX University.',
      },
    ],
    plainTerms: [
      'When you collect a set of measurements — say, gait speed (m/s) for 40 patients — you need a single number that summarises where the data "sits." That summary is the central tendency.',
      'The two most common measures are the mean (the arithmetic average) and the median (the middle value when data are ordered). Choosing between them depends on whether the data contain extreme values: the mean is the most widely used, but the median is more robust when outliers are present.',
      'Alongside central tendency, researchers report variability to show how spread out the values are. A small standard deviation means values cluster tightly around the mean; a large one means the group is heterogeneous.',
    ],
    clinicalExample: {
      intro: 'A physiotherapist records 6-minute walk test (6MWT) distances (metres) for 10 patients with COPD: 280, 310, 340, 295, 320, 305, 290, 315, 330, 300.',
      bullets: [
        'The mean distance gives the "average" performance of the group.',
        'The median splits the ordered data exactly in half — useful if one patient had an unusually low value that would distort the mean.',
        'The standard deviation tells the clinician how consistent performance is across patients.',
      ],
    },
    diagramId: 'central-tendency',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Name the two most common measures of central tendency.',
          a: 'The mean (arithmetic average) and the median (middle value of ordered data).',
        },
        {
          q: 'Why might a physiotherapy researcher prefer the median over the mean for a small clinical dataset?',
          a: 'The median is not affected by extreme values (outliers). If one patient has an unusually high or low measurement, the mean is pulled toward that value, whereas the median remains at the true midpoint of the distribution.',
        },
      ],
    },
  },

  /* ── 2.1.1  Mean ──────────────────────────────────────────────────────── */
  'mean': {
    definitions: [
      {
        term: 'Mean (\\(\\bar{x}\\))',
        text: 'The two most widely used measures of the "center" of the data are the mean (average) and the median. To calculate the mean weight of 50 people, add the 50 weights together and divide by 50. The letter used to represent the sample mean is an x with a bar over it (pronounced "x bar"): \\(\\bar{x}\\). The Greek letter \\(\\mu\\) (pronounced "mew") represents the population mean.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, pp. 98–99.',
      },
    ],
    plainTerms: [
      'The mean is calculated by summing all values in a dataset and dividing by the number of values. For a sample of \\(n\\) observations \\(x_1, x_2, \\ldots, x_n\\), the formula is: \\[\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n} = \\frac{\\sum_{i=1}^{n} x_i}{n}\\]',
      'The sample mean \\(\\bar{x}\\) estimates the population mean \\(\\mu\\). For this estimate to be valid, the sample must be randomly selected from the population.',
      'The mean is sensitive to outliers — one extreme value will pull it up or down. When the data contain extreme values, the median may be a more appropriate summary of centre.',
    ],
    clinicalExample: {
      intro: 'A physiotherapist measures shoulder abduction strength (\\(\\text{N}\\)) in 5 patients: 120, 135, 142, 128, 115.',
      bullets: [
        '\\[\\bar{x} = \\frac{120 + 135 + 142 + 128 + 115}{5} = \\frac{640}{5} = 128 \\text{ N}\\]',
        'Interpretation: on average, patients in this group generate 128 N of shoulder abduction force.',
        'If one patient had a value of 300 N (e.g., a former elite athlete), \\(\\bar{x}\\) would rise to 168 N — no longer representative of the typical patient.',
      ],
    },
    diagramId: 'mean',
    quiz: {
      intro: null,
      items: [
        {
          q: 'A clinician records knee flexion ROM (\\(^\\circ\\)) for 6 patients: 95, 100, 88, 110, 105, 102. What is the mean?',
          a: '\\[\\bar{x} = \\frac{95 + 100 + 88 + 110 + 105 + 102}{6} = \\frac{600}{6} = 100^\\circ\\]',
        },
        {
          q: 'What does the Greek letter \\(\\mu\\) represent, and how does it differ from \\(\\bar{x}\\)?',
          a: '\\(\\mu\\) is the population mean — the average of all values in the entire population. \\(\\bar{x}\\) is the sample mean, calculated from the subset of participants actually measured. \\(\\bar{x}\\) is used to estimate \\(\\mu\\).',
        },
        {
          q: 'A researcher reports a mean pain score (VAS) of 3.2 for 30 post-operative patients. One patient scored 9.8 due to an unrelated complication. How does this outlier affect the mean?',
          a: 'It inflates the mean, pulling it above the typical pain level experienced by the remaining 29 patients. Reporting the median alongside the mean would give a more complete picture in this case.',
        },
      ],
    },
  },

  /* ── 2.1.2  Median ────────────────────────────────────────────────────── */
  'median': {
    definitions: [
      {
        term: 'Median (\\(M\\))',
        text: 'To find the median weight of the 50 people, order the data and find the number that splits the data into two equal parts. The median is generally a better measure of the center when there are extreme values or outliers because it is not affected by the precise numerical values of the outliers. The mean is the most common measure of the center.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 98.',
      },
    ],
    plainTerms: [
      'To find the median: (1) order all data values from smallest to largest; (2) if the sample size \\(n\\) is odd, the median is the middle value at position \\(\\frac{n+1}{2}\\); (3) if \\(n\\) is even, the median is the average of the two central values at positions \\(\\frac{n}{2}\\) and \\(\\frac{n}{2}+1\\).',
      'The letter \\(M\\) is commonly used to denote the median. Unlike the mean, the median is unaffected by extreme values, making it the preferred measure of centre for skewed distributions or datasets with outliers — for example, a patient population in which one individual has an unusually severe condition.',
    ],
    clinicalExample: {
      intro: 'Gait speed (m/s) is measured in 7 stroke patients, ordered from slowest to fastest: 0.42, 0.55, 0.68, 0.71, 0.89, 0.92, 1.05.',
      bullets: [
        '\\(n = 7\\) (odd) → median is the \\(\\frac{7+1}{2} = 4^{\\text{th}}\\) value.',
        '\\(M = 0.71\\) m/s.',
        'If an 8th patient with gait speed 1.40 m/s is added, \\(n = 8\\) (even) → \\(M = \\frac{0.71 + 0.89}{2} = 0.80\\) m/s.',
      ],
    },
    diagramId: 'median',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Knee extension force (N) is recorded for 5 patients: 182, 165, 201, 170, 195. What is the median?',
          a: 'Order the data: 165, 170, 182, 195, 201. With \\(n = 5\\) (odd), the median is the 3rd value: \\(M = 182\\) N.',
        },
        {
          q: 'In what situation is the median preferred over the mean as a summary statistic?',
          a: 'When the dataset contains extreme values (outliers) or when the distribution is skewed. The mean is pulled toward outliers and becomes unrepresentative, whereas the median remains at the true midpoint of the distribution.',
        },
      ],
    },
  },

  /* ── 2.1.3  Variance ─────────────────────────────────────────────────── */
  'variance': {
    definitions: [
      {
        term: 'Variance (\\(s^2\\))',
        text: 'The variance is the average of the squared deviations from the mean. For a sample: \\(s^2 = \\frac{\\sum(x_i - \\bar{x})^2}{n-1}\\). Squaring the deviations removes negative signs and penalises large deviations more heavily than small ones.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, pp. 111–112.',
      },
      {
        term: "Why divide by \\(n - 1\\)? (Bessel's correction)",
        text: "Dividing by n − 1 instead of n produces an unbiased estimate of the population variance. A sample's deviations are computed from x̄ — which, by definition, is the closest possible centre to the observed data. Deviations from x̄ are therefore slightly smaller than they would be from the true μ, so dividing by n would consistently underestimate σ².",
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 112.',
      },
      {
        term: 'Population vs. Sample Variance',
        text: 'Population variance: \\(\\sigma^2 = \\frac{\\sum(x_i - \\mu)^2}{N}\\). Sample variance: \\(s^2 = \\frac{\\sum(x_i - \\bar{x})^2}{n-1}\\). Clinical research almost always involves samples, so \\(s^2\\) is used.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides]. LUNEX University.',
      },
    ],
    plainTerms: [
      "The variance quantifies how dispersed individual measurements are around the mean. Steps: (1) find each value's deviation from the mean \\((x_i - \\bar{x})\\); (2) square each deviation — removes negative signs and weights large deviations more heavily; (3) sum all squared deviations; (4) divide by \\(n-1\\) to obtain the average squared deviation.",
      'Because deviations are squared, variance is expressed in squared units (e.g., N² for a force measurement). This makes variance difficult to interpret directly in clinical terms — which is why we report the standard deviation (the square root of variance), which restores the original unit.',
      "A key check: the sum of all deviations from the mean always equals zero — \\(\\sum(x_i - \\bar{x}) = 0\\). If your deviations do not sum to zero, there is an arithmetic error.",
    ],
    clinicalExample: {
      intro: 'Using the shoulder abduction strength values from section 2.1.1: 120, 135, 142, 128, 115 N (\\(\\bar{x}\\) = 128 N):',
      bullets: [
        'Deviations: \\((120-128)=-8\\); \\((135-128)=+7\\); \\((142-128)=+14\\); \\((128-128)=0\\); \\((115-128)=-13\\). Sum = 0 ✓',
        'Squared deviations: 64; 49; 196; 0; 169.',
        '\\[s^2 = \\frac{64 + 49 + 196 + 0 + 169}{5 - 1} = \\frac{478}{4} = 119.5 \\text{ N}^2\\]',
        'Interpretation: the average squared deviation from mean strength is 119.5 N². Units are N² — not directly interpretable clinically. The standard deviation (next section) resolves this.',
      ],
    },
    diagramId: 'desc-variance',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Why are deviations squared when computing variance?',
          a: 'Squaring serves two purposes: (1) it removes negative signs — without squaring, positive and negative deviations would cancel and always sum to zero; (2) it weights large deviations more heavily than small ones, making variance sensitive to extreme values.',
        },
        {
          q: "Why is n − 1 used as the denominator in sample variance rather than n?",
          a: "Dividing by n − 1 (Bessel's correction) produces an unbiased estimate of the population variance σ². Dividing by n would consistently underestimate σ², because the sample mean x̄ minimises the sum of squared deviations from the observed sample — it is, by definition, closer to the data than the true μ.",
        },
        {
          q: 'Three balance scores (points): 50, 55, 60. Calculate the sample variance.',
          a: '\\(\\bar{x} = 55\\). Deviations: −5, 0, +5. Squared: 25, 0, 25. \\(s^2 = \\frac{25+0+25}{3-1} = \\frac{50}{2} = 25\\) points².',
        },
      ],
    },
  },

  /* ── 2.1.4  Standard Deviation ────────────────────────────────────────── */
  'std-deviation': {
    definitions: [
      {
        term: 'Standard Deviation (\\(s\\) or \\(\\sigma\\))',
        text: 'The standard deviation is the square root of the variance. It is expressed in the same unit as the original data and represents the typical distance of individual values from the mean.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 112.',
      },
      {
        term: 'Formula',
        text: 'Sample SD: \\(s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}\\). Population SD: \\(\\sigma = \\sqrt{\\frac{\\sum(x_i - \\mu)^2}{N}}\\). In clinical research with samples, \\(s\\) is used.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 112.',
      },
    ],
    plainTerms: [
      'The standard deviation (SD) is defined as \\(s = \\sqrt{s^2}\\). Taking the square root converts variance back to the original measurement unit — if strength is in N, SD is in N — making it directly interpretable as the typical spread of individual values around the mean.',
      'A small SD means values cluster tightly around the mean (a homogeneous group). A large SD indicates wide spread (a heterogeneous group). In normally distributed data, approximately 68% of values fall within \\(\\pm 1\\) SD of the mean, and 95% within \\(\\pm 2\\) SD (Empirical Rule, section 2.2.3.1).',
      'In published research, data are reported as mean \\(\\pm\\) SD (e.g., "128 \\(\\pm\\) 11 N"). This tells the reader both the central estimate and how variable the group is.',
    ],
    clinicalExample: {
      intro: 'Continuing the shoulder abduction example (\\(\\bar{x}\\) = 128 N, \\(s^2\\) = 119.5 N²):',
      bullets: [
        '\\[s = \\sqrt{119.5} \\approx 10.9 \\text{ N}\\]',
        'Interpretation: individual patients typically deviate from the mean by about 10.9 N.',
        'Reported as: \\(\\bar{x} \\pm s = 128 \\pm 11\\) N.',
        '\\(\\pm 1\\) SD range: 117.1 – 138.9 N. If normally distributed, ≈68% of patients would fall in this range.',
      ],
    },
    diagramId: 'desc-sd',
    quiz: {
      intro: null,
      items: [
        {
          q: 'A dataset has \\(s^2 = 36\\) kg². What is the standard deviation, and what are its units?',
          a: '\\(s = \\sqrt{36} = 6\\) kg. The SD is expressed in the same unit as the data (kg), making it directly interpretable as the typical distance from the mean.',
        },
        {
          q: 'Grip strength is reported as "42 \\(\\pm\\) 7 kg" (mean \\(\\pm\\) SD). What range contains approximately 68% of values?',
          a: '\\(\\pm 1\\) SD of the mean: \\(42 - 7 = 35\\) kg to \\(42 + 7 = 49\\) kg. In a normal distribution, ≈68% of values fall within one standard deviation of the mean.',
        },
        {
          q: 'Two groups have the same mean knee ROM (110°) but Group A has \\(s = 5°\\) and Group B has \\(s = 25°\\). What does this tell you?',
          a: 'Group A is homogeneous — all patients responded similarly. Group B is heterogeneous — some improved greatly while others improved little. The mean alone is misleading without the SD; always report both.',
        },
      ],
    },
  },

  /* ── 2.1.5  Standard Error ────────────────────────────────────────────── */
  'std-error': {
    definitions: [
      {
        term: 'Standard Error of the Mean (SEM)',
        text: 'The standard error of the mean (\\(\\text{SEM} = s / \\sqrt{n}\\)) quantifies how precisely the sample mean \\(\\bar{x}\\) estimates the true population mean \\(\\mu\\). It is the standard deviation of the sampling distribution of the mean.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 367.',
      },
      {
        term: 'SD vs. SEM',
        text: 'Standard deviation (SD) describes the variability of individual measurements in the sample. Standard error (SEM) describes the precision of the mean estimate. SEM decreases as n increases (÷√n); SD does not systematically depend on n.',
        citation: 'Cook, A., Netuveli, G., & Sheikh, A. (2004). Basic Skills in Statistics. Class Publishing.',
      },
    ],
    plainTerms: [
      'The SEM answers a different question than the SD: not "how variable are the individuals?" but "how precisely does our sample mean estimate the true population mean?" Formula: \\(\\text{SEM} = \\frac{s}{\\sqrt{n}}\\). A smaller SEM means a more reliable estimate of \\(\\mu\\).',
      'Critically, SEM shrinks as sample size grows — doubling \\(n\\) reduces SEM by a factor of \\(\\sqrt{2}\\). SD, by contrast, reflects true variability in the population and is relatively stable with increasing \\(n\\). This is why larger studies yield more precise mean estimates even when the underlying variability (SD) is unchanged.',
      'In clinical research: use SD when describing how spread out a group of patients is (e.g., how consistent the response to treatment is). Use SEM for building confidence intervals and hypothesis testing. A common error in physiotherapy publications is reporting "mean \\(\\pm\\) SEM" when describing patient variability — SEM produces artificially narrow error bars, overstating the precision of individual-level variation.',
    ],
    clinicalExample: {
      intro: 'From the shoulder abduction example: \\(n = 5\\) patients, \\(s = 10.9\\) N.',
      bullets: [
        '\\[\\text{SEM} = \\frac{s}{\\sqrt{n}} = \\frac{10.9}{\\sqrt{5}} \\approx \\frac{10.9}{2.24} \\approx 4.9 \\text{ N}\\]',
        'Interpretation: the sample mean (128 N) is estimated to lie within about 4.9 N of the true population mean.',
        'If \\(n\\) were increased to 20: \\(\\text{SEM} = 10.9 / \\sqrt{20} \\approx 2.4\\) N — a more precise estimate with the same SD.',
        'Common error: reporting "128 \\(\\pm\\) 4.9 N (mean \\(\\pm\\) SEM)" when describing patient spread. The SD (10.9 N) is what tells readers how variable the patients are; the SEM (4.9 N) only tells them about the precision of the mean estimate.',
      ],
    },
    diagramId: 'desc-sem',
    quiz: {
      intro: null,
      items: [
        {
          q: 'In a sample of \\(n = 25\\) patients, the SD of gait speed is 0.4 m/s. What is the SEM?',
          a: '\\(\\text{SEM} = \\frac{0.4}{\\sqrt{25}} = \\frac{0.4}{5} = 0.08\\) m/s. The sample mean gait speed is estimated to be within about 0.08 m/s of the true population mean.',
        },
        {
          q: 'A study with \\(n = 16\\) has SEM = 3 kg. What would the SEM be with \\(n = 64\\)?',
          a: '\\(s = \\text{SEM} \\times \\sqrt{n} = 3 \\times 4 = 12\\) kg. With \\(n = 64\\): \\(\\text{SEM} = 12 / \\sqrt{64} = 12 / 8 = 1.5\\) kg. Quadrupling \\(n\\) halves the SEM.',
        },
        {
          q: 'A paper reports "mean \\(\\pm\\) SEM = 45 \\(\\pm\\) 2 kg" for grip strength in 50 patients. A colleague says the error bars look too narrow. Is the colleague right?',
          a: 'Yes. Reporting \\(\\pm\\) SEM (not \\(\\pm\\) SD) is appropriate for precision of the mean estimate, not for describing individual variability. The SD would be: \\(s = 2 \\times \\sqrt{50} \\approx 14\\) kg — far wider. Readers comparing patient-level spread need the SD.',
        },
      ],
    },
  },

  /* ── 2.2  Types of Graphs ─────────────────────────────────────────────── */
  'graphs': {
    definitions: [
      {
        term: 'Statistical graphs',
        text: 'A statistical graph is a tool that helps you learn about the shape or distribution of a sample or a population. A graph can be a more effective way of presenting data than a mass of numbers because we can see where data clusters and where there are only a few data values.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 65.',
      },
      {
        term: 'Common graph types',
        text: 'Some of the types of graphs that are used to summarize and organize data are the dot plot, the bar graph, the histogram, the stem-and-leaf plot, the frequency polygon (a type of broken line graph), the pie chart, and the box plot.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 66.',
      },
    ],
    plainTerms: [
      'Selecting the correct graph type is one of the most important decisions in data presentation. The choice depends on the type of variable (categorical vs. continuous), the number of variables, and what you wish to communicate — frequencies, distributions, trends, or relationships.',
      'A common error in physiotherapy research papers is using a bar chart when a histogram is required (or vice versa). Understanding the difference — bars with gaps for discrete categories vs. contiguous bars for continuous distributions — prevents misrepresenting the data.',
    ],
    clinicalExample: {
      intro: 'Match each physiotherapy research scenario to the most appropriate graph type:',
      bullets: [
        'Proportion of patients with each diagnosis (ankle sprain, knee OA, LBP, shoulder impingement) → Pie chart or bar chart.',
        'Distribution of Numeric Pain Rating Scale (NPRS) scores at baseline across 80 patients → Histogram.',
        'ROM change (\\(^\\circ\\)) from week 1 to week 8 in an intervention group → Line graph.',
        'Relationship between body mass index (\\(\\text{kg/m}^2\\)) and 6-minute walk test distance → Scatter plot.',
      ],
    },
    diagramId: 'graph-selector',
    quiz: {
      intro: 'Choose the most appropriate graph type for each scenario.',
      items: [
        {
          q: 'A researcher wants to show how many patients fall into each pain category (none, mild, moderate, severe) in a clinical trial. Which graph is most appropriate?',
          a: 'Bar chart (or pie chart). Pain category is an ordinal variable; the bar chart displays the frequency of each category clearly. Bars are separated by gaps to signal that the categories are distinct and unordered.',
        },
        {
          q: 'A physiotherapist tracks mean Borg RPE scores over a 12-week exercise programme. Which graph best shows this trend?',
          a: 'Line graph — it is designed to illustrate change over time, with data points connected by a line to show the temporal trend.',
        },
      ],
    },
  },

  /* ── 2.2.1  Bar Chart ─────────────────────────────────────────────────── */
  'bar-chart': {
    definitions: [
      {
        term: 'Bar Chart',
        text: 'Bar graphs consist of bars that are separated from each other. The bars can be rectangles or they can be rectangular boxes (used in three-dimensional plots), and they can be vertical or horizontal.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 72.',
      },
      {
        term: 'Bar chart — purpose',
        text: 'Used to visualize the absolute and relative frequencies of observed values of a variable. Can be used for nominal and ordinal variables.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 13]. LUNEX University.',
      },
    ],
    plainTerms: [
      'A bar chart displays categorical data with rectangular bars. The height (or length) of each bar is proportional to the frequency or relative frequency of the category. Bars are separated by visible gaps to emphasise that the categories are distinct — not continuous.',
      'Bar charts are appropriate for nominal variables (e.g., injury location: knee, ankle, hip) and ordinal variables (e.g., pain: none, mild, moderate, severe). They should not be used for continuous quantitative data — use a histogram instead.',
    ],
    clinicalExample: {
      intro: 'A sports physiotherapy clinic records the primary injury location for 120 athletes presenting in one season.',
      bullets: [
        'Injury locations: Knee (42), Ankle (28), Shoulder (20), Back (18), Hip (12).',
        'A bar chart with "Injury Location" on the x-axis and "Number of athletes" on the y-axis gives an immediate visual comparison.',
        'The gaps between bars signal that the categories (knee, ankle, etc.) are separate — this is the visual feature that distinguishes a bar chart from a histogram.',
      ],
    },
    diagramId: 'bar-chart',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Can a bar chart be used for an ordinal variable? Give a physiotherapy example.',
          a: 'Yes. The Modified Ashworth Scale (MAS) for spasticity (0, 1, 1+, 2, 3, 4) is ordinal — a bar chart showing the frequency of patients at each level is appropriate. The bars are ordered, but still separated by gaps.',
        },
        {
          q: 'What visually distinguishes a bar chart from a histogram?',
          a: 'Bar charts have gaps between bars (discrete, categorical data). Histograms have no gaps — bars are contiguous — reflecting that the variable is continuous. The order of bars in a histogram cannot be changed; bar chart bars can be reordered.',
        },
      ],
    },
  },

  /* ── 2.2.2  Pie Chart ─────────────────────────────────────────────────── */
  'pie-chart': {
    definitions: [
      {
        term: 'Pie Chart',
        text: 'Used to visualize the absolute and relative frequencies of nominal (categorical) and ordinal variables.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 12]. LUNEX University.',
      },
    ],
    plainTerms: [
      'A pie chart represents a whole dataset as a circle divided into sectors. Each sector\'s angle (and area) is proportional to the frequency or percentage it represents. Pie charts are best suited to a small number of categories (ideally ≤ 5) and when the goal is to show each category\'s share of the total.',
      'Limitations: pie charts are difficult to read when categories have similar proportions, or when there are many slices. In those cases, a bar chart is often clearer because humans judge length more accurately than area or angle.',
    ],
    clinicalExample: {
      intro: 'A rehabilitation unit records the primary diagnoses of 200 patients admitted over one year.',
      bullets: [
        'LBP: 80 (40%), Knee OA: 50 (25%), Stroke: 40 (20%), Hip fracture: 20 (10%), Other: 10 (5%).',
        'A pie chart immediately conveys that LBP and knee OA together account for 65% of admissions — a message that may inform staffing and training decisions.',
      ],
    },
    diagramId: 'pie-chart',
    quiz: {
      intro: null,
      items: [
        {
          q: 'A study reports that 55% of participants are female and 45% male. Which graph — pie chart or bar chart — better communicates this proportion?',
          a: 'A pie chart effectively shows the two segments of a whole (55% vs 45%). A bar chart is also acceptable. For two categories, a pie chart makes the part-whole relationship intuitive.',
        },
        {
          q: 'When is a pie chart a poor choice for presenting data?',
          a: 'When there are many categories (> 5), when categories have very similar proportions (hard to distinguish slice sizes), or when the goal is to compare magnitudes rather than show part-whole relationships. A bar chart is preferable in those situations.',
        },
      ],
    },
  },

  /* ── 2.2.3  Histogram ─────────────────────────────────────────────────── */
  'histogram': {
    definitions: [
      {
        term: 'Histogram',
        text: 'A histogram consists of contiguous (adjoining) boxes. It has both a horizontal axis and a vertical axis. The horizontal axis is labeled with what the data represents (for instance, distance from your home to school). The vertical axis is labeled either frequency or relative frequency (or percent frequency or probability). The graph will have the same shape with either label. The histogram (like the stemplot) can give you the shape of the data, the center, and the spread of the data.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 75.',
      },
      {
        term: 'Histogram — purpose',
        text: 'Used to visualize the distribution of values of continuous variables.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 14]. LUNEX University.',
      },
    ],
    plainTerms: [
      'A histogram groups continuous data into equal-width intervals (bins) and displays the frequency of observations in each bin as a contiguous bar. Because the variable is continuous (any value in a range is possible), bars touch each other — there are no gaps.',
      'A histogram is NOT a bar chart. Key differences: (1) histograms display quantitative (continuous) data; bar charts display categorical data. (2) Histogram bars are contiguous (no gaps); bar chart bars have gaps. (3) The order of bars in a histogram cannot be changed — it represents a numeric scale. Bar chart bars can be reordered without changing meaning.',
      'From a histogram you can read the shape of the distribution (symmetric, skewed left, or skewed right), the centre, and the spread of the data.',
    ],
    clinicalExample: {
      intro: 'A physiotherapist measures baseline knee flexion ROM (\\(^\\circ\\)) in 50 patients before ACL rehabilitation.',
      bullets: [
        'Values range from 68\\(^\\circ\\) to 128\\(^\\circ\\). ROM is a continuous variable (goniometer readings include decimals).',
        'A histogram with 10\\(^\\circ\\) bins (60–70, 70–80, …, 120–130) reveals how values are distributed across the group.',
        'A right-skewed histogram indicates that most patients cluster at lower ROM, with fewer having near-full ROM — useful clinical insight for planning group-based rehabilitation.',
      ],
    },
    diagramId: 'histogram',
    quiz: {
      intro: null,
      items: [
        {
          q: 'A researcher plots gait speed (m/s) for 80 patients. Should they use a bar chart or a histogram? Why?',
          a: 'A histogram, because gait speed is a continuous quantitative variable — it takes values across a range (e.g., 0.2–1.8 m/s) rather than belonging to discrete categories. Histograms display the distribution of continuous data; bar charts display categorical frequencies.',
        },
        {
          q: 'What does the shape of a histogram tell you about a dataset?',
          a: 'Whether the distribution is symmetric (bell-shaped), skewed right (tail extends right, mean > median), or skewed left (tail extends left, mean < median). It also shows where values cluster and whether there are gaps or extreme values.',
        },
      ],
    },
  },

  /* ── 2.2.3.1  Normal Distribution ────────────────────────────────────── */
  'normal-distribution': {
    definitions: [
      {
        term: 'Normal Distribution',
        text: 'The normal, a continuous distribution, is the most important of all the distributions. It is widely used and even more widely abused. Its graph is bell-shaped.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 335.',
      },
      {
        term: 'Parameters and Notation',
        text: 'The normal distribution has two parameters (two numerical descriptive measures): the mean (μ) and the standard deviation (σ). If X is a quantity to be measured that has a normal distribution with mean (μ) and standard deviation (σ), we designate this by writing NORMAL: X ~ N(μ, σ).',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 335.',
      },
      {
        term: 'Symmetry — Mean, Median, and Mode Coincide',
        text: 'The curve is symmetric about a vertical line drawn through the mean, μ. In theory, the mean is the same as the median, because the graph is symmetric about μ.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 336.',
      },
      {
        term: 'Empirical Rule (68-95-99.7 Rule)',
        text: 'About 68% of the x values lie between –1σ and +1σ of the mean μ (within one standard deviation of the mean). About 95% of the x values lie between –2σ and +2σ of the mean μ (within two standard deviations of the mean). About 99.7% of the x values lie within three standard deviations of the mean. The empirical rule is also known as the 68-95-99.7 rule.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 338.',
      },
      {
        term: 'Probability as Area',
        text: 'In continuous variables (height, weight), the probability of getting exactly one value is basically 0. So we talk about probability across an interval (range). Probability = area, not height.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 19]. LUNEX University.',
      },
    ],
    plainTerms: [
      'The normal distribution is completely defined by two parameters: the mean \\(\\mu\\) (which centres the bell curve) and the standard deviation \\(\\sigma\\) (which controls its width). A smaller \\(\\sigma\\) produces a taller, narrower bell; a larger \\(\\sigma\\) produces a flatter, broader curve. Changing \\(\\mu\\) shifts the entire curve left or right.',
      'The bell curve is perfectly symmetric about \\(\\mu\\). This means that mean = median = mode — all three coincide at the peak, and exactly 50% of values lie above \\(\\mu\\) and 50% below.',
      'The Empirical Rule (68-95-99.7 rule): 68% of all values fall within \\(\\pm 1\\sigma\\) of the mean; 95% within \\(\\pm 2\\sigma\\); and 99.7% within \\(\\pm 3\\sigma\\). Values beyond \\(\\pm 3\\sigma\\) are extremely rare — fewer than 0.3% of all observations.',
      'Because the variable is continuous, the probability of observing any single exact value is essentially zero (there are infinitely many possible values). Probability is expressed as the area under the curve between two values — this area represents the proportion of the total distribution falling in that interval.',
    ],
    clinicalExample: {
      intro: 'Grip strength in healthy adults is approximately normally distributed. Assuming \\(X \\sim N(45, 8)\\) kg in a reference population:',
      bullets: [
        '68% of healthy adults have grip strength between 37 and 53 kg (\\(45 \\pm 8\\)).',
        '95% have grip strength between 29 and 61 kg (\\(45 \\pm 16\\)).',
        '99.7% have grip strength between 21 and 69 kg (\\(45 \\pm 24\\)).',
        'A patient presenting with 20 kg is more than \\(3\\sigma\\) below the mean — well outside the normal range, indicating a clinically significant deficit worth investigating.',
      ],
    },
    diagramId: 'normal-distribution',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What two parameters must you know to fully define a normal distribution?',
          a: 'The mean \\(\\mu\\) (which centres the curve) and the standard deviation \\(\\sigma\\) (which controls the spread). These two values are all that is needed: \\(X \\sim N(\\mu, \\sigma)\\).',
        },
        {
          q: 'According to the Empirical Rule, approximately what percentage of values in a normal distribution fall within \\(\\pm 2\\) standard deviations of the mean?',
          a: '95%. About 95% of observations fall in the range \\(\\mu \\pm 2\\sigma\\). The remaining ~5% lie further than \\(2\\sigma\\) from the mean — about 2.5% in each tail.',
        },
        {
          q: 'Knee extension peak torque in healthy adults is \\(X \\sim N(180, 20)\\) N·m. Between what two values do 68% of measurements fall?',
          a: '68% of values lie within \\(\\pm 1\\sigma\\) of the mean: \\(180 - 20 = 160\\) N·m to \\(180 + 20 = 200\\) N·m.',
        },
        {
          q: 'Why is probability in a normal distribution expressed as area under the curve rather than height?',
          a: 'A continuous variable can take infinitely many exact values, so the probability of any single exact value is essentially zero. Probability is therefore calculated as the area under the curve between two values — that area represents the proportion of the distribution falling in the interval. A wider interval always encompasses a larger area (and thus a higher probability).',
        },
      ],
    },
  },

  /* ── 2.2.3.2  Central Limit Theorem ──────────────────────────────────── */
  'central-limit-theorem': {
    definitions: [
      {
        term: 'Central Limit Theorem',
        text: 'Given a random variable (RV) with known mean μ and known standard deviation, σ, we are sampling with size n, and we are interested in two new RVs: the sample mean, X̄, and the sample sum, ΣX. If the size (n) of the sample is sufficiently large, then X̄ ~ N(μ, σ/√n) and ΣX ~ N(nμ, (√n)(σ)). If the size (n) of the sample is sufficiently large, then the distribution of the sample means and the distribution of the sample sums will approximate normal distributions regardless of the shape of the population.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 388.',
      },
      {
        term: 'Sampling Distribution of the Mean',
        text: 'If you draw random samples of size n, the distribution of the random variable X̄, which consists of sample means, is called the sampling distribution of the mean. The sampling distribution of the mean approaches a normal distribution as n, the sample size, increases.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 366.',
      },
      {
        term: 'Standard Error of the Mean (SEM)',
        text: '\\(\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}\\) is the standard deviation of \\(\\bar{X}\\) and is called the standard error of the mean. It describes how far (on average) the sample mean will be from the population mean in repeated simple random samples of size n.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 367.',
      },
      {
        term: 'Sample Size Requirement',
        text: 'The size of the sample, n, that is required in order to be "large enough" depends on the original population from which the samples are drawn (the sample size should be at least 30 or the data should come from a normal distribution). If the original population is far from normal, then more observations are needed for the sample means or sums to be normal. Sampling is done with replacement.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 365.',
      },
    ],
    plainTerms: [
      'The CLT is the reason the normal distribution is so central to statistics: no matter what shape the original population has — skewed, uniform, bimodal — if you draw repeated samples of size \\(n \\geq 30\\) and calculate each sample\'s mean, those sample means will form an approximately normal (bell-shaped) distribution. This is the sampling distribution of the mean.',
      'The mean of the sampling distribution equals the population mean \\(\\mu\\). This tells us our sample means are centred on the true value — taking larger samples does not introduce bias, it simply reduces variability.',
      'The spread of the sampling distribution is captured by the Standard Error of the Mean: \\(\\text{SEM} = \\frac{\\sigma}{\\sqrt{n}}\\). As \\(n\\) increases, the SEM shrinks — larger samples yield more precise (less variable) estimates of \\(\\mu\\). Doubling the sample size reduces the SEM by a factor of \\(\\sqrt{2}\\).',
      'The CLT justifies using normal-distribution-based methods (z-scores, confidence intervals, t-tests) even when you do not know the exact shape of the population — as long as your sample is large enough.',
    ],
    clinicalExample: {
      intro: 'Walking speed (m/s) in community-dwelling stroke survivors may be right-skewed (most patients cluster near zero, a few approach normal). Assume \\(\\mu = 0.8\\) m/s and \\(\\sigma = 0.3\\) m/s in this population.',
      bullets: [
        'If we take many random samples of \\(n = 36\\) patients each and record each sample\'s mean, by the CLT those sample means follow \\(\\bar{X} \\sim N\\left(0.8,\\, \\frac{0.3}{\\sqrt{36}}\\right) = N(0.8,\\, 0.05)\\).',
        'SEM = 0.3 / √36 = 0.05 m/s — so most sample means will fall within 0.05 m/s of the true population mean.',
        'Increasing to \\(n = 100\\): SEM = 0.3 / √100 = 0.03 m/s. The distribution of sample means is narrower and even more centred on \\(\\mu\\).',
        'This means a researcher with \\(n = 100\\) can estimate the true mean walking speed far more precisely than one with \\(n = 36\\), even from the same skewed population.',
      ],
    },
    diagramId: 'central-limit-theorem',
    quiz: {
      intro: null,
      items: [
        {
          q: 'According to the CLT, what shape does the distribution of sample means approach as \\(n\\) increases, regardless of the shape of the original population?',
          a: 'A normal (bell-shaped) distribution. The CLT states that for sufficiently large \\(n\\) (generally \\(n \\geq 30\\)), the sampling distribution of the mean is approximately normal regardless of the original population\'s shape.',
        },
        {
          q: 'In a population with \\(\\sigma = 12\\), what is the Standard Error of the Mean for samples of \\(n = 36\\)?',
          a: '\\(\\text{SEM} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{12}{\\sqrt{36}} = \\frac{12}{6} = 2\\). This means repeated sample means will be about 2 units apart on average.',
        },
        {
          q: 'A researcher takes repeated samples of \\(n = 49\\) balance scores from a population with \\(\\mu = 60\\) and \\(\\sigma = 14\\). Write the distribution of sample means.',
          a: '\\(\\bar{X} \\sim N\\!\\left(60,\\, \\frac{14}{\\sqrt{49}}\\right) = N(60,\\, 2)\\). The sampling distribution is centred on the population mean (60) with a standard error of 2.',
        },
        {
          q: 'Why does a larger sample size produce a more precise estimate of the population mean?',
          a: 'A larger \\(n\\) reduces the Standard Error of the Mean (\\(\\sigma/\\sqrt{n}\\)), which narrows the sampling distribution. Sample means cluster more tightly around \\(\\mu\\), so any single sample mean is likely to be close to the true population value.',
        },
      ],
    },
  },

  /* ── 2.2.3.3  Confidence Intervals ───────────────────────────────────── */
  'confidence-intervals': {
    definitions: [
      {
        term: 'Confidence Interval (CI)',
        text: 'An interval estimate for an unknown population parameter. This depends on: the desired confidence level, information that is known about the distribution (for example, known standard deviation), and the sample and its size.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 432.',
      },
      {
        term: 'Confidence Level (CL)',
        text: 'The percent expression for the probability that the confidence interval contains the true population parameter; for example, if the CL = 90%, then in 90 out of 100 samples the interval estimate will enclose the true population parameter.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 432.',
      },
      {
        term: 'Error Bound for a Population Mean (EBM)',
        text: 'The margin of error; depends on the confidence level, sample size, and known or estimated population standard deviation. When σ is known: EBM = z × σ/√n. When σ is unknown: EBM = t × s/√n.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 432.',
      },
      {
        term: 'Point Estimate',
        text: 'A single number computed from a sample and used to estimate a population parameter. The sample mean x̄ is the point estimate of the unknown population mean μ.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 432.',
      },
    ],
    plainTerms: [
      'A confidence interval (CI) gives us a range of plausible values for an unknown population parameter (such as the true mean \\(\\mu\\)), rather than a single point estimate. The general form is: \\(\\bar{x} \\pm \\text{EBM}\\), i.e., (\\(\\bar{x} - \\text{EBM},\\; \\bar{x} + \\text{EBM}\\)).',
      'A 95% CI means: if we repeated the sampling process 100 times and computed a CI each time, approximately 95 of those intervals would contain the true population mean. It does NOT mean "there is a 95% probability that this specific interval contains \\(\\mu\\)" — \\(\\mu\\) is a fixed (unknown) constant. A single interval either does or does not contain it.',
      'The width of the CI depends on two factors: (1) Confidence level — a higher CL (e.g., 99% vs. 95%) requires a larger z-score, producing a wider interval. (2) Sample size — a larger \\(n\\) reduces the SEM (\\(\\sigma/\\sqrt{n}\\)), which reduces the EBM and produces a narrower (more precise) interval.',
      'When the population standard deviation \\(\\sigma\\) is known, use a z-score: \\(\\text{EBM} = z_{\\alpha/2} \\times \\frac{\\sigma}{\\sqrt{n}}\\). When \\(\\sigma\\) is unknown (the common case in practice), use the sample standard deviation \\(s\\) and a t-score: \\(\\text{EBM} = t_{\\alpha/2} \\times \\frac{s}{\\sqrt{n}}\\), with \\(n - 1\\) degrees of freedom.',
    ],
    clinicalExample: {
      intro: 'A physiotherapist measures knee extension peak torque (N·m) in \\(n = 36\\) post-operative patients: \\(\\bar{x} = 148\\) N·m. Population \\(\\sigma = 24\\) N·m is known from normative data. Construct a 95% CI.',
      bullets: [
        'SEM \\(= \\frac{24}{\\sqrt{36}} = 4\\) N·m.',
        'For 95% confidence, \\(z_{0.025} = 1.96\\).',
        'EBM \\(= 1.96 \\times 4 = 7.84\\) N·m.',
        'CI \\(= (148 - 7.84,\\; 148 + 7.84) = (140.2,\\; 155.8)\\) N·m.',
        'Interpretation: "We estimate with 95% confidence that the true mean knee extension torque in this post-operative population is between 140.2 and 155.8 N·m."',
      ],
    },
    diagramId: 'confidence-intervals',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What does a 95% confidence interval actually mean in practice?',
          a: 'If the sampling process is repeated many times and a CI is computed each time, 95% of those intervals will contain the true population parameter. A single interval either does or does not contain \\(\\mu\\) — we cannot assign a probability to one specific interval. The 95% refers to the long-run reliability of the method.',
        },
        {
          q: 'If you increase the confidence level from 90% to 99%, what happens to the width of the CI? Why?',
          a: 'The CI becomes wider. A higher confidence level requires a larger z-score (e.g., \\(z = 2.576\\) for 99% vs. \\(z = 1.645\\) for 90%), which increases the EBM and therefore the total width of the interval. You pay for more certainty with less precision.',
        },
        {
          q: 'Grip strength is measured in \\(n = 64\\) patients: \\(\\bar{x} = 38\\) N, \\(\\sigma = 8\\) N. Calculate the 95% CI.',
          a: '\\(\\text{SEM} = \\frac{8}{\\sqrt{64}} = 1\\) N. \\(\\text{EBM} = 1.96 \\times 1 = 1.96\\) N. CI \\(= (38 - 1.96,\\; 38 + 1.96) = (36.04,\\; 39.96)\\) N.',
        },
        {
          q: 'Why does a larger sample size produce a narrower confidence interval?',
          a: 'A larger \\(n\\) reduces the Standard Error of the Mean (\\(\\sigma/\\sqrt{n}\\)), which reduces the EBM. A smaller margin of error produces a narrower, more precise CI — the sample mean is a better estimate of \\(\\mu\\) when more data are included.',
        },
      ],
    },
  },

  /* ── 2.2.4  Line Graph ────────────────────────────────────────────────── */
  'line-graph': {
    definitions: [
      {
        term: 'Line Graph',
        text: 'Used to visualize quantitative data collected over a specific topic and a specific time interval. Data points are connected by a line, and they represent the observations.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 16]. LUNEX University.',
      },
      {
        term: 'Line graph (technical)',
        text: 'Another type of graph that is useful for specific data values is a line graph. In a line graph, the x-axis (horizontal axis) consists of data values and the y-axis (vertical axis) consists of frequency points. The frequency points are connected using line segments.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 71.',
      },
    ],
    plainTerms: [
      'A line graph is ideal for showing how a variable changes over time. Each data point on the x-axis represents a time point (e.g., week 1, week 4, week 8), and the y-axis shows the measured variable. Points are connected by line segments, making the trend immediately visible.',
      'In physiotherapy research, line graphs are used to display changes in outcome measures (pain, ROM, strength, functional scores) across assessment time points — for example, comparing an intervention group with a control group from pre-test to post-test.',
    ],
    clinicalExample: {
      intro: 'A researcher measures mean Numeric Pain Rating Scale (NPRS, 0–10) scores at weeks 0, 2, 4, 6, and 8 in a manual therapy group and an exercise-only control group.',
      bullets: [
        'Two lines — one per group — on the same axes allow direct visual comparison of treatment trajectories.',
        'A steeper downward slope in the manual therapy group suggests faster pain reduction.',
        'The x-axis (time) is quantitative and ordered — this is appropriate for a line graph, unlike the bar chart\'s categorical x-axis.',
      ],
    },
    diagramId: 'line-graph',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What type of variable is typically placed on the x-axis of a line graph in clinical research?',
          a: 'Time (e.g., weeks, months, assessment sessions). The line graph is specifically suited to showing how an outcome variable (y-axis) changes over sequential time points.',
        },
        {
          q: 'A physiotherapist wants to compare Berg Balance Scale scores at pre-test and post-test for two groups: falls-prevention programme vs. usual care. Which graph type is most appropriate?',
          a: 'A line graph with two lines (one per group), time on the x-axis (Pre / Post), and mean Berg Balance Scale score on the y-axis. This immediately shows whether improvement differs between groups.',
        },
      ],
    },
  },

  /* ── 2.2.5  Scatter Plot ──────────────────────────────────────────────── */
  'scatter': {
    definitions: [
      {
        term: 'Scatter Plot',
        text: 'Used to visualize the relationship between two quantitative variables measured on the same individuals.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 21]. LUNEX University.',
      },
      {
        term: 'Scatter plot (technical)',
        text: 'Before we take up the discussion of linear regression and correlation, we need to examine a way to display the relation between two variables x and y. The most common and easiest way is a scatter plot.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 620.',
      },
    ],
    plainTerms: [
      'A scatter plot places each observation as a single dot on a two-dimensional plane. The x-axis represents one quantitative variable and the y-axis represents the other. Each dot corresponds to one participant\'s pair of measurements.',
      'Scatter plots serve two key purposes: (1) they reveal the direction and strength of the relationship between two variables (positive, negative, or none); (2) they allow outliers to be detected visually — isolated dots far from the main cluster are immediately apparent.',
    ],
    clinicalExample: {
      intro: 'A researcher investigates whether body mass index (\\(\\text{kg/m}^2\\)) is related to 6-minute walk test distance (metres) in patients with heart failure.',
      bullets: [
        'Each patient contributes one dot at coordinates (BMI, 6MWT distance).',
        'If dots trend downward from left to right, higher BMI is associated with shorter walk distance (negative association).',
        'A dot far above the main cluster — a patient with high BMI but unusually high exercise capacity — is an outlier worth investigating.',
      ],
    },
    diagramId: 'scatter',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What are the two variables required to construct a scatter plot?',
          a: 'Two quantitative variables measured on the same individuals. One is plotted on the x-axis and the other on the y-axis; each individual provides one data point (x, y).',
        },
        {
          q: 'A scatter plot of quadriceps strength (N·m) vs. stair-climbing time (s) for 40 patients shows a downward-sloping pattern. What does this suggest?',
          a: 'A negative association: patients with greater quadriceps strength tend to climb stairs more quickly (lower time). This is a correlation, not necessarily a causal relationship.',
        },
      ],
    },
  },

  /* ── 2.2.6  Boxplot ───────────────────────────────────────────────────── */
  'boxplot': {
    definitions: [
      {
        term: 'Box Plot (Box-and-Whisker Plot)',
        text: 'Box plots (also called box-and-whisker plots or box-whisker plots) give a good graphical image of the concentration of the data. They also show how far the extreme values are from most of the data. A box plot is constructed from five values: the minimum value, the first quartile, the median, the third quartile, and the maximum value. We use these values to compare how close other data values are to them.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 94.',
      },
      {
        term: 'Boxplot — purpose',
        text: 'Used to visualize the distribution of data based on a five number summary ("minimum", first quartile (Q1), median, third quartile (Q3), and "maximum").',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 17]. LUNEX University.',
      },
    ],
    plainTerms: [
      'The five-number summary used to construct a boxplot is: minimum, \\(Q_1\\) (first quartile), median (\\(Q_2\\)), \\(Q_3\\) (third quartile), and maximum. The box spans from \\(Q_1\\) to \\(Q_3\\) — this is the interquartile range (\\(\\text{IQR} = Q_3 - Q_1\\)) containing the middle 50% of the data. Horizontal whiskers extend from the box to the minimum and maximum values. The median is marked as a vertical line inside the box.',
      'Boxplots are particularly useful for: (a) comparing distributions across groups (e.g., intervention vs. control); (b) identifying outliers — data points beyond the whisker tips; (c) assessing skewness — if the median line is closer to \\(Q_1\\) than to \\(Q_3\\), the data are right-skewed.',
    ],
    clinicalExample: {
      intro: 'Knee extension peak torque (\\(\\text{N}\\cdot\\text{m}\\)) is measured in 30 patients before and after 8 weeks of rehabilitation.',
      bullets: [
        'Pre-rehabilitation: Min = 95, \\(Q_1\\) = 115, Median = 128, \\(Q_3\\) = 142, Max = 165.',
        'Post-rehabilitation: Min = 110, \\(Q_1\\) = 132, Median = 148, \\(Q_3\\) = 162, Max = 190.',
        'Side-by-side boxplots immediately show that the post-rehabilitation distribution is shifted upward and whether the spread has changed. A point beyond the upper whisker (e.g., 210 \\(\\text{N}\\cdot\\text{m}\\)) would be flagged as a potential outlier.',
      ],
    },
    diagramId: 'boxplot',
    quiz: {
      intro: null,
      items: [
        {
          q: 'A boxplot for a group of patients shows that the median line is very close to \\(Q_3\\). What does this suggest about the distribution?',
          a: 'The data are left-skewed (negatively skewed): most values cluster near the upper end of the distribution, with fewer values extending down toward the minimum.',
        },
        {
          q: 'What is the interquartile range (IQR) and why is it a useful measure of variability?',
          a: '\\(\\text{IQR} = Q_3 - Q_1\\). It represents the range of the middle 50% of the data. It is useful because it describes spread without being influenced by extreme values (outliers). A large IQR indicates high variability in the central data; a small IQR indicates that most values cluster closely around the median.',
        },
      ],
    },
  },

  /* ── 2.3  Data Presentation ───────────────────────────────────────────── */
  'data-presentation': {
    definitions: [
      {
        term: 'Data presentation in research papers',
        text: 'Graphs provide clues that words and equations do not. They are a great tool to form hypotheses and draw conclusions. However, they can be inaccurately interpreted, resulting in incorrect answers or conclusions.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 11]. LUNEX University.',
      },
    ],
    plainTerms: [
      'In scientific papers, data are presented visually (graphs and figures) or numerically (tables). The choice depends on what needs to be communicated: graphs are powerful for showing patterns, distributions, and comparisons; tables allow precise numerical values to be read and compared directly.',
      'Being able to critically read graphs and tables in published physiotherapy research is a core competency. Common pitfalls include truncated y-axes that exaggerate differences, ambiguous error bars (SD vs. SEM vs. 95% CI), and overloaded tables where the key finding is buried.',
    ],
    clinicalExample: {
      intro: 'When critically appraising a physiotherapy RCT, check the following in every figure:',
      bullets: [
        'Does the y-axis start at zero? If not, differences may appear larger than they are.',
        'Are error bars defined? SD describes spread; SEM describes precision of the mean estimate; 95% CI gives the plausible range for the true mean.',
        'Are individual data points shown alongside group summaries? For small samples (n < 30), showing individual values alongside a boxplot or bar is good practice.',
      ],
    },
    diagramId: 'data-presentation',
    quiz: {
      intro: null,
      items: [
        {
          q: 'A bar graph in a paper shows the y-axis starting at 70 rather than 0, making the difference between two bars appear very large. Why is this potentially misleading?',
          a: 'Starting the axis above zero truncates the bars and visually exaggerates the difference between groups. A reader may overestimate the clinical significance of a small absolute difference. The y-axis should start at zero, or this choice must be clearly justified.',
        },
      ],
    },
  },

  /* ── 2.3.1  Graphs in papers ──────────────────────────────────────────── */
  'graphs-papers': {
    definitions: [
      {
        term: 'When to use each graph type in research',
        text: 'Bar: Comparing conditions or groups. Line: Illustrating developments over time. Pie: Presenting proportions (e.g. in a sample). Scatterplot: Showing relations between variables.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 10]. LUNEX University.',
      },
    ],
    plainTerms: [
      'In a published research paper, figures are chosen to match the data structure and the research question. A mismatch — for example, using a line graph for unordered categories — can mislead readers about the nature of the data.',
      'Reporting standards (e.g., APA, CONSORT for RCTs) recommend: including the number of participants per group, axis labels with units, and a caption that makes the figure self-explanatory without requiring the main text.',
    ],
    clinicalExample: {
      intro: 'Match each physiotherapy paper context to the correct figure type:',
      bullets: [
        '"Mean Berg Balance Scale compared between fallers and non-fallers" → Bar chart (comparing two groups).',
        '"Mean NPRS score tracked at weeks 0, 2, 4, 6, and 8" → Line graph (change over time).',
        '"Proportion of patients achieving a minimal clinically important difference" → Pie chart or stacked bar chart.',
        '"Whether quadriceps strength predicts stair-climbing time" → Scatter plot (relationship between two quantitative variables).',
      ],
    },
    diagramId: 'graphs-papers',
    quiz: {
      intro: null,
      items: [
        {
          q: 'In a clinical trial paper, which graph type best displays mean KOOS score from baseline to 6-month follow-up across three groups?',
          a: 'A line graph with three lines (one per group) and time on the x-axis. Alternatively, a grouped bar chart comparing baseline vs. follow-up for each group. The line graph is preferred when the temporal trend is the main focus.',
        },
      ],
    },
  },

  /* ── 2.3.2  Tables ────────────────────────────────────────────────────── */
  'tables': {
    definitions: [
      {
        term: 'Tables — results',
        text: 'Used to present results from research, e.g., within or between-group comparisons.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 22]. LUNEX University.',
      },
      {
        term: 'Tables — participant characteristics',
        text: 'Or used to show participants\' demographic or clinical characteristics.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 23]. LUNEX University.',
      },
    ],
    plainTerms: [
      'Tables are used when exact numerical values matter. A well-designed table allows readers to look up and compare individual values directly — something graphs do not facilitate. In physiotherapy RCTs, a standard "Table 1" presents participant demographics and baseline characteristics (age, sex, BMI, diagnostic criteria) to confirm that groups were comparable before treatment.',
      'Results tables typically report mean \\(\\pm\\) SD (or median [IQR] for skewed data) alongside p-values and, where relevant, effect sizes or 95% confidence intervals. The format "mean \\(\\pm\\) SD reported (P < 0.05)" is a widely used convention.',
    ],
    clinicalExample: {
      intro: 'A physiotherapy RCT comparing kinesiology taping vs. sham taping after ACL reconstruction might report:',
      bullets: [
        'Outcome variables in rows: Pain VAS, Lysholm scale, Mid-patella girth, Knee ROM (\\(^\\circ\\)).',
        'Time points in columns: Week 2, Week 4, Week 6.',
        'Week 2: Knee ROM \\(99.73 \\pm 14.77^\\circ\\); Week 6: Knee ROM \\(131.53 \\pm 10.14^\\circ\\) (P < 0.0001).',
        'Each row is a different outcome; each column is a time point — a structure that makes within-group changes easy to read and compare.',
      ],
    },
    diagramId: 'tables-diagram',
    quiz: {
      intro: null,
      items: [
        {
          q: 'In a published RCT, "Table 1" typically reports baseline demographic characteristics. Why is this table important?',
          a: 'It allows readers to verify that randomisation produced comparable groups at baseline. If one group is significantly older, heavier, or more symptomatic at the start, outcome differences could reflect pre-existing differences rather than the intervention — undermining causal inference.',
        },
        {
          q: 'A table reports "Mean \\(\\pm\\) SD was reported (P < 0.05)." What does each element mean?',
          a: 'Mean is the arithmetic average; SD (standard deviation) describes the spread of individual values around the mean; P < 0.05 means the observed difference is statistically significant — there is less than a 5% probability of observing this difference by chance if the null hypothesis were true.',
        },
      ],
    },
  },

  /* ── 2.4  Outliers ────────────────────────────────────────────────────── */
  'outliers': {
    definitions: [
      {
        term: 'Outlier',
        text: 'An outlier is an observation of data that does not fit the rest of the data. It is sometimes called an extreme value.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 67.',
      },
      {
        term: 'Outlier — operational definition',
        text: 'An outlier represents a value distant from the rest, due to variability or error.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II [Lecture slides, Slide 24]. LUNEX University.',
      },
      {
        term: "Tukey's Rule (outlier detection)",
        text: 'A value is suspected to be a potential outlier if it is less than (1.5)(IQR) below the first quartile or more than (1.5)(IQR) above the third quartile. Potential outliers always require further investigation.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 87.',
      },
    ],
    plainTerms: [
      'Outliers can arise from two very different sources: genuine biological variability (a patient who is genuinely exceptional) or measurement/recording error (a data entry mistake). The former must be retained and reported; the latter should be corrected or excluded with clear justification.',
      "Tukey's fences define the range of 'expected' values: \\[\\text{Lower fence} = Q_1 - 1.5 \\times \\text{IQR}\\] \\[\\text{Upper fence} = Q_3 + 1.5 \\times \\text{IQR}\\] where \\(\\text{IQR} = Q_3 - Q_1\\). Any value below the lower fence or above the upper fence is a potential outlier. Values more than \\(3 \\times \\text{IQR}\\) beyond \\(Q_1\\) or \\(Q_3\\) are sometimes called extreme outliers.",
      'Three methods for detecting outliers: (a) visual inspection of a scatter plot; (b) a boxplot — outliers appear as individual dots beyond the whisker tips; (c) calculating Tukey\'s fences from \\(Q_1\\), \\(Q_3\\), and the IQR.',
    ],
    clinicalExample: {
      intro: "A physiotherapist records grip strength (kg) for 9 patients: 22, 28, 30, 32, 34, 36, 38, 42, 85. Apply Tukey's rule to determine whether 85 kg is an outlier.",
      bullets: [
        'Ordered data: 22, 28, 30, 32, 34, 36, 38, 42, 85.',
        'Median (\\(Q_2\\)) = 34 kg. \\(Q_1\\) = 29 kg. \\(Q_3\\) = 40 kg.',
        '\\(\\text{IQR} = 40 - 29 = 11\\) kg.',
        'Upper fence: \\(Q_3 + 1.5 \\times \\text{IQR} = 40 + 16.5 = 56.5\\) kg.',
        '85 kg > 56.5 kg → 85 kg is flagged as a potential outlier. Investigate: data entry error, or an exceptionally strong patient?',
      ],
    },
    diagramId: 'outliers',
    quiz: {
      intro: null,
      items: [
        {
          q: "Apply Tukey's rule: a dataset has \\(Q_1 = 45\\), \\(Q_3 = 75\\). What are the lower and upper fences?",
          a: '\\(\\text{IQR} = 75 - 45 = 30\\). Lower fence: \\(45 - 1.5 \\times 30 = 0\\). Upper fence: \\(75 + 1.5 \\times 30 = 120\\). Any value below 0 or above 120 is a potential outlier.',
        },
        {
          q: 'A physiotherapy dataset flags a patient\'s balance score as an outlier. Should the researcher automatically remove this data point?',
          a: 'No. Outliers always require investigation before any action. The researcher must determine whether the value resulted from a data entry error, a measurement error, or true biological variation. If it is an error, correct or exclude it with justification. If it is genuine, retain it and describe its impact on the analysis.',
        },
        {
          q: 'List three methods for detecting outliers in a dataset.',
          a: "(a) Visual inspection of a scatter plot — isolated dots far from the main cluster. (b) A boxplot — data points beyond the whisker tips. (c) Tukey's rule — computing \\(Q_1 - 1.5 \\times \\text{IQR}\\) (lower fence) and \\(Q_3 + 1.5 \\times \\text{IQR}\\) (upper fence) and identifying values outside these limits.",
        },
      ],
    },
  },
};
