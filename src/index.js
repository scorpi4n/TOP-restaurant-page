import './styles/reset.css';
import './styles/style.css';

import home from './pages/home';
import menu from './pages/menu';
import about from './pages/about'
import pageLoad from './pageLoad';
import header from './components/header';
import footer from './components/footer';

const content = document.getElementById('content')

// load the page contents into #content
pageLoad()

export function unrender() {
	content.innerHTML = ""
}

export function render(slot) {
	content.appendChild(header())
	content.appendChild(slot())
	content.appendChild(footer())

	document.getElementById('home-btn').onclick = function () {
		unrender()
		render(home)
	}

	document.getElementById('menu-btn').onclick = function () {
		unrender()
		render(menu)
	}

	document.getElementById('about-btn').onclick = function () {
		unrender()
		render(about)
	}
}

// add eventlisteners to nav buttons
document.getElementById('home-btn').onclick = function () {
	unrender()
	render(home)
}

document.getElementById('menu-btn').onclick = function () {
	unrender()
	render(menu)
}

document.getElementById('about-btn').onclick = function () {
	unrender()
	render(about)
}