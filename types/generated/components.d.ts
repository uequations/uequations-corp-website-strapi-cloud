import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBrand extends Struct.ComponentSchema {
  collectionName: 'components_blocks_brands';
  info: {
    displayName: 'Brand';
  };
  attributes: {
    brand_logo: Schema.Attribute.Media<
      'files' | 'images' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    brand_name: Schema.Attribute.String & Schema.Attribute.Required;
    brand_url: Schema.Attribute.String;
  };
}

export interface BlocksButton extends Struct.ComponentSchema {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    primary: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
  };
}

export interface BlocksFeature extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    feature_description: Schema.Attribute.RichText;
    feature_icon: Schema.Attribute.Media<'images'>;
    feature_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_blocks';
  info: {
    displayName: 'Image Block';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BlocksQuestion extends Struct.ComponentSchema {
  collectionName: 'components_blocks_questions';
  info: {
    displayName: 'Question';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksSocialMediaIcon extends Struct.ComponentSchema {
  collectionName: 'components_blocks_social_media_icons';
  info: {
    displayName: 'Social Media Icon';
  };
  attributes: {
    icon: Schema.Attribute.Media<'files' | 'images'>;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksStatistic extends Struct.ComponentSchema {
  collectionName: 'components_blocks_statistics';
  info: {
    displayName: 'Stat';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    quantity: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface NavigationMenuDropdown extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_dropdowns';
  info: {
    displayName: 'Menu Dropdown';
  };
  attributes: {
    items: Schema.Attribute.Component<'navigation.menu-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    displayName: 'Menu Item';
  };
  attributes: {
    page: Schema.Attribute.Relation<'manyToOne', 'api::page.page'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAboutIntro extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_intros';
  info: {
    displayName: 'About Intro';
  };
  attributes: {
    header: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true>;
    introduction_text: Schema.Attribute.RichText;
    pre_header: Schema.Attribute.String;
    subheader: Schema.Attribute.RichText;
  };
}

export interface SectionsAllPostsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_all_posts_sections';
  info: {
    displayName: 'All Posts Section';
  };
  attributes: {};
}

export interface SectionsAppCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_app_cta';
  info: {
    displayName: 'App CTA';
  };
  attributes: {
    appstore_url: Schema.Attribute.String;
    google_play_url: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsBrandSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_brand_sections';
  info: {
    displayName: 'Brand Section';
  };
  attributes: {
    brands: Schema.Attribute.Component<'blocks.brand', true>;
    display_option: Schema.Attribute.Enumeration<
      ['brand_cards', 'main_color_block']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'brand_cards'>;
  };
}

export interface SectionsChangelogSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_changelog_sections';
  info: {
    displayName: 'Changelog Section';
  };
  attributes: {
    featured_versions: Schema.Attribute.Relation<
      'manyToMany',
      'api::change-log.change-log'
    >;
    subtitle: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SectionsDetailSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_detail_sections';
  info: {
    displayName: 'Detail Section';
  };
  attributes: {
    details: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image_position: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface SectionsDocumentationHome extends Struct.ComponentSchema {
  collectionName: 'components_sections_documentation_home';
  info: {
    displayName: 'Documentation Home';
  };
  attributes: {
    featured_pages: Schema.Attribute.Relation<
      'manyToMany',
      'api::documentation-page.documentation-page'
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    display_option: Schema.Attribute.Enumeration<['accordion', 'grid']> &
      Schema.Attribute.Required;
    questions: Schema.Attribute.Component<'blocks.question', true>;
    subtitle: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatureListSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_list_sections';
  info: {
    displayName: 'Feature List Section';
  };
  attributes: {
    display_option: Schema.Attribute.Enumeration<
      [
        'card',
        'grid',
        'big_image_horizontal',
        'card_minimal',
        'big_image_vertical',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'card'>;
    features: Schema.Attribute.Component<'blocks.feature', true>;
    features_header: Schema.Attribute.String & Schema.Attribute.Required;
    features_subheader: Schema.Attribute.RichText;
  };
}

export interface SectionsFeaturedPostsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_posts_sections';
  info: {
    displayName: 'Featured Posts Section';
  };
  attributes: {
    display_option: Schema.Attribute.Enumeration<
      [
        'cards',
        'carrousel',
        'modern_cards',
        'minimalist_grid',
        'full_image_card',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cards'>;
    featured_posts: Schema.Attribute.Relation<
      'manyToMany',
      'api::blog-post.blog-post'
    >;
    featured_posts_header: Schema.Attribute.String & Schema.Attribute.Required;
    featured_posts_subheader: Schema.Attribute.RichText;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'blocks.button', true>;
    display_option: Schema.Attribute.Enumeration<
      ['paralax', 'gradient', 'right_image', 'background_image', 'split_image']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'paralax'>;
    hero_image: Schema.Attribute.Media<'images'>;
    hero_subtitle: Schema.Attribute.RichText;
    hero_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPricingSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_sections';
  info: {
    displayName: 'Pricing Section';
  };
  attributes: {
    display_option: Schema.Attribute.Enumeration<
      [
        'cards_yearly',
        'mini_cards',
        'minimal',
        'feature_list',
        'cards_gradient',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cards_yearly'>;
    plans: Schema.Attribute.Relation<
      'manyToMany',
      'api::pricing-tier.pricing-tier'
    >;
    pricing_section_header: Schema.Attribute.String & Schema.Attribute.Required;
    pricing_section_subheader: Schema.Attribute.RichText;
  };
}

export interface SectionsRedirectSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_redirect_sections';
  info: {
    displayName: 'Redirect Section';
  };
  attributes: {
    slug_to_redirect_to: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsReviewSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_review_sections';
  info: {
    displayName: 'Testimonials Section';
  };
  attributes: {
    display_option: Schema.Attribute.Enumeration<
      [
        'star_cards',
        'card_carrousel',
        'minimal_cards',
        'minimal_carrousel',
        'modern_carrousel',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'star_cards'>;
    review_section_header: Schema.Attribute.String & Schema.Attribute.Required;
    review_section_subheader: Schema.Attribute.RichText;
    reviews: Schema.Attribute.Relation<
      'manyToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface SectionsStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats_sections';
  info: {
    displayName: 'Stats Section';
  };
  attributes: {
    statistics: Schema.Attribute.Component<'blocks.statistic', true>;
    subtitle: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_sections';
  info: {
    displayName: 'Team Section';
  };
  attributes: {
    display_option: Schema.Attribute.Enumeration<['compact', 'expanded']> &
      Schema.Attribute.Required;
    showcased_members: Schema.Attribute.Relation<
      'manyToMany',
      'api::author.author'
    >;
    subtitle: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_video_sections';
  info: {
    displayName: 'Video Section';
  };
  attributes: {
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    video_header: Schema.Attribute.String & Schema.Attribute.Required;
    video_subheader: Schema.Attribute.RichText;
    video_thumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<'images'>;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    >;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.brand': BlocksBrand;
      'blocks.button': BlocksButton;
      'blocks.feature': BlocksFeature;
      'blocks.image-block': BlocksImageBlock;
      'blocks.question': BlocksQuestion;
      'blocks.social-media-icon': BlocksSocialMediaIcon;
      'blocks.statistic': BlocksStatistic;
      'navigation.menu-dropdown': NavigationMenuDropdown;
      'navigation.menu-item': NavigationMenuItem;
      'sections.about-intro': SectionsAboutIntro;
      'sections.all-posts-section': SectionsAllPostsSection;
      'sections.app-cta': SectionsAppCta;
      'sections.brand-section': SectionsBrandSection;
      'sections.changelog-section': SectionsChangelogSection;
      'sections.detail-section': SectionsDetailSection;
      'sections.documentation-home': SectionsDocumentationHome;
      'sections.faq-section': SectionsFaqSection;
      'sections.feature-list-section': SectionsFeatureListSection;
      'sections.featured-posts-section': SectionsFeaturedPostsSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.pricing-section': SectionsPricingSection;
      'sections.redirect-section': SectionsRedirectSection;
      'sections.review-section': SectionsReviewSection;
      'sections.stats-section': SectionsStatsSection;
      'sections.team-section': SectionsTeamSection;
      'sections.video-section': SectionsVideoSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
