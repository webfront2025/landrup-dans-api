// src/app/(main)/aktivites/page.jsx
import Aktivite from "@/components/Aktivite";
import Footer from "@/components/Footer";
import { serverFetch } from "@/lib/server-fetch";

export default async function aktivity() {
  const data = await serverFetch("http://localhost:4000/api/v1/activities");
  // console.log(data);

  return (
    <>
      <div className="bg-[#5E2E53]">
        <h1 className="text-white --font-sans: ui-sans-serif, system-ui, sans-serif,ubuntu text-[36px] ml-12">Aktiviteter</h1>
        <ul>
          {data.map((aktiv) => (
            <Aktivite key={aktiv.id} aktivite={aktiv} />
          ))}
        </ul>
      </div>
      {/* <Footer /> */}
    </>
  );
}
