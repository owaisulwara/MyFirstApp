import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Heading } from '../components';

export default Home = () => (
    <View style={styles.container}>
        <Heading
        text="Home"
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})