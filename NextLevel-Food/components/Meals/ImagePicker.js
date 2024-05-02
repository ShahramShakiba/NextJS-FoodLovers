'use client';
import { useRef } from 'react';
import classes from './ImagePicker.module.css';

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  const pickClickHandler = () => {
    //trigger a click-method on the "input"
    imageInput.current.click();
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}> {label} </label>
      <div className={classes.control}>
        {/* display= none - to hide the default button */}
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />

        <button
          className={classes.button}
          type="button"
          onClick={pickClickHandler}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
