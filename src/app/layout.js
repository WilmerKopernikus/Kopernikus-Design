import "./globals.css";
import Header from "../components/header";

export const metadata = {
  title: "Kopernikus Design",
  description: "Web Development & Design Agency",
  icons: {
    icon: '/favicon.png', // Path to your PNG favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}



