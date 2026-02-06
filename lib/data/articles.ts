export interface Article {
    id: string;
    slug: string;
    tag: string;
    title: string;
    excerpt: string;
    image: string;
    content: string; // HTML or Markdown
    author: string;
    date: string;
    readTime: string;
}

export const articles: Article[] = [
    {
        id: '1',
        slug: '5-morning-habits-maximize-energy',
        tag: 'Lifestyle',
        title: '5 Morning Habits for All-Day Energy',
        excerpt: 'Start your day right with these simple, science-backed routines to boost your vitality.',
        image: 'https://images.unsplash.com/photo-1544367563-12123d832d73?q=80&w=800&auto=format&fit=crop',
        author: 'Dr. Sarah Mitchell',
        date: 'Oct 12, 2025',
        readTime: '4 min read',
        content: `
            <p>We've all been there—hitting the snooze button three times, dragging ourselves out of bed, and relying on a double shot of espresso just to function. but it doesn't have to be this way. Small changes to your morning routine can have a massive impact on your energy levels throughout the day.</p>
            
            <h3>1. Hydrate Before You Caffeinate</h3>
            <p>After 7-8 hours of sleep, your body is naturally dehydrated. Before reaching for coffee, drink a large glass of water. This simple act jumpstarts your metabolism and rehydrates your brain, leading to better focus and alertness.</p>

            <h3>2. Get Natural Light Immediately</h3>
            <p>Exposure to sunlight within the first hour of waking regulates your circadian rhythm. It signals your body to stop producing melatonin (the sleep hormone) and increase cortisol, your body's natural "wake up" signal. Try a 10-minute walk outside or simply stand by a bright window.</p>

            <h3>3. Move Your Body</h3>
            <p>You don't need an intense HIIT workout. Gentle stretching or yoga for 10 minutes increases blood flow and oxygen to your muscles and brain. It wakes up your nervous system and prepares you for the day ahead.</p>

            <h3>4. Protein-Rich Breakfast</h3>
            <p>Carb-heavy breakfasts (like toast or sugary cereal) lead to a spike in blood sugar followed by a crash. Opt for protein and healthy fats—think eggs with avocado or a smoothie with plant-based protein powder—to sustain your energy levels.</p>

            <h3>5. Mindfulness or Intention Setting</h3>
            <p>Rushing immediately into emails spikes cortisol and stress. Take 5 minutes to meditate, journal, or simply set an intention for how you want to feel today. A calm mind is an efficient mind.</p>
        `
    },
    {
        id: '2',
        slug: 'truth-about-superfoods',
        tag: 'Nutrition',
        title: 'The Truth About Superfoods',
        excerpt: 'Decoding the myths and facts behind popular nutritional powerhouses.',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop',
        author: 'James Wilson, Nutritionist',
        date: 'Nov 05, 2025',
        readTime: '6 min read',
        content: `
            <p>"Superfood" is a buzzword we see everywhere, but what does it actually mean? Scientifically, there is no official definition. However, in the wellness world, it refers to nutrient-dense foods that pack a punch of vitamins, minerals, and antioxidants.</p>

            <h3>Are They Worth the Hype?</h3>
            <p>Absolutely, but they aren't magic bullets. Adding goji berries to a diet of processed food won't fix everything. Superfoods work best as part of a balanced, whole-food diet.</p>

            <h3>Top Superfoods to Incorporate</h3>
            <ul>
                <li><strong>Berries:</strong> High in fiber and disease-fighting antioxidants.</li>
                <li><strong>Leafy Greens:</strong> Kale, spinach, and swiss chard are loaded with vitamins A, C, E, and K.</li>
                <li><strong>Nuts and Seeds:</strong> Excellent sources of healthy fats and plant protein.</li>
                <li><strong>Turmeric:</strong> Contains curcumin, a potent anti-inflammatory compound.</li>
            </ul>

            <p>Focus on variety. Eating a "rainbow" of fruits and vegetables is the best way to ensure you're getting a broad spectrum of nutrients.</p>
        `
    },
    {
        id: '3',
        slug: 'science-of-deep-sleep',
        tag: 'Sleep',
        title: 'The Science of Deep Sleep',
        excerpt: 'Why your brain needs it and how to get more of it naturally.',
        image: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?q=80&w=800&auto=format&fit=crop',
        author: 'Emma Davis, Sleep Specialist',
        date: 'Dec 01, 2025',
        readTime: '5 min read',
        content: `
            <p>Sleep isn't just a passive state of rest; it's an active process of restoration. Specifically, deep sleep (slow-wave sleep) is crucial for physical recovery, immune function, and memory consolidation.</p>

            <h3>What Happens During Deep Sleep?</h3>
            <p>During this stage, your heart rate and breathing slow to their lowest levels. Your pituitary gland releases human growth hormone, which helps repair tissues and build muscle. Simultaneously, your brain clears out metabolic waste products that accumulate during the day.</p>

            <h3>How to Improve Deep Sleep</h3>
            <p><strong>Cool Down:</strong> Your body temperature needs to drop to initiate sleep. Keep your bedroom cool (around 65°F or 18°C).</p>
            <p><strong>Digital Curfew:</strong> Blue light from screens suppresses melatonin. Avoid screens for at least an hour before bed.</p>
            <p><strong>Magnesium Support:</strong> Magnesium glycinate is known to promote relaxation and improve sleep leverage. It calms the nervous system and prepares the body for rest.</p>
        `
    },
    {
        id: '4',
        slug: 'adaptogens-101-stress-relief',
        tag: 'Herbal Wisdom',
        title: 'Adaptogens 101: Nature’s Stress Relief',
        excerpt: 'How ancient herbs can help your modern body cope with burnout.',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop',
        author: 'Dr. Anika Patel',
        date: 'Jan 15, 2026',
        readTime: '7 min read',
        content: `
            <p>In a world that never stops, stress has become a chronic condition for many. Enter adaptogens—a unique class of herbs that help the body resist stressors of all kinds, whether physical, chemical, or biological.</p>

            <h3>How Do They Work?</h3>
            <p>Think of adaptogens like a thermostat. If your stress response is too high, they help lower it. If you're fatigued, they can help boost your energy without the jittery crash of stimulants. They work by interacting with the HPA axis (hypothalamic-pituitary-adrenal axis), which controls our stress response.</p>

            <h3>Key Adaptogens to Know</h3>
            <p><strong>Ashwagandha:</strong> Perhaps the most famous adaptogen, known for reducing cortisol levels and promoting calm.</p>
            <p><strong>Rhodiola:</strong> Excellent for physical fatigue and mental fog. It helps improve focus and stamina.</p>
            <p><strong>Holy Basil (Tulsi):</strong> Often called the "Elixir of Life" in Ayurveda, it supports immune health and emotional balance.</p>

            <p>Incorporating these herbs into your routine, perhaps through a morning tea or supplement, can provide a buffer against the daily grind.</p>
        `
    }
];
