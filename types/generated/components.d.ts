import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutOffer extends Struct.ComponentSchema {
  collectionName: 'components_layout_offers';
  info: {
    description: '';
    displayName: 'Offer';
    icon: 'chartPie';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    payment_name: Schema.Attribute.Enumeration<['original plan', 'offer']> &
      Schema.Attribute.DefaultTo<'original plan'>;
    paymentDuration: Schema.Attribute.Decimal;
    paymentPercentage: Schema.Attribute.Decimal;
    paymentType: Schema.Attribute.Enumeration<
      ['Discount', 'Down Payment', 'Special Offer']
    >;
  };
}

export interface LayoutOriginalPlan extends Struct.ComponentSchema {
  collectionName: 'components_layout_original_plans';
  info: {
    displayName: 'Original Plan';
    icon: 'chartPie';
  };
  attributes: {
    down_payment: Schema.Attribute.BigInteger;
    duration_years: Schema.Attribute.Integer;
    monthly_payment: Schema.Attribute.Integer;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Original Plan'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.offer': LayoutOffer;
      'layout.original-plan': LayoutOriginalPlan;
    }
  }
}
