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
    description: "Adaptable to take your lawn and landscape looking clean, healthy, and professionally maintained year round.",
    points: "Our service include mowing, edging, weed whacking and blowing off all hardscapes from walkways and driveways. We provide routine scheduling. Attention to detail and consistent quality so you can enjoy a beautifully landscape entrance area. Consistently showing up, whether residential or commercial, count on a reliable dependable service that keep your property looking its best easy results.",
    price: "from $125and up a month",
  },
  {
    title: "Commercial Monthly Maintenance",
    description: "Serving as attention to keep your commercial property clean, professional and welcoming year round.",
    points: "We provide reliable recurring maintenance services including mowing, edging, weed whacking and blowing off all walkways from walkways and driveways, to keep your property's appearance first class. We understand the importance of curb appeal for commercial properties and work hard to ensure your property constantly reflects a professional image for customers, tenants, and visitors.",
    price: "from $350 and up a month",
  },
  {
    title: "One - Time Cut",
    description: "Our one time lawn service is perfect for properties that need a professional cut and cleanup without signing up recurring maintenance services.",
    points: "This service includes mowing, edging, weed whacking and blowing off all hardscapes and customized additions. However, before and after cut, we will have your property looking clean and refreshed. Providing dependable, detail-oriented service to help you protect and restore your property's appearance with no long term commitment required.",
    price: "from $95 and up",
  },
  {
    title: "Tree Trimming & Pruning",
    description: "Our Tree Trimming and Pruning service helps maintain the health, appearance, and safety of your trees and shrubs.",
    points: "We carefully trim and prune overgrown or damaged branches to improve air circulation, promote healthy growth, and enhance your property's overall curb appeal. Whether you need routine maintenance or pruning of unruly growth, our team provides professional, detail-oriented service that keeps your trees safe and well-maintained throughout the year.",
    price: "Pricing varies",
  },
  {
    title: "Tree and Stump Removals",
    description: "Our Tree & Stump Removal service provides safe, efficient removal of unwanted, damaged, or hazardous trees and stumps from your property.",
    points: "We help clear your landscape while ensuring the safety of structures and activity in your outdoor space. Services include tree cutting, debris cleanup, stump removal, and hauling away materials to leave your property clean and ready for future use. Whether recovering storm damage/hazards or clearing space for new landscaping, our team is committed to professional, dependable service from start to finish.",
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
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv1CPcfNast_48egAi2Rsu6WTpSqkeOcF8FTX-tG4uhlBMUXBKhdEc5igQHz9euZIiLUs01JeB8EtzKtFG4LMrmSUo_HHj02V5PL8CTONWd4IxCtTlRSmCj16rd8Wv7ODzYpeSrIU0IItHk3Hc4AL4DgHkMIu7wwmf_meDVBqkB-bDZNGMN6TeujmVveUIwY_fuFcLaX5MrouIXORApqZZukDS132nYcCaZ0HvhjYaBM6aMiLJQSDy6a4jTovhkFryV44oRFCPn84",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaP-xVvkAd48Tou4Ie-6IE9pMVBG60QtjG4CfzAj_UbMTba9qiNSQ7GpG8QpNmK-aFLdjREB-ciSsT3UEU27Trw-0ju0qScxRov6Zsp0yRTdWz88p24z3qwAtiXk5PiuX48i2QtWIernMdHKB9C6FjLEUXXzHzJQTmJNmCBaz9qdSH4ZCeA2Z4E0qqrZdt-YNyoFWmaO9dzf5dwlZF-mH90iX9Hc8SA6yemv4JuLCGkAw_BELsInTQaGNHaQ_41TocJWYFKerxemo",
  },
  {
    src: "/img/width_1600 (1).webp",
  },
  {
    src: "/img/width_1600 (2).webp",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEyHMaNN4gCO8P97FHInE3SeLQVHnS33U8hClSbrurXKrSanazjnDt-DnpkPIxvrb3MEk-MNXwCDmsTHYLTpP40Wtu79RMHUbajgwLCIYjlaacWt146SGv_g6xjOVv4nTpEDwK4URfWWNeXHCzkkJEPfG1Mxn3L9PRRS1E50mdzd83ts3a0EVzGd1kb0eqIh1Xhvna0MJv25WS7hoauiuzjGtglVhKIgPuAzYnSd2DGpZ1aWqKTB-fov5CVXE7BzGZOr-0SWpdfsM",
    caption: "Before",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ0H2c5tA-ESqNJvYpooQqdbEDp_0YAGLMi2g9HlXtPUUlqd_P80JUj761utDuxzfUAuDIxjx69aNTMIkkzJM6NuDXnigsLT8Zzu-DOkVJgdB6o2cjPCMOZgXpb7UADEwlIMbQna0rnqTgSQAc7xkNxFKD0zrbtGlp7gKAdFC0wxInhLatKzQspyLD1uGbZO7JblZvVR8tqvfF0B-C76-l2ZnI4POTbCGrvuh572MRTF6x3s8wK2F3k3Zvn15g8Cz3XMdE55QnehA",
    caption: "After",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6j8DKxaNKFDge5g-5MAv7H5EILKmhKjs8dftDn1-Hr68VEysEcz_vQ61sApjPeaWtWCMQnGMifspptB7pfCnKq8S5MISlZaeqVqqwdDitH8nMHoE1H6EAjOnzZUbWnIc-r2tB71XPeJMMa8SsdVnFOy78g9NIbqWjTQTMw6rXLqBDMIgyYQadmj_nY-pzNlCFefjB_8pO6WU7j32Dvt2r3nHKAIrdJSne8LgFROdmj3Jk7L1oaFM3zchFZQJEVYSnj6QessXfaw0",
    caption: "Before",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuChKRFgbUX9QTjJVD_yYMLNi669LC4TEvCiqyySr90xGxyoWIj82JAWB9qrnlMu_7WFzNbx_U-eYdzaPUOJZGmrO1x-aUuBDzDNV2zca37S2hmOR1lmkgcX6Pc8walTFvFU1VcLsBjpGpOv7XqjBb_C7AP8jglK4YmbwdinXdIfJp_LPSKA9k4qTJtMDxz5uPkUsp1G8nfVG15ulATdNBpHB6T8KgNOCKXNlpJmjmCEAa3Ca1ZlO6zFfp0sQD-I_h2hXZ-SIDj_iuA",
    caption: "After",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYST_TTqbqeHLA9zQh92WiLabXNpw9jOMXA-Pd1Tj1Ox7an6PKaUkoasFtbAuLzWPFD6L82XUI_rL-rP7Lyx5GwvwweDGV4x5ZOy9zgxNNPfGg1-votCi9Cy10OqnSLF_uSKiKWzPm2_s4y6QaK-whQL-ZJTgrnE-UelVxrccddrjA3chwlYtG_52aZ5hk-5TO_70FGHr91DzHOEIAxA49vRrk9_ugyVhlGnfND7mne2rwvcsWOyXRj6KoKtvbcIlnUA7-p7chYHE",
    caption: "Before",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0uSKbYN9H9MMNIQ_-XmAxiBrIjVlKHBjlEmyp_wMkErEwFzB16EtNDlNBG2U_mbuTcktMeeb_3IAlieHu-bEfTRAOoluWeZLqfjtHMDI4GFv1wffXfZkxfSziolkPr9WnTR3JVjnCqJMGmb23YgHgbOzYKhOws1MHD5Fy5akjQxs4iVuh8ttT-j5bo1FXqVoe6VGOk3S_HYii7dL8pbXEO6ohKpX9sVUFnJp_b5CAkSeYLwSiC_8FtEygxTbWvdRI8y8JYYOD1nUhc",
    caption: "After",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjrL4-O7nKwyHrZw_LW4JYsRKRhhZ6lc7extyF963TaMIzzB-8E672lLMZ897m15FkS23GKvnzQc6FtOnQfBVVLy0LKmVc1hWl4flzfkHvq_NlOSYgSEuQ5untGgG6GN2D-Xu3eZkYQmLGNduNzzp1tggj0BsdaDtuHfTRzkNomZm7g3n7dCcMlhx-Hp6187Rp8YzKVmXe0efbvvn4SRTQUWPFHEzOPBJ52N8rSVbYHz5molAtMHK8Uwq9D64QkJHkdRZFAYbLQLo",
    caption: "Before",
  },
  {
    src: "/img/width_1600 (3).webp",
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
