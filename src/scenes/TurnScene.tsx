import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { displayFont as fontFamily } from "../fonts";

export const TurnScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Turn"
      style={{ justifyContent: "center", alignItems: "center", padding: 96 }}
    >
      <Interactive.Div
        name="Turn line"
        style={{
          fontFamily,
          fontWeight: 600,
          fontSize: 76,
          color: "#f5f7ff",
          textAlign: "center",
          lineHeight: 1.2,
          opacity: interpolate(frame, [0, 0.5 * fps, 2.4 * fps, 3 * fps], [0, 1, 1, 0], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 0.6 * fps], [0.92, 1], {
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        What if AI could draft the first version?
      </Interactive.Div>
    </AbsoluteFill>
  );
};
