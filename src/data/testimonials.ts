export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  organization: string;
  location: string;
  industry: string;
  highlightMetric: string;
  partnershipYears: string;
  avatarText: string;
  colorScheme: "blue" | "orange";
}

export const testimonialsData: Testimonial[] = [
  {
    id: "cebu-gems",
    quote:
      "Cebu Gems is the leading Maritime Review Center in the Philippines with over 65 branches. We are based out of Cebu City, and have worked with ET Technologies for the last 2 years as our software development partner. Reliability and ingenuity is what defines our partnership with ET Technologies. Our growth requires us to partner with teams who can keep pace with us and become an extension of our team and certainly ET Technologies has shown great commitment, coordination and trust. I would recommend them to any team that is looking for a long term partnership.",
    author: "Rheo Batestil",
    position: "IT Manager",
    organization: "Cebu Gems Innovation & Development Center",
    location: "Cebu City, Philippines",
    industry: "Maritime Education & Professional Review (65+ Branches)",
    highlightMetric: "65+ Branches Scaled",
    partnershipYears: "2+ Years Active Development",
    avatarText: "RB",
    colorScheme: "blue",
  },
  {
    id: "iligan-capitol-college",
    quote:
      "ET Technologies has been the perfect technology partner for us for over 15 years. They bring a high standard of performance, keen technical resources, an unparalleled work ethic, and do it all seamlessly as an extension of my own IT department. From Enrollment Systems, Accounting, Website Development and support, ET Technologies has consistently exceeded my, and my customers', expectations by providing quality solutions to an ever-growing complex technology landscape. A strategic partner for certain!",
    author: "Sherwine Gonzaga",
    position: "MIS Head",
    organization: "Iligan Capitol College",
    location: "Iligan City, Philippines",
    industry: "Higher Education & Academic Institution",
    highlightMetric: "15+ Years Trusted Partner",
    partnershipYears: "15+ Years Seamless Partnership",
    avatarText: "SG",
    colorScheme: "orange",
  },
];
