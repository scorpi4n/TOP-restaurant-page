export default function ([icon, text]) {
	const feature = document.createElement("li");
	feature.classList.add("feature");

	const iconEl = document.createElement("p");
	iconEl.classList.add("text-icon");
	iconEl.innerText = icon;

	const descriptionEl = document.createElement("p");
	descriptionEl.innerText = text;

	feature.appendChild(iconEl);
	feature.appendChild(descriptionEl);

	return feature;
}
