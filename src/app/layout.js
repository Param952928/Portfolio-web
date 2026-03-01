import "./globals.css";
import Navbar from "../Component/Navbar/Navbar";
import Fixeditems from "../Component/Fixeditems/Fixeditems";

export const metadata = {
  title: "Paramjeet Singh - Portfolio",
  description: "Portfolio Website of Paramjeet Singh built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen w-full flex justify-center text-[color:var(--text-color)] overflow-x-hidden">
          <div className="w-full flex h-full justify-center pt-4">
            <div className="app-wrapper">
              <Navbar />
              <Fixeditems />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
