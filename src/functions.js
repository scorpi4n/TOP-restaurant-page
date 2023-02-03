HTMLElement.prototype.appendChildren = function (...children) {
	children.forEach((child) => this.appendChild(child));
};

export function ul(className = "", ...children) {
	let ul = document.createElement("ul");
	if (className.length > 0) ul.classList.add(className);
	children.forEach((child) => {
		let li = document.createElement("li");
		li.appendChild(child);

		ul.appendChild(li);
	});

	return ul;
}

export function img(src, alt) {
	let img = document.createElement("img");
	img.src = src;
	img.alt = alt;

	return img;
}

export function p(innerText) {
	let p = document.createElement("p");
	p.innerText = innerText;

	return p;
}

export function title(innerText) {
	let title = p(innerText);
	title.classList.add("title");

	return title;
}

export function a(href, innerText = "", child = undefined) {
	let a = document.createElement("a");
	a.href = href;
	a.innerText = innerText;
	if (child !== undefined) a.appendChild(child);

	return a;
}
