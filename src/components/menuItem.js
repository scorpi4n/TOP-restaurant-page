export default function ({ name, description, price, imagePath, alt }) {
	const menuItem = document.createElement('div')
	menuItem.classList.add('menu-item')
	menuItem.innerHTML = `
		<img alt="${alt}" src="${imagePath}"></img>
		<div>
			<h3>${name}</h3>
			<h4>$${price}</h4>
			<p>${description}</p>
		</div>`

	return menuItem
}