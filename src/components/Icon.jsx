import * as LucideIcons from 'lucide-react'

// Dynamic icon lookup so data files can reference icons by string name.
// Using a namespace import + bracket lookup (instead of one named import per
// icon) means an unrecognised name just renders nothing instead of breaking
// the whole build.
export default function Icon({ name, className, strokeWidth = 1.8, size }) {
  const Cmp = LucideIcons[name]
  if (!Cmp) return null
  return <Cmp className={className} strokeWidth={strokeWidth} size={size} aria-hidden="true" />
}
