export default () => {
  onmessage = (event) => {
    console.log("start", event.data);
    postMessage("started");
    const tr = true;
    while (tr) {
      let sum = 0;
      for (let i = 0; i < 10000; i++) {
        sum += i;
      }
      const array: Array<number> = new Array(sum);
      array.fill(sum / 1000, 0, sum);
      //postMessage("post message" + array.length);
      break;
    }
    postMessage('ended')
    close();
  };
  self.close = () => {
    postMessage("post message CLOSING");
    console.log("CLOSING");
  };
};
