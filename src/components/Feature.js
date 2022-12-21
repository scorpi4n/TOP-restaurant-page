export default function ([image, alt, text]) {
	const feature = document.createElement('li')
	feature.classList.add("feature")

	const imageEl = document.createElement('img')
	imageEl.src = image
	imageEl.alt = alt

	const descriptionEl = document.createElement('p')
	descriptionEl.innerText = text

	feature.appendChild(imageEl)
	feature.appendChild(descriptionEl)

	return feature
}