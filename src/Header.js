import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                React Native Tutorial
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        backgroundColor: '#00f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    }
})

export default Header;