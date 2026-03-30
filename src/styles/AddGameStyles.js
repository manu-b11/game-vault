import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },

  button: {
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  disabledButton: {
    backgroundColor: '#aaa',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  clearButton: {
    marginTop: 10,
    alignItems: 'center',
  },

  clearText: {
    color: '#FF4D4D',
    fontWeight: 'bold',
  },
});
