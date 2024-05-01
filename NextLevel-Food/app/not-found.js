import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <div>
          <FaExclamationTriangle className="ExclamationTriangle" />
        </div>

        <div>
          <h1>Not Found</h1>
          <p>The page you are looking for does not exist.</p>

          <Link href="/" className="action-home">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
