import { AbsoluteFill, Easing, Interactive, Sequence, interpolate, useCurrentFrame } from "remotion";
import { displayFont as fontFamily } from "../fonts";

const GrantsWord: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <Interactive.Div
        name="Grants"
        style={{
          fontFamily,
          fontWeight: 800,
          fontSize: 108,
          color: "#ffffff",
          textAlign: "center",
          scale: interpolate(frame, [0, 8, 38, 45], [0.85, 1, 1, 0.92], {
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          opacity: interpolate(frame, [0, 6, 38, 45], [0, 1, 1, 0], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Grants.
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const BoardPacketsWord: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <Interactive.Div
        name="Board packets"
        style={{
          fontFamily,
          fontWeight: 800,
          fontSize: 108,
          color: "#ffffff",
          textAlign: "center",
          scale: interpolate(frame, [0, 8, 38, 45], [0.85, 1, 1, 0.92], {
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          opacity: interpolate(frame, [0, 6, 38, 45], [0, 1, 1, 0], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Board packets.
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const DonorEmailsWord: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <Interactive.Div
        name="Donor emails"
        style={{
          fontFamily,
          fontWeight: 800,
          fontSize: 108,
          color: "#ffffff",
          textAlign: "center",
          scale: interpolate(frame, [0, 8, 38, 45], [0.85, 1, 1, 0.92], {
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          opacity: interpolate(frame, [0, 6, 38, 45], [0, 1, 1, 0], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Donor emails.
      </Interactive.Div>
    </AbsoluteFill>
  );
};

const SocialPostsWord: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <Interactive.Div
        name="Social posts"
        style={{
          fontFamily,
          fontWeight: 800,
          fontSize: 108,
          color: "#ffffff",
          textAlign: "center",
          scale: interpolate(frame, [0, 8, 38, 45], [0.85, 1, 1, 0.92], {
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          opacity: interpolate(frame, [0, 6, 38, 45], [0, 1, 1, 0], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Social posts.
      </Interactive.Div>
    </AbsoluteFill>
  );
};

export const PainPointsScene: React.FC = () => {
  return (
    <AbsoluteFill name="Pain points">
      <Sequence name="Grants" from={0} durationInFrames={45} layout="none">
        <GrantsWord />
      </Sequence>
      <Sequence name="Board packets" from={45} durationInFrames={45} layout="none">
        <BoardPacketsWord />
      </Sequence>
      <Sequence name="Donor emails" from={90} durationInFrames={45} layout="none">
        <DonorEmailsWord />
      </Sequence>
      <Sequence name="Social posts" from={135} durationInFrames={45} layout="none">
        <SocialPostsWord />
      </Sequence>
    </AbsoluteFill>
  );
};
