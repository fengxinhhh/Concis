const getNowTime = (format: boolean = true) => {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    format && String(date.getMonth() + 1).length < 2
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1;
  const day = format && String(date.getDate()).length < 2 ? `0${date.getDate()}` : date.getDate();
  const hours =
    format && String(date.getHours()).length < 2 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    format && String(date.getMinutes()).length < 2 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    format && String(date.getSeconds()).length < 2 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export { getNowTime };
