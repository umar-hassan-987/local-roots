export type NavLink = {
  href: string;
  label: string;
};

export type ServiceCard = {
  title: string;
  description: string;
  points: string;
  price: string;
};

export type ReviewCard = {
  name: string;
  date: string;
  text: string;
};

export type WorkImage = {
  src: string;
  caption?: "Before" | "After";
};

export type ContactColumn = {
  title: string;
  lines: string[];
  hasTagButton?: boolean;
};
