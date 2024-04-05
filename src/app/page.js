import Bundles from "@/components/Bundles";
import Footer from "@/components/Footer";
import Carousel from "@/components/HCarousal";
import Options from "@/components/Options";
import SecBundle from "@/components/SecBundle";

export default function Home() {
  return (
    <>
    <main className="flex  ">
      <Carousel/>
      {/* <Options/> */}
    </main>
    <main className="flex">
    <Bundles/>
    </main>
    <main>
      <SecBundle/>
    </main>
    <main>
      <Footer/>
    </main>
    </>
  );
}
