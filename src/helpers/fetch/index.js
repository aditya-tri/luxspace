//helper fetch untuk api agar lebih cepat saat memanggil api di tiap component

export default async function FetchData({
  url,
  method = "GET",
  host = process.env.REACT_APP_API_HOST,
  body,
}) {
  const response = await fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body,
  });
  const statusHasResponse = [200, 404];
  const jsonResponse = statusHasResponse.includes(response.status)
    ? await response.json()
    : response;
  if (response.ok) return jsonResponse;
  throw new Error(JSON.stringify(jsonResponse));
}
