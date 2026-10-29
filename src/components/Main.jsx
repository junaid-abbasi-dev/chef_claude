import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const ingredientsListItmes = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input
                aria-label="Add ingredient" 
                type="text" 
                placeholder="e.g. oregano" 
                name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItmes}
            </ul>
        </main>
    )
}