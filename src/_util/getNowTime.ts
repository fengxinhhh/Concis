const getNowTime = (format: boolean = true) => {
  const date = new Date();
  if (format) {
    const year = date.getFullYear();
    const month =
      String(date.getMonth() + 1).length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = String(date.getDate()).length < 2 ? `0${date.getDate()}` : date.getDate();
    const hour = String(date.getHours()).length < 2 ? `0${date.getHours()}` : date.getHours();
    const minute =
      String(date.getMinutes()).length < 2 ? `0${date.getMinutes()}` : date.getMinutes();
    const secord =
      String(date.getSeconds()).length < 2 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${secord}`;
  } else {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const secord = date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${secord}`;
  }
};

export { getNowTime };
