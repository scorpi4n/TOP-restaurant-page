import './styles/reset.css';
import './styles/style.css';

import header from './components/header';
import menu from './pages/menu';
import footer from './components/footer';

const content = document.getElementById('content')

content.appendChild(header())
content.appendChild(menu())
content.appendChild(footer())