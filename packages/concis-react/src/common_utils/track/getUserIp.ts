const getUserIp = () => {
  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = `http://pv.sohu.com/cityjson?ie=utf-8`;
    document.body.appendChild(scriptElement);
    scriptElement.onload = () => {
      try {
        document.body.removeChild(scriptElement);
        resolve(returnCitySN);
      } catch (e) {
        reject(e);
      }
    };
  });
};

export default getUserIp;
