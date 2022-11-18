export default function () {
	const header = document.createElement('header')
	header.innerHTML = `
		<h1>Restaurant</h1>
		<ul>
			<li>Home</li>
			<li>Menu</li>
			<li>About</li>
		</ul>`

	return header
}