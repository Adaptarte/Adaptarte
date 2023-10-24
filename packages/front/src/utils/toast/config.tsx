import { View } from "react-native";
import type { BaseToastProps } from "react-native-toast-message";
import {
  BaseToast,
  ErrorToast,
  InfoToast,
  SuccessToast,
} from "react-native-toast-message";

import { Icon } from "components/Icon";

interface extendsProp {
  props?: {
    iconName?: string;
    iconColor?: string;
  };
}

const RenderIcon = (iconColor: string, iconName: string): JSX.Element => {
  return (
    <View
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        paddingLeft: 10,
      }}
    >
      <Icon color={iconColor} name={iconName} size={25} />
    </View>
  );
};

export const toastConfig = {
  custom: (props: BaseToastProps & extendsProp): JSX.Element => (
    <BaseToast
      {...props}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      renderLeadingIcon={(): React.ReactNode =>
        props.props?.iconName
          ? RenderIcon(
              props.props.iconColor ? props.props.iconColor : "black",
              props.props.iconName,
            )
          : undefined
      }
      text1Style={{
        fontSize: 15,
      }}
      text2Style={{
        fontSize: 12,
      }}
    />
  ),
  error: (props: BaseToastProps & extendsProp): JSX.Element => (
    <ErrorToast
      {...props}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      renderLeadingIcon={(): React.ReactNode =>
        RenderIcon(
          props.props?.iconColor ? props.props.iconColor : "red",
          props.props?.iconName ? props.props.iconName : "exclamation-circle",
        )
      }
      text1Style={{
        fontSize: 15,
      }}
      text2Style={{
        fontSize: 12,
      }}
    />
  ),
  info: (props: BaseToastProps & extendsProp): JSX.Element => (
    <InfoToast
      {...props}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      renderLeadingIcon={(): React.ReactNode =>
        RenderIcon(
          props.props?.iconColor ? props.props.iconColor : "#87CEFA",
          props.props?.iconName ? props.props.iconName : "info-circle",
        )
      }
      text1Style={{
        fontSize: 15,
      }}
      text2Style={{
        fontSize: 12,
      }}
    />
  ),
  success: (props: BaseToastProps & extendsProp): JSX.Element => (
    <SuccessToast
      {...props}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      renderLeadingIcon={(): React.ReactNode =>
        RenderIcon(
          props.props?.iconColor ? props.props.iconColor : "green",
          props.props?.iconName ? props.props.iconName : "check-circle",
        )
      }
      text1Style={{
        fontSize: 15,
      }}
      text2Style={{
        fontSize: 12,
      }}
    />
  ),
};
