import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAreaArea extends Struct.CollectionTypeSchema {
  collectionName: 'areas';
  info: {
    description: '';
    displayName: 'Destinations';
    pluralName: 'areas';
    singularName: 'area';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files'>;
    compounds: Schema.Attribute.Relation<'oneToMany', 'api::compound.compound'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    developers: Schema.Attribute.Relation<
      'manyToMany',
      'api::developer.developer'
    >;
    isRecommended: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::area.area'> &
      Schema.Attribute.Private;
    locationOnMap: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::geodata.geojson',
        {
          info: true;
        }
      >;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompoundCompound extends Struct.CollectionTypeSchema {
  collectionName: 'compounds';
  info: {
    description: '';
    displayName: 'Compound';
    pluralName: 'compounds';
    singularName: 'compound';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    amenities: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'privacy',
          'security',
          'exclusivity',
          'gated community',
          'greenery',
          'lush landscapes',
          'verdant landscapes & water features',
          'natural elements',
          'landscaping',
          'landscaped parks',
          'manicured gardens',
          'garden',
          'the garden',
          'park',
          'pocket gardens',
          'maple garden',
          'central lake park',
          'crystal lakes',
          'walking promenade',
          'walking and cycling trails',
          'walking and cycling paths',
          'walking track',
          'pedestrian and jogging pathways',
          'jogging trail',
          'cycling tracks',
          'cycling and walking lanes',
          'bicycle lanes',
          'bike loop for children',
          'running / jogging trail',
          'outdoor gym',
          'outdoor exercising zone',
          'fitness center',
          'gym',
          'rooftop gym',
          'private gym',
          'shared gym',
          'shared spa',
          'spa & clubhouse',
          'exclusive spa',
          'luxurious spa',
          'jacuzzi & spa',
          'wellness center',
          'wellness hub',
          'wellness team of experts',
          'yoga area',
          'yoga and relaxing meditation area',
          'meditation area',
          'health and wellness area',
          'fitness facilities',
          'sports facilities',
          'sports club',
          'sports courts',
          'club houses',
          'social clubhouse',
          'lively clubhouse',
          'beach clubhouse',
          'visitors\u2019 lounge',
          'social club',
          'polo social club',
          'polo arena',
          'games area',
          'children\u2019s playgrounds',
          'children\u2019s playground',
          'children\u2019s play area',
          'kids\u2019 play area',
          'kids area',
          'kid\u2019s cinema',
          'children\u2019s pool',
          'children\u2019s area',
          'safe kids\u2019 area',
          'outing spot',
          'recreational area',
          'pergola',
          'iconic square',
          'area dedicated to events and parties',
          'events & parties area',
          'bbq areas',
          'barbecue area',
          'vendor moving kiosk',
          'pathways',
          'van gogh inspired pathways',
          'outdoor seating areas',
          'promenade & central plaza',
          'central plaza',
          'the green spine',
          'horizon swimming pool',
          'long beachfront',
          'private beach',
          'sunset beach',
          'laidback beach',
          'beach',
          'beach activities',
          'beach entertainment',
          'beach bar',
          'beach marina',
          'beach pool',
          'beachfront',
          'swimming pool',
          'outdoor pools',
          'outdoor swimming pool',
          'pools',
          'sparkling water features',
          'water features',
          'swimmable lagoons',
          'lagoons',
          'crystal line',
          'cascading waterfalls',
          'waterfalls',
          'water bodies',
          'artificial lakes',
          'shimmering water features',
          'wonderful beach',
          'swimming pools & lagoons',
          'outdoor pools & lagoons',
          'beach restaurants / dining options',
          'restaurants and cafes',
          'restaurants and eateries',
          'restaurant & bar',
          'dining options',
          'fine dining restaurants',
          'first-class restaurants',
          'upscale dining options',
          'food court',
          'f&b outlets',
          'food and beverage venues',
          'exquisite restaurants',
          'cafes',
          'serving culinary delights',
          'dining option',
          'retail outlets',
          'retail area',
          'retail spaces',
          'retail stores',
          'elite shopping outlets',
          'shopping area',
          'commercial strip',
          'commercial strips',
          'commercial area',
          'commercial hub',
          'commercial center',
          'commercial space',
          'business hub',
          'business park',
          'banking sector',
          'offices',
          'offices and various workspaces',
          'workspaces',
          'boutique hotels',
          'luxurious hotels',
          'hotel',
          'branded hotel',
          'luxurious clubhouse',
          'clubhouses',
          'nightlife venues',
          'market',
          'shopping and markets',
          'supermarket',
          'pharmacy',
          'clinics',
          'medical center',
          'medical facilities',
          'healthcare',
          'medical complex',
          'hospitals / hospitality services',
          'hospitality services',
          'hospital',
          'pharmacies & clinics',
          'school',
          'british international school in cairo (bisc)',
          'nurseries',
          'education facilities',
          'mosque',
          'mosque & religious facilities',
          'charging stations',
          'electric charging stations',
          'electric car charging stations',
          'generators',
          'telephone & data',
          'data & telephone',
          'infrastructure',
          'livability',
          'finishing',
          'parking',
          'parking spaces',
          'parking facilities',
          'parking services',
          'underground parking',
          'multiple underground parking slots',
          'underground parking areas',
          'car wash services',
          'gardening services',
          'garden maintenance / gardening services',
          'maintenance services',
          'maintenance and cleaning services',
          'reliable facility management services',
          'impeccable facility management services',
          'house cleaning services',
          'facility management services',
          'housekeeping services in the hotel',
          'housekeeping services',
          'cleaning services',
          'managing services',
          'security services',
          '24/7 security services',
          '24/7 security measures with cctv surveillance',
          '24/7 security services with cctv cameras',
          '24/7 security & surveillance',
          'security personnel / well-trained security personnel',
          'surveillance system',
          'cctv surveillance',
          'secured entrances',
          'access control',
          'fire detection and firefighting system',
          'firefighting system',
          'fire alarm',
          'emergency systems',
          'telephone',
          'data',
          'reliable security & safety systems',
          'charging stations & infrastructure',
          'transport & access',
          'e-compound system',
          'ev infrastructure',
          'parking & transport',
          'transport facilities',
          'car park services',
          'clinic & healthcare',
          'sports & recreation',
          'beach volleyball court',
          'mountain climbing activities',
          'golf course',
          'championship golf course',
          'tennis courts',
          'courts',
          'volleyball court',
          'activity center',
          'social areas',
          'community center',
          'community hub',
          'green pockets',
          'lanes & spines',
          'organic farm',
          'supermarkets & retail',
          'multiple retail & f&b',
          'serviced apartments / hospitality',
          'serviced hotel services',
          'laundry / housekeeping',
          'car services & car wash',
          'clinic & pharmacy cluster',
          'banking & financial services',
          'schools & education',
          'nursery & childcare',
          'sports courts & clubs',
          'recreation & leisure',
          'leisure & entertainment',
          'entertainment facilities',
          'beach restaurant with culinary delights',
          'beach restaurant',
          'beach dining',
          'restaurants & bars',
          'food & beverage venues',
          'f&b venues',
          'kids pool',
          'indoor pools',
          'tennis court',
          'basketball court',
          'football field',
          'badminton court',
          'squash court',
          'mini golf',
          'skating rink',
          'badminton hall',
          'table tennis',
          'pool table',
          'game room',
          'outdoor cinema',
          'amphitheater',
          'rooftop garden',
          'terrace garden',
          'pet park',
          'dog run',
          'gymnasium',
          'yoga studio',
          'dance studio',
          'aerobics hall',
          'steam room',
          'sauna',
          'massage room',
          'indoor games room',
          'billiards room',
          'card room',
          'chess room',
          'library',
          'reading room',
          'study hall',
          'business center',
          'conference room',
          'meeting rooms',
          'co-working spaces',
          'internet cafe',
          'multimedia room',
          'home theater',
          'cinema hall',
          'banquet hall',
          'party hall',
          'function rooms',
          'wedding hall',
          'reception hall',
          'multipurpose hall',
          'indoor basketball court',
          'indoor badminton court',
          'medical center',
          'dental clinic',
          'laboratory',
          'ambulance service',
          'fire station',
          'police station',
          'security office',
          'atm',
          'bank branch',
          'post office',
          'courier services',
          'laundry service',
          'dry cleaning',
          'concierge service',
          'valet parking',
          'car service center',
          'schools',
          'kindergarten',
          'daycare center',
          'tutorial center',
          'computer training center',
          'language center',
          'art classes',
          'music classes',
          'dance classes',
          'church',
          'temple',
          'prayer room',
          'meditation room',
          'shopping mall',
          'grocery store',
          'convenience store',
          'fast food outlets',
          'bakery',
          'ice cream parlor',
          'juice bar',
          'beauty salon',
          'barber shop',
          'optical shop',
          'mobile shop',
          'electronics store',
          'stationery shop',
          'gift shop',
          'flower shop',
          'pet shop',
          'hardware store',
          'tailor shop',
          'underground parking',
          'covered parking',
          'open parking',
          'visitor parking',
          'motorcycle parking',
          'bus stop',
          'taxi stand',
          'shuttle service',
          'high-speed internet',
          'wifi coverage',
          'cable tv',
          'satellite tv',
          'intercom system',
          'video door phone',
          'smart home automation',
          'digital locks',
          'fire alarm system',
          'smoke detectors',
          'public announcement system',
          'disability support',
          'wheelchair accessibility',
          'ramps',
          'elevators',
          'braille signage',
          'audio assistance',
          'special parking',
          'accessible restrooms',
          'grab bars',
          'wide doorways',
          'tactile paving',
          '24/7 electricity backup',
          'water supply',
          'hot water system',
          'central air conditioning',
          'central heating',
          'gas supply',
          'waste management',
          'recycling center',
          'sewage treatment',
          'water treatment plant',
          'solar panels',
          'rainwater harvesting',
          'green building features',
          'art gallery',
          'museum',
          'auditorium',
          'exhibition hall',
          'workshop rooms',
          'craft center',
          'pottery studio',
          'photography studio',
          'music studio',
          'recording studio',
          'vr room',
          'simulator room',
          'observatory',
          'greenhouse',
          'water sports',
          'marina',
          'boat dock',
          'fishing area',
          'beach access',
          'mountain view',
          'lake view',
          'city view',
          'panoramic view',
          'has roof',
          'balcony',
          'terrace',
          "maid's room",
          "driver's room",
          'storage room',
          'walk-in closet',
          'dressing room',
          'pantry',
          'utility room',
          'home office',
          'study room',
          'guest room',
          'rooftop terrace',
          'lap pool',
          'heated pool',
          'water slides',
          'lazy river',
          'wave pool',
          'tennis academy',
          'rock climbing wall',
          'bouldering wall',
          'skate park',
          'bmx track',
          'athletic field',
          'boxing gym',
          'martial arts dojo',
          'pilates studio',
          'spinning room',
          'wellness team of experts',
          'physiotherapy center',
          'nutrition center',
          'outdoor kitchen',
          'grilling stations',
          'outdoor lounge',
          'cabanas',
          'outdoor bar',
          'pool bar',
          'snack bar',
          'juice station',
          'bistro',
          'deli',
          'butcher shop',
          'fishmonger',
          'cheese shop',
          'wine cellar',
          'cigar lounge',
          'rooftop bar',
          'sky lounge',
          'observation deck',
          'helipad',
          'concierge lounge',
          'mail room',
          'package room',
          'dry storage',
          'cold storage',
          'wine storage',
          'bicycle storage',
          'kayak storage',
          'ski storage',
          'guest parking',
          'handicapped parking',
          'compact car parking',
          'motorcycle garage',
          'rv parking',
          'boat parking',
          'car detailing',
          'oil change service',
          'tire service',
          'tesla charging',
          'ev service center',
          'livability',
        ]
      > &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    area: Schema.Attribute.Relation<'manyToOne', 'api::area.area'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    developer: Schema.Attribute.Relation<
      'manyToOne',
      'api::developer.developer'
    >;
    imageGallery: Schema.Attribute.Media<'images' | 'files', true>;
    isNewLaunch: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    isRecommended: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    isTrendingProject: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::compound.compound'
    > &
      Schema.Attribute.Private;
    locationOnMap: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::geodata.geojson',
        {
          info: true;
        }
      >;
    masterPlanImage: Schema.Attribute.Media<'images' | 'files', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    Offers: Schema.Attribute.Component<'layout.offer', true>;
    properties: Schema.Attribute.Relation<
      'oneToMany',
      'api::property.property'
    >;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    startPrice: Schema.Attribute.BigInteger;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDeveloperDeveloper extends Struct.CollectionTypeSchema {
  collectionName: 'developers';
  info: {
    description: '';
    displayName: 'Developer';
    pluralName: 'developers';
    singularName: 'developer';
  };
  options: {
    draftAndPublish: false;
    idField: 'slug';
  };
  attributes: {
    areas: Schema.Attribute.Relation<'manyToMany', 'api::area.area'>;
    compounds: Schema.Attribute.Relation<'oneToMany', 'api::compound.compound'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::developer.developer'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    startPrice: Schema.Attribute.Decimal;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPropertyProperty extends Struct.CollectionTypeSchema {
  collectionName: 'properties';
  info: {
    description: '';
    displayName: 'Property';
    pluralName: 'properties';
    singularName: 'property';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    bathrooms: Schema.Attribute.Integer;
    bedrooms: Schema.Attribute.Integer;
    compound: Schema.Attribute.Relation<'manyToOne', 'api::compound.compound'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deliveryIn: Schema.Attribute.Integer;
    finishing: Schema.Attribute.Enumeration<
      ['Not Finished', 'Semi Finished', 'Finished', 'Furnished']
    >;
    floorPlanImage: Schema.Attribute.Media<'images' | 'files', true>;
    imageGallery: Schema.Attribute.Media<'images' | 'files', true>;
    isRecommended: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isResale: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::property.property'
    > &
      Schema.Attribute.Private;
    locationOnMap: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::geodata.geojson',
        {
          info: true;
        }
      >;
    masterPlanImage: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    originalPlan: Schema.Attribute.Component<'layout.original-plan', false>;
    propertyType: Schema.Attribute.Enumeration<
      [
        'Apartment',
        'Villa',
        'Twinhouse',
        'Townhouse',
        'Duplex',
        'Penthouse',
        'Chalet',
        'Studio',
        'Cabin',
        'Clinic',
        'Office',
      ]
    >;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    squareMeters: Schema.Attribute.Integer;
    startPrice: Schema.Attribute.BigInteger;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginExportImportKkmExportImportConfig
  extends Struct.CollectionTypeSchema {
  collectionName: 'export_import_kkm_configs';
  info: {
    displayName: 'Export Import Config';
    pluralName: 'export-import-configs';
    singularName: 'export-import-config';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::export-import-kkm.export-import-config'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    selectedExportCollections: Schema.Attribute.JSON;
    selectedImportCollections: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::area.area': ApiAreaArea;
      'api::compound.compound': ApiCompoundCompound;
      'api::developer.developer': ApiDeveloperDeveloper;
      'api::property.property': ApiPropertyProperty;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::export-import-kkm.export-import-config': PluginExportImportKkmExportImportConfig;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
