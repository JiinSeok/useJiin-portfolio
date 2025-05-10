# Theme System

This directory contains the theme system for the project. It provides a consistent way to define and use colors, typography, spacing, and other design tokens across the application.

## Color Palette

The color palette is defined in `colors.ts`. It includes both light and dark theme variants, with colors organized by their functional purpose:

- **Base Colors**: Background and foreground colors for the application
- **Component Colors**: Colors for specific components like cards and popovers
- **Semantic Colors**: Colors with semantic meaning like primary, secondary, etc.
- **Feedback Colors**: Colors used for feedback like destructive actions
- **UI Element Colors**: Colors for UI elements like borders, inputs, and focus rings
- **Chart Colors**: Colors used for charts and data visualizations
- **Sidebar Colors**: Colors specific to the sidebar component

### Usage

```tsx
import { colors } from '@/lib/theme'

// Using light theme colors
const primaryColor = colors.light.primary

// Using dark theme colors
const darkPrimaryColor = colors.dark.primary

// Using specific color categories
const chartColor1 = colors.light.chart.color1
```

## Important Notes

1. **Do not add new colors without design team approval**. The color palette is carefully designed to ensure consistency across the application.

2. **Use the semantic color names** rather than specific color values. This ensures that the colors will adapt correctly to theme changes.

3. **All colors are defined using the OKLCH color space** for better color perception and consistency.

4. **The color values match those defined in `globals.css`**. This file serves as a reference for developers to understand the color system.
