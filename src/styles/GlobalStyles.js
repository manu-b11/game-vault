import { StyleSheet } from 'react-native';

const colors = {
  bg0: '#0A0A12',
  bg1: '#14141B',
  bg2: '#1F1F2A',
  bg3: '#292936',
  purple: '#7C3AED',
  purpleLight: '#B794F4',
  blue: '#4FD1C5',
  text1: '#EDEDF6',
  text2: '#C1C1D0',
  text3: '#88889E',
  border: 'rgba(124, 58, 237, 0.3)',
};

const globalStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg0 },
  title: { fontSize: 22, fontWeight: '700', color: colors.text1 },
  text: { fontSize: 14, color: colors.text2 },
  button: {
    backgroundColor: colors.purple,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: colors.text1, fontWeight: '700' },
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.bg0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
  },
});

export { colors, globalStyles };
