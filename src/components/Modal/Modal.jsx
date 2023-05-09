import React from 'react';
import css from './Modal.module.css'

export function Modal({largeImageURL, title, onClick}) {
  return (
    <div className={css.overlay} onClick={onClick}>
  <div className={css.modal}>
    <img src={largeImageURL} alt={title} />
  </div>
</div>
  )
}
