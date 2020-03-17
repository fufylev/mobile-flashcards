import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';

const Deck = ({ route }) => {
    const { deck } = route.params;
    return (
        <View style={styles.container}>
            <Text>{deck.title}</Text>
            <Text>{deck.id}</Text>
        </View>
    );
};

Deck.propTypes = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Deck;
