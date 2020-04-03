import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import AppButton from '../../components/custom_ui/AppButton';

const Quiz = ({ navigation, route }) => {
    const [quizNumber, setQuizNumber] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const { deckId } = route.params;
    const deck = useSelector(state => state.deck.allDecks.find(el => el.id === deckId));
    const cards = deck.cards;
    const length = cards.length;

    const onSeeAnswerPress = () => {
        setShowAnswer(!showAnswer);
    };

    const onBtnPressed = buttonName => {
        setQuizNumber(quizNumber + 1);
        setCorrectAnswersNumber(buttonName === 'correct' ? correctAnswersNumber + 1 : correctAnswersNumber);
        setShowAnswer(false);

        if (quizNumber + 1 >= length) {
            setShowResult(true);
        }
    };

    const onRepeatPressed = () => {
        setQuizNumber(0);
        setShowAnswer(false);
        setCorrectAnswersNumber(0);
        setShowResult(false);
    };

    const onGoBackPressed = () => {
        navigation.goBack();
    };

    return (
        <ScrollView>
            {showResult && (
                <View style={styles.card}>
                    <Text style={styles.text}>Correct answers - {correctAnswersNumber}</Text>
                    <Text style={styles.text}>Incorrect answers - {length - correctAnswersNumber}</Text>
                    <View style={styles.btn}>
                        <AppButton fontSize={26} color={Colors.correct} onPress={onRepeatPressed}>
                            Repeat?
                        </AppButton>
                    </View>
                    <View style={styles.btn}>
                        <AppButton fontSize={26} color={Colors.createButton} onPress={onGoBackPressed}>
                            Back
                        </AppButton>
                    </View>
                </View>
            )}
            {!showResult && (
                <View style={styles.container}>
                    <Text style={styles.pagination}>
                        {quizNumber + 1} / {length}
                    </Text>
                    <View style={styles.card}>
                        <Text style={styles.text}>
                            {!showAnswer ? cards[quizNumber].question : cards[quizNumber].answer}
                        </Text>
                        <View style={styles.answerBtn}>
                            <Button
                                title={!showAnswer ? 'See the answer' : 'Back to question'}
                                onPress={onSeeAnswerPress}
                                color={Colors.deleteButton}
                            />
                        </View>
                        <View style={styles.btn}>
                            <AppButton fontSize={30} color={Colors.correct} onPress={() => onBtnPressed('correct')}>
                                Correct
                            </AppButton>
                        </View>
                        <View style={styles.btn}>
                            <AppButton fontSize={30} color={Colors.incorrect} onPress={() => onBtnPressed('incorrect')}>
                                Incorrect
                            </AppButton>
                        </View>
                    </View>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    pagination: {
        fontSize: 30,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 50,
        minHeight: 70,
    },
    btn: {
        marginTop: 30,
        width: 200,
    },
    answerBtn: {
        marginBottom: 30,
        width: 200,
    },
});

export default Quiz;
