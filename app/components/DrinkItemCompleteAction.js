import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function DrinkItemCompleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={ onPress }>
            <View style={styles.container}>
                <MaterialCommunityIcons 
                name="check-bold"
                size={25}
                color={colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.complete,
        width: 70,
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default DrinkItemCompleteAction;