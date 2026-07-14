import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { colors, scenes } from "./design";
import { SceneHook } from "./scenes/SceneHook";
import { SceneDisconnected } from "./scenes/SceneDisconnected";
import { SceneUnify } from "./scenes/SceneUnify";
import { SceneAIEngine } from "./scenes/SceneAIEngine";
import { SceneDashboard } from "./scenes/SceneDashboard";
import { SceneCloser } from "./scenes/SceneCloser";

/**
 * 30s vertical product reveal for the AI Marketing Operating System.
 * 1080×1920 · 30fps · cinematic SaaS launch pacing.
 */
export const AIOperatingSystem: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <Sequence
        from={scenes.hook.start}
        durationInFrames={scenes.hook.end - scenes.hook.start}
        name="Hook"
      >
        <SceneHook />
      </Sequence>

      <Sequence
        from={scenes.disconnected.start}
        durationInFrames={scenes.disconnected.end - scenes.disconnected.start}
        name="Disconnected"
      >
        <SceneDisconnected />
      </Sequence>

      <Sequence
        from={scenes.unify.start}
        durationInFrames={scenes.unify.end - scenes.unify.start}
        name="Unify"
      >
        <SceneUnify />
      </Sequence>

      <Sequence
        from={scenes.aiEngine.start}
        durationInFrames={scenes.aiEngine.end - scenes.aiEngine.start}
        name="AI Engine"
      >
        <SceneAIEngine />
      </Sequence>

      <Sequence
        from={scenes.dashboard.start}
        durationInFrames={scenes.dashboard.end - scenes.dashboard.start}
        name="Dashboard"
      >
        <SceneDashboard />
      </Sequence>

      <Sequence
        from={scenes.closer.start}
        durationInFrames={scenes.closer.end - scenes.closer.start}
        name="Closer"
      >
        <SceneCloser />
      </Sequence>
    </AbsoluteFill>
  );
};
