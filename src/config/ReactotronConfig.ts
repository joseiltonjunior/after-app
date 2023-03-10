import Reactotron, { overlay } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
// import sagaPlugin from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: any;
  }
}

if (__DEV__) {
  const tron = Reactotron.configure()

    .useReactNative()
    .use(reactotronRedux())
    // .use(sagaPlugin({ except: [''] }))
    .use(overlay())
    .connect();

  console.tron = tron;

  tron.clear!();
}
