export default function () {
	const home = document.createElement('div')
	home.innerHTML = `
		<div>
			<div class="hero flex">
				<h1>Delicious Food</h1>
				<h2>Classy food for classy people or something</h2>
				<button class="cta">Menu <img src="#" alt=""></img></button>
			</div>
			<div class="selling-point flex">
				<div class="flex">
					<h2>Lorem Ipsum</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
					<img src="/src/assets/beef.jpg" alt=""></img>
			</div>
		</div>
	`

	return home
}