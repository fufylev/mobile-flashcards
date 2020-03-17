import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import DeckCard from './DeckCard';

const DecksList = ({ data = [] }) => {
    return <FlatList data={data} keyExtractor={deck => deck.id} renderItem={({ item }) => <DeckCard deck={item} />}/>;
};

export default DecksList;

const styles = StyleSheet.create({});
