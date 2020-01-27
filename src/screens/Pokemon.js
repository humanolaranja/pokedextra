import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import axios from 'axios';

export default class Pokemon extends Component {

    state = {
        loading: true,
        pokemon: {}
    }

    async componentDidMount() {
        let response = await axios.get(this.props.navigation.state.params.url);
        this.setState({pokemon: response.data, loading: false});
    }

    render() {
        
        if(this.state.loading) {
            return (
                <View>
                    <Text> Loading </Text>
                </View>
            )
        } else {
            return(
                <View>
                    <Text> {this.props.navigation.state.params.name} </Text>
                    <Image
                        style={{width: 500, height: 500}}
                        source={{uri: this.state.pokemon.sprites.front_default}}
                    />
                </View>
            )
        }
    }
    
}
