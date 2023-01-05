import Footer from "./components/Footer";
import Header from "./components/Header";
import home from "./pages/home";

export default function () {
	const content = document.getElementById("content");

	while (content.lastChild) {
		content.lastChild.remove();
	}

	content.appendChild(Header());
	content.appendChild(home());
	// content.appendChild(menu())
	// content.appendChild(about())
	content.appendChild(Footer());
}
