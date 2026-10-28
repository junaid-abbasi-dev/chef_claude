import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const ingredientsListItmes = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    return (
        <main>
            <form action="" className="add-ingredient-form" onSubmit={handleSubmit}>
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