import { AbsoluteFill, Composition, Sequence } from "remotion";
import { Background } from "./Background";
import { HookScene } from "./scenes/HookScene";
import { PainPointsScene } from "./scenes/PainPointsScene";
import { TurnScene } from "./scenes/TurnScene";
import { CoverRevealScene } from "./scenes/CoverRevealScene";
import { TitleScene } from "./scenes/TitleScene";
import { OutroScene } from "./scenes/OutroScene";

export const PromptBookTrailerComposition = () => {
  return (
    <Composition
      id="PromptBookTrailer"
      component={PromptBookTrailer}
      durationInFrames={750}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};

export const PromptBookTrailer: React.FC = () => {
  return (
    <AbsoluteFill name="Prompt Book Trailer" style={{ backgroundColor: "#05050f" }}>
      <Background />
      <Sequence name="Hook" durationInFrames={90} layout="none">
        <HookScene />
      </Sequence>
      <Sequence name="Pain points" from={90} durationInFrames={180} layout="none">
        <PainPointsScene />
      </Sequence>
      <Sequence name="Turn" from={270} durationInFrames={90} layout="none">
        <TurnScene />
      </Sequence>
      <Sequence name="Cover reveal" from={360} durationInFrames={150} layout="none">
        <CoverRevealScene />
      </Sequence>
      <Sequence name="Title" from={510} durationInFrames={150} layout="none">
        <TitleScene />
      </Sequence>
      <Sequence name="Outro" from={660} durationInFrames={90} layout="none">
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
