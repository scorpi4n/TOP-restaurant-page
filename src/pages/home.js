import Hero from "../components/Hero";
import MenuPreview from "../components/MenuPreview";
import SocialProof from "../components/SocialProof";

export default function () {
	const home = document.createElement("div");
	home.appendChild(Hero());
	home.appendChild(SocialProof());
	home.appendChild(MenuPreview());
	// leave a review

	return home;
}
