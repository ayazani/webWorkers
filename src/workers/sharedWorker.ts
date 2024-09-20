// @ts-ignore
self.onconnect = (e: MessageEvent): void => {
  console.log("[Worker] onconnect");
  const port = e.ports[0];
  port.onmessage = (event: MessageEvent): void => {
    console.log("[Worker] onmessage", event);
    const tr = true;
    while (tr) {
      let sum = 0;
      for (let i = 0; i < 10000; i++) {
        sum += i;
      }
      const array: Array<number> = new Array(sum);
      array.fill(sum / 1000, 0, sum);
      console.log(array)
      break;
    }
    port.postMessage("ended");
  };
  port.start();
};
