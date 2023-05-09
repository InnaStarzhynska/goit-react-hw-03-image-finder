import React from 'react';
import css from './ImageGalleryItem.module.css'

export function ImageGalleryItem({ webFormat, largeFormat, tags, handleClick }) {
  return (
    <li className={css.imageGalleryItem}>
          <img className={css.imageGalleryItemImage} src={webFormat} alt={tags} data-image={largeFormat} onClick={handleClick} />
    </li>
  );
}
