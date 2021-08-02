import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ParImpar from './components/ParImpar'
import Simples from './components/Simples'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Simples texto='Flexível!1' />
				<ParImpar numero={32} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
