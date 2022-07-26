import { Button, SafeAreaView, Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';


export default function Input() {
    const [text, onChangeText] = useState('Bologna - Centro st...');
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
            <Button title='click' />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});