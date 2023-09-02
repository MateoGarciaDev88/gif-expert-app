import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim().length <= 1) return;

    setCategories([
      inputValue,
      ...categories,
    ]);

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
}

export default AddCategory;