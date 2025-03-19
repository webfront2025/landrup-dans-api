// "use client";
// import { useState } from "react";

// export default function RegisterButton({ userId, activityId, isRegistered, hasSameDayActivity }) {
//   const [loading, setLoading] = useState(false);

//   const handleRegister = async () => {
//     if (loading) return;
//     setLoading(true);

//     if (hasSameDayActivity) {
//       alert(" Du kan ikke tilmelde dig en aktivitet på samme ugedag!");
//       setLoading(false);
//       return;
//     }

//     const url = isRegistered
//       ? `http://localhost:4000/api/v1/users/${userId}/activities/${activityId}` // DELETE
//       : `http://localhost:4000/api/v1/users/${userId}/activities`; // POST

//     try {
//       const res = await fetch(url, {
//         method: isRegistered ? "DELETE" : "POST",
//         credentials: "include",
//         headers: { "Content-Type": "application/json" },
//         body: isRegistered ? null : JSON.stringify({ activityId }), // Send activityId only for POST
//       });

//       if (!res.ok) throw new Error("Fejl ved tilmelding!");

//       window.location.reload(); //  Refresh after registration
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleRegister}
//       className={`mt-5 px-5 py-2 rounded-lg text-white ${loading ? "bg-gray-500" : "bg-[#5E2E53]"}`}
//       disabled={loading}
//     >
//       {loading ? "Behandler..." : isRegistered ? "Forlad" : "Tilmeld"}
//     </button>
//   );
// }


// onsdag             kl.15:32 - 19-3



"use client"
//brugt inspiration fra repetition
import { useEffect, useState } from "react";
export default function RegisterButton({token, userid, id, role, minAge, maxAge, date}){


    const [isSigned, setIsSigned] = useState(false)
    const [isAge, setIsAge] = useState(false)
    const [isDate, setIsDate] = useState(false)

    
    

    async function handleDelete(){
            const userDelete = await fetch(`http://localhost:4000/api/v1/users/${userid}/activities/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (userDelete.ok) {
                setIsSigned(false)
                location.reload()
            }

            
    }
        
    async function handleSignup(){
        

        const userResponse = await fetch(`http://localhost:4000/api/v1/users/${userid}/activities/${id}`,{
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`
            },
        })
        if (userResponse.ok) {
            setIsSigned(true)
            location.reload()
        }
            
        console.log("fetch", userResponse);
    }

    useEffect(()=>{
        fetch(`http://localhost:4000/api/v1/users/${userid}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            // console.log("age",maxAge)

          
            setIsSigned(data.activities.some(element => element.id === id))
            setIsDate(data.activities.some(element => element.weekday === date))
            setIsAge(data.age >= minAge && data.age <= maxAge)
           
            console.log("WEEKDAY STATE?",data);

            
            
        })
    }, [])

    return(
        <>
            {role !== "instructor" &&
                (isSigned
                    ? <button className="disabled:bg-gray-500  text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem] absolute right-[1.5rem] bottom-[1.5rem] shadow-lg" onClick={handleDelete}>Forlad</button>
                    : <button disabled={!isAge || isDate} className="disabled:bg-gray-500  text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem] absolute right-[1.5rem] bottom-[1.5rem] shadow-lg" onClick={handleSignup}>{isAge ? `Tilmeld` : `Uden for aldersgrænse`}</button>
                )}
                
                {(
                    !isSigned
                    ? <span className="bg-[#00000085]  text-[#EAEAEA] absolute right-[1.5rem] bottom-0">{!isSigned && isDate ? "Du er allerede tilmeldt noget for denne dag" : ""}</span> 
                    : null
            )}
        </>
    )
}
