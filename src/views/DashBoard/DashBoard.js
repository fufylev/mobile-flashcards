import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import DecksList from './DecksList';
import { PADDING_HORIZONTAL } from '../../constants/dimensions';
import { setDecksToStorage } from '../../store/actions/decks';
import { clearStorage, exampleDeck } from '../../utils/helpers';

const DashBoard = () => {
    const dispatch = useDispatch();
    const [allDecks, setAllDecks] = useState([]);

    const getStorage = async () => {
        try {
            const decks = await AsyncStorage.getItem('decks');
            if (decks !== null) {
                const data = JSON.parse(decks);
                // console.log('Existing DB', data, data.length);
                if (data.length > 0) {
                    dispatch(setDecksToStorage(data));
                }
            } else {
                await AsyncStorage.setItem('decks', JSON.stringify(exampleDeck));
                dispatch(setDecksToStorage(exampleDeck));
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        //clearStorage();
        getStorage();
    }, []);

    const allDecksInStore = useSelector(state => state.deck.allDecks);

    useEffect(() => {
        setAllDecks(allDecksInStore);
        // console.log(allDecks);
    });

    return (
        <View style={styles.container}>
            <DecksList data={allDecks} style={styles.list}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: PADDING_HORIZONTAL,
    },
    list: {
        flex: 1,
        width: '100%',
    },
});

export default DashBoard;
