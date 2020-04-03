import { AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

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

const NOTIFICATION_KEY = 'Flashcards:notifications';

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
    return {
        title: 'Flash Cards!',
        body: "👋 Have you studied today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        },
    };
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then(data => {
          if (data === null) {
              Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                  if (status === 'granted') {
                      Notifications.cancelAllScheduledNotificationsAsync();

                      let tomorrow = new Date();
                      tomorrow.setDate(tomorrow.getDate() + 1);
                      tomorrow.setHours(20);
                      tomorrow.setMinutes(0);

                      Notifications.scheduleLocalNotificationAsync(createNotification(), {
                          time: tomorrow,
                          repeat: 'day',
                      });

                      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                  }
              });
          }
      });
}
