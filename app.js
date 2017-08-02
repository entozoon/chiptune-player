// var mod = new Protracker();
// mod.load('arvids.mod');
// mod.autostart = true;
//
//

XMPlayer.init();

var uri = 'jt_mind.xm';

var xmReq = new XMLHttpRequest();
xmReq.open('GET', uri, true);
xmReq.responseType = 'arraybuffer';
xmReq.onload = function(xmEvent) {
    var arrayBuffer = xmReq.response;
    if (arrayBuffer) {
        XMPlayer.load(arrayBuffer); // ArrayBuffer
        XMPlayer.play(); // pause() stop()
    } else {
        console.log('unable to load', uri);
    }
};
xmReq.send(null);
