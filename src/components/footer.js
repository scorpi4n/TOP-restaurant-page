export default function () {
	const footer = document.createElement('footer')
	footer.classList.add('grid')
	footer.innerHTML = `
		<ul class="flex">
			<li>
				<a href="https://github.com/scorpi4n">
					<img alt="github link" src="/src/assets/github-light-32x32.png"/>
				</a>
			</li>
			<li>
				<a href="https://theodinproject.com">
					<img alt="the odin project link" src="/src/assets/TOP-32x32.png"/>
				</a>
			</li>
		</ul>
		<p>Copyright github.com/scorpi4n 2022 &#169;</p>`

	return footer
}