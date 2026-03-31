import { StyleSheet } from 'react-native';
import { colors } from './GlobalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg1,
    padding: 16,
    alignItems: 'center',
  },
  indicator: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text1,
    textAlign: 'center',
    marginBottom: 12,
  },
  newsCard: {
    width: '100%',
    backgroundColor: colors.bg2,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  newsImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text1,
    marginBottom: 8,
    textAlign: 'center',
  },
  newsDescription: {
    fontSize: 14,
    color: colors.text2,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: colors.purple,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
