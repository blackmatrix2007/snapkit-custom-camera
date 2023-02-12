import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'snapkit-custom-camera' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type SnapkitCustomCameraProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'SnapkitCustomCameraView';

export const SnapkitCustomCameraView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<SnapkitCustomCameraProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
