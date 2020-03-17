import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

import Colors from '../../constants/Colors';
import IconWithBadge from '../IconWithBadge/IconWithBadge';
import Decks from '../../containers/Decks/Decks';
import Deck from '../../containers/Deck/Deck';
import AddDeck from '../../containers/AddDeck/AddDeck';

function HomeIconWithBadge(props) {
    return <IconWithBadge {...props} badgeCount={0} />;
}

const DeckStack = createStackNavigator();

function DeckStackScreen() {
    return (
        <DeckStack.Navigator>
            <DeckStack.Screen name="Decks" component={Decks} options={stackOptions.decks} />
            <DeckStack.Screen
                name="Deck"
                component={Deck}
                // options={({ route }) => ({ title: route.params.name })}
            />
        </DeckStack.Navigator>
    );
}

const AddDeckStack = createStackNavigator();

function AddDeckStackScreen() {
    return (
        <AddDeckStack.Navigator>
            <AddDeckStack.Screen name="AddDeck" component={AddDeck} options={stackOptions.addDeck} />
        </AddDeckStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : Colors.tintColor,
    },
    headerTintColor: Platform.OS === 'ios' ? Colors.tintColor : 'white',
};

const stackOptions = {
    decks: {
        headerTitle: 'Dashboard',
        ...defaultNavigationOptions,
    },
    addDeck: {
        headerTitle: 'New Deck',
        ...defaultNavigationOptions,
    },
    deck: {
        headerTitle: 'Deck',
        ...defaultNavigationOptions,
    },
};

export default function AppNavigation() {
    /*useEffect(() => {
    }, []);*/

    return (
        <NavigationContainer>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size = 30 }) => {
                        if (route.name === 'Decks') {
                            return (
                                <HomeIconWithBadge
                                    name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
                                    size={30}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Add Deck') {
                            return (
                                <FontAwesome name={focused ? 'plus-square' : 'plus-square-o'} size={30} color={color} />
                            );
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: Platform.OS === 'ios' ? Colors.tabIconSelected : 'white',
                    inactiveTintColor: Colors.tabIconDefault,
                    style: {
                        backgroundColor: Platform.OS === 'ios' ? 'white' : Colors.tintColor,
                        shadowColor: 'rgba(0, 0, 0, 0.24)',
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowRadius: 6,
                        shadowOpacity: 1,
                    },
                }}
            >
                <Tab.Screen name="Decks" component={DeckStackScreen} />
                <Tab.Screen name="Add Deck" component={AddDeckStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
