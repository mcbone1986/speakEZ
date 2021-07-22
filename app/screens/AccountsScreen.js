import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import DrinkItem from '../components/DrinkItem'
import Screen from '../components/Screen'
import colors from '../config/colors'
import Icon from '../components/Icon'
import { styleSheets } from 'min-document'

const menuItems = [
    {
        title: "My Orders",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]


function AccountsScreen() {
    return (
        <Screen styles={styles.screen}>
            <View style={styles.container}>
                <DrinkItem 
                title="Matt Bonebrake"
                subTitle="barkeep@speakeasy.com"
                image={require('../assets/me.jpg')}/>
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    // ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({ item }) => 
                        <DrinkItem 
                        title={item.title}
                        IconComponent={
                            <Icon 
                            name={item.icon.name} backgroundColor={item.icon.backgroundColor}
                            />
                        }
                        />
                    }
                    />
            </View>
            <DrinkItem 
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical:20,
    },
    screen: {
        backgroundColor: colors.white
    }

})

export default AccountsScreen;