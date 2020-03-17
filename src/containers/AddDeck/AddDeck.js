import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';

const AddDeck = () => {
  return (
    <View style={styles.container}>
      <Text>
          Add Deck
      </Text>
    </View>
  )
};

AddDeck.propTypes = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AddDeck;