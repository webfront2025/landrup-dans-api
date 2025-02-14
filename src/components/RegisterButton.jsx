"use client";
import { useState } from "react";

export default function RegisterButton({ userId, activityId, isRegistered, hasSameDayActivity }) {
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (loading) return;
    setLoading(true);

    if (hasSameDayActivity) {
      alert(" Du kan ikke tilmelde dig en aktivitet på samme ugedag!");
      setLoading(false);
      return;
    }

    const url = isRegistered
      ? `http://localhost:4000/api/v1/users/${userId}/activities/${activityId}` // DELETE
      : `http://localhost:4000/api/v1/users/${userId}/activities`; // POST

    try {
      const res = await fetch(url, {
        method: isRegistered ? "DELETE" : "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: isRegistered ? null : JSON.stringify({ activityId }), // Send activityId only for POST
      });

      if (!res.ok) throw new Error("Fejl ved tilmelding!");

      window.location.reload(); //  Refresh after registration
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleRegister}
      className={`mt-5 px-5 py-2 rounded-lg text-white ${loading ? "bg-gray-500" : "bg-[#5E2E53]"}`}
      disabled={loading}
    >
      {loading ? "Behandler..." : isRegistered ? "Forlad" : "Tilmeld"}
    </button>
  );
}
