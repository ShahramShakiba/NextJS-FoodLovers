import Link from 'next/link';
import Image from 'next/image';

import classes from './MealItem.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>

        <div className={classes.headerText}>
          <h2> {title} </h2>
          <p> by {creator} </p>
        </div>
      </header>

      <div className={classes.content}>
        <p className={classes.summary}> {summary} </p>

        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}> View Details </Link>
        </div>
      </div>
    </article>
  );
}

/* fill prop
- you can use the "fill" prop instead of setting a "width" and "height" whenever you have an image where you don't know the dimensions in advance. 
*/
