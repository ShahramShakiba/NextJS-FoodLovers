import './globals.css';
import MainHeader from '@/components/MainHeader/MainHeader';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
  author: 'Shahram Shakiba',
  keywords: 'food, find foods, delicious',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
