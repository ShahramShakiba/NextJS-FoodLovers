'use client';
import classes from './loading.module.css';
import { PulseLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  width: '5rem',
};

export default function loading() {
  return (
    <div >
      <p className={classes.loading}>Fetching meals...</p>
      <PulseLoader
        color="#bb8330"
        loading
        size={18}
        cssOverride={override}
        speedMultiplier={1}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

/* React Spinners
- npm install --save react-spinners
*/
