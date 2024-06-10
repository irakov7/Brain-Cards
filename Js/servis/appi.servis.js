const API_URL = '';

export const fetchCategories = async () => {
	try {
		const response = await fetch(`${API_URL}/`);

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