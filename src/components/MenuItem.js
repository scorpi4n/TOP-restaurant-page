export default function ({ name, description, price, imagePath, alt }) {
	const menuItem = document.createElement('li')
	menuItem.classList.add('menu-item')
	menuItem.innerHTML = `
		<img alt="${alt}" src="${imagePath}"></img>
		<div>
			<span class="flex">
				<h3>${name}</h3>
				<h4 class="chip">$${price}</h4>
			</span>
			<p>${description}</p>
		</div>`

	return menuItem
}