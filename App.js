import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import AppNavigation from "./src/components/navigation/AppNavigation";

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    );
}
