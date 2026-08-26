interface PaisleyPatternProps {
  className?: string;
  size?: number;
  color?: string;
}

const PaisleyPattern = ({ className = "", size = 40, color = "currentColor" }: PaisleyPatternProps) => (
  <svg
    width={size}
    height={size * 1.5}
    viewBox="0 0 40 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Main paisley shape */}
    <path
      d="M20 5C10 5 5 15 5 25C5 40 15 55 20 58C25 55 35 40 35 25C35 15 30 5 20 5Z"
      fill={color}
      opacity="0.8"
    />
    {/* Inner paisley */}
    <path
      d="M20 12C14 12 10 18 10 25C10 36 16 48 20 50C24 48 30 36 30 25C30 18 26 12 20 12Z"
      fill="white"
      opacity="0.3"
    />
    {/* Center detail */}
    <circle cx="20" cy="25" r="4" fill={color} opacity="0.6" />
    <circle cx="20" cy="25" r="2" fill="white" opacity="0.5" />
    {/* Decorative dots */}
    <circle cx="20" cy="15" r="1" fill={color} opacity="0.5" />
    <circle cx="20" cy="35" r="1" fill={color} opacity="0.5" />
    <circle cx="15" cy="20" r="1" fill={color} opacity="0.5" />
    <circle cx="25" cy="20" r="1" fill={color} opacity="0.5" />
    <circle cx="15" cy="30" r="1" fill={color} opacity="0.5" />
    <circle cx="25" cy="30" r="1" fill={color} opacity="0.5" />
  </svg>
);

export default PaisleyPattern;
