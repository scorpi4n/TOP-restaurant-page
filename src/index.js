import "./styles/reset.css";
import "./styles/style.css";

import pageLoad from "./pageLoad";
import about from "./pages/about";
import home from "./pages/home";
import menu from "./pages/menu";

import Footer from "./components/Footer";
import Header from "./components/Header";

const content = document.getElementById("content");

// load the page contents into #content
pageLoad();

export function unrender() {
	content.innerHTML = "";
}

export function render(slot) {
	content.appendChild(Header());
	content.appendChild(slot());
	content.appendChild(Footer());

	document.getElementById("home-btn").onclick = function () {
		unrender();
		render(home);
	};

	document.getElementById("menu-btn").onclick = function () {
		unrender();
		render(menu);
	};

	document.getElementById("about-btn").onclick = function () {
		unrender();
		render(about);
	};
}

// add eventlisteners to nav buttons
document.getElementById("home-btn").onclick = function () {
	unrender();
	render(home);
};

document.getElementById("menu-btn").onclick = function () {
	unrender();
	render(menu);
};

document.getElementById("about-btn").onclick = function () {
	unrender();
	render(about);
};
