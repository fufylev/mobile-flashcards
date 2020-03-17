import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';

const Decks = () => {
  return (
    <View style={styles.container}>
        <Text>
            Decks
        </Text>
    </View>
  )
};

Decks.propTypes = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Decks;