// Shared colour tokens for inline SVG diagrams.
// CSS variables cannot be used directly in SVG attributes, so reference
// these constants instead of raw hex strings in diagram components.
export const PALETTE = {
  primary:     '#1a3a5c', // --color-primary (navy)
  accent:      '#2e86ab', // --color-accent  (blue)
  accentHover: '#1d6a8a', // --color-accent-hover
  surface:     '#f8fafc', // --color-surface
  border:      '#e2e8f0', // --color-border
  textMuted:   '#64748b', // --color-text-muted
  positive:    '#3bb273', // green (good outcome / high value)
  negative:    '#e84855', // red   (poor outcome / low value)
  warning:     '#f0a500', // amber (caution / moderate)
  purple:      '#9b5de5', // purple (used in variability diagrams)
};
