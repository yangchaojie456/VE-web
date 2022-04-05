export const formatter2mill = (value: string) => {
  // 时：分：秒：毫秒
  // 00:58:46:20
  let timeArr = value.split(":");

  let millisecond: string = timeArr[timeArr.length - 1];
  let second: string = timeArr[timeArr.length - 2]
    ? timeArr[timeArr.length - 2]
    : "0";
  let minute: string = timeArr[timeArr.length - 3]
    ? timeArr[timeArr.length - 3]
    : "0";
  let hour: string = timeArr[timeArr.length - 4]
    ? timeArr[timeArr.length - 4]
    : "0";

  let second2mill = Number(second) * 1000;
  let minute2mill = Number(minute) * 60 * 1000;
  let hour2mill = Number(hour) * 60 * 60 * 1000;

  let totalMill: number =
    Number(millisecond) + second2mill + minute2mill + hour2mill;
  return totalMill;
};
export const mill2formatter = (totalMill: number) => {
  totalMill = parseInt(String(totalMill));
  let millisecond = String(totalMill % 1000);

  let second = String(parseInt(String(totalMill / 1000)) % 60);
  let minute = String(
    parseInt(String(parseInt(String(totalMill / 1000)) / 60)) % 60
  );
  let hour = String(
    parseInt(
      String(parseInt(String(parseInt(String(totalMill / 1000)) / 60)) / 60)
    ) % 60
  );

  return `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(
    2,
    "0"
  )}:${millisecond.padStart(3, "0")}`;
};
