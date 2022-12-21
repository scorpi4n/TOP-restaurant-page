import Features from '../components/Features'
import Feature from '../components/Feature'
import SocialProof from '../components/SocialProof'

export default function () {
	const wrapper = document.createElement('div')
	wrapper.classList.add("about-content")

	const about = document.createElement('div')
	about.classList.add("about")

	const titleEl = document.createElement('h1')
	titleEl.innerText = "About Us"

	const descriptionEL = document.createElement('p')
	descriptionEL.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

	const ctaEl = document.createElement('a')
	ctaEl.classList.add("cta")
	ctaEl.innerText = "Contact Us"

	wrapper.appendChild(titleEl)
	wrapper.appendChild(descriptionEL)
	wrapper.appendChild(ctaEl)

	about.appendChild(wrapper)
	about.appendChild(Features(
		["#", "alt text", "Local Ingredients"],
		["#", "alt text", "Home-style Meals"],
		["#", "alt text", "Fair Prices"],
	))
	about.appendChild(SocialProof())

	return about
}