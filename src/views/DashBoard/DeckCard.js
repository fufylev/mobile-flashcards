import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { PADDING_HORIZONTAL } from '../../constants/dimensions';
import AppTextBold from '../../components/custom_ui/AppTextBold';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';

const DeckCard = ({ deck }) => {
    const navigation = useNavigation();
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - PADDING_HORIZONTAL * 2);

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - PADDING_HORIZONTAL * 2;
            setDeviceWidth(width);
        };

        Dimensions.addEventListener('change', update);

        return () => {
            Dimensions.removeEventListener('change', update);
        };
    });

    const onOpen = () => {
        navigation.navigate('Deck', { deckId: deck.id, deckTitle: deck.title });
    };

    return (
        <View style={{ flex: 1, width: deviceWidth, marginBottom: 20 }}>
            <TouchableOpacity onPress={() => onOpen()}>
                <Card style={styles.card}>
                    <View>
                        <AppTextBold style={styles.title}>{deck.title}</AppTextBold>
                        <Text>Cards - {deck.cards.length}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        </View>
    );
};

export default DeckCard;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        marginBottom: 20,
    },
    card: {
        width: '100%',
        padding: 20,
    },
    title: {
        fontSize: 20,
        paddingBottom: 15,
        color: Colors.tintColor,
    },
});
