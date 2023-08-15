import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Top It",
  description: "Your best Online Top It",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-w-2xl mx-auto overflow-x-hidden overflow-y-hidden">
          <Header />
          <div className="min-h-[calc(100vh-136px)] z-10">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
