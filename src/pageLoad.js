import Header from './components/Header';
import Footer from './components/Footer';
import home from './pages/home';
import menu from './pages/menu';

export default function () {
	const content = document.getElementById('content')

	while (content.lastChild) {
		content.lastChild.remove()
	}

	content.appendChild(Header())
	// content.appendChild(menu())
	content.appendChild(home())
	content.appendChild(Footer())
}