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

/* fetch Image from public folder

- images will not be imported manually from the assets-folder
- instead, we're working with meals that they are stored in database
- and their images are stored in the public-folder
- later, user will be able to upload their own images

- and this is something we have to keep in mind that when we're using Image-component
- coz this Image-component needs to know underlying width and height of the image that's being output

- and now for those meals-item we're load them dynamically from a database
- in database we'll have a path-pointing to some image
- and NextJS will not be able to resolve the width and height of such an image
- simply coz the information is not available at build time 
- that's why we use "fill" as well here

-  by fetching images from the public folder, you're making your application faster and more efficient, just like cooking becomes easier when you have all your ingredients close by in your kitchen.

*/

/* fill prop
- you can use the "fill" prop instead of setting a "width" and "height" whenever you have an image where you don't know the dimensions in advance. 
*/
