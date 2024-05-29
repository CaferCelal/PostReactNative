
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import PhilanthropistViewModel from "../ViewModel/PhilanthropistViewModel";


// create a component
const HomeScreen = () => {
    const [response, setResponse] = useState('');

    const handleSavePhilanthropist = async () => {
        try {
            const viewModel = new PhilanthropistViewModel();
            const result = await viewModel.savePhilanthropist(
                'uasdfasasdf@example.com',
                'password',
                'John',
                'Doe',
                '1234567890',
                1000
            );
            setResponse(JSON.stringify(result));
        } catch (error) {
            console.error('Error:', error.message);
            setResponse('Error: ' + error.message);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Save Philanthropist" onPress={handleSavePhilanthropist} />
            <Text>{response}</Text>
        </View>
    );
};

export default HomeScreen;