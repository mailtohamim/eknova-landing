import { Product } from '@/types/product';

// Helper to assign random images from our limited set
const getPlaceholderImage = (index: number) => {
    // User requested to use this specific mockup for all products
    return '/images/products/Eknova product sample mockup.png';
};

export const products: Product[] = [
    // --- HERBAL PORTFOLIO ---
    {
        id: 'h1', slug: 'psyllium-husk-700mg-capsule', name: 'Psyllium Husk 700 mg',
        tagline: 'Natural Digestive Support', description: 'Effective relief for constipation and natural support for healthy cholesterol levels.',
        price: 950, rating: 4.5, reviews: 12, image: getPlaceholderImage(0), format: 'Capsules',
        needs: ['Laxative', 'Gut', 'Cardiovascular well being'], portfolio: 'Herbal',
        ingredients: ['Psyllium Husk 700 mg'], benefits: ['Promotes regularity', 'Heart health'], usage: 'Take 1-2 capsules daily.'
    },
    {
        id: 'h2', slug: 'psyllium-husk-120g', name: 'Psyllium Husk 120g',
        tagline: 'Daily Fiber Power', description: 'Pure powder format for versatile daily fiber intake. Supports constipation relief and cholesterol management.',
        price: 1250, rating: 4.6, reviews: 8, image: getPlaceholderImage(1), format: 'Powder',
        needs: ['Laxative', 'Gut', 'Cardiovascular well being'], portfolio: 'Herbal',
        ingredients: ['Psyllium Husk Powder'], benefits: ['High fiber source', 'Digestive health'], usage: 'Mix 1 scoop with water.'
    },
    {
        id: 'h3', slug: 'psyllium-husk-sachet', name: 'Psyllium Husk 3.5 gm',
        tagline: 'On-the-Go Fiber', description: 'Convenient sachets for constipation relief and digestive health anywhere.',
        price: 450, rating: 4.7, reviews: 5, image: getPlaceholderImage(2), format: 'Sachets',
        needs: ['Laxative', 'Gut'], portfolio: 'Herbal',
        ingredients: ['Psyllium Husk 3.5 gm'], benefits: ['Travel friendly', 'Gentle relief'], usage: 'Mix 1 sachet with water.'
    },
    {
        id: 'h4', slug: 'bioperine-5mg', name: 'Bioperine 5 mg',
        tagline: 'Bioavailability Enhancer', description: 'Clinically proven to enhance the absorption and bioavailability of other nutrients and supplements.',
        price: 700, rating: 4.8, reviews: 20, image: getPlaceholderImage(3), format: 'Capsules',
        needs: ['Bioavailability inducer'], portfolio: 'Herbal',
        ingredients: ['Bioperine 5 mg'], benefits: ['Maximizes absorption', 'Potent extract'], usage: 'Take with other supplements.'
    },
    {
        id: 'h5', slug: 'shilajit-500mg', name: 'Shilajit 500 mg',
        tagline: 'Himalayan Strength', description: 'Sourced from the Himalayas. Improves athletic performance, male fertility, muscle strength, and supports cognitive health.',
        price: 1800, rating: 4.9, reviews: 45, image: getPlaceholderImage(0), format: 'Capsules',
        needs: ["Men's health", 'Energy', 'Muscle supports & recovery', 'Brain health'], portfolio: 'Herbal',
        ingredients: ['Shilajit 500 mg'], benefits: ['Boosts testosterone', 'Enhances stamina', 'Bone health'], usage: 'Take 1 capsule daily.'
    },
    {
        id: 'h6', slug: 'tongkat-ali-400mg', name: 'Tongkat Ali 400 mg',
        tagline: 'Peak Male Performance', description: 'Supports healthy testosterone levels, male fertility, and vitality.',
        price: 1900, rating: 4.7, reviews: 30, image: getPlaceholderImage(1), format: 'Capsules',
        needs: ["Men's health"], portfolio: 'Herbal',
        ingredients: ['Tongkat Ali 400 mg'], benefits: ['Libido support', 'Energy booster'], usage: 'Take 1 capsule daily.'
    },
    {
        id: 'h7', slug: 'ashwagandha-250mg', name: 'Ashwagandha 250 mg',
        tagline: 'Stress & Anxiety Relief', description: 'Adaptogenic herb to reduce stress, improve cognitive function, and combat insomnia.',
        price: 900, rating: 4.6, reviews: 50, image: getPlaceholderImage(2), format: 'Capsules',
        needs: ['Stress & anxiety', 'Brain health', 'Sleep'], portfolio: 'Herbal',
        ingredients: ['Ashwagandha 250 mg'], benefits: ['Calms mind', 'Restful sleep'], usage: 'Take 1-2 daily.'
    },
    {
        id: 'h8', slug: 'curcuminoids-500mg', name: 'Curcuminoids USP 500 mg',
        tagline: 'Active Turmeric Power', description: 'Potent antioxidant and anti-inflammatory support for joint health and immunity.',
        price: 1350, rating: 4.8, reviews: 25, image: getPlaceholderImage(3), format: 'Capsules',
        needs: ['Bone & Joints', 'Immunomodulator'], portfolio: 'Herbal',
        ingredients: ['Curcuminoids 500 mg'], benefits: ['Joint flexibility', 'Inflammation response'], usage: 'Take 1 capsule daily.'
    },
    {
        id: 'h9', slug: 'respiratory-soothe', name: 'Respiratory Soothe Blend',
        tagline: 'Clear & Soothe', description: 'Blend of Terminalia chebula, Licorice, and Pepper to soothe sore throats and act as an antitussive.',
        price: 600, rating: 4.5, reviews: 15, image: getPlaceholderImage(0), format: 'Chewables',
        needs: ['Respiratory health'], portfolio: 'Herbal',
        ingredients: ['Terminalia chebula', 'Glycyrrhiza glabra', 'Piper nigrum'], benefits: ['Relieves cough', 'Throat comfort'], usage: 'Chew 1 tablet as needed.'
    },
    {
        id: 'h10', slug: 'boswellia-complex', name: 'Boswellia Complex',
        tagline: 'Advanced Joint Care', description: 'Supports relief from arthritis, gout, spondylosis, and frozen shoulder.',
        price: 1100, rating: 4.6, reviews: 18, image: getPlaceholderImage(1), format: 'Capsules',
        needs: ['Bone & Joints', 'Pain reliever'], portfolio: 'Herbal',
        ingredients: ['Boswellia', 'Indian Bdellium'], benefits: ['Joint mobility', 'Pain reduction'], usage: 'Take 1 capsule twice daily.'
    },
    {
        id: 'h11', slug: 'sexual-vitality', name: 'Velvet Bean complex',
        tagline: 'Intimacy Support', description: 'Formulated with Cowhage (Velvet Bean) to improve sexual performance and vitality.',
        price: 1500, rating: 4.4, reviews: 10, image: getPlaceholderImage(2), format: 'Tablets',
        needs: ["Men's health"], portfolio: 'Herbal',
        ingredients: ['Cowhage (Velvet Bean)', 'Small Caltrops'], benefits: ['Performance boost', 'Vitality'], usage: 'Take 1 tablet daily.'
    },
    {
        id: 'h12', slug: 'joint-flex-powder', name: 'Joint Flex Powder',
        tagline: 'Complete Joint Nutrition', description: 'Comprehensive blend with Glucosamine, Chondroitin, MSM, and Hyaluronic Acid for joint lubrication and repair.',
        price: 2200, rating: 4.9, reviews: 35, image: getPlaceholderImage(3), format: 'Sachets',
        needs: ['Bone & Joints'], portfolio: 'Herbal',
        ingredients: ['Glucosamine', 'Chondroitin', 'MSM', 'Hyaluronic Acid'], benefits: ['Cartilage repair', 'Lubrication'], usage: 'Mix 1 sachet daily.'
    },
    {
        id: 'h13', slug: 'spirulina-500mg', name: 'Spirulina 500 mg',
        tagline: 'Green Superfood', description: 'Nutrient-dense superfood for malnutrition prevention and diabetes support.',
        price: 850, rating: 4.7, reviews: 60, image: getPlaceholderImage(0), format: 'Capsules',
        needs: ['Vitamin & minerals', 'Energy', 'Clinical nutritional supplement'], portfolio: 'Herbal',
        ingredients: ['Spirulina 500 mg'], benefits: ['Complete protein', 'Blood sugar support'], usage: 'Take 2-4 capsules daily.'
    },
    {
        id: 'h14', slug: 'd-chiro-inositol', name: 'D-Chiro Inositol 500 mg',
        tagline: 'PCOS Balance', description: 'Targeted support for PCOS management and hormonal balance.',
        price: 2100, rating: 4.8, reviews: 40, image: getPlaceholderImage(1), format: 'Capsules',
        needs: ['Pre-conception Pregnancy & conception', "women Health"], portfolio: 'Herbal',
        ingredients: ['D-Chiro Inositol 500 mg'], benefits: ['Hormonal health', 'Insulin regulation'], usage: 'Take 1 capsule daily.'
    },
    {
        id: 'h15', slug: 'inositol-complex', name: 'Myo & D-Chiro Inositol',
        tagline: 'Advanced PCOS Care', description: 'Combined Myo-Inositol and D-Chiro Inositol for optimal ovarian function and PCOS support.',
        price: 2400, rating: 4.9, reviews: 55, image: getPlaceholderImage(2), format: 'Tablets',
        needs: ['Pre-conception Pregnancy & conception', "women Health"], portfolio: 'Herbal',
        ingredients: ['Myo Inositol 500 mg', 'D-Chiro Inositol 150 mg'], benefits: ['Fertility support', 'Cycle regularity'], usage: 'Take 1 tablet twice daily.'
    },
    {
        id: 'h16', slug: 'nag-capsule', name: 'N-Acetyl Glucosamine',
        tagline: 'Gut & Joint Health', description: 'Supports Osteoarthritis management and Inflammatory Bowel Disease (IBD).',
        price: 1600, rating: 4.6, reviews: 20, image: getPlaceholderImage(3), format: 'Capsules',
        needs: ['Bone & Joints', 'Gut'], portfolio: 'Herbal',
        ingredients: ['N-Acetyl Glucosamine'], benefits: ['Joint structure', 'Gut lining support'], usage: 'Take 1 capsule daily.'
    },
    {
        id: 'h17', slug: 'mulberry-leaf', name: 'Mulberry Leaf Extract',
        tagline: 'Carb Control', description: 'Supports blood sugar control and weight management by blocking carb absorption.',
        price: 1100, rating: 4.5, reviews: 15, image: getPlaceholderImage(0), format: 'Capsules',
        needs: ['weight management', 'Clinical nutritional supplement'], portfolio: 'Herbal',
        ingredients: ['Mulberry Leaf Extract 250 mg'], benefits: ['Glucose levels', 'Weight support'], usage: 'Take before meals.'
    },
    {
        id: 'h18', slug: 'moringa-powder', name: 'Moringa Superfood Powder',
        tagline: 'Miracle Leaf', description: 'Packed with antioxidants to reduce inflammation, pain, and boost energy.',
        price: 900, rating: 4.7, reviews: 30, image: getPlaceholderImage(1), format: 'Powder',
        needs: ['Vitamin & minerals', 'Pain reliever', 'Energy'], portfolio: 'Herbal',
        ingredients: ['Moringa Powder'], benefits: ['Nutrient rich', 'Anti-inflammatory'], usage: 'Add to smoothies or water.'
    },
    {
        id: 'h19', slug: 'ginkgo-biloba', name: 'Ginkgo Biloba 120 mg',
        tagline: 'Cognitive Clarity', description: 'Enhances memory, supports vertigo and tinnitus relief.',
        price: 1300, rating: 4.6, reviews: 25, image: getPlaceholderImage(2), format: 'Capsules',
        needs: ['Brain health', 'Nootropics'], portfolio: 'Herbal',
        ingredients: ['Ginkgo Biloba 120 mg'], benefits: ['Memory focus', 'Circulation'], usage: 'Take 1 capsule daily.'
    },
    {
        id: 'h20', slug: 'evening-primrose', name: 'Evening Primrose 1000 mg',
        tagline: 'Hormonal Harmony', description: 'Relieves PMS symptoms, supports nerve health in diabetes, and bone density.',
        price: 1200, rating: 4.8, reviews: 45, image: getPlaceholderImage(3), format: 'Capsules',
        needs: ["women Health", 'Pain reliever'], portfolio: 'Herbal',
        ingredients: ['Evening Primrose Oil 1000 mg'], benefits: ['PMS relief', 'Skin health'], usage: 'Take 1 capsule daily.'
    },
    {
        id: 'h21', slug: 'cranberry-uti', name: 'Cranberry Extract 400 mg',
        tagline: 'Urinary Defense', description: 'Supports urinary tract health and prevents UTIs.',
        price: 1400, rating: 4.9, reviews: 60, image: getPlaceholderImage(0), format: 'Capsules',
        needs: ['Uroprotective', "women Health"], portfolio: 'Herbal',
        ingredients: ['Cranberry Extract 400 mg'], benefits: ['UTI prevention', 'Antioxidant'], usage: 'Take 1 capsule daily.'
    },
    {
        id: 'h22', slug: 'celery-seed', name: 'Celery Seed Extract',
        tagline: 'Joint & Cycle Comfort', description: 'Natural relief for joint pain and menstrual cramps.',
        price: 950, rating: 4.5, reviews: 10, image: getPlaceholderImage(1), format: 'Capsules',
        needs: ["women Health", 'Pain reliever'], portfolio: 'Herbal',
        ingredients: ['Celery Seed Extract 250 mg'], benefits: ['Cramp relief', 'Joint support'], usage: 'Take as needed.'
    },

    // --- NUTRACEUTICAL PORTFOLIO ---
    {
        id: 'n1', slug: 'daily-probiotics-35b', name: 'Daily Digestive Probiotics 35B',
        tagline: 'High-Potency Flora', description: 'Supports gastrointestinal health and restores natural gut flora.',
        price: 2800, rating: 4.9, reviews: 80, image: getPlaceholderImage(2), format: 'Capsules',
        needs: ['Gut', 'Immunomodulator'], portfolio: 'Nutraceuticals',
        ingredients: ['Probiotic Blend 35 Billion CFU'], benefits: ['Gut restoration', 'Immunity'], usage: 'Take 1 capsule daily.'
    },
    {
        id: 'n2', slug: 's-boulardii-5b', name: 'S. Boulardii 5 Billion',
        tagline: 'Antibiotic Support', description: 'Probiotic yeast to reduce diarrhea and maintain flora during antibiotic use.',
        price: 1500, rating: 4.8, reviews: 35, image: getPlaceholderImage(3), format: 'Capsules',
        needs: ['Gut'], portfolio: 'Nutraceuticals',
        ingredients: ['Saccharomyces boulardii 0.5 Billion'], benefits: ['Antibiotic care', 'Diarrhea relief'], usage: 'Take during antibiotic course.'
    },
    {
        id: 'n3', slug: 'orthogen-joint', name: 'Undenatured Collagen II Complex',
        tagline: 'Advanced Joint Structure', description: 'Superior support for aging joints with Type II Collagen, Glucosamine, and Boswellia.',
        price: 2300, rating: 4.7, reviews: 22, image: getPlaceholderImage(0), format: 'Tablets',
        needs: ['Bone & Joints'], portfolio: 'Nutraceuticals',
        ingredients: ['Undenatured Collagen II', 'Glucosamine', 'Boswellia', 'Boron'], benefits: ['Joint longevity', 'Flexibility'], usage: 'Take 1 tablet daily.'
    },
    {
        id: 'n4', slug: 'fast-vit-d3', name: 'Calcifediol Vitamin D3',
        tagline: 'Fast-Acting D3', description: 'Rapidly fulfills Vitamin D deficiency for healthy bones, teeth, and immune system.',
        price: 800, rating: 4.9, reviews: 90, image: getPlaceholderImage(1), format: 'Capsules',
        needs: ['Vitamin & minerals', 'Bone & Joints', 'Immunomodulator'], portfolio: 'Nutraceuticals',
        ingredients: ['Calcifediol Monohydrate 10 mcg'], benefits: ['Rapid absorption', 'Immune boost'], usage: 'Take 1 daily.'
    },
    {
        id: 'n5', slug: 'mag-glycinate', name: 'Magnesium Glycinate 120 mg',
        tagline: 'Gentle Magnesium', description: 'Highly absorbable form to support osteoporosis, migraines, depression, and deficiency.',
        price: 1200, rating: 4.8, reviews: 65, image: getPlaceholderImage(2), format: 'Capsules',
        needs: ['Bone & Joints', 'Brain health'], portfolio: 'Nutraceuticals',
        ingredients: ['Magnesium Glycinate 120 mg'], benefits: ['Muscle relaxation', 'Headache relief'], usage: 'Take 1-2 daily.'
    },
    {
        id: 'n6', slug: 'mens-multi', name: '45+ Multivitamin for Men',
        tagline: 'Men\'s Prime', description: 'Comprehensive male multivitamin to support immune health, energy, and muscle function.',
        price: 2100, rating: 4.8, reviews: 40, image: getPlaceholderImage(3), format: 'Tablets',
        needs: ["Men's health", 'Energy', 'Vitamin & minerals'], portfolio: 'Nutraceuticals',
        ingredients: ['Multivitamin Complex'], benefits: ['Vitality', 'Muscle function'], usage: 'Take 1 tablet daily.'
    },
    {
        id: 'n7', slug: 'womens-multi', name: '45+ Multivitamin for Women',
        tagline: 'Women\'s Radiance', description: 'Tailored for women to support immune health, energy production, and relieve fatigue.',
        price: 2100, rating: 4.8, reviews: 45, image: getPlaceholderImage(0), format: 'Tablets',
        needs: ["women Health", 'Energy', 'Vitamin & minerals'], portfolio: 'Nutraceuticals',
        ingredients: ['Multivitamin Complex'], benefits: ['Fatigue relief', 'Radiance'], usage: 'Take 1 tablet daily.'
    },
    {
        id: 'n8', slug: 'pregnancy-vitamin', name: 'Pregnancy Complex',
        tagline: 'Maternal Care', description: 'Complete vitamin & mineral support for pregnancy and conception.',
        price: 2400, rating: 4.9, reviews: 50, image: getPlaceholderImage(1), format: 'Tablets',
        needs: ['Pre-conception Pregnancy & conception', 'Vitamin & minerals'], portfolio: 'Nutraceuticals',
        ingredients: ['Prenatal Vitamins'], benefits: ['Fetal development', 'Maternal health'], usage: 'Take 1 daily.'
    },
    {
        id: 'n9', slug: 'd3-k2-complex', name: 'Vitamin D3 + K2',
        tagline: 'Bone & Heart Duo', description: 'Synergistic blend for optimal bone density and cardiovascular health.',
        price: 1300, rating: 4.8, reviews: 30, image: getPlaceholderImage(2), format: 'Capsules',
        needs: ['Vitamin & minerals', 'Bone & Joints', 'Cardiovascular well being'], portfolio: 'Nutraceuticals',
        ingredients: ['Vitamin D3', 'Vitamin K2'], benefits: ['Calcium direction', 'Artery health'], usage: 'Take 1 daily.'
    },
    {
        id: 'n10', slug: 'immune-triad', name: 'Vitamin C + D + Zinc',
        tagline: 'Immunity Shield', description: 'Powerful trio to increase immunity and support wound healing.',
        price: 700, rating: 4.9, reviews: 100, image: getPlaceholderImage(3), format: 'Tablets',
        needs: ['Immunomodulator', 'Vitamin & minerals'], portfolio: 'Nutraceuticals',
        ingredients: ['Vitamin C 500mg', 'Vitamin D 1000IU', 'Zinc 30mg'], benefits: ['Infection resistance', 'Healing'], usage: 'Take 1 daily.'
    },
    {
        id: 'n11', slug: 'omega3-1800mg', name: 'Omega 3 Max 1800 mg',
        tagline: 'Heart Health Essential', description: '4X Strength Fish Oil to help lower triglyceride levels.',
        price: 2600, rating: 4.8, reviews: 55, image: getPlaceholderImage(0), format: 'Capsules',
        needs: ['Cardiovascular well being'], portfolio: 'Nutraceuticals',
        ingredients: ['Omega 3 Triglycerides 1800 mg'], benefits: ['Heart health', 'Brain function'], usage: 'Take 1 capsule daily.'
    },
    {
        id: 'n12', slug: 'liposomal-c', name: 'Liposomal Vitamin C',
        tagline: 'Bioactive C', description: 'Non-acidic 1000mg Vitamin C for enhanced collagen synthesis and absorption.',
        price: 1700, rating: 4.7, reviews: 20, image: getPlaceholderImage(1), format: 'Sachets',
        needs: ['Immunomodulator', 'Beauty Supplement'], portfolio: 'Nutraceuticals',
        ingredients: ['Liposomal Vitamin C 1000 mg'], benefits: ['Collagen boost', 'Gentle on stomach'], usage: 'Mix 1 sachet daily.'
    },
    {
        id: 'n13', slug: 'energy-nustrips', name: 'Energy Nustrips',
        tagline: 'Instant Focus', description: 'Vitamin B12 + Caffeine + L-Theanine for instant energy, productivity, and alertness.',
        price: 600, rating: 4.6, reviews: 15, image: getPlaceholderImage(2), format: 'Sachets',
        needs: ['Energy', 'Brain health'], portfolio: 'Nutraceuticals',
        ingredients: ['Vitamin B12', 'Caffeine', 'L-Theanine'], benefits: ['No crash energy', 'Mental alert'], usage: 'Take 1 sachet as needed.'
    },
    {
        id: 'n14', slug: 'zinc-picolinate', name: 'Zinc Picolinate',
        tagline: 'Immune Zinc', description: 'Highly absorbable zinc for immune defense and deficiency correction.',
        price: 550, rating: 4.7, reviews: 25, image: getPlaceholderImage(3), format: 'Tablets',
        needs: ['Immunomodulator', 'Vitamin & minerals'], portfolio: 'Nutraceuticals',
        ingredients: ['Zinc Picolinate'], benefits: ['Immunity', 'Skin health'], usage: 'Take 1 daily.'
    },
    {
        id: 'n15', slug: 'sleep-gummies', name: 'Melatonin Sleep Gummies',
        tagline: 'Sweet Dreams', description: 'With Lavender and Valerian to relieve insomnia and support restful sleep.',
        price: 1200, rating: 4.7, reviews: 60, image: getPlaceholderImage(0), format: 'Gummies',
        needs: ['Sleep', 'Stress & anxiety'], portfolio: 'Herbal',
        ingredients: ['Melatonin 3mg', 'Lavender', 'Valerian'], benefits: ['Faster sleep', 'Relaxation'], usage: 'Chew 1-2 before bed.'
    },
    {
        id: 'n16', slug: 'acv-gummies', name: 'Apple Cider Vinegar Gummies',
        tagline: 'Metabolism Boost', description: 'Weight management support with the benefits of ACV plus Folate and B12.',
        price: 1400, rating: 4.5, reviews: 40, image: getPlaceholderImage(1), format: 'Gummies',
        needs: ['weight management', 'Detox'], portfolio: 'Nutraceuticals',
        ingredients: ['Apple Cider Vinegar', 'Folate', 'Vitamin B12'], benefits: ['Metabolism', 'Detox'], usage: 'Chew 2 daily.'
    },
    {
        id: 'n17', slug: 'beauty-gummies', name: 'Hair, Skin & Nails Gummies',
        tagline: 'Glow Up', description: 'Biotin, Collagen, and Vitamins to strengthen hair, skin, and nails.',
        price: 1500, rating: 4.8, reviews: 70, image: getPlaceholderImage(2), format: 'Gummies',
        needs: ['Beauty Supplement'], portfolio: 'Nutraceuticals',
        ingredients: ['Biotin', 'Collagen', 'Vitamin C'], benefits: ['Radiant skin', 'Strong nails'], usage: 'Chew 2 daily.'
    },
    {
        id: 'n18', slug: 'turmeric-gummies', name: 'Turmeric Gummies',
        tagline: 'Joint Comfort', description: 'Turmeric extract with Black Pepper for enhanced absorption and joint health.',
        price: 1300, rating: 4.6, reviews: 30, image: getPlaceholderImage(3), format: 'Gummies',
        needs: ['Bone & Joints', 'Pain reliever'], portfolio: 'Herbal',
        ingredients: ['Turmeric Extract', 'Black Pepper'], benefits: ['Anti-inflammatory', 'Mobility'], usage: 'Chew 2 daily.'
    },
    {
        id: 'n19', slug: 'respiratory-gummies', name: 'Immune & Respiratory Gummies',
        tagline: 'Breathe Easy', description: 'Manuka Honey and Sodium to support immune system during cold and flu.',
        price: 1350, rating: 4.7, reviews: 25, image: getPlaceholderImage(0), format: 'Gummies',
        needs: ['Respiratory health', 'Immunomodulator'], portfolio: 'Herbal',
        ingredients: ['Manuka Honey', 'Sodium'], benefits: ['Throat soothe', 'Immune support'], usage: 'Chew 2 daily.'
    },
    {
        id: 'n20', slug: 'kid-probiotic-drop', name: 'L. Reuteri Drops',
        tagline: 'Baby Gut Health', description: 'Probiotic drops for infantile colic, digestive discomfort, and diarrhea.',
        price: 1800, rating: 4.9, reviews: 20, image: getPlaceholderImage(1), format: 'Drops',
        needs: ['Gut', 'Kids health'], portfolio: 'Nutraceuticals',
        ingredients: ['Lactobacillus reuteri'], benefits: ['Colic relief', 'Gut balance'], usage: 'Use as directed.'
    }
];

export const CATEGORIES = [
    "Antiviral", "Beauty Supplement", "Bioavailability inducer", "Bone & Joints", "Brain health",
    "Cardiovascular well being", "Clinical nutritional supplement", "Detox", "Energy", "Eye health",
    "Gut", "Hematinic", "Immunomodulator", "Kids health", "Liver health", "Men's health",
    "Muscle supports & recovery", "Nephroprotective", "Nootropics", "Oral health", "Pain reliever",
    "Pre-conception Pregnancy & conception", "Respiratory health", "Sleep", "Stress & anxiety",
    "Uroprotective", "Vitamin & minerals", "weight management", "women Health"
];

export const FORMATS = [
    "Capsules", "Tablets", "Sachets", "Gummies", "Chewables", "Powder", "Liquid", "Syrup", "Drops", "Softgel"
];
