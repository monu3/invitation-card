interface PeacockMotifProps {
  className?: string;
  size?: number;
  color?: string;
}

const PeacockMotif = ({ className = "", size = 80, color = "currentColor" }: PeacockMotifProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Tail feathers - fan shape */}
    <path
      d="M50 55C30 35 15 25 10 20C15 30 25 45 50 65C75 45 85 30 90 20C85 25 70 35 50 55Z"
      fill={color}
      opacity="0.3"
    />
    <path
      d="M50 55C35 40 20 30 15 25C20 35 35 50 50 65C65 50 80 35 85 25C80 30 65 40 50 55Z"
      fill={color}
      opacity="0.4"
    />
    <path
      d="M50 55C40 45 28 38 22 32C28 42 40 52 50 65C60 52 72 42 78 32C72 38 60 45 50 55Z"
      fill={color}
      opacity="0.5"
    />
    {/* Tail feather eyes */}
    <circle cx="30" cy="30" r="3" fill={color} opacity="0.6" />
    <circle cx="20" cy="35" r="2.5" fill={color} opacity="0.6" />
    <circle cx="70" cy="30" r="3" fill={color} opacity="0.6" />
    <circle cx="80" cy="35" r="2.5" fill={color} opacity="0.6" />
    <circle cx="40" cy="22" r="2" fill={color} opacity="0.6" />
    <circle cx="60" cy="22" r="2" fill={color} opacity="0.6" />
    <circle cx="50" cy="18" r="2.5" fill={color} opacity="0.6" />
    {/* Body */}
    <ellipse cx="50" cy="60" rx="10" ry="12" fill={color} opacity="0.8" />
    {/* Neck */}
    <path
      d="M50 48C48 42 45 35 48 30"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    {/* Head */}
    <circle cx="48" cy="28" r="5" fill={color} opacity="0.9" />
    {/* Crown */}
    <path
      d="M45 23L48 18L51 23"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="48" cy="17" r="1.5" fill={color} />
    {/* Eye */}
    <circle cx="49" cy="27" r="1" fill="white" />
    {/* Beak */}
    <path
      d="M43 28L40 30L43 31"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Legs */}
    <line x1="47" y1="72" x2="45" y2="85" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="53" y1="72" x2="55" y2="85" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default PeacockMotif;
