import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

function Category() {
    const { name } = useParams();
    const [meals, SetMeals] = useState([]);
    const { goBack } = useHistory();

    useEffect(() => {
        getFilteredCategories(name).then((data) => SetMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className='btn  btn-back' onClick={goBack}>
                <i class='material-icons'>arrow_back</i>
                Go Back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export { Category };
