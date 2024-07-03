// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const stories = [
    {
        id: '1',
        title: 'The Little Red Riding Hood',
        content: `Once upon a time there was a sweet little girl. Everyone who saw her liked her, but most of all her
        grandmother, who did not know what to give the child next. Once she gave her a little cap made of red velvet.
        Because it suited her so well, and she wanted to wear it all the time, she came to be known as Little Red
        Riding Hood...`,  // Shortened for brevity; in a real app, this would be a full story
    },
    {
        id: '2',
        title: 'Cinderella',
        content: `Once upon a time there was a gentleman who married, for his second wife, the proudest and most haughty
        woman that was ever seen. She had, by a former husband, two daughters of her own, who were, indeed, exactly like her
        in all things. He had, likewise, by another wife, a young daughter, of rare goodness and sweetness of temper, which
        she took from her mother, who was the best creature in the world...`,  // Shortened for brevity
    },
    // Add more stories as needed
];

const StoryScreen = ({ story, goBack }) => (
    <SafeAreaView style={styles.storyContainer}>
        <ScrollView>
            <TouchableOpacity onPress={goBack}>
                <Text style={styles.goBack}>Go Back</Text>
            </TouchableOpacity>
            <Text style={styles.storyTitle}>{story.title}</Text>
            <Text style={styles.storyContent}>{story.content}</Text>
        </ScrollView>
    </SafeAreaView>
);

const App = () => {
    const [selectedStory, setSelectedStory] = React.useState(null);

    const renderStoryItem = ({ item }) => (
        <TouchableOpacity style={styles.storyItem} onPress={() => setSelectedStory(item)}>
            <Text style={styles.storyTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    if (selectedStory) {
        return <StoryScreen story={selectedStory} goBack={() => setSelectedStory(null)} />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bedtime Stories</Text>
            <FlatList
                data={stories}
                renderItem={renderStoryItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,
    },
    list: {
        paddingHorizontal: 20,
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
    storyContainer: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        padding: 20,
    },
    goBack: {
        color: '#ff6347',
        marginBottom: 20,
        fontSize: 16,
    },
    storyContent: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
    },
});

export default App;