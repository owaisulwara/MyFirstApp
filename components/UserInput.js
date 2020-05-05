import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

export default UserInput = ({ placeholder, value, onChange, password }) => (
    <TextInput
        placeholder = { placeholder }
        onChangeText = { onChange }
        secureTextEntry = { password }
        style={styles.input}
    />
)

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 40,
        borderWidth: 2,
        borderColor: '#000',
        marginVertical: 10,
        padding: 10,
        borderRadius: 5
    }
})