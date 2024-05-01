import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import classes from './page.module.css';

export default function MealDetailsPage({ params }) {
  //getMeal need "slug" - dynamic-path that configured for this route
  const meal = getMeal(params.mealSlug);

  //look for all line-brakes"/\n/" in the string"g" and replace it with <br/>
  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>

        <div className={classes.headerText}>
          <h1> {meal.title} </h1>

          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>

          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        {/* show instructions */}
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

/* dangerouslySetInnerHTML
- a property that you can use on HTML elements in a React application to programmatically set their content.

- it's called like this coz you open yourself up to cross-site scripting attacks when outputting content as HTML content, at least if you're not validating it
*/
