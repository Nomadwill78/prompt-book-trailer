import { AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { displayFont as poppinsFamily, displayFont as interFamily } from "../fonts";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Title"
      style={{ alignItems: "center", paddingTop: 130, paddingLeft: 96, paddingRight: 96 }}
    >
      <Img
        name="Cover thumbnail"
        src={staticFile("cover.jpg")}
        style={{
          width: 320,
          aspectRatio: "1005 / 1508",
          borderRadius: 16,
          objectFit: "cover",
          boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
          translate: interpolate(frame, [0, 0.7 * fps], ["0px 60px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
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
      <Interactive.Div
        name="Book title"
        style={{
          fontFamily: poppinsFamily,
          fontWeight: 800,
          fontSize: 80,
          color: "#ffffff",
          textAlign: "center",
          lineHeight: 1.1,
          marginTop: 52,
          opacity: interpolate(frame, [0.6 * fps, 1.1 * fps], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0.6 * fps, 1.1 * fps], ["0px 24px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        The Ultimate Prompt Book for Nonprofit Professionals
      </Interactive.Div>
      <Interactive.Div
        name="Book subtitle"
        style={{
          fontFamily: interFamily,
          fontWeight: 500,
          fontSize: 36,
          color: "#c6cbea",
          textAlign: "center",
          lineHeight: 1.35,
          marginTop: 26,
          opacity: interpolate(frame, [1.3 * fps, 1.9 * fps], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [1.3 * fps, 1.9 * fps], ["0px 20px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Harnessing AI to Transform the Way Nonprofits Work, Communicate, and Create Impact
      </Interactive.Div>
    </AbsoluteFill>
  );
};
