import type { Schema, Struct } from '@strapi/strapi';

export interface AboutHeader extends Struct.ComponentSchema {
  collectionName: 'components_about_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    header_bg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    header_description: Schema.Attribute.Text;
    header_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    header_section_description: Schema.Attribute.Text;
    header_section_title: Schema.Attribute.Text;
    header_title: Schema.Attribute.Text;
  };
}

export interface AboutMain extends Struct.ComponentSchema {
  collectionName: 'components_about_mains';
  info: {
    displayName: 'main';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface AboutSeo extends Struct.ComponentSchema {
  collectionName: 'components_about_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    keyword: Schema.Attribute.Text;
    meta_description: Schema.Attribute.Text;
    meta_title: Schema.Attribute.Text;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    src_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    structuredData: Schema.Attribute.JSON;
    url_canonical: Schema.Attribute.Text;
  };
}

export interface AboutWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_about_why_uses';
  info: {
    displayName: 'why_us';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ContactHeader extends Struct.ComponentSchema {
  collectionName: 'components_contact_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    header_bg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    header_description: Schema.Attribute.Text;
    header_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    header_title: Schema.Attribute.Text;
  };
}

export interface GlobalContact extends Struct.ComponentSchema {
  collectionName: 'components_global_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    address: Schema.Attribute.Text;
    landline: Schema.Attribute.String;
    mailBox: Schema.Attribute.String;
    mobile: Schema.Attribute.String;
  };
}

export interface HomeCards extends Struct.ComponentSchema {
  collectionName: 'components_home_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Text;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface HomeExperiences extends Struct.ComponentSchema {
  collectionName: 'components_home_experiences';
  info: {
    displayName: 'experiences';
  };
  attributes: {
    number: Schema.Attribute.Integer;
    option: Schema.Attribute.String;
  };
}

export interface HomeHeader extends Struct.ComponentSchema {
  collectionName: 'components_home_headers';
  info: {
    description: '';
    displayName: 'header';
  };
  attributes: {
    header_bg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    header_description: Schema.Attribute.Text;
    header_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    header_section_description: Schema.Attribute.Text;
    header_title: Schema.Attribute.Text;
  };
}

export interface HomeMain extends Struct.ComponentSchema {
  collectionName: 'components_home_mains';
  info: {
    displayName: 'main';
  };
  attributes: {
    main_big_description: Schema.Attribute.Text;
    main_small_description: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
  };
}

export interface InvestmentCardFour extends Struct.ComponentSchema {
  collectionName: 'components_investment_card_fours';
  info: {
    displayName: 'card_four';
  };
  attributes: {
    card_four_description: Schema.Attribute.Text;
    card_four_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    card_four_title: Schema.Attribute.Text;
  };
}

export interface InvestmentCardOne extends Struct.ComponentSchema {
  collectionName: 'components_investment_card_ones';
  info: {
    displayName: 'card_one';
  };
  attributes: {
    card_one_description: Schema.Attribute.Text;
    card_one_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    card_one_title: Schema.Attribute.Text;
  };
}

export interface InvestmentCardThree extends Struct.ComponentSchema {
  collectionName: 'components_investment_card_threes';
  info: {
    displayName: 'card_three';
  };
  attributes: {
    card_three_description: Schema.Attribute.Text;
    card_three_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    card_three_title: Schema.Attribute.Text;
  };
}

export interface InvestmentCardTwo extends Struct.ComponentSchema {
  collectionName: 'components_investment_card_twos';
  info: {
    displayName: 'card_two';
  };
  attributes: {
    card_two_description: Schema.Attribute.Text;
    card_two_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    card_two_title: Schema.Attribute.Text;
  };
}

export interface InvestmentHeader extends Struct.ComponentSchema {
  collectionName: 'components_investment_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    header_bg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    header_description: Schema.Attribute.Text;
    header_title: Schema.Attribute.Text;
  };
}

export interface InvestmentSectionOne extends Struct.ComponentSchema {
  collectionName: 'components_investment_section_ones';
  info: {
    displayName: 'section_one';
  };
  attributes: {
    section_one_description: Schema.Attribute.Text;
    section_one_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    section_one_title: Schema.Attribute.Text;
  };
}

export interface InvestmentSectionThree extends Struct.ComponentSchema {
  collectionName: 'components_investment_section_threes';
  info: {
    displayName: 'section_three';
  };
  attributes: {
    section_three_description: Schema.Attribute.Text;
    section_three_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    section_three_title: Schema.Attribute.Text;
  };
}

export interface InvestmentSectionTwo extends Struct.ComponentSchema {
  collectionName: 'components_investment_section_twos';
  info: {
    displayName: 'section_two';
  };
  attributes: {
    section_two_description: Schema.Attribute.Text;
    section_two_title: Schema.Attribute.Text;
  };
}

export interface ManagementCards extends Struct.ComponentSchema {
  collectionName: 'components_management_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface ManagementHeader extends Struct.ComponentSchema {
  collectionName: 'components_management_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    header_bg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    header_description: Schema.Attribute.Text;
    header_title: Schema.Attribute.Text;
  };
}

export interface ManagementSectionCenter extends Struct.ComponentSchema {
  collectionName: 'components_management_section_centers';
  info: {
    displayName: 'section_center';
  };
  attributes: {
    section_center_description: Schema.Attribute.Text;
    section_center_title: Schema.Attribute.Text;
  };
}

