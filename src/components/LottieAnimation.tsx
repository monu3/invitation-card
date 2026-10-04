import { LottieSvg } from "lottie-react";

export interface LottieAnimationProps {
  src: string | object;
  className?: string;
  loop?: boolean | number;
  autoplay?: boolean;
  speed?: number;
}

const LottieAnimation = ({
  src,
  className = "",
  loop = true,
  autoplay = true,
  speed = 1,
}: LottieAnimationProps) => (
  <LottieSvg
    src={src}
    loop={loop}
    autoplay={autoplay}
    speed={speed}
    className={className}
    aria-hidden="true"
  />
);

export default LottieAnimation;