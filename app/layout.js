import "./globals.css";
import { Outfit } from "next/font/google" // how to use fonts in nextjs app
import Provider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";


export const metadata = {
  title: "IntelliNote",
  description: "Concise, clear, and to the point.",
};

const outfit = Outfit({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Provider>
            {children}
          </Provider>
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>

  );
}
