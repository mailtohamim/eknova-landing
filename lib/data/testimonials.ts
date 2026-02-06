export interface Testimonial {
    id: string;
    text: string;
    author: string;
    product: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        text: "I was really beginning to get concerned with my hair falling out like it was, but since taking these vitamins my hair is staying put! I will keep taking these and I'm so thankful they work.",
        author: "Jean C.",
        product: "Hair Skin Nails+",
        rating: 5
    },
    {
        id: '2',
        text: "Taking Eknova multi-vitamin has been a game changer. I've taken other multi-vitamins in the past. But, Eknova helps me maintain more energy throughout my day. I feel healthier all around. High quality for a great price.",
        author: "Brian P.",
        product: "Men's Multivitamin",
        rating: 5
    },
    {
        id: '3',
        text: "I use this product faithfully. It is part of my supplement routine for healthy liver, improved digestive system and overall health... Highly recommend!",
        author: "Deborah D.",
        product: "Lecithin",
        rating: 5
    },
    {
        id: '4',
        text: "I've tried many sleep supplements, but none have worked as gently and effectively as this one. I wake up feeling refreshed, not groggy.",
        author: "Michael T.",
        product: "Sleep Complex",
        rating: 5
    },
    {
        id: '5',
        text: "The immune support during flu season was incredible. I didn't get sick once this winter!",
        author: "Sarah L.",
        product: "Immune Defence",
        rating: 5
    }
];
