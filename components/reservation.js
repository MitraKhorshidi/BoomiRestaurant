import Link from "next/link";
import { useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReservInfo from "./reservInfo";
import { apiAddReservation } from "/data/apiClient";

const Reservation = () => {
  const [date, setdate] = useState(new Date());

  const userIdRef = useRef();
  const tableIdRef = useRef();
  const numberRef = useRef();
  const hostRef = useRef();

  const [res, setRes] = useState(undefined);
  async function add(event) {
    event.preventDefault();

    const userId = userIdRef.current.value;
    const TableId = tableIdRef.current.value;
    const num = numberRef.current.value;
    const host = hostRef.current.value;

    if(confirm("Do you want to register this reservation ?"))

    try {
      const res = await apiAddReservation(userId, TableId, num, host, date);
      setRes(res);
    } catch (err) {
      setRes({ error: err.message });
    }
  }

  function onOk() {
    setRes(undefined);
  }

  if (!res || res.error) {
    return (
      <div className="flex flex-col gap-y-10 justify-center">
        <form
          className="flex flex-row gap-x-6 text-lg font-normal "
          onSubmit={add}
        >
          <div className="flex flex-col gap-y-1">
            <p>Phone Number</p>
            <input
              name="userId"
              type="tel"
              ref={userIdRef}
              className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10"
            />
            <p>Number of People</p>
            <input
              name="number"
              type="number"
              ref={numberRef}
              className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10"
            />
            <p>Are you a Host ?</p>
            <select
              name="host"
              ref={hostRef}
              className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10"
            >
              <option>Yes</option>
              <option selected>No</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <p>Table Number</p>
            <input
              name="tableId"
              type={"number"}
              ref={tableIdRef}
              className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10"
            />
            <p>Date</p>
            <ReactDatePicker
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mmaa"
              selected={date}
              onChange={(date) => setdate(date)}
              className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10"
            />
            <input
              type="submit"
              value="Book"
              className="bg-teal-300 hover:bg-teal-400 px-4 py-1 font-medium rounded-md shadow-sm self-center mt-8"
            />
          </div>
        </form>
        {res && res.error && <p>error:{res.error}</p>}

        <p className="text-lg">
          Do you want to edit or cancel your reservation ?
          <span className="text-teal-700 underline underline-offset-2">
            <Link href={"/reservation/view"}>Yes !</Link>
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="my-auto">
      <p className="text-title text-lg">
        Your reservation has been Succussfuly saved .
      </p>
      <ReservInfo reservation={res} onOk={onOk} />
    </div>
  );
};
export default Reservation;
