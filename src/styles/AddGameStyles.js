import { StyleSheet } from 'react-native';
import { colors } from './GlobalStyles';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.bg1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text1,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#FFF',
    backgroundColor: colors.bg3,
    marginBottom: 16,
  },
  button: {
    backgroundColor: colors.purpleLight,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
  disabledButton: {
    opacity: 0.5,
  },
  clearButton: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bg2,
    marginBottom: 20,
  },
  clearText: {
    color: colors.text1,
    fontWeight: '500',
    fontSize: 14,
  },
});
