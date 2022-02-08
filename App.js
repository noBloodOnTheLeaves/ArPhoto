import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroNode,
  ViroConstants,
  ViroARSceneNavigator,
  ViroARImageMarker,
  ViroBox,
  ViroVideo,
} from '@viro-community/react-viro';
import targetViroARTrackingTargets from '@viro-community/react-viro/components/AR/ViroARTrackingTargets';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  targetViroARTrackingTargets.createTargets({
    targetOne: {
      source: require('./resourse/img/flowers.jpg'),
      physicalWidth: 0.1,
      orientation: 'Up',
      type: 'Image',
    },
  });

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Игорь!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {/*<ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />*/}

      <ViroARImageMarker target={'targetOne'}>
        <ViroVideo
          source={require('./resourse/video/flower.mp4')}
          loop={false}
          position={[0, 0.02, -5]}
          scale={[0.15, 0.15, 0]}
        />
        {/* <ViroBox position={[0, 0.02, 0]} scale={[0.05, 0.05, 0.05]} />*/}
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
