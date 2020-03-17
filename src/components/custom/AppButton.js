import React from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import AppTextBold from './AppTextBold';
import Colors from '../../constants/Colors';

const AppButton = ({ children, onPress, color = Colors.tintColor, fontSize }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{ ...styles.button, backgroundColor: color }}>
                <AppTextBold style={{color: '#fff', fontSize}}>{children}</AppTextBold>
            </View>
        </Wrapper>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
});
