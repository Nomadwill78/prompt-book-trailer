import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { displayFont as poppinsFamily, displayFont as interFamily } from "../fonts";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Outro"
      style={{ justifyContent: "center", alignItems: "center", padding: 96 }}
    >
      <Interactive.Div
        name="Tagline"
        style={{
          fontFamily: poppinsFamily,
          fontWeight: 800,
          fontSize: 76,
          color: "#ffffff",
          textAlign: "center",
          lineHeight: 1.15,
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 0.6 * fps], [0.9, 1], {
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        AI drafts. Humans decide.
      </Interactive.Div>
      <Interactive.Div
        name="Author credit"
        style={{
          fontFamily: interFamily,
          fontWeight: 500,
          fontSize: 34,
          color: "#c6cbea",
          textAlign: "center",
          marginTop: 40,
          opacity: interpolate(frame, [0.7 * fps, 1.2 * fps], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Dr. Damon D. Williams · Nomad Consulting
      </Interactive.Div>
      <Interactive.Div
        name="Call to action"
        style={{
          fontFamily: interFamily,
          fontWeight: 600,
          fontSize: 40,
          color: "#2dd4bf",
          textAlign: "center",
          marginTop: 64,
          opacity: interpolate(frame, [1.4 * fps, 1.9 * fps], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Get your copy today
      </Interactive.Div>
    </AbsoluteFill>
  );
};
