import React from 'react';
import { View, SafeAreaView, Image, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { useSelector } from 'react-redux';

import COLOR from '../../constants/Colors';
import ICON from '../../constants/Icons';
import FormEdit from '../../components/Settings/FormEdit';
import NotLogin from '../../components/Login/NotLogin';

const Settings = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const renderHeader = () => {
    return (
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLOR.lightGray },
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
          <Image source={ICON.user} />
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
    backgroundColor: COLOR.lightGray,
    gap: 20,
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
  },

  formContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    flex: 1,
  },
});

export default Settings;
