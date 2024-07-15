import { createElement } from '../helper/createElement.js';

export const createHeader = (parent) => {
	const container = createElement('div', {
		className: 'container header__container',
	});

	parent.append(container);

	const headerLogoLink = createElement('a', {
		href: '#',
		className: 'header__logo-link',
	});

	const logo = createElement('img', {
		src: 'img/logo.svg',
		className: 'header__logo',
		alt: 'Brain Cards service logo',
	});

	headerLogoLink.append(logo);

	const headerTitle = createElement('h2', {
		className: 'header__subtitle',
		textContent: 'Categories',
	});

	const headerBtn = createElement('button', {
		className: 'header__btn',
		textContent: 'Add category',
	});

	container.append(headerLogoLink, headerTitle, headerBtn);

	const updateHeaderTitle = title => {
		headerTitle.textContent = title;
	};

	return { headerLogoLink, headerBtn, updateHeaderTitle }
};

