import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable';


function DrinkItem({ title, image, subTitle, onPress, renderRightActions, IconComponent }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>

        <TouchableHighlight 
            underlayColor={colors.light}
            onPress={onPress}>
            <View style={styles.container}>
            {IconComponent}
               {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white 
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        
    },
    title: {
        fontWeight: "600",
        fontSize: 28
    },
    subTitle: {
        color: colors.grey,
        fontSize: 20
    }
})

export default DrinkItem;