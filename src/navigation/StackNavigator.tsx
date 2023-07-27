import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {StreamScreen, DashboardScreen} from './../screens/';
import {StackNavigatorRoutes} from '../types/StackNavigatorRoutes';
import {StackNavigatorParams} from '../types/StackNavigatorParams';

const Stack = createStackNavigator<StackNavigatorParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={StackNavigatorRoutes.Dashboard}
        component={DashboardScreen}
      />
      <Stack.Screen
        name={StackNavigatorRoutes.Stream}
        component={StreamScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};
