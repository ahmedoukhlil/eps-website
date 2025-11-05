/**
 * Application-wide constants
 */

// Layout dimensions
export const LAYOUT = {
  HERO_MIN_HEIGHT: 'calc(90vh - 60px)',
  HEADER_HEIGHT: 60,
  HEADER_HEIGHT_SCROLLED: 64,
  HEADER_HEIGHT_NORMAL: 80,
} as const;

// Video configuration
export const VIDEO = {
  MAX_RETRY_COUNT: 3,
  VIDEO_PATH: '/videos/1080p.mp4',
  VIDEO_SIZE_MB: 5.69,
} as const;

// Animation delays
export const ANIMATION = {
  STAGGER_BASE: 100, // ms
  SCROLL_THRESHOLD: 0.2,
  PARALLAX_SPEED_DEFAULT: 0.5,
} as const;

// Contact information
export const CONTACT = {
  PHONE: process.env.NEXT_PUBLIC_PHONE || '+222 XX XX XX XX',
  EMAIL: process.env.NEXT_PUBLIC_EMAIL || 'contact@eps.mr',
  ADDRESS: process.env.NEXT_PUBLIC_ADDRESS || 'Nouakchott, Mauritanie',
} as const;

// Social media links
export const SOCIAL = {
  FACEBOOK: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#',
  LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',
  TWITTER: process.env.NEXT_PUBLIC_TWITTER_URL || '#',
  INSTAGRAM: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
} as const;

// Site metadata
export const SITE = {
  NAME: 'EPS - El Baraka Prestations de Service',
  DESCRIPTION: 'Expert en nettoyage professionnel, communication & événementiel. Solutions complètes pour entreprises, associations et particuliers.',
  URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://eps.mr',
  LOCALE: 'fr_FR',
} as const;

// Feature flags
export const FEATURES = {
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  ENABLE_CHAT: process.env.NEXT_PUBLIC_ENABLE_CHAT === 'true',
} as const;
