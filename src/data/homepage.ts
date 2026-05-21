import type {
  ContactColumn,
  NavLink,
  ReviewCard,
  ServiceCard,
  WorkImage,
} from "@/types/homepage";

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#work", label: "Our Work" },
  { href: "#contact", label: "Contact" },
];

export const aboutParagraphs: string[] = [
  "At Local Roots Property Maintenance, LLC, we take pride in providing dependable, high-quality lawn and property maintenance services with honesty, professionalism, and attention to detail.",
  "As a locally owned and family-operated business, we are committed to helping residential and commercial properties stay clean, healthy, and well-maintained year-round.",
  "Our team values clear communication, reliable service, and building long-term relationships with clients through hard work and integrity.",
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Residential Monthly Maintenance",
    description:
      "Detailed monthly lawn care including irrigation checks, hand pruning, and professional manicured appearance.",
    points:
      "Includes mowing, edging, weed removal and cleanups for seasonal transitions.",
    price: "$125.00 a month",
  },
  {
    title: "Commercial Monthly Maintenance",
    description:
      "Reliable recurring service for entrances, pathways, and high-traffic lawn sections.",
    points:
      "We provide routine mowing, line trimming, weed control and spot detail cleanup from curb to walkway.",
    price: "$350.00 a month",
  },
  {
    title: "One - Time Cut",
    description:
      "One-time clean service for overgrown properties, rentals, and move-in or move-out prep.",
    points:
      "Includes mowing, edging, weed whacking and blowing off all hardscape areas for immediate curb appeal.",
    price: "$95.00 and up",
  },
  {
    title: "Tree Trimming & Prunning",
    description:
      "Routine trimming and shaping service for trees, hedges and decorative perimeter plants.",
    points:
      "Scheduled monthly or seasonal visits help protect visual balance and prevent storm-related overgrowth.",
    price: "Pricing varies",
  },
  {
    title: "Tree and Stump Removal",
    description:
      "Safe removal of problem trees and stumps including haul-off and post-removal surface leveling.",
    points:
      "Our team works with care around structures and driveways to keep your property clean and secure.",
    price: "Pricing varies",
  },
];

export const reviewCards: ReviewCard[] = [
  {
    name: "Ann T.",
    date: "May 18th, 2025",
    text: "Although this was our first done on account we have known and have worked with local companies in this neighborhood for years. The crew could not have treated us better.",
  },
  {
    name: "Mary Howard",
    date: "May 7th, 2025",
    text: "Local Roots Property Maintenance did an amazing job with our annual curbside cleanup. We have now become regular clients after one visit.",
  },
  {
    name: "Patty Cerra",
    date: "May 6th, 2025",
    text: "I was so excited to finally have this company complete our weekly maintenance service. They trim, edge, and keep every section of our yard consistent.",
  },
  {
    name: "Michael Martin",
    date: "March 31st, 2025",
    text: "My yard and all the trim around my house look cleaner than ever. We were in a time crunch and they made everything look ready for guests.",
  },
  {
    name: "Nina Parker",
    date: "March 27th, 2025",
    text: "A few weeks into this, this company has become our first call. Their team is polite, punctual, and highly detailed with every visit.",
  },
  {
    name: "Sane Marie",
    date: "March 18th, 2025",
    text: "This service has come full circle from a seasonal job into weekly regular service. Their communication and consistency have been outstanding.",
  },
];

export const workImages: WorkImage[] = [
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=900&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    caption: "Before",
  },
  {
    src: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=900&q=80",
    caption: "After",
  },
  {
    src: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=900&q=80",
    caption: "Before",
  },
  {
    src: "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?auto=format&fit=crop&w=900&q=80",
    caption: "After",
  },
  {
    src: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=900&q=80",
    caption: "Before",
  },
  {
    src: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?auto=format&fit=crop&w=900&q=80",
    caption: "After",
  },
];

export const contactColumns: ContactColumn[] = [
  {
    title: "Contact Information",
    lines: [
      "Brevard & Indian River Counties",
      "321-372-9462",
      "LocalRootsBrevard@gmail.com",
    ],
  },
  {
    title: "Office Hours",
    lines: ["Monday to Friday", "7:00 am to 7:00 pm", "Saturday", "8:00 am to 2:00 pm"],
  },
  {
    title: "Follow Us",
    lines: ["Facebook", "Google"],
    hasTagButton: true,
  },
];
