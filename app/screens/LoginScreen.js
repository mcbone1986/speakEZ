import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'
import { Formik } from 'formik'
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage'
import AppFormFill from '../components/AppFormFill'
import SubmitButton from '../components/SubmitButton'
import AppForm from '../components/AppForm'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {


    return (
      <Screen style={styles.container}>
          <Image 
            style={styles.logo}
            source={require('../assets/logo.png')}/>
        
        <AppForm
            initialValues={{email: '', password: '' }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            <AppFormFill
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                icon="email"
                textContentType="emailAddress"
                placeholder="Email" 
                />
            <AppFormFill 
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                />
                <SubmitButton title="Login"/>
        </AppForm>

      </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;