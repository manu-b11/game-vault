import { StyleSheet } from 'react-native';
import { colors } from './GlobalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg1,
    padding: 16,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },

  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 4,
    marginVertical: 15,
    color: '#b959fd',
    letterSpacing: 2,
  },

  card: {
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: colors.bg2,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  cardImage: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginRight: 14,
    backgroundColor: colors.bg3,
  },

  cardBody: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  cardTop: {
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text1,
    marginBottom: 6,
    textAlign: 'left',
  },

  description: {
    fontSize: 13,
    color: colors.text2,
    lineHeight: 18,
    textAlign: 'left',
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    gap: 8,
  },

  badgeRow: {
    flexDirection: 'row',
    gap: 5,
  },

  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: colors.bg3,
  },

  badgePurple: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: colors.purpleLight + '33',
  },

  badgeText: {
    fontSize: 10,
    color: colors.text2,
    fontWeight: '500',
  },

  badgeTextPurple: {
    fontSize: 10,
    color: colors.purpleLight,
    fontWeight: '500',
  },

  price: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.purpleLight,
    marginLeft: 12,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    fontSize: 14,
    color: colors.text2,
    marginTop: 8,
    letterSpacing: 0.3,
  },
});
