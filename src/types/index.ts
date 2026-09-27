export * from "../data/products";
export * from "../data/services";
export * from "../data/testimonials";
export * from "../data/blogs";
export * from "../data/navigation";

export interface QuoteRequestFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  interestedCategory: "software" | "services" | "cloud" | "hardware" | "other";
  selectedSolution: string;
  projectTimeline: string;
  estimatedBudget: string;
  projectDescription: string;
}
