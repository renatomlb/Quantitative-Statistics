// Full content for Section 1 — Variables
// Sources: Baptista (2026) BPTY12 Slides [primary]; Illowsky & Dean (2023) OpenStax [secondary]
// diagramId maps to a component in VariablesDiagrams.jsx; null = no diagram card.

export const VARIABLES_CONTENT = {
  /* ── 1.0  Population, Sample & Observations ─────────────────────────── */
  "pop-sample": {
    definitions: [
      {
        term: "Observation (\\(\\omega\\))",
        text: "The units on which we measure data, such as persons, cars, animals or plants, are called observations.",
        citation:
          "Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 4. LUNEX University.",
      },
      {
        term: "Population (\\(\\Omega\\))",
        text: "The collection of all units is called population.",
        citation:
          "Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 4. LUNEX University.",
      },
      {
        term: "Population",
        text: "You can think of a population as a collection of persons, things, or objects under study.",
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 6.",
      },
      {
        term: "Sample",
        text: "A selection of \\(n\\) observations \\(\\omega_1, \\omega_2, \\cdots, \\omega_n\\). A sample is always a subset of the population.",
        citation:
          "Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 4. LUNEX University.",
      },
      {
        term: "Sample",
        text: "The idea of sampling is to select a portion (or subset) of the larger population and study that portion (the sample) to gain information about the population.",
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 6.",
      },
      {
        term: "Variable",
        text: "A variable, usually notated by capital letters such as X and Y, is a characteristic or measurement that can be determined for each member of a population. Variables may be numerical or categorical.",
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 7.",
      },
    ],
    plainTerms: [
      "When conducting research you usually cannot study every person of interest — measuring shoulder ROM in every tennis player in Europe is impossible in practice. Instead, you select a manageable group called the sample and draw conclusions about the larger group (the population) from what you observe.",
      "Each individual within your study — each patient, each athlete — is a single observation (\\(\\omega\\)). Together all observations form the sample. The sample must be representative of the population for your conclusions to be valid.",
    ],
    clinicalExample: {
      intro:
        "A researcher wants to investigate knee extension strength in professional cyclists.",
      bullets: [
        "Population (\\(\\Omega\\)): All professional cyclists.",
        "Sample: 35 professional cyclists recruited from cycling clubs in Luxembourg.",
        "Observations (\\(\\omega\\)): Each individual cyclist — \\(\\omega_1, \\omega_2, \\ldots, \\omega_{35}\\).",
        "Variable measured: Knee extension peak torque (\\(\\text{N}\\cdot\\text{m}\\)).",
      ],
    },
    diagramId: "pop-sample",
    quiz: {
      intro: "Identify the statistical components in the following study.",
      items: [
        {
          q: "A physiotherapy researcher recruits 30 patients with chronic low back pain from a single clinic to study gait speed (m/s). What is the population?",
          a: "All patients with chronic low back pain (not only those at one clinic — the population is the broader group of interest).",
        },
        {
          q: "In the same study, what is the sample?",
          a: "The 30 patients recruited from the clinic.",
        },
        {
          q: "What is one observation (\\(\\omega\\)) in the same study?",
          a: "One individual patient (e.g., Patient 1, Patient 2, …).",
        },
      ],
    },
  },

  /* ── 1.1  Qualitative ───────────────────────────────────────────────── */
  qualitative: {
    definitions: [
      {
        term: "Qualitative variable",
        text: "Variables which take values that cannot be ordered in a logical or natural way.",
        citation:
          "Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 5. LUNEX University.",
      },
      {
        term: "Qualitative data",
        text: "Qualitative data are the result of categorizing or describing attributes of a population. Qualitative data are also often called categorical data.",
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 10.",
      },
    ],
    plainTerms: [
      'A qualitative variable answers "what type?" or "which category?". The values are names or labels, not numbers. Because there is no logical order between categories, you cannot say one is "more" than another — a knee injury is not greater than an ankle injury.',
      "The appropriate summary for qualitative data is counting how often each category appears (frequency table or pie chart). Calculating a mean or median across categories is not meaningful.",
    ],
    clinicalExample: {
      intro:
        "A physiotherapist records clinical data on 80 athletes admitted for sports injuries.",
      bullets: [
        "Injury location (knee / ankle / hip / back) — qualitative: no natural order between locations.",
        'Dominant side (left / right) — qualitative: neither side is logically "more" than the other.',
        "Diagnosis (ACL rupture / meniscus tear / rotator cuff tear) — qualitative: type of injury with no ranking.",
      ],
    },
    diagramId: "qualitative",
    quiz: {
      intro: "Classify each variable as qualitative or quantitative.",
      items: [
        {
          q: "(a) Type of sport practiced (football / tennis / swimming)",
          a: "Qualitative — named categories with no natural order.",
        },
        {
          q: "(b) Knee flexion ROM in degrees",
          a: "Quantitative — a measured numerical value with a natural order.",
        },
        {
          q: "(c) Dominant side (left / right)",
          a: 'Qualitative — labelled categories; neither side is "more" than the other.',
        },
        {
          q: "(d) Number of rehabilitation sessions attended",
          a: "Quantitative — a counted numerical value.",
        },
      ],
    },
  },

  /* ── 1.2  Quantitative ──────────────────────────────────────────────── */
  quantitative: {
    definitions: [
      {
        term: "Quantitative variable",
        text: "Variables that represent measurable quantities. The values which these variables can take can be ordered in a logical and natural way.",
        citation:
          "Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 5. LUNEX University.",
      },
      {
        term: "Quantitative data",
        text: "Quantitative data are always numbers. Quantitative data are the result of counting or measuring attributes of a population. Quantitative data may be either discrete or continuous.",
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 10.",
      },
      {
        term: "Quantitative discrete data",
        text: "All data that are the result of counting are called quantitative discrete data. These data take on only certain numerical values.",
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 10.",
      },
      {
        term: "Quantitative continuous data",
        text: "Data that are not only made up of counting numbers, but that may include fractions, decimals, or irrational numbers, are called quantitative continuous data. Continuous data are often the results of measurements like lengths, weights, or times.",
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 10.",
      },
    ],
    plainTerms: [
      'A quantitative variable answers "how much?" or "how many?" — the result is always a number you can apply arithmetic to. Values have a natural order: 90° of knee flexion is more than 75°, and you can calculate a meaningful mean.',
      "Discrete variables result from counting and can only take whole-number values (you cannot attend 1.5 sessions). Continuous variables result from measuring and can take any value in a range — fractions and decimals are meaningful. Knowing which type you have matters when choosing graphs and statistical tests.",
    ],
    clinicalExample: {
      intro:
        "A physiotherapist collects two types of quantitative data during a balance assessment.",
      bullets: [
        "Discrete: Number of physiotherapy sessions attended per week (0, 1, 2, 3 — only whole numbers; half a session is not possible).",
        "Continuous: Single-leg stance time in seconds (12.4 s, 18.7 s — fractions are meaningful because time is measured).",
        "Continuous: Knee flexion ROM in degrees (\\(75^\\circ, 92.5^\\circ\\) — goniometer readings can include decimals).",
      ],
    },
    diagramId: "quantitative",
    quiz: {
      intro: "Classify each as discrete or continuous quantitative.",
      items: [
        {
          q: "(a) Number of physiotherapy sessions per week",
          a: "Discrete — counted, takes only whole-number values.",
        },
        {
          q: "(b) Body mass index (\\(\\text{kg/m}^2\\))",
          a: "Continuous — calculated from measurements, can include decimals.",
        },
        {
          q: "(c) Knee extension ROM in degrees",
          a: "Continuous — measured with a goniometer, decimals are meaningful.",
        },
        {
          q: "(d) Number of steps counted with a pedometer",
          a: "Discrete — counted, takes only whole-number values.",
        },
      ],
    },
  },

  /* ── 1.3  Types of Scale (parent) ──────────────────────────────────── */
  "types-of-scale": {
    definitions: [
      {
        term: "Level of measurement",
        text: "The way a set of data is measured is called its level of measurement. Data can be classified into four levels of measurement (from lowest to highest): nominal, ordinal, interval, and ratio.",
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 26.",
      },
    ],
    plainTerms: [
      "Every variable you collect has a measurement level that tells you what kind of information it carries and which statistical operations are valid. Going from lowest to highest: Nominal → Ordinal → Interval → Ratio.",
      "Higher levels carry more information and allow more operations. You can always apply lower-level operations to higher-level data (e.g., count categories from a ratio variable), but not the reverse. Knowing the measurement level guides you to the correct statistical test.",
    ],
    clinicalExample: {
      intro:
        "A clinical data collection form captures four variables — one at each measurement level:",
      bullets: [
        "Diagnosis (ACL / meniscus / rotator cuff) → Nominal: named categories with no order.",
        "Pain level (none / mild / moderate / severe) → Ordinal: ranked categories, but gaps between levels are unequal.",
        'Body temperature (\\(^\\circ\\text{C}\\)) → Interval: equal intervals, but \\(0^\\circ\\text{C}\\) is not "no temperature".',
        "Grip strength (kg) → Ratio: equal intervals and a true zero (0 kg = no strength at all).",
      ],
    },
    diagramId: "types-of-scale",
    quiz: {
      intro:
        "Assign each variable to the correct measurement level (nominal / ordinal / interval / ratio).",
      items: [
        {
          q: "(a) Sex (male / female)",
          a: "Nominal — independent categories with no logical order.",
        },
        {
          q: "(b) Functional recovery rating (poor / fair / good / excellent)",
          a: "Ordinal — meaningful ranking, but gaps between categories are not necessarily equal.",
        },
        {
          q: "(c) Body temperature in °C",
          a: "Interval — equal intervals between values, but 0 °C is not an absolute zero.",
        },
        {
          q: "(d) Handgrip strength in kg",
          a: "Ratio — equal intervals and a true zero (0 kg = no force whatsoever).",
        },
      ],
    },
  },

  /* ── 1.3.1  Nominal ─────────────────────────────────────────────────── */
  nominal: {
    definitions: [
      {
        term: "Nominal",
        text: "Independent categories.",
        citation:
          "Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 6. LUNEX University.",
      },
      {
        term: "Nominal scale",
        text: "Data that is measured using a nominal scale is qualitative (categorical). Categories, colors, names, labels and favorite foods along with yes or no responses are examples of nominal level data. Nominal scale data are not ordered.",
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 26.",
      },
    ],
    plainTerms: [
      "Nominal is the most basic measurement level — values are simply names or labels for distinct groups. There is no implied ranking: listing categories as 1, 2, 3 in a spreadsheet is just an arbitrary code, not a meaningful order.",
      "You can count how many observations fall into each category (frequency, proportion, pie chart), but you cannot calculate a meaningful mean. Sorting or averaging categories would be meaningless.",
    ],
    clinicalExample: {
      intro:
        "A sports injury registry records injury location for each athlete.",
      bullets: [
        "Categories: knee / ankle / hip / back.",
        'This is nominal — there is no sensible ranking; a "knee" injury is not greater than a "back" injury.',
        "Appropriate summary: frequency table (e.g., 30 knee, 25 ankle, 15 hip, 10 back) or pie chart.",
        "Coding as 1 = knee, 2 = ankle, 3 = hip, 4 = back does not make the variable quantitative — the numbers are only labels.",
      ],
    },
    diagramId: "nominal",
    quiz: {
      intro: "Answer the following questions on nominal variables.",
      items: [
        {
          q: "Which of the following is a nominal variable?\n(a) Pain score 0–10\n(b) Sex (male / female)\n(c) Number of rehab sessions\n(d) BMI (kg/m²)",
          a: "(b) Sex (male / female) — independent categories with no logical order. Option (a) is quantitative; (c) is discrete quantitative; (d) is continuous quantitative (ratio).",
        },
        {
          q: "Can you calculate a meaningful mean of injury location if coded as knee=1, ankle=2, hip=3, back=4?",
          a: "No. Even when coded numerically, the numbers are arbitrary labels. A mean of 1.8 would be meaningless for injury location.",
        },
      ],
    },
  },

  /* ── 1.3.2  Ordinal ─────────────────────────────────────────────────── */
  ordinal: {
    definitions: [
      {
        term: "Ordinal",
        text: "Scales without a systematic relation between levels.",
        citation:
          "Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 6. LUNEX University.",
      },
      {
        term: "Ordinal scale",
        text: "Data that is measured using an ordinal scale is similar to nominal scale data but there is a big difference. The ordinal scale data can be ordered. An example of ordinal scale data is a list of the top five national parks in the United States. The top five national parks can be ranked from one to five but we cannot measure differences between the data.",
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 26.",
      },
    ],
    plainTerms: [
      'Ordinal variables have categories you can rank — "severe" is clearly worse than "mild" — but the gap between consecutive categories may not be equal. The jump from "mild" to "moderate" pain may feel very different in size from the jump from "moderate" to "severe".',
      "Because the intervals are unknown, you cannot validly calculate a mean for ordinal data. The appropriate summary is the median (middle-ranked category) and frequencies for each level.",
    ],
    clinicalExample: {
      intro:
        "A physiotherapist asks each patient to rate their current pain on a categorical scale.",
      bullets: [
        "Scale: none → mild → moderate → severe.",
        "The ranking is clear: severe > moderate > mild > none.",
        'However, the gap between "mild" and "moderate" may not equal the gap between "moderate" and "severe" — individual perception varies.',
        "Appropriate summary: report frequency per category or the median category; not the mean.",
      ],
    },
    diagramId: "ordinal",
    quiz: {
      intro: "Answer the following questions on ordinal variables.",
      items: [
        {
          q: 'A clinician rates patient functional recovery as: Poor / Fair / Good / Excellent.\n(a) Is this nominal or ordinal?\n(b) Can you calculate the exact difference between "Fair" and "Good"?',
          a: "(a) Ordinal — categories have a meaningful rank (Excellent > Good > Fair > Poor).\n(b) No — ordinal data establishes order only; gaps between levels are not guaranteed to be equal.",
        },
        {
          q: "Smoking status (Smoker / Non-smoker) — is this ordinal or nominal? Why?",
          a: 'Nominal — there is no meaningful ranking between "Smoker" and "Non-smoker"; they are independent categories.',
        },
      ],
    },
  },

  /* ── 1.3.3  Scale (Interval / Ratio) ───────────────────────────────── */
  scale: {
    definitions: [
      {
        term: "Scale",
        text: "Scales with a systematic relation between levels.",
        citation:
          "Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 6. LUNEX University.",
      },
      {
        term: "Interval scale",
        text: 'Like data measured on an ordinal scale, data that are measured on an interval scale have a definite ordering. It is possible to calculate differences between values measured on an interval scale. There is no minimum or "zero" value, however.',
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 26.",
      },
      {
        term: "Ratio scale",
        text: "Data that are measured using the ratio scale give the most information. Ratio scale data is like interval scale data, but there is a minimum value and ratios can be calculated.",
        citation:
          "Illowsky, B. & Dean, S. (2023). Introductory Statistics 2e. OpenStax, p. 26.",
      },
    ],
    plainTerms: [
      "Scale variables (interval and ratio) have equal intervals between consecutive values — the difference between 20 kg and 25 kg is exactly the same as between 40 kg and 45 kg. This allows you to calculate means, standard deviations, and use parametric tests.",
      'The key distinction: ratio scale has a true zero, meaning zero indicates complete absence of the property (0 kg = no force). Interval scale has no true zero — zero is just a point on the scale (\\(0^\\circ\\text{C}\\) is not "no temperature"). Only ratio data allows meaningful statements like "patient A is twice as strong as patient B". In SPSS, both are treated as "Scale" because the available statistical operations are identical.',
    ],
    clinicalExample: {
      intro:
        "Two clinical variables illustrate the interval vs ratio distinction.",
      bullets: [
        'Interval — Body temperature (\\(^\\circ\\text{C}\\)): \\(0^\\circ\\text{C}\\) is not "no temperature" (absolute zero is \\(-273^\\circ\\text{C}\\)). You can say \\(38^\\circ\\text{C}\\) is \\(2^\\circ\\) warmer than \\(36^\\circ\\text{C}\\), but not that \\(38^\\circ\\text{C}\\) is "twice as warm as" \\(19^\\circ\\text{C}\\).',
        "Ratio — Grip strength (kg): 0 kg genuinely means no force. You can say a grip strength of 40 kg is exactly twice that of 20 kg. All standard parametric statistics apply.",
      ],
    },
    diagramId: "scale",
    quiz: {
      intro:
        "For each variable, state whether it is interval or ratio, and explain why.",
      items: [
        {
          q: "(a) Body temperature in Celsius (°C)",
          a: 'Interval — \\(0^\\circ\\text{C}\\) is not an absolute zero (temperatures below \\(0^\\circ\\text{C}\\) exist), so ratios like "\\(38^\\circ\\text{C}\\) is twice as hot as \\(19^\\circ\\text{C}\\)" are not meaningful.',
        },
        {
          q: "(b) Handgrip strength in kilograms (kg)",
          a: "Ratio — 0 kg represents a true zero (no force). Ratios are meaningful: 40 kg is twice 20 kg.",
        },
        {
          q: "(c) Number of rehabilitation sessions attended",
          a: "Ratio — 0 sessions is a true zero (no sessions attended). This variable is also discrete quantitative.",
        },
      ],
    },
  },
};
