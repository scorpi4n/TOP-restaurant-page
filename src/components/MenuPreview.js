import MenuItem from "../components/MenuItem";
import foodItems from "../data/foodItems";

export default function () {
	const MenuPreview = document.createElement("article");
	MenuPreview.classList.add("menu-preview");

	const arrayEl = document.createElement("div");
	arrayEl.classList.add("grid");
	for (let i = 0; i < 3; i++) {
		arrayEl.appendChild(MenuItem(foodItems[i]));
	}
	MenuPreview.appendChild(arrayEl);

	const cta = document.createElement("button");
	cta.classList.add("cta", "menu-btn");
	cta.innerText = "Check out the menu!";
	MenuPreview.appendChild(cta);

	return MenuPreview;
}
