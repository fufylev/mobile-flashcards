import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';

const Deck = () => {
    return (
        <View style={styles.container}>
            <Text>Deck</Text>
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
