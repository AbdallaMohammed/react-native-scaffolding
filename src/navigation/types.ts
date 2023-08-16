import type { RouteProp as NRouteProp } from '@react-navigation/native';

import type { AuthStackParamList } from './AuthNavigator';

export type RootStackParamList = AuthStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RouteProp<T extends keyof RootStackParamList> = NRouteProp<
  RootStackParamList,
  T
>;
