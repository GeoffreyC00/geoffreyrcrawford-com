import React from "react";
import { Composition } from "remotion";
import { AIOperatingSystem } from "./AIOperatingSystem";
import { DURATION, FPS, HEIGHT, WIDTH } from "./design";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AIOperatingSystem"
        component={AIOperatingSystem}
        durationInFrames={DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
