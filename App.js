import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import store from './src/store/index';
import AppNavigation from './src/components/navigation/AppNavigation';
import { bootstrap } from './src/bootstrap';
import { setLocalNotification } from "./src/utils/helpers";

export default function App() {
    useEffect(() => {
        setLocalNotification();
    }, []);

    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading 
            startAsync={bootstrap} 
            onFinish={() => setIsReady(true)} 
            onError={err => console.log(err)} />
        );
    }

    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}
