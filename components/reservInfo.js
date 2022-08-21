import { useState } from "react";
import { apiCancelReservation } from "/data/apiClient";
import { dateStr } from "/data/utility";

export default function ReservInfo({ reservation, onOk }) {
  const [apiRes, setApiRes] = useState(undefined);
  async function onCancel() {
    try {
      const apiRes = await apiCancelReservation(
        reservation.id,
        reservation.userId,
      );
      setApiRes(apiRes);
      onOk();
    } catch (err) {
      setApiRes({ error: err.message });
    }
  }

  if (!apiRes || apiRes.error) {
    return (
      <div className="text-lg flex flex-col justify-center gap-y-4 mx-auto my-auto">
        <p className="font-medium">Reservation Number : {reservation.id}</p>
        <table className="table-fixed border-separate border  border-slate-400">
          <tr>
            <td className="border border-slate-300 p-2">phone number</td>
            <td className="border border-slate-300 text-center">
              {reservation.userId}
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2">table number</td>
            <td className="border border-slate-300 text-center">
              {reservation.TableId}
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2">number of people</td>
            <td className="border border-slate-300 text-center">
              {reservation.num}
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2">date</td>
            <td className="border border-slate-300 text-center">
              {dateStr(reservation.date)}
            </td>
          </tr>
        </table>
        <div className="flex flex-row justify-center items-center gap-x-5">
          <button
            onClick={onOk}
            className="px-2 py-1 bg-teal-300 rounded-md shadow-sm"
          >
            ok
          </button>
          <button
            onClick={onCancel}
            className="px-2 py-1 bg-red-300 rounded-md shadow-sm"
          >
            cancel
          </button>
        </div>
        {apiRes && apiRes.error && <p>{apiRes.error}</p>}
      </div>
    );
  }
  return null;
}
