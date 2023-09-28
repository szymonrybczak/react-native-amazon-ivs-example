import {StackNavigatorRoutes} from './StackNavigatorRoutes';

export type StackNavigatorParams = {
  [StackNavigatorRoutes.Dashboard]: undefined;
  [StackNavigatorRoutes.Stream]: {streamURL: string};
};
