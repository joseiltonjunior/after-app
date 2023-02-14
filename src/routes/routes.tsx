import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SignIn} from '@screens/SignIn';

const Auth = createStackNavigator();

export function Routes() {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
}
