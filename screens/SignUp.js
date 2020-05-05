import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heading, UserInput, PrimaryButton } from '../components';

//Components
// 1. Heading
// 2. Text Input
// 3. Button

export default SignUp = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Heading
                text="Sign Up"
            />

            <UserInput
                placeholder="Username"
                onChange={ () => {} }
            />

            <UserInput
                placeholder="Email"
                onChange={ () => {} }
            />

            <UserInput
                placeholder="Password"
                onChange={ () => {} }
                password={true}
            />

            <PrimaryButton
                title= "Sign Up"
                onPress={() => {}}
            />

            <PrimaryButton
                title= "Goto Login"
                onPress={() => navigation.navigate('SignIn')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
