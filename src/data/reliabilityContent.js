// Full content for Section 4 — Tests of Reliability
// Primary sources:
//   Baptista, R. (2026). BPTY12 Statistics Lecture Slides [HLP-SLD], slides 45–56.
//   Furlan, L. & Sterr, A. (2018). Frontiers in Human Neuroscience, 12, 95. [SRC-P1]
//   Grönkvist, R., Vixner, L., Äng, B. & Grimby-Ekman, A. (2024). The Journal of Pain, 25(9), 104559. [SRC-P2]

export const RELIABILITY_CONTENT = {

  /* ── 4.1  Definition & Examples ─────────────────────────────────────── */
  'reliability-def': {
    definitions: [
      {
        term: 'Reliability',
        text: 'Reliability is the overall consistency of a measure. There is a high reliability if a measure produces similar result under consistent conditions.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 45. LUNEX University.',
      },
      {
        term: 'Measurement Error',
        text: 'All kinds of measures are subject to measurement error, that is, the difference between a measured quantity and its true value.',
        citation: 'Grönkvist, R., Vixner, L., Äng, B. & Grimby-Ekman, A. (2024). Measurement Error, Minimal Detectable Change, and Minimal Clinically Important Difference. The Journal of Pain, 25(9), 104559.',
      },
    ],
    plainTerms: [
      'Reliability answers the question: "If I measure the same thing again under the same conditions, will I get the same result?" A goniometer that consistently measures 90° knee flexion when the true angle is 90° is perfectly reliable.',
      'No measurement is perfectly reliable — there will always be some random variation. The goal is to keep that variation small enough that it does not affect clinical decisions.',
      'Reliability can be broken down by who is doing the measuring and when: intra-rater reliability checks that the same person gets the same result at different times; inter-rater reliability checks that two different people get the same result; intra-session and inter-session reliability check consistency within and across sessions.',
      'The choice of reliability statistic depends on the type of variable: categorical variables (e.g., presence/absence of a sign) use Cohen\'s Kappa or percent agreement; continuous variables (e.g., ROM in degrees) use Coefficient of Variation (CV), Intraclass Correlation Coefficient (ICC), or Standard Error of Measurement (SEM).',
    ],
    clinicalExample: {
      intro: 'A physiotherapy department wants to standardise how clinicians assess patellar maltracking (present / absent) using a clinical screening tool.',
      bullets: [
        'Two senior physiotherapists independently assess the same 20 patients on the same day — neither knows the other\'s rating.',
        'For the tool to be clinically useful, the two raters must agree most of the time. Their ratings are entered into a 2×2 contingency table to calculate percent agreement and Cohen\'s Kappa.',
        'If κ ≥ 0.80, the tool has strong inter-rater reliability and can be used department-wide. If κ < 0.40, further training or a clearer assessment protocol is needed before the tool is adopted.',
      ],
    },
    diagramId: 'reliability-types',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What is reliability in the context of clinical measurement?',
          a: 'Reliability is the overall consistency of a measure — how well it produces the same result under consistent conditions. A highly reliable measure shows minimal random variation across repeated assessments.',
        },
        {
          q: 'What is the difference between intra-rater and inter-rater reliability?',
          a: 'Intra-rater reliability assesses whether the same clinician obtains consistent results across different time points. Inter-rater reliability assesses whether two or more different clinicians obtain consistent results when measuring the same patient.',
        },
        {
          q: 'Which reliability statistic would you use for a categorical variable (e.g., presence/absence of a sign) versus a continuous variable (e.g., range of motion in degrees)?',
          a: 'For categorical variables, use Cohen\'s Kappa (κ) or percent agreement. For continuous variables, use Coefficient of Variation (CV), Intraclass Correlation Coefficient (ICC), or Standard Error of Measurement (SEM).',
        },
        {
          q: 'Why is no measurement perfectly reliable?',
          a: 'Because all measures are subject to random measurement error — variation arising from factors such as differences in patient effort, clinician technique, environmental conditions, or the inherent variability of biological systems. The true score model states: Observed score = True score + Error.',
        },
      ],
    },
  },

  /* ── 4.2  Percent Agreement / Cohen's Kappa ─────────────────────────── */
  'cohen-kappa': {
    definitions: [
      {
        term: 'Percent Agreement / Cohen\'s Kappa (κ)',
        text: 'Percent Agreement or k-statistics (Cohen\'s k), is the most used with categorical variables. It determines how well an observation produces the same value, for the same patient, on repeated measurements (ideally 2 examiners).',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 45. LUNEX University.',
      },
      {
        term: 'Kappa Statistic',
        text: 'Kappa (k) statistic is used as a useful measure for quantifying agreement beyond chance for categorical variables, such as presence or absence of disease.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 49. LUNEX University.',
      },
    ],
    plainTerms: [
      'When two raters independently classify patients into categories (e.g., "joint hypermobile" or "normal"), we need to know how often they agree. Simple percent agreement counts how many cases received the same rating from both raters.',
      'The problem with simple percent agreement is that some agreement will occur by chance alone — even if both raters were guessing randomly. Cohen\'s Kappa corrects for this chance agreement, giving a more honest picture of true reliability.',
      'A Kappa of 1 means perfect agreement; a Kappa of 0 means the raters agreed no more than chance would predict; a negative Kappa means they agreed less than chance.',
      'The full workflow: (1) arrange ratings in a crosstabulation table → (2) calculate raw percent agreement (Po) → (3) calculate expected percent agreement by chance (Pe) → (4) compute κ = (Po − Pe) / (1 − Pe).',
    ],
    clinicalExample: {
      intro: 'Two physiotherapists classify 222 patients as having either "normal" or "abnormal" shoulder movement pattern.',
      bullets: [
        'The ratings are entered into a 2×2 crosstabulation: rows = Rater 2 classification, columns = Rater 1 classification.',
        'The diagonal cells (top-left and bottom-right) represent cases where both raters agreed.',
        'Raw agreement: (147 + 62) / 222 = 0.94 (94%). But how much of this is due to chance?',
        'After accounting for chance agreement (Pe ≈ 0.57), κ = (0.94 − 0.57) / (1 − 0.57) ≈ 0.86 — "Strong" inter-rater reliability.',
      ],
    },
    diagramId: 'kappa-overview',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Why is Cohen\'s Kappa preferred over simple percent agreement as a reliability statistic?',
          a: 'Because simple percent agreement does not account for the agreement that would occur by chance alone. Cohen\'s Kappa corrects for chance agreement, making it a more honest index of true inter-rater reliability.',
        },
        {
          q: 'Two raters assess 100 patients; they agree on 82 cases. What is the raw percent agreement?',
          a: 'Raw percent agreement Po = 82 / 100 = 0.82, or 82%.',
        },
        {
          q: 'What does a kappa value of 0 indicate?',
          a: 'A kappa of 0 means the observed agreement is exactly what would be expected from random chance — the raters are not achieving any real agreement beyond what guessing would produce.',
        },
        {
          q: 'Name the four steps in computing Cohen\'s Kappa from raw rating data.',
          a: '1. Arrange ratings in a crosstabulation (contingency) table.\n2. Calculate the raw observed percent agreement (Po): sum diagonal cells ÷ total N.\n3. Calculate the expected percent agreement (Pe) from the marginal totals.\n4. Apply the formula κ = (Po − Pe) / (1 − Pe).',
        },
      ],
    },
  },

  /* ── 4.2.1  Crosstabulation ──────────────────────────────────────────── */
  'crosstab': {
    definitions: [
      {
        term: 'Crosstabulation (Crosstab)',
        text: 'The purpose of crosstabulation is to show in tabular format the relationship between two or more categorical variables. Categorical variables include those in which distinct categories exist such as gender, ethnicity, place of residence, responses, grades, and many more.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 47. LUNEX University.',
      },
    ],
    plainTerms: [
      'A crosstabulation (or contingency table) is a grid where rows represent one rater\'s classifications and columns represent the other rater\'s classifications. Each cell contains the count of patients who received that pair of ratings.',
      'The cells along the main diagonal (top-left to bottom-right) are the agreement cells — they represent patients that both raters classified the same way.',
      'The off-diagonal cells represent disagreements — cases where one rater said "normal" but the other said "abnormal", or vice versa.',
      'The row and column totals are called marginals (rm and cm). They are used to estimate the agreement expected by chance alone (Pe) when computing Cohen\'s Kappa.',
      '"Observed" cell counts are the actual data you collected. "Expected" cell counts represent what you would observe if the two raters were classifying entirely independently of each other.',
    ],
    clinicalExample: {
      intro: 'Two physiotherapists each assess 222 patients for the presence of an abnormal movement pattern:',
      bullets: [
        'The 2×2 table has four cells: (Normal/Normal), (Normal/Abnormal), (Abnormal/Normal), (Abnormal/Abnormal).',
        'Rater 1 classified 157 patients as "normal" (column marginal cm₁) and 65 as "abnormal" (cm₂).',
        'Rater 2 classified 150 patients as "normal" (row marginal rm₁) and 72 as "abnormal" (rm₂).',
        'The total number of patients (n = 222) appears in the bottom-right corner of the marginals.',
      ],
    },
    diagramId: 'crosstab-table',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What do the diagonal cells of a 2×2 crosstabulation represent?',
          a: 'The diagonal cells represent agreement between the two raters — cases where both raters assigned the same classification (e.g., both said "normal" or both said "abnormal").',
        },
        {
          q: 'What are "marginals" in a contingency table?',
          a: 'Marginals are the row totals and column totals in a contingency table. They represent the total number of cases each rater placed into each category, summed across all of the other rater\'s categories.',
        },
        {
          q: 'What is the difference between observed and expected counts in a crosstabulation?',
          a: 'Observed counts are the actual data — the number of cases in each cell. Expected counts represent what you would expect if the two raters were classifying independently of each other (i.e., by chance). Expected counts are computed from the marginals.',
        },
        {
          q: 'In what type of data is a crosstabulation used?',
          a: 'Crosstabulations are used with categorical data — variables that take discrete labels such as "present/absent", "yes/no", or "grade A/B/C".',
        },
      ],
    },
  },

  /* ── 4.2.2  Raw Percent Agreement ───────────────────────────────────── */
  'raw-agreement': {
    definitions: [
      {
        term: 'Raw Percent Agreement (Po)',
        text: 'Sum the agreed observations and divide them by the total number of observations.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 48. LUNEX University.',
      },
    ],
    plainTerms: [
      'Raw percent agreement is the simplest reliability statistic. It asks: out of all the cases, in what proportion did both raters give the same answer?',
      'It is computed directly from the crosstabulation: add up the numbers in the diagonal cells (where both raters agreed), then divide by the total number of cases (n).',
      'In the worked example: raters agreed on 147 "normal" cases and 62 "abnormal" cases, giving Po = (147 + 62) / 222 = 0.94 (94% agreement).',
      'Despite its simplicity, raw percent agreement has a major limitation: it does not correct for the agreement that would occur by chance. Cohen\'s Kappa is used alongside it to address this.',
    ],
    clinicalExample: {
      intro: 'Using the 2×2 crosstabulation from the movement-pattern assessment (n = 222):',
      bullets: [
        'Agreement cells: Normal/Normal = 147; Abnormal/Abnormal = 62.',
        'Po = (147 + 62) / 222 = 209 / 222 ≈ 0.94 (94%).',
        'This looks like excellent agreement, but we need to check how much of this 94% is simply due to chance — hence the need for expected agreement and Kappa.',
      ],
    },
    diagramId: 'raw-agreement-diagram',
    quiz: {
      intro: null,
      items: [
        {
          q: 'How is raw percent agreement (Po) calculated from a 2×2 crosstabulation table?',
          a: 'Add the values in the diagonal cells (the agreement cells), then divide by the total number of observations (n). Po = (diagonal cell 1 + diagonal cell 2) / n.',
        },
        {
          q: 'Two raters assess 50 patients. Both said "positive" for 20 patients and both said "negative" for 22 patients; they disagreed on 8. What is Po?',
          a: 'Po = (20 + 22) / 50 = 42 / 50 = 0.84, or 84% agreement.',
        },
        {
          q: 'What is the main limitation of raw percent agreement?',
          a: 'Raw percent agreement does not account for the proportion of agreements that would occur simply by chance. If both raters were guessing randomly, they would still agree a predictable fraction of the time. Cohen\'s Kappa corrects for this.',
        },
        {
          q: 'If Po = 0.94 and Pe = 0.57, does the 94% agreement mean the raters are highly reliable?',
          a: 'Not on the basis of Po alone. The expected chance agreement of 57% means more than half of the observed agreement could be coincidental. After applying Kappa: κ = (0.94 − 0.57) / (1 − 0.57) ≈ 0.86, which falls in the "Strong" range. Both statistics should always be reported together.',
        },
      ],
    },
  },

  /* ── 4.2.3  Expected Percent Agreement ──────────────────────────────── */
  'expected-agree': {
    definitions: [
      {
        term: 'Expected Percent Agreement (Pe)',
        text: 'The expected agreement is the proportion of cases in which the raters would be expected to agree purely by chance, computed from the marginal totals of the crosstabulation.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 49. LUNEX University.',
      },
    ],
    plainTerms: [
      'Even if two raters were assigning classifications completely at random, they would still agree a predictable fraction of the time — purely by coincidence. Expected agreement quantifies this chance baseline.',
      'For each category, multiply the corresponding column marginal and row marginal, divide by n, then divide the sum of all such products by n again.',
      'In the running example: Pe = [(157 × 150)/222 + (65 × 72)/222] / 222 ≈ [106.1 + 21.1] / 222 ≈ 0.57.',
      'Pe is only an intermediate step — it is not reported on its own. It is subtracted from Po to compute Kappa. The higher Pe is, the more of the observed agreement is attributable to chance, and the lower Kappa will be.',
    ],
    clinicalExample: {
      intro: 'Continuing with the 2×2 table (n = 222; cm₁ = 157, cm₂ = 65; rm₁ = 150, rm₂ = 72):',
      bullets: [
        'Expected agreements for "Normal/Normal": (157 × 150) / 222 ≈ 106.1',
        'Expected agreements for "Abnormal/Abnormal": (65 × 72) / 222 ≈ 21.1',
        'Total expected agreements by chance: 106.1 + 21.1 = 127.2',
        'Pe = 127.2 / 222 ≈ 0.57 (57% of cases would be expected to match by chance alone).',
      ],
    },
    diagramId: 'expected-agree-diagram',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Why is expected percent agreement (Pe) needed when raw percent agreement (Po) is already available?',
          a: 'Because some agreement will occur by random chance regardless of how consistent the raters actually are. Pe estimates that chance baseline. Without removing it, Po overstates how much real agreement the raters achieve.',
        },
        {
          q: 'In a 2×2 table with n = 100, where Rater 1 classified 60 cases as "A" and 40 as "B", and Rater 2 classified 55 as "A" and 45 as "B", what is Pe?',
          a: 'Pe = [(60 × 55)/100 + (40 × 45)/100] / 100 = [33 + 18] / 100 = 0.51 (51% chance agreement).',
        },
        {
          q: 'If Pe is very high (e.g., 0.85) even when Po is also high (e.g., 0.90), what does this imply about Kappa?',
          a: 'κ = (0.90 − 0.85) / (1 − 0.85) = 0.05 / 0.15 = 0.33, which is only "Minimal" agreement. This often occurs when one category is very dominant (e.g., 95% of patients are rated "absent"), inflating the chance agreement baseline.',
        },
        {
          q: 'From which parts of the crosstabulation is Pe computed?',
          a: 'Pe is computed from the marginal totals (row totals and column totals), not from the diagonal cells directly. For each category, multiply the corresponding column marginal and row marginal, divide by n, then sum all such products and divide by n again.',
        },
      ],
    },
  },

  /* ── 4.2.4  Cohen's Kappa Statistic ─────────────────────────────────── */
  'kappa-statistic': {
    definitions: [
      {
        term: 'Kappa Statistic (κ) — Formula',
        text: 'Kappa (k) statistic is used as a useful measure for quantifying agreement beyond chance for categorical variables, such as presence or absence of disease.\n\n\\[\\kappa = \\frac{P_o - P_e}{1 - P_e}\\]\n\nwhere \\(P_o\\) is the observed percent agreement and \\(P_e\\) is the expected (chance) percent agreement.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 49. LUNEX University.',
      },
      {
        term: 'Interpretation of Kappa',
        text: '• κ = 0 → represents the amount of agreement that can be expected from random chance\n• κ = 1 → represents perfect agreement between the raters\n• κ = −1 → represents great disagreement among raters (low negative κ are seen as no agreement)',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 50. LUNEX University.',
      },
    ],
    plainTerms: [
      'Cohen\'s Kappa tells you how much better the raters agree compared to chance. The formula subtracts the chance agreement (Pe) from the observed agreement (Po), then divides by the maximum possible improvement over chance (1 − Pe).',
      'Think of it as: Kappa = (actual improvement over chance) / (maximum possible improvement over chance). A Kappa of 0.86 means the raters achieved 86% of the maximum possible beyond-chance agreement.',
      'In the worked example: κ = (0.94 − 0.57) / (1 − 0.57) = 0.37 / 0.43 ≈ 0.86, falling in the "Strong" category (0.80–0.90): 64–81% of the data are considered reliable.',
      'Negative Kappa values occur when raters agree less than chance would predict — this usually indicates systematic disagreement and is treated as no agreement in practice.',
    ],
    clinicalExample: {
      intro: 'Final step in the inter-rater reliability study of shoulder movement pattern (n = 222):',
      bullets: [
        'Observed agreement: Po = 0.94.',
        'Expected (chance) agreement: Pe = 0.57.',
        'κ = (0.94 − 0.57) / (1 − 0.57) = 0.37 / 0.43 ≈ 0.86.',
        'Interpretation: κ = 0.86 falls in the "Strong" range (0.80–0.90), meaning 64–81% of the data can be considered reliable beyond chance.',
        'Clinical decision: the assessment tool shows strong inter-rater reliability and can be recommended for department-wide use.',
      ],
    },
    diagramId: 'kappa-scale',
    quiz: {
      intro: null,
      items: [
        {
          q: 'A study finds Po = 0.80 and Pe = 0.50. What is κ, and what level of agreement does this represent?',
          a: 'κ = (0.80 − 0.50) / (1 − 0.50) = 0.30 / 0.50 = 0.60. This falls in the "Moderate" range (0.60–0.79), meaning 35–63% of the data are considered reliable.',
        },
        {
          q: 'Why can κ be negative, and how is a negative κ interpreted clinically?',
          a: 'κ is negative when the observed agreement is less than what chance alone would predict (Po < Pe). This suggests the raters are systematically disagreeing. In practice, negative kappa is treated as no agreement and signals fundamental problems with the measurement protocol.',
        },
        {
          q: 'According to the McHugh interpretation scale, what label corresponds to κ values in the range 0.40–0.59?',
          a: 'A κ of 0.40–0.59 indicates "Weak" agreement, with 15–35% of the data considered reliable.',
        },
        {
          q: 'Why is it important to report both Po and κ when presenting inter-rater reliability data?',
          a: 'Po is easy to understand and shows the raw proportion of agreements, which is useful for clinical audiences. κ reveals the true beyond-chance agreement and is necessary for scientific rigour. Together they give a complete picture: Po shows the raw agreement rate and κ shows what proportion of it is genuine.',
        },
      ],
    },
  },

  /* ── 4.3  Coefficient of Variation ──────────────────────────────────── */
  'cv': {
    definitions: [
      {
        term: 'Coefficient of Variation (CV)',
        text: 'For continuous variables, the Coefficient of Variation (CV) provides a very simple way to determine the relationship between the standard deviation and the mean of two sets of observations (e.g., two goniometric measurements).\n\n\\[CV = \\frac{SD}{\\bar{x}} \\times 100\\]\n\nValues closer to zero show minimal variation.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 51. LUNEX University.',
      },
    ],
    plainTerms: [
      'The Coefficient of Variation expresses the standard deviation as a percentage of the mean. It asks: "How large is the spread relative to the average value?" A CV of 5% means the variability is small relative to the typical score; a CV of 25% means there is substantial variation.',
      'The CV is dimensionless — it has no units. This makes it useful for comparing reliability across different measurement scales (e.g., knee flexion in degrees versus grip strength in kilograms).',
      'Values closer to zero indicate minimal variation between repeated measurements. In physiotherapy outcome measurement, CVs below 10–15% are generally considered acceptable.',
      'To calculate the overall CV for a test-retest study: (1) compute the average of each pair of observations; (2) compute the SD of each pair; (3) divide each pair\'s SD by its average (individual CV); (4) average all individual CVs across participants.',
    ],
    clinicalExample: {
      intro: 'A physiotherapy researcher tests the reliability of a toe-touch test (measured in cm) by administering it twice to 14 participants:',
      bullets: [
        'For each participant, the average and SD of the two measurements are computed.',
        'CV per participant = SD / Average. Example: average = 16 cm, SD = 1.41 cm → CV = 0.088 (8.8%).',
        'The overall study CV is the average of all participant CVs: approximately 0.099 (≈10%).',
        'A CV of ≈10% suggests acceptable test-retest reliability for this functional measure.',
      ],
    },
    diagramId: 'cv-diagram',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What does the Coefficient of Variation measure in the context of reliability?',
          a: 'The CV expresses the variability (SD) of repeated measurements relative to their mean, as a percentage. A low CV indicates high reliability (repeated measurements are close to each other); a high CV indicates low reliability (large variation relative to the mean).',
        },
        {
          q: 'A participant is tested twice for grip strength: 42 kg and 46 kg. Calculate the CV.',
          a: 'Average = (42 + 46) / 2 = 44 kg. SD = √[((42−44)² + (46−44)²) / (2−1)] = √8 ≈ 2.83 kg. CV = 2.83 / 44 × 100 ≈ 6.4%.',
        },
        {
          q: 'Why is the CV useful when comparing reliability across measurements with different units?',
          a: 'Because the CV is dimensionless — the units of SD and mean cancel out. This allows you to compare the relative variability of, for example, grip strength (kg) and knee ROM (degrees) on an equal footing.',
        },
        {
          q: 'What step-by-step process is used to compute the overall CV for a test-retest reliability study?',
          a: '1. For each participant, compute the average of their two measurements.\n2. For each participant, compute the SD of their two measurements.\n3. Divide each participant\'s SD by their average to get an individual CV.\n4. Average all individual CVs across participants to obtain the overall study CV.',
        },
      ],
    },
  },

  /* ── 4.4  Standard Error of Measurement ─────────────────────────────── */
  'sem': {
    definitions: [
      {
        term: 'Intraclass Correlation Coefficient (ICC)',
        text: 'The Intraclass Correlation Coefficient is another reliability measure to use in continuous variables. It is sensitive for example to the extent to which subjects (individuals) keep their ranking order in repeated measurements. Ranges between 0 and 1, and is always associated to a 95% confidence interval. ICC = (variance of interest) / (total variance) = (variance of interest) / (variance of interest + unwanted variance).',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 53. LUNEX University.',
      },
      {
        term: 'Standard Error of Measurement (SEM)',
        text: 'The SEM value might be considered an estimation of the expected random variation in scores when no real change has taken place.\n\n\\[SEM = SD_{\\text{baseline}} \\times \\sqrt{1 - ICC}\\]\n\nThe smaller the standard deviation and the higher the reliability (ICC), the smaller is the SEM. A small SEM means that error is low, and observed differences in scores are more likely to be true change.',
        citation: 'Furlan, L. & Sterr, A. (2018). The Applicability of Standard Error of Measurement and Minimal Detectable Change to Motor Learning Research. Frontiers in Human Neuroscience, 12, 95.',
      },
    ],
    plainTerms: [
      'The ICC is a dimensionless number between 0 and 1 that summarises how much of the total variance in scores comes from real between-patient differences (rather than measurement error). An ICC of 0.90 means 90% of the variance is "real" and 10% is error.',
      'The SEM translates ICC into the original units of measurement. It tells you how much a score can fluctuate just due to random error — even if the patient\'s true condition has not changed at all.',
      'A small SEM is desirable: it means the instrument is precise. Unlike the ICC, the SEM is in the same units as the measurement (e.g., 3 kg, 5°, 4 scale points), making it directly interpretable clinically.',
      'The SEM is the foundation for computing the Minimal Detectable Difference (MDD): once you know how much random error to expect (SEM), you can calculate the minimum change that is unlikely to be due to error alone.',
    ],
    clinicalExample: {
      intro: 'A clinic uses the Oswestry Disability Index (ODI, 0–100) to track low back pain patients. The instrument has ICC = 0.85 and SD_baseline = 12 points.',
      bullets: [
        'SEM = 12 × √(1 − 0.85) = 12 × √0.15 = 12 × 0.387 ≈ 4.6 points.',
        'This means that even without any real change in disability, scores can randomly fluctuate by roughly ±4.6 points between sessions.',
        'A patient who scores 42 at baseline and 46 at follow-up (a 4-point change) has changed by less than 1 SEM — this is likely measurement error, not true improvement.',
        'The SEM is reported alongside the ICC to fully characterise instrument reliability for continuous outcomes.',
      ],
    },
    diagramId: 'sem-diagram',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What does the ICC represent, and why is it always reported with a 95% confidence interval?',
          a: 'The ICC is the ratio of the variance of interest (real between-patient differences) to total variance (real differences + measurement error). It is always accompanied by a 95% CI because it is a sample estimate and its precision depends on sample size — a wide CI means the ICC estimate is uncertain.',
        },
        {
          q: 'An instrument has ICC = 0.90 and SD_baseline = 10 points. Calculate the SEM.',
          a: 'SEM = 10 × √(1 − 0.90) = 10 × √0.10 = 10 × 0.316 ≈ 3.16 points.',
        },
        {
          q: 'How does a higher ICC affect the SEM, and why is this clinically relevant?',
          a: 'A higher ICC reduces the SEM (SEM = SD × √(1 − ICC)). Higher ICC means more reliable measurements, so less random noise. Clinically, a smaller SEM means that even small observed changes may be considered meaningful — the instrument is more sensitive to real change.',
        },
        {
          q: 'A patient\'s score changes by 5 points between sessions. The SEM is 6 points. Can you conclude that a real change occurred?',
          a: 'No. A 5-point change is less than the SEM (6 points), meaning it falls within the expected range of random fluctuation. To conclude that a real change occurred with 95% confidence, the observed change must exceed the Minimal Detectable Difference (MDD₉₅ ≈ 2.77 × SEM).',
        },
      ],
    },
  },

  /* ── 4.5  Minimal Detectable Difference ─────────────────────────────── */
  'mdd': {
    definitions: [
      {
        term: 'Minimal Detectable Difference / Change (MDD₉₅ / MDC₉₅)',
        text: 'The minimum amount of change that needs to be observed, at either the group or individual level, for it to be considered a real change and not simply related to measurement error.\n\n\\[MDD_{95} = \\sqrt{2} \\times 1.96 \\times SEM\\]',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 55. LUNEX University.',
      },
      {
        term: 'MDC — Smallest Detectable Change',
        text: 'The MDC, which is also known as the smallest detectable change, quantifies when a change in an instrument is large enough that it is unlikely to have come from random error. A change greater than the MDC has, at most, a 5% probability of being due to measurement error. An observed change larger than the MDC can be said to be a true change, with high confidence.',
        citation: 'Grönkvist, R., Vixner, L., Äng, B. & Grimby-Ekman, A. (2024). Measurement Error, Minimal Detectable Change, and Minimal Clinically Important Difference. The Journal of Pain, 25(9), 104559.',
      },
      {
        term: 'Minimal Clinically Important Difference (MCID)',
        text: 'The MCID is a lower bound for how large a change must be to correspond to a subjectively meaningful improvement in patient health.',
        citation: 'Grönkvist, R., Vixner, L., Äng, B. & Grimby-Ekman, A. (2024). Measurement Error, Minimal Detectable Change, and Minimal Clinically Important Difference. The Journal of Pain, 25(9), 104559.',
      },
    ],
    plainTerms: [
      'The MDD₉₅ is the minimum change you need to observe before you can conclude — with 95% confidence — that the change is real and not just measurement noise.',
      'It is derived from the SEM: MDD₉₅ = √2 × 1.96 × SEM ≈ 2.77 × SEM. The √2 accounts for the fact that a change score involves two measurement occasions (and thus two independent sources of error); 1.96 is the z-score for 95% confidence.',
      'Think of the MDD as a threshold. Any observed change smaller than the MDD might be explained by random error alone. Only when the observed change exceeds the MDD can you claim with 95% confidence that something genuinely changed.',
      'The MCID takes this one step further: not only must a change be real (exceed MDD), but it must also be large enough to matter subjectively to the patient. The MCID is determined by comparing score changes against patients\' own ratings of whether their health improved.',
      'Hierarchy: random noise → SEM (expected error magnitude) → MDD (threshold for real change, ≈2.77 × SEM) → MCID (threshold for patient-meaningful change). A change can exceed MDD but still be below MCID — real, but not important enough to matter to the patient.',
    ],
    clinicalExample: {
      intro: 'Continuing with the ODI example (ICC = 0.85, SD_baseline = 12 points, SEM ≈ 4.6 points):',
      bullets: [
        'MDD₉₅ = √2 × 1.96 × 4.6 = 1.414 × 1.96 × 4.6 ≈ 12.75 points.',
        'A patient improving from ODI 52 → 40 (Δ = 12 points) is below the MDD — this might be measurement error.',
        'A patient improving from ODI 52 → 37 (Δ = 15 points) exceeds the MDD — we can say with 95% confidence a real change occurred.',
        'If the MCID for the ODI is ≈10 points (from the literature), any change above 10 points is clinically meaningful to the patient — but must also exceed the MDD of ≈13 points to be statistically trustworthy.',
        'Decision rule from slides: Δ > SEM → possibly real; Δ > MDD → real change (95% confidence); Δ > MDD AND > MCID → clinically significant.',
      ],
    },
    diagramId: 'mdd-diagram',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What is the formula for MDD₉₅ and what does each component represent?',
          a: 'MDD₉₅ = √2 × 1.96 × SEM. √2 accounts for the two measurement occasions in a change score (each contributes independent error); 1.96 is the z-value for 95% confidence; SEM is the Standard Error of Measurement of the instrument.',
        },
        {
          q: 'An instrument has SEM = 3 points. Calculate MDD₉₅. A patient\'s score changes by 10 points — is this a real change?',
          a: 'MDD₉₅ = 1.414 × 1.96 × 3 ≈ 8.3 points. A 10-point change exceeds the MDD₉₅ of 8.3 points, so yes — we can conclude with 95% confidence that a real change occurred.',
        },
        {
          q: 'What is the difference between the MDD and the MCID?',
          a: 'The MDD is a statistical threshold: the minimum change needed to rule out random measurement error with 95% confidence. The MCID is a clinical threshold: the minimum change that a patient considers subjectively meaningful. A change can be real (exceed MDD) without being important to the patient (below MCID).',
        },
        {
          q: 'Arrange in order from smallest to largest: MCID, SEM, MDD, measurement error.',
          a: 'Measurement error (random noise in a single score) < SEM (expected standard deviation of that error) < MDD (minimum change exceeding error with 95% confidence, ≈2.77 × SEM) < MCID (minimum change subjectively meaningful to the patient, by definition larger than MDD).',
        },
      ],
    },
  },

};
