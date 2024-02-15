import React from "react"

export default function Card({name, ingredients, image}) {
    
    return (
        <div className="card">
            <img className="card-img" src={image} alt="recipe"></img>
            <h2 className="card-title">{name}</h2>
            <ol type='1'>
                {ingredients.map((ingredient)=> (
                    <li key={ingredient.id}>{ingredient.ingredient}</li>
                ))}
            </ol>
            
        </div>
    )
}