import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ onNewCategorie }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim().length <= 1) return;

    // setCategories( categories => [inputValue, ...categories]);
    onNewCategorie(inputValue.trim())
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  categories: PropTypes.array,
  setCategories: PropTypes.func,
  onNewCategorie: PropTypes.func,
}

export default AddCategory;