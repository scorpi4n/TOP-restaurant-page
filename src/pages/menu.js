import MenuItem from '../components/MenuItem';
import foodItems from '../data/foodItems.js';

export default function () {
	const menu = document.createElement('div')
	menu.id = 'menu'
	menu.classList.add('grid')

	foodItems.forEach(item => {
		menu.appendChild(MenuItem(item))
	})

	return menu
}