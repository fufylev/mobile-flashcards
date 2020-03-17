import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Text, TextInput } from 'react-native';
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
        };

        dispatch(addDeck(deck));
        onChangeText('');
        navigation.navigate('Decks');
    };

    return (
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
            <AppButton onPress={onPressHandler} fontSize={25}>
                Create Deck
            </AppButton>
        </View>
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
        fontSize: 30,
    },
});

export default AddDeck;
