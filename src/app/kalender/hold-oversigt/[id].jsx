// src/app/(main)/kalender/hold-oversigt/[id].jsx
import { cookies } from "next/headers";

export default async function HoldOversigtPage({ params }) {
  const { id } = params; // Activity ID from URL
  const cookieStore = await cookies();
  const token = cookieStore.get("landrup_token");

  try {
    const res = await fetch(`http://localhost:4000/api/v1/activities/${id}/roster`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token.value,
      },
    });

    const data = await res.json();

    return (
      <div className="w-full h-screen bg-[#5E2E53] text-white p-5">
        <h1 className="text-[36px]">Hold Oversigt</h1>
        <ul>
          {data.enrolledUsers.map((user) => (
            <li key={user.id} className="bg-white text-black p-3 m-2 rounded">
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (err) {
    console.error(err);
  }
}
