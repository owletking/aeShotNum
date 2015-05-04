/*
Name: AE On-screen Shot Number Display -v 2.0
 
Author: Wing Luo (winglo@gmail.com)
Date Create: 04/22/2009
Date Update: 12/27/2011
 
Instruction: create a text layer in your comp, copy and paste
the expression to "Source Text"; add markers on the text layer
to separate each shot. Shot number and frame-count will auto-
matically displayed as on-screen text between each markers.
*/
 
if (thisLayer.marker.numKeys < 2){
"please create markers \ron this text layer."; } else {
n = 0; f = 0; m1 = 0; m2 = 0;
fn= 2; // number of decimals places
mk = marker.numKeys; // total numbers of markers on the layer
mnk = marker.nearestKey(time).index; // nearest marker to time
if (mk > 0) { if (marker.key(mnk).time > time) mnk--;};
if (mnk > 0) { mnkc = marker.key(mnk).comment;
if (mnkc) {mnkc="\""+mnkc+"\"";} else {mnkc="";};}
mnk1 = mnk + 1;
if (mnk < marker.numKeys & mnk > 0){
m1 = marker.key(mnk).time;
m2 = marker.key(mnk1).time; }; r = m2 - m1;
if (mnk == mk | mnk == 0) {mnk = "[out of range]";}
else { fmnk = "."+(mnk*.001+.00001);
mnk="S_"+fmnk.substring(3,6)+"\r"+r.toFixed(fn)+"s/ "
+timeToFrames(r)+"f"+"\r"+mnkc;} mnk; }
