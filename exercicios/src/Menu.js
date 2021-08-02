import React from 'react'
import {createDrawerNavigator} from 'react-navigation'
import Contador from './components/Contador'
import Evento from './components/Evento'
import Inverter, {MegaSena} from './components/Multi'
import ParImpar from './components/ParImpar'
import Plataformas from './components/Plataformas'
import Simples from './components/Simples'
import ValidarProps from './components/ValidarProps'

export default createDrawerNavigator(
	{
		Evento: {
			screen: Evento,
		},
		ValidarProps: {
			screen: () => <ValidarProps label='Teste: ' ano={18} />,
		},
		Plataformas: {
			screen: Plataformas,
		},
		Contador: {
			screen: () => <Contador numeroInicial={1000} />,
		},
		MegaSena: {
			screen: () => <MegaSena numeros={8} />,
			navigationOptions: {title: 'Mega Sena'},
		},
		Inverter: {
			screen: () => <Inverter texto='React Nativo!' />,
		},
		ParImpar: {
			screen: () => <ParImpar numero={30} />,
			navigationOptions: {title: 'Par & Ímpar'},
		},
		Simples: {
			screen: () => <Simples texto='Flexível!!!' />,
		},
	},
	{drawerWidth: 300}
)
