import {Navigation, Options} from 'react-native-navigation';
import React from 'react';
import {StatusBar} from 'react-native';

export function NavigatorshowModal(
  name: string,
  options: Options = {},
  props: any = {},
) {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: name,
            options: options,
            passProps: props,
          },
        },
      ],
    },
  });
}

export function NavigatorPush(
  name: string,
  options: Options = {},
  props: any = {},
) {
  Navigation.push('mainStack', {
    component: {
      name: name,
      options: options,
      passProps: props,
    },
  });
}
