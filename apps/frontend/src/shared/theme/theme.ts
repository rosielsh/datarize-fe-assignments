export const theme = {
  colors: {
    text: {
      main: '#111827',
      sub: '#374151',
      light: '#6b7280',
      placeholder: '#9ca3af',
      white: '#ffffff',
    },
    bg: {
      white: '#ffffff',
      gray: '#f9fafb',
    },
    border: {
      gray: '#e5e7eb',
      lightGray: '#f3f4f6',
    },
    blue: {
      main: '#3b82f6',
      dark: '#2563eb',
    },
  },
  fontSize: {
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
  },
  fontWeight: {
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
  },
  radius: {
    sm: '0.25rem', // 4px
    md: '0.5rem', // 8px
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 1px 3px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 20px 0 rgba(0, 0, 0, 0.1)',
  },
} as const;

export type Theme = typeof theme;
