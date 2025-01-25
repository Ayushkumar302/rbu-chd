// app/page.js
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"; // (Optional) Import if not done globally
import TopBar from "../components/topBar/TopBar";

export const metadata = {
  title: "News and Events",
  description: "We look forward to hearing from you!",
};

export default function ContactPage() {
  return (
    <>
      <main className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h1 className="mb-4">News & Events</h1>
            <p className="text-muted mb-5">
              Our new News & Events page is under construction. Please check
              back soon for updates!
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
