const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

app.use(cors());  

//Write a code that listen to serial port and send data to the client
//Use the following code to get the data from serial port
const SerialPort = require('serialport');

const port = new SerialPort('/dev/tty-usbserial1', {
    baudRate: 114400,
});

// Read data that is available but keep the stream in "paused mode"
port.on('readable', function () {
    console.log('Data:', port.read())
  })
  
  // Switches the port into "flowing mode"
  port.on('data', function (data) {
    console.log('Data:', data)
  })

// This displays message that the server running and listening to specified port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'Mission Control System Ready' }); //Line 10
}); //Line 11

/*app.get('/express_backend/telemetry', (req, res) => { 
  res.send({ express: 'Telemetry Data is here' });
});
*/