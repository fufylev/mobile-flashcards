import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Alert, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import AppButton from '../../components/custom_ui/AppButton';
import { generateID } from '../../utils/helpers';
import { addCardToDeck } from "../../store/actions/decks";

const AddCard = ({navigation, route}) => {
    const dispatch = useDispatch();
    const {deckTitle, deckId} = route.params;
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const onPressHandler = () => {
        if (question.length === 0 || answer.length === 0) {
            Alert.alert(
                'Oooops!',
                'Both fields are required',
                [{text: 'OK', onPress: () => null}],
                {cancelable: false}
            );
            return
        }

        const card = {
            id: generateID(),
            question,
            answer
        };

        dispatch(addCardToDeck({card, deckId}));
        setQuestion('');
        setAnswer('');
        navigation.navigate('Deck', {deckId, deckTitle});
    };

    return (
        <ScrollView>

            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.top}>
                        <Text style={styles.text}>New card </Text>
                        <Text style={styles.text}>"{deckTitle}" deck</Text>
                        <TextInput
                            multiline
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={styles.input}
                            onChangeText={text => setQuestion(text)}
                            value={question}
                            maxLength={250}
                            placeholder='Question'
                        />
                        <TextInput
                            multiline
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={styles.input}
                            onChangeText={text => setAnswer(text)}
                            value={answer}
                            maxLength={250}
                            placeholder='Answer'
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.btn}>
                    <AppButton onPress={onPressHandler} fontSize={25}>
                        Submit
                    </AppButton>
                </View>
            </View>

        </ScrollView>

    )
};

export default AddCard

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
        // marginBottom: 30,
        fontSize: 26,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '95%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        marginVertical: 20
    },
    btn: {
        marginTop: 50,
    },
});
