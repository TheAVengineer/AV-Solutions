import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PrivacyContent from "./PrivacyContent";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen relative">
      <Nav />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
