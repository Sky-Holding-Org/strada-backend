

export interface LayoutOffer {
  id?: number;
  paymentPercentage?: number;
  paymentDuration?: number;
  paymentType?: "Discount" | "Down Payment" | "Special Offer";
  isOriginalPlan?: boolean;
  isRecommended?: boolean;
  startDate?: Date | string;
  endDate?: Date | string;
  title?: string;
};
