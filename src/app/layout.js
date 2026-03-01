import "../index.css";
import "../App.css";
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
        <div className="app">
          <div className="outerdiv">
            <div className="wrapper">
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
