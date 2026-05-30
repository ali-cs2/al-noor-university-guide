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
      <body className="min-h-screen bg-university-gray text-slate-900">
        <Navbar universityName={universityData.university.name} />
        <main className="mx-auto min-h-[calc(100vh-180px)] w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer universityName={universityData.university.name} />
      </body>
    </html>
  );
}
