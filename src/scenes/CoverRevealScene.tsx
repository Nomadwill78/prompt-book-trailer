import { AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const CoverRevealScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill name="Cover reveal" style={{ justifyContent: "center", alignItems: "center" }}>
      <Interactive.Div
        name="Cover glow ring"
        style={{
          position: "absolute",
          width: 720,
          height: 1080,
          borderRadius: 24,
          boxShadow: "0 0 160px 40px rgba(45,212,191,0.35)",
          opacity: interpolate(frame, [0, 0.8 * fps], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <Img
        name="Book cover"
        src={staticFile("cover.jpg")}
        style={{
          width: 700,
          aspectRatio: "1005 / 1508",
          borderRadius: 20,
          objectFit: "cover",
          boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
          scale: interpolate(frame, [0, 0.9 * fps], [0.7, 1], {
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
