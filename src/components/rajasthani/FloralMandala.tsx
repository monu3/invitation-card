interface FloralMandalaProps {
  className?: string;
  size?: number;
  color?: string;
  weight?: number;
}

const FloralMandala = ({ className = "", size = 120, color = "currentColor", weight = 1 }: FloralMandalaProps) => {
  const sw = (n: number) => n * weight;
  const op = (n: number) => Math.min(1, n * weight);

  return (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer ring */}
    <circle cx="60" cy="60" r="55" stroke={color} strokeWidth={sw(1)} opacity={op(0.3)} />
    <circle cx="60" cy="60" r="50" stroke={color} strokeWidth={sw(1)} opacity={op(0.4)} />
    
    {/* Outer petals */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
      <ellipse
        key={angle}
        cx="60"
        cy="15"
        rx="8"
        ry="20"
        fill={color}
        opacity={op(0.2)}
        transform={`rotate(${angle} 60 60)`}
      />
    ))}
    
    {/* Middle ring */}
    <circle cx="60" cy="60" r="35" stroke={color} strokeWidth={sw(1)} opacity={op(0.5)} />
    
    {/* Middle petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <ellipse
        key={angle}
        cx="60"
        cy="28"
        rx="6"
        ry="15"
        fill={color}
        opacity={op(0.3)}
        transform={`rotate(${angle} 60 60)`}
      />
    ))}
    
    {/* Inner ring */}
    <circle cx="60" cy="60" r="22" stroke={color} strokeWidth={sw(1)} opacity={op(0.6)} />
    
    {/* Inner petals */}
    {[0, 60, 120, 180, 240, 300].map((angle) => (
      <ellipse
        key={angle}
        cx="60"
        cy="40"
        rx="5"
        ry="10"
        fill={color}
        opacity={op(0.4)}
        transform={`rotate(${angle} 60 60)`}
      />
    ))}
    
    {/* Center */}
<circle cx="60" cy="60" r="10" fill={color} opacity={op(0.5)} />
    <circle cx="60" cy="60" r="6" fill="white" opacity={op(0.3)} />
    <circle cx="60" cy="60" r="3" fill={color} opacity={op(0.7)} />
    
    {/* Decorative dots between petals */}
    {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle) => (
      <circle
        key={angle}
        cx="60"
        cy="8"
        r="2"
        fill={color}
        opacity={op(0.4)}
        transform={`rotate(${angle} 60 60)`}
      />
    ))}
  </svg>
  );
};

export default FloralMandala;
