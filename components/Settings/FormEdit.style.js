import COLOR from '../../constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 10,
  },

  inputContainer: {
    gap: 5,
  },

  head: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  label: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  input: {
    borderBottomWidth: 0.6,
    fontSize: 17,
  },

  logout: {
    color: 'red',
    borderTopWidth: 0.5,
    paddingVertical: 13,
    fontSize: 17,
  },

  save: {
    borderRadius: 5,
    padding: 12,
    backgroundColor: COLOR.primary,
  },
});

export default styles;
