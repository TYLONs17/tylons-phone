import { Inter } from "next/font/google"
import "./globals.css"
import { AppProvider } from "../context/AppContext"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TYLONs Phone",
  description: "View your profile, messages, photos, and settings.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
