var config = {};
// Change properties below this line

// The IP of your milights wifi bridge
// Set to 255.255.255.255 for automatic discovery
// If discovery does not work, set to manual IP
// Make sure that this IP is set as a static IP in your router settings
config.bridge_ip = "192.168.1.1";

// Version of your milights wifi bridge
// Options: "v4" (old square boxes) or "v6" (iBox with integrated light)
config.bridge_version = "v6";

// Port to run the web service at
config.nodejs_port = 3000;

// In case you are running milights-bridge on linux, set to true.
// For other operating systems, set false.
config.platform_islinux = true;

// This allows you to set nicknames for zone IDs
config.zones = [ "Zone 1", "Zone 2", "Zone 3", "Zone 4" ];

// Do not change anything below this line
module.exports = config;
