import Card from "./Card"
import React from "react"

const recipes = [
    { id: 1, title: "Spaghetti Carbonara", ingredients: [{id: 1, ingredient: "Pasta"}, {id: 2, ingredient: "Eggs"}, {id: 3, ingredient: "Cheese"}, {id: 4, ingredient: "Bacon"}], image: "https://i.imgur.com/CoxeB73.jpeg" },
    {id: 2, title: "Beef Stew", ingredients: [{id: 1, ingredient: "Beef"}, {id: 2, ingredient: "Carrots"}, {id: 3, ingredient: "Broth"}, {id: 4, ingredient: "Potatos"}], image: "https://i.imgur.com/Xjryzf8.jpeg"},
    {id: 3, title: "Stir Fry", ingredients: [{id: 1, ingredient: "Viggies"}, {id: 2, ingredient: "Chicken"}, {id: 3, ingredient: "Honey"}, {id: 4, ingredient: "Soy Sauce"}], image: "https://i.imgur.com/oRNqz9M.jpeg"},
    {id: 4, title: "Cheeseburger", ingredients: [{id: 1, ingredient: "Ground Beef"}, {id: 2, ingredient: "Cheese"}, {id: 3, ingredient: "Tomato"}, {id: 4, ingredient: "Buns"}], image: "https://i.imgur.com/H4q9dfb.jpeg"},
]

export default function RecipeGallery() {
    return (
        <div>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <Card 
                        name={recipe.title}
                        ingredients={recipe.ingredients}
                        image={recipe.image}
                    />
                </div>
            ))}
        </div>
    )
}