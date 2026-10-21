const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

function Svg({ size = 24, className = 'accent', children, viewBox = '0 0 24 24' }) {
  return (
    <svg width={size} height={size} viewBox={viewBox} className={className} {...base}>
      {children}
    </svg>
  )
}

export const HtmlIcon = (p) => (
  <Svg {...p}>
    <path d="M8 7l-5 5 5 5" />
    <path d="M16 7l5 5-5 5" />
    <path d="M14 4l-4 16" />
  </Svg>
)

export const JsIcon = (p) => (
  <Svg {...p}>
    <path d="M9 4C6 4 6 6 6 8s0 3-3 4c3 1 3 2 3 4s0 4 3 4" />
    <path d="M15 4c3 0 3 2 3 4s0 3 3 4c-3 1-3 2-3 4s0 4-3 4" />
  </Svg>
)

export const ReactIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="1.8" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </Svg>
)

export const NodeIcon = (p) => (
  <Svg {...p}>
    <path d="M12 2.5l8.5 5v9L12 21.5l-8.5-5v-9z" />
    <path d="M12 8v8" />
    <path d="M9 10.5l3-2.5 3 2.5" />
  </Svg>
)

export const MailIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Svg>
)

export const GithubIcon = (p) => (
  <Svg {...p}>
    <path d="M9 19c-4 1.2-4-2-6-2.5m12 4.5v-3.1a2.7 2.7 0 0 0-.8-2.1c2.8-.3 5.8-1.4 5.8-6.2a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.3s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.5 4.5 0 0 0-.1 3.3A4.8 4.8 0 0 0 4 9.7c0 4.8 3 5.9 5.8 6.2a2.7 2.7 0 0 0-.8 2.1V21" />
  </Svg>
)

export const LinkedinIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
  </Svg>
)

export const ArrowIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const UserIcon = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={1.4}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1-4.5 4-6.5 8-6.5s7 2 8 6.5" />
  </svg>
)

export const skillIcons = { html: HtmlIcon, js: JsIcon, react: ReactIcon, node: NodeIcon }
export const contactIcons = { mail: MailIcon, github: GithubIcon, linkedin: LinkedinIcon }

/* Project illustrations */

export function TreeArt() {
  const nodes = [
    [100, 20], [60, 60], [140, 60], [40, 105], [80, 105], [120, 105], [160, 105],
  ]
  return (
    <svg width="200" height="140" viewBox="0 0 200 140" className="accent" {...base}>
      <path d="M100 26L60 54M100 26L140 54M60 66L40 99M60 66L80 99M140 66L120 99M140 66L160 99" opacity="0.6" />
      {nodes.map(([cx, cy], i) => (
        <circle key={i} className="node" cx={cx} cy={cy} r="6" fill="currentColor" style={{ animationDelay: `${i * 0.3}s` }} />
      ))}
    </svg>
  )
}

export function FaceArt() {
  return (
    <svg width="200" height="140" viewBox="0 0 200 140" className="accent" {...base}>
      <path d="M50 40V22H68M150 40V22H132M50 100v18H68M150 100v18H132" />
      <ellipse cx="100" cy="70" rx="26" ry="34" opacity="0.7" />
      <circle cx="90" cy="64" r="2" fill="currentColor" />
      <circle cx="110" cy="64" r="2" fill="currentColor" />
      <path d="M92 82q8 6 16 0" opacity="0.7" />
      <line className="scan" x1="54" y1="30" x2="146" y2="30" strokeWidth="2.4" />
    </svg>
  )
}

export function SiteArt() {
  return (
    <svg width="200" height="140" viewBox="0 0 200 140" className="accent" {...base}>
      <rect x="30" y="20" width="140" height="100" rx="8" opacity="0.7" />
      <path d="M30 40H170" opacity="0.7" />
      <circle cx="42" cy="30" r="2.5" fill="currentColor" />
      <circle cx="52" cy="30" r="2.5" fill="currentColor" />
      <circle cx="62" cy="30" r="2.5" fill="currentColor" />
      <g className="wob">
        <rect x="44" y="54" width="60" height="9" rx="3" fill="currentColor" />
      </g>
      <rect x="44" y="70" width="44" height="6" rx="3" opacity="0.5" />
      <rect x="44" y="84" width="30" height="12" rx="6" fill="currentColor" opacity="0.8" />
      <circle cx="136" cy="76" r="22" opacity="0.7" />
    </svg>
  )
}

export const projectArt = { tree: TreeArt, face: FaceArt, site: SiteArt }
