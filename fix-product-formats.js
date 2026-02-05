const fs = require('fs');
const path = 'lib/data/products.ts';

let content = fs.readFileSync(path, 'utf8');

const replacements = [
    { from: /format: 'Capsule',/g, to: "format: 'Capsules'," },
    { from: /format: 'Capsule,',/g, to: "format: 'Capsules'," },
    { from: /format: 'Soft',/g, to: "format: 'Softgel'," },
    { from: /format: 'Micro',/g, to: "format: 'Micro pellets'," },
    { from: /format: 'Soy',/g, to: "format: 'Powder'," }, // Soy lecithin powder is usually powder or capsule, let's say Powder
    { from: /format: 'Oral',/g, to: "format: 'Oral rinse'," },
    { from: /format: 'IV',/g, to: "format: 'IV infusion'," },
    { from: /format: 'Vitamin',/g, to: "format: 'Tablet'," }, // Most "Vitamin..." starts were Tablets/Capsules. Inspecting specific cases might be better but this is a bulk fix.
    { from: /format: 'Niacin',/g, to: "format: 'Micro pellets'," },
    { from: /format: 'Chewable',/g, to: "format: 'Chewable Tablet'," },
    { from: /format: 'Rhodiola',/g, to: "format: 'Capsules'," }, // "UC-II... Rhodiola..."
    { from: /format: 'Ultiboost',/g, to: "format: 'Tablets'," }, // Swisse Ultiboost...
    { from: /format: 'Probiotic',/g, to: "format: 'Capsules'," },
    { from: /format: 'Bifidobacterium',/g, to: "format: 'Capsules'," },
    { from: /format: 'Lactobacillus',/g, to: "format: 'Capsules'," },
    { from: /format: 'Dietary',/g, to: "format: 'Gummies'," },
    { from: /format: 'Shilajit',/g, to: "format: 'Capsules'," },
    { from: /format: 'Tongkat',/g, to: "format: 'Capsules'," },
    { from: /format: 'Cowhage',/g, to: "format: 'Tablets'," },
    { from: /format: '29',/g, to: "format: 'Tablets'," }, // 29 Ultivite...
    { from: /format: 'Maca',/g, to: "format: 'Capsules'," },
    { from: /format: 'Panax',/g, to: "format: 'Capsules'," },
    { from: /format: 'Fireweed',/g, to: "format: 'Capsules'," },
    { from: /format: 'Inostim',/g, to: "format: 'Micro pellets'," },
    { from: /format: 'Testofen',/g, to: "format: 'Micro pellets'," },
    { from: /format: 'TESTOFEN',/g, to: "format: 'Micro pellets'," },
    { from: /format: 'Tagetes',/g, to: "format: 'Capsules'," },
    { from: /format: 'Cellular',/g, to: "format: 'Capsules'," },
    { from: /format: 'Blueberries',/g, to: "format: 'Capsules'," },
    { from: /format: 'Citicoline',/g, to: "format: 'Capsules'," },
    { from: /format: 'Deep',/g, to: "format: 'Oral rinse'," },
    { from: /format: 'Fresh',/g, to: "format: 'Oral rinse'," },
    { from: /format: 'Listerine',/g, to: "format: 'Oral rinse'," },
    { from: /format: 'Streptococcus',/g, to: "format: 'Capsules'," },
    { from: /format: 'Rosa',/g, to: "format: 'Capsules'," },
    { from: /format: 'Herbal',/g, to: "format: 'Capsules'," },
    { from: /format: 'Palmitoylethanolamide',/g, to: "format: 'Capsules'," },
    { from: /format: 'D-Chiro',/g, to: "format: 'Capsules'," },
    { from: /format: 'Pregnancy',/g, to: "format: 'Tablets'," },
    { from: /format: 'Terminalia',/g, to: "format: 'Chewable Tablet'," },
    { from: /format: 'Menthol',/g, to: "format: 'Chewable Tablet'," }, // Menthol 7mg...
    { from: /format: 'Sodium',/g, to: "format: 'Gummies'," }, // Sodium 5mg...
    { from: /format: 'Vasakarista',/g, to: "format: 'Syrup'," },
    { from: /format: 'Vapodrops+Cough',/g, to: "format: 'Chewable Tablet'," },
    { from: /format: 'Diamine',/g, to: "format: 'Capsules'," },
    { from: /format: 'Purified',/g, to: "format: 'Syrup'," },
    { from: /format: 'Thyme',/g, to: "format: 'Capsules'," },
    { from: /format: 'Melatonin',/g, to: "format: 'Gummies'," },
    { from: /format: 'GABA,',/g, to: "format: 'Capsules'," },
    { from: /format: 'Logan',/g, to: "format: 'Capsules'," },
    { from: /format: 'Sunactive',/g, to: "format: 'Capsules'," },
    { from: /format: 'Liposomal',/g, to: "format: 'Capsules'," },
    { from: /format: 'Ashwagandha',/g, to: "format: 'Capsules'," },
    { from: /format: 'CBD',/g, to: "format: 'Gummies'," },
    { from: /format: 'Mango',/g, to: "format: 'Capsules'," },
    { from: /format: 'Cantaloupe',/g, to: "format: 'Capsules'," },
    { from: /format: 'Standardized',/g, to: "format: 'Capsules'," },
    { from: /format: 'Ginger,',/g, to: "format: 'Capsules'," },
    { from: /format: 'Cranberry',/g, to: "format: 'Capsules'," },
    { from: /format: 'Pumpkin',/g, to: "format: 'Capsules'," },
    { from: /format: 'Spirulina',/g, to: "format: 'Capsules'," },
    { from: /format: 'Moringa',/g, to: "format: 'Capsules'," },
    { from: /format: 'Calcifediol',/g, to: "format: 'Capsules'," },
    { from: /format: '45',/g, to: "format: 'Tablets'," },
    { from: /format: 'Folate',/g, to: "format: 'Gummies'," },
    { from: /format: 'Magnesium',/g, to: "format: 'Gummies'," },
    { from: /format: 'Mg',/g, to: "format: 'Gummies'," },
    { from: /format: '18-22',/g, to: "format: 'Capsules'," },
    { from: /format: '30-34%',/g, to: "format: 'Capsules'," },
    { from: /format: '4',/g, to: "format: 'IV infusion'," },
    { from: /format: '50-60',/g, to: "format: 'Capsules'," },
    { from: /format: 'Calcium',/g, to: "format: 'Caplets'," },
    { from: /format: 'Coral',/g, to: "format: 'Capsules'," },
    { from: /format: 'Fish',/g, to: "format: 'IV infusion'," },
    { from: /format: 'Sugar,',/g, to: "format: 'Sachet'," },
    { from: /format: 'Mulberry',/g, to: "format: 'Capsules'," },
    { from: /format: 'Corn',/g, to: "format: 'Sachet'," },
    { from: /format: 'Cut',/g, to: "format: 'Capsules'," },
    { from: /format: 'Extract',/g, to: "format: 'Capsules'," },
    { from: /format: 'Deglusterol',/g, to: "format: 'Sachet'," },
    { from: /format: 'Evening',/g, to: "format: 'Capsules'," },
    { from: /format: 'Celery',/g, to: "format: 'Capsules'," },
    { from: /format: '30',/g, to: "format: 'Tablets'," },
    { from: /format: 'Myo-inositol',/g, to: "format: 'Capsules'," },
    { from: /format: 'GI',/g, to: "format: 'Capsules'," },
    { from: /format: 'Hops',/g, to: "format: 'Capsules'," },
    { from: /format: 'Pollen',/g, to: "format: 'Capsules'," },
    { from: /format: 'Fenugreek',/g, to: "format: 'Micro pellets'," },
    { from: /format: 'Brumex',/g, to: "format: 'Capsules'," },
    { from: /format: 'MCT',/g, to: "format: 'Capsules'," },
    { from: /format: 'Creatine',/g, to: "format: 'Capsules'," },
    { from: /format: 'Dextrose',/g, to: "format: 'Chewable Tablet'," },
    { from: /format: 'Elixir',/g, to: "format: 'Sachet'," },
];

replacements.forEach(r => {
    content = content.replace(r.from, r.to);
});

// Fix specific known issues where Regex might have missed or created duplicates if I was sloppy
content = content.replace(/format: 'Capsule',/g, "format: 'Capsules',");

fs.writeFileSync(path, content);
console.log('Fixed product formats.');
