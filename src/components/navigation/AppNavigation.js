import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

import Colors from '../../constants/Colors';
import IconWithBadge from '../custom_ui/IconWithBadge';
import DashBoard from '../../views/DashBoard/DashBoard';
import Deck from '../../views/Deck/Deck';
import AddCard from '../../views/AddCard/AddCard';
import AddDeck from '../../views/AddDeck/AddDeck';
import Quiz from "../../views/Quiz/Quiz";

function HomeIconWithBadge(props) {
    return <IconWithBadge {...props} badgeCount={0} />;
}

const DeckStack = createStackNavigator();

function DeckStackScreen() {
    return (
        <DeckStack.Navigator>
            <DeckStack.Screen name="Decks" component={DashBoard} options={stackOptions.decks} />
            <DeckStack.Screen
                name="Deck"
                component={Deck}
                options={({ route }) => ({ ...stackOptions.deck, title: route.params.deckTitle })}
            />
            <DeckStack.Screen
                name="Add card"
                component={AddCard}
                options={({ route }) => ({ ...stackOptions.deck, title: route.params.title })}
            />
            <DeckStack.Screen
                name="Start Quiz"
                component={Quiz}
                options={({ route }) => ({ ...stackOptions.deck, title: route.params.title })}
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
        backgroundColor: Platform.OS === 'ios' ? 'white' : Colors.headerTitle,
    },
    headerTintColor: Platform.OS === 'ios' ? Colors.headerTitle : 'white',
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
        ...defaultNavigationOptions,
    },
};

export default function AppNavigation() {
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
                        backgroundColor: Platform.OS === 'ios' ? 'white' : Colors.headerTitle,
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
