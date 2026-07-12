export interface FAQItem {
  question: string;
  answer: string;
}

export interface TreatmentInfo {
  slug: string;
  title: string;
  category: "Consultation" | "Diagnostics" | "Therapeutics" | "Rehabilitation";
  shortDesc: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  diagnostics: string[];
  treatments: string[];
  faqs: FAQItem[];
  relatedSlugs: string[];
}

export const treatmentsData: TreatmentInfo[] = [
  {
    slug: "migraine-headaches",
    title: "Migraine & Headaches",
    category: "Consultation",
    shortDesc: "Comprehensive diagnostics and individualized management plans for chronic migraines, tension headaches, and cluster pain.",
    overview: "Headache disorders are among the most common conditions of the nervous system, characterized by recurrent, severe, or throbbing pain. Our approach combines accurate diagnostic classification with personalized pharmacological and non-pharmacological interventions to reduce attack frequency and severity.",
    symptoms: [
      "Throbbing or pulsating pain, often on one side of the head",
      "Sensitivity to light, sound, and sometimes odors",
      "Nausea, vomiting, or abdominal discomfort",
      "Visual disturbances or aura (flashing lights, zig-zag lines, blind spots)",
      "Fatigue, mood changes, or neck stiffness before or after attacks"
    ],
    causes: [
      "Genetics and family history of headaches or migraines",
      "Hormonal fluctuations (especially in women during menstrual cycles)",
      "High stress, anxiety, or emotional fatigue",
      "Disrupted sleep patterns, insomnia, or sleeping too much",
      "Dietary triggers including caffeine, aged cheeses, alcohol, and artificial sweeteners",
      "Environmental changes (weather changes, bright lights, loud sounds, or strong smells)"
    ],
    diagnostics: [
      "Detailed clinical neurological evaluation & headache diaries",
      "High-resolution brain MRI to rule out secondary causes",
      "CT Angiography if vascular complications are suspected"
    ],
    treatments: [
      "Acute rescue medications (triptans, anti-emetics, and modern pain relievers)",
      "Preventive therapies (beta-blockers, anti-seizure medications, and CGRP inhibitors)",
      "Botox injections for chronic migraine prevention",
      "Lifestyle and trigger identification coaching"
    ],
    faqs: [
      {
        question: "What is the difference between a headache and a migraine?",
        answer: "A general headache causes pain in the head, face, or upper neck. A migraine is a complex neurological disorder characterized by intense, throbbing pain, usually on one side of the head, and is often accompanied by nausea, vomiting, and sensitivity to light and sound."
      },
      {
        question: "How often can I take migraine rescue medications?",
        answer: "Rescue medications (like triptans or pain relievers) should be limited to no more than 2 to 3 days per week. Overusing them can lead to medication-overuse headaches (rebound headaches)."
      }
    ],
    relatedSlugs: ["sleep-disorders", "neuropathy"]
  },
  {
    slug: "epilepsy-seizures",
    title: "Epilepsy & Seizures",
    category: "Diagnostics",
    shortDesc: "Advanced electrophysiology and medical pathways to localize, manage, and prevent abnormal brain wave activity.",
    overview: "Epilepsy is a neurological disorder characterized by recurrent, unprovoked seizures. We provide comprehensive evaluations, state-of-the-art EEG tracking, and precision pharmacology to achieve seizure freedom or minimal impact on daily life.",
    symptoms: [
      "Temporary confusion, staring spells, or brief loss of awareness",
      "Uncontrollable jerking movements of the arms and legs",
      "Loss of consciousness, fainting, or sudden falls",
      "Cognitive or emotional symptoms such as fear, anxiety, or deja vu",
      "Post-ictal state including fatigue, headache, and temporary memory gaps"
    ],
    causes: [
      "Genetic factors and family history of seizure disorders",
      "Head trauma or traumatic brain injury from accidents",
      "Brain conditions such as tumors, strokes, or vascular malformations",
      "Infections of the brain (meningitis, encephalitis, neurocysticercosis)",
      "Prenatal injury, oxygen deprivation, or developmental brain disorders"
    ],
    diagnostics: [
      "Routine, sleep-deprived, and long-term Video EEG monitoring",
      "Epilepsy-protocol high-resolution Brain MRI (3 Tesla)",
      "Metabolic and genetic profiling"
    ],
    treatments: [
      "Antiepileptic Drug (AED) management and optimization",
      "Dietary therapies (Keto/modified Atkins protocols)",
      "Referral for vagus nerve stimulation (VNS) or resective surgery"
    ],
    faqs: [
      {
        question: "Can epilepsy be cured completely?",
        answer: "While there is no permanent cure, epilepsy is highly manageable. Up to 70% of patients can achieve complete seizure freedom using modern antiepileptic medications."
      },
      {
        question: "What should I do if someone is having a seizure?",
        answer: "Keep them safe by clearing the area, place something soft under their head, turn them gently onto one side to keep their airway open, and do not place anything inside their mouth. Seek emergency help if the seizure lasts over 5 minutes."
      }
    ],
    relatedSlugs: ["stroke", "brain-tumors"]
  },
  {
    slug: "stroke",
    title: "Stroke Response & Care",
    category: "Therapeutics",
    shortDesc: "Rapid diagnosis, acute intervention pathways, and multi-disciplinary neurological recovery planning.",
    overview: "A stroke occurs when the blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen. Prompt medical action is critical. We focus on prevention, acute triage coordination, post-stroke management, and recovery.",
    symptoms: [
      "Sudden numbness or weakness in the face, arm, or leg (especially on one side)",
      "Sudden confusion, difficulty speaking or understanding speech",
      "Sudden trouble seeing in one or both eyes",
      "Sudden trouble walking, loss of balance, or dizziness",
      "Sudden severe headache with no known cause"
    ],
    causes: [
      "Chronic high blood pressure (hypertension)",
      "Cardiovascular diseases (like atrial fibrillation)",
      "High cholesterol and atherosclerosis (plaque buildup in arteries)",
      "Diabetes mellitus",
      "Smoking, tobacco use, and high alcohol consumption",
      "Obesity and lack of physical exercise"
    ],
    diagnostics: [
      "Emergency non-contrast CT brain & perfusion scans",
      "Brain MRI / MR Angiography of carotid and vertebral arteries",
      "Echocardiogram and Holter monitoring for cardioembolic sources"
    ],
    treatments: [
      "Thrombolytic therapy coordination (tPA) for acute ischemic stroke",
      "Secondary stroke prevention plans (antiplatelets, statins, antihypertensives)",
      "Post-stroke physical, occupational, and speech rehabilitation",
      "Carotid artery disease interventions coordination"
    ],
    faqs: [
      {
        question: "What is the FAST acronym for stroke symptoms?",
        answer: "FAST stands for: Face drooping, Arm weakness, Speech difficulty, and Time to call emergency services. Acting quickly is crucial for minimizing brain damage."
      },
      {
        question: "Can brain cells recover after a stroke?",
        answer: "Yes. While some brain cells die during a stroke, surrounding cells are only damaged and can recover. Over time, the brain can rewire itself through rehabilitation and neuroplasticity."
      }
    ],
    relatedSlugs: ["parkinsons-disease", "movement-disorders"]
  },
  {
    slug: "parkinsons-disease",
    title: "Parkinson's Disease",
    category: "Therapeutics",
    shortDesc: "Movement-disorder clinics focused on tremor control, motor symptoms, and deep brain stimulation pathways.",
    overview: "Parkinson's disease is a progressive nervous system disorder that affects movement. Symptoms start gradually, sometimes starting with a barely noticeable tremor in just one hand. We offer multi-faceted medical and therapy programs to maintain quality of life.",
    symptoms: [
      "Tremor in hands, fingers, chin, or jaw at rest",
      "Slowed movement (bradykinesia) making simple tasks difficult",
      "Rigid muscles, causing pain and limiting range of motion",
      "Impaired posture, poor balance, and frequent falls",
      "Loss of automatic movements like blinking, smiling, or swinging arms"
    ],
    causes: [
      "Genetic mutations and specific susceptibility genes",
      "Environmental exposure to pesticides, herbicides, or heavy metals",
      "Presence of Lewy bodies (clumps of alpha-synuclein protein) in brain cells",
      "Degeneration of dopamine-producing neurons in the substantia nigra region of the brain"
    ],
    diagnostics: [
      "Clinical motor examination and response to levodopa test",
      "High-resolution brain MRI to rule out atypical parkinsonism",
      "DaTscan / nuclear imaging evaluation"
    ],
    treatments: [
      "Pharmacological agents (Levodopa/Carbidopa, dopamine agonists, MAO-B inhibitors)",
      "Deep Brain Stimulation (DBS) evaluation and monitoring",
      "Targeted physical therapy (LSVT LOUD/BIG programs)",
      "Nutritional and speech therapy support"
    ],
    faqs: [
      {
        question: "Is Parkinson's disease hereditary?",
        answer: "Most cases of Parkinson's are sporadic and not directly inherited. However, having a first-degree relative with the condition slightly increases your risk."
      },
      {
        question: "What are the first warning signs of Parkinson's?",
        answer: "Common early signs include a slight tremor in one hand, slow movement (bradykinesia), stiff muscles, change in speech, and a stooped posture or loss of automatic balance."
      }
    ],
    relatedSlugs: ["movement-disorders", "alzheimers-dementia"]
  },
  {
    slug: "alzheimers-dementia",
    title: "Alzheimer's & Dementia",
    category: "Consultation",
    shortDesc: "Compassionate evaluation, cognitive screening, and memory support protocols for aging brains.",
    overview: "Dementia describes a group of symptoms affecting memory, thinking, and social abilities severely enough to interfere with daily functioning. We emphasize early diagnosis, symptomatic treatments, cognitive exercises, and supportive caregiver counseling.",
    symptoms: [
      "Memory loss that disrupts daily life (asking questions repeatedly)",
      "Challenges in planning, solving problems, or working with numbers",
      "Difficulty completing familiar tasks at home, work, or leisure",
      "Confusion with time, dates, seasons, or places",
      "Changes in mood, personality, or social withdrawal"
    ],
    causes: [
      "Advancing age (the primary risk factor)",
      "Family history and genetic factors (such as the APOE-e4 gene)",
      "Accumulation of beta-amyloid plaques and neurofibrillary tau tangles in the brain",
      "Cardiovascular risk factors like high blood pressure, high cholesterol, and diabetes"
    ],
    diagnostics: [
      "Standardized cognitive and neuropsychological testing (MMSE, MoCA)",
      "Brain MRI with volumetric analysis of hippocampus",
      "Blood tests to rule out thyroid dysfunction or vitamin B12 deficiency"
    ],
    treatments: [
      "Cholinesterase inhibitors (donepezil, rivastigmine)",
      "NMDA receptor antagonists (memantine)",
      "Cognitive rehabilitation and memory stimulation therapies",
      "Caregiver support, education, and safety planning"
    ],
    faqs: [
      {
        question: "Is Alzheimer's just normal aging memory loss?",
        answer: "No. While mild forgetfulness is normal with age, Alzheimer's is a progressive neurodegenerative disease that destroys brain cells, severely impacting memory, thinking, and daily functions."
      },
      {
        question: "Are there treatments to stop Alzheimer's?",
        answer: "There is no cure yet, but treatments like cholinesterase inhibitors, NMDA receptor antagonists, and cognitive therapies can help manage symptoms and temporarily slow cognitive decline."
      }
    ],
    relatedSlugs: ["parkinsons-disease", "sleep-disorders"]
  },
  {
    slug: "multiple-sclerosis",
    title: "Multiple Sclerosis",
    category: "Therapeutics",
    shortDesc: "Immunomodulatory treatments and rehabilitation programs for autoimmune central nervous system conditions.",
    overview: "Multiple Sclerosis (MS) is an autoimmune disease where the immune system attacks myelin, the protective sheath covering nerve fibers. We provide disease-modifying therapies to slow progression and manage acute flares.",
    symptoms: [
      "Numbness or weakness in limbs, typically on one side of the body",
      "Electric-shock sensations with certain neck movements (Lhermitte's sign)",
      "Vision problems, including partial/complete loss of vision or double vision",
      "Tingling, chronic nerve pain, or crawling sensations in body parts",
      "Fatigue, dizziness, unsteady gait, and bladder or bowel dysfunction"
    ],
    causes: [
      "Abnormal autoimmune response where immune cells attack the myelin sheath",
      "Genetic predisposition (inherited immune traits)",
      "Environmental factors like low vitamin D levels, lack of sunlight, and smoking",
      "Prior viral infections, particularly the Epstein-Barr virus (EBV)"
    ],
    diagnostics: [
      "Brain and Spinal Cord MRI with and without contrast",
      "Lumbar puncture for cerebrospinal fluid analysis (oligoclonal bands)",
      "Visual Evoked Potentials (VEP)"
    ],
    treatments: [
      "Intravenous corticosteroids for acute relapse management",
      "Disease-modifying therapies (oral, injectable, or infusion immunomodulators)",
      "Symptom management (muscle relaxants, nerve pain relievers)",
      "Neurological physical therapy to improve strength and balance"
    ],
    faqs: [
      {
        question: "What are the different types of Multiple Sclerosis?",
        answer: "The main types are Relapsing-Remitting MS (RRMS), which features periodic flare-ups and recoveries; Primary Progressive MS (PPMS), showing steady worsening; and Secondary Progressive MS (SPMS)."
      },
      {
        question: "Why do my MS symptoms worsen in the heat?",
        answer: "This is known as Uhthoff's phenomenon. Higher body temperature temporarily slows down nerve conduction along demyelinated nerve fibers, but does not cause permanent damage."
      }
    ],
    relatedSlugs: ["neuropathy", "spine-disorders"]
  },
  {
    slug: "sleep-disorders",
    title: "Sleep Disorders",
    category: "Diagnostics",
    shortDesc: "Clinical review and diagnostic pathways for insomnia, sleep apnea, narcolepsy, and restless legs.",
    overview: "Sleep disorders affect the quality, timing, and amount of sleep, leading to daytime distress and impairment. Our neurologists evaluate central sleep apnea, narcolepsy, parasomnias, and restless legs syndrome to optimize brain rest.",
    symptoms: [
      "Excessive daytime sleepiness, fatigue, or sudden sleep attacks",
      "Difficulty falling asleep or waking up frequently during the night",
      "Loud snoring, choking, or gasping for air during sleep",
      "Unpleasant sensations in legs with an irresistible urge to move them",
      "Unusual behaviors during sleep (sleepwalking, acting out dreams)"
    ],
    causes: [
      "Chronic stress, anxiety, or depression",
      "Poor sleep hygiene, blue light exposure, and shift work schedules",
      "Obstructive airway tissues (in obstructive sleep apnea)",
      "Imbalances in brain neurotransmitters regulating wakefulness (in narcolepsy)",
      "Iron deficiency or nerve signaling dysfunction (in restless legs syndrome)"
    ],
    diagnostics: [
      "Comprehensive sleep history and sleep logs",
      "Polysomnography (overnight sleep study referral)",
      "Multiple Sleep Latency Test (MSLT) for daytime sleepiness"
    ],
    treatments: [
      "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
      "CPAP therapy optimization",
      "Pharmacological therapies for restless legs and wakefulness disorders",
      "Sleep hygiene and circadian rhythm alignment coaching"
    ],
    faqs: [
      {
        question: "How much sleep does an adult actually need?",
        answer: "Most adults require between 7 to 9 hours of quality sleep per night for optimal cognitive function, memory consolidation, and cellular repair."
      },
      {
        question: "What is the treatment for sleep apnea?",
        answer: "The primary and most effective treatment is Continuous Positive Airway Pressure (CPAP) therapy. Lifestyle changes, oral appliances, or surgery may also be recommended."
      }
    ],
    relatedSlugs: ["migraine-headaches", "alzheimers-dementia"]
  },
  {
    slug: "neuropathy",
    title: "Neuropathy & Nerve Pain",
    category: "Diagnostics",
    shortDesc: "Electromyography studies and targeted therapeutic programs for burning, tingling, and numbness.",
    overview: "Peripheral neuropathy results from damage to the nerves outside the brain and spinal cord, causing weakness, numbness, and burning pain, particularly in the hands and feet. We pinpoint the underlying cause and deliver effective neural pain relief.",
    symptoms: [
      "Gradual onset of numbness, prickling, or tingling in feet or hands",
      "Sharp, jabbing, throbbing, or burning pain that may worsen at night",
      "Extreme sensitivity to touch (allodynia)",
      "Muscle weakness, loss of coordination, or frequent stumbling",
      "Feeling as if wearing tight, restrictive gloves or socks"
    ],
    causes: [
      "Uncontrolled diabetes mellitus (diabetic neuropathy)",
      "Vitamin deficiencies (specifically B1, B6, B12, and E)",
      "Autoimmune diseases like Guillain-Barré syndrome or lupus",
      "Chronic alcohol abuse and nutritional deficiencies",
      "Exposure to toxic chemicals or chemotherapy drugs",
      "Physical trauma or direct pressure on peripheral nerves"
    ],
    diagnostics: [
      "Nerve Conduction Studies (NCS) and Electromyography (EMG)",
      "Comprehensive lab assays for diabetes, vitamin levels, autoimmune markers",
      "Autonomic reflex evaluation"
    ],
    treatments: [
      "Neuropathic pain agents (gabapentinoids, SNRIs, tricyclic antidepressants)",
      "Management of underlying triggers (diabetes control, vitamin supplementation)",
      "Topical patches (lidocaine, capsaicin) and physical therapy",
      "Alternative pathways including nerve stimulation"
    ],
    faqs: [
      {
        question: "Can neuropathy be cured or reversed?",
        answer: "If the underlying cause is addressed early (e.g., tight blood sugar control or resolving vitamin deficiencies), peripheral nerves can regenerate and symptoms can resolve."
      },
      {
        question: "What are the warning signs of diabetic neuropathy?",
        answer: "Signs include a gradual numbness, tingling, burning, or sharp shooting pain starting in your toes and feet, which may slowly spread upward."
      }
    ],
    relatedSlugs: ["spine-disorders", "multiple-sclerosis"]
  },
  {
    slug: "vertigo",
    title: "Vertigo & Balance Disorders",
    category: "Consultation",
    shortDesc: "Vestibular assessments and therapy to resolve dizziness, motion sensitivity, and unsteadiness.",
    overview: "Vertigo is a sensation of spinning or movement when you are stationary. It is often caused by inner ear problems or central neurological issues. We offer diagnosis and specific canalith repositioning maneuvers for rapid relief.",
    symptoms: [
      "Sensation of spinning, tilting, swaying, or unbalanced motion",
      "Nausea, vomiting, or cold sweats during head movements",
      "Difficulty walking straight, unsteadiness, or loss of balance",
      "Nystagmus (abnormal, rapid involuntary eye movements)",
      "Tinnitus (ringing in the ear) or a sensation of fullness in the ear"
    ],
    causes: [
      "Benign Paroxysmal Positional Vertigo (BPPV) from loose inner ear crystals",
      "Meniere's disease (abnormal fluid buildup in the inner ear)",
      "Vestibular neuritis (inflammation of the vestibular nerve, often viral)",
      "Vestibular migraine (neurological headache causing dizziness)",
      "Central causes like stroke, multiple sclerosis, or brainstem lesions"
    ],
    diagnostics: [
      "Detailed clinical vestibular examination (HINTS exam)",
      "Dix-Hallpike maneuver for BPPV diagnosis",
      "Brain MRI (IAC protocol) if central origin is suspected"
    ],
    treatments: [
      "Canalith repositioning maneuvers (Epley, Semont maneuvers)",
      "Vestibular rehabilitation therapy (VRT) to retrain the brain",
      "Vestibular suppressants for short-term symptom management",
      "Dietary adjustments (low sodium) for Meniere's disease"
    ],
    faqs: [
      {
        question: "What is BPPV and how is it treated?",
        answer: "BPPV occurs when tiny calcium crystals in your inner ear become dislodged. It is highly treatable through specific physical movements like the Epley maneuver to return crystals to their proper place."
      },
      {
        question: "When should I worry about vertigo?",
        answer: "Seek immediate medical attention if vertigo is accompanied by sudden double vision, difficulty speaking, numbness, arm/leg weakness, or loss of consciousness."
      }
    ],
    relatedSlugs: ["migraine-headaches", "movement-disorders"]
  },
  {
    slug: "spine-disorders",
    title: "Spine Disorders & Back Pain",
    category: "Rehabilitation",
    shortDesc: "Non-surgical spine care, radiculopathy treatment, and posture correction therapies.",
    overview: "Spine disorders encompass conditions affecting the vertebral column and spinal cord, including herniated discs, spinal stenosis, and sciatica. We coordinate conservative, non-surgical treatment programs to alleviate neural compression and pain.",
    symptoms: [
      "Sharp, shooting pain radiating down the arm or leg (sciatica)",
      "Numbness, tingling, or muscle weakness in the hand, arm, foot, or leg",
      "Chronic neck or lower back pain that worsens with movement or sitting",
      "Difficulty bending, lifting, twisting, or walking long distances",
      "Loss of fine motor skills in hands due to cervical nerve compression"
    ],
    causes: [
      "Herniation, bulging, or rupture of spinal discs",
      "Degenerative changes in spinal joints and discs (osteoarthrosis)",
      "Narrowing of the spinal canal (spinal stenosis)",
      "Chronic poor posture, sedentary lifestyle, and improper lifting techniques",
      "Acute spinal trauma, injuries, or muscle strains"
    ],
    diagnostics: [
      "Spine MRI (Cervical, Thoracic, Lumbar) with contrast when necessary",
      "X-ray imaging to check alignment, vertebrae health, and bone spurs",
      "Electromyography (EMG) to identify exact nerve root compression"
    ],
    treatments: [
      "Anti-inflammatory medications, muscle relaxants, and nerve pain agents",
      "Targeted spine physical therapy, core strengthening, and traction",
      "Epidural steroid injections or nerve block coordination",
      "Postural coaching and ergonomic adjustments"
    ],
    faqs: [
      {
        question: "What is the difference between a bulging and herniated disc?",
        answer: "A bulging disc protrudes outward but its outer layer remains intact. A herniated disc occurs when the soft inner gel leaks through a tear in the tough outer layer, causing direct nerve irritation."
      },
      {
        question: "Is surgery necessary for most spine disorders?",
        answer: "No. The vast majority (over 90%) of spinal disc issues and back pain resolve with non-surgical conservative treatments like physiotherapy, spinal injections, and medication."
      }
    ],
    relatedSlugs: ["neuropathy", "multiple-sclerosis"]
  },
  {
    slug: "brain-tumors",
    title: "Brain Tumor Support & Care",
    category: "Consultation",
    shortDesc: "Neurological evaluations, post-surgical support, and coordinated neuro-oncology care pathways.",
    overview: "Brain tumors require meticulous diagnostic assessment and multi-specialty coordination. We provide clinical staging consultation, neurological symptom management including seizure control and edema reduction, and post-treatment neurological support.",
    symptoms: [
      "New or changing pattern of headaches, often worse in the morning",
      "Gradual loss of sensation or movement in an arm or leg",
      "Difficulty speaking, understanding, or changes in personality/behavior",
      "New onset of seizures in a person without a history of epilepsy",
      "Hearing loss, double vision, or balance problems"
    ],
    causes: [
      "Genetic alterations and mutations within normal brain cells",
      "Exposure to high doses of ionizing radiation",
      "Rare hereditary syndromes (e.g., neurofibromatosis, Li-Fraumeni syndrome)"
    ],
    diagnostics: [
      "High-resolution 3D Brain MRI with contrast and spectroscopy",
      "CT Scan of brain and body for staging",
      "Lumbar puncture for CSF cytology in selected cases"
    ],
    treatments: [
      "Symptom relief medications (dexamethasone for brain swelling)",
      "Seizure prophylaxis with antiepileptic drugs",
      "Coordinated referral to leading neurosurgeons and radiation oncologists",
      "Cognitive rehabilitation and physical support following tumor resection"
    ],
    faqs: [
      {
        question: "What is the primary role of a neurologist in brain tumor care?",
        answer: "Neurologists manage secondary neurological symptoms, such as controlling seizures with antiepileptic medications, reducing brain swelling, and coordinating multidisciplinary neuro-oncology plans."
      },
      {
        question: "Are all brain tumors cancerous?",
        answer: "No. Brain tumors can be benign (non-cancerous and slow-growing) or malignant (cancerous, aggressive, and invasive). However, both types require careful management based on their location."
      }
    ],
    relatedSlugs: ["epilepsy-seizures", "stroke"]
  },
  {
    slug: "movement-disorders",
    title: "Movement Disorders",
    category: "Therapeutics",
    shortDesc: "Specialized assessment for essential tremor, dystonia, Huntington's disease, and restless limb syndromes.",
    overview: "Movement disorders include conditions that cause involuntary or abnormal movements. We specialize in diagnosing tremors, dystonia, and spasticity, providing therapeutic options including Botox injections and Deep Brain Stimulation pathways.",
    symptoms: [
      "Essential tremor (rhythmic shaking of hands, head, or voice during activity)",
      "Involuntary, sustained muscle contractions causing twisting/repetitive movements",
      "Sudden, involuntary jerking or twitching movements (myoclonus, chorea)",
      "Stiffness, lack of coordination, or unsteady/rigid gait",
      "Muscle spasticity following neurological injuries or stroke"
    ],
    causes: [
      "Neurodegenerative changes affecting the basal ganglia in the brain",
      "Side effects of certain medications (such as antipsychotics)",
      "Genetic mutations and inheritance patterns",
      "Brain injuries, strokes, or neuro-infections causing muscle spasticity"
    ],
    diagnostics: [
      "Detailed clinical movement assessments and genetic screening",
      "Functional and metabolic brain imaging",
      "Electromyographical verification of muscle activation patterns"
    ],
    treatments: [
      "Targeted oral medications (anticholinergics, beta-blockers, muscle relaxants)",
      "Botulinum Toxin (Botox) injections for dystonia and spasticity",
      "Deep Brain Stimulation (DBS) pathways",
      "Physical and occupational therapy for adaptive mobility"
    ],
    faqs: [
      {
        question: "What are the treatment options for severe muscle spasms or dystonia?",
        answer: "Options include oral muscle relaxants, localized Botulinum Toxin (Botox) injections to temporarily relax specific muscles, and Deep Brain Stimulation (DBS) for advanced cases."
      },
      {
        question: "What is essential tremor?",
        answer: "Essential tremor is a common movement disorder characterized by involuntary, rhythmic shaking, most noticeable when doing active tasks like writing, eating, or holding a cup."
      }
    ],
    relatedSlugs: ["parkinsons-disease", "vertigo"]
  }
];
