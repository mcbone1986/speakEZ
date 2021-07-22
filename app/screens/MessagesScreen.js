import React, { useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import DrinkItem from '../components/DrinkItem'
import DrinkItemCompleteAction from '../components/DrinkItemCompleteAction'
import Screen from '../components/Screen'

const initialMessages = [
    {
        id: 1,
        title: 'Table 1',
        description: '1 Lager, 1 Old Fashioned',
        image: require('../assets/me.jpg')
    },
    {
        id: 2,
        title: 'Table 2',
        description: '1 IPA, 2 Wheat, 1 Scotch',
        image: require('../assets/me.jpg')
    },
    {
        id: 3,
        title: 'Table 4',
        description: '1 IPA, 2 Wheat, 1 Scotch',
        image: require('../assets/me.jpg')
    },
    {
        id: 4,
        title: 'Table 4',
        description: '2 Wheat',
        image: require('../assets/me.jpg')
    },
    {
        id: 5,
        title: 'Table 5',
        description: '3 IPA',
        image: require('../assets/me.jpg')
    },
]

function MessagesScreen() {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);


    const handleComplete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <DrinkItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("message selected", item)}
                        renderRightActions={() =>
                            <DrinkItemCompleteAction onPress={() => handleComplete(item)} />}
                    />
                )}
                ItemSeparatorComponent={() =>
                    <View style={{ width: '100%', height: 1, backgroundColor: 'grey' }} />}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'Table 2',
                            description: '5 Scotch',
                            image: require('../assets/me.jpg')
                        },
                        {
                            id: 3,
                            title: 'Table 3',
                            description: '1 Lager',
                            image: require('../assets/me.jpg')
                        },
                        {
                            id: 4,
                            title: 'Table 4',
                            description: '2 Wheat',
                            image: require('../assets/me.jpg')
                        },
                        {
                            id: 5,
                            title: 'Table 5',
                            description: '3 IPA',
                            image: require('../assets/me.jpg')
                        },
                        {
                            id: 6,
                            title: 'Table 6',
                            description: '3 Sprites',
                            image: require('../assets/me.jpg')
                        },
                    ])
                }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

})
export default MessagesScreen;