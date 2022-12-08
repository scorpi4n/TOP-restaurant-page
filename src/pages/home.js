import Hero from "../components/Hero"

export default function () {
	const home = document.createElement('div')
	home.appendChild(Hero())

	return home
}