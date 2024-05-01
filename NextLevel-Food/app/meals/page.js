import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/Meals/MealsGrid';

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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}

/* better-sqlite3
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
