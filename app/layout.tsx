
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Roboto_Serif } from "next/font/google";

const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  weight: '400'
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoSerif.className}>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
