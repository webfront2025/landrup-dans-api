// src/app/(main)/aktivites/[id]/page.jsx
import { serverFetch } from "@/lib/server-fetch";
import Image from "next/image";
import Footer from "@/components/Footer";

export default async function generateMetadata({ params }) {
	const aktId = (await params).id
console.log(aktId);

  
  
  // Fetch activity details
  const aktivites = await serverFetch(`http://localhost:4000/api/v1/activities/${aktId}`);
  console.log(aktivites);
	/* const response = await fetch("https://fiktivapi.com/produkter/" + produktId)
	const data = await response.json() */
// 	const data = {
// 		aktName: "Dims",
// 	}
// 	return {
// 		title: data.productName
// 	}
// }
// export default async function Produkt({ params }) {
// 	return (
// 		<h1>Nu vises produkt med ID {/* params.produktId */}</h1>
// 	)
// }
return (
    <>
    <div className="">
      {/* Activity Image with Tilmeld Button */}
      <div className="relative w-full h-[20em] rounded-lg overflow-hidden">
        <Image 
          src={aktivites.asset.url}
          width={600}
          height={300}
          className="w-full h-full object-cover rounded-lg"
          alt={aktivites.name}
        />
        <button className="absolute bottom-4 w-[11em] left-1/3 transform -translate-x-1/2b bg-[#5E2E53] text-white py-2 px-5 rounded-lg">
          Tilmeld
        </button>
      </div>

      {/* Activity Details */}
      <div className="mt-5 p-3 text-white ">
        <h1 className="text-xl font-bold">{aktivites.name}</h1>
        <p className="">{aktivites.minAge}-{aktivites.maxAge} år</p>
        <p className="mt-2">{aktivites.description}</p>
      </div>
    </div>
     <Footer />
     </>
  );
}