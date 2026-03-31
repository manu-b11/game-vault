import { StyleSheet } from 'react-native';
import { colors, globalStyles } from './GlobalStyles';

const styles = StyleSheet.create({
  ...globalStyles,
  container: {
    flex: 1,
    backgroundColor: colors.bg1,
  },
  gameImage: {
    width: '100%',
    height: 220,
    backgroundColor: colors.bg2,
  },
  card: {
    margin: 16,
    backgroundColor: colors.bg1,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 0,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text1,
    flex: 1,
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    color: colors.text2,
    marginBottom: 6,
    lineHeight: 20,
  },
  genreBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: colors.bg3,
  },
  genreText: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: '600',
  },
  favoriteText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.purpleLight,
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.purple,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: colors.bg3,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default styles;