export interface ManagementSectionFive extends Struct.ComponentSchema {
  collectionName: 'components_management_section_fives';
  info: {
    displayName: 'section_five';
  };
  attributes: {
    section_five_description: Schema.Attribute.Text;
    section_five_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    section_five_title: Schema.Attribute.Text;
  };
}

export interface ManagementSectionFour extends Struct.ComponentSchema {
  collectionName: 'components_management_section_fours';
  info: {
    displayName: 'section_four';
  };
  attributes: {
    section_four_description: Schema.Attribute.Text;
    section_four_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    section_four_title: Schema.Attribute.Text;
  };
}

export interface ManagementSectionOne extends Struct.ComponentSchema {
  collectionName: 'components_management_section_ones';
  info: {
    displayName: 'section_one';
  };
  attributes: {
    section_one_description: Schema.Attribute.Text;
    section_one_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    section_one_title: Schema.Attribute.Text;
  };
}

export interface ManagementSectionThree extends Struct.ComponentSchema {
  collectionName: 'components_management_section_threes';
  info: {
    displayName: 'section_three';
  };
  attributes: {
    section_three_bg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    section_three_description: Schema.Attribute.Text;
    section_three_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    section_three_title: Schema.Attribute.Text;
  };
}

export interface MarketingCardOne extends Struct.ComponentSchema {
  collectionName: 'components_marketing_card_ones';
  info: {
    displayName: 'card_one';
  };
  attributes: {
    card_one_description: Schema.Attribute.Text;
    card_one_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    card_one_title: Schema.Attribute.Text;
  };
}

export interface MarketingCardTwo extends Struct.ComponentSchema {
  collectionName: 'components_marketing_card_twos';
  info: {
    displayName: 'card_two';
  };
  attributes: {
    card_two_description: Schema.Attribute.Text;
    card_two_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    card_two_two_description: Schema.Attribute.Text;
  };
}

export interface MarketingHeader extends Struct.ComponentSchema {
  collectionName: 'components_marketing_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    header_description_one: Schema.Attribute.Text;
    header_description_two: Schema.Attribute.Text;
    header_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    header_title: Schema.Attribute.Text;
  };
}

export interface MarketingSectionCenter extends Struct.ComponentSchema {
  collectionName: 'components_marketing_section_centers';
  info: {
    displayName: 'section_center';
  };
  attributes: {
    section_center_description: Schema.Attribute.Text;
    section_center_title: Schema.Attribute.Text;
  };
}

export interface MarketingSectionOne extends Struct.ComponentSchema {
  collectionName: 'components_marketing_section_ones';
  info: {
    description: '';
    displayName: 'section_one';
  };
  attributes: {
    section_one_description_one: Schema.Attribute.Text;
    section_one_description_two: Schema.Attribute.Text;
    section_one_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    section_one_title: Schema.Attribute.Text;
  };
}

export interface MarketingSectionThree extends Struct.ComponentSchema {
  collectionName: 'components_marketing_section_threes';
  info: {
    displayName: 'section_three';
  };
  attributes: {
    section_three_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    section_three_subTitle: Schema.Attribute.Text;
    section_three_title: Schema.Attribute.Text;
  };
}

export interface MarketingSectionTwo extends Struct.ComponentSchema {
  collectionName: 'components_marketing_section_twos';
  info: {
    displayName: 'section_two';
  };
  attributes: {
    section_two_description: Schema.Attribute.Text;
    section_two_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    section_two_title: Schema.Attribute.Text;
  };
}

export interface ProductsPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_products_page_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    header_bg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    header_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    header_title: Schema.Attribute.Text;
  };
}

export interface ProductsPageSeo extends Struct.ComponentSchema {
  collectionName: 'components_products_page_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.header': AboutHeader;
      'about.main': AboutMain;
      'about.seo': AboutSeo;
      'about.why-us': AboutWhyUs;
      'contact.header': ContactHeader;
      'global.contact': GlobalContact;
      'home.cards': HomeCards;
      'home.experiences': HomeExperiences;
      'home.header': HomeHeader;
      'home.main': HomeMain;
      'investment.card-four': InvestmentCardFour;
      'investment.card-one': InvestmentCardOne;
      'investment.card-three': InvestmentCardThree;
      'investment.card-two': InvestmentCardTwo;
      'investment.header': InvestmentHeader;
      'investment.section-one': InvestmentSectionOne;
      'investment.section-three': InvestmentSectionThree;
      'investment.section-two': InvestmentSectionTwo;
      'management.cards': ManagementCards;
      'management.header': ManagementHeader;
      'management.section-center': ManagementSectionCenter;
      'management.section-five': ManagementSectionFive;
      'management.section-four': ManagementSectionFour;
      'management.section-one': ManagementSectionOne;
      'management.section-three': ManagementSectionThree;
      'marketing.card-one': MarketingCardOne;
      'marketing.card-two': MarketingCardTwo;
      'marketing.header': MarketingHeader;
      'marketing.section-center': MarketingSectionCenter;
      'marketing.section-one': MarketingSectionOne;
      'marketing.section-three': MarketingSectionThree;
      'marketing.section-two': MarketingSectionTwo;
      'products-page.header': ProductsPageHeader;
      'products-page.seo': ProductsPageSeo;
    }
  }
}
