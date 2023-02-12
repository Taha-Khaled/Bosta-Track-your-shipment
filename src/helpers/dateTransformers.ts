export const getEnDate = (timestamp: Date, withoutYear?: boolean) => {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const dayofweek = weekday[date.getDay()];
  const day = date.getDate();
  return `${dayofweek}, ${day} ${month} ${withoutYear ? "" : year}`;
};
export const getArDate = (timestamp: Date, withoutYear?: boolean) => {
  const date = new Date(timestamp);
  const dateString_Ar = date.toLocaleDateString("ar-EG", {
    weekday: "long",
    year: withoutYear ? undefined : "numeric",
    month: "short",
    day: "numeric",
  });
  return dateString_Ar;
};
export const dateDiffInDays = (timestamp: Date) => {
  const currentDate = new Date();
  const targetDate = new Date(timestamp);
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate()
  );
  const utc2 = Date.UTC(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};
export const getTime = (timestamp: Date, formate: string) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString(formate, {
    hour: "2-digit",
    minute: "2-digit",
  });
};
