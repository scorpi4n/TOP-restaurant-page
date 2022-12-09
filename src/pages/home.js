import Hero from "../components/Hero"
import SocialProof from "../components/SocialProof"

export default function () {
	const home = document.createElement('div')
	home.appendChild(Hero())
	home.appendChild(SocialProof())
	// menu preview
	// leave a review

	return home
}