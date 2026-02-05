const fs = require('fs');

const rawCsv = `Generic Name and Strength,Dosage Form,Indication,Therapeutic Class 
Allicin 450 mg,Capsule,"Antifungal, antiparasitic & antiviral properties ",Antiviral 
S. salivarious,Capsule ,"Tonsilitis, Otitis",Antiviral 
Astaxanthin-rich oleoresin from Haematococcus pluvialis  8 mg ,Capsule,"Antioxidant protection, skin health, eye health, immune support, cardiovascular health",Beauty Supplements
Nicotinamide Adenine Dinucleotide 1000 mg ,Capsule ,"Improve the symptoms of various cardiovascular, neurodegenerative, and metabolic diseases and help the skin regenerate.",Beauty Supplements
Bioperine 5 mg,Capsule,Enhances nutrient absorption and Bioavailabilty,Bioavailability Enhancer
Curcuminoids USP 500 mg (Turmeric),Capsule & Tablet,"Antioxidant, Antiinflammatory",Bones & Joint 
"Boswellias, Indian Bdellium  (Rumalaya Forte , Himalaya)",Capsule & Tablet,"Arthritis, gout, spondylosis, frozen shoulder",Bones & Joint 
Glucosamine Sulfate+ Chondroitin Sulfate+ Methyl Sulfate Methane (MSM) + Hyaluronic Acid+ Flax Seed Oil  (Flex) Powder 11.6 gm ,Sachet,"Joint lubrication, support, construction",Bones & Joint 
N Acetyl Glucosamine PG,Capsule,Osteoarthritis & IBD,Bones & Joint 
"Undenatured Collagen II 20 mg+ Glucosamine 750 mg + Boswellia Serrata 50 mg + Boron 0.75 (Orthogen, ACME)",Tablet,Superior supports for aging joints.,Bones & Joint 
Magnesium Glycinate 120 mg ,Capsule,"Osteoporosis, migraines, depression and magnesium deficiency",Bones & Joint 
"Calcium L Threonate,Egg Powder, Sesame & Strawberry Extract 1500 mg (Ovocal, Int brand)",Tablet,Joint Pain & Stiffness,Bones & Joint 
Boswellia serrata standardized extract 100 mg (>70% Boswellic acids including AKBA),Capsule ,Joint and Muscle Pain,Bones & Joint 
"Eggshell membrane 150 mg, Elastin 37.5 mg, collagen 33 mg, Hyaluronic acid 9 mg, Glycosaminoglycan 3 mg ",Gummy,"Osteoprosis, Calcium deficiency",Bones & Joint 
Tart cherry 500 mg,Capsule,"Joint health, muscle recovery, antioxidant & anti-inflammatory support",Bones & Joint 
"Sodium 3 mg, Turmeric Extract (95% Curcumin) 10 mg, Black Pepper Extract (95% Piperine) 1 mg, Turmeric Powder 25 mg.",Gummy,Joint health,Bones & Joint 
Sophora Japonica Leaf Extract 500 mg,Capsule,Antioxidant & Anti-inflammatroy,Bones & Joint 
Undenatured Type II collagen 40 mg + Glucosamine sulfate 150 mg+ Chondroitin Sulfate 120 mg ,Capsule,"Osteoarthritis, Joint pain, Rheumatoid arthritis ",Bones & Joint 
Vitamin D3 + Vitamin K2 + Vitamin k1,Capsule,Supoorts bone and cardiovascular health,Bones & Joint 
Vitamin K2 100 mcg,Capsule,Supports Bone Health,Bones & Joint 
"UC-II (Chicken sternum cartilage) 40 mg, Rhodiola rosea extract 200 mg (Contain rosavin 3 mg & Salidroside 2 mg), Cholecalciferol (Vitamin D3) 25 mcg  
Cellular joint mobility, Swisse ",Capsule ,Improves joint function & Mobility ,Bones & Joint 
Ultiboost vitamin D3 1000IU (Swisse),Capsule,"Supports strong and healthy bone, teeth",Bones & Joint 
"Vitamin D3, Vitamin K, Calcium, Magnesium, Zinc, Copper, Manganese, Sodium (Osteomatrix)",Capsule,Build & maintain strong bones ,Bones & Joint 
Calcium lactate+Calcium glycerophosphate + Tricalcium citrate 500 mg ,Tablet ,"Osteoarthritis, For healty bone health ",Bones & Joint 
Hyaluronic acid ,Capsule & Tablet,Joint health,Bones & Joint 
Native (undenatured) type II collagen derived from chicken sternum 10 mg,Capsule,"Joint health maintenance, cartilage support, reduction of joint discomfort and stiffness",Bones & Joint 
"Curcumin 237 mg, Boswellia 51 mg, D3-3 mcg",Capsule ,Joint and Muscle Pain,Bones & Joint 
Ginko Biloba 60 & 120  mg,Capsule,"Memory Loss, Vertigo and Tinnitus",Brain health & Memory 
Omega 3 Triglycerides 1800 mg (4XStrength Fish Oil)Swisse,Liquid in Capsule,Lower Triglecerides level,Cardiovascular well being
Beetroot powder 600 mg ,Capsule ,"Supports Blood Pressure, Athletic Performance, Digestive, Immune System ",Cardiovascular well being
"Linseed oil 60 mg, Vitamin A 400 mcg, Vitamin C 20 mg, Vitamin D3 2.5 mcg, Niacin 4 mg, Pantothenic acid 3 mg, Vitamin E 3 mg, Vitamin B6 0.7 mg, Folic acid 50 mcg, Zinc 625 mcg, Biotin 18.5 mcg, Iodine 7.5 mcg, Vitamin B12 0.75 mcg.",Gummy,"Supports heart health, brain function, and overall wellness.",Cardiovascular well being
Saffron 30 mg,Capsule,Depression & Hypertension,Cardiovascular well being
Triphala 250 mg ,Capsule &Tablet,"Reduce serum cholesterol levels, improve blood & bile circulation",Cardiovascular well being
Triphala 480 mg,Capsule,"Reduce serum cholesterol levels, improve blood & bile circulation",Cardiovascular well being
Astaxanthine 2 & 4 mg ,Capsule,Anti-oxidant & CVS,Cardiovascular well being
"Berberis aristata extract 224.39 mg (contain berberine 188 mg), Bifidobacterium animalis subspecies lactis CECT8145 10 mg, Chromium picolinate 201.1 mcg (Eqv. To Chromium 25 mcg) 
Cellular metabolism, Swisse ",Capsule ,"Ensures healthy longevity, reduces cholesterol.   ",Cardiovascular well being
Beta-glucan polysaccharide K 250 mg + Vit D3 10 mcg ,Capsule,Heart disease and high cholesterol,Cardiovascular well being
Nattokinase 100 mg ,Capsule,"• Supports healthy blood flow
• Improve blood circulation 
• Supports cardiovascular health 
",Cardiovascular well being
Omega 3 FA  1000 mg,Capsule,Lower Triglecerides,Cardiovascular well being
Co-Q10,Softgel Capsule,"Helps to prevent cardiovascular diseases , male & female infertility",Cardiovascular well being
Lecithin 1200 mg ,Softgel Capsule,"Helps in digestion, lower cholesterol, supports proper sleeping ",Cardiovascular well being
Vita E Complex,Softgel Capsule,"Support heart,brain & lung",Cardiovascular well being
Berberis aristata extract 500 mg ,Capsule,Reduce blood lipid levels in humans.,Cardiovascular well being
Cocoa extract standardized to ≥29% cocoa flavanols,"Powder, Capsule","Cardiovascular health, improved blood flow, cognitive function support, exercise performance enhancement Givaudan Health & Nutrition Hub",Cardiovascular well being
"Lactobacillus plantarum, Vitamin B1, L-arginine, Coenzyme Q10",Tablet ,Hyperlipidemia,Cardiovascular well being
2 kcal Drink (Fresubin) ,Sachet ,Energy drink to increase low appetite ,Clinical Nutritional Supplemet
"Shilajit Extract (500 mg), Fumaria officinalis (250 mg), Taraxacum (Dandelion) Root Extract (200 mg), Sunflower (Helianthus annuus) Flower Extract (100 mg), Birch (Betula pubescens) Leaf Extract (100 mg), Nettle (Urtica dioica) Leaf Extract (80 mg), Portulaca oleracea (60), Artichoke (Cynara scolymus) Leaf Extract (40 mg), Viola tricolor (40 mg), Chlorella vulgaris Powder (35 mg), Coriander (Coriandrum sativum) Fruit Extract (15 mg), Iron Sulfate, L-Aspartic Acid, Magnesium Citrate-20 ml",Sachet,Detoxify body,Detox 
Red Ginseng extract (80% rare ginsenosides),Capsule,Enhances energy and vitality; supports cognitive function and stress adaptation,Energy 
"Vit C, Vit B complex, Punicalagin, Ellagic acid",Sachet,Fatigue reduction.,Energy 
Maqui berries,Capsule & Tablet ,Eye health,Eye health 
Daily Digestive Probiotics 35 B (Swiss),Capsule,"Supports GI Health, Restores gut flora",Gut health 
Saccharomyces boulardii 05 Billion  (Antibiotic Support Probiotic) Swiss,Capsule,Reduce diarrhoea & maintain beneficial gut flora during antibiotic use,Gut health 
"Citrus sarcodactylis fructus 30.33 mg, Amomi fructus 34.67 mg, Codonopsis radix 43.33 mg, Atractylodis macrocephalae rhizome praeparata 86.67 mg, Poria 86.67 mg, Radix et rhizome glycyrrhizae praeparata cum melle 30.33 mg, Citri reticulatae pericarpium 34.67 mg, Raphani semen praeparata 43.33 mg -390 mg",Capsule ,"Belching, Stomach discomfort after meal, Bloating after meals, Poor appetite. ",Gut health 
Fucoidan,Capsule & Tablet,Helps to repair stomach's protective layer,Gut health 
Himalayan Gasex Syrup,Syrup,"Dyspepsia, Indigesion",Gut health 
Himalayan Gasex Tablet,Tablet,"Dyspepsia, Indigesion",Gut health 
Kalomegh Capsule 200 & 325 mg,Capsule ,"Enhancing digestive function, supporting respiratory health, and boosting the immune system",Gut health 
Motilitone combinations of Corydalis Tuber & Pharbitidis Semen 30 mg,Tablet,Dyspepsia,Gut health 
"Sodium 7.5 mg (1% DV), Bacillus Coagulans 50 mcg (1 Billion CFU)",Gummy,"Digestion, Constipation, IBS, Diarrhea",Gut health 
Subgenus Prunus (Prun) Extract 550 mg ,Capsule & Tablet ,"Bowel regularity/constipation, supports vision, skin health, improves bone density ",Gut health 
Tamarindus indica (Tamarind) 450 mg ,Capsule ,"For digestive issues such as constipation, For liver and gallbladder problems. ",Gut health 
Zinger rhizome + Vitamin B6,Capsule & Tablet,Nausea & Vomiting,Gut health 
 Non Bloating Probiotics (Nature's Bounty),Capsule,Advanced support for gas & bloating and abdominal discofort,Gut health 
2 Strains Probiotics Capsule  (Lactobacillus acidophilus & Bifidobacterium lactis),Capsule,"Gut health, diarrhea, antibiotic-associated diarrhea, immunity",Gut health 
Fermented soy 500mg ,Tablet ,Enhances appetite & relieves nausea & vomiting ,Gut health 
Lactobacillus reuteri 2 billion ,Drops ,Diarrhea; Digestive discomfort,Gut health 
Lactobacillus rhamnosus & Bifidobacterium lactis 12 billion ,Capsule,"Traveler’s diarrhea, antibiotic-associated diarrhea, IBS",Gut health 
Lactose Intolerence Probiotics (Nature's Bounty) ,Capsule,Support digestive balance & healthy immune support,Gut health 
Probiotic combination 04 Billion CFU,Capsule,Diarrhea; Digestive discomfort,Gut health 
Probiotic plus Capsule (TS6) ,Capsule,"Promote smooth defecation, help digestion and improve lactose intolerance",Gut health 
"Probiotic combination 10 Billion CFU (Lactobacillus Acidophillus, B.Bifidum)",Capsule,Diarrhea; Digestive discomfort,Gut health 
Polyclonal immunoglobulin Y (IgY) 2 gm,Sachet,Improves GI health & immune function,Gut health 
Saccharomyces boulardii 10 Billion Capsule,Capsule,"Acute diarrhea, antibiotic-associated diarrhea, IBS, traveler’s diarrhea",Gut health 
Saccharomyces cerevesie 500 mg (Therascience),Capsule,Digestive health ,Gut health 
Digest ,Capsule,Supports optimal digestion by helping body absorbs nutrients & convert food into energy,Gut health 
Gastro Rx Cleanse,Capsule,"IBS, Constipation & Digestive supplement ",Gut health 
GastroRx relief (LAC),Capsule,Digestive health ,Gut health 
Herb-lax,Capsule & Tablet,Constipation,Gut health 
Acacia fibre 2 gm (90%) soluble ,Sachet,Restore intestinal permeability,Gut health 
Standardized Licorice (Glycyrrhiza glabra) root extract,Capsule,"Promotes digestive comfort; helps manage indigestion, heartburn, and Helicobacter pylori infections",Gut health 
"Caraway extracts, fennel extracts",Capsule & Tablet ,Flatulence and bloating,Gut health 
Clostridium butyricum 300 mg,Capsule ,"IBS-D, IBS",Gut health 
"Macrogel, psyllium, simethicone",Capsule ,"Constipation, IBS, Gas",Gut health 
"Sodium alginate, sodium bicarbonate, calcium carbonate, arabic gum, xanthan gum",Gel,"GERD, Heartburn, Abdominal pain",Gut health 
Liposomal Iron,Capsule &Tablet ,IDA,Hematinic 
"Endosomal Iron, Maltodextrin, Pyrophosphate, Sunflower Lecithin",Capsule &Tablet ,Iron deficiency,Hematinic 
Vitamin C 500 mg+ Vitamin D 1000 IU +Zinc 30 mg,Capsule & Tablet,Increase Immunity & Wound Healing,Immunomodulator 
Liposomal Vitamin C Non Acidic Form 1000 mg ,Sachet ,Improves collagen synthesis,Immunomodulator 
Zinc Picolinate,Capsule & Tablet,Zinc deficiency &  immunomodulatory activity,Immunomodulator 
Black seed oil 500 mg,Soft gel Capsule ,"Immunity booster, Lowering bad cholesterol ",Immunomodulator 
"Sodium 2.5 mg, Hericium Erinaceus Powder (Fruit Body) 225 mg, Turkey Tail Mushroom Extract (Trametes Versicolor, Fruit Body) 225 mg, Reishi Mushroom Extract (Ganoderma Lucidum, Fruit Body) 225 mg, Chaga Mushroom Extract (Inonotus Obliquus, Sclerotium) 225 mg, Black Fungus Extract (Auricularia Polytricha, Fruit Body) 225 mg, Ganoderma Lucidum Extract (Fruit Body) 225 mg, Black Pepper Extract (95% Piperine, Fruit) 1 mg",Gummy,Support immune system function,Immunomodulator 
Liposomal Zinc ,Capsule & Tablet,Zinc deficiency  & immunity ,Immunomodulator 
Vitamin C Chewable Table (Developed Previously),Tablet ,"Immunity, antioxidant support, cold prevention, collagen synthesis",Immunomodulator 
Ultiboost high strength vitamin C 1000 mg (Swisse),Tablet,"To support immune function , maintain skin health, support healthy antioxidant activity",Immunomodulator 
Probiotic strain Lactobacillus helveticus,Capsule,"Enhances immune response, supports gut health, and may reduce the duration of common colds.",Immunomodulator 
Bifidobacterium breve 68.2 Billion CFU Capsule,Capsule,"Infant gut health, immune modulation, constipation relief",Kid's Health 
Lactobacillus reuteri 2 billion ,Capsule,"Infantile colic, H. pylori infection, gut microbiota support",Kid's Health 
Psyllium Husk 700 mg ,Capsule,"Constipation, lower cholesterol",Laxative
Psyllium Husk 120g Container,Powder ,"Constipation, lower cholesterol",Laxative
Psyllium Husk 3.5 gm ,Sachet,Constipation ,Laxative
"Dietary Fiber 3.18 g (11% DV), Soluble Fiber 3.18 g",Gummy,Constipation,Laxative
Psyllium Husk & Senna extract  4 gm ,Powder,Constipation,Laxative
Shilajit 500 mg (Himalayan Shilajit source),Capsule,"Improves athletic performance, male infertility, fractures, muscle strength &  Alzheimer disease",Men's health 
Tongkat Ali 400 mg,Capsule,"Increase testosteron level, male infertility and erectile dysfunction",Men's health 
"Cowhage or Velvet Bean, Small Caltrops (Confido, Himalaya)",Tablet,Improve Sexual Performance,Men's health 
29 Ultivite Optimen’s Multivitamin                                     ,Tablet,Men wellibeing,Men's health 
Maca Root 500 mg,Capsule,"Improves sexual function, fertility, mood and energy levels",Men's health 
Panax Ginseng 500 mg,Capsule ,"Cognitive function, fertility (male)",Men's health 
 Fireweed (Epilobium angustifolium) extract (15% oenothein B) 500 mg ,Capsule,Supports prostate health; alleviates symptoms of benign prostatic hyperplasia (BPH),Men's health 
"Inostim 200 mg, L-Arginine 30 mg, Phytosterol 50 mg, Niacinamide 8 mg, L-Selenomethionine 0.025 mg, Pumpkin seed oil 250 mg , Damask rose oil 0.1 mg",Micro pellets in oil technology ,"Boosts sex drive, Libido",Men's health 
Testofen + Rosa damascena oil + high bioavailable complex,Micro pellets in oil technology,"Supports Sperm health, Stamina & Energy",Men's health 
"TESTOFEN 200.00 mg, Niacinamide 8.00 mg, Quercetin 5.00 mg, Zinc gluconate 5.00 mg, L-Selenomethionine 0.0025 mg, Vitamin D-3 (as Cholecalciferol) 2.5 mcg, Spirulina extract 7.5 mg, Rosa Damascene oil (flowers) 0.10 mg",Micro pellets in oil technology ,"Increases testosterone level, Sexual desire.",Men's health 
"Tagetes erecta extract 50 mg from min. dry flower 5.5 gm (Contain lutein 5 mg & Zeaxanthin 1 mg), Soy lecithin powder 250 mg eqv. Soy phosphatidylserine 150 mg, Mecobalamin 1.2 mcg 
Cellular Cognition, Swisse ",Capsule ,"Enhances memory & learning, Supports cognitive functions ",Nootropics
Blueberries and grapes extracts  ,Capsule,"Supports cognitive function, memory, and brain health.",Nootropics
Citicoline 400 mg,Capsule,"Cognitive health, memory enhancement, attention and focus support, brain energy metabolism Healthline",Nootropics
Deep Clean Oral Rinse,Oral rinse,"Prevent bad breath,plaque,gingivitis",Oral health 
Fresh Breath Oral Rinse,Oral rinse,Fight bad breath,Oral health 
Listerine,Oral rinse,Maintain Mouth health,Oral health 
Streptococcus salivarius K12 strain 1 billion cfu,"Capsule, Sachet, Chewable Tablets","Oral and throat health, immune system support, maintenance of healthy oral microbiota BLIS Probiotics",Oral health 
"Rosa damascena Extract 50 mg, Rosa damascena oil 6 mg ",Capsule ,"Bad breath, Bad Body Odor",Oral health 
Herbal Paracetamol (Curcumin+Boswellia serrata+Dry gum oleoresin extract+Dry gum oleoresin),Capsule ,Analgesic effects including muscle aches & inflammation ,Pain reliever
Palmitoylethanolamide (PEA),Capsule & Tablet ,Chronic pain,Pain reliever
D-Chiro Inositol 500 mg,Capsule,PCOS,"Pre-conception, Pregnancy & conception "
D-Chiro Inositol 150 mg + Myo Inositol 500 mg,Capsule &Tablet,PCOS,"Pre-conception, Pregnancy & conception "
Pregnancy Vitamin,Tablet & Capsule,To fulfill the vitamin & mineral requirement in pregnancy,"Pre-conception, Pregnancy & conception "
"Terminalia chebula, Glycyrrhiza glabra 2.5 mg, Piper nigrum (fruit) and Alpinia galanga (rhizome)3.25 mg, Syzygium aromaticum 2.5 mg, Elettaria cardamomum, Peppermint  5 mg  (Coflet, Himalaya)",Chewable Tablet,Antitussive,Respiratory Health
 Menthol 7mg + Glycyrrhiza glabra (Liquorice root) 15mg +  Zingiber officinale (Ginger) 10mg + Phyllanthus emblica (Indian gooseberry) 10mg- 300 mg ,Chewable Tablet," To help clear  blocked nose, soothe a sore throat & provide relief from cough. ",Respiratory Health
Menthol 2%+ Eucalyptus Oil 10%,Suspension,"Relief of the symptoms of coughs, colds and blocked noses.",Respiratory Health
Menthol (2%) + Clove Oil (2%) Extract  ,Suspension,"Stiffness, Congestion",Respiratory Health
"Sodium 5 mg , Multifloral Manuka Honey 225 mg",Gummy,"Improves immune system, Cold, Flu ",Respiratory Health
Vasakarista,Syrup,"Dry Cough, Sore throat ",Respiratory Health
Vapodrops+Cough,Chewable tablet,Cough,Respiratory Health
Diamine oxidase enzyme,Capsule &Tablet ,Histamine intolerance,Respiratory Health
"Purified water, honey, bulking agent (glycerine), sweetener (fructose), plant extracts: mallow flower (Malva sylvestris L.), Scots pine buds (Pinus sylvestris L.), whole plant sundew (Drosera rotundifolia L. ) and mullein leaves (Verbascum thapus L.), antioxidant (vitamin C), flavouring (raspberry flavouring), acidifier (citric acid), N-acetylcysteine, preservative (potassium sorbate), thickener (xanthan gum), manganese gluconate, copper gluconate.",Syrup,"Flu, common cold.",Respiratory Health
"Thyme extract 30 mg, Vitamin C 20 mg ",Capsule ,Cold and Flu,Respiratory Health
"Melatonin 3 mg, Vit B6 1.4 mg, Lavender 30 mg, Valerian 10 mg ",Gummy,Insomnia,Sleep
"GABA, Chamomile, Ca, Mg",Capsule &Tablet,Sleep Inducer,Sleep
Logan Flower Extract,Capsule ,Insomnia ,Sleep
"Sunactive Fe, Taiyo GmbH (Germany)",Capsule &Tablet,Sleep Inducer,Sleep
Liposomal Melatonin 5 mg,Capsule &Tablet,"Insomnia, Delayed Sleep Phase Disorder (DSPD)",Sleep 
Melatonin 1 & 2 mg (Zarbees),Chewable Tablet,"Insomnia, Delayed Sleep Phase Disorder (DSPD)",Sleep 
Ashwagandha 250 mg,Capsule &Tablet,"Stress and anxiety reliever, Improve cognitive function & Reduce Insomnia",Stress & anxiety 
CBD Isolate 30 mg,Gummy,"May reduce anxiety, improve sleep, and provide pain relief.",Stress & anxiety 
Mango leaf extract 200 & 400 mg ,Capsule ,Boost mental performance ,Stress & anxiety 
"Sodium 10 mg (<1% DV), Ashwagandha Extract 500 mg",Gummy,"Reduces stress, supports energy, improves mental focus",Stress & anxiety 
"Ashwagandha (Whitania somnifera) 125 mg, L-Theanine 200 mg  ",Capsule ,"Helps to reduce the symptoms of stress, fatigue, sleeplessness, inability to concentrate. ",Stress & anxiety 
Cantaloupe melon juice concentrate (rich in Superoxide Dismutase - SOD),Capsule,Provides antioxidant support; aids in stress management,Stress & anxiety 
"Standardized Asparagus (Asparagus officinalis) stem extract 200 mg, HMB 200 mg, Zinc 15 mg ",Capsule,Enhances stress response; promotes relaxation by inducing heat shock protein 70 (HSP70),Stress & anxiety 
"Ginger, L-Alanine, vitamin B1, B6, B12",Capsule &Tablet,Stress and anxiety,Stress & anxiety 
Cranberry 400 mg,Capsule,UTI,Uroprotective agents 
 Pumpkin Seed (Cucurbita pepo) extract (phenolic derivatives and adenosine),Capsule,Supports urinary health; reduces symptoms of BPH such as nocturia and urinary urgency,Uroprotective agents 
"Cranberry extract, D-Mannose, Hibiscus extract",Capsule ,UTI,Uroprotective agents 
Spirulina 500 mg,Capsule,"Prevention of Malnutrition, Diabetes",Vitamin & Minerals 
Moringa Powder,Capsule,"Antioxidant,reduce inflamation & pain",Vitamin & Minerals 
Calcifediol Monohydrate 10 mcg (Fast acting Vit-D3) Swisse,Capsule,"To fulfill Vitamin D deficiency, healthy bones & teeth, maintains immune system",Vitamin & Minerals 
45 Multivitamin for Men (Swisse),Tablet,"Men's Multivitamin to support Immune Health, Energy Production and Healthy Muscle Function",Vitamin & Minerals 
45 Multivitamin for Women (Swisse),Tablet,"Women's Multivitamin support Immune Health, Energy Production and Relieve Fatigue",Vitamin & Minerals 
Vitamin D3 + Vitamin K2 ,Capsule,Supoorts bone and cardiovascular health,Vitamin & Minerals 
Vitamin B12 6 mg + Caffeine 50 mg+ L- Theanine 30 mg (Nustrips) ,Sachet ,"Instant Energy, To boost productivity and Focus Alertness",Vitamin & Minerals 
"Folate 200 mcg DFE (120 mcg Folic Acid, 50% DV), Vitamin B12 (as Cyanocobalamin) 12 mcg (500% DV), Sodium 10 mg (<1% DV), Apple Cider Vinegar Powder 500 mg, Pomegranate Juice Powder 40 mcg, Beetroot Juice Powder 40 mcg",Gummy,Weight Management ,Vitamin & Minerals 
"Magnesium citrate 430 mg, Elementary magnesium 60 mg ",Gummy,Supports normal muscle and nerve function,Vitamin & Minerals 
"Mg citrate 17.5 mg, Vitamin B6, 1.05 mg, 5-HTP 1.25 mcg, L-theanine 20 mg ",Gummy,Post menopausal symptoms,Vitamin & Minerals 
"Vitamin A (as Retinyl Acetate) 150 mcg, Vitamin C (as Ascorbic Acid) 10 mg, Vitamin D2 (as Ergocalciferol) 2.5 mcg, Vitamin E (as DL-Alpha Tocopheryl Acetate) 3.33 mg, Vitamin B6 (as Pyridoxine HCl) 0.33 mg, Folate 67 mcg DFE (40 mcg Folic Acid), Vitamin B12 (as Cyanocobalamin) 1.67 mcg, Biotin 5 mcg, Pantothenic Acid (as Calcium Pantothenate) 1.67 mg, Iodine (as Potassium Iodide) 13 mcg, Zinc (as Zinc Citrate) 1.67 mg, Sodium 1.7 mg",Gummy,"Vitamin deficiency & weakness, Loss of appetite ",Vitamin & Minerals 
"Vitamin A (as Retinyl Acetate) 150 mcg, Vitamin C (as Ascorbic Acid) 15 mg, Vitamin D2 (as Ergocalciferol) 5 mcg, Vitamin E (as DL-Alpha Tocopheryl Acetate) 10 mg, Vitamin B6 (as Pyridoxine Hydrochloride) 1 mg, Folic Acid 200 mcg DFE (120 mcg Folic Acid), Vitamin B12 (as Cyanocobalamin) 5 mcg, Biotin 30 mcg, Pantothenic Acid (as Calcium Pantothenate) 2.5 mg, Iodine (as Potassium Iodide) 21 mcg, Zinc (as Zinc Citrate) 2.5 mg, Sodium 5 mg, Hyaluronic Acid 10 mg, Evening Primrose Oil 100 mcg",Gummy,"Vitamin deficiency & weakness, Loss of appetite ",Vitamin & Minerals 
"Vitamin A (as Retinyl Palmitate) 450 mcg, Vitamin C (as Ascorbic Acid) 22.5 mg, Vitamin D2 (as Ergocalciferol) 5 mcg, Vitamin E (as DL-Alpha Tocopheryl Acetate) 7.5 mg, Vitamin B6 (as Pyridoxine HCl) 1 mg, Folate 100 mcg DFE (60 mcg Folic Acid), Vitamin B12 (as Cyanocobalamin) 3.75 mcg, Biotin 15 mcg, Pantothenic Acid (as Calcium Pantothenate) 2.5 mg, Iodine (as Potassium Iodide) 19 mcg, Zinc (as Zinc Citrate) 2.5 mg, Sodium 2.5 mg",Gummy,"Vitamin & mineral deficiency, General weakness ",Vitamin & Minerals 
"Vitamin B1 1.1 mg, Vitamin B2 1.4 mg, Vitamin B3 16 mg, Vitamin B5 6 mg, Vitamin B6 1.4 mg, Vitamin B7 50 mcg, Vitamin B9 200 mcg, Vitamin B12 2.5 mcg.",Gummy,"Vitamin B deficiency, General weakness, Indigestion, Loss of appetite",Vitamin & Minerals 
Vitamin B12 500 mcg,Gummy,Peripheral neuropathic pain,Vitamin & Minerals 
"Vitamin C 20 mg, Zinc 1.5 mg, Hempseed oil 50 mg.",Gummy,"Supports skin health, heart health, and provides omega fatty acids.",Vitamin & Minerals 
"Vitamin D3 (as Cholecalciferol) 10 mcg, Calcium (as Calcium Lactate) 50 mg, Sodium 10 mg",Gummy,"Supports bone health, prevents osteoporosis, and maintains calcium absorption.",Vitamin & Minerals 
Vitamin D3 10 mg,Gummy,"Helps calcium absorption, supports bone and immune health.",Vitamin & Minerals 
"Vitamin D3 25 mcg, Vitamin K2 40 mcg",Gummy,"Helps calcium absorption, supports bone and immune health.",Vitamin & Minerals 
"Vitamin E (as DL-Alpha-Tocopheryl Acetate) 2.25 mg, Sodium 2.5 mg, Lutein 25 mg, β-Carotene Powder 25 mcg",Gummy,Healthy eye health ,Vitamin & Minerals 
"Zinc (as Zinc Citrate) 2.5 mg, Sodium 5 mg",Gummy,"Zinc deficiency, Loss of appetite ",Vitamin & Minerals 
"18-22 % Elemental zinc (Micronized & Microencapsulated)  Zincnova, Lubrizol, USA",Capsule & Gummy,"Strengthens body defense, reduces infection risk, prevents hair loss and brittle nails",Vitamin & Minerals 
"30-34% elemental Mg (Micronized & Microencapsulated)  Megshape, Lubrizol, USA",Capsule & Gummy,"Alleviates Fatigue, Provides vitality & stress relief ",Vitamin & Minerals 
4 oil lipid injectables emulsion (ILE) 500ml ,IV infusion ,Sources of calories & fatty acid in pediatric patients,Vitamin & Minerals 
"50-60 % Caffeine (Micronized & Microencapsulated), Newcaff, Lubrizol, USA",Capsule & Gummy,"Boosts Physical Performance, Improves Mental Alertness and Focuses ",Vitamin & Minerals 
"Calcium citrate 650 mg, Vitamin D3 25 mcg (1000 IU), Zinc 5.5 mg, Copper 0.45 mg, Manganese 1.15 mg, Sodium 5 mg ",Caplets ,"Prevention and treatment of osteoporosis, To maintain strong bone growth",Vitamin & Minerals 
"Coral Calcium 500 mg, Vitamin D3 200 IU ",Capsule ,For the treatment & prevention of Osteoporosis & Osteomalacia,Vitamin & Minerals 
Fish oil triglycerides 5g/50 ml & 10 g/100 ml,IV infusion ,Sources of calories & fatty acid in pediatric patients,Vitamin & Minerals 
Liposomal Vitamin D3 Suspension,Suspension,"To fulfill Vitamin-D deficiency, Osteoporosis",Vitamin & Minerals 
"Sugar, Dextrose, Sodium Chloride, Sodium Citrate, Potassium Chloride, Malic Acid ",Sachet,"Replenish lost fluids and electrolytes, Hydration ",Vitamin & Minerals 
"Vitamin A — 200 µg, Vitamin D — 26 µg, Vitamin E — 8.0 mg
Vitamin B6 — 1.4 mg, Vitamin B12 — 5.0 µg, Biotin (Vitamin B7) — 100 µg, Vitamin C — 160 mg, Zinc — 2.0 mg (supradyn)",Capsule ,Improves immune functions. ,Vitamin & Minerals 
"Vitamin B5 — 3 mg, Vitamin B6 — 2 mg, Vitamin B2 — 1.1 mg, Vitamin B1 — 1 mg, Vitamin A (as 20% β‑carotene) — 2100 µg, Folic Acid (Vitamin B9) — 100 µg, Biotin — 30 µg, Vitamin K — 25 µg, Vitamin D2 — 10 µg, Calcium — 100 mg, Magnesium — 50 mg, Potassium — 40 mg, Chloride — 36 mg, Iron — 17 mg, Zinc — 10 mg, Manganese — 4 mg, Copper — 1.35 mg, Iodine — 110 µg, Selenium — 40 µg, Chromium — 33 µg, Asparagus racemosus (Shatavari) Extract — 50 mg, Saraca indica (Ashoka) Extract — 50 mg, Ocimum sanctum (Tulsi) Extract — 50 mg, Curcuma longa (Turmeric) Extract — 25 mg, L‑Lysine Hydrochloride — 50 mg, Inositol — 25 mg, Glutathione — 25 mg",Capsule ,Support iron levels and reduce symptoms of fatigue and tiredness.,Vitamin & Minerals 
"Vitamin C — 40 mg, Vitamin B3 (Niacin) — 12 mg, Vitamin E — 10 mg, Vitamin B5 — 3 mg, Vitamin B6 — 2 mg, Vitamin B2 — 1.1 mg, Vitamin B1 — 1 mg, Provitamin A (as β-carotene) — 2100 mcg, Folic Acid — 100 mcg, Biotin — 30 mcg, Vitamin K — 25 mcg, Vitamin D2 — 10 mcg, Calcium — 100 mg, Magnesium — 50 mg, Potassium — 40 mg, Chloride — 36 mg, Iron — 17 mg, Zinc — 10 mg, Manganese — 4 mg, Copper — 1.35 mg, Iodine — 110 mcg, Selenium — 40 mcg, Chromium — 33 mcg , Asparagus racemosus (Shatavari) Extract — 50 mg, Saraca indica (Ashoka) Extract — 50 mg, Ocimum sanctum (Tulsi) Extract — 50 mg Curcuma longa (Turmeric) Extract — 25 mg, L-Lysine Hydrochloride — 50 mg, Inositol — 25 mg, Glutathione — 25 mg Vitamin C — 40 mg, Vitamin E — 10 mg, Vitamin B3 (Niacin) — 12 mg (Supradyn)",Capsule ,Support the immune system and natural defenses,Vitamin & Minerals 
"Vitamin C — 80 mg, Niacin (Vitamin B3) — 16 mg, Vitamin E — 12 mg
Pantothenic acid (Vitamin B5) — 6 mg, Vitamin B6 — 1.4 mg, Riboflavin (Vitamin B2) — 1.4 mg, Thiamine (Vitamin B1) — 1.1 mg, Vitamin A — 800 µg, Folic acid (Vitamin B9) — 200 µg, Biotin — 50 µg, Vitamin K — 25 µg, Vitamin D — 5 µg, Vitamin B12 — 2.5 µg, Calcium — 120 mg, Magnesium — 80 mg, Iron — 14 mg, Zinc — 10 mg, Manganese —2 mg
Copper — 1 mg, Iodine — 150 µg, Selenium — 50 µg, Molybdenum — 50 µg, Coenzyme Q10 — 4.5 mg (Supradyn)",Capsule ,"Support Energy metabolism, Reduces tiredness and fatigue. ",Vitamin & Minerals 
Vitamin D3 1000IU (as cholecalciferol 25 mcg) ,Soft gel Capsule ,"Supports Bone, Teeth, Muscle and Immune Health ",Vitamin & Minerals 
Mulberry Leaf Extract 250 mg ,Capsule,Blood sugar control & weight management for diabetes,Weight Management 
"Corn silk extract, lemon balm extract, Red vine extract, Eucommia leaf extract, Medium chain triglycerides (Belli lean, LAC)",Sachet,"Lose belly fat, Enhance fat metabolism ",Weight Management 
Cut & Burn ,Capsule,"Increase calorie burn, Boost metabolism & energy , Suppresses appetite ",Weight Management 
Extract of white mulberry (Morus alba) leaf,Capsule,Helps to reduce postprandial glycaemia and limit insulin peaks,Weight Management 
Deglusterol,Sachet,"Type-2 DM, Prediabetes",Weight Management 
Evening Primrose 500 mg & 1000 mg,Capsule,"PMS symptoms, Nerve damage by diabetes, Osteoporosis",Women's health 
Celery Seed Extract 250 mg,Capsule,"Joint Pain, Menstrual Cramps ",Women's health 
30 Ultivite Optiwomen’s Multivitamin                                      ,Tablet,Female wellbeing,Women's health 
Myo-inositol 500 mg  ,Capsule ,"PCOS, PCOS associated symptoms, Infertility ",Women's health 
Soy lecithin 1200 mg ,Capsule ,"Lowering cholestreol, Treating PMS",Women's health 
GI Natural Probiotic women ,Capsule,UTI & Vaginal candida,Women's health 
Hops extract standardized to prenylflavonoids,Capsule,Alleviates menopausal symptoms such as hot flashes and supports bone health.,Women's health 
Pollen extract 290 mg & saffron extract 30 mg,Capsule,"Improves female hormonal balance during menopause, improves lubrication & orgasm ",Women's health 
"Fenugreek seed extract, L-arginine, Niacinamide, Evening Primrose oil",Micro pellets in oil technology,"Hot flashes, Night sweat, Vaginal lubrication",Women's health 
"Palmitoylethanolamide, Rosa Damascena Oil",Micro pellets in oil technology,"Menstrual pain, PMS, Period mood comfort",Women's health 
"Brumex 200 mg, Nopalls 150 mg, Phytosterols 400 mg, Vitamin b1 12.5 mg",Capsule/Sachet,"Reduces cholesterol, Support for energy metabolism and heart function",Cardiovascular well being
MCT Oil Powder 1000 mg,Capsule ,Source of calorie & essential fatty acid,Energy 
Creatine Monohydrate 1.5 gm,Capsule,Improving exercise performance and muscle strength,Muscle supports &  recovery 
Dextrose (Like Demosana),Chewable tablet,Sweetener as glucose that the body can quickly use for energy,Energy
Elixir Drink (Lactose free and Sucrose free),Sachet,"Nutritional support in cancer cachexia, COPD, critical illness",Clinical Nutritional Supplemet`;

