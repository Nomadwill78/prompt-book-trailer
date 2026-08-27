import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill name="Background" style={{ backgroundColor: "#05050f" }}>
      <Interactive.Div
        name="Teal glow"
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          left: -300,
          top: -220,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(45,212,191,0.55) 0%, rgba(45,212,191,0) 70%)",
          filter: "blur(50px)",
          translate: interpolate(frame, [0, durationInFrames], ["0px 0px", "60px 140px"], {
            easing: Easing.linear,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <Interactive.Div
        name="Blue glow"
        style={{
          position: "absolute",
          width: 1100,
          height: 1100,
          right: -420,
          top: 320,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0) 70%)",
          filter: "blur(70px)",
          translate: interpolate(frame, [0, durationInFrames], ["0px 0px", "-90px -70px"], {
            easing: Easing.linear,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <Interactive.Div
        name="Magenta glow"
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          left: 220,
          bottom: -420,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(217,70,239,0.4) 0%, rgba(217,70,239,0) 70%)",
          filter: "blur(60px)",
          translate: interpolate(frame, [0, durationInFrames], ["0px 0px", "-50px -110px"], {
            easing: Easing.linear,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
