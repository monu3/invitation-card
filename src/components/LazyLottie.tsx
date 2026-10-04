import { lazy, Suspense } from "react";
import type { LottieAnimationProps } from "@/components/LottieAnimation";

const LottieAnimation = lazy(() => import("@/components/LottieAnimation"));

const LazyLottie = (props: LottieAnimationProps) => (
  <Suspense fallback={null}>
    <LottieAnimation {...props} />
  </Suspense>
);

export default LazyLottie;