import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatIsROX from "@/components/WhatIsROX";

export const metadata = {
  title: "What is ROX? | Momentify",
  description:
    "Return on Experience (ROX)\u2122 is the measurement standard for in-person engagement. Learn how ROX scores the quality of every interaction across four categories.",
};

export default function WhatIsROXPage() {
  return (
    <main>
      <Navigation />
      <WhatIsROX />
      <Footer />
    </main>
  );
}
