// Zone 0 = all
var ajax_reqs = new Array();
var zone = 0;

function setMood(start_hue, end_hue)
{
  // Make sure we receive ints
  start_hue = parseInt(start_hue);
  end_hue = parseInt(end_hue);

  if(start_hue >= end_hue)
  {
    alert("Start hue must be smaller than end hue.");
    return;
  }
  httpGet("api/mood", {start: start_hue, end: end_hue});
}

function modeFaster()
{
   httpGet("api/mode_fast", null);
}

function modeSlower()
{
   httpGet("api/mode_slow", null);
}

function nextMode()
{
   httpGet("api/mode", null);
}

function setZone(zone)
{
   httpGet("api/zone", { value: zone });
}

function setAlarmZone(zone)
{
   httpGet("api/alarm_zone", { value: zone });
}

function setValue(is_on)
{
    if(is_on)
        httpGet("api/turn_on", null);
    else
        httpGet("api/turn_off", null);
}

function setCCT(val)
{
    httpGet("api/cct", { value: val });
}

function setBrightness(val)
{
    httpGet("api/brightness", { value: val });
}

function setHue(val)
{
    httpGet("api/hue", { value: val });
}

function setSaturation(val)
{
    httpGet("api/saturation", { value: (255 - val) });
}

function setNightMode()
{
    httpGet("api/night", null);
}

function setRandomHue()
{
    httpGet("api/rand_hue", null);
}

// Avoid the interface to be laggy due to too many ajax requests sent
// when sliding the hue bar for example.
function cancelPending()
{
   for (var i = 0; i < ajax_reqs.length; i++) {
     element = ajax_reqs[i];
     element.abort();
   }
   ajax_reqs.length = 0;
}

function testAlarm()
{
   httpGet("api/test_alarm", null);
}

function startAlarm()
{
    httpGet("/api/start_alarm", { wakeUpAt: $("#wakeUpAt").val(),
                                    startAt: $("#startAt").val() });
}

function httpGet(theUrl, theData)
{
   cancelPending();
    ajax_reqs.push($.ajax({
       async: true,
       type: "GET",
       url: theUrl,
       data: theData
   }));
}
