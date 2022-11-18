export default function () {
	const header = document.createElement('header')
	header.classList.add('flex')
	header.innerHTML = `
		<h1>Restaurant</h1>
		<ul class="flex">
			<li>Home</li>
			<li>Menu</li>
			<li>About</li>
		</ul>`

	return header
}