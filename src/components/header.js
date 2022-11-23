export default function () {
	const header = document.createElement('header')
	header.classList.add('flex')
	header.innerHTML = `
		<h2>Restaurant</h2>
		<ul class="flex">
			<li id="home-btn">Home</li>
			<li id="menu-btn">Menu</li>
			<li id="about-btn">About</li>
		</ul>`

	return header
}