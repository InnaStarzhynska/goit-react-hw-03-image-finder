import React from 'react';
import css from './Button.module.css'

export function Button({ handleClick }) {
   
  return (
    <button type='button' className={css.button} onClick={handleClick}>Load more</button>
  )
}
