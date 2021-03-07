# milights-bridge

# :warning: This application is deprecated and is not supported anymore. Feel free to take a look at [milights-rest](https://github.com/jbchouinard/milights-rest): a fork from this project, which has been updated and provides a great REST interface.

Milights-bridge is a remote control application for your Milight lights. The layout works well on both computers and mobile devices. It provides a GUI as well as an API for third-party applications.

## Features
- Remote control (on/off, colours, saturation, brightness, modes)
- Disco mode (making your Milight lights change colour following the rhythm of your songs)
**Note: due to my previous laptop being damaged, I have lost the code for the disco mode on the local Git of that laptop. It currently does not work in this version, but I will add it ASAP.**
- Alarm mode (wake you up using the Milight lights)
- Mood mode (lights keep changing between two chosen colours)
- An extensive API, to be used by any other third-party application, such as the [**ha-bridge**](https://github.com/bwssytems/ha-bridge) for making your Milight lights compatible with *Google Home*.
- More features will be added regularly.

## Recommendations
It is recommended to run the milights-bridge application on a device similar to the *Raspberry Pi*. We are not affiliated, however, the *Raspberry Pi* is advantageous for its low consumption power while still having a CPU powerful enough to run this.

## Google Home
[An extensive tutorial of how to use this software to allow your Google Home to control your Milight lights can be found here](https://hackaday.io/project/25394-how-to-use-your-milight-lights-with-google-home).

## Security
While *milights-bridge* isn't particularly unsecure, allowing internet traffic to it is not a good idea, since anybody would have control over your lights. Securing it with a password is not an option either, as that would make the API less accessible for 3rd party applications.

Use the application at your own risk. I am not responsible for anything that happens from using this application.

## Requirements
- *NodeJS* must be installed.
`sudo apt-get update`
`sudo apt-get install nodejs`
- *NPM* must be installed.
`sudo apt-get update`
`sudo apt-get install npm`

## Installation

- Clone the Git repository.
`sudo git clone https://github.com/KevinVR/milights-bridge.git`
- Go into the *milights-bridge* directory.
`cd milights-bridge`
- Install required libraries
`sudo npm install`
- Copy the example configuration file.
`sudo cp config.example.js config.js`
- Edit the configuration, follow the instructions inside the file.
`sudo vi config.js`
or
`sudo nano config.js`
- Now, it is possible to run *milights-bridge*
`sudo node server.js`
- Open your browser at `http://localhost:<port>` (the port is configurable in config.js, default is *3000*).

## Running milights-bridge as a service
- Install *forever*
`sudo npm install -g forever`
- Run *milights-bridge* using *forever* (inside *milights-bridge* folder)
`sudo forever start server.js`

## Update
- Stop *milights-bridge* (inside *milights-bridge* folder)
`sudo forever stop server.js`
- Get the latest update from Git (this will not modify your config file, however some updates might require *config.js* modifications, so take a look at the new *config.example.js* in case it does not run).
`sudo git pull`
- Start the updated *milights-bridge* (inside *milights-bridge* folder)
`sudo forever start server.js`

## Troubleshooting
If any of the commands fail, try running them with `sudo <cmd_here>`, as it might be a permissions problem. If this does not solve it, [open a new issue](https://github.com/KevinVR/milights-bridge/issues/new).

The *milights-bridge* server returns some quite interesting debug data to the console, when run using `sudo node server.js`. However, this output is not shown when using `forever` or `sudo node server.js &`.

## Contributing
Contributing is possible, [contact me](https://github.com/KevinVR/milights-bridge/issues/new) if you are interested, or have made some code yourself that might be interesting to include. Your name (and link) will then be added to the contributor's list on the about page of the application.

Do you like this project? If so please star this project on GitHub! Let other people find out about this application.

## Credits
The *milights-bridge* application makes use of a few libraries and tools, listed below.

- [node-milight-promise by Marcus Wittig](https://github.com/mwittig/node-milight-promise)
- [NodeJS](https://nodejs.org/)
- [ExpressJS](https://expressjs.com/)
- [EmbeddedJS](http://www.embeddedjs.com/)

Javascript libraries

- [Kelvin To RGB](http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code/)
- [HSV To RGB](http://www.cs.rit.edu/~ncs/color/t_convert.html)
- [Audio Recorder: RecorderJS](https://github.com/mattdiamond/Recorderjs) (used for disco lights that react to music, the audio is in no way tracked).
- [Audio Recorder 2](https://github.com/cwilso/AudioRecorder) (same remark applies -- these have not yet been fully integrated into the project).

Templates
- [Bootstrap](http://getbootstrap.com)

Please [create an issue](https://github.com/KevinVR/milights-bridge/issues/new) would it appear that a library was forgotten to be updated into this list.

Also note that this is a project that I've quickly set up in my free time. Due to time limitations, I have purposely chosen for a simple (less scalable) architecture.

## License
&copy; [Kevin Van Ryckegem](http://signaware.com) 2017. All Rights Reserved.
**Software License:** `Creative Commons Non-Commercial ShareAlike 3.0 unported`
For more information, visit: [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/)
