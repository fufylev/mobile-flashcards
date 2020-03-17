import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';

const Decks = ({ navigation }) => {
    const allDecks = useSelector(state => state.deck.allDecks);
    console.log(allDecks);

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
              <View >
                <Text>Decks</Text>
              </View>
            </Card>
        </View>
    );
};

Decks.propTypes = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    card: {
      width: '100%',
      padding: 20
    }
});

export default Decks;
