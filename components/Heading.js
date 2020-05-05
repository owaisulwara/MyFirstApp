import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default Heading = ({text}) => (
    <Text style={styles.heading}>
        {text}
    </Text>
);


const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
