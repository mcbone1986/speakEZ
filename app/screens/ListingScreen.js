import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Screen from '../components/Screen'
import Card from '../components/Card';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

const listings = [
    {
        id: 1,
        title: 'Lager',
        ac: '5.7%',
        image: require('../assets/beer.jpg')
    },
    {
        id: 2,
        title: 'I.P.A.',
        ac: '6.3%',
        image: require('../assets/ipa.png')
    },
    {
        id: 3,
        title: 'Wheat',
        ac: '5.2%',
        image: require('../assets/wheat.jpg')
    },
];

function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
             data={listings}
             keyExtractor={listing => listing.id.toString()}
             renderItem={({ item }) => 
                <Card 
                title={item.title}
                subTitle={item.ac}
                image={item.image}/>
                }/>
                <AppButton title="Messages"/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.grey,

    }
})

export default ListingScreen;