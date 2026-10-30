import { useState } from "react"

export default function Main() {
    // Create a state for recipe lists
    const [ingredients, setIngredients] = useState([])
    // loop over the list and creat list for all the items using map function
    const ingredientsListItmes = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    // function to get values from the form and putting those values in state
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                aria-label="Add ingredient" 
                type="text" 
                placeholder="e.g. oregano" 
                name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {/* create a section to render elements from state */}
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {ingredientsListItmes}
                </ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        </main>
    )
}