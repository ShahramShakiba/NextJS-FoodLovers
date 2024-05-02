import Link from 'next/link';
import { Suspense } from 'react';

import { getMeals } from '@/lib/meals';
import classes from './page.module.css';
import MealsGrid from '@/components/Meals/MealsGrid';

//  out-source data-fetching part into a separate-component
async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>

        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share"> Share your favorite recipe </Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

/* --------- why "await" -----------
- Think of await like a pause button in a video game. 
- When your function reaches an await keyword, it pauses execution right there and lets other code run while it waits for something to finish.
 
- In this case, await getMeals() pauses the function until it gets the meals data it needs. 
- This ensures that your page won't try to render before it has all the necessary information, like trying to serve dinner before it's even cooked!

- Once the meals are ready, the function resumes, and you can proceed to display them on your page. 
- So, await helps keep everything in order and ensures your page loads smoothly.
*/

/* -------- better-sqlite3 ----------
- npm install better-sqlite3 

- that will allow us to work with SQL-Lite Database

- it can be used locally without setting up any extra database-server or any other complex setup needed it

* creating Database
- create initDB.js file in root-route
- configure our data there
- then, in terminal run:   node initDB.js
- it will create our sqlite-database-file
  here is: "meals.db"
*/

/* ------------ Suspense -------------- 
- handling loading states & show fallback content
*/

/* ---------- React Spinners ----------
- npm install --save react-spinners
*/
