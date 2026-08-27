import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { displayFont as fontFamily } from "../fonts";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Hook"
      style={{ justifyContent: "center", alignItems: "center", padding: 96 }}
    >
      <Interactive.Div
        name="Hook line"
        style={{
          fontFamily,
          fontWeight: 600,
          fontSize: 84,
          color: "#f5f7ff",
          textAlign: "center",
          lineHeight: 1.15,
          opacity: interpolate(frame, [0, 0.5 * fps, 2.4 * fps, 3 * fps], [0, 1, 1, 0], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, 0.5 * fps], ["0px 24px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Nonprofit work moves fast.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
