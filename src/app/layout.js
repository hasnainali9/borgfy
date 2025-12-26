import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";


const switzer = localFont({
  src: [
    {
      path: "../fonts/switzer/Switzer-Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/switzer/Switzer-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-switzer",
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: "Borgfy | Shaping Visions",
  description: "We believe the future belongs to products that bring peace of mind, happiness, and a sense of relaxation to people's lives. We don't just build startups — we create solutions for deep human pain points, ensuring every venture we launch adds value to life, creates opportunities, and makes the world better.",
  metadataBase: new URL('https://borgfy.com'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={switzer.variable}>
      <body className="font-[var(--font-switzer)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
