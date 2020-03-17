import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import DecksList from './DecksList';
import { PADDING_HORIZONTAL } from '../../constants/dimensions';


const Decks = ({ navigation }) => {
    const [decks, setDecks] = useState([]);
    
    const allDecks = useSelector(state => state.deck.allDecks);

    useEffect(() => {
        setDecks(allDecks);
    });

    console.log(decks);

    return (
        <View style={styles.container}>
            <DecksList data={decks} style={styles.list}/>
        </View>
    );
};

Decks.propTypes = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: PADDING_HORIZONTAL,
    },
    list: {
      flex:1,
      width: '100%'
    }
    
});

export default Decks;
