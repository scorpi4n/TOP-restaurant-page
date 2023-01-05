import Footer from "./components/Footer";
import Header from "./components/Header";
import about from "./pages/about";
import home from "./pages/home";
import menu from "./pages/menu";
import "./styles/reset.css";
import "./styles/style.css";

const content = document.getElementById("content");

// load the page contents into #content
loadPage(home);

// empty out DOM to prevent multiple pages loading
function unrender() {
	content.innerHTML = "";
}

function render(slot) {
	content.appendChild(Header());
	content.appendChild(slot());
	content.appendChild(Footer());

	document.getElementById("home-btn").onclick = function () {
		loadPage(home);
	};

	document.querySelectorAll(".menu-btn").forEach((btn) => {
		btn.onclick = function () {
			loadPage(menu);
		};
	});

	document.getElementById("about-btn").onclick = function () {
		loadPage(about);
	};
}

function loadPage(page) {
	unrender();
	render(page);
}
