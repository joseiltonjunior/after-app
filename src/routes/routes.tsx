import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '@screens/SignIn';
import { Password } from '@screens/SignIn/Password';
import { SignUp } from '@screens/SignUp';
import { Home } from '@screens/Home';

const Auth = createStackNavigator();

export function Routes() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="Password" component={Password} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="Home" component={Home} />
    </Auth.Navigator>
  );
}
