import {
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import COLOR from '../../../constants/Colors';
import { getDetails, resetDetails, getDescription } from '../../../redux/slice/detailSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HotelDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const home = useSelector((state) => state.home);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    dispatch(resetDetails());
  }, []);

  useEffect(() => {
    dispatch(getDetails({ id }));
  }, []);

  useEffect(() => {
    dispatch(getDescription({ id }));
  }, []);

  const { details, description, loading } = useSelector((state) => state.detail);

  const IMAGE = details?.propertyGallery?.images.slice(1, 6).map((item) => item.image);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLOR.lightGray },
          headerShadowVisible: false,
          headerTitle: 'Details',
          headerLeft: () => <Text></Text>,
        }}
      />
      <ScrollView style={{ maxWidth: '90%', paddingHorizontal: 16 }}>
        {loading && details.length < 1 ? (
          <ActivityIndicator />
        ) : (
          <View style={{ gap: 10 }}>
            <View>
              {details?.propertyGallery?.images?.slice(0, 1).map((img, index) => {
                return (
                  <Image
                    style={{
                      width: 300,
                      height: 200,
                      borderRadius: 10,
                      alignSelf: 'center',
                    }}
                    key={index}
                    source={{ uri: img?.image?.url }}
                  />
                );
              })}
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.header}>
                <View>
                  <Text style={styles.name}>{details?.summary?.name}</Text>
                  <Text style={styles.tagline}>{details?.summary?.tagline}</Text>
                </View>
              </View>
              <View>
                <Text>
                  <MaterialCommunityIcons name="star" size={18} color={COLOR.secondary} />
                  {details?.summary?.overview?.propertyRating?.rating}
                </Text>
              </View>
              <View>
                {!description ? <Text>Tidak ada deskripsi.</Text> : <Text>{description}</Text>}
              </View>
              <View>
                <FlatList
                  data={IMAGE}
                  renderItem={({ item }) => (
                    <Image
                      source={{ uri: item.url }}
                      style={{
                        width: 200,
                        height: 100,
                        borderRadius: 10,
                        marginRight: 15,
                      }}
                    />
                  )}
                  key={(item) => item.imageId}
                  horizontal
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.btnBooking}
              onPress={() => {
                if (auth.isLoggedIn === true) {
                  return router.push({
                    pathname: `booking/${details?.summary?.name}`,
                    params: details?.summary?.name,
                  });
                }
                router.push('login');
              }}
            >
              <MaterialCommunityIcons name="book-clock" color={COLOR.secondary} size={20} />
              <Text style={styles.bookingText}>Booking Sekarang</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  detailContainer: {
    gap: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
  },

  name: {
    fontSize: 20,
  },

  btnFav: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 15,
  },

  btnBooking: {
    backgroundColor: COLOR.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },

  bookingText: {
    textAlign: 'center',
    color: COLOR.secondary,
    fontSize: 18,
  },
});
export default HotelDetail;
