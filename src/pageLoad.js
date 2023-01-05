import Footer from "./components/Footer";
import Header from "./components/Header";
// import about from "./pages/about";
import home from "./pages/home";
// import menu from "./pages/menu";

export default function () {
	const content = document.getElementById("content");

	while (content.lastChild) {
		content.lastChild.remove();
	}

	content.appendChild(Header());
	content.appendChild(home());
	// content.appendChild(menu());
	// content.appendChild(about());
	content.appendChild(Footer());
}
