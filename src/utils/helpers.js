import { AsyncStorage } from 'react-native';

export function generateID() {
    return (
        Math.random()
            .toString(36)
            .substring(2, 15) +
        Math.random()
            .toString(36)
            .substring(2, 15)
    );
}

export const exampleDeck = [
    {
        id: generateID(),
        title: 'Example Deck',
        cards: [
            {
                id: generateID(),
                question: 'Does React Native work with Android?',
                answer: 'Yes!',
            },
            {
                id: generateID(),
                question: 'Does React Native support animations?',
                answer: 'Yes!',
            }
        ],
    }
];

export const setStorage = async decks => {
    try {
        await AsyncStorage.setItem('decks', JSON.stringify(decks));
        // console.log(await AsyncStorage.getItem('decks', data => console.log(data)))
    } catch (e) {
        console.log(e);
    }
};

export const clearStorage = async () => {
    try {
        await AsyncStorage.removeItem('decks');
    } catch (e) {
        console.log(e);
    }
};
