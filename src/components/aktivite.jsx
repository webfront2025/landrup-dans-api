import { cookies } from "next/headers";
import Image from "next/image";
export default async function Aktivite({ aktivite }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("repe_token");
  const uid = cookieStore.get("repe_uid");

  return (
    <li className="">
      <div className="flex justify-center">
        <Image
          src={aktivite.asset.url}
          width={250}
          height={100}
          className="h-[20em]  rounded-l-lg rounded-tr-lg flex justify-center"
        />
      </div>
      <h2>
        {aktivite.name}, {aktivite.city}
      </h2>
      <p>DKK {aktivite.price}</p>
    </li>
  );
}
