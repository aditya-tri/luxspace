// Membuat helper fetch untuk api agar lebih cepat saat memanggil api

export default function fetchData({
  url,
  method = "GET",
  host = process.env.REACT_APP_API_HOST,
}) {
  return fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }).then(async (res) => {
    const jsonResponse = await res.json();
    if (res.ok) return jsonResponse;
    throw new Error(JSON.stringify(jsonResponse));
  });
}
