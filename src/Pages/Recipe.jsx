import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
    const [recipe, SetRecipe] = useState({});
    const { id } = useParams();
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(id).then((data) => SetRecipe(data.meals[0]));
    }, [id]);
    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className='recipe'>
                    <button className='btn  btn-back' onClick={goBack}>
                        <i class='material-icons'>arrow_back</i>
                        Go Back
                    </button>
                    <h1>{recipe.strMeal}</h1>
                    <h6> Category:{recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area:{recipe.strArea}</h6> : null}

                    <div className='wrapper'>
                        <img
                            className='recipe-image'
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                        />

                        <table className='highlight centered recipe-table'>
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(recipe).map((key) => {
                                    if (
                                        key.includes('Ingredient') &&
                                        recipe[key]
                                    ) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>
                                                    {
                                                        recipe[
                                                            `strMeasure${key.slice(
                                                                13
                                                            )}`
                                                        ]
                                                    }
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return null;
                                })}
                            </tbody>
                        </table>
                    </div>
                    <h5>Steps: </h5>
                    <p>{recipe.strInstructions}</p>
                    {recipe.strYoutube ? (
                        <div className='row'>
                            <h5 style={{ margin: '2rem 0 1.5rem' }}>
                                Watch on Youtube
                            </h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                allowFullScreen
                            />
                        </div>
                    ) : null}
                </div>
            )}
        </>
    );
}
export { Recipe };
