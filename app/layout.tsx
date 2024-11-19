import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Navbar, Footer } from "@/components/layout/Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins"
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${poppins.variable} bg-background`}
      >
        <Navbar />
        <div className="w-full flex justify-center">
          <div className="text-black px-4 md:px-16 py-4 w-full max-w-screen-lg mx-auto min-h-[80vh] md:min-h-[70vh]">
            <main className="h-full">{children}</main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
