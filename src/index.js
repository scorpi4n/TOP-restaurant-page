import './styles/reset.css';
import './styles/style.css';

import home from './pages/home';
import menu from './pages/menu';
import about from './pages/about'
import pageLoad from './pageLoad';

import Header from './components/Header';
import Footer from './components/Footer';

const content = document.getElementById('content')

// load the page contents into #content
pageLoad()

export function unrender() {
	content.innerHTML = ""
}

export function render(slot) {
	content.appendChild(Header())
	content.appendChild(slot())
	content.appendChild(Footer())

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