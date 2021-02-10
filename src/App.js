import React from 'react';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <>
    <RecipeList recipes={sampleRecipes}/>
    </>
  );
}

const sampleRecipes =[
  {
    id:1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n2. Put chicken in ovan\n3. Eat chicken'
  },{
    id:2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put pork in ovan\n3. Eat pork'
  }
]

export default App;
