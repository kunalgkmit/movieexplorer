import { COLORS } from "@constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
    width: '100%',
    height: 52,
    backgroundColor: COLORS.BUTTON_COLOR,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: COLORS.PRIMARY,
    fontSize: 18,
    fontWeight: '600',
  },
})