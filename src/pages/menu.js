import menuItem from '../components/menuItem';
import foodItems from '../data/foodItems.js';

export default function () {
	const menu = document.createElement('div')
	menu.id = 'menu'
	menu.classList.add('grid')

	for (let item of foodItems) {
		menu.appendChild(menuItem(item))
	}

	return menu
}