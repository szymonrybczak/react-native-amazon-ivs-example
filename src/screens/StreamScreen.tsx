import React from 'react';
import IVSPlayer from 'amazon-ivs-react-native-player';
import {StackNavigatorParams} from '../types/StackNavigatorParams';
import {StackNavigatorRoutes} from '../types/StackNavigatorRoutes';
import {StackScreenProps} from '@react-navigation/stack';

type StackScreenNavigationProp<T extends StackNavigatorRoutes> =
  StackScreenProps<StackNavigatorParams, T>;

type StreamScreenProps = StackScreenNavigationProp<StackNavigatorRoutes.Stream>;

const StreamScreen = ({route}: StreamScreenProps) => {
  const {streamURL} = route.params;

  return <IVSPlayer streamUrl={streamURL} />;
};

export default StreamScreen;
