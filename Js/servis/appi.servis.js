const API_URL = 'https://faceted-trusting-nerine.glitch.me';

export const fetchCategories = async () => {
	try {
		const response = await fetch(`${API_URL}/api/category`);

		if (response.status === 200 || response.status === 201) {
			const categories = await response.json();
			return categories;
		} else {
			const error = await response.json();
			throw error;
		}
	}
	catch (error) {
		return { error };
	}
}