import React from 'react';
import { Button, StyleSheet } from 'react-native';

export default PrimaryButton = ({ title, onPress }) => (
    <Button
        onPress={onPress}
        title={title}
        color="#841584"
    />
);