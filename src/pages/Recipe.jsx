import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
  const [recipe, setResipe] = useState({});
  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setResipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>Категория: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Страна: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ингредиент</th>
                <th>Мера</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: '2rem 0 1.5rem' }}>Видео рецепт</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
      <button className="btn" onClick={goBack}>
        Вернуться назад
      </button>
    </>
  );
}

export { Recipe };
