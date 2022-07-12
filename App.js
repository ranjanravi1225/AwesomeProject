import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store/configStore';
import Dashboard from './src/containers/Dashborad/Dashboard';

export default App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Dashboard />
      </SafeAreaView>
    </Provider>
  );
};
