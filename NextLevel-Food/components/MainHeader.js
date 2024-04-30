import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import classes from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="A plate with food on it!" priority />
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
