import { getStore } from '@/actions/get-store';
import './globals.css'
import NavBar from '@/components/navigation/nav-bar-component';

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  )
}
