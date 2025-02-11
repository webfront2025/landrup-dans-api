// src/app/(main)/aktivites/page.jsx
import Aktivite from "@/components/aktivite";
import Footer from "@/components/Footer";
import { serverFetch } from "@/lib/server-fetch";

export default async function Ejendomme() {
  const data = await serverFetch("http://localhost:4000/api/v1/activities");
  console.log(data);

  return (
    <>
      <div className="bg-[#5E2E53]">
        <h1>Alle aAktivites</h1>
        <ul>
          {data.map((ejendom) => (
            <Aktivite key={ejendom.id} aktivite={ejendom} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
