import Feature from "./Feature"

export default function (...features) {
	const featuresEl = document.createElement('ul')
	featuresEl.classList.add("features", "flex")

	features.forEach(feature => {
		featuresEl.appendChild(Feature(feature))
	})

	return featuresEl
}