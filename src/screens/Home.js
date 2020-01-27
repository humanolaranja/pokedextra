import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Platform } from 'react-native'
import axios from 'axios';
import PokeCard from '../components/PokeCard';

export default class Home extends Component {
    state = {
        loading: true,
        pokemons: []
    }

    async componentDidMount() {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        this.setState({pokemons: response.data.results, loading: false});
    }

    render() {
        if(this.state.loading) {
            return (
                <View>
                    <Text> Loading </Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.state.pokemons}
                        contentContainerStyle={styles.contentContainer}
                        renderItem={({ item }) => <PokeCard name={item.name} url={item.url}/>}
                        keyExtractor={item => item.name}
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Platform.OS === 'ios' ? 'red' : 'orange',
        flex: 1
    },
    contentContainer: {
        padding: 16
    }
});