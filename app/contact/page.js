// app/page.js
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"; // (Optional) Import if not done globally
import TopBar from "../components/topBar/TopBar";

export const metadata = {
  title: "Contact Us",
  description: "We look forward to hearing from you!",
};

export default function ContactPage() {
  return (
    <>
      <TopBar /> <br />
      <br />
      <main className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-muted mb-5">
              Our new contact page is under construction. Please check back soon
              for updates!
            </p>
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
