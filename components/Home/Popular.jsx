import { Text, View, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { addToFavorites, removeFromFavorites, getHome } from '../../redux/slice/homeSlice';
import COLOR from './../../constants/Colors';

const Popular = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const home = useSelector((state) => state.home);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleFavoriteToggle = (item) => {
    if (home.favorites.find((favorite) => favorite.id === item.id)) {
      dispatch(removeFromFavorites(item.id));
      console.log('ini hapus', item.id);
    } else {
      dispatch(addToFavorites(item));
      console.log('ini tambah', item);
    }
  };

  const renderProperty = (item, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => {
        console.log(item.id);
        router.push({
          pathname: `details/${item.id}`,
          params: item.id,
        });
      }}
      style={styles.card}
    >
      <View style={{ borderRadius: 20 }}>
        <Image
          source={{ uri: item.propertyImage.image.url }}
          style={{ width: 'auto', height: 120, borderRadius: 10 }}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 10,
        }}
      >
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>{item.name}</Text>
          <Text
            style={{
              fontSize: 14,
              alignItems: 'center',
            }}
          >
            <MaterialCommunityIcons name="star" color={COLOR.secondary} size={16} />
            <Text style={{ color: '#F8F0E5' }}>{item.reviews.score}</Text>
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexDirection: 'row',
            gap: 5,
          }}
        >
          <Text style={{ fontSize: 16, color: 'white' }}>{item.price.lead.formatted}</Text>
          <TouchableOpacity onPress={() => handleFavoriteToggle(item)}>
            {home.favorites.find((favorite) => favorite.id === item.id) ? (
              <MaterialCommunityIcons name="heart" color="red" size={25} />
            ) : (
              <MaterialCommunityIcons name="heart-outline" color="white" size={25} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Text style={styles.title}>Top Destination</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={handleOpenModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setOpenModal(!openModal)}
              style={{ alignSelf: 'flex-end' }}
            >
              <MaterialCommunityIcons name="close" size={18} />
            </TouchableOpacity>
            <Text style={styles.modalText}>Anda belum login.</Text>
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
      <View style={{ gap: 16 }}>
        {!isLoggedIn ? home.home.map(renderProperty) : home.home.map(renderProperty)}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLOR.primary,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: 'grey',
  },
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
    backgroundColor: COLOR.secondary,
  },
  textStyle: {
    color: COLOR.primary,
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
