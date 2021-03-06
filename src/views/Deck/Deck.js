import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, StyleSheet, Text, View } from 'react-native';
import AppTextBold from '../../components/custom_ui/AppTextBold';
import AppButton from '../../components/custom_ui/AppButton';
import { PADDING_HORIZONTAL } from '../../constants/dimensions';
import Colors from '../../constants/Colors';
import { removeDeck } from '../../store/actions/decks';

const Deck = ({route, navigation}) => {
    const dispatch = useDispatch();
    const {deckId} = route.params;
    const deck = useSelector(state => state.deck.allDecks.find(el => el.id === deckId));

    const onAddPress = () => {
        navigation.navigate('Add card', {
            title: `New card`,
            deckId: deck.id,
            deckTitle: deck.title,
        });
    };

    const onDeletePress = () => {
        Alert.alert(
            'Delete Deck',
            `Are you sure? You cannot undo this action.`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        dispatch(removeDeck(deck.id));
                        navigation.navigate('Decks');
                    },
                },
            ],
            {cancelable: false},
        );
    };

    const onQuizPress = () => {
        navigation.navigate('Start Quiz', {
            title: `Quiz`,
            deckId: deck.id,
        })
    };

    if (!deckId || !deck) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <AppTextBold style={styles.title}>{deck.title}</AppTextBold>
                <Text style={styles.text}>Cards - {deck.cards.length}</Text>
            </View>
            <View>
                <View style={styles.btn}>
                    <AppButton fontSize={26} color={Colors.createButton} onPress={onAddPress}>
                        Add New Card
                    </AppButton>
                </View>
                {deck.cards.length > 0 && <View style={styles.btn}>
                    <AppButton fontSize={26} color={Colors.quizButton} onPress={onQuizPress}>
                        Start Quiz
                    </AppButton>
                </View>}
                <View style={styles.btn}>
                    <AppButton fontSize={26} color={Colors.deleteButton} onPress={onDeletePress}>
                        Delete Deck
                    </AppButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: PADDING_HORIZONTAL,
    },
    head: {
        flex: 1,
    },
    title: {
        marginTop: 30,
        fontSize: 35,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
    },
    btn: {
        marginVertical: 20,
    },
});

export default Deck;
