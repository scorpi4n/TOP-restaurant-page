import './styles/reset.css';
import './styles/style.css';

import menu from './pages/menu';
import pageLoad from './pageLoad';

const content = document.getElementById('content')

// load the page contents into #content
pageLoad()

// add eventlisteners to nav buttons
document.getElementById('home-btn').onclick = function () {
	content.appendChild(home())
}

document.getElementById('menu-btn').onclick = function () {
	content.appendChild(menu())
}

document.getElementById('about-btn').onclick = function () {
	content.appendChild(about())
}