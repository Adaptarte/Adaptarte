import Toast from "react-native-toast-message";

type typeToast = "custom" | "error" | "info" | "success";

const toast = (
  text1: string,
  type: typeToast,
  iconColor?: string,
  iconName?: string,
  onPress?: () => void,
  text2?: string,
): void => {
  Toast.show({
    onPress: () => {
      onPress ? onPress : Toast.hide();
    },
    props: { iconColor, iconName },
    text1: text1,
    text2: text2,
    type: type,
  });
};

export { toast };
