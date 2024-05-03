import './globals.css';
import MainHeader from '@/components/MainHeader/MainHeader';

export const metadata = {
  generator: 'Next.js',
  applicationName: 'NextLevel Food',
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
  creator: 'Shahram Shakiba',
  keywords: ['food', 'find foods', 'delicious'],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
