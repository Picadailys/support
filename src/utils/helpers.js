function getDayWithSuffix(day) {
  if (day > 3 && day < 21) return day + "th";
  switch (day % 10) {
    case 1:
      return day + "st";
    case 2:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
}

export function formatDate(date) {
  const day = getDayWithSuffix(date.getDate());
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

export const generateDeviceId = async () => {
  const userAgent = navigator.userAgent;
  const ipResponse = await fetch("https://api.ipify.org?format=json");
  const { ip } = await ipResponse.json();
  const data = new TextEncoder().encode(`${userAgent}-${ip}`);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
};
