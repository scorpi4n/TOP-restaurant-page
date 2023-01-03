import Hero from "../components/Hero"
import SocialProof from "../components/SocialProof"
import MenuPreview from "../components/MenuPreview"

export default function () {
	const home = document.createElement('div')
	home.appendChild(Hero())
	home.appendChild(SocialProof())
	home.appendChild(MenuPreview())
	// leave a review

	return home
}