import { Group, Switch } from '@mantine/core';
import type { FC } from "react";
import {
  useFeatureToggle,
  useSetFeatureToggle,
} from "../FeatureToggleProvider";

export const PluginToggle: FC = () => {
  const {
    enableGFM,
    enableMath,
    enableDiagram,
    enableBlockHandle,
    enableTwemoji,
  } = useFeatureToggle();
  const setFeatureToggle = useSetFeatureToggle();
  return (
    <Group>
        <Switch
          label={"Enable GFM"}
          checked={enableGFM}
          onChange={(value) => setFeatureToggle({ enableGFM: !enableGFM })}
        />
        <Switch
          label={"Enable Math"}
          checked={enableMath}
          onChange={(value) => setFeatureToggle({ enableMath: !enableMath })}
        />
        <Switch
          label={"Enable Diagram"}
          checked={enableDiagram}
          onChange={(value) =>
            setFeatureToggle({ enableDiagram: !enableDiagram })
          }
        />
        <Switch
          label={"Enable Twemoji"}
          checked={enableTwemoji}
          onChange={(value) =>
            setFeatureToggle({ enableTwemoji: !enableTwemoji })
          }
        />
        <Switch
          label={"Enable Block Handle"}
          checked={enableBlockHandle}
          onChange={(value) =>
            setFeatureToggle({ enableBlockHandle: !enableBlockHandle })
          }
        />
    </Group>
  );
};
