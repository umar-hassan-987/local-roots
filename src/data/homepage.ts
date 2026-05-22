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
  "As a locally owned and family-operated company, we are committed to helping residential and commercial properties stay clean, healthy, and well-maintained year-round.",
  "Our team values clear communication, reliable service, and building long-term relationships with clients through hard work and integrity. Whether it's routine lawn care, property cleanups, or ongoing maintenance, we treat every property like it's our own.",
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Residential Monthly Maintenance",
    description: "Designed to keep your lawn and landscape looking clean, healthy, and professionally maintained year-round.",
    points: "Services include mowing, edging, weed whacking and blowing off all cuttings from walkways and A/C units.\n\nFocused on reliable scheduling, attention to detail, and consistent quality so you can enjoy a well-maintained property without the stress of managing it yourself. Whether residential or commercial, our goal is to provide dependable service that keeps your property looking its best every month.",
    price: "from $125 and up a month",
  },
  {
    title: "Commercial Monthly Maintenance",
    description: "Servicing is tailored to keep your business property clean, professional, and welcoming year-round.",
    points: "We provide reliable recurring maintenance services including mowing, edging, weed whacking and blowing off all cuttings from walkways and A/C units to help maintain your property's appearance and value.\n\nWe understand the importance of curb appeal for commercial properties and work hard to ensure your grounds consistently reflect a professional image for customers, tenants, and visitors.",
    price: "from $200 and up a month",
  },
  {
    title: "One - Time Cut",
    description: "Our One-Time Lawn Service is perfect for properties that need a professional cut and cleanup without enrolling in recurring maintenance services.",
    points: "This service includes mowing, edging, weed whacking, and blowing off all grass clippings and debris from walkways, driveways, patios, and around A/C units to leave your property looking clean and refreshed.\n\nProviding dependable, detail-oriented service to help restore and maintain your property's appearance with no long-term commitment required.",
    price: "from $85 and up",
  },
  {
    title: "Tree Trimming & Prunning",
    description: "Our Tree Trimming and Pruning service helps maintain the health, appearance, and safety of your trees and landscape.",
    points: "We carefully trim and prune overgrown or damaged branches to improve tree structure, promote healthy growth, and enhance your property's overall curb appeal.\n\nWhether you need routine maintenance or cleanup of unruly growth, our team provides professional, detail-oriented service while keeping your property clean and well- maintained throughout the process.",
    price: "Pricing varies",
  },
  {
    title: "Tree and Stump Removals",
    description: "Our Tree & Stump Removal service provides safe, efficient removal of unwanted, damaged, or hazardous trees and stumps from your property.",
    points: "We help clear your landscape while improving the safety, appearance, and usability of your outdoor space. Services may include tree cutting, debris cleanup, stump removal, and hauling away materials to leave your property clean and ready for future use.\n\nWhether removing storm-damaged trees or clearing space for new landscaping, our team is committed to professional, dependable service from start to finish.",
    price: "Pricing varies",
  },
];

export const reviewCards: ReviewCard[] = [
  {
    name: "Ann Trementozzi",
    date: "April 24th, 2026",
    text: "Anthony and his crew have done an excellent job taking over our regular lawn service and has been outstanding on trimming back trees! We couldn't be happier and Highly recommend him and his crew!!!!",
  },
  {
    name: "Missy Haywood",
    date: "March 12th, 2026",
    text: "Local Roots Property Maintenance did an amazing job cutting down an unhealthy tree that was hanging over our outdoor kitchen. It was tricky with limbs extending over the tin roof and a trunk that was rotting in areas. Anthony was quick to reply and arrived on time. He and his crew were efficient and left the area cleaned up. The pricing was competitive and the service was above and beyond. They will be my go to company.",
  },
  {
    name: "Patty Clarke",
    date: "February 20th, 2026",
    text: "Local Roots did an excellent job removing trees from our property. The crew was professional, efficient, and very safety-conscious throughout the entire process. They handled everything with care, making sure no damage was done to the surrounding yard or structures. The cleanup was just as impressive — they left the area spotless. Communication was clear, pricing was fair, and the work was completed right on schedule. I highly recommend Local Roots Property Maintenance for anyone needing tree removal done right!",
  },
  {
    name: "Michael Musto",
    date: "February 13th, 2026",
    text: "Anthony and and his crew were great. They cut down three of my trees in a timely manner and cleaned up. Did a great job would definitely recommend Anthony and his crew.",
  },
  {
    name: "Niria Penton, Realtor",
    date: "December 4th, 2025",
    text: "Talk about saving the day, the year, the sale!!! I called Local Roots last minute to help save my new listing. As a realtor, presentation is everything and my new listing needed some major help. With photos booked in the next few days they were my saving grace! So thankful for the way they cleaned up the yard and kept the vacant home looking good the entire time!! Would absolutely recommend them and call them whenever I need lawn care!!",
  },
  {
    name: "Steve Houle",
    date: "November 27th, 2025",
    text: "Anthony and his crew have done an excellent job taking over our regular lawn service and has been outstanding on trimming back trees! We couldn't be happier and Highly recommend him and his crew!!!!",
  },
];

export const workImages: WorkImage[] = [
  { src: "/ourwork/1.png" },
  { src: "/ourwork/2.png" },
  { src: "/ourwork/3.webp" },
  { src: "/ourwork/4.png" },
  { src: "/ourwork/5.png", caption: "Before" },
  { src: "/ourwork/6.png", caption: "After" },
  { src: "/ourwork/7.png", caption: "Before" },
  { src: "/ourwork/8.png", caption: "After" },
  { src: "/ourwork/9.png", caption: "Before" },
  { src: "/ourwork/10.png", caption: "After" },
  { src: "/ourwork/11.png", caption: "Before" },
  { src: "/ourwork/12.png", caption: "After" },
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
    lines: [
      "Monday to Friday",
      "7:00 am to 7:00 pm",
      "Saturday",
      "8:00 am to 2:00 pm",
    ],
  },
  {
    title: "Follow Us",
    lines: ["Facebook", "Google"],
    hasTagButton: true,
  },
];
