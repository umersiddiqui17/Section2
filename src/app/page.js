import Bundles from "@/components/Bundles";
import Footer from "@/components/Footer";
import Carousel from "@/components/HCarousal";
import Options from "@/components/Options";
import SecBundle from "@/components/SecBundle";
import { client } from "./libs/sanity";
async function getSide(){
  const query =`*[_type == "bestseller"]`
  const data = await client.fetch(query)
return data
}

async function getData() {
  const query = `*[_type == "banner"]{
    "imageUrl":image.asset->url,
      _id,
      shopname,
      "slug":shopslug.current
 }`
  const data = await client.fetch(query)
  return data
}

export default async function Home() {
  const data = await getData()
  const side=await getSide()
  return (
    <>
    <main className="flex  ">
      <Carousel data={data} side={side}/>
      {/* <Options/> */}
    </main>
    <main className="flex">
    <Bundles/>
    </main>
    <main>
      <SecBundle/>
    </main>
    {/* <main>
      <Footer/>
    </main> */}
    </>
  );
}
