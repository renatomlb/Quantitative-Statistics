// Full content for Section 5 — Inferential Statistics
// Primary sources:
//   Baptista, R. (2026). BPTY12 Statistics Lecture Slides, slides 60–84. LUNEX University. [SLD]
//   Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics. Class Publishing. Ch. 4. [BSS]
//   Illowsky, B. & Dean, S. (2023). Introductory Statistics (2nd ed.). OpenStax. Ch. 9–10. [IDS]
//   Gliner, J. A., Morgan, G. A., & Harmon, R. J. (2000). Introduction to inferential statistics
//     and hypothesis testing. J. Am. Acad. Child Adolesc. Psychiatry, 39(12), 1568–1570. [GLD]

export const INFERENTIAL_CONTENT = {

  /* ── 5.1  What is Inferential Statistics? ───────────────────────────── */
  'inferential-def': {
    definitions: [
      {
        term: 'Statistical Inference',
        text: 'Statistical inference is the process by which we extend what has been observed in a sample to say something about a wider population. If a sample is randomly drawn from a population, one might expect the characteristic of interest to differ only by some degree of random error from the true value of that characteristic in the population.',
        citation: 'Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics: A Guide for Healthcare Professionals (p. 41). Class Publishing.',
      },
      {
        term: 'Inferential Statistics',
        text: 'Inferential statistics refers to the generalisation of results from a sample of participants to the whole population. Inferential statistics involves making inferences from sample statistics, such as the sample mean and the sample standard deviation, to population parameters such as the population mean and the population standard deviation.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 60. LUNEX University. Adapted from Gliner, J. A., Morgan, G. A., & Harmon, R. J. (2000). J. Am. Acad. Child Adolesc. Psychiatry, 39(12), 1568.',
      },
    ],
    plainTerms: [
      'You can rarely measure an entire population — you cannot assess the shoulder pain of every adult in Europe. Instead, you select a representative sample, measure it, and use inferential statistics to draw conclusions about the wider population.',
      'The key bridge is probability: if your sample is drawn correctly (randomly and without bias), there is a calculable chance that your sample result is close to the true population value. Inferential statistics quantifies that uncertainty.',
      'There are two main uses: (1) estimation — using a sample mean to estimate the population mean, reported with a confidence interval; (2) hypothesis testing — using sample data to decide whether a specific claim about the population is supported by evidence.',
      'The measurement value you obtain from a sample is called a statistic (e.g., sample mean \\( \\bar{x} \\)). The corresponding true population value is called a parameter (e.g., population mean \\( \\mu \\)). Inferential statistics is the formal discipline of moving from one to the other.',
    ],
    clinicalExample: {
      intro: 'A physiotherapy researcher wants to know whether a 6-week proprioception training programme improves balance in older adults with a history of falls.',
      bullets: [
        'It is impossible to enrol every older adult at risk of falls, so 40 participants are recruited from community fall-prevention clinics.',
        'Balance is measured before and after the programme. The researcher computes a mean improvement in the sample and asks: "Is this improvement large enough that it is unlikely to have occurred by chance alone?"',
        'Inferential statistics — specifically a paired-samples t-test — provides the answer by calculating the probability (p-value) of observing this improvement if the programme actually had no effect.',
        'If p ≤ 0.05, the researcher can generalise the conclusion to the wider population of older adults at risk of falls.',
      ],
    },
    diagramId: 'inf-population-sample',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What is the difference between a statistic and a parameter?',
          a: 'A statistic is a numerical value calculated from a sample (e.g., sample mean \\( \\bar{x} \\), sample SD \\( s \\)). A parameter is the corresponding true value for the entire population (e.g., population mean \\( \\mu \\), population SD \\( \\sigma \\)). Inferential statistics uses statistics to make inferences about parameters.',
        },
        {
          q: 'Why can\'t we simply measure the entire population?',
          a: 'Practical constraints make it impossible or prohibitively expensive to measure every member of a population. Instead, a representative random sample is measured, and inferential statistics allows us to generalise results to the broader population with a known degree of uncertainty.',
        },
        {
          q: 'Name the two main uses of inferential statistics.',
          a: '1. Estimation: using a sample statistic (e.g., mean) to estimate a population parameter, usually reported with a confidence interval.\n2. Hypothesis testing: using sample data to make a decision about a specific claim (hypothesis) regarding the population — deciding whether observed differences are likely due to chance or represent a real effect.',
        },
      ],
    },
  },

  /* ── 5.2  Hypothesis Testing (parent) ───────────────────────────────── */
  'hypothesis': {
    definitions: [
      {
        term: 'Hypothesis Testing',
        text: 'A hypothesis is a statement about a population parameter (e.g., mean, proportion) that we want to test using sample data. Hypothesis testing determines the probability (p-value) of a difference, or non-difference, between groups by comparing a null hypothesis (H₀) against an alternative hypothesis (Hₐ).',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slides 62–64. LUNEX University.',
      },
    ],
    plainTerms: [
      'Hypothesis testing is the formal process of using sample data to decide between two competing explanations: either an observed difference is real (Hₐ) or it occurred by chance (H₀).',
      'The process has four stages: (1) formulate H₀ and Hₐ before collecting data; (2) collect the sample and compute a test statistic; (3) calculate the p-value; (4) compare the p-value to α = 0.05 and make a decision.',
      'This section covers each stage in turn, starting with how to write the hypotheses correctly — the single most important skill in inferential statistics.',
    ],
    clinicalExample: {
      intro: 'Testing whether TENS reduces pain in 30 patients with acute low back pain — the four stages applied step by step.',
      bullets: [
        'Stage 1 — Formulate (before data collection): H₀: μ_TENS = μ_control (TENS has no effect on pain). Hₐ: μ_TENS < μ_control (TENS reduces pain). Significance level α = 0.05 is set in advance.',
        'Stage 2 — Collect & compute: 30 patients are randomised to TENS (n = 15) or sham control (n = 15). Pain is measured on a VAS after 2 weeks. A t-test is run → t = −2.41.',
        'Stage 3 — Calculate p-value: The software reports p = 0.023. Interpretation: "If TENS truly had no effect, a difference this large would occur only 2.3% of the time by chance."',
        'Stage 4 — Decide: Since p = 0.023 < α = 0.05, we reject H₀. Conclusion: "There is statistically significant evidence that TENS reduces pain intensity in acute LBP (p = 0.023)."',
      ],
    },
    diagramId: 'inf-hyp-steps',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What are the four stages of hypothesis testing?',
          a: '1. Formulate H₀ and Hₐ before collecting data.\n2. Collect the sample and compute a test statistic (e.g., t-value, χ²).\n3. Calculate the probability of that test statistic if H₀ were true — this is the p-value.\n4. Compare the p-value to the significance level α (usually 0.05) and decide: reject H₀ or do not reject H₀.',
        },
      ],
    },
  },

  /* ── 5.2.1  Null & Alternative Hypotheses ───────────────────────────── */
  'null-alt': {
    definitions: [
      {
        term: 'Null Hypothesis (H₀)',
        text: 'The null hypothesis (H₀): It is a statement of no difference between the variables — they are not related. This can often be considered the status quo and as a result if you cannot accept the null it requires some action. H₀ always has a symbol with an equal sign in it.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics (2nd ed., p. 462). OpenStax.',
      },
      {
        term: 'Alternative Hypothesis (Hₐ)',
        text: 'The alternative hypothesis (Hₐ): It is a claim about the population that is contradictory to H₀ and what we conclude when we reject H₀. This is usually what the researcher is trying to prove. Hₐ never has a symbol with an equal sign in it.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics (2nd ed., p. 462). OpenStax.',
      },
    ],
    plainTerms: [
      'Think of H₀ as the "presumption of innocence" in a court of law — the default position is that nothing unusual is happening. Your job as a researcher is to find evidence strong enough to overturn this default.',
      'H₀ represents what you want to disprove. It always contains an equality sign (=, ≤, or ≥). Example: "Patients receiving taping therapy have the same pain scores as those who do not" → H₀: μ_taping = μ_control.',
      'Hₐ is what you are trying to demonstrate — that there IS a difference, or that one group is better. It contains an inequality (≠, >, or <). Example: Hₐ: μ_taping < μ_control (taping reduces pain).',
      'A practical tip: write Hₐ first based on your clinical question, then let H₀ be the exact opposite. Both hypotheses must be mutually exclusive and collectively exhaustive — between them, they cover every possible outcome.',
    ],
    clinicalExample: {
      intro: 'A physiotherapist wants to test whether a kinesiology taping intervention reduces pain intensity (VAS 0–10) in patients with patellofemoral pain syndrome.',
      bullets: [
        'H₀: The kinesiology taping intervention has no effect on pain scores. μ_taping = μ_control.',
        'Hₐ: The kinesiology taping intervention reduces pain scores. μ_taping < μ_control.',
        'This is a directional (one-tailed) Hₐ because we specifically predict that taping will REDUCE pain, not merely change it. If prior literature is inconclusive, a non-directional (two-tailed) Hₐ (μ_taping ≠ μ_control) would be more appropriate.',
        'Note: we never "accept" H₀ — we can only "reject" it or "fail to reject" it. Failing to reject H₀ does not prove there is no effect; it only means our data did not provide enough evidence to conclude one exists.',
      ],
    },
    diagramId: 'inf-hypothesis-cards',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What does the null hypothesis (H₀) always state, and what symbol does it always contain?',
          a: 'H₀ always states that there is no difference, no effect, or no relationship between the variables being studied. It always contains an equality sign (=, ≤, or ≥). It represents the status quo or the default position before collecting data.',
        },
        {
          q: 'A researcher wants to test whether a new exercise programme increases grip strength in stroke survivors. Write H₀ and Hₐ.',
          a: 'H₀: The exercise programme has no effect on grip strength. μ_exercise = μ_baseline (or μ_exercise ≤ μ_baseline).\nHₐ: The exercise programme increases grip strength. μ_exercise > μ_baseline.\nThis is a directional (one-tailed) alternative hypothesis because the prediction is specifically about an increase.',
        },
        {
          q: 'What is the difference between a directional and a non-directional alternative hypothesis?',
          a: 'A directional (one-tailed) Hₐ predicts the specific direction of an effect (e.g., Group A > Group B or Group A < Group B). Use when prior evidence justifies the direction.\nA non-directional (two-tailed) Hₐ only states that a difference exists (Group A ≠ Group B), without specifying direction. This is more conservative and more commonly used in clinical research when the direction is uncertain.',
        },
        {
          q: 'Why do we never say we "accept" the null hypothesis?',
          a: 'Failing to reject H₀ only means we did not find sufficient evidence to conclude there is an effect — it does not prove that no effect exists. A larger sample, a more sensitive measurement, or a better-designed study might find the effect. "Do not reject H₀" is a statement about the evidence in the current study, not a proof that H₀ is true.',
        },
      ],
    },
  },

  /* ── 5.2.2  The p-Value & α = 0.05 ─────────────────────────────────── */
  'p-value': {
    definitions: [
      {
        term: 'p-Value',
        text: 'The p-value is the probability that, if the null hypothesis is true, the results from another randomly selected sample will be as extreme or more extreme as the results obtained from the given sample. A large p-value calculated from the data indicates that we should not reject the null hypothesis. The smaller the p-value, the more unlikely the outcome, and the stronger the evidence against the null hypothesis.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics (2nd ed., p. 467). OpenStax.',
      },
      {
        term: 'Significance Level (α = 0.05)',
        text: 'The 0.05 significance level means we are accepting a 5% probability of being wrong when rejecting H₀. It balances the risk of concluding there is an effect when there is not (Type I error) against the risk of missing a real effect (Type II error). If the result could happen by chance only 5 times out of 100 or less, we consider it surprising enough to take it seriously.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 66. LUNEX University.',
      },
    ],
    plainTerms: [
      'The p-value answers the question: "If H₀ were true (i.e., there really is no difference), how often would I get data this extreme just by random chance?" A p-value of 0.03 means: "If there were truly no difference, I would get a result this extreme only 3% of the time." Since 3% is rare, we suspect the null hypothesis is not true.',
      'The conventional threshold is α = 0.05 (5%). If p ≤ 0.05, we reject H₀ and conclude that the observed difference is statistically significant. If p > 0.05, we do not reject H₀ — the result could reasonably have occurred by chance.',
      'Important misconceptions to avoid:\n• The p-value is NOT the probability that H₀ is true.\n• A p-value > 0.05 does NOT prove H₀ is true — it simply means there is insufficient evidence to reject it.\n• Statistical significance (p ≤ 0.05) does NOT equal clinical significance. A trivially small difference can be statistically significant in a very large study.',
      'The α = 0.05 threshold is a convention, not a law of nature. In some fields, stricter thresholds (α = 0.01 or α = 0.001) are used. Cook et al. (2004) caution that "P values express statistical significance, but statistically significant results may have little clinical significance."',
    ],
    clinicalExample: {
      intro: 'A researcher tests whether a new taping protocol reduces pain in 40 patients with shoulder impingement. The mean pain VAS score falls from 6.2 to 4.5, and the t-test gives p = 0.031.',
      bullets: [
        'Since p = 0.031 ≤ 0.05, we reject H₀. There is statistically significant evidence that the taping protocol reduces pain.',
        'The p-value of 0.031 means: "If taping truly had no effect on pain, we would get a difference this large or larger only 3.1% of the time by chance alone."',
        'However, the clinician should also consider whether a mean reduction of 1.7 points on a VAS is clinically meaningful — many guidelines use a 2-point change as the minimal clinically important difference (MCID) for shoulder pain.',
        'In a second study with n = 200 patients, p = 0.04 is obtained for a mean reduction of only 0.3 VAS points. This is statistically significant but almost certainly not clinically important — illustrating why p-values alone are insufficient.',
      ],
    },
    diagramId: 'inf-p-value-line',
    quiz: {
      intro: null,
      items: [
        {
          q: 'A study produces p = 0.08. What decision do you make and what does it mean?',
          a: 'Since p = 0.08 > 0.05, you do not reject H₀. This means there is insufficient statistical evidence to conclude that there is a significant difference. It does NOT mean H₀ is proven true — the study may have been underpowered (too small a sample) to detect a real effect.',
        },
        {
          q: 'What does p = 0.001 tell you compared to p = 0.049?',
          a: 'Both lead to the same decision (reject H₀, since both are ≤ 0.05). However, p = 0.001 provides much stronger evidence against H₀ — the observed result would occur by chance only 0.1% of the time. With p = 0.049, the result would occur by chance 4.9% of the time, which is just barely below the threshold. The p = 0.001 result is more convincing, though both are conventionally "significant."',
        },
        {
          q: 'Explain why statistical significance does not equal clinical significance.',
          a: 'Statistical significance (p ≤ 0.05) only tells us that the observed difference is unlikely to be due to chance. With a very large sample, even a tiny, clinically trivial difference (e.g., 0.2 points on a 10-point pain scale) can reach statistical significance. Clinical significance requires that the magnitude of the difference is large enough to actually matter to patients — often assessed using the Minimal Clinically Important Difference (MCID).',
        },
        {
          q: 'What does α = 0.05 represent in hypothesis testing?',
          a: 'α (alpha) is the significance level — the maximum probability of making a Type I error (rejecting H₀ when it is actually true) that we are willing to accept. Setting α = 0.05 means we accept a 5% chance of concluding there is an effect when there is none. This threshold is a convention; stricter research may use α = 0.01.',
        },
      ],
    },
  },

  /* ── 5.2.3  Type I & Type II Errors ─────────────────────────────────── */
  'type-errors': {
    definitions: [
      {
        term: 'Type I Error (False Positive)',
        text: 'A Type I error occurs when we reject the null hypothesis when it is actually true — i.e., we conclude there is an effect when, in reality, there is not. The probability of a Type I error is denoted α and is equal to the significance level. In clinical terms, this is like concluding a treatment works when it actually does not.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics (2nd ed., p. 464). OpenStax. Adapted from Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 67. LUNEX University.',
      },
      {
        term: 'Type II Error (False Negative)',
        text: 'A Type II error occurs when we fail to reject the null hypothesis when it is actually false — i.e., we conclude there is no effect when there really is one. The probability of a Type II error is denoted β. Small studies with low statistical power are particularly prone to Type II errors. In clinical terms, this is like concluding a treatment does not work when it actually does.',
        citation: 'Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics (p. 45). Class Publishing. Adapted from Illowsky, B. & Dean, S. (2023). Introductory Statistics (2nd ed., p. 464). OpenStax.',
      },
    ],
    plainTerms: [
      'There are four possible outcomes when making a decision in hypothesis testing. Two of these are correct decisions, and two are errors:\n• Reject H₀ when H₀ is true → Type I Error (False Positive)\n• Do not reject H₀ when H₀ is false → Type II Error (False Negative)\n• Reject H₀ when H₀ is false → Correct decision (True Positive)\n• Do not reject H₀ when H₀ is true → Correct decision (True Negative)',
      'Mnemonic to remember the errors: H₀ = "Nothing is wrong." Type I = "Thinking something is wrong when it is not" (over-reaction — false alarm). Type II = "Thinking nothing is wrong when it actually is" (under-reaction — missed finding).',
      'There is a trade-off: decreasing α (making it harder to reject H₀) reduces Type I errors but increases Type II errors. Increasing sample size is the best way to reduce both types of error simultaneously, as it increases the power of the test (Power = 1 − β).',
      'In healthcare research, the consequences of each error type matter. A Type I error in a drug trial could lead to adopting an ineffective (or harmful) treatment. A Type II error could mean abandoning a beneficial treatment. The choice of α should reflect these stakes.',
    ],
    clinicalExample: {
      intro: 'Consider testing a new pain management protocol for post-operative patients. H₀: the protocol does not reduce pain.',
      bullets: [
        'Type I error: We conclude the protocol reduces pain (reject H₀) when it actually has no effect. Consequence: clinics adopt a costly, ineffective protocol, wasting resources and potentially delaying effective care.',
        'Type II error: We conclude the protocol does not reduce pain (fail to reject H₀) when it actually works. Consequence: an effective treatment is abandoned and patients continue to receive suboptimal pain management.',
        'Diagnostic analogy: a Type I error is like a healthy person testing positive for a disease (false positive) — unneeded treatment follows. A Type II error is like a sick person testing negative (false negative) — the disease goes untreated.',
        'If the study has only 15 patients (small sample), it is very likely to produce a Type II error even if the protocol works — the sample is too small to detect the effect reliably. This is why power calculations and adequate sample sizes are essential.',
      ],
    },
    diagramId: 'inf-type-errors-matrix',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What is a Type I error and what is its probability symbol?',
          a: 'A Type I error is rejecting the null hypothesis when it is actually true — concluding there is an effect when there is not (false positive). Its probability is denoted α, the significance level. By setting α = 0.05, we accept that we will make a Type I error 5% of the time in the long run.',
        },
        {
          q: 'What is a Type II error and what is its probability symbol?',
          a: 'A Type II error is failing to reject the null hypothesis when it is actually false — concluding there is no effect when there actually is one (false negative). Its probability is denoted β. Small samples and low statistical power increase the risk of Type II errors.',
        },
        {
          q: 'How can you reduce both Type I and Type II errors simultaneously?',
          a: 'The most effective way to reduce both types of errors simultaneously is to increase the sample size. A larger sample increases the statistical power (1 − β) — the ability to detect a real effect — while maintaining the same α level. Other strategies include using more precise measurement tools, reducing measurement variability, and using more sensitive study designs (e.g., within-groups/repeated measures instead of between-groups).',
        },
        {
          q: 'In which situation is a Type II error more dangerous than a Type I error? Give a clinical example.',
          a: 'A Type II error is more dangerous when failing to detect a real effect has serious consequences — for example, concluding that a life-saving treatment for sepsis is ineffective when it actually works. This Type II error would result in patients not receiving a beneficial treatment. Similarly, if a test for a serious contagious disease produces a false negative (Type II), the patient goes untreated and may spread the disease to others.',
        },
      ],
    },
  },

  /* ── 5.2.4  Decision Logic ───────────────────────────────────────────── */
  'decision': {
    definitions: [
      {
        term: 'Decision Rule',
        text: 'A preset α (also called a "significance level") is the probability of a Type I error — rejecting the null hypothesis when the null hypothesis is true. When you make a decision to reject or not reject H₀: If α > p-value, reject H₀. The results of the sample data are significant. If α ≤ p-value, do not reject H₀. The results of the sample data are not significant.',
        citation: 'Illowsky, B. & Dean, S. (2023). Introductory Statistics (2nd ed., p. 468). OpenStax.',
      },
    ],
    plainTerms: [
      'The decision is simple and must be made before looking at the data: set α (usually 0.05), run the statistical test to get the p-value, then compare them. If p ≤ α → reject H₀. If p > α → do not reject H₀.',
      'Memory aid: "If the p is low, the null must go. If the p is high, the null must fly." (i.e., we let H₀ stand.) This rhyme captures the entire decision rule in one sentence.',
      'Critical language note:\n• CORRECT: "We reject H₀" or "We do not reject H₀"\n• CORRECT: "There is sufficient evidence to support Hₐ"\n• INCORRECT: "We accept H₀" — failing to reject H₀ is not proof it is true\n• INCORRECT: "We accept Hₐ" — we have evidence to support it, not absolute proof',
      'After making the decision, always write a conclusion in plain language that relates back to the original research question. The statistical decision (reject/not reject H₀) must be translated into a meaningful statement about the clinical or research context.',
    ],
    clinicalExample: {
      intro: 'A sports physiotherapist tests whether manual therapy reduces recovery time after ankle sprain. α is set at 0.05 before data collection.',
      bullets: [
        'After the study, a t-test gives p = 0.022.',
        'Decision: Since p = 0.022 < α = 0.05, we reject H₀.',
        'Conclusion: "At the 5% significance level, there is sufficient evidence to conclude that manual therapy significantly reduces recovery time after ankle sprain compared to standard care."',
        'If instead p = 0.18: do not reject H₀. Conclusion: "There is insufficient evidence at the 5% significance level to conclude that manual therapy reduces recovery time after ankle sprain. The observed difference may be due to chance."',
      ],
    },
    diagramId: 'inf-decision-flow',
    quiz: {
      intro: null,
      items: [
        {
          q: 'State the decision rule for hypothesis testing using α and p-value.',
          a: 'If p ≤ α: reject H₀ — the results are statistically significant; there is sufficient evidence to support Hₐ.\nIf p > α: do not reject H₀ — the results are not statistically significant; there is insufficient evidence to support Hₐ.\nTypically α = 0.05 unless specified otherwise.',
        },
        {
          q: 'Why is it incorrect to say "we accept the null hypothesis"?',
          a: '"Accepting H₀" implies we have proven it to be true, which is impossible from sample data. When p > α, all we can conclude is that our sample did not provide enough evidence to reject H₀ — the true effect may still exist but was not detected (possibly due to small sample size, high variability, or imprecise measurement). The correct phrasing is "we do not reject H₀" or "we fail to reject H₀."',
        },
        {
          q: 'Write a complete conclusion for a study testing whether stretching reduces hamstring tightness, where t-test gives p = 0.003 and α = 0.05.',
          a: 'Since p = 0.003 < α = 0.05, we reject the null hypothesis. At the 5% level of significance, there is strong statistical evidence that the stretching programme significantly reduces hamstring tightness. (Note: clinical relevance should also be assessed using effect size and the Minimal Clinically Important Difference.)',
        },
      ],
    },
  },

  /* ── 5.3  Research Designs (parent) ─────────────────────────────────── */
  'study-designs': {
    definitions: [
      {
        term: 'Between-Groups vs Within-Groups Design',
        text: 'The choice of study design determines which statistical test you use and how the data are structured. Two samples from different groups or individuals call for an independent (between-groups) design. Two samples from the same group or individual call for a paired/dependent (within-groups) design.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 78. LUNEX University.',
      },
    ],
    plainTerms: [
      'Before selecting a statistical test, you must identify your study design. The most fundamental distinction is: are the same participants measured under different conditions (within-groups), or are different participants in each group (between-groups)?',
      'This distinction is critical because it determines which t-test to use and how to calculate the test statistic. Using the wrong test can lead to false conclusions.',
    ],
    clinicalExample: {
      intro: 'Two clinical questions illustrate how the research question determines the study design.',
      bullets: [
        'Question A: "Does manual therapy reduce pain more than exercise in patients with LBP?" → Between-groups design. 60 patients split: 30 receive manual therapy, 30 receive exercise. Different people in each group → independent-samples t-test.',
        'Question B: "Does a 6-week ROM programme improve knee flexion after total knee replacement?" → Within-groups design. 25 patients measured at Week 0 and Week 6 — the same 25 people appear in both measurements → paired t-test.',
        'Key rule: If the same participants provide data in both conditions → within-groups (paired t-test). If different participants form each group → between-groups (independent-samples t-test).',
        'Clinical tip: Within-groups designs need fewer participants because each person is their own control, but are not always possible — surgery vs no surgery, male vs female, or conditions with strong carryover effects require between-groups designs.',
      ],
    },
    diagramId: 'inf-design-decision',
    quiz: {
      intro: null,
      items: [
        {
          q: 'What is the key question to ask when deciding between an independent and a paired t-test?',
          a: 'Ask: "Are the same participants providing data in both groups/conditions, or are different participants in each group?" If SAME participants → paired (within-groups) design → paired t-test. If DIFFERENT participants → independent (between-groups) design → independent samples t-test.',
        },
      ],
    },
  },

  /* ── 5.3.1  Between-Groups Design ───────────────────────────────────── */
  'between-groups': {
    definitions: [
      {
        term: 'Between-Groups (Independent) Design',
        text: 'A between-groups design uses different (independent) participants in each group. Each participant is exposed to only one condition. The two groups are formed either by random assignment (experimental design) or by natural grouping (observational/quasi-experimental design). The statistical test used is the independent-samples t-test (for two groups) or one-way ANOVA (for three or more groups).',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 78. LUNEX University. Adapted from Gliner, J. A., Morgan, G. A., & Harmon, R. J. (2000). J. Am. Acad. Child Adolesc. Psychiatry, 39(12), 1568–1570.',
      },
    ],
    plainTerms: [
      'In a between-groups design, each participant belongs to exactly one group — they never appear in the other group. The most rigorous form is a randomised controlled trial (RCT): participants are randomly assigned to either the intervention or the control group.',
      'Because different people are in each group, naturally occurring differences between people (age, fitness, pain tolerance) can create variability that masks or exaggerates the true treatment effect. Random assignment distributes these differences evenly, but more participants are needed to achieve adequate statistical power.',
      'Advantages: no carryover effects between conditions (Participant A receiving treatment cannot be "contaminated" by control); suitable when treatments cannot be reversed or when testing between naturally separate groups (e.g., males vs females).',
      'Disadvantages: requires more participants than a within-groups design; groups may differ at baseline even with randomisation; individual differences add noise to the comparison.',
    ],
    clinicalExample: {
      intro: 'A physiotherapy researcher compares two interventions for chronic low back pain: manual therapy vs. exercise therapy.',
      bullets: [
        '60 patients are recruited and randomly assigned: 30 receive manual therapy (Group A), 30 receive exercise therapy (Group B). No patient is in both groups.',
        'Pain (VAS) is measured at 8 weeks. Because different people are in each group, an independent-samples t-test is used to compare the two means.',
        'H₀: μ_manual = μ_exercise. Hₐ: μ_manual ≠ μ_exercise (two-tailed, since we are unsure which therapy is better).',
        'If p = 0.041 < 0.05, we reject H₀ and conclude the two therapies produce significantly different pain outcomes at 8 weeks.',
      ],
    },
    diagramId: 'inf-between-groups',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Define a between-groups design and identify the appropriate t-test.',
          a: 'A between-groups (independent) design uses different participants in each condition/group. Each participant contributes data to only one group. The appropriate statistical test for comparing two group means is the independent-samples t-test. For three or more groups, one-way ANOVA is used.',
        },
        {
          q: 'What is the main advantage and the main disadvantage of a between-groups design?',
          a: 'Advantage: No carryover or order effects between conditions — since participants only experience one condition, their data in that condition is not influenced by prior exposure to the other condition.\nDisadvantage: More participants are required because individual differences between people add variability to the comparison. A within-groups design achieves greater statistical power with fewer participants by using each person as their own control.',
        },
        {
          q: 'A study compares balance in athletes vs non-athletes. Is this between-groups or within-groups? Why?',
          a: 'Between-groups — because athletes and non-athletes are different people assigned to naturally occurring groups. One person cannot be in both groups simultaneously. The appropriate test is an independent-samples t-test (assuming continuous outcome, normal distribution, and equal variances).',
        },
      ],
    },
  },

  /* ── 5.3.2  Within-Groups Design ────────────────────────────────────── */
  'within-groups': {
    definitions: [
      {
        term: 'Within-Groups (Repeated Measures / Paired) Design',
        text: 'A within-groups design measures the same participants under two or more conditions, or at multiple time points. Because each participant serves as their own control, variability due to individual differences is removed from the error term, substantially increasing statistical power. The appropriate statistical test for two time points or conditions is the paired (dependent-samples) t-test.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 78. LUNEX University. Adapted from Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics (p. 46). Class Publishing.',
      },
    ],
    plainTerms: [
      'In a within-groups design, the same group of participants is measured more than once — typically before an intervention (pre-test) and after (post-test), or under both treatment and control conditions (crossover design). Each participant generates two (or more) data points.',
      'The key advantage is that individual differences (e.g., one patient naturally having higher pain than another) cancel out when you compute each person\'s pre-to-post difference. You are testing whether the average of these individual differences is significantly different from zero.',
      'Advantages: requires fewer participants for the same statistical power; removes between-person variability from the error term; useful when the same patients must receive both conditions (e.g., testing two measurement tools on the same limb).',
      'Disadvantages: risk of carryover effects (the first condition affects performance in the second); risk of learning or practice effects (participants improve simply from repeating the task); not suitable when conditions cannot be reversed (e.g., surgery vs no surgery).',
    ],
    clinicalExample: {
      intro: 'A physiotherapist evaluates a 6-week progressive ROM stretching programme for patients recovering from total knee replacement.',
      bullets: [
        '20 patients are measured at Week 0 (pre-intervention) and Week 6 (post-intervention). The SAME 20 patients provide both measurements — this is a within-groups design.',
        'The paired t-test computes the difference in ROM for each individual patient (e.g., Patient 1: 85° → 110° = +25°; Patient 2: 78° → 102° = +24°, etc.) and tests whether the mean of these differences is significantly different from zero.',
        'H₀: There is no difference in mean ROM before and after the programme (mean difference = 0).\nHₐ: ROM is significantly greater after the programme (mean difference > 0).',
        'Using the same participants as their own controls eliminates the noise from individual differences in anatomy and baseline ROM, making it easier to detect the true effect of the intervention.',
      ],
    },
    diagramId: 'inf-within-groups',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Define a within-groups design and identify the appropriate t-test.',
          a: 'A within-groups (repeated measures / paired) design measures the same participants under two or more conditions or at multiple time points. Each participant contributes data to all conditions. The appropriate statistical test for comparing two conditions is the paired (dependent-samples) t-test.',
        },
        {
          q: 'Why does a within-groups design require fewer participants than a between-groups design for the same statistical power?',
          a: 'Because within-groups designs use each participant as their own control, individual differences in baseline characteristics (e.g., initial pain level, fitness, age) are removed from the error term. The test focuses only on within-person changes, which are much less variable than between-person differences. This reduces the "noise" in the comparison, allowing smaller samples to detect the same effect.',
        },
        {
          q: 'What is a "carryover effect" and why is it a concern in within-groups designs?',
          a: 'A carryover effect occurs when exposure to one condition influences performance in a subsequent condition. For example, in a crossover pain study, the pain relief from the first treatment might persist when the patient receives the second treatment, making the second treatment appear more effective than it truly is. Counterbalancing (randomising the order of conditions) and allowing washout periods help control carryover effects.',
        },
        {
          q: 'A researcher measures grip strength before and after a 4-week hand therapy programme in 15 patients. Is this between-groups or within-groups? Which t-test should be used?',
          a: 'This is a within-groups (repeated measures) design — the same 15 patients are measured before and after the programme. The appropriate test is the paired (dependent-samples) t-test, which computes each patient\'s individual change score (post − pre) and tests whether the mean change is significantly different from zero.',
        },
      ],
    },
  },

  /* ── 5.4  Student's t-Test (parent) ─────────────────────────────────── */
  't-test': {
    definitions: [
      {
        term: "Student's t-Test",
        text: 'The t-test tells us how significant the differences between group means are. It can be used when the measured variable is continuous, the data follow a normal distribution (or the sample is large enough for the Central Limit Theorem to apply), and variances are approximately equal between groups. There are three types: independent-samples, paired/dependent-samples, and one-sample.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slides 78–79. LUNEX University.',
      },
    ],
    plainTerms: [
      'The t-test was developed by William Sealy Gosset, who published it in 1908 under the pen name "STUDENT" (because his employer, Guinness Brewery, did not allow staff to publish under their own names). It is therefore formally called the Student\'s t-test.',
      'The t-statistic works on the principle of signal-to-noise: t = (difference between means) ÷ (variability within groups). A large t means the difference between groups is large relative to the variability within groups — strong evidence against H₀.',
      'The three main questions a t-test answers: (1) Is the observed difference likely due to chance? (2) How big is the difference? (3) Is it clinically important?',
    ],
    clinicalExample: {
      intro: "Gosset's original problem — why the normal distribution fails with small samples, and how the t-distribution solves it.",
      bullets: [
        'The problem (1908): Gosset was testing barley varieties at Guinness Brewery with very small batches (n ≈ 8–10). The z-test (normal distribution) assumes the population standard deviation σ is known — but with small samples, using the estimated s instead of σ introduces extra uncertainty that the z-test ignores.',
        'The consequence: Using z-critical values (e.g., 1.96 for 95% confidence) with a small sample creates intervals that are too narrow. The stated 95% confidence is actually less — you are overconfident in your results.',
        "Gosset's insight: When σ is estimated from a small sample, the sampling distribution of the mean follows a t-distribution — symmetric and bell-shaped like the normal, but with heavier tails. The smaller the sample (lower df), the heavier the tails, and the larger the critical value required to maintain α = 0.05.",
        'Convergence: As n increases, s becomes a better estimate of σ, the t-distribution narrows, and converges to the normal distribution. At df = ∞, t-critical = 1.96 (identical to z). This is why the t-test is always the correct choice with clinical sample sizes — using z would underestimate uncertainty.',
      ],
    },
    diagramId: 'inf-t-vs-normal',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Who invented the t-test and why was it published under a pseudonym?',
          a: 'The t-test was developed by William Sealy Gosset, a statistician working for Guinness Brewery in Dublin. He published it in 1908 under the pen name "STUDENT" because Guinness had a policy forbidding employees from publishing research findings. This is why it is formally known as the Student\'s t-test and the distribution it uses is called the Student\'s t-distribution.',
        },
        {
          q: 'What are the three main assumptions of the t-test?',
          a: '1. The measured variable must be continuous (interval or ratio scale).\n2. The data should be approximately normally distributed (or the sample large enough for the Central Limit Theorem to apply — generally n > 30).\n3. Variances should be approximately equal between groups (homogeneity of variance). If variances are unequal, Welch\'s t-test (a modification) should be used instead.',
        },
      ],
    },
  },

  /* ── 5.4.1  Independent Samples t-Test ──────────────────────────────── */
  'independent-t': {
    definitions: [
      {
        term: 'Independent-Samples t-Test',
        text: 'The independent-samples t-test compares the means of two independent groups to determine whether there is statistical evidence that the associated population means are significantly different. "Two samples from different groups" is the defining characteristic. The test statistic is the ratio of the observed difference between group means to the pooled standard error of that difference.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 78. LUNEX University.',
      },
    ],
    plainTerms: [
      'Use the independent-samples t-test when: (a) you have two separate groups of different participants, and (b) you want to compare their means on a continuous outcome variable.',
      'The formula is: \\[ t = \\dfrac{|\\bar{x}_A - \\bar{x}_B|}{\\sqrt{\\dfrac{s_A^2}{n_A} + \\dfrac{s_B^2}{n_B}}} \\] where \\( \\bar{x}_A \\) and \\( \\bar{x}_B \\) are the sample means, \\( s_A^2 \\) and \\( s_B^2 \\) are the sample variances, and \\( n_A \\) and \\( n_B \\) are the group sizes.',
      'Numerator (signal) = the difference between group means. Denominator (noise) = the combined variability within both groups. A larger t-value means the signal is strong relative to the noise — stronger evidence of a real difference.',
      'Degrees of freedom: \\( df = n_A + n_B - 2 \\). You compare the calculated t to the critical t-value from the t-table at your chosen α and df to make your decision.',
    ],
    clinicalExample: {
      intro: 'Two groups of patients undergo treatment for chronic shoulder pain: Group A (manual therapy, n = 20) vs Group B (exercise therapy, n = 20).',
      bullets: [
        'After 8 weeks: Group A mean VAS = 3.2 (SD = 1.4); Group B mean VAS = 4.6 (SD = 1.7).',
        'Calculated: t = |3.2 − 4.6| / √(1.96/20 + 2.89/20) = 1.4 / √(0.098 + 0.145) = 1.4 / 0.493 ≈ 2.84',
        'df = 20 + 20 − 2 = 38. Critical t at α = 0.05, two-tailed, df = 38 ≈ 2.02.',
        'Since |t| = 2.84 > t_critical = 2.02, we reject H₀. Manual therapy produces significantly lower pain scores than exercise therapy at 8 weeks (p < 0.05).',
      ],
    },
    diagramId: 'inf-independent-t',
    quiz: {
      intro: null,
      items: [
        {
          q: 'When should you use an independent-samples t-test?',
          a: 'When you want to compare the means of two groups composed of different (independent) participants. Conditions: (1) the outcome variable is continuous; (2) data are approximately normally distributed; (3) variances are roughly equal between groups; (4) participants in each group are unrelated to those in the other group.',
        },
        {
          q: 'Write the formula for the independent-samples t-test and explain each component.',
          a: '\\[ t = \\dfrac{|\\bar{x}_A - \\bar{x}_B|}{\\sqrt{\\dfrac{s_A^2}{n_A} + \\dfrac{s_B^2}{n_B}}} \\]\n• \\( \\bar{x}_A - \\bar{x}_B \\) = difference between the two group means (the "signal")\n• \\( s_A^2, s_B^2 \\) = variances of groups A and B\n• \\( n_A, n_B \\) = sample sizes of groups A and B\n• The denominator = pooled standard error of the difference (the "noise")\nA larger t-value means the signal is large relative to the noise.',
        },
        {
          q: 'Group A (n = 15): mean = 52, SD = 8. Group B (n = 15): mean = 46, SD = 9. Calculate the t-statistic.',
          a: '\\[ t = \\dfrac{|52 - 46|}{\\sqrt{\\dfrac{64}{15} + \\dfrac{81}{15}}} = \\dfrac{6}{\\sqrt{4.27 + 5.40}} = \\dfrac{6}{\\sqrt{9.67}} = \\dfrac{6}{3.11} \\approx 1.93 \\]\ndf = 15 + 15 − 2 = 28. At α = 0.05, two-tailed, critical t ≈ 2.048. Since 1.93 < 2.048, do not reject H₀ — no significant difference.',
        },
      ],
    },
  },

  /* ── 5.4.2  Paired / Dependent Samples t-Test ───────────────────────── */
  'paired-t': {
    definitions: [
      {
        term: 'Paired (Dependent-Samples) t-Test',
        text: 'The paired t-test is used when two samples come from the same group or individual (e.g., pre-test and post-test measurements on the same participants, or matched pairs). It tests whether the mean of the paired differences (d) is significantly different from zero. The test accounts for the correlation between the two sets of measurements, making it more powerful than the independent-samples t-test for the same sample size.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 82. LUNEX University. Adapted from Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics (p. 46). Class Publishing.',
      },
    ],
    plainTerms: [
      'For each participant, compute the individual difference score: \\( d_i = x_{\\text{post},i} - x_{\\text{pre},i} \\). The paired t-test then asks: is the mean of these difference scores (\\( \\bar{d} \\)) significantly different from zero?',
      'The formula is: \\[ t = \\dfrac{\\bar{d}}{s_d / \\sqrt{n}} \\] where \\( \\bar{d} \\) is the mean of the differences, \\( s_d \\) is the standard deviation of the differences, and \\( n \\) is the number of pairs.',
      'The paired design is more powerful than the independent design because it eliminates between-person variability. The denominator reflects only how consistently each person changed, not how different people are from each other.',
      'Degrees of freedom: \\( df = n - 1 \\) (where n = number of pairs). Compare the calculated t to the critical t at α and df to make the decision.',
    ],
    clinicalExample: {
      intro: 'A physiotherapist measures active shoulder flexion (°) in 10 patients before and after a 4-week rotator cuff strengthening programme.',
      bullets: [
        'Pre (°): 112, 108, 120, 95, 130, 115, 102, 125, 118, 109. Post (°): 135, 122, 140, 115, 148, 130, 120, 142, 138, 128.',
        'Differences (d = Post − Pre): 23, 14, 20, 20, 18, 15, 18, 17, 20, 19. Mean difference (d̄) = 18.4°. SD of differences (s_d) = 2.7°.',
        't = 18.4 / (2.7 / √10) = 18.4 / 0.854 ≈ 21.5. df = 10 − 1 = 9. Critical t at α = 0.05, one-tailed ≈ 1.83.',
        'Since t = 21.5 >> 1.83, we strongly reject H₀. The programme produces a statistically significant improvement in shoulder flexion ROM (p < 0.001).',
      ],
    },
    diagramId: 'inf-paired-t',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Write the formula for the paired t-test and define each symbol.',
          a: '\\[ t = \\dfrac{\\bar{d}}{s_d / \\sqrt{n}} \\]\n• \\( \\bar{d} \\) = mean of the individual difference scores (Post − Pre for each participant)\n• \\( s_d \\) = standard deviation of the difference scores\n• \\( n \\) = number of pairs (participants)\n• \\( df = n - 1 \\)',
        },
        {
          q: 'Why is the paired t-test more powerful than the independent-samples t-test for the same n?',
          a: 'The paired t-test eliminates between-person variability by using each participant as their own control. The error term reflects only within-person variability (how consistently each person changed), which is typically much smaller than between-person variability. This smaller error term makes the t-statistic larger for the same mean difference, increasing power and the ability to detect a real effect with fewer participants.',
        },
        {
          q: 'Differences (post − pre) for 5 patients: 8, 6, 10, 7, 9. Calculate the paired t-statistic.',
          a: 'Mean difference: \\( \\bar{d} = (8+6+10+7+9)/5 = 40/5 = 8.0 \\)\nSD of differences: deviations from mean: 0, −2, 2, −1, 1. Squared: 0, 4, 4, 1, 1. Variance = 10/4 = 2.5. \\( s_d = \\sqrt{2.5} \\approx 1.58 \\).\n\\[ t = \\dfrac{8.0}{1.58/\\sqrt{5}} = \\dfrac{8.0}{0.707} \\approx 11.3 \\]\ndf = 5 − 1 = 4. Critical t at α = 0.05, two-tailed ≈ 2.78. Since 11.3 >> 2.78, reject H₀.',
        },
      ],
    },
  },

  /* ── 5.4.3  t-Value: Formula & Interpretation ───────────────────────── */
  't-value': {
    definitions: [
      {
        term: 't-Value (Test Statistic)',
        text: 'The t-value is the ratio of the signal (the observed difference between means) to the noise (the variability within groups). A larger absolute t-value means the signal is stronger relative to the noise, providing more evidence against the null hypothesis. The t-value follows a Student\'s t-distribution with a certain number of degrees of freedom.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slides 80–81. LUNEX University.',
      },
    ],
    plainTerms: [
      'Conceptually: \\[ t = \\dfrac{\\text{Signal}}{\\text{Noise}} = \\dfrac{\\text{Difference between group means}}{\\text{Variability within groups}} \\] A large t means the groups are far apart relative to how much individual scores vary — strong evidence that the groups truly differ.',
      'The t-value itself is meaningless without a reference. You compare it to the critical t-value (t_critical) from the t-table at your chosen α and df. If |t_calculated| > t_critical → reject H₀. If |t_calculated| ≤ t_critical → do not reject H₀.',
      'Modern software (SPSS, R, Excel) calculates the exact p-value from the t-distribution, so you compare p to α directly without needing the t-table. The t-table approach is still taught conceptually to understand what the test is doing.',
      'The t-distribution is bell-shaped like the normal distribution but with heavier tails, especially for small sample sizes. As df increases (larger samples), the t-distribution approaches the normal distribution. This is why the critical t-value decreases as df increases.',
    ],
    clinicalExample: {
      intro: 'Understanding what the t-value tells you clinically.',
      bullets: [
        't = 0.5: Very small relative to variability — the group means barely differ from each other in a noisy environment. Likely not significant.',
        't = 2.1: Moderate — in a study with df = 30, this exceeds the critical t of 2.04 (α = 0.05, two-tailed), just reaching significance.',
        't = 4.8: Very large — the difference between groups is nearly 5 times the noise level. Strongly significant; very unlikely due to chance.',
        'Even a very large t doesn\'t mean the difference is clinically important — it could reflect a trivially small difference in a very large, homogeneous sample.',
      ],
    },
    diagramId: 'inf-t-signal-noise',
    quiz: {
      intro: null,
      items: [
        {
          q: 'Explain the t-value conceptually as a signal-to-noise ratio.',
          a: 'The t-value = (difference between group means) ÷ (variability within groups). The "signal" is how far apart the groups are. The "noise" is how much individual scores vary within each group. A large t means the groups are clearly separated relative to how noisy the data are — strong evidence that the groups come from different populations. A small t means the group separation is small compared to within-group variability — hard to distinguish from random chance.',
        },
        {
          q: 'What is the t-distribution and how does it differ from the normal distribution?',
          a: 'The t-distribution is a symmetric, bell-shaped distribution similar to the normal distribution but with heavier (fatter) tails, particularly for small df. This reflects the additional uncertainty introduced by estimating the population variance from a small sample. As df increases (larger samples), the t-distribution approaches the standard normal distribution. For df > 120, they are essentially identical.',
        },
      ],
    },
  },

  /* ── 5.4.4  Degrees of Freedom & Critical Values ────────────────────── */
  'df-critical': {
    definitions: [
      {
        term: 'Degrees of Freedom (df)',
        text: 'Degrees of freedom (df) represent the number of independent pieces of information available to estimate a statistic. In t-tests: df = N − 1 for a one-sample or paired t-test (N = number of pairs or participants); df = N_A + N_B − 2 for an independent-samples t-test. The significance level is usually 5% (0.05). As df increases, the critical t-value decreases.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 84. LUNEX University.',
      },
    ],
    plainTerms: [
      'Degrees of freedom (df) are needed to look up the critical t-value from a t-table. You can think of df as the "effective sample size" after accounting for parameters estimated from the data. Every time you estimate a parameter (like a mean), you "spend" one degree of freedom.',
      'Critical t-value rules: with α = 0.05, two-tailed:\n• df = 10: t_critical ≈ 2.228\n• df = 20: t_critical ≈ 2.086\n• df = 30: t_critical ≈ 2.042\n• df = 60: t_critical ≈ 2.000\n• df = ∞: t_critical = 1.96 (equals the z-score for 95%)\nLarger samples give smaller critical values, making it easier to reach significance.',
      'Decision rule using critical values: If |t_calculated| > t_critical → reject H₀. If |t_calculated| ≤ t_critical → do not reject H₀.',
      'In practice, modern software gives you the exact p-value, making the table lookup less necessary. However, understanding df helps you interpret output from SPSS, R, or Excel and identify why a result is or is not significant.',
    ],
    clinicalExample: {
      intro: 'A physiotherapy student runs an independent t-test in SPSS comparing shoulder strength between two groups (n = 12 per group). SPSS output shows: t = 2.19, df = 22, p = 0.039.',
      bullets: [
        'df = 12 + 12 − 2 = 22. This matches the SPSS output.',
        'At α = 0.05, two-tailed, with df = 22: t_critical ≈ 2.074. Since t_calculated (2.19) > t_critical (2.074) → reject H₀.',
        'The p-value (0.039) confirms this: p < 0.05 → reject H₀.',
        'If the student had n = 6 per group instead: df = 10, t_critical ≈ 2.228. The same t = 2.19 would NOT exceed t_critical → fail to reject H₀. Same effect size, but insufficient power due to small sample!',
      ],
    },
    diagramId: 'inf-critical-t',
    quiz: {
      intro: null,
      items: [
        {
          q: 'How do you calculate degrees of freedom for (a) a paired t-test with 18 participants and (b) an independent t-test with 12 in each group?',
          a: '(a) Paired t-test: df = n − 1 = 18 − 1 = 17.\n(b) Independent t-test: df = n_A + n_B − 2 = 12 + 12 − 2 = 22.',
        },
        {
          q: 'Why does a larger sample size make it easier to achieve statistical significance, all else equal?',
          a: 'Larger sample size → larger df → smaller critical t-value. A smaller critical t-value means you need a smaller observed t to reject H₀. Additionally, larger n reduces the standard error (the denominator of t), directly increasing the t-statistic for the same mean difference. Both effects work together: large samples detect real effects more reliably.',
        },
        {
          q: 'A paired t-test gives t = 2.45, df = 14, α = 0.05. Is the result significant?',
          a: 'At α = 0.05, two-tailed, df = 14: t_critical ≈ 2.145. Since |t| = 2.45 > t_critical = 2.145, we reject H₀. The result is statistically significant (p < 0.05). The observed difference is unlikely to be due to chance.',
        },
      ],
    },
  },

  /* ── 5.5  Chi-Square Test ────────────────────────────────────────────── */
  'chi-square': {
    definitions: [
      {
        term: "Pearson's Chi-Square Test (χ²)",
        text: 'The Chi-Square test (χ²) is used to determine if there is a significant association between two categorical variables. It compares the frequencies actually observed in each category (O) with the frequencies that would be expected if there were no association between the variables (E). A large χ² value indicates that observed frequencies differ substantially from expected frequencies, providing evidence against H₀.',
        citation: 'Baptista, R. (2026). Research & Evidence in Physiotherapy II, Slide 71. LUNEX University. Adapted from Cook, A., Netuveli, G. & Sheikh, A. (2004). Basic Skills in Statistics (pp. 47–49). Class Publishing.',
      },
    ],
    plainTerms: [
      'Use the Chi-Square test when BOTH variables are categorical (nominal or ordinal). For example: "Is gender (male/female) associated with recovery status (recovered/not recovered) after ACL reconstruction?" — both variables have distinct categories, not continuous measurements.',
      'The formula is: \\[ \\chi^2 = \\sum_{i=1}^{m} \\dfrac{(O_i - E_i)^2}{E_i} \\] where \\( O_i \\) = observed frequency in cell i, \\( E_i \\) = expected frequency in cell i (calculated as: row total × column total ÷ grand total), and the sum is taken over all cells in the table.',
      'Degrees of freedom for a contingency table: \\( df = (r - 1)(c - 1) \\) where r = number of rows and c = number of columns. For a 2×2 table, df = (2−1)(2−1) = 1.',
      'Assumptions: all expected frequencies should be ≥ 5. If cells have expected frequencies < 5, use Fisher\'s Exact Test instead. The Chi-Square test tests for association, not agreement — do not use it to test reliability between raters (use Cohen\'s Kappa for that).',
    ],
    clinicalExample: {
      intro: 'A researcher investigates whether patients who completed all scheduled physiotherapy sessions (adherent/non-adherent) have different rates of returning to sport after ACL reconstruction (returned/not returned).',
      bullets: [
        'Observed frequencies: Adherent+Returned = 35, Adherent+Not returned = 5 | Non-adherent+Returned = 15, Non-adherent+Not returned = 20. Grand total = 75.',
        'Expected frequency for Adherent+Returned: (40 × 50)/75 = 26.7. For Adherent+Not returned: (40 × 25)/75 = 13.3. For Non-adherent+Returned: (35 × 50)/75 = 23.3. For Non-adherent+Not returned: (35 × 25)/75 = 11.7.',
        'χ² = (35−26.7)²/26.7 + (5−13.3)²/13.3 + (15−23.3)²/23.3 + (20−11.7)²/11.7 ≈ 2.58 + 5.19 + 2.96 + 5.90 ≈ 16.6',
        'df = (2−1)(2−1) = 1. Critical χ² at α = 0.05, df = 1 is 3.84. Since 16.6 >> 3.84, we reject H₀ and conclude that there is a significant association between treatment adherence and return-to-sport status (p < 0.001).',
      ],
    },
    diagramId: 'inf-chi-square',
    quiz: {
      intro: null,
      items: [
        {
          q: 'When should you use a Chi-Square test instead of a t-test?',
          a: 'Use a Chi-Square test when BOTH variables are categorical (nominal or ordinal) — you are comparing frequencies or proportions across categories, not means. Use a t-test when the outcome variable is continuous (interval or ratio scale) and you are comparing means between groups.',
        },
        {
          q: 'Write the formula for the Chi-Square statistic and explain each term.',
          a: '\\[ \\chi^2 = \\sum \\dfrac{(O_i - E_i)^2}{E_i} \\]\n• \\( O_i \\) = observed frequency in cell i (actual count from data)\n• \\( E_i \\) = expected frequency in cell i = (row total × column total) ÷ grand total\n• The sum (Σ) is taken over all cells in the contingency table\n• Larger χ² = larger discrepancy between observed and expected = stronger evidence against H₀',
        },
        {
          q: 'In a 2×2 Chi-Square test, what is the expected frequency formula and the degrees of freedom?',
          a: 'Expected frequency for each cell: \\( E = \\dfrac{\\text{Row total} \\times \\text{Column total}}{\\text{Grand total}} \\)\nDegrees of freedom: \\( df = (r-1)(c-1) = (2-1)(2-1) = 1 \\) for a 2×2 table.\nAt α = 0.05, df = 1: critical χ² = 3.84. At α = 0.01, df = 1: critical χ² = 6.63.',
        },
        {
          q: 'What assumption must be met for the Chi-Square test, and what alternative test is used when it is violated?',
          a: 'All expected frequencies must be ≥ 5. If any expected cell frequency is less than 5, the Chi-Square approximation is unreliable. In this case, use Fisher\'s Exact Test, which calculates exact probabilities rather than using the chi-square approximation. Also, the Chi-Square test requires independent observations — the same participant cannot contribute to more than one cell.',
        },
      ],
    },
  },

};
