interface SparkleProps {
  className?: string;
  size?: number;
  color?: string;
  duration?: number;
  delay?: number;
}

const Sparkle = ({
  className = "",
  size = 24,
  color = "#D4AF37",
  duration = 3,
  delay = 0,
}: SparkleProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`sparkle-twinkle pointer-events-none ${className}`}
    style={{
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    }}
  >
    <path
      d="M12 0 C14 4 4 8 12 12 C20 8 10 4 12 0 Z"
      fill={color}
      opacity="0.9"
    />
    <path
      d="M12 8 C13 12 12 16 12 24 C12 16 11 12 12 8 Z"
      fill={color}
      opacity="0.7"
    />
  </svg>
);

export const FloatingSparkles = ({
  className = "",
  color = "#D4AF37",
}: {
  className?: string;
  color?: string;
}) => {
  const sparks = [
    { top: "8%", left: "12%", size: 18, duration: 3.2, delay: 0 },
    { top: "16%", left: "82%", size: 14, duration: 2.6, delay: 0.6 },
    { top: "28%", left: "68%", size: 20, duration: 3.8, delay: 1.2 },
    { top: "40%", left: "8%", size: 16, duration: 2.9, delay: 0.3 },
    { top: "55%", left: "90%", size: 12, duration: 3.4, delay: 1.6 },
    { top: "68%", left: "16%", size: 22, duration: 3.6, delay: 0.9 },
    { top: "76%", left: "74%", size: 15, duration: 2.7, delay: 0.4 },
    { top: "88%", left: "30%", size: 18, duration: 3.1, delay: 1.4 },
    { top: "92%", left: "88%", size: 13, duration: 2.5, delay: 0.8 },
    { top: "12%", left: "48%", size: 10, duration: 3.9, delay: 2.0 },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {sparks.map((s, i) => (
        <div
          key={i}
          className="sparkle-float"
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <Sparkle size={s.size} color={color} />
        </div>
      ))}
    </div>
  );
};

export default Sparkle;