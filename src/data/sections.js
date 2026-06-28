// Canonical section/subsection structure derived from AGENTS.md §5.1
// Each top-level entry maps to a nav item and a section placeholder.

export const SECTIONS = [
  {
    id: "variables",
    number: "1",
    title: "Variables",
    icon: "𝑥",
    learningOutcomes: ["3a", "3b", "3d"],
    description:
      "Understand the difference between qualitative and quantitative variables, and the measurement scales used in physiotherapy research.",
    subsections: [
      {
        id: "pop-sample",
        title: "Population, Sample & Observations",
        number: "1.0",
      },
      { id: "qualitative", title: "Qualitative", number: "1.1" },
      { id: "quantitative", title: "Quantitative", number: "1.2" },
      {
        id: "types-of-scale",
        title: "Types of Variables",
        number: "1.3",
        children: [
          { id: "nominal", title: "Nominal", number: "1.3.1" },
          { id: "ordinal", title: "Ordinal", number: "1.3.2" },
          { id: "scale", title: "Scale (Interval / Ratio)", number: "1.3.3" },
        ],
      },
    ],
  },
  {
    id: "descriptive",
    number: "2",
    title: "Descriptive Statistics",
    icon: "∑",
    learningOutcomes: ["3b", "3c", "3e"],
    description:
      "Summarise and present data using measures of central tendency, graphical displays, and rules for identifying outliers.",
    subsections: [
      {
        id: "central-tendency",
        title: "Central Tendency",
        number: "2.1",
        children: [
          { id: "mean", title: "Mean", number: "2.1.1" },
          { id: "median", title: "Median", number: "2.1.2" },
          { id: "variance", title: "Variance", number: "2.1.3" },
          { id: "std-deviation", title: "Standard Deviation", number: "2.1.4" },
          { id: "std-error", title: "Standard Error", number: "2.1.5" },
        ],
      },
      {
        id: "graphs",
        title: "Types of Graphs",
        number: "2.2",
        children: [
          { id: "bar-chart", title: "Bar Chart", number: "2.2.1" },
          { id: "pie-chart", title: "Pie Chart", number: "2.2.2" },
          {
            id: "histogram",
            title: "Histogram & Normal Distribution",
            number: "2.2.3",
            children: [
              {
                id: "normal-distribution",
                title: "Normal Distribution",
                number: "2.2.3.1",
              },
              {
                id: "central-limit-theorem",
                title: "The Central Limit Theorem",
                number: "2.2.3.2",
              },
              {
                id: "confidence-intervals",
                title: "Confidence Intervals",
                number: "2.2.3.3",
              },
            ],
          },
          { id: "line-graph", title: "Line Graph", number: "2.2.4" },
          { id: "scatter", title: "Scatter Plot", number: "2.2.5" },
          { id: "boxplot", title: "Boxplot", number: "2.2.6" },
        ],
      },
      {
        id: "data-presentation",
        title: "Data Presentation in Scientific Papers",
        number: "2.3",
        children: [
          { id: "graphs-papers", title: "Graphs", number: "2.3.1" },
          { id: "tables", title: "Tables", number: "2.3.2" },
        ],
      },
      { id: "outliers", title: "Outliers — Tukey's Rule", number: "2.4" },
    ],
  },
  {
    id: "correlational",
    number: "3",
    title: "Correlational Statistics",
    icon: "r",
    learningOutcomes: ["3b", "3f"],
    description:
      "Explore how two variables relate using correlation coefficients, and distinguish statistical association from causal claims.",
    subsections: [
      { id: "corr-definition", title: "Definition & Examples", number: "3.1" },
      {
        id: "r-coefficient",
        title: "Reading the r-Coefficient",
        number: "3.2",
      },
      {
        id: "corr-math",
        title: "Mathematics: Height vs Weight",
        number: "3.3",
      },
      {
        id: "corr-vs-causation",
        title: "Correlation vs Causation",
        number: "3.4",
      },
    ],
  },
  {
    id: "reliability",
    number: "4",
    title: "Tests of Reliability",
    icon: "κ",
    learningOutcomes: ["3b", "3f"],
    description:
      "Assess measurement consistency using Cohen’s Kappa, Coefficient of Variation, Standard Error of Measurement, and Minimal Detectable Difference.",
    subsections: [
      { id: "reliability-def", title: "Definition & Examples", number: "4.1" },
      {
        id: "cohen-kappa",
        title: "Percent Agreement / Cohen's Kappa (κ)",
        number: "4.2",
        children: [
          { id: "crosstab", title: "Crosstabulation", number: "4.2.1" },
          {
            id: "raw-agreement",
            title: "Raw Percent Agreement",
            number: "4.2.2",
          },
          {
            id: "expected-agree",
            title: "Expected Percent Agreement",
            number: "4.2.3",
          },
          {
            id: "kappa-statistic",
            title: "Cohen's Kappa Statistic",
            number: "4.2.4",
          },
        ],
      },
      { id: "cv", title: "Coefficient of Variation (CV)", number: "4.3" },
      {
        id: "sem",
        title: "Standard Error of Measurement (SEM)",
        number: "4.4",
      },
      {
        id: "mdd",
        title: "Minimal Detectable Difference (MDD / MDC)",
        number: "4.5",
      },
    ],
  },
  {
    id: "inferential",
    number: "5",
    title: "Inferential Statistics",
    icon: "H₀",
    learningOutcomes: ["3b", "3f"],
    description:
      "Use hypothesis testing, t-tests, and Chi-Square to make decisions about populations from sample data.",
    subsections: [
      {
        id: "inferential-def",
        title: "What is Inferential Statistics?",
        number: "5.1",
      },
      {
        id: "hypothesis",
        title: "Hypothesis Testing",
        number: "5.2",
        children: [
          {
            id: "null-alt",
            title: "Null & Alternative Hypotheses",
            number: "5.2.1",
          },
          { id: "p-value", title: "The p-Value & α = 0.05", number: "5.2.2" },
          {
            id: "type-errors",
            title: "Type I & Type II Errors",
            number: "5.2.3",
          },
          {
            id: "decision",
            title: "Decision Logic: Reject or Retain H₀",
            number: "5.2.4",
          },
        ],
      },
      {
        id: "study-designs",
        title: "Research Designs",
        number: "5.3",
        children: [
          {
            id: "between-groups",
            title: "Between-Groups (Independent) Design",
            number: "5.3.1",
          },
          {
            id: "within-groups",
            title: "Within-Groups (Repeated Measures) Design",
            number: "5.3.2",
          },
        ],
      },
      {
        id: "t-test",
        title: "Student's t-Test",
        number: "5.4",
        children: [
          {
            id: "independent-t",
            title: "Independent Samples t-Test",
            number: "5.4.1",
          },
          {
            id: "paired-t",
            title: "Dependent / Paired Samples t-Test",
            number: "5.4.2",
          },
          {
            id: "t-value",
            title: "t-Value: Formula & Interpretation",
            number: "5.4.3",
          },
          {
            id: "df-critical",
            title: "Degrees of Freedom & Critical Values",
            number: "5.4.4",
          },
        ],
      },
      { id: "chi-square", title: "Chi-Square Test (χ²)", number: "5.5" },
    ],
  },
  {
    id: "bibliography",
    number: "6",
    title: "Bibliography",
    icon: "§",
    learningOutcomes: [],
    description:
      "All sources cited across this resource and organised alphabetically.",
    subsections: [],
  },
];

export const LO_DESCRIPTIONS = {
  "3a": "Differences between qualitative and quantitative data",
  "3b": "Principles of data collection and analysis",
  "3c": "Critical appraisal of data presentation in publications",
  "3d": "Create quantitative and qualitative data sets",
  "3e": "Analyse, summarise and present data with descriptive statistics",
  "3f": "Perform inferential and correlational statistical analysis",
  "3g": "Perform basic coding of qualitative data",
  "3h": "Critically evaluate statistical evidence in physiotherapy literature",
  "3i": "Create databases in Microsoft Excel",
};
