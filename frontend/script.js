document.getElementById("loadBtn").addEventListener("click", async () => {
const res = await fetch("/api/traffic");
const data = await res.json();
document.getElementById("result").innerText = data.message;
});