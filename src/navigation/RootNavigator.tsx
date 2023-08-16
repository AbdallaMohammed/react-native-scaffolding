import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { useAuth } from '@/core';
import { useIsFirstTime } from '@/hooks/useIsFirstTime';
import { Onboarding } from '@/screens';

import { AuthNavigator } from './AuthNavigator';
import { NavigationContainer } from './NavigationContainer';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

export const Root = () => {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
    >
      {isFirstTime ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : (
        <Stack.Group>
          {status === 'signOut' ? (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          ) : (
            <Stack.Screen name="App" component={TabNavigator} />
          )}
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
