import { AsyncStorage } from 'react-native';

export function generateID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export const setStorage = async (decks) => {
    try {
        await AsyncStorage.setItem('decks', JSON.stringify(decks));
    } catch (e) {
        console.log(e);
    }
};

export const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        console.log(e);
    }
};