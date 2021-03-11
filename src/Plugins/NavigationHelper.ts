import React from 'react';
import { StackActions } from '@react-navigation/native';

export const isReadyRef = React.createRef<any>();
export const navigationRef = React.createRef<any>();

const NavigationHelper = {
  navigate(name: string, params?: object) {
    if (isReadyRef.current && navigationRef.current) {
      // Perform navigation if the app has mounted
      // @ts-ignore
      navigationRef.current.navigate(name, params);
    } else {
      //TODO MAYBE IT CAN ADD SOME CODES.
    }
  },
  navigateAndReset(name: string, params?: object) {
    if (isReadyRef.current && navigationRef.current) {
      // Perform navigation if the app has mounted
      // @ts-ignore
      navigationRef.current.popToTop();
      navigationRef.current.navigate(name, params);
    } else {
      //TODO MAYBE IT CAN ADD SOME CODES.
    }
  },
  back(): void {
    navigationRef.current.goBack();
  },
  removeTop: () => {
    navigationRef.current.dispatch(StackActions.popToTop());
  },
};

export default NavigationHelper;
