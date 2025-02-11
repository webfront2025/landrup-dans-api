// src/app/(main)/search/page.jsx

import Aktivite from "@/components/Aktivite";
import Footer from "@/components/Footer";
import SearchForm from "@/components/SearchForm";
import { serverFetch } from "@/lib/server-fetch";


export default async function searchPage({searchParams}) {
    let searchQuery = searchParams?.searchResult
  let alleAktiviter = await serverFetch("http://localhost:4000/api/v1/activities");
 

  if(searchQuery){
    alleAktiviter= alleAktiviter.filter(activity=> activity.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }
console.log(alleAktiviter.name);

  return (
    <>
      <div className="bg-[#5E2E53]">
        <h1 className="text-white --font-sans: ui-sans-serif, system-ui, sans-serif,ubuntu text-[36px] ml-12">Søg</h1>
        <SearchForm />
        <ul>
          
          {alleAktiviter.length > 0 ? (
            alleAktiviter.map((aktiv) => (
              <Aktivite key={aktiv.id} aktivite={aktiv} />
            ))
          ) : (
            <p className="text-gray-500">Ingen aktiviteter fundet</p>
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
}
