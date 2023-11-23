import React from 'react';
import { View, SafeAreaView, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Stack } from 'expo-router';
import { useSelector } from 'react-redux';

import COLOR from '../../constants/Colors';
import ICON from '../../constants/Icons';
import FormEdit from '../../components/Settings/FormEdit';
import NotLogin from '../../components/Login/NotLogin';

const Profile = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const renderHeader = () => {
    return (
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLOR.white },
          headerShadowVisible: false,
          headerTitle: isLoggedIn ? 'Settings' : '',
          headerTitleStyle: {},
        }}
      />
    );
  };

  const renderLoggedInContent = () => (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        <View style={styles.icon}>
          <Image source={ICON.user} style={{ width: '90%', height: '100%' }} />
        </View>
        <View style={styles.formContainer}>
          <FormEdit />
        </View>
      </SafeAreaView>
    </ScrollView>
  );

  return isLoggedIn ? renderLoggedInContent() : <NotLogin />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    gap: 20,
    height: Dimensions.get('screen').height - 140,
  },

  icon: {
    width: 60,
    height: 60,
    backgroundColor: COLOR.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
  },

  formContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    flex: 1,
  },
});

export default Profile;
