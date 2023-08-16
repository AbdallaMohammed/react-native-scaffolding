import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from './useTheme';

export const NavigationContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useTheme();

  return (
    <SafeAreaProvider>
      <RNNavigationContainer theme={theme}>{children}</RNNavigationContainer>
    </SafeAreaProvider>
  );
};
