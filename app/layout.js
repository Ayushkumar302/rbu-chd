import "@fontsource/inter"; // Import Inter font
import ClientBootstrap from "./client-bootstrap";
import Footer from "./components/footer/footer";
import TopBar from "./components/topBar/TopBar";
import "./styles/fonts.js"; // Adjust path based on your folder structure

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <ClientBootstrap>{children}</ClientBootstrap>
        <Footer />
      </body>
    </html>
  );
}
