import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";


const inter = Inter({ subsets: ['latin'], display: "swap" });

export const metadata = {
  title: "Wealth",
  description: "Onestop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header />

          <main className="min-h-screen">{children}</main>
          <Toaster richColors/>

          {/* footer */}
          <footer className="bg-blue-50">
            <div className="container mx-auto px-4 text-center *:text-gray-600">
              <p>Mabe by Hyderali </p>
            </div>
          </footer>


        </body>
      </html>
    </ClerkProvider>
  );
}
