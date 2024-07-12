Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "name",
  streamUrl: "rtsp://{{username:password}}@192.168.13.101:554",
  //#23
  wsPort: 9999,
  ffmpegOptions: {
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});

