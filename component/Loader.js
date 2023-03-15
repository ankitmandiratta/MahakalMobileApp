import AnimatedLoader from 'react-native-animated-loader';
import React from 'react';
import { COLORS } from '../constants';

  const Loader = () => {
    return (

      <AnimatedLoader
        visible={true}
        overlayColor={'#ffff'}
        source={require('../assets/loader.json')}
        animationStyle={{
          color:COLORS.black,
          width: 100,
          height: 100,
        }}
        speed={1}
      />
    );
  };
  export default Loader;