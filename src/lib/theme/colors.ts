/**
 * Color Palette
 * 
 * This file contains the color palette used in the project.
 * The colors are organized by their functional purpose and include both light and dark theme variants.
 * 
 * All colors are defined using the OKLCH color space for better color perception and consistency.
 * Do not add new colors without design team approval.
 */

// Light Theme Colors (Default)
export const lightColors = {
  // Base Colors
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.145 0 0)',
  
  // Component Colors
  card: 'oklch(1 0 0)',
  cardForeground: 'oklch(0.145 0 0)',
  popover: 'oklch(1 0 0)',
  popoverForeground: 'oklch(0.145 0 0)',
  
  // Semantic Colors
  primary: 'oklch(0.205 0 0)',
  primaryForeground: 'oklch(0.985 0 0)',
  secondary: 'oklch(0.97 0 0)',
  secondaryForeground: 'oklch(0.205 0 0)',
  muted: 'oklch(0.97 0 0)',
  mutedForeground: 'oklch(0.556 0 0)',
  accent: 'oklch(0.97 0 0)',
  accentForeground: 'oklch(0.205 0 0)',
  
  // Feedback Colors
  destructive: 'oklch(0.577 0.245 27.325)',
  
  // UI Element Colors
  border: 'oklch(0.922 0 0)',
  input: 'oklch(0.922 0 0)',
  ring: 'oklch(0.708 0 0)',
  
  // Chart Colors
  chart: {
    color1: 'oklch(0.646 0.222 41.116)',
    color2: 'oklch(0.6 0.118 184.704)',
    color3: 'oklch(0.398 0.07 227.392)',
    color4: 'oklch(0.828 0.189 84.429)',
    color5: 'oklch(0.769 0.188 70.08)',
  },
  
  // Sidebar Colors
  sidebar: {
    background: 'oklch(0.985 0 0)',
    foreground: 'oklch(0.145 0 0)',
    primary: 'oklch(0.205 0 0)',
    primaryForeground: 'oklch(0.985 0 0)',
    accent: 'oklch(0.97 0 0)',
    accentForeground: 'oklch(0.205 0 0)',
    border: 'oklch(0.922 0 0)',
    ring: 'oklch(0.708 0 0)',
  },
};

// Dark Theme Colors
export const darkColors = {
  // Base Colors
  background: 'oklch(0.145 0 0)',
  foreground: 'oklch(0.985 0 0)',
  
  // Component Colors
  card: 'oklch(0.205 0 0)',
  cardForeground: 'oklch(0.985 0 0)',
  popover: 'oklch(0.205 0 0)',
  popoverForeground: 'oklch(0.985 0 0)',
  
  // Semantic Colors
  primary: 'oklch(0.922 0 0)',
  primaryForeground: 'oklch(0.205 0 0)',
  secondary: 'oklch(0.269 0 0)',
  secondaryForeground: 'oklch(0.985 0 0)',
  muted: 'oklch(0.269 0 0)',
  mutedForeground: 'oklch(0.708 0 0)',
  accent: 'oklch(0.269 0 0)',
  accentForeground: 'oklch(0.985 0 0)',
  
  // Feedback Colors
  destructive: 'oklch(0.704 0.191 22.216)',
  
  // UI Element Colors
  border: 'oklch(1 0 0 / 10%)',
  input: 'oklch(1 0 0 / 15%)',
  ring: 'oklch(0.556 0 0)',
  
  // Chart Colors
  chart: {
    color1: 'oklch(0.488 0.243 264.376)',
    color2: 'oklch(0.696 0.17 162.48)',
    color3: 'oklch(0.769 0.188 70.08)',
    color4: 'oklch(0.627 0.265 303.9)',
    color5: 'oklch(0.645 0.246 16.439)',
  },
  
  // Sidebar Colors
  sidebar: {
    background: 'oklch(0.205 0 0)',
    foreground: 'oklch(0.985 0 0)',
    primary: 'oklch(0.488 0.243 264.376)',
    primaryForeground: 'oklch(0.985 0 0)',
    accent: 'oklch(0.269 0 0)',
    accentForeground: 'oklch(0.985 0 0)',
    border: 'oklch(1 0 0 / 10%)',
    ring: 'oklch(0.556 0 0)',
  },
};

// Default export for easier imports
export default {
  light: lightColors,
  dark: darkColors,
};