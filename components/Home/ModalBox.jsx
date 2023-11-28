import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLOR from './../../constants/Colors';

const ModalBox = ({ openModal, setOpenModal, setModalVisible, router }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openModal}
      onRequestClose={() => setModalVisible(!openModal)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => setOpenModal(!openModal)}
            style={{ alignSelf: 'flex-end' }}
          >
            <MaterialCommunityIcons name="close" size={18} />
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/sad.png')}
            style={{ width: 70, height: 70 }}
          />
          <Text style={styles.modalText}>You need to login</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setOpenModal(!openModal);
              router.replace('login');
            }}
          >
            <Text style={styles.textStyle}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 50,
    elevation: 2,
    backgroundColor: COLOR.primary,
  },
  textStyle: {
    color: COLOR.white,
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default ModalBox;
