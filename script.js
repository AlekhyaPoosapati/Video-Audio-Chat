let t = true;
let f = false;
let localStream;
//created a client
let client = AgoraRTC.createClient({
     mode: "rtc",
     codec: "vp8",
});

//initialized the client
client.init("9875d8d4937243f4b0c3b1013fd547f5");

// creating a room means a joining video call
// client.join("0069875d8d4937243f4b0c3b1013fd547f5IABh7hVOY0mwyfBgqPeaB+99rVbdJQbK8CiOkMnvdhnD8UulwmkAAAAAEAAHiSHU1ljwYAEAAQDVWPBg",
//  "web demo", null, (uid)=>{
//      let localStream = AgoraRTC.createStream({
//           audio: t,
//           video: t,
//       });
//       localStream.init(()=>{
//           mystream = localStream;
//           localStream.play("local");
//           client.publish(localStream);
//       });
//    });

// Subscribe to the remote stream when it is published
client.on("stream-added", function(evt){
     client.subscribe(evt.stream);
 });


 client.on("stream-subscribed", function(evt){
     let stream = evt.stream;
     let streamId = String(stream.getId());
     let right = document.getElementById('remote')
     let div = document.createElement('div')
     div.id = streamId;
     right.appendChild(div);
     stream.play(streamId);
     div.setAttribute("style","height : 200px; width : 100%;margin-left:5px;margin-right:5px;")
     
 });
function mute() {
    mystream.muteAudio();
}

function unmute() {
    mystream.unmuteAudio();
}

function videooff() {
    mystream.muteVideo();
}

function videoon() {
    mystream.unmuteVideo();
}

function removeVideoStream() {
    mystream.stop();
}
 