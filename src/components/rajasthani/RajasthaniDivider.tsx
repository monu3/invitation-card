import ElephantMotif from "./ElephantMotif";
import PeacockMotif from "./PeacockMotif";
import PaisleyPattern from "./PaisleyPattern";

interface RajasthaniDividerProps {
  className?: string;
  variant?: "elephant" | "peacock" | "paisley" | "simple";
  color?: string;
}

const RajasthaniDivider = ({ className = "", variant = "simple", color = "hsl(11, 65%, 25%)" }: RajasthaniDividerProps) => {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 ${className}`}>
      <div className="gold-line flex-1 max-w-[100px]" />
      
      {variant === "elephant" && (
        <ElephantMotif size={40} color={color} />
      )}
      
      {variant === "peacock" && (
        <PeacockMotif size={40} color={color} />
      )}
      
      {variant === "paisley" && (
        <div className="flex gap-2">
          <PaisleyPattern size={20} color={color} />
          <PaisleyPattern size={20} color={color} className="rotate-180" />
          <PaisleyPattern size={20} color={color} />
        </div>
      )}
      
      {variant === "simple" && (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          <div className="w-3 h-3 rotate-45" style={{ backgroundColor: color, opacity: 0.6 }} />
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        </div>
      )}
      
      <div className="gold-line flex-1 max-w-[100px]" />
    </div>
  );
};

export default RajasthaniDivider;
