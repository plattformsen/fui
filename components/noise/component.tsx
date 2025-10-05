/**
 * A component that adds a noise overlay to the entire
 * screen.
 *
 * This can be used to add a subtle texture to the
 * background, making it less flat and more visually
 * interesting.
 *
 * ```tsx
 * import Noise from "@fui/noise";
 *
 * <Noise size={300} />
 * ```
 *
 * @module
 */

import type { JSX } from "preact/jsx-runtime";

/** Props for the {@link Noise} component. */
export interface NoiseProps {
  /**
   * The size of the noise pattern.
   *
   * Image is 250x250, so 250 will make it 1:1. However,
   * the default value is set to 300 to make it a bit
   * bigger and somewhat more noticeable.
   */
  size?: number;
}

/**
 * A component that adds a noise overlay to the entire
 * screen.
 *
 * This can be used to add a subtle texture to the
 * background, making it less flat and more visually
 * interesting.
 *
 * @returns A JSX element that renders the noise overlay.
 */
export default function Noise({
  size = 300,
}: NoiseProps = {}): JSX.Element {
  return (
    <div
      class="inset-0 w-screen h-screen opacity-50 pointer-events-none z-[-9999] fixed mix-blend-overlay brightness-100 contrast-150 bg-repeat"
      style={{
        backgroundImage:
          `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
