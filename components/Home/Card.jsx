import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLOR from './../../constants/Colors';

const Card = ({
  item,
  isLoggedIn,
  setOpenModal,
  dispatch,
  home,
  router,
  addToFavorites,
  removeFromFavorites,
  openModal,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
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
          style={{ width: 'auto', height: 130, borderRadius: 10 }}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={styles.tag}>
            Rating : <MaterialCommunityIcons name="star" color={COLOR.secondary} size={16} />
            <Text>{item.reviews.score}</Text>
          </Text>
        </View>
        {!isLoggedIn ? (
          <View style={styles.priceSave}>
            <Text style={{ fontSize: 16 }}>{item.price.lead.formatted}</Text>
            <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
              <MaterialCommunityIcons name="heart-outline" color="black" size={25} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.priceSave}>
            <Text style={{ fontSize: 16 }}>{item.price.lead.formatted}</Text>
            {home.favorites.find((favorite) => favorite.id === item.id) ? (
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeFromFavorites(item.id));
                }}
              >
                <MaterialCommunityIcons name="heart" color="red" size={25} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  dispatch(addToFavorites(item));
                }}
              >
                <MaterialCommunityIcons name="heart-outline" color="black" size={25} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F4F9F9',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: COLOR.primary,
    padding: 10,
  },
  priceSave: {
    flex: 2,
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tag: {
    fontSize: 13,
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    width: 'max-content',
    alignSelf: 'flex-start',
    marginTop: 2,
  },
});

export default Card;
