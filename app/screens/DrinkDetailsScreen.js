import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppText from '../components/AppText'
import colors from '../config/colors'
import DrinkItem from '../components/DrinkItem'

function DrinkDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/beer.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Lager</AppText>
                <AppText style={styles.details}>With hints of a cool summer morning. 5.7% AC</AppText>
                <View style={styles.userContainer}>
                <DrinkItem
                    image={require("../assets/me.jpg")}
                    title="Matt Bonebrake"
                    subTitle="In-House Sommelier"
                />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    details: {
        color: colors.grey,
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 10,
    },
    image: {
        width: "100%",
        height: 300
    },
    title: {
        fontSize: 36,
        fontWeight: "500"
    },
    userContainer: {
        marginVertical: 50
    }
})

export default DrinkDetailsScreen;