import { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'One punch', 'Dragon ball' ]);

  const onAddCategory = () => {
    setCategories([
      ...categories,
      'Jujutsu'
    ])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        setCategories={ setCategories }
        categories={ categories }
      />

      <ol>
        {
          categories.map( categorie => {
            return <li key={ categorie }>{ categorie }</li>
          })
        }
      </ol>
    </>
  )
}

export default GifExpertApp;
