const dateDayTimeLogic = (item) => {
  function dateDayTime(item) {
    const dateObj = new Date(item.dt * 1000);
    const day = dateObj.getDate();
    const monthShort = dateObj.toLocaleDateString("en-US", { month: "short" });
    const weekdayShort = dateObj.toLocaleDateString("en-US", {
      weekday: "short",
    });

    const monthLong = dateObj.toLocaleDateString("en-US", { month: "long" });
    const weekdayLong = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const time = dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const short = [day, monthShort, weekdayShort, time];
    const long = [day, monthLong, weekdayLong, time];

    return { short: short, long: long };
  }

  return dateDayTime(item)
};
