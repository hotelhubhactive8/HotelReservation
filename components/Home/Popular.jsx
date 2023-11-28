import { Text, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { addToFavorites, removeFromFavorites, getHome } from '../../redux/slice/homeSlice';
import COLOR from './../../constants/Colors';
import Card from './Card';
import ModalBox from './ModalBox';

const Popular = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const home = useSelector((state) => state.home);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);

  return (
    <>
      <Text style={styles.title}>Top places</Text>
      <ModalBox
        openModal={openModal}
        setOpenModal={setOpenModal}
        setModalVisible={setOpenModal}
        router={router}
      />
      <View style={{ gap: 16 }}>
        {home.home.map((item, index) => (
          <Card
            key={index}
            item={item}
            isLoggedIn={isLoggedIn}
            setOpenModal={setOpenModal}
            dispatch={dispatch}
            home={home}
            router={router}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            openModal={openModal}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 3,
    marginBottom: 5,
    textTransform: 'capitalize',
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

export default Popular;
