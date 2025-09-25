const diseases = {
  A: [
    {
      id: 'a1',
      name: 'Acid Reflux',
      description: 'A condition where stomach acid flows back into the esophagus, causing heartburn and discomfort.',
      remedies: [
        'Apple cider vinegar diluted in water',
        'Baking soda mixed with water',
        'Ginger tea',
        'Aloe vera juice'
      ]
    },
    {
      id: 'a2',
      name: 'Allergies',
      description: 'An immune system response to substances that are typically harmless to most people.',
      remedies: [
        'Local honey consumption',
        'Saline nasal irrigation',
        'Butterbur supplements',
        'Steam inhalation with eucalyptus'
      ]
    },
    {
      id: 'a3',
      name: 'Arthritis',
      description: 'Inflammation of one or more joints, causing pain and stiffness that can worsen with age.',
      remedies: [
        'Turmeric with black pepper',
        'Epsom salt baths',
        'Omega-3 fatty acids',
        'Ginger compress'
      ]
    },
    {
      id: 'a4',
      name: 'Asthma',
      description: 'A condition in which airways narrow and swell and may produce extra mucus.',
      remedies: [
        'Honey and cinnamon mixture',
        'Caffeine from coffee or tea',
        'Mustard oil chest rub',
        'Steam inhalation with eucalyptus'
      ]
    },
    {
      id: 'a5',
      name: 'Anxiety',
      description: 'A feeling of worry, nervousness, or unease about something with an uncertain outcome.',
      remedies: [
        'Chamomile tea',
        'Lavender essential oil',
        'Deep breathing exercises',
        'Valerian root supplements'
      ]
    }
  ],
  B: [
    {
      id: 'b1',
      name: 'Back Pain',
      description: 'Pain felt in the back that usually originates from muscles, nerves, bones, joints or other structures.',
      remedies: [
        'Turmeric milk',
        'Hot and cold therapy',
        'Gentle yoga stretches',
        'Arnica gel application'
      ]
    },
    {
      id: 'b2',
      name: 'Bronchitis',
      description: 'Inflammation of the lining of bronchial tubes, which carry air to and from the lungs.',
      remedies: [
        'Honey and lemon tea',
        'Ginger and pepper tea',
        'Steam inhalation',
        'Salt water gargle'
      ]
    },
    {
      id: 'b3',
      name: 'Bruises',
      description: 'Injury appearing as an area of discolored skin on the body, caused by a blow or impact.',
      remedies: [
        'Cold compress',
        'Arnica gel or cream',
        'Vitamin K cream',
        'Comfrey ointment'
      ]
    },
    {
      id: 'b4',
      name: 'Bloating',
      description: 'A condition where your belly feels full and tight, often due to gas.',
      remedies: [
        'Peppermint tea',
        'Activated charcoal',
        'Ginger root tea',
        'Fennel seeds'
      ]
    },
    {
      id: 'b5',
      name: 'Burns (Minor)',
      description: 'Tissue damage caused by heat, chemicals, electricity, sunlight, or radiation.',
      remedies: [
        'Cool water immersion',
        'Aloe vera gel',
        'Honey application',
        'Coconut oil with lavender'
      ]
    }
  ],
  C: [
    {
      id: 'c1',
      name: 'Common Cold',
      description: 'A viral infectious disease of the upper respiratory tract that primarily affects the nose.',
      remedies: [
        'Chicken soup',
        'Honey and lemon tea',
        'Garlic supplements',
        'Steam inhalation with mint'
      ]
    },
    {
      id: 'c2',
      name: 'Constipation',
      description: 'A condition in which there is difficulty in emptying the bowels, usually associated with hardened feces.',
      remedies: [
        'Increased water intake',
        'Prune juice',
        'Flaxseed consumption',
        'Castor oil'
      ]
    },
    {
      id: 'c3',
      name: 'Cough',
      description: 'A sudden, often repetitive reflex that helps to clear the throat and breathing passages of irritants.',
      remedies: [
        'Honey and ginger mixture',
        'Thyme tea',
        'Licorice root tea',
        'Marshmallow root'
      ]
    },
    {
      id: 'c4',
      name: 'Cuts and Wounds',
      description: 'Injuries that break the skin or other tissues of the body.',
      remedies: [
        'Honey application',
        'Aloe vera gel',
        'Turmeric paste',
        'Tea tree oil diluted'
      ]
    },
    {
      id: 'c5',
      name: 'Conjunctivitis',
      description: 'Inflammation of the conjunctiva, the outermost layer of the eye and the inner surface of the eyelids.',
      remedies: [
        'Cold compress',
        'Honey drops (diluted)',
        'Chamomile tea bags',
        'Aloe vera gel around eyes'
      ]
    }
  ],
  D: [
    {
      id: 'd1',
      name: 'Dandruff',
      description: 'A condition of the scalp that causes flakes of skin to appear and is often accompanied by itching.',
      remedies: [
        'Apple cider vinegar rinse',
        'Coconut oil massage',
        'Tea tree oil shampoo',
        'Aloe vera application'
      ]
    },
    {
      id: 'd2',
      name: 'Depression',
      description: 'A mental health disorder characterized by persistently depressed mood or loss of interest in activities.',
      remedies: [
        'St. John\'s Wort tea',
        'Regular exercise',
        'Omega-3 fatty acids',
        'Vitamin D supplementation'
      ]
    },
    {
      id: 'd3',
      name: 'Diabetes',
      description: 'A disease in which the body\'s ability to produce or respond to insulin is impaired.',
      remedies: [
        'Cinnamon supplements',
        'Fenugreek seeds',
        'Bitter melon juice',
        'Apple cider vinegar before meals'
      ]
    },
    {
      id: 'd4',
      name: 'Diarrhea',
      description: 'Loose, watery stools that occur more frequently than usual.',
      remedies: [
        'BRAT diet (bananas, rice, applesauce, toast)',
        'Ginger tea',
        'Probiotics',
        'Chamomile tea'
      ]
    },
    {
      id: 'd5',
      name: 'Dry Skin',
      description: 'Skin that lacks moisture and may appear flaky, rough, or tight.',
      remedies: [
        'Coconut oil application',
        'Oatmeal baths',
        'Honey masks',
        'Aloe vera gel'
      ]
    }
  ],
  E: [
    {
      id: 'e1',
      name: 'Earache',
      description: 'Pain in the inner or outer ear that may be caused by infection, injury, or referred pain.',
      remedies: [
        'Warm olive oil drops',
        'Garlic oil drops',
        'Warm compress',
        'Tea tree oil diluted'
      ]
    },
    {
      id: 'e2',
      name: 'Eczema',
      description: 'A condition where patches of skin become inflamed, itchy, red, cracked, and rough.',
      remedies: [
        'Coconut oil application',
        'Colloidal oatmeal baths',
        'Aloe vera gel',
        'Evening primrose oil'
      ]
    }
  ],
  F: [
    {
      id: 'f1',
      name: 'Fever',
      description: 'A temporary increase in body temperature, often due to an illness.',
      remedies: [
        'Lukewarm baths',
        'Willow bark tea',
        'Apple cider vinegar wraps',
        'Basil leaf tea'
      ]
    },
    {
      id: 'f2',
      name: 'Food Poisoning',
      description: 'Illness caused by eating contaminated food.',
      remedies: [
        'Ginger tea',
        'Apple cider vinegar',
        'Activated charcoal',
        'Probiotics'
      ]
    },
    {
      id: 'f3',
      name: 'Fatigue',
      description: 'Extreme tiredness resulting from mental or physical exertion or illness.',
      remedies: [
        'Ashwagandha supplements',
        'B vitamin complex',
        'Improved sleep hygiene',
        'Reduced caffeine intake'
      ]
    },
    {
      id: 'f4',
      name: 'Fungal Infections',
      description: 'Infections caused by fungi that can affect the skin, nails, and other parts of the body.',
      remedies: [
        'Tea tree oil application',
        'Apple cider vinegar soaks',
        'Garlic paste',
        'Coconut oil application'
      ]
    },
    {
      id: 'f5',
      name: 'Fibromyalgia',
      description: 'A disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory and mood issues.',
      remedies: [
        'Magnesium supplements',
        'Gentle yoga',
        'Acupuncture',
        'Warm baths with Epsom salts'
      ]
    }
  ],
  G: [
    {
      id: 'g1',
      name: 'Gout',
      description: 'A form of inflammatory arthritis characterized by recurrent attacks of a red, tender, hot, and swollen joint.',
      remedies: [
        'Cherry juice',
        'Apple cider vinegar',
        'Ginger compresses',
        'Epsom salt soaks'
      ]
    },
    {
      id: 'g2',
      name: 'Gingivitis',
      description: 'Inflammation of the gums, typically due to plaque buildup.',
      remedies: [
        'Salt water rinse',
        'Clove oil application',
        'Aloe vera gel',
        'Tea tree oil mouthwash'
      ]
    },
    {
      id: 'g3',
      name: 'Gastritis',
      description: 'Inflammation of the lining of the stomach.',
      remedies: [
        'Chamomile tea',
        'Licorice root',
        'Slippery elm bark',
        'Probiotics'
      ]
    },
    {
      id: 'g4',
      name: 'Gallstones',
      description: 'Hardened deposits of digestive fluid that can form in your gallbladder.',
      remedies: [
        'Apple juice with apple cider vinegar',
        'Peppermint tea',
        'Turmeric',
        'Vegetable juice'
      ]
    },
    {
      id: 'g5',
      name: 'Glaucoma',
      description: 'A group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in the eye.',
      remedies: [
        'Bilberry extract',
        'Ginkgo biloba',
        'Fish oil supplements',
        'Regular eye exercises'
      ]
    }
  ],
  H: [
    {
      id: 'h1',
      name: 'Headache',
      description: 'Pain in any region of the head.',
      remedies: [
        'Peppermint oil',
        'Feverfew herb',
        'Willow bark tea',
        'Lavender essential oil'
      ]
    },
    {
      id: 'h2',
      name: 'Heartburn',
      description: 'A burning sensation in the chest, usually after eating.',
      remedies: [
        'Baking soda in water',
        'Ginger tea',
        'Aloe vera juice',
        'Apple cider vinegar'
      ]
    },
    {
      id: 'h3',
      name: 'Hemorrhoids',
      description: 'Swollen veins in the lowest part of your rectum and anus.',
      remedies: [
        'Witch hazel application',
        'Sitz baths',
        'Aloe vera gel',
        'Cold compresses'
      ]
    },
    {
      id: 'h4',
      name: 'Hiccups',
      description: 'Involuntary contractions of the diaphragm followed by sudden closure of the vocal cords.',
      remedies: [
        'Drinking water quickly',
        'Breathing into a paper bag',
        'Sugar under the tongue',
        'Peanut butter'
      ]
    },
    {
      id: 'h5',
      name: 'Hypertension',
      description: 'High blood pressure that can lead to serious health problems.',
      remedies: [
        'Hibiscus tea',
        'Garlic consumption',
        'Reduced sodium intake',
        'Regular exercise'
      ]
    }
  ],
  I: [
    {
      id: 'i1',
      name: 'Insomnia',
      description: 'A sleep disorder characterized by difficulty falling or staying asleep.',
      remedies: [
        'Valerian root tea',
        'Lavender essential oil',
        'Magnesium supplements',
        'Chamomile tea'
      ]
    },
    {
      id: 'i2',
      name: 'Indigestion',
      description: 'Discomfort or pain in the upper abdomen often occurring after eating.',
      remedies: [
        'Ginger tea',
        'Peppermint oil',
        'Apple cider vinegar',
        'Chamomile tea'
      ]
    },
    {
      id: 'i3',
      name: 'Irritable Bowel Syndrome',
      description: 'A common disorder affecting the large intestine causing abdominal pain, bloating, and altered bowel habits.',
      remedies: [
        'Peppermint oil capsules',
        'Probiotics',
        'Fennel tea',
        'Stress reduction techniques'
      ]
    },
    {
      id: 'i4',
      name: 'Iron Deficiency',
      description: 'A condition where the body lacks adequate healthy red blood cells due to insufficient iron.',
      remedies: [
        'Blackstrap molasses',
        'Vitamin C with iron-rich foods',
        'Nettle leaf tea',
        'Cast iron cookware use'
      ]
    },
    {
      id: 'i5',
      name: 'Inflammation',
      description: 'A process by which the body’s white blood cells protect us from infection with foreign organisms.',
      remedies: [
        'Turmeric with black pepper',
        'Ginger tea',
        'Omega-3 fatty acids',
        'Bromelain from pineapple'
      ]
    }
  ],
  J: [
    {
      id: 'j1',
      name: 'Joint Pain',
      description: 'Discomfort arising from any joint in the body.',
      remedies: [
        'Turmeric and ginger tea',
        'Epsom salt baths',
        'Fish oil supplements',
        'Boswellia supplements'
      ]
    },
    {
      id: 'j2',
      name: 'Jaundice',
      description: 'A condition causing yellowing of the skin and whites of the eyes due to excess bilirubin.',
      remedies: [
        'Sugarcane juice',
        'Barley water',
        'Lemon water',
        'Papaya leaf extract'
      ]
    },
    {
      id: 'j3',
      name: 'Jet Lag',
      description: 'A temporary sleep disorder that can affect anyone who travels across multiple time zones.',
      remedies: [
        'Melatonin supplements',
        'Staying hydrated',
        'Light exposure management',
        'Adaptogenic herbs'
      ]
    },
    {
      id: 'j4',
      name: 'Jock Itch',
      description: 'A fungal infection that affects the skin of the genitals, inner thighs, and buttocks.',
      remedies: [
        'Tea tree oil application',
        'Apple cider vinegar',
        'Garlic paste',
        'Coconut oil'
      ]
    },
    {
      id: 'j5',
      name: 'Jaw Pain',
      description: 'Discomfort or pain in the jaw joint and muscles that control jaw movement.',
      remedies: [
        'Warm compress',
        'Clove oil application',
        'Magnesium supplements',
        'Jaw exercises'
      ]
    }
  ],
  K: [
    {
      id: 'k1',
      name: 'Kidney Stones',
      description: 'Hard deposits made of minerals and salts that form inside your kidneys.',
      remedies: [
        'Lemon juice and olive oil',
        'Apple cider vinegar',
        'Increased water intake',
        'Pomegranate juice'
      ]
    },
    {
      id: 'k2',
      name: 'Knee Pain',
      description: 'Pain in or around the knee joint.',
      remedies: [
        'Turmeric paste application',
        'Ginger compress',
        'Epsom salt baths',
        'Fish oil supplements'
      ]
    },
    {
      id: 'k3',
      name: 'Keratosis Pilaris',
      description: 'A common skin condition that causes rough patches and small, acne-like bumps on the arms, thighs, cheeks, and buttocks.',
      remedies: [
        'Coconut oil application',
        'Apple cider vinegar',
        'Baking soda scrub',
        'Vitamin A and E oils'
      ]
    },
    {
      id: 'k4',
      name: 'Kleptomania',
      description: 'A recurrent urge to steal, typically without regard for need or profit.',
      remedies: [
        'St. John\'s Wort',
        'Meditation practices',
        'NAC supplements',
        'Cognitive behavioral techniques'
      ]
    },
    {
      id: 'k5',
      name: 'Keloids',
      description: 'Raised overgrowths of scar tissue that form at the site of a skin injury.',
      remedies: [
        'Onion extract gel',
        'Honey application',
        'Aloe vera gel',
        'Vitamin E oil'
      ]
    }
  ],
  L: [
    {
      id: 'l1',
      name: 'Laryngitis',
      description: 'Inflammation of the voice box (larynx) from overuse, irritation, or infection.',
      remedies: [
        'Honey and lemon tea',
        'Ginger tea',
        'Salt water gargle',
        'Steam inhalation'
      ]
    },
    {
      id: 'l2',
      name: 'Leg Cramps',
      description: 'Sudden, involuntary contractions of the leg muscles.',
      remedies: [
        'Magnesium supplements',
        'Pickle juice',
        'Potassium-rich foods',
        'Stretching exercises'
      ]
    },
    {
      id: 'l3',
      name: 'Liver Problems',
      description: 'Various conditions affecting the liver, which can impact its function.',
      remedies: [
        'Milk thistle tea',
        'Dandelion root tea',
        'Turmeric with black pepper',
        'Lemon water'
      ]
    },
    {
      id: 'l4',
      name: 'Low Blood Pressure',
      description: 'A condition where blood pressure in the arteries is lower than normal.',
      remedies: [
        'Increased salt intake',
        'Licorice tea',
        'Rosemary tea',
        'Increased water consumption'
      ]
    },
    {
      id: 'l5',
      name: 'Lupus',
      description: 'A systemic autoimmune disease that occurs when the body’s immune system attacks its own tissues and organs.',
      remedies: [
        'Turmeric supplements',
        'Fish oil',
        'Vitamin D',
        'DHEA supplements'
      ]
    }
  ],
  M: [
    {
      id: 'm1',
      name: 'Migraine',
      description: 'A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.',
      remedies: [
        'Feverfew supplements',
        'Butterbur extract',
        'Magnesium supplements',
        'Peppermint oil'
      ]
    },
    {
      id: 'm2',
      name: 'Morning Sickness',
      description: 'Nausea and vomiting that occurs during pregnancy.',
      remedies: [
        'Ginger tea',
        'Vitamin B6 supplements',
        'Lemon water',
        'Peppermint aromatherapy'
      ]
    },
    {
      id: 'm3',
      name: 'Muscle Soreness',
      description: 'Pain in the muscles that occurs after exercise or physical activity.',
      remedies: [
        'Epsom salt baths',
        'Arnica gel',
        'Cherry juice',
        'Turmeric milk'
      ]
    },
    {
      id: 'm4',
      name: 'Menstrual Cramps',
      description: 'Throbbing or cramping pains in the lower abdomen during menstruation.',
      remedies: [
        'Ginger tea',
        'Heat therapy',
        'Cinnamon tea',
        'Fennel seeds'
      ]
    },
    {
      id: 'm5',
      name: 'Memory Problems',
      description: 'Difficulty in remembering information or events.',
      remedies: [
        'Ginkgo biloba',
        'Bacopa monnieri',
        'Omega-3 fatty acids',
        'Rosemary essential oil'
      ]
    }
  ],
  N: [
    {
      id: 'n1',
      name: 'Nausea',
      description: 'A feeling of sickness with an inclination to vomit.',
      remedies: [
        'Ginger tea',
        'Peppermint tea',
        'Lemon water',
        'Acupressure wristbands'
      ]
    },
    {
      id: 'n2',
      name: 'Nasal Congestion',
      description: 'Blockage of the nasal passages usually due to membranes lining the nose becoming swollen.',
      remedies: [
        'Steam inhalation',
        'Saline nasal spray',
        'Eucalyptus oil',
        'Apple cider vinegar'
      ]
    },
    {
      id: 'n3',
      name: 'Nail Fungus',
      description: 'A fungal infection that occurs in the nails, causing discoloration and thickening.',
      remedies: [
        'Tea tree oil',
        'Apple cider vinegar soak',
        'Oregano oil',
        'Garlic paste'
      ]
    },
    {
      id: 'n4',
      name: 'Nerve Pain',
      description: 'Pain caused by damage or dysfunction in the nervous system.',
      remedies: [
        'Alpha-lipoic acid',
        'Cayenne pepper cream',
        'Magnesium supplements',
        'St. John’s Wort oil'
      ]
    },
    {
      id: 'n5',
      name: 'Night Sweats',
      description: 'Excessive sweating during sleep that soaks your nightclothes or bedding.',
      remedies: [
        'Sage tea',
        'Black cohosh',
        'Vitamin E',
        'Cooling mattress pad'
      ]
    }
  ],
  O: [
    {
      id: 'o1',
      name: 'Osteoarthritis',
      description: 'A type of joint disease that results from breakdown of joint cartilage and underlying bone.',
      remedies: [
        'Turmeric with black pepper',
        'Ginger compress',
        'Epsom salt baths',
        'Fish oil supplements'
      ]
    },
    {
      id: 'o2',
      name: 'Obesity',
      description: 'A medical condition in which excess body fat has accumulated to the extent that it may have a negative effect on health.',
      remedies: [
        'Green tea',
        'Apple cider vinegar',
        'Cinnamon water',
        'Portion control techniques'
      ]
    },
    {
      id: 'o3',
      name: 'Oily Skin',
      description: 'Skin that produces excess sebum, giving a shiny appearance.',
      remedies: [
        'Clay masks',
        'Tea tree oil toner',
        'Aloe vera gel',
        'Witch hazel'
      ]
    },
    {
      id: 'o4',
      name: 'Oral Thrush',
      description: 'A fungal infection in the mouth characterized by white lesions on the tongue and inner cheeks.',
      remedies: [
        'Yogurt consumption',
        'Salt water rinse',
        'Coconut oil pulling',
        'Baking soda rinse'
      ]
    },
    {
      id: 'o5',
      name: 'Osteoporosis',
      description: 'A condition where bones become weak and brittle, making them more susceptible to fractures.',
      remedies: [
        'Vitamin D supplements',
        'Calcium-rich foods',
        'Weight-bearing exercises',
        'Magnesium supplements'
      ]
    }
  ],
  P: [
    {
      id: 'p1',
      name: 'Psoriasis',
      description: 'A skin condition that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk and scalp.',
      remedies: [
        'Aloe vera gel',
        'Tea tree oil',
        'Epsom salt baths',
        'Turmeric paste'
      ]
    },
    {
      id: 'p2',
      name: 'Pneumonia',
      description: 'Infection that inflames air sacs in one or both lungs, which may fill with fluid.',
      remedies: [
        'Garlic soup',
        'Ginger tea',
        'Turmeric milk',
        'Steam inhalation with eucalyptus'
      ]
    },
    {
      id: 'p3',
      name: 'Premenstrual Syndrome',
      description: 'A combination of symptoms that many women get about a week or two before their period.',
      remedies: [
        'Chasteberry supplements',
        'Calcium supplements',
        'Evening primrose oil',
        'Magnesium-rich foods'
      ]
    },
    {
      id: 'p4',
      name: 'Prostate Problems',
      description: 'Various conditions affecting the prostate gland, which can impact urinary function.',
      remedies: [
        'Saw palmetto',
        'Pumpkin seeds',
        'Nettle root tea',
        'Zinc supplements'
      ]
    },
    {
      id: 'p5',
      name: 'Parasitic Infections',
      description: 'Infections caused by parasites that live on or in a human and derive nourishment from the host.',
      remedies: [
        'Garlic consumption',
        'Pumpkin seeds',
        'Wormwood tea',
        'Clove oil'
      ]
    }
  ],
  Q: [
    {
      id: 'q1',
      name: 'Quinsy',
      description: 'An abscess (collection of pus) between the back of the tonsil and the wall of the throat.',
      remedies: [
        'Salt water gargle',
        'Honey and lemon tea',
        'Warm compresses',
        'Chamomile tea'
      ]
    },
    {
      id: 'q2',
      name: 'Quadriceps Strain',
      description: 'A stretch or tear of the quadriceps muscles at the front of the thigh.',
      remedies: [
        'RICE method (Rest, Ice, Compression, Elevation)',
        'Arnica gel',
        'Turmeric supplements',
        'Gentle stretching'
      ]
    },
    {
      id: 'q3',
      name: 'Queasiness',
      description: 'A feeling of nausea or discomfort in the stomach.',
      remedies: [
        'Ginger tea',
        'Peppermint oil',
        'Lemon water',
        'Deep breathing techniques'
      ]
    },
    {
      id: 'q4',
      name: 'Quercetin Deficiency',
      description: 'Low levels of quercetin, a plant flavonol with antioxidant properties.',
      remedies: [
        'Onion consumption',
        'Apple consumption',
        'Green tea',
        'Citrus fruits'
      ]
    },
    {
      id: 'q5',
      name: 'Q Fever',
      description: 'A bacterial infection caused by Coxiella burnetii, which can affect the lungs, liver, heart, and other parts of the body.',
      remedies: [
        'Rest and hydration',
        'Echinacea tea',
        'Garlic supplements',
        'Vitamin C'
      ]
    }
  ],
  R: [
    {
      id: 'r1',
      name: 'Rheumatoid Arthritis',
      description: 'An autoimmune disorder that causes inflammation of the joints and surrounding tissues.',
      remedies: [
        'Fish oil supplements',
        'Turmeric with black pepper',
        'Ginger tea',
        'Evening primrose oil'
      ]
    },
    {
      id: 'r2',
      name: 'Ringworm',
      description: 'A fungal infection of the skin causing a ring-shaped rash.',
      remedies: [
        'Tea tree oil',
        'Apple cider vinegar',
        'Garlic paste',
        'Turmeric paste'
      ]
    },
    {
      id: 'r3',
      name: 'Restless Leg Syndrome',
      description: 'A condition characterized by an uncontrollable urge to move the legs, usually due to discomfort.',
      remedies: [
        'Iron supplements',
        'Magnesium supplements',
        'Warm baths',
        'Leg stretches'
      ]
    },
    {
      id: 'r4',
      name: 'Respiratory Infections',
      description: 'Infections that affect the respiratory system, including the nose, throat, and lungs.',
      remedies: [
        'Honey and lemon tea',
        'Garlic soup',
        'Steam inhalation with eucalyptus',
        'Salt water gargle'
      ]
    },
    {
      id: 'r5',
      name: 'Rosacea',
      description: 'A skin condition that causes redness and often small, red, pus-filled bumps on the face.',
      remedies: [
        'Green tea compress',
        'Aloe vera gel',
        'Chamomile tea compress',
        'Oatmeal mask'
      ]
    }
  ],
  S: [
    {
      id: 's1',
      name: 'Sinusitis',
      description: 'Inflammation of the sinuses, typically caused by an infection.',
      remedies: [
        'Steam inhalation',
        'Saline nasal irrigation',
        'Eucalyptus oil',
        'Apple cider vinegar'
      ]
    },
    {
      id: 's2',
      name: 'Sore Throat',
      description: 'Pain, scratchiness or irritation of the throat that often worsens when swallowing.',
      remedies: [
        'Honey and lemon tea',
        'Salt water gargle',
        'Chamomile tea',
        'Slippery elm'
      ]
    },
    {
      id: 's3',
      name: 'Sunburn',
      description: 'Skin damage from overexposure to ultraviolet (UV) rays.',
      remedies: [
        'Aloe vera gel',
        'Cool compresses',
        'Apple cider vinegar',
        'Oatmeal bath'
      ]
    },
    {
      id: 's4',
      name: 'Stress',
      description: 'A state of mental or emotional strain resulting from adverse or demanding circumstances.',
      remedies: [
        'Lavender essential oil',
        'Chamomile tea',
        'Meditation',
        'Deep breathing exercises'
      ]
    },
    {
      id: 's5',
      name: 'Sciatica',
      description: 'Pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg.',
      remedies: [
        'Turmeric supplements',
        'Devil\'s claw',
        'Gentle yoga stretches',
        'Hot and cold therapy'
      ]
    }
  ],
  T: [
    {
      id: 't1',
      name: 'Toothache',
      description: 'Pain in or around a tooth, often due to dental cavities or infection.',
      remedies: [
        'Clove oil',
        'Salt water rinse',
        'Peppermint tea bags',
        'Garlic paste'
      ]
    },
    {
      id: 't2',
      name: 'Tinnitus',
      description: 'The perception of noise or ringing in the ears when no external sound is present.',
      remedies: [
        'Ginkgo biloba',
        'Zinc supplements',
        'Vitamin B12',
        'White noise machines'
      ]
    },
    {
      id: 't3',
      name: 'Thyroid Problems',
      description: 'Conditions that affect the thyroid gland, which can impact metabolism and energy levels.',
      remedies: [
        'Selenium-rich foods',
        'Iodine-rich foods',
        'Ashwagandha',
        'Coconut oil'
      ]
    },
    {
      id: 't4',
      name: 'Tennis Elbow',
      description: 'Pain and tenderness on the outside of the elbow, typically caused by overuse.',
      remedies: [
        'Turmeric paste',
        'Ginger compress',
        'Epsom salt soak',
        'Omega-3 supplements'
      ]
    },
    {
      id: 't5',
      name: 'Thrush',
      description: 'A fungal infection that can affect the mouth, throat, or genitals.',
      remedies: [
        'Yogurt consumption',
        'Garlic consumption',
        'Coconut oil pulling',
        'Salt water rinse'
      ]
    }
  ],
  U: [
    {
      id: 'u1',
      name: 'Urinary Tract Infection',
      description: 'An infection in any part of the urinary system, including kidneys, bladder, ureters, and urethra.',
      remedies: [
        'Cranberry juice',
        'D-mannose supplements',
        'Increased water intake',
        'Probiotics'
      ]
    },
    {
      id: 'u2',
      name: 'Ulcers',
      description: 'Open sores that develop on the lining of the stomach, upper small intestine, or esophagus.',
      remedies: [
        'Cabbage juice',
        'Licorice root',
        'Aloe vera juice',
        'Honey'
      ]
    },
    {
      id: 'u3',
      name: 'Urticaria (Hives)',
      description: 'Red, itchy welts on the skin that result from an allergic reaction.',
      remedies: [
        'Cold compress',
        'Aloe vera gel',
        'Oatmeal bath',
        'Apple cider vinegar'
      ]
    },
    {
      id: 'u4',
      name: 'Uveitis',
      description: 'Inflammation of the uvea, the middle layer of the eye that contains most of the eye’s blood vessels.',
      remedies: [
        'Turmeric supplements',
        'Omega-3 fatty acids',
        'Vitamin E',
        'Bilberry extract'
      ]
    },
    {
      id: 'u5',
      name: 'Upper Respiratory Infection',
      description: 'An infection of the upper respiratory tract, which includes the nose, throat, pharynx, larynx, and bronchi.',
      remedies: [
        'Honey and lemon tea',
        'Garlic soup',
        'Steam inhalation with eucalyptus',
        'Salt water gargle'
      ]
    }
  ],
  V: [
    {
      id: 'v1',
      name: 'Varicose Veins',
      description: 'Enlarged, twisted veins that commonly appear in the legs.',
      remedies: [
        'Horse chestnut extract',
        'Apple cider vinegar',
        'Witch hazel',
        'Compression stockings'
      ]
    },
    {
      id: 'v2',
      name: 'Vertigo',
      description: 'A sensation of spinning or dizziness.',
      remedies: [
        'Ginger tea',
        'Ginkgo biloba',
        'Vitamin D',
        'Epley maneuver exercises'
      ]
    },
    {
      id: 'v3',
      name: 'Vitiligo',
      description: 'A condition in which the skin loses its pigment cells, resulting in discolored patches.',
      remedies: [
        'Ginkgo biloba',
        'Vitamin B12',
        'Copper supplements',
        'Turmeric paste'
      ]
    },
    {
      id: 'v4',
      name: 'Vomiting',
      description: 'The forceful expulsion of stomach contents through the mouth.',
      remedies: [
        'Ginger tea',
        'Peppermint tea',
        'Lemon water',
        'Rice water'
      ]
    },
    {
      id: 'v5',
      name: 'Vitamin Deficiency',
      description: 'A condition where the body lacks adequate vitamins necessary for proper functioning.',
      remedies: [
        'Nutrient-dense foods',
        'Fermented foods',
        'Sunlight exposure',
        'Herbal supplements'
      ]
    }
  ],
  W: [
    {
      id: 'w1',
      name: 'Warts',
      description: 'Small, rough growths on the skin caused by a viral infection.',
      remedies: [
        'Apple cider vinegar',
        'Garlic paste',
        'Tea tree oil',
        'Banana peel'
      ]
    },
    {
      id: 'w2',
      name: 'Whooping Cough',
      description: 'A highly contagious bacterial infection that causes uncontrollable, violent coughing.',
      remedies: [
        'Honey and lemon tea',
        'Ginger tea',
        'Steam inhalation',
        'Garlic soup'
      ]
    },
    {
      id: 'w3',
      name: 'Wrinkles',
      description: 'Creases, folds, or ridges in the skin that typically appear as people get older.',
      remedies: [
        'Aloe vera gel',
        'Coconut oil',
        'Vitamin E oil',
        'Green tea extract'
      ]
    },
    {
      id: 'w4',
      name: 'Water Retention',
      description: 'Excess fluid buildup in the body’s tissues causing swelling.',
      remedies: [
        'Dandelion tea',
        'Parsley tea',
        'Reduced salt intake',
        'Increased water consumption'
      ]
    },
    {
      id: 'w5',
      name: 'Whiteheads',
      description: 'A type of acne that forms when dead skin cells, oil, and bacteria become trapped in a pore.',
      remedies: [
        'Tea tree oil',
        'Witch hazel',
        'Honey mask',
        'Apple cider vinegar toner'
      ]
    }
  ],
  X: [
    {
      id: 'x1',
      name: 'Xerosis',
      description: 'Abnormally dry skin that can be caused by environmental factors or medical conditions.',
      remedies: [
        'Coconut oil',
        'Oatmeal baths',
        'Aloe vera gel',
        'Humidifier use'
      ]
    },
    {
      id: 'x2',
      name: 'Xerostomia',
      description: 'Dry mouth due to reduced or absent saliva flow.',
      remedies: [
        'Increased water intake',
        'Sugar-free gum',
        'Aloe vera juice',
        'Slippery elm lozenges'
      ]
    },
    {
      id: 'x3',
      name: 'Xanthelasma',
      description: 'Yellow deposits of fat underneath the skin, usually around the eyelids.',
      remedies: [
        'Apple cider vinegar',
        'Castor oil',
        'Garlic paste',
        'Fenugreek seeds'
      ]
    },
    {
      id: 'x4',
      name: 'Xeroderma',
      description: 'A condition characterized by rough, dry skin.',
      remedies: [
        'Shea butter',
        'Vitamin E oil',
        'Olive oil massage',
        'Avocado mask'
      ]
    },
    {
      id: 'x5',
      name: 'Xerophthalmia',
      description: 'Dry eyes due to vitamin A deficiency.',
      remedies: [
        'Vitamin A rich foods',
        'Fish oil supplements',
        'Castor oil eye drops',
        'Warm compresses'
      ]
    }
  ],
  Y: [
    {
      id: 'y1',
      name: 'Yeast Infection',
      description: 'A fungal infection that causes irritation, discharge, and intense itchiness.',
      remedies: [
        'Yogurt application',
        'Garlic consumption',
        'Tea tree oil',
        'Apple cider vinegar bath'
      ]
    },
    {
      id: 'y2',
      name: 'Yellow Fever',
      description: 'A viral disease transmitted by infected mosquitoes.',
      remedies: [
        'Rest and hydration',
        'Echinacea tea',
        'Ginger tea',
        'Vitamin C'
      ]
    },
    {
      id: 'y3',
      name: 'Yellow Nail Syndrome',
      description: 'A condition characterized by yellow discoloration and thickening of the nails.',
      remedies: [
        'Vitamin E oil',
        'Tea tree oil',
        'Oregano oil',
        'Lemon juice application'
      ]
    },
    {
      id: 'y4',
      name: 'Yoga Injuries',
      description: 'Injuries that occur during yoga practice, often due to improper form or overexertion.',
      remedies: [
        'Turmeric paste',
        'Arnica gel',
        'Epsom salt baths',
        'Gentle stretching'
      ]
    },
    {
      id: 'y5',
      name: 'Youth Acne',
      description: 'Acne that commonly occurs during adolescence due to hormonal changes.',
      remedies: [
        'Tea tree oil',
        'Aloe vera gel',
        'Honey mask',
        'Apple cider vinegar toner'
      ]
    }
  ],
  Z: [
    {
      id: 'z1',
      name: 'Zika Virus',
      description: 'A mosquito-borne virus that can cause fever, rash, joint pain, and conjunctivitis.',
      remedies: [
        'Rest and hydration',
        'Acetaminophen for fever',
        'Cool compresses',
        'Echinacea tea'
      ]
    },
    {
      id: 'z2',
      name: 'Zinc Deficiency',
      description: 'A lack of zinc in the body that can lead to hair loss, diarrhea, and impaired immune function.',
      remedies: [
        'Pumpkin seeds',
        'Oysters',
        'Legumes',
        'Whole grains'
      ]
    },
    {
      id: 'z3',
      name: 'Zoster (Shingles)',
      description: 'A viral infection that causes a painful rash, often appearing as a stripe of blisters.',
      remedies: [
        'Calamine lotion',
        'Cool compresses',
        'Oatmeal baths',
        'Lemon balm extract'
      ]
    },
    {
      id: 'z4',
      name: 'Zerosis',
      description: 'Abnormal dryness of the skin or mucous membranes.',
      remedies: [
        'Coconut oil',
        'Shea butter',
        'Aloe vera gel',
        'Humidifier use'
      ]
    },
    {
      id: 'z5',
      name: 'Zoonosis',
      description: 'Diseases that can be transmitted from animals to humans.',
      remedies: [
        'Proper hygiene',
        'Echinacea',
        'Garlic',
        'Oregano oil'
      ]
    }
  ]
};
export default diseases;