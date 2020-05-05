import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heading, UserInput, PrimaryButton } from '../components';

//Components
// 1. Heading
// 2. Text Input
// 3. Button

export default SignIn = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Heading
                text="Sign In"
            />

            <UserInput
                placeholder="Username"
                onChange={ () => {} }
            />

            <UserInput
                placeholder="Password"
                onChange={ () => {} }
                password={true}
            />

            <PrimaryButton
                title= "Sign In"
                onPress={() => navigation.navigate('Home')}
            />

            <PrimaryButton
                title= "Go Back to Sign Up"
                onPress={() => navigation.navigate('SignUp')}
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
