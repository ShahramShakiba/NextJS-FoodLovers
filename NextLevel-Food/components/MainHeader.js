import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={logoImg.src} alt="A plate with food on it!" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals"> Browse Meals </Link>
          </li>

          <li>
            <Link href="/community"> Community </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
