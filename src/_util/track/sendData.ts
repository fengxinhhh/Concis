const sendData = (params: object) => {
  const sendScript = document.createElement('script');
  console.log(params, JSON.stringify(params));
  const requestAddress =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:9999/saveComponentLog?info=${JSON.stringify(params)}`
      : `http://react-view-ui.com:9999/saveComponentLog?info=${JSON.stringify(params)}`;
  sendScript.src = requestAddress;
  sendScript.async = true;
  document.body.appendChild(sendScript);
  return new Promise((resolve, reject) => {
    sendScript.onload = () => {
      try {
        document.body.removeChild(sendScript);
        resolve('');
      } catch (e) {
        reject(e);
      }
    };
  });
};
export default sendData;
