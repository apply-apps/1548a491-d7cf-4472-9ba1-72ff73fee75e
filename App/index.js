// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const Stack = createStackNavigator();

const stories = [
    {
        id: '1',
        title: 'The Little Red Riding Hood',
        content: `Once upon a time there was a sweet little girl. Everyone who saw her liked her, but most of all her
        grandmother, who did not know what to give the child next. Once she gave her a little cap made of red velvet.
        Because it suited her so well, and she wanted to wear it all the time, she came to be known as Little Red
        Riding Hood... It was such a lovely day when she left her mother to go visit her grandmother. Little did she know that looming in the forest was a big, bad wolf...`, 
    },
    {
        id: '2',
        title: 'Cinderella',
        content: `Once upon a time there was a gentleman who married, for his second wife, the proudest and most haughty
        woman that was ever seen. She had, by a former husband, two daughters of her own, who were, indeed, exactly like her
        in all things. He had, likewise, by another wife, a young daughter, of rare goodness and sweetness of temper, which
        she took from her mother, who was the best creature in the world... Despite her unfortunate circumstances, Cinderella remained kind and hopeful, dreaming of a life filled with beauty and love...`, 
    },
];

function HomeScreen({ navigation }) {
    const renderStoryItem = ({ item }) => (
        <TouchableOpacity style={styles.storyItem} onPress={() => navigation.navigate('Story', { story: item })}>
            <Text style={styles.storyTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bedtime Stories</Text>
            <FlatList
                data={stories}
                renderItem={renderStoryItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

function StoryScreen({ route, navigation }) {
    const { story } = route.params;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackContainer}>
                <Text style={styles.goBack}>Go Back</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.title}>{story.title}</Text>
                <Text style={styles.content}>{story.content}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        justifyContent: 'center',
        marginTop: 40, // Margin from the top of the screen
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,
    },
    list: {
        alignItems: 'stretch',
        paddingHorizontal: 10, // Padding to prevent content from touching the edges
    },
    storyItem: {
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#333',
        borderRadius: 8,
    },
    storyTitle: {
        fontSize: 18,
        color: '#fff',
    },
    scrollViewContent: {
        paddingHorizontal: 20,
        paddingBottom: 20, // Ensure there's padding at the bottom
    },
    goBackContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    goBack: {
        color: '#ff6347',
        marginBottom: 10,
        fontSize: 16,
    },
    content: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Story" component={StoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}