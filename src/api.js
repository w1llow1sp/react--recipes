import { API_URL } from './config';

//создаем отдельное количесвто методов, которое будем использовать в рамках приложения

const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
};

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}; // это будет на главной

const getFilteredCategories = async (categoryName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + categoryName);
    return await response.json();
};

export { getMealById, getAllCategories, getFilteredCategories };
