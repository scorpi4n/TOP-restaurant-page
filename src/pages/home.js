export default function () {
	const home = document.createElement('div')
	home.innerHTML = `
			<img class="hero-image" src="/src/assets/beef.jpg" aria-hidden="true"/>
			<div class="hero-gradient" aria-hidden="true"></div>
			<div class="hero flex">
				<h1>Delicious Food</h1>
				<p>Classy food for classy people or something</p>
				<button class="cta">Menu <img src="#" alt=""/></button>
			</div>
			`

	return home
}