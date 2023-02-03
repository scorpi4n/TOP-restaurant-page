import { a, img, p, title, ul } from "../functions";

export default function () {
	const footer = document.createElement("footer");
	footer.classList.add("grid");

	footer.appendChildren(
		ul(
			"flex",
			a(
				"https://github.com/scorpi4n",
				undefined,
				img("/src/assets/github-light-32x32.png", "github link")
			),
			a(
				"https://theodinproject.com",
				undefined,
				img("/src/assets/TOP-32x32.png", "the odin project link")
			)
		),
		p("Copyright github.com/scorpi4n 2022 ©"),
		div(
			ul(title("Pages"), a("#", "Home"), a("#", "Menu"), a("#", "About")),
			ul(title("Contact"), p("fakemail@gmail.com"), p("+1 (555) 555-5555"))
		)
	);

	return footer;
}

function div(...children) {
	let div = document.createElement("div");
	div.classList.add("container", "flex");
	children.forEach((child) => div.appendChild(child));

	return div;
}
