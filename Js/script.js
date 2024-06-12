import { createHeader } from './components/createHeader.js';
import { fetchCategories } from './servis/appi.servis.js';
import { createCategory } from './components/createCategory.js';

const initApp = async () => {
	const headerParent = document.querySelector('.header');
	const app = document.querySelector('#app');

	const headerObj = createHeader(headerParent);
	const categoryObj = createCategory(app);

	const returnIndex = async e => {
		e?.preventDefault();
		const categories = await fetchCategories();
		if (categories.error) {
			const errorText = createElement('p', {
				className: 'server-error',
				textContent: 'Ошибка сервера'
			});
			app.append(errorText);
			return;
		}
		categoryObj.mount(categories);
	};

	returnIndex();

	headerObj.headerLogoLink.addEventListener('click', returnIndex);

	headerObj.headerBtn.addEventListener('click', () => {
		categoryObj.unmount();
		headerObj.updateHeaderTitle('Новая категория');
	});
};
initApp();
