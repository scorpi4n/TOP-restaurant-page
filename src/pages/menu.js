import MenuItem from "../components/MenuItem";
import foodItems from "../data/foodItems.js";

export default function () {
	const menu = document.createElement("div");
	menu.id = "menu";

	const title = document.createElement("h1");
	title.classList.add("title");
	title.innerText = "Menu";

	const menuList = document.createElement("ul");
	menuList.classList.add("grid", "menu");

	foodItems.forEach((item) => {
		menuList.appendChild(MenuItem(item));
	});

	menu.appendChild(title);
	menu.appendChild(menuList);

	return menu;
}
