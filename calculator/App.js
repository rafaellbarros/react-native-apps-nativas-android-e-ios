import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome!!!</Text>
				<Text style={styles.instructions}>App.js</Text>
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
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},

	instructions: {
		fontSize: 16,
		textAlign: 'center',
	},
})