function parseCSV(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const products = [];

    // Simplistic CSV parser (splitting by comma but handling quotes)
    // Actually handling quotes is hard with simple split. I'll use a regex.
    const regex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const cols = line.split(regex).map(c => c.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));

        if (cols.length < 3) continue;

        const name = cols[0];
        const form = cols[1];
        const indication = cols[2];
        const therapeuticClass = cols[3] || 'General Health';

        products.push({
            name,
            form,
            indication,
            therapeuticClass
        });
    }
    return products;
}

const parsed = parseCSV(rawCsv);

// Map to TypeScript format
const tsOutput = parsed.map((p, index) => {
    const slug = p.name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

    const needs = [p.therapeuticClass.trim()];
    // Add variations if needed (e.g. Bones & Joint -> Bone & Joints)

    // Placeholder image logic
    let imageIndex = index % 4;

    // Basic benefits/tagline derivation
    const tagline = p.indication.split(',')[0].substring(0, 50) + (p.indication.length > 50 ? '...' : '');
    const benefits = p.indication.split(/,|&|;/).map(b => b.trim()).filter(b => b.length > 0);

    return {
        id: \`p\${index + 1}\`,
        slug,
        name: p.name,
        tagline: tagline, // Truncate or use indication
        description: \`\${p.name} is a premium \${p.therapeuticClass} supplement designed to support your health. Indicated for: \${p.indication}.\`,
        price: Math.floor(Math.random() * (2500 - 500) + 500), // Random price 500-2500
        rating: (4 + Math.random()).toFixed(1), // Random rating 4.0-5.0
        reviews: Math.floor(Math.random() * 50) + 5,
        image: \`getPlaceholderImage(\${imageIndex})\`,
        format: p.form.split(' ')[0] || 'Capsule', // Take first word or default
        needs: JSON.stringify(needs),
        portfolio: 'Nutraceuticals', // Defaulting for now
        ingredients: JSON.stringify([p.name.split(' ')[0]]), // Use first word of name as main ingredient
        benefits: JSON.stringify(benefits),
        usage: 'Take as directed by a healthcare professional.',
    };
});

console.log(JSON.stringify(tsOutput, null, 2));
