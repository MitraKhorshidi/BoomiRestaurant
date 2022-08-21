import { useRef, useState } from "react";

export default function Edit() {
  const numRef = useRef();
  const userIdRef = useRef();

  const [res, setRes] = useState(undefined);
  async function search(event) {
    event.preventDefault();

    const ReservationId = numRef.current.value;
    const userId = userIdRef.current.value;
    const data = { ReservationId, userId };

    const res = await fetch("/api/searchReservation", {
      method: "POST",
      body: JSON.stringify(data),
    });

    console.log(res);
    if (res.status == 200) {
      const data = await res.json();
      console.log(data);
      setRes(data);
    } else {
      const error = await res.text();
      console.log(error);
      setRes({ error: error });
    }
  }

  if (!res || res.error) {
    return (
      <>
        <form className="flex flex-col gap-y-3 text-lg" onSubmit={search}>
          <div className="flex flex-row gap-x-8">
            <div className="flex flex-col">
              <p>reservation number :</p>
              <input
                type="number"
                ref={numRef}
                className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10 "
              />
            </div>
            <div className="flex flex-col">
              <p>phone number :</p>
              <input
                type="tel"
                ref={userIdRef}
                className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10 "
              />
            </div>
          </div>
          <input
            type="submit"
            value="Search"
            className="bg-teal-300 hover:bg-teal-400 px-4 py-1 font-medium rounded-md shadow-sm self-start"
          />
        </form>
        {res && res.error && <p>error:{res.error}</p>}
      </>
    );
  }

  return <div>Your reservation :{JSON.stringify(res)}</div>;
}
