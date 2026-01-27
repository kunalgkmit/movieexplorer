import { COLORS } from "@constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: '45%',
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: COLORS.BG_CARD,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  poster: {
    width: '100%',
    height: 260,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  infoContainer: {
    padding: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 6,
  },

  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  releaseDate: {
    fontSize: 13,
    color: COLORS.TEXT_SECONDARY,
  },

  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.ACCENT_YELLOW,
  },
});