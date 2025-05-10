import React, { useState } from "react";
import "./RecipePage.scss";

const RecipePage: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [recipe, setRecipe] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const addIngredient = () => {
    const trimmed = inputValue.trim().toLowerCase();
    if (!trimmed || trimmed.includes(" ") || ingredients.includes(trimmed))
      return;

    setIngredients([...ingredients, trimmed]);
    setInputValue("");
  };

  const clearIngredients = () => {
    setIngredients([]);
    setRecipe(null);
  };

  const generateRecipe = async () => {
    if (ingredients.length === 0) return;
    setLoading(true);
    setRecipe(null);

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer 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",
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "RecipeGenerator",
          },
          body: JSON.stringify({
            model: "nousresearch/deephermes-3-mistral-24b-preview:free",
            messages: [
              {
                role: "system",
                content:
                  "Ты профессиональный повар. Создай интересные рецепты на основе предложенных ингредиентов.",
              },
              {
                role: "user",
                content: `Вот ингредиенты: ${ingredients.join(", ")}. Что можно из них приготовить?`,
              },
            ],
          }),
        },
      );

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      setRecipe(content || "Не удалось сгенерировать рецепт.");
    } catch (error) {
      console.error("Ошибка генерации рецепта:", error);
      setRecipe("Произошла ошибка при генерации рецепта.");
    }

    setLoading(false);
  };

  return (
    <section className="recipe-generator">
      <h1>Создай уникальный рецепт</h1>
      <p>
        Добавляйте ингредиенты по одному слову. Например: <em>картошка</em>,{" "}
        <em>яйцо</em>, <em>сыр</em>.
      </p>

      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          placeholder="Введите ингредиент"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={addIngredient}
          disabled={!inputValue.trim() || inputValue.includes(" ")}
        >
          Добавить
        </button>
        <button onClick={clearIngredients} className="clear-button">
          Очистить всё
        </button>
      </div>

      {ingredients.length > 0 && (
        <div className="ingredients-list">
          {ingredients.map((ing, index) => (
            <span key={index} className="ingredient">
              {ing}
              <button
                onClick={() =>
                  setIngredients(ingredients.filter((_, i) => i !== index))
                }
              >
                ❌
              </button>
            </span>
          ))}
        </div>
      )}

      <button
        onClick={generateRecipe}
        disabled={loading || ingredients.length === 0}
        className="generate-button"
      >
        {loading ? "Генерируем..." : "Создать рецепт"}
      </button>

      {recipe && <div className="recipe-result">{recipe}</div>}
    </section>
  );
};

export default RecipePage;
