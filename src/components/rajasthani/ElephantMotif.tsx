interface ElephantMotifProps {
  className?: string;
  size?: number;
  color?: string;
}

const ElephantMotif = ({ className = "", size = 80, color = "currentColor" }: ElephantMotifProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Elephant body */}
    <path
      d="M25 55C25 45 30 35 40 30C50 25 60 28 65 35C70 42 68 50 65 55C62 60 55 65 50 68C45 71 35 70 30 65C25 60 25 57 25 55Z"
      fill={color}
      opacity="0.9"
    />
    {/* Head */}
    <circle cx="70" cy="40" r="12" fill={color} opacity="0.9" />
    {/* Trunk */}
    <path
      d="M78 42C82 45 85 50 83 55C81 60 75 62 72 58"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Ear */}
    <path
      d="M62 32C58 28 55 30 58 35C61 40 65 38 62 32Z"
      fill={color}
      opacity="0.7"
    />
    {/* Tusk */}
    <path
      d="M75 48L80 52L78 56"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Eye */}
    <circle cx="73" cy="38" r="1.5" fill="white" />
    {/* Decorative blanket */}
    <path
      d="M35 45C40 42 50 42 55 45C60 48 58 55 50 58C42 61 35 58 35 52V45Z"
      fill={color}
      opacity="0.6"
    />
    {/* Legs */}
    <rect x="32" y="65" width="6" height="15" rx="2" fill={color} opacity="0.9" />
    <rect x="45" y="68" width="6" height="15" rx="2" fill={color} opacity="0.9" />
    <rect x="55" y="65" width="6" height="15" rx="2" fill={color} opacity="0.9" />
    {/* Tail */}
    <path
      d="M25 50C20 48 18 52 20 55"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default ElephantMotif;
