import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ImprintContent from "./ImprintContent";

export const metadata = {
  title: "Imprint",
};

export default function ImprintPage() {
  return (
    <main className="min-h-screen relative">
      <Nav />
      <ImprintContent />
      <Footer />
    </main>
  );
}
