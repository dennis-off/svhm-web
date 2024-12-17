import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicZoneAbout extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_abouts';
  info: {
    description: '';
    displayName: 'About';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface DynamicZoneCta extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_ctas';
  info: {
    description: '';
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    CTAs: Schema.Attribute.Component<'shared.button', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sub_heading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface DynamicZoneEvents extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_events';
  info: {
    description: '';
    displayName: 'Events';
  };
  attributes: {
    events: Schema.Attribute.Relation<'oneToMany', 'api::event.event'>;
    section: Schema.Attribute.Component<'shared.section', false> &
      Schema.Attribute.Required;
  };
}

export interface DynamicZoneFaq extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    section: Schema.Attribute.Component<'shared.section', false> &
      Schema.Attribute.Required;
  };
}

export interface DynamicZoneHero extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    CTAs: Schema.Attribute.Component<'shared.button', true>;
    flipWords: Schema.Attribute.Component<'shared.flip-word', true> &
      Schema.Attribute.Required;
    section: Schema.Attribute.Component<'shared.section', false> &
      Schema.Attribute.Required;
  };
}

export interface DynamicZoneRelatedArticles extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_related_articles';
  info: {
    description: '';
    displayName: 'RelatedArticles';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    section: Schema.Attribute.Component<'shared.section', false>;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'underline';
  };
  attributes: {
    built_with: Schema.Attribute.String;
    copyright: Schema.Attribute.String;
    description: Schema.Attribute.String;
    designed_developed_by: Schema.Attribute.String;
    internal_links: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    policy_links: Schema.Attribute.Component<'shared.link', true>;
    social_media_links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_global_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'bold';
  };
  attributes: {
    left_navbar_items: Schema.Attribute.Component<'shared.link', true>;
    right_navbar_items: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    > &
      Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['simple', 'outline', 'primary', 'muted']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedFlipWord extends Struct.ComponentSchema {
  collectionName: 'components_shared_flip_words';
  info: {
    displayName: 'FlipWord';
  };
  attributes: {
    word: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    > &
      Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_members';
  info: {
    description: '';
    displayName: 'member';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    firstname: Schema.Attribute.String;
    lastname: Schema.Attribute.String;
    role: Schema.Attribute.Enumeration<
      ['president', 'vice-president', 'treasurer', 'board-member', 'secratary']
    >;
    statement: Schema.Attribute.Text;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    description: '';
    displayName: 'Section';
    icon: 'cursor';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sub_heading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic-zone.about': DynamicZoneAbout;
      'dynamic-zone.cta': DynamicZoneCta;
      'dynamic-zone.events': DynamicZoneEvents;
      'dynamic-zone.faq': DynamicZoneFaq;
      'dynamic-zone.hero': DynamicZoneHero;
      'dynamic-zone.related-articles': DynamicZoneRelatedArticles;
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'shared.button': SharedButton;
      'shared.flip-word': SharedFlipWord;
      'shared.link': SharedLink;
      'shared.member': SharedMember;
      'shared.section': SharedSection;
      'shared.seo': SharedSeo;
    }
  }
}
