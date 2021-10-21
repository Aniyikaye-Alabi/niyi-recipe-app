import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, image_url, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories} <b>KCal</b></p>
            <img className={style.image} src={image_url} alt="" />
        </div>
    )
}

export default Recipe;