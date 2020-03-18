import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AppButton from '../../components/custom/AppButton';
import { addDeck } from '../../store/actions/decks';
import { generateID } from '../../utils/helpers';

const AddDeck = ({ navigation }) => {
    const [value, onChangeText] = React.useState('');
    const dispatch = useDispatch();

    const onPressHandler = () => {
        const deck = {
            id: generateID(),
            title: value,
            cards: [],
        };

        dispatch(addDeck(deck));
        onChangeText('');
        navigation.navigate('Deck', { deckId: deck.id, deckTitle: deck.title });
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.text}>Add the title of your new deck</Text>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize="sentences"
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        maxLength={40}
                    />
                </View>
                <View style={styles.btn}>
                    <AppButton onPress={onPressHandler} fontSize={25}>
                        Create Deck
                    </AppButton>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    top: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    text: {
        marginVertical: 20,
        fontSize: 26,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '90%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    btn: {
        marginBottom: 30,
    },
});

export default AddDeck;
