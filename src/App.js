import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = '187539f0';
  const APP_KEY = '4c43ce4c5fa6a2e204e004b2b0efdb91';
  //const sampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // const getRequest = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
  //   const data = await response.json();
  //   setRecipes(data.hits);
  //   //console.log(data.hits);
  // }

  useEffect( () => {
    const getRequest = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      
      const data = await response.json();
      setRecipes(data.hits);
      //console.log(data.hits);
    };
    getRequest();
  }, [query]);

  

  console.log(recipes);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }
  //console.log(search);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
            
              <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image_url={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
          ))}
        </div>
    </div>
  );
}

export default App;
