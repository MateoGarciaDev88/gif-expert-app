import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'One punch' ]);

  const onAddCategory = (newCategorie) => {
    if (categories.includes(newCategorie)) return;
    setCategories([
      newCategorie,
      ...categories,
    ])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategorie={ onAddCategory }
      />

      {
        categories.map( categorie => (
          <GifGrid 
            key={categorie}
            category={categorie}
          />
        ))
      }
    </>
  )
}

export default GifExpertApp;
