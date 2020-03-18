import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import AppTextBold from '../../components/custom/AppTextBold';
import AppButton from '../../components/custom/AppButton';
import { PADDING_HORIZONTAL } from '../../constants/dimensions';
import Colors from '../../constants/Colors';

const Deck = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { deckId } = route.params;
    const deck = useSelector(state => state.deck.allDecks.find(el => el.id === deckId));

    const onAddPress = () => {
        navigation.navigate('Add card', { title: `New card for ${deck.title}`, deckId: deck.id });
    };

    const onDeletePress = () => {

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
                        Add Card
                    </AppButton>
                </View>
                <View style={styles.btn}>
                    <AppButton fontSize={26} color={Colors.quizButton}>
                        Quiz
                    </AppButton>
                </View>
                <View style={styles.btn}>
                    <AppButton fontSize={26} color={Colors.deleteButton}>
                        Delete deck
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
