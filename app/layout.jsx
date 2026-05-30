import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import universityData from "@/data/university.json";

export const metadata = {
  title: "Al-Noor University Guide",
  description: "A modern university guide for students, visitors, and applicants."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-university-gray text-slate-950 antialiased">
        <Navbar university={universityData.university} />
        <main className="min-h-[calc(100vh-210px)]">{children}</main>
        <Footer universityName={universityData.university.name} />
      </body>
    </html>
  );
}
