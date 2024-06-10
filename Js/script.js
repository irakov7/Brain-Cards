import { createHeader } from './components/createHeader.js';
import { fetchCategories } from './servis/appi.servis.js';
import { createCategory } from './components/createCategory.js';


const initApp = async () => {
	const headerParent = document.querySelector('.header');
	const app = document.querySelector('#app');

	const headerObj = createHeader(headerParent);
	const categoryObj = createCategory(app);

	const categories = await fetchCategories();
	if (categories.error) {
		const errorText = createElement('p', {
			className: 'server-error',
			textContent: 'Ошибка сервера'
		});
		app.append(errorText);
		return;
	}
	

	const returnIndex = e => {
		e.preventDefault();
		headerObj.updateHeaderTitle('Категории');
	}

	headerObj.headerLogoLink.addEventListener('click', returnIndex);

	headerObj.headerBtn.addEventListener('click', () => {
		headerObj.updateHeaderTitle('Новая категория');
	});
};
initApp();
