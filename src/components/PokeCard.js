import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';

class PokeCard extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pokemon', this.props)}>
                <View style={styles.cardContainer}>
                    <Text style={styles.text}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        marginBottom: 16,
        padding: 32,
        borderRadius: 8,
        elevation: 3
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});

export default withNavigation(PokeCard)