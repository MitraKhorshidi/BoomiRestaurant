async function call(data, url) {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (res.status == 200) {
    return await res.json();
  } else {
    throw new Error(await res.text());
  }
}

export async function apiAddReservation(userId, TableId, num, host, date) {
  const data = {
    userId,
    TableId,
    num,
    host,
    date,
  };

  return await call(data, "/api/newReservation");
}

export function apiCancelReservation(reservationId, userId) {
  const data = {
    reservationId,
    userId,
  };

  return call(data, "/api/deleteReservation");
}
export function apiSearchReservation(reservationId, userId) {
  const data = {
    reservationId,
    userId,
  };

  return call(data, "/api/searchReservation");
}
export function apiRegisterOrder(userId , address , shoppigCart) {
  const data = {
    userId,
    address,
    shoppigCart,
  };

  return call(data, "/api/regOrder");
}
