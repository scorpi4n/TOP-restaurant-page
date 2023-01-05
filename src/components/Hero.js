export default function () {
	const Hero = document.createElement("div");
	Hero.classList.add("hero");
	Hero.innerHTML = `
		<img class="hero-image" src="/src/assets/beef.jpg" aria-hidden="true"/>
		<div class="hero-content flex">
			<p class="title">Delicious Food</p>
			<p>Classy food for classy people or something</p>
			<a class="cta">Check out the Menu</a>
			<a href="#social-proof">
				<img alt="Down arrow" class="hero-scroll" src="/src/assets/expand-down.png" />
			</a>
		</div>
	`;

	return Hero;
}
