import header from './components/header';
import menu from './pages/menu';
import footer from './components/footer';
import home from './pages/home';

export default function () {
	const content = document.getElementById('content')

	while (content.lastChild) {
		content.lastChild.remove()
	}

	content.appendChild(header())
	// content.appendChild(menu())
	content.appendChild(home())
	content.appendChild(footer())
}