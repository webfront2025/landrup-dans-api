// src/components/aktivite.jsx
import { cookies } from "next/headers";
import Image from "next/image";
export default async function Aktivite({ aktivite }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("repe_token");
  const uid = cookieStore.get("repe_uid");

  return (
    <li className="">
      <div className="flex  relative justify-center">
        <Image
          src={aktivite.asset.url}
          width={250}
          height={100}
          className="h-[20em] w-[80%]  rounded-l-lg rounded-tr-lg flex justify-center"
        />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] bg-purple-300 bg-opacity-70 text-black p-3 rounded-lg text-center">
            <p className="font-semibold">{aktivite.name}</p>
            <p>{aktivite.minAge}-{aktivite.maxAge} år</p>
          </div>
      </div>
    </li>
  );
}
