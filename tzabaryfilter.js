(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"tzabaryfilter_atlas_1", frames: [[0,0,1152,1936]]},
		{name:"tzabaryfilter_atlas_2", frames: [[0,0,1267,847],[0,849,1163,779]]},
		{name:"tzabaryfilter_atlas_3", frames: [[0,0,1082,724],[0,726,1087,716]]},
		{name:"tzabaryfilter_atlas_4", frames: [[991,707,627,785],[1053,0,960,640],[0,707,989,651],[0,1360,922,618],[0,0,1051,705]]},
		{name:"tzabaryfilter_atlas_5", frames: [[1961,256,87,106],[1094,285,87,106],[1861,0,139,73],[1861,75,139,73],[1861,256,98,96],[994,285,98,96],[1977,461,64,64],[1977,527,64,64],[2002,0,32,109],[1684,563,286,68],[0,0,1192,283],[1876,364,91,98],[518,594,91,98],[1861,150,91,104],[1954,150,91,104],[611,594,89,100],[702,594,89,100],[2002,111,28,28],[994,563,343,246],[1876,464,99,82],[793,594,150,53],[1684,633,150,53],[2004,673,28,28],[437,687,28,28],[1969,364,55,95],[87,647,84,80],[0,647,85,83],[914,649,56,38],[386,647,61,38],[1952,681,50,38],[855,649,57,38],[449,647,61,38],[2000,633,37,38],[1836,681,56,38],[793,649,60,38],[386,687,49,38],[1894,681,56,38],[994,393,179,46],[173,647,137,46],[312,647,72,46],[1836,633,162,46],[1972,593,72,38],[945,594,45,38],[518,285,474,307],[1339,563,343,128],[994,442,880,119],[0,285,516,360],[1194,0,665,440]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_47 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["tzabaryfilter_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Group = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["tzabaryfilter_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["tzabaryfilter_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["tzabaryfilter_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["tzabaryfilter_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.initialize(ss["tzabaryfilter_atlas_5"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.initialize(ss["tzabaryfilter_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.initialize(ss["tzabaryfilter_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.initialize(ss["tzabaryfilter_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.initialize(ss["tzabaryfilter_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_9 = function() {
	this.initialize(ss["tzabaryfilter_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.water = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_46();
	this.instance.setTransform(-23.2,-26.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_47();
	this.instance_1.setTransform(-23.2,-26.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-26.5,43.5,53);


(lib.mountain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_44();
	this.instance.setTransform(-34.65,-18.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_45();
	this.instance_1.setTransform(-34.65,-18.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-18.2,69.5,36.5);


(lib.flower = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_42();
	this.instance.setTransform(-24.45,-24,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_43();
	this.instance_1.setTransform(-24.45,-24,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-24,49,48);


(lib.txtYakum = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// שמורת_יקום
	this.text = new cjs.Text("שמורת יקום", "20px 'Rubik Medium'");
	this.text.lineHeight = 30;
	this.text.parent = this;
	this.text.setTransform(-50.4,-21.45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("Am1DUQhYABg+g/Qg/g+ABhYQgBhXA/g+QA+g/BYABINrAAQBYgBA/A/QA9A+AABXQAABYg9A+Qg/A/hYgBg");
	this.shape.setTransform(0,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AhgASIg1hSQgDgIgPgLIgNgIIECADQDVAGjiAMQgrACgYAdQgeAjgFAzQgCAaADATIgBAAQgJAAgyhKg");
	this.shape_1.setTransform(0.0798,20.2818);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtYakum, new cjs.Rectangle(-65,-29.4,130.1,58.9), null);


(lib.txtTurmus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// תל_שוכה
	this.text = new cjs.Text("תל שוכה", "20px 'Rubik Medium'");
	this.text.lineHeight = 30;
	this.text.parent = this;
	this.text.setTransform(-37,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("Ak5DVQhYAAg+g/Qg+g+AAhYQAAhXA+g+QA+g/BYAAIJzAAQBYAAA+A/QA+A+AABXQAABYg+A+Qg+A/hYAAg");
	this.shape.setTransform(0.025,-8.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AhgASIg1hSQgDgIgPgLIgNgIIECADQDVAGjiAMQgsACgXAdQgeAjgFAyQgCAaADATIgBABQgJAAgyhKg");
	this.shape_1.setTransform(0.0857,20.3068);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtTurmus, new cjs.Rectangle(-52.6,-29.4,105.30000000000001,58.9), null);


(lib.txtSnid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// דיר_סניד
	this.text = new cjs.Text("דיר סניד", "20px 'Rubik Medium'");
	this.text.lineHeight = 30;
	this.text.parent = this;
	this.text.setTransform(-35.05,-21.45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("AkgDUQhYAAg/g9Qg+g/AAhYQAAhXA+g/QA/g+BYAAIJBAAQBYAAA/A+QA+A/AABXQAABYg+A/Qg/A9hYAAg");
	this.shape.setTransform(0.025,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AhgASIg1hSQgDgIgPgLIgNgIIECADQDVAGjiAMQgrABgYAeQgeAigFAzQgCAaADATIgBABQgJAAgyhKg");
	this.shape_1.setTransform(0.0857,20.3068);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtSnid, new cjs.Rectangle(-50.1,-29.4,100.30000000000001,58.9), null);


(lib.txtShofet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// נחל_השופט
	this.text = new cjs.Text("נחל השופט", "20px 'Rubik Medium'");
	this.text.lineHeight = 30;
	this.text.parent = this;
	this.text.setTransform(-47.65,-21.45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("AmaDUQhYAAg+g+Qg/g+AAhYQAAhXA/g+QA+g/BYAAIM1AAQBYAAA/A/QA+A+AABXQAABYg+A+Qg/A+hYAAg");
	this.shape.setTransform(0.025,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AhgASIg1hSQgDgIgPgLIgNgIIECADQDVAGjiAMQgrACgZAdQgdAjgFAzQgCAaADATIgBAAQgJAAgyhKg");
	this.shape_1.setTransform(0.1298,20.2818);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtShofet, new cjs.Rectangle(-62.3,-29.4,124.69999999999999,58.9), null);


(lib.txtRamon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// מכתש_רמון
	this.text = new cjs.Text("מכתש רמון", "20px 'Rubik Medium'");
	this.text.lineHeight = 30;
	this.text.parent = this;
	this.text.setTransform(-46.85,-21.45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("Am1DVQhYAAg+g/Qg/g+AAhYQAAhXA/g/QA+g+BYAAINrAAQBYAAA/A+QA+A/AABXQAABYg+A+Qg/A/hYAAg");
	this.shape.setTransform(0.025,-8.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AhgASIg1hSQgDgIgPgLIgNgIIECADQDVAGjiAMQgrABgYAeQgeAjgFAyQgCAaADATIgBABQgJAAgyhKg");
	this.shape_1.setTransform(0.0857,20.3068);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtRamon, new cjs.Rectangle(-65,-29.4,130.1,58.9), null);


(lib.txtMeshushim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// נחל_משושים
	this.text = new cjs.Text("נחל משושים", "20px 'Rubik Medium'");
	this.text.lineHeight = 30;
	this.text.parent = this;
	this.text.setTransform(-48.9,-21.45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("Am1DVQhYAAg/g/Qg+g+AAhYQAAhXA+g+QA/g/BYAAINrAAQBYAAA+A/QA/A+AABXQAABYg/A+Qg+A/hYAAg");
	this.shape.setTransform(0.025,-8.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AhgASIg1hSQgDgIgPgLIgNgIIECADQDVAGjiAMQgsACgXAdQgeAjgFAyQgCAaADATIgBABQgJAAgyhKg");
	this.shape_1.setTransform(0.0857,20.3068);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtMeshushim, new cjs.Rectangle(-65,-29.4,130.1,58.9), null);


(lib.txtMasada = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// מצדה
	this.text = new cjs.Text("מצדה", "20px 'Rubik Medium'");
	this.text.lineHeight = 30;
	this.text.parent = this;
	this.text.setTransform(-24.45,-21.45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("AikDUQhZAAg+g+Qg+g+AAhYQAAhXA+g+QA+g/BZAAIFJAAQBZAAA+A/QA+A+AABXQAABYg+A+Qg+A+hZAAg");
	this.shape.setTransform(0,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AhgASIg1hSQgDgIgPgLIgNgIIECADQDVAGjiAMQgrACgYAeQgeAigFAzQgCAaADATIgBAAQgJAAgyhKg");
	this.shape_1.setTransform(5.0798,20.2818);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtMasada, new cjs.Rectangle(-37.8,-29.4,75.6,58.9), null);


(lib.txtDan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// נחל_דן
	this.text = new cjs.Text("נחל דן", "20px 'Rubik Medium'");
	this.text.lineHeight = 30;
	this.text.parent = this;
	this.text.setTransform(-26.45,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("AjtDVQhYAAg+g/Qg+g+AAhYQAAhXA+g+QA+g/BYAAIHbAAQBYAAA+A/QA+A+AABXQAABYg+A+Qg+A/hYAAg");
	this.shape.setTransform(0.025,-8.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AhgASIg1hSQgDgIgPgLIgNgIIEBADQDWAGjiAMQgrACgZAdQgdAjgFAyQgCAaADATIgBABQgJAAgyhKg");
	this.shape_1.setTransform(3.9607,20.3108);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtDan, new cjs.Rectangle(-45,-29.4,90.1,58.9), null);


(lib.txtAkev = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// עין_עקב
	this.text = new cjs.Text("עין עקב", "20px 'Rubik Medium'");
	this.text.lineHeight = 30;
	this.text.parent = this;
	this.text.setTransform(-32.7,-21.45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("AkeDUQhYABg+g/Qg+g+AAhYQAAhXA+g+QA+g/BYABII9AAQBYgBA+A/QA+A+AABXQAABYg+A+Qg+A/hYgBg");
	this.shape.setTransform(0.025,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AhgASIg1hSQgDgIgPgLIgNgIIECADQDVAGjiAMQgrABgYAeQgeAigFAzQgCAaADATIgBABQgJAAgyhKg");
	this.shape_1.setTransform(0.0857,20.3068);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtAkev, new cjs.Rectangle(-49.9,-29.4,99.9,58.9), null);


(lib._short = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,1).p("AB5CtQgBgbgCgKQgEgdgPgUQgNgSgfgZQgagVgBgUQAAgJAGgKQAGgKAPgNQAIgHAQgNQAagXAJgcQAFgPACgWQAAgEAAgVAh4CtQABgaABgLQAFgdAPgUQAMgRAfgaQAbgWABgTQAAgIgGgLQgGgKgPgNQgRgNgHgHQgagXgKgcQgFgPgBgWQAAgEAAgV");
	this.shape.setTransform(0.225,0.0382);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7B299").s().p("AhBCVIA9gkQABiAABgRQABgMgSgOIgngeQgRgOgKgYIgGgVIC3AAIgFAVQgLAYgRAOQgcAUgLAKQgSAOABAMQABARABCAIA9Akg");
	this.shape_1.setTransform(0.05,1.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiWD6QgNAAgJgJQgJgJAAgNQAAgJAFgIQAFgHAIgEQADgIAIgFQAHgFAJAAIASAAIDxAAIAOAAQAUAAAHASQASAIAAAUQAAANgJAJQgJAJgNAAgAiODDQgDADAAAEQAAACgFAEQgFAAgDADQgDADAAAFQAAAFADADQADADAFAAIEtAAQAFAAADgDQADgDAAgFQAAgFgDgDQgDgDgFAAQgFgEAAgCQAAgEgCgDQgDgCgEAAIkRAAQgEAAgCACgAhlCqIBXg0IACiMQAAgJgggXIgUgPQgTgQgLgaIgHgYIgCgLIDPAAIgCALQAAAIgHAQQgKAagUAQIgUAPQggAYAAAIQACAfAABtIBYA0gAhVhzQAKAYARAOIAnAeQASAOgBAMQgBARgBCAIg9AkICDAAIg9gkQAAiAgCgRQAAgMARgOQALgJAcgVQASgOAKgYIAGgVIi4AAgAB7isIjxAAIgSAAQgJAAgHgFQgIgFgDgIQgSgIAAgUQAAgNAJgJQAJgJANAAIEtAAQANAAAJAJQAJAJAAANQAAAJgFAIQgFAHgIAEQgHASgUAAgAiejiQgDADAAAFQAAAFADADQADADAFAAIADACQAAABABAAQAAABABABQAAAAAAAAQAAABAAAAQAAAEADADQACACAEAAIERAAQAEAAADgCQACgDAAgEQAAAAAAgBQABAAAAAAQAAgBABgBQAAAAABgBIACgCQAFAAADgDQADgDAAgFQAAgFgDgDQgDgDgFAAIktAAQgFAAgDADg");
	this.shape_2.setTransform(0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#754C24").s().p("AiWDmQgFAAgDgDQgDgDAAgFQAAgFADgDQADgDAFAAQAFgEAAgCQAAgEADgDQACgCAEAAIERAAQAEAAADACQACADAAAEQAAACAFAEQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAgAiIjAQgEAAgCgCQgDgDAAgEQAAAAAAgBQAAAAAAAAQgBgBAAgBQgBAAAAgBIgDgCQgFAAgDgDQgDgDAAgFQAAgFADgDQADgDAFAAIEtAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAIgCACQgBABAAAAQgBABAAABQAAAAgBAAQAAABAAAAQAAAEgCADQgDACgEAAg");
	this.shape_3.setTransform(0.025,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiWDmQgFAAgDgDQgDgDAAgFQAAgFADgDQADgDAFAAQAFgEAAgCQAAgEADgDQACgCAEAAIERAAQAEAAADACQACADAAAEQAAACAFAEQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAgAhBCgIA9gkQABiAABgRQABgMgSgOIgngeQgRgOgKgYIgGgVIC4AAIgGAVQgKAYgSAOQgcAVgLAJQgRAOAAAMQACARAACAIA9AkgAiIjAQgEAAgCgCQgDgDAAgEQAAAAAAgBQAAAAAAAAQgBgBAAgBQgBAAAAgBIgDgCQgFAAgDgDQgDgDAAgFQAAgFADgDQADgDAFAAIEtAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAIgCACQgBABAAAAQgBABAAABQAAAAgBAAQAAABAAAAQAAAEgCADQgDACgEAAg");
	this.shape_4.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape}]},1).wait(1));

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah5CyQgCgPACgVQAFgnAXgSQAbgVASgZQASgaAAgPQAAgMgagXIgqglQgOgPAAgoIABgZIACgMIABgIIDngDIgIBKIgMAQQgqAxgKAIQgKAHgOAcIAXApIAwAvIAIAMQAHALAHA+g");
	this.shape_5.setTransform(0.3125,-0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-25,36.5,50.1);


(lib.medtime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,1).p("AB5DBQAAgKAAgIQgBgagBgKQgFgdgPgVQgMgQgfgaQgbgWAAgUQAAgJAFgJQAGgLAPgMQAIgHAQgNQAagXAKgdQAFgPABgWQAAgOAAgKQAAgIAAgFAh4DBQAAgKAAgIQABgaABgKQAFgdAPgVQALgPAggbQAbgWAAgUQAAgJgFgJQgGgLgPgMQgRgNgHgHQgagXgKgdQgFgPgBgWQAAgOAAgKQAAgIAAgF");
	this.shape.setTransform(0,-0.2188);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7B299").s().p("AhXB8QAAgNAEgPQACgNAGgHQAFgHALgFIA5gWQABhPgBgLQgBgMgMgOQgLgNgNgHQgQgJgJgLIgGgJICNAAQgFAPgbAOQgNAIgKAMQgMAPgBALIAABaIA5AWQAKAFAHAHQAEAHADANQAEASAAAKg");
	this.shape_1.setTransform(0.05,3.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiWD6QgNAAgJgJQgJgJAAgNQAAgUASgIQADgIAHgFQAIgFAJAAIAQAAIAAARIAAgRIDxAAIAAARIAAgRIAQAAQAUAAAHASQASAIAAAUQAAANgJAJQgJAJgNAAgAiODDQgDADAAAEQAAACgFAEQgLAAAAALQAAAFADADQADADAFAAIEtAAQAEAAAEgDQADgDAAgFQAAgFgDgDQgEgDgEAAQgFgEAAgCQAAgEgDgDQgCgCgEAAIkRAAQgDAAgDACgAh4CtgAhgCpIAAgKQgBgLAEgTQAEgPAFgJQAIgKAOgGIAygTQAChAgCgTQAAgIgKgMQgKgLgLgGQgSgKgLgNQgFgIgBgFIgFgNICoAAIgFANQgBAFgFAIQgLANgSAKQgLAGgKALQgKAMAAAIIAABTIAyATQAOAGAIAKQAFAJADAPQAEASAAAMIAAAKgAhAhPQAKALAPAJQANAHAMANQALAOABAMQABALgBBPIg4AWQgLAEgGAIQgFAGgDAOQgEAPABANICuAAQABgKgEgSQgDgOgFgGQgGgIgLgEIg4gWIAAhaQAAgMAMgOQALgNANgHQAagPAFgPIiMAAgAB5isIAAgMIAAAMIjxAAIAAgMIAAAMIgQAAQgJAAgIgFQgHgFgDgIQgSgIAAgUQAAgNAJgJQAJgJANAAIEtAAQANAAAJAJQAJAJAAANQAAAUgSAIQgHASgUAAgAiejiQgDADAAAFQAAALALAAIACACQABABABAAQAAABAAABQABAAAAAAQAAABAAAAQAAAEADADQADACADAAIERAAQAEAAACgCQADgDAAgEQAAAAAAgBQAAAAABAAQAAgBAAgBQABAAAAgBIADgCQAEAAAEgDQADgDAAgFQAAgFgDgDQgEgDgEAAIktAAQgFAAgDADg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#754C24").s().p("AiWDmQgFAAgDgDQgDgDAAgFQAAgLALAAQAFgEAAgCQAAgEADgDQADgCADAAIERAAQAEAAACACQADADAAAEQAAACAFAEQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAgAiIjAQgDAAgDgCQgDgDAAgEQAAAAAAgBQAAAAgBAAQAAgBAAgBQgBAAgBgBIgCgCQgLAAAAgLQAAgFADgDQADgDAFAAIEtAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAIgDACQAAABgBAAQAAABAAABQgBAAAAAAQAAABAAAAQAAAEgDADQgCACgEAAg");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiWDmQgFAAgDgDQgDgDAAgFQAAgLALAAQAFgEAAgCQAAgEADgDQADgCADAAIERAAQAEAAACACQADADAAAEQAAACAFAEQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAgAhWCfQgBgNAEgPQADgOAFgGQAGgIALgEIA4gWQABhPgBgLQgBgMgLgOQgMgNgNgHQgPgJgKgLIgFgKICMAAQgFAPgaAPQgNAHgLANQgMAOAAAMIAABaIA4AWQALAEAGAIQAFAGADAOQAEASgBAKgAiIjAQgDAAgDgCQgDgDAAgEQAAAAAAgBQAAAAgBAAQAAgBAAgBQgBAAgBgBIgCgCQgLAAAAgLQAAgFADgDQADgDAFAAIEtAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAIgDACQAAABgBAAQAAABAAABQgBAAAAAAQAAABAAAAQAAAEgDADQgCACgEAAg");
	this.shape_4.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah5CyQgCgPACgVQAFgnAXgSQAbgVASgZQASgaAAgPQAAgMgagXIgqglQgOgPAAgoIABgZIACgMIABgIIDngDIgIBKIgMAQQgqAxgKAIQgKAHgOAcIAXApIAwAvIAIAMQAHALAHA+g");
	this.shape_5.setTransform(0.5125,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-25,36.4,50.1);


(lib._long = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,1).p("AB5DBQAAgKAAgIQgBgagBgKQgFgdgPgVQgLgPgggbQgbgWAAgUQAAgJAFgJQAGgLAPgMQARgNAHgHQAagXAKgdQAFgPABgWQAAgOAAgKQAAgIAAgFAh4DBQAAgKAAgIQABgaABgKQAFgdAPgVQAMgQAfgaQAbgWAAgUQAAgJgFgJQgGgLgPgMQgRgNgHgHQgagXgKgdQgFgPgBgWQAAgOAAgKQAAgIAAgF");
	this.shape.setTransform(0,-0.2188);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7B299").s().p("AhTBtQgCgHABgLQADgVANgRQAIgKAdgYIAcgVIAAhHQAAgKgLgOIgMgLIA1AAIgMALQgMAOAAAKIAABHIAcAVQAeAYAIAKQANARACAVQACALgCAHg");
	this.shape_1.setTransform(0.0175,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiWD6QgNAAgJgJQgJgJAAgNQAAgJAFgIQAFgHAIgEQAHgSAUAAIAQAAIAAARIAAgRIDxAAIAAARIAAgRIAQAAQAJAAAHAFQAIAFADAIQASAIAAAUQAAANgJAJQgJAJgNAAgAiPDDQgCADAAAEQAAACgFAEQgFAAgDADQgDADAAAFQAAAFADADQADADAFAAIEtAAQAFAAADgDQADgDAAgFQAAgFgDgDQgDgDgFAAQgFgEAAgCQAAgEgDgDQgCgCgEAAIkRAAQgEAAgDACgAh4CtgAhcCrIgBgIQgCgHABgPQADgYAPgTQAJgLA2gsIAAhAQAAgFgHgJQgGgIgHgGIgWgRIBvAAIgXARQgHAGgGAIQgHAJAAAFIAABAQA2AsAJALQAPATADAYQACAPgCAHIgCAIgAgOgtQALAOAAAKIAABFIgcAXQgdAYgIAKQgNARgDAVQgBALACAHICnAAQACgHgCgLQgCgVgNgRQgIgKgegYIgcgXIAAhFQAAgKAMgOIAMgLIg1AAgAB5isIAAgMIAAAMIjxAAIAAgMIAAAMIgQAAQgUAAgHgSQgSgIAAgUQAAgNAJgJQAJgJANAAIEtAAQANAAAJAJQAJAJAAANQAAAUgSAIQgDAIgIAFQgHAFgJAAgAiejiQgDADAAAFQAAAFADADQADADAFAAIACACQABABAAAAQABABAAABQAAAAABAAQAAABAAAAQAAAEACADQADACAEAAIERAAQAEAAACgCQADgDAAgEQAAAAAAgBQAAAAAAAAQABgBAAgBQABAAAAgBIADgCQAFAAADgDQADgDAAgFQAAgFgDgDQgDgDgFAAIktAAQgFAAgDADg");
	this.shape_2.setTransform(0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#754C24").s().p("AiWDmQgFAAgDgDQgDgDAAgFQAAgFADgDQADgDAFAAQAFgEAAgCQAAgEACgDQADgCAEAAIERAAQAEAAACACQADADAAAEQAAACAFAEQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAgAiIjAQgEAAgDgCQgCgDAAgEQAAAAAAgBQgBAAAAAAQAAgBgBgBQAAAAgBgBIgCgCQgFAAgDgDQgDgDAAgFQAAgFADgDQADgDAFAAIEtAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAIgDACQAAABgBAAQAAABgBABQAAAAAAAAQAAABAAAAQAAAEgDADQgCACgEAAg");
	this.shape_3.setTransform(0.025,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiWDmQgFAAgDgDQgDgDAAgFQAAgFADgDQADgDAFAAQAFgEAAgCQAAgEACgDQADgCAEAAIERAAQAEAAACACQADADAAAEQAAACAFAEQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAgAhTChQgCgHABgLQADgVANgRQAIgKAdgYIAcgXIAAhFQAAgKgLgOIgMgLIA1AAIgMALQgMAOAAAKIAABFIAcAXQAeAYAIAKQANARACAVQACALgCAHgAiIjAQgEAAgDgCQgCgDAAgEQAAAAAAgBQgBAAAAAAQAAgBgBgBQAAAAgBgBIgCgCQgFAAgDgDQgDgDAAgFQAAgFADgDQADgDAFAAIEtAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAIgDACQAAABgBAAQAAABgBABQAAAAAAAAQAAABAAAAQAAAEgDADQgCACgEAAg");
	this.shape_4.setTransform(0.025,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiWD6QgNAAgJgJQgJgJAAgNQAAgJAFgIQAFgHAIgEQAHgSAUAAIAGAAIAAgBQABgaABgLQAFggARgWQANgRAggcIAAAAQAWgSABgPQAAgHgEgHQgFgJgNgLIgZgUIAAgBQgbgYgLgfQgGgQgBgYIAAAAIAAgZIgGAAQgUAAgHgSQgSgIAAgUQAAgNAJgJQAJgJANAAIEtAAQANAAAJAJQAJAJAAANQAAAUgSAIQgDAIgIAFQgHAFgJAAIgGAAIgBAZIAAAAQgBAYgFAQQgLAfgbAYIgBABIgZAUQgMALgFAJQgFAHAAAHQABAPAWASIABAAQAiAdALAQQAQAWAFAgQACALABAaIAAABIAGAAQAJAAAHAFQAIAFADAIQASAIAAAUQAAANgJAJQgJAJgNAAgAiPDDQgCADAAAEQAAACgFAEQgFAAgDADQgDADAAAFQAAAFADADQADADAFAAIEtAAQAFAAADgDQADgDAAgFQAAgFgDgDQgDgDgFAAQgFgEAAgCQAAgEgDgDQgCgCgEAAIkRAAQgEAAgDACgAhuiUQABAVAFAOQAJAaAXAVIAAAAIAYATIABABQAQAOAGALQAHAMAAAMQABAXgfAaIAAAAQgeAZgMAQQgOASgEAbQgBAKgBAZIDdAAIgDgjQgEgbgNgSIgBAAQgKgPgfgaIAAAAQgggaABgXQAAgMAHgMQAHgLAQgOIAAgBIAYgTIAAAAQAYgVAJgaQAEgOABgVIABgYIjdAAIAAAYgAiejiQgDADAAAFQAAAFADADQADADAFAAIACACQABABAAAAQABABAAABQAAAAABAAQAAABAAAAQAAAEACADQADACAEAAIERAAQAEAAACgCQADgDAAgEQAAAAAAgBQAAAAAAAAQABgBAAgBQABAAAAgBIADgCQAFAAADgDQADgDAAgFQAAgFgDgDQgDgDgFAAIktAAQgFAAgDADgAhcCrIgBgIQgCgHABgPQADgYAPgTQAJgLA2gsIAAhAQAAgFgHgJQgGgIgHgGIgWgRIBvAAIgXARQgHAGgGAIQgHAJAAAFIAABAQA2AsAJALQAPATADAYQACAPgCAHIgCAIgAgOgtQALAOAAAKIAABFIgcAXQgdAYgIAKQgNARgDAVQgBALACAHICnAAQACgHgCgLQgCgVgNgRQgIgKgegYIgcgXIAAhFQAAgKAMgOIAMgLIg1AAg");
	this.shape_5.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah5CyQgCgPACgVQAFgnAXgSQAbgVASgZQASgaAAgPQAAgMgagXIgqglQgOgPAAgoIABgZIACgMIABgIIDngDIgIBKIgMAQQgqAxgKAIQgKAHgOAcIAXApIAwAvIAIAMQAHALAHA+g");
	this.shape_6.setTransform(0.5125,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-25,36.5,50.1);


(lib.X = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_40();
	this.instance.setTransform(-7,-7,0.219,0.219);

	this.instance_1 = new lib.CachedBmp_41();
	this.instance_1.setTransform(-7,-7,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,14,14);


(lib.odotbutt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_39();
	this.instance.setTransform(-8.05,-23.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#005921").ss(6,1,1).p("AEIAAQAABnhGBLQgEAEgEAEQhNBNhtAAQhsAAhOhNQgEgEgEgEQhFhLAAhnQAAhsBNhOQAcgbAfgSQA6ggBFAAQBGAAA5AgQAgASAbAbQBOBOAABsg");
	this.shape.setTransform(0.014,0.0257,0.8839,0.8839);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai5C6IgJgIQhFhLAAhnQAAhsBOhOQAbgbAfgSQA6gfBFAAQBGAAA5AfQAgASAbAbQBOBOAABsQAABnhGBLIgIAIQhNBNhtAAQhsAAhNhNg");
	this.shape_1.setTransform(0.014,0.0257,0.8839,0.8839);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0DFCE").s().p("Ai5C6IgJgIQhFhLAAhnQAAhsBOhOQAbgbAfgSQA6gfBFAAQBGAAA5AfQAgASAbAbQBOBOAABsQAABnhGBLIgIAIQhNBNhtAAQhsAAhNhNg");
	this.shape_2.setTransform(0.014,0.0257,0.8839,0.8839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-26.2,52.6,57.5);


(lib.mapnav = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTCGQgJgGgKgKIgYgWQgagbgQgdQgKgQgFgQIgDgRQgCgIAAgJQAAgmAWgeQAGgLAJgHQAagaAkgHQALgDAOAAQAPAAAKADQAkAHAbAaQAJAIAGAKQAHAKAEAKQALAXgBAZQABAJgCAIIgEAQQgEAPgKASQgRAegaAaIgXAWQgKAKgKAGIgTAOIAAABgAgUh+QgfAGgWAWQgIAIgFAHQgRAZAAAgIABAOIADAOQAEAPAIANQAQAcAYAYIAvAqIAHgFIApglQAXgXAQgdQAJgPAEgNQACgHABgHIACgOQAAgUgJgUQgEgJgFgIQgFgHgIgIQgWgVgfgHQgKgCgLAAQgLAAgJACgAAAAhQgXAAgRgRQgSgQgBgZQAAgZARgSQARgSAZgBIAUAAIAAAEQASAGAMAPQALAQAAATQAAAZgRARQgRASgZAAgAgcg2QgMAMABARQAAAQAMALQAMALAPAAIABAAQARAAAMgMQAMgLAAgQQgBgRgMgMQgMgMgRAAIAAAAQgQABgMAMg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTCGQgJgGgLgKIgWgWQgbgbgQgdQgJgQgGgQIgDgRQgBgIAAgJQgBgmAVgeQAIgLAIgHQAagaAlgHQAYgGAZAGQAkAHAbAaQAIAIAHAKQAHAKAEAKQAKAXAAAZQAAAJgBAIIgEAQQgFAPgJASQgRAegaAaIgXAWQgKAKgKAGIgTAOIAAABgAgcg2QgMAMABARQABARALAKQANAMAQgBQAQAAAMgMQALgLAAgQQAAgRgMgMQgMgMgRAAQgQABgMAMg");
	this.shape_1.setTransform(0,0.0125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005921").s().p("AgTCGQgJgGgKgKIgYgWQgagbgQgdQgKgQgFgQIgDgRQgCgIAAgJQAAgmAWgeQAGgLAJgHQAagaAkgHQALgDAOAAQAPAAAKADQAkAHAbAaQAJAIAGAKQAHAKAEAKQALAXgBAZQABAJgCAIIgEAQQgEAPgKASQgRAegaAaIgXAWQgKAKgKAGIgTAOIAAABgAgUh+QgfAGgWAWQgIAIgFAHQgRAZAAAgIABAOIADAOQAEAPAIANQAQAcAYAYIAvAqIAHgFIApglQAXgXAQgdQAJgPAEgNQACgHABgHIACgOQAAgUgJgUQgEgJgFgIQgFgHgIgIQgWgVgfgHQgKgCgLAAQgLAAgJACgAAAAhQgXAAgRgRQgSgQgBgZQAAgZARgSQARgSAZgBIAUAAIAAAEQASAGAMAPQALAQAAATQAAAZgRARQgRASgZAAgAgcg2QgMAMABARQAAAQAMALQAMALAPAAIABAAQARAAAMgMQAMgLAAgQQgBgRgMgMQgMgMgRAAIAAAAQgQABgMAMg");
	this.shape_2.setTransform(-0.0178,-0.0096,1.0838,1.0838);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AED8A4").s().p("AgTCGQgJgGgKgKIgYgWQgagbgQgdQgKgQgFgQIgDgRQgCgIAAgJQAAgmAWgeQAGgLAJgHQAagaAkgHQAZgGAZAGQAkAHAbAaQAJAIAGAKQAHAKAEAKQALAXgBAZQABAJgCAIIgEAQQgEAPgKASQgRAegaAaIgXAWQgKAKgKAGIgTAOIAAABgAgcg2QgMAMABARQAAARAMAKQANAMAPgBQARAAAMgMQAMgLAAgQQgBgRgMgMQgMgMgRAAQgQABgMAMg");
	this.shape_3.setTransform(0.0057,-0.0052,1.0838,1.0838);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-16.1,27,32.3);


(lib.medium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_35();
	this.instance.setTransform(-22.7,-24.55,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_36();
	this.instance_1.setTransform(-22.7,-24.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-24.5,45.5,49);


(lib.hard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(-22.75,-25.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_34();
	this.instance_1.setTransform(-22.75,-25.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-25.8,45.5,52);


(lib.easy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(-22.3,-24.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_32();
	this.instance_1.setTransform(-22.3,-24.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.3,-24.8,44.5,50);


(lib.linktelem = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.linkTELEM = new cjs.Text("הפקולטה לטכנולוגיות למידה", "20px 'Rubik Light'", "#1E828A");
	this.linkTELEM.name = "linkTELEM";
	this.linkTELEM.textAlign = "center";
	this.linkTELEM.lineHeight = 29;
	this.linkTELEM.lineWidth = 238;
	this.linkTELEM.parent = this;
	this.linkTELEM.setTransform(5.35,-12.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D7D85").ss(1,1,1).p("Ay6iQMAl1AAAIAAEhMgl1AAAg");
	this.shape.setTransform(5.375,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E828A").s().p("Ay6CRIAAkhMAl1AAAIAAEhg");
	this.shape_1.setTransform(5.375,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.linkTELEM}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.linkTELEM}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.7,-15.5,244.2,31.1);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoyGNIAAsZIRlAAIAAMZg");
	mask.setTransform(56.275,39.725);

	// Layer_3
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(0,0,0.323,0.323);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,110.8,79.5), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgUCFQg3gIghguQgggtAIg2QAIgxAmggQAlggAxAAQAMAAAJACQA3AIAhAtQAgAtgIA2QgJA3gtAhQgjAZgqAAQgKAAgMgBg");
	mask.setTransform(14.025,13.9381);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUCCQg2gJgggsQgggtAJg0QACgOAFgMQgEAMgDANQgIA0AfAsQAfAsA1AIIACABIAAgBQA1AJAsggQArggAJg1QAIg1gggrQgggsg1gIIgJgBIAKABQA2AIAgAtQAgAsgJA0QgIAwglAgQgkAfgxAAg");
	this.shape.setTransform(14.0596,14.1125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhiBjQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5QAAALgBAKQgIAzgoAjQgnAhg0AAQg5AAgpgpgAhhhhQgpAoAAA5QAAA5ApApQApAoA5AAQA5ABApgpQApgpAAg5QAAgzgignQghgmgzgJIgWgBQg4AAgpApg");
	this.shape_1.setTransform(14.025,13.9997);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(0.6,0.5,26.9,26.9), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0lMRIAA4hMApMAAAIAAYhg");
	mask.setTransform(131.9,78.5);

	// Layer_2
	this.instance = new lib.Image_9();
	this.instance.setTransform(263.85,0.05,0.1363,0.1363,90);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.1,0.1,263.7,156.9), null);


(lib.cancel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// לוטיב
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(-41.2,-16.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_26();
	this.instance_1.setTransform(-38.4,-13.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0DFCE").s().p("AozCiQhDgBgwgvQgvgvAAhDQAAhCAvgvQAwgvBDAAIRnAAQBDAAAwAvQAvAvAABCQAABDgvAvQgwAvhDABg");
	this.shape.setTransform(-3.632,-3.1,0.8347,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#98AD90").s().p("AozCiQhDgBgwgvQgvgvAAhDQAAhCAvgvQAwgvBDAAIRnAAQBDAAAwAvQAvAvAABCQAABDgvAvQgwAvhDABg");
	this.shape_1.setTransform(-0.832,0.5,0.8347,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D4DFCF").s().p("AozCiQhDgBgwgvQgvgvAAhDQAAhCAvgvQAwgvBDAAIRnAAQBDAAAwAvQAvAvAABCQAABDgvAvQgwAvhDABg");
	this.shape_2.setTransform(-0.832,0.1,0.8347,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.2,-19.2,124,35.9);


(lib.X_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.CachedBmp_23();
	this.instance_2.setTransform(-7.05,-7.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_24();
	this.instance_3.setTransform(-7.05,-7.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,14,14);


(lib.south = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAADoQgGgFgBgHIgDgKQgFgLAEgKQgGgJAAgSQgdhYgNgkQgSgQADgQQgGgGAAgSIAAgFQgBgJgQggIgBgBQgCgFgLgeQgLgggEgQQgDgPgDgDQgFgGAAgHQgBgKAIgHQAMgJASgXQAGgIAKAAIDLAAQAIAAAGAGQAGAGAAAIIgBAQQAAAMgLAUIgCAEQAIAMACALQACAQgKAOQABAIAAAEQgCANgNAIIgCADIABACQAAAMgGAGIgDADQgBAOgGAIQABAMgKAFIgGAaIgCADQALAUgLAMIgCAGIAFAXQABAJgLAQIgIANQgBADABAFQABANgDAIIgDAJQAAAGgDAGIgCAJIAAABQAEANgGAKIgEAGQgEACgBAEQgDAKgIAEIgBACQgJALgKAAQgIAAgEgFgAh1i0IADAEQAEAIADAPQAGAYAVA3IAKAVQAJAVABAIQAAASADABQACABABADQABAEgBAGQgBAFAGAFIAHAIIAsCEIAAAJQABAIABACIAEAHQABAGgBADQgCAEABAEIAFAPIAFgFIAGgGIAAAAIACgGQADgHAHgFQABgCgCgHQgCgHAGgOIABgHQABgFADgKQACgDgBgIQAAgKABgEQABgFAIgNQAIgMAAgBQgFgXAAgEIACgIQABgHAEgDQACgCgIgOQgBgCACgEIADgGIAFgZQABgEADgEIAEgEIABAAIAAgEQABgEABgCQAFgGABgLQAAgHAEgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAAgIQAAgDADgGIADgGQAJgEABgGIgCgGQgBgEAAgDIAHgKQAEgGgBgHQgBgHgGgIQgGgIABgEIAJgRQAGgMAAgGIABgQIjLAAQgUAZgNALg");
	this.shape.setTransform(-0.0015,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D48D74").s().p("AAMDZIgFgPQgBgEABgEQACgDgCgGIgDgHQgCgCAAgIIAAgJIgsiEIgHgIQgHgFABgFQACgGgBgEQgBgDgDgBQgCgBAAgSQgBgIgJgVIgLgVQgUg3gGgYQgDgPgEgIIgEgEQAOgLAUgZIDLAAIgBAQQAAAGgGAMIgJARQgCAEAGAIQAHAIABAHQABAHgEAGIgHAKQAAADABAEIABAGQgBAGgJAEIgDAGQgCAGAAADIAAAIQgBAAAAAAQgBAAAAABQgBAAgBAAQAAABgBAAQgDADAAAHQgBALgFAGQgCACAAAEIAAAEQgBgBgEAEQgDAEgBAFIgGAZIgDAGQgCAEACACQAIAOgCACQgEADgBAHIgCAIQgBAEAGAXQAAABgIAMQgIANgCAFQgBAEABAKQABAIgCADQgEAKAAAFIgBAHQgGAOACAHQABAHgBACQgGAGgDAHIgCAFQgBgBgGAHIgEAFIAAAAg");
	this.shape_1.setTransform(0,0.0321);

	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(-13.85,-23.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-23.7,27.700000000000003,47.5);


(lib.north = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai9DHQgKAAgGgIQgGgJADgJIABgEIAHgfIAHgfIAAgFQACgTAEgHIADgUIACgVQACgIAFgFQAHgJAMAAQAIAAAGAEIAEgMIAAgBQgEgEAAgGQgCgHARhDQACgHAFgEQAGgEAHAAIAEAAIAKADIAHgBIAHABQAFgDAGAAQAFAAAEACIAHgBIANgCQANAAALAPIACAFIABAAIAIgDIABAAIACgDQAFgJAPAAIACAAIADgFIAAgCIABgCIACgKIACgHQgCgPAEgIQABgIAFgFIABgEQACgKAHgFQAGgEAGAAQALAAAGAIQAEgCAFAAIAAAAIAJgFIAAgBQAHgQASAAIABAAQAIgFAMgBIABAAQAMAAAIAJQAHAJABAMQAKAFAFAQIAAACIACAFQAEAGABAEIABAHQAFADADAGQAGALgGARIgBABQgDAJgIAGIAAACIACAOIABAHIAAABQAJAGAHAOQALAXgaANIgCABIgEAEIAAACIgBAFQgDAOgMAUQgEAHgHACIgUATQgKAMgNAEIgFAEQgIAKgOABIgDAFIgBABIgBACIgCADQABADAAAIIACALQAAAKgHAGIACAHQACAHgCAGQgCAHgFAEQgGAEgGAAgAihAjQgCACgCAXQgCAXgCADQgDADgBALIgBANQgMA8gCAEIgBACID6AAIAAgEIgEgGQgDgFABgCQACgDAAgEIAEgEIAEgDQgCgIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBIgCgDQgCgFAJgNQAEgFABgDIADgGQADgDACAAIABAAIAEABQAHAAACgDQAFgIAKgDQAIgDAHgHQAagaABAAIAAABIABgBQALgTACgIIABgIQABgFADgDIAEgEQACgCADgBIAIgFQAEgDgDgEQgFgKgFgDQgGgDgCgLQgBgOgCgEQgBgEABgIQABgIADgCQAGgCADgHQAGgNgKgDQgHgBABgFIABgIQgGgMgBgGIgCgHQgCgCgEgBQgIgDAAgEQABgEgBgHQgCgJgGAAIAAAAQgFABgGACIgIADIgDAAQgFAAgCAEQgBAEgDADQgEAEgCAAIgGAFQgEAFgCAAIAAgBIgFgCQgDAAgCAHQgCAIgDAAIgGgDQgEgEgCgJQAAgFgEAAIgBABIAAABQgEAOgCAAIgCAEIAAADQgDACACAKQABAFgDAIIgCAKQgCAOgEACQgCACgCAEQgBAFgCAAIgCAAIgLAAQgEAAgBABIgFAGQgDAEgDAAQgKAEgFAAIgBAAIgIgBQgDgCgEgFIgGgJQgCgDgDAAQgPADgGAAIgDAAIgFgCQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABQgCABgDAAQgEAAgEgCIgBAAQgEACgCAAIgPgEIgIAfQgIAgAAADIADAHQADAEgBAEQAAAJgHAMQgIAPgJAAIgCAAQgFgJgHAAQgDAAgCACg");
	this.shape.setTransform(0.0281,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7BBB89").s().p("Ai9CzIABgCQACgEAMg8IABgNQABgLADgDQACgDACgXQACgXACgCQADgDAFACQAFABAEAHQAJADAJgQQAIgOAAgJQABgEgDgEIgDgHQAAgDAIggIAIgfIANAEQACABADgCQABAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAGACQAFABACgCQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAFACQAFACATgFQADAAACADIAGAJQAEAFADACIAIABQAFABALgFQADAAADgEIAFgGQABgCAHABIAKAAQACAAABgFQACgEACgCQAEgCACgOIACgKQADgIgBgFQgCgKADgCIAAgDIACgEQACAAAEgOIAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQACAJAEAEQAEAEADgBQADgBABgHQACgGADgBIAFACQABABAFgFIAGgFQACAAAEgEQADgDABgEQACgFAIABIAHgCQAHgDAFgBQAGAAACAJQABAHgBAEQAAAEAIADQAEABACACIACAHQABAGAGAMIgBAIQgBAFAHABQAKADgGANQgDAHgGACQgDACgBAIQgBAIABAEQACAEABAOQACALAGADQAFADAFAKQADAEgEADIgIAFQgDABgCACIgEAEQgDADgBAFIgBAIQgCAIgLATIgBABIAAgBQgBgBgaAbQgHAHgIADQgKADgFAIQgCACgEABQgEAAgDgBQgCgBgEAEQgDADAAADQgBADgEAFQgJANACAFIACADQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAFACAIIgEADIgEAEQAAAEgCADQgBACADAFIAEAGIAAAEg");
	this.shape_1.setTransform(0.0271,0.0237);

	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(-21,-19.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-19.8,42.1,40);


(lib.center = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai+DOQgMAAgGgLQgGgLAIgKQAngxARgfIAYgxQANgeADgEIAFgKIAEgLQAGgVAEgGIADgHQACgGACgDIAAgCIAEgPIABgEQACgRAGgHIABgGIADgNIABgHQADgRAEgIIAGgYIAEgSQACgGAFgEQAGgEAGAAIDdAAQAJAAAFAGQAGAGAAAIIgBAHIgBADQABAFgCAHIgCAGIgCAKIAAACQACAHgCALIAAACIABAHIABACIABAUQAFAPgIAQIgBAHQAAAPgGAHQgBAFgDAGIAAABIABADIACADQACAGgCAIQAGAKgDAMQgBAGgEAGIACABQAGAGAAAKIgBAHIgBALQACAIAAAFQABANgNAaQgEAIgIAgIgCAeQAAAIgGAGQgGAFgIAAgAgpiLQgCADgDANQgCANgBABIgCALQgBAKgDACQgCACgCAKIgCAMQgCACgBAHIgCAIQgGASgDACQgCACgEAPIgGASQgEAJgDAFIgRAkQgQAjgGAKQgfAwgaAhIFaAAIACggIAFgUQAGgVADgFQALgVgBgHIgDgRQAEgIgEgCQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBIADgDQgEgBgDgEQgCgBAAgIQAAgHgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQAFgEABgFQABgFgDgFIgDgEQADgIgBgCQgFgKAAgEQAFgLAAgDIACgGIADgFIABgKQABgKABgCIADgJQABgGgBgDIgBgLIgBgKIgCgKIABgJQABgGgBgCQgCgFABgGIACgKIADgLQgBgEABgEIACgHIjdAAQgIApgDAFg");
	this.shape.setTransform(0.0087,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDDD8F").s().p("Ai+C6QAaghAfgwQAGgKAQgjIARgkQADgFAEgJIAGgSQAEgPACgCQADgCAGgSIACgIQABgHACgCIACgMQACgKACgCQADgCABgKIACgLQABgBACgNQADgNACgDQADgFAIgpIDdAAIgCAHQgBAEABAEIgDALIgCAKQgBAGACAFQABACgBAGIgBAJIACAKIABAKIABALQABADgBAGIgDAJQgBACgBAKIgBAKIgDAFIgCAGQAAADgFALQAAAEAFAKQABACgDAIIADAEQADAFgBAFQgBAFgFAEQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQABAAAAAHQAAAIACABQADAEAEABIgDADQAAABgBABQAAAAAAABQAAAAAAABQAAAAABAAQAEACgEAIIADARQABAHgLAVQgDAFgGAVIgFAUIgCAgg");
	this.shape_1.setTransform(0.025,0.025);

	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(-21.1,-20.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-20.6,42.5,41.5);


(lib.ticket_yakum = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image_
	this.instance = new lib.Image();
	this.instance.setTransform(-129.7,-158.75,0.1838,0.1838);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_8
	this.cancel = new lib.X();
	this.cancel.name = "cancel";
	this.cancel.setTransform(-135.15,-178.45);
	new cjs.ButtonHelper(this.cancel, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cancel).wait(1));

	// ליד_קיבוץ_יקום_ישנה_שמורת_טבע_הנקראת_שמורת_שער_פולג_או_בשם_הפופולארי_שמורת_יקום__בשמורה_זו_נמצאים_בסמיכות_גבוהה_תל_עתיק__אגם_המלא_בימים_גשומים__פריחה_מרהיבה__נוף_מרהיב_מרכס_הכורכר_ואפיק_נחל_פולג_המתחתר_במרץ_לעבר_הים__
	this.text = new cjs.Text("ליד קיבוץ יקום ישנה שמורת טבע הנקראת שמורת שער פולג או בשם הפופולארי שמורת יקום. בשמורה זו נמצאים בסמיכות גבוהה תל עתיק, אגם המלא בימים גשומים, פריחה מרהיבה, נוף מרהיב מרכס הכורכר ואפיק נחל פולג המתחתר במרץ לעבר הים. ", "14px 'Rubik Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 22;
	this.text.lineWidth = 234;
	this.text.parent = this;
	this.text.setTransform(108.2,37.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// שמורת_יקום
	this.text_1 = new cjs.Text("שמורת יקום", "normal 600 25px 'Rubik'");
	this.text_1.lineHeight = 41;
	this.text_1.parent = this;
	this.text_1.setTransform(-16.3,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("A0fdIQgyAAgjgjQgjgjAAgyMAAAg2fQAAgyAjgjQAjgjAyAAMAo/AAAQAyAAAjAjQAjAjAAAyMAAAA2fQAAAygjAjQgjAjgyAAg");
	this.shape.setTransform(-13.625,-9.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C9279").s().p("A0fdIQgyAAgjgjQgjgjAAgyMAAAg2fQAAgyAjgjQAjgjAyAAMAo/AAAQAyAAAjAjQAjAjAAAyMAAAA2fQAAAygjAjQgjAjgyAAg");
	this.shape_1.setTransform(13.625,9.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("EhjRAvtMAAAhfYMDGiAAAMAAABfYg");
	this.shape_2.setTransform(-355.9,10.1683,1,1.2207);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_yakum, new cjs.Rectangle(-991.2,-362.4,1270.7,745.2), null);


(lib.ticket_turmus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image_
	this.instance = new lib.Image_2();
	this.instance.setTransform(-132.35,-163.3,0.235,0.235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_8
	this.cancel = new lib.X();
	this.cancel.name = "cancel";
	this.cancel.setTransform(-135.15,-183.55);
	new cjs.ButtonHelper(this.cancel, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cancel).wait(1));

	// תל_שוכה_או_בשמה_העממי__גבעת_התורמוסים__היא_גבעה_בעמק_האלה_שבחודשים_פברואר_מרץ_פורחת_בגול__זהו_אתר_מרהיב_ומיוחד_במינו_בתקופה_של_סוף_החורף__תחילת_האביב__המקום_שוכן_בלב_ליבו_של_עמק_האלה__בקרבת_קיבוץ_נתיב_הל_ה___
	this.text = new cjs.Text("תל שוכה או בשמה העממי \"גבעת התורמוסים\" היא גבעה בעמק האלה שבחודשים פברואר מרץ פורחת בגול. זהו אתר מרהיב ומיוחד במינו בתקופה של סוף החורף -תחילת האביב. המקום שוכן בלב ליבו של עמק האלה. בקרבת קיבוץ נתיב הל\"ה. ", "14px 'Rubik Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 22;
	this.text.lineWidth = 234;
	this.text.parent = this;
	this.text.setTransform(103.6,23.05);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// תל_שוכה
	this.text_1 = new cjs.Text("תל שוכה", "25px 'Rubik SemiBold'");
	this.text_1.lineHeight = 42;
	this.text_1.parent = this;
	this.text_1.setTransform(11.65,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("A0fdIQgyAAgjgjQgjgjAAgyMAAAg2fQAAgyAjgjQAjgjAyAAMAo/AAAQAyAAAjAjQAjAjAAAyMAAAA2fQAAAygjAjQgjAjgyAAg");
	this.shape.setTransform(-13.625,-14.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C9279").s().p("A0fdIQgyAAgjgjQgjgjAAgyMAAAg2fQAAgyAjgjQAjgjAyAAMAo/AAAQAyAAAjAjQAjAjAAAyMAAAA2fQAAAygjAjQgjAjgyAAg");
	this.shape_1.setTransform(13.625,4.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("EhjRAvtMAAAhfYMDGiAAAMAAABfYg");
	this.shape_2.setTransform(-355.9,10.1683,1,1.2207);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_turmus, new cjs.Rectangle(-991.2,-362.4,1270.7,745.2), null);


(lib.ticket_shofet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image_
	this.instance = new lib.Image_5();
	this.instance.setTransform(-129.05,-157.8,0.2129,0.2129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_8
	this.cancel = new lib.X();
	this.cancel.name = "cancel";
	this.cancel.setTransform(-135.15,-178.45);
	new cjs.ButtonHelper(this.cancel, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cancel).wait(1));

	// הגבעות_הירוקות__האוויר_הצח__זרימת_המים_בחורף__הפריחות_הקסומות__כשכליל_החורש_מרהיב_בוורוד_וסגול_כל_אלו_הופכים_את_הנחל_היפהפה_הזה_לפופולרי_במיוחד__בעיקר_בשבתות_ובחגים___ותמצאו_בו_כמה_מסלולים_בני_2_4_שעות__ובהם_גם_אחד_מעגלי_
	this.text = new cjs.Text("הגבעות הירוקות, האוויר הצח, זרימת המים בחורף, הפריחות הקסומות, כשכליל החורש מרהיב בוורוד וסגול כל אלו הופכים את הנחל היפהפה הזה לפופולרי במיוחד, בעיקר בשבתות ובחגים.  ותמצאו בו כמה מסלולים בני 2-4 שעות, ובהם גם אחד מעגלי.", "14px 'Rubik Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 22;
	this.text.lineWidth = 234;
	this.text.parent = this;
	this.text.setTransform(107.95,29.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// נחל_השופט
	this.text_1 = new cjs.Text("נחל השופט", "25px 'Rubik SemiBold'");
	this.text_1.lineHeight = 42;
	this.text_1.parent = this;
	this.text_1.setTransform(-17.85,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("A0fdIQgyAAgjgjQgjgjAAgyMAAAg2fQAAgyAjgjQAjgjAyAAMAo/AAAQAyAAAjAjQAjAjAAAyMAAAA2fQAAAygjAjQgjAjgyAAg");
	this.shape.setTransform(-13.625,-9.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C9279").s().p("A0fdIQgyAAgjgjQgjgjAAgyMAAAg2fQAAgyAjgjQAjgjAyAAMAo/AAAQAyAAAjAjQAjAjAAAyMAAAA2fQAAAygjAjQgjAjgyAAg");
	this.shape_1.setTransform(13.625,9.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("EhjRAvtMAAAhfYMDGiAAAMAAABfYg");
	this.shape_2.setTransform(-355.9,10.1683,1,1.2207);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_shofet, new cjs.Rectangle(-991.2,-362.4,1270.7,745.2), null);


(lib.ticket_ramon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image_
	this.instance = new lib.Image_6();
	this.instance.setTransform(-129.9,-159.95,0.2001,0.2001);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_9
	this.cancel = new lib.X();
	this.cancel.name = "cancel";
	this.cancel.setTransform(-135.1,-178.45);
	new cjs.ButtonHelper(this.cancel, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cancel).wait(1));

	// המכתש_הוא_חלק_משמורות_הטבע_מצוק_הצינים_והר_הנגב_ומעליו_מתנשא_מרכז_המבקרים_מכתש_רמון_המציע_חוויה_המשלבת_בין_סיפור_חייו_של_האסטרונאוט_הישראלי_הראשון_אל_מ_אילן_רמון__להיכרות_עם_המכתש_הגדול_בעולם_ועם_תופעות_הטבע_הייחודיות_שבו_
	this.text = new cjs.Text("המכתש הוא חלק משמורות הטבע מצוק הצינים והר הנגב ומעליו מתנשא מרכז המבקרים מכתש רמון המציע חוויה המשלבת בין סיפור חייו של האסטרונאוט הישראלי הראשון אל\"מ אילן רמון, להיכרות עם המכתש הגדול בעולם ועם תופעות הטבע הייחודיות שבו.", "14px 'Rubik Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 22;
	this.text.lineWidth = 234;
	this.text.parent = this;
	this.text.setTransform(107.95,28.25);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// מכתש_רמון
	this.text_1 = new cjs.Text("מכתש רמון", "normal 600 25px 'Rubik'");
	this.text_1.lineHeight = 41;
	this.text_1.parent = this;
	this.text_1.setTransform(-7.9,-2.1);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("A0fdIQgxAAgkgjQgjgjAAgyMAAAg2fQAAgyAjgjQAkgjAxAAMAo/AAAQAxAAAkAjQAjAjAAAyMAAAA2fQAAAygjAjQgkAjgxAAg");
	this.shape.setTransform(-13.6,-9.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C9279").s().p("A0fdIQgyAAgigjQgkgjAAgyMAAAg2fQAAgyAkgjQAigjAyAAMAo/AAAQAxAAAkAjQAjAjAAAyMAAAA2fQAAAygjAjQgkAjgxAAg");
	this.shape_1.setTransform(13.65,9.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("EhjRAvtMAAAhfYMDGiAAAMAAABfYg");
	this.shape_2.setTransform(-355.9,10.1683,1,1.2207);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_ramon, new cjs.Rectangle(-991.2,-362.4,1270.7,745.2), null);


(lib.ticket_meshushim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {cancel:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image_
	this.instance = new lib.Image_7();
	this.instance.setTransform(-129.85,-160.75,0.2518,0.2518);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_8
	this.cancel = new lib.X();
	this.cancel.name = "cancel";
	this.cancel.setTransform(-135.15,-178.5);
	new cjs.ButtonHelper(this.cancel, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cancel).wait(1));

	// בנחל_המשושים_שבשמורת_הטבע_יער_יהודייה_אפשר_ליהנות_מנופי_בזלת_מרהיבים_של_קניונים_עמוקים__ובהם_ברכות_ומפלים_שוצפים__מתופעות_גאולוגיות_מרתקות_וממרחבי_אחו_פורחים__גולת_הכותרת_היא_ברכת_מים_מופלאה_המוקפת_משושי_בזלת_מרשימים__
	this.text = new cjs.Text("בנחל המשושים שבשמורת הטבע יער יהודייה אפשר ליהנות מנופי בזלת מרהיבים של קניונים עמוקים, ובהם ברכות ומפלים שוצפים, מתופעות גאולוגיות מרתקות וממרחבי אחו פורחים. גולת הכותרת היא ברכת מים מופלאה המוקפת משושי בזלת מרשימים. ", "normal 300 14px 'Rubik'");
	this.text.textAlign = "right";
	this.text.lineHeight = 20;
	this.text.lineWidth = 234;
	this.text.parent = this;
	this.text.setTransform(108,32.75);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// נחל_המשושים
	this.text_1 = new cjs.Text("נחל המשושים", "normal 600 25px 'Rubik'");
	this.text_1.lineHeight = 41;
	this.text_1.parent = this;
	this.text_1.setTransform(-36.9,-3.1);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("A0fdIQgyAAgjgjQgjgjAAgyMAAAg2fQAAgyAjgjQAjgjAyAAMAo/AAAQAyAAAjAjQAjAjAAAyMAAAA2fQAAAygjAjQgjAjgyAAg");
	this.shape.setTransform(-13.625,-9.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C9279").s().p("A0fdIQgyAAgjgjQgjgjAAgyMAAAg2fQAAgyAjgjQAjgjAyAAMAo/AAAQAyAAAjAjQAjAjAAAyMAAAA2fQAAAygjAjQgjAjgyAAg");
	this.shape_1.setTransform(13.625,9.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("EhjRAvtMAAAhfYMDGiAAAMAAABfYg");
	this.shape_2.setTransform(-355.9,10.1683,1,1.2207);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_meshushim, new cjs.Rectangle(-991.2,-362.4,1270.7,745.2), null);


(lib.ticket_masada = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image_
	this.instance = new lib.Image_3();
	this.instance.setTransform(-131.6,-161.55,0.2139,0.2139);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_9
	this.cancel = new lib.X();
	this.cancel.name = "cancel";
	this.cancel.setTransform(-135.15,-182);
	new cjs.ButtonHelper(this.cancel, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cancel).wait(1));

	// מצדה___המעוז_האחרון_של_לוחמי_חירות_יהודיים_מול_הצבא_הרומי__מסמלת_את_אחריתה_של_ממלכת_יהודה_בסוף_ימי_בית_שני_ואת_חורבנה_האלים__על_במת_ההר_שרידי_ארמונות_פאר_מתקופתו_של_המלך_הורדוס_ועדות_אילמת_למצור_הרומי_והסוף_המר__ההר_שהפך_לסמל__
	this.text = new cjs.Text("המעוז האחרון של לוחמי חירות יהודיים מול הצבא הרומי, מסמלת את אחריתה של ממלכת יהודה בסוף ימי בית שני ואת חורבנה האלים. על במת ההר שרידי ארמונות פאר מתקופתו של המלך הורדוס ועדות אילמת למצור הרומי והסוף המר. ", "14px 'Rubik Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 22;
	this.text.lineWidth = 234;
	this.text.parent = this;
	this.text.setTransform(103.05,29.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// מצדה
	this.text_1 = new cjs.Text("מצדה", "25px 'Rubik SemiBold'");
	this.text_1.lineHeight = 42;
	this.text_1.parent = this;
	this.text_1.setTransform(42.05,-5.85);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("A0fdIQgxAAgjgjQgkgjAAgyMAAAg2fQAAgyAkgjQAjgjAxAAMAo/AAAQAyAAAjAjQAjAjAAAyMAAAA2fQAAAygjAjQgjAjgyAAg");
	this.shape.setTransform(-13.6,-13.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C9279").s().p("A0fdIQgyAAgjgjQgjgjAAgyMAAAg2fQAAgyAjgjQAjgjAyAAMAo/AAAQAyAAAjAjQAjAjAAAyMAAAA2fQAAAygjAjQgjAjgyAAg");
	this.shape_1.setTransform(13.625,6.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("EhjRAvtMAAAhfYMDGiAAAMAAABfYg");
	this.shape_2.setTransform(-355.9,10.1683,1,1.2207);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_masada, new cjs.Rectangle(-991.2,-362.4,1270.7,745.2), null);


(lib.ticket_dirsnid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image_
	this.instance = new lib.Image_8();
	this.instance.setTransform(-129.95,-158.15,0.2209,0.2209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_8
	this.cancel = new lib.X();
	this.cancel.name = "cancel";
	this.cancel.setTransform(-135.15,-178.45);
	new cjs.ButtonHelper(this.cancel, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cancel).wait(1));

	// כ__100_מ__צפונה_לאפיק_נחל_עובד_נמצאת_אנדרטה_לזכר_192_אנשי_גדודי_העבודה_המצריים___הקורפוס_האפריקאי____שבנו_את_המסילה_בשירות_הצבא_הבריטי__מתו_במהלך_סלילת_מסילת_הרכבת_ונקברו_בקבר_אחים__האנדרטה_היא_אובליסק_ועליו_לוחות_שיש_בערבית_ובאנגלית_
	this.text = new cjs.Text("כ- 100 מ' צפונה לאפיק נחל עובד נמצאת אנדרטה לזכר 192 אנשי גדודי העבודה המצריים (\"הקורפוס האפריקאי\"), שבנו את המסילה בשירות הצבא הבריטי, מתו במהלך סלילת מסילת הרכבת ונקברו בקבר אחים. האנדרטה היא אובליסק ועליו לוחות שיש בערבית ובאנגלית.", "normal 300 14px 'Rubik'");
	this.text.textAlign = "right";
	this.text.lineHeight = 20;
	this.text.lineWidth = 234;
	this.text.parent = this;
	this.text.setTransform(107.65,34.15);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// דיר_סניד
	this.text_1 = new cjs.Text("דיר סניד", "normal 600 25px 'Rubik'");
	this.text_1.lineHeight = 41;
	this.text_1.parent = this;
	this.text_1.setTransform(20.25,0.05);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("A0fdIQgyAAgjgjQgjgjAAgyMAAAg2fQAAgyAjgjQAjgjAyAAMAo/AAAQAyAAAjAjQAjAjAAAyMAAAA2fQAAAygjAjQgjAjgyAAg");
	this.shape.setTransform(-13.625,-9.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C9279").s().p("A0fdIQgyAAgjgjQgjgkAAgxMAAAg2fQAAgyAjgiQAjgkAyAAMAo/AAAQAyAAAjAkQAjAiAAAyMAAAA2fQAAAxgjAkQgjAjgyAAg");
	this.shape_1.setTransform(13.625,9.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("EhjRAvtMAAAhfYMDGiAAAMAAABfYg");
	this.shape_2.setTransform(-355.9,10.1683,1,1.2207);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_dirsnid, new cjs.Rectangle(-991.2,-362.4,1270.7,745.2), null);


(lib.ticket_dan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.cancel = new lib.X();
	this.cancel.name = "cancel";
	this.cancel.setTransform(-135.15,-178.45);
	new cjs.ButtonHelper(this.cancel, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cancel).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(-142.2,-185.5,0.5,0.5);

	this.text = new cjs.Text("נחל דן הוא אחד מהנחלים הגדולים בישראל ומימיו מספקים כמחצית מכמות המים לירדן, ולבסוף לכנרת.\nתל דן, השוכן בתחומי השמורה, מזוהה עם העיר המקראית דן, נקודת ציון חשובה בגבולה הצפוני של ארץ ישראל הקדומה.", "14px 'Rubik Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 22;
	this.text.lineWidth = 234;
	this.text.parent = this;
	this.text.setTransform(108.15,38.05);

	this.text_1 = new cjs.Text("נחל דן", "normal 600 25px 'Rubik'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 41;
	this.text_1.parent = this;
	this.text_1.setTransform(108.15,1.45);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.instance_1 = new lib.Image_1();
	this.instance_1.setTransform(-129.6,-159.9,0.2416,0.2416);

	this.instance_2 = new lib.CachedBmp_29();
	this.instance_2.setTransform(-156.85,-196.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.text_1},{t:this.text},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("EhjRAvtMAAAhfYMDGiAAAMAAABfYg");
	this.shape.setTransform(-355.9,10.1683,1,1.2207);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_dan, new cjs.Rectangle(-991.2,-362.4,1270.7,745.2), null);


(lib.ticket_akev = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Image_
	this.instance = new lib.Image_4();
	this.instance.setTransform(-130.05,-162.2,0.3495,0.3495);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.cancel = new lib.X_1();
	this.cancel.name = "cancel";
	this.cancel.setTransform(-135.1,-182.85);
	new cjs.ButtonHelper(this.cancel, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cancel).wait(1));

	// נחל_עקב_שנמצא_מדרום_מזרח_למדרשת_שדה_בוקר_וחותך_את_השטח_שמסביבו_כסכין_חד__הוא_אחד_מערוצי_הנחלים_המיוחדים_בנגב__שני_מעיינות_נובעים_בו__ובין_מצוקי_הגיר_הלבנים_שמסביבו_גדלה_צמחייה_עשירה_וירוקה__אפשרות_אחת_היא_לטייל_במסלול_חד_כיווני_שכולל_את_נחל_עקב_ומעלה_דבשון_
	this.text = new cjs.Text("נחל עקב שנמצא מדרום-מזרח למדרשת שדה בוקר וחותך את השטח שמסביבו כסכין חד, הוא אחד מערוצי הנחלים המיוחדים בנגב: שני מעיינות נובעים בו, ובין מצוקי הגיר הלבנים שמסביבו גדלה צמחייה עשירה וירוקה. ", "14px 'Rubik Light'");
	this.text.textAlign = "right";
	this.text.lineHeight = 22;
	this.text.lineWidth = 234;
	this.text.parent = this;
	this.text.setTransform(100.35,30.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// עין_עקב
	this.text_1 = new cjs.Text("עין עקב", "normal 600 25px 'Rubik'");
	this.text_1.lineHeight = 41;
	this.text_1.parent = this;
	this.text_1.setTransform(19.95,-3.95);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("A0fdIQgxAAgkgjQgjgjAAgyMAAAg2fQAAgyAjgjQAkgjAxAAMAo/AAAQAxAAAkAjQAjAjAAAyMAAAA2fQAAAygjAjQgkAjgxAAg");
	this.shape.setTransform(-13.6,-14.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C9279").s().p("A0fdIQgyAAgjgjQgjgjAAgyMAAAg2fQAAgxAjgkQAjgjAyAAMAo/AAAQAxAAAkAjQAjAkAAAxMAAAA2fQAAAygjAjQgkAjgxAAg");
	this.shape_1.setTransform(13.65,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("EhjRAvtMAAAhfYMDGiAAAMAAABfYg");
	this.shape_2.setTransform(-355.9,10.1683,1,1.2207);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ticket_akev, new cjs.Rectangle(-991.2,-362.4,1270.7,745.2), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao0GQIAAsfIRpAAIAAMfg");
	mask.setTransform(56.5,39.95);

	// Layer_3
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(56.6,40.1,1,1,0,0,0,56.2,39.7);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.setTransform(96.95,25.15,1,1,0,0,0,14,14);

	this.instance_2 = new lib.CachedBmp_27();
	this.instance_2.setTransform(81,9.15,0.323,0.323);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0.4,0.4,112.6,79.5), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao0GQIAAsfIRpAAIAAMfg");
	mask.setTransform(56.5,39.95);

	// Layer_2
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(56.5,40,1,1,0,0,0,56.5,40);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,113,79.9), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao0GQIAAsfIRpAAIAAMfg");
	mask.setTransform(56.5,39.95);

	// Layer_3
	this.instance = new lib.ClipGroup_2();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,113,79.9), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyfMRQg4AAgngoQgognAAg4IAA0TQAAg4AogoQAngnA4AAMAk/AAAQA4AAAnAnQAoAoAAA4IAAUTQAAA4goAnQgnAog4AAg");
	mask.setTransform(131.975,78.55);

	// Layer_3
	this.instance = new lib.ClipGroup_0();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.1,0.1,263.79999999999995,157), null);


(lib.odot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.xodot = new lib.X();
	this.xodot.name = "xodot";
	this.xodot.setTransform(-349.1,-173.3,1.4749,1.4749,0,0,0,1.3,1.2);
	new cjs.ButtonHelper(this.xodot, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.xodot).wait(1));

	// הפקולטה_לטכנולוגיות_למידה
	this.linkTELEM = new lib.linktelem();
	this.linkTELEM.name = "linkTELEM";
	this.linkTELEM.setTransform(-1.8,100.7);
	new cjs.ButtonHelper(this.linkTELEM, 0, 1, 2, false, new lib.linktelem(), 3);

	this.timeline.addTween(cjs.Tween.get(this.linkTELEM).wait(1));

	// תשפ_ב___2022
	this.text = new cjs.Text("תשפ”ב | 2022", "20px 'Rubik Light'", "#2B2B2A");
	this.text.lineHeight = 29;
	this.text.parent = this;
	this.text.setTransform(-59.7,61.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// טל_רוזן__זוהר_לוטן_ופולינה_גרשמן
	this.text_1 = new cjs.Text("טל רוזן, זוהר לוטן ופולינה גרשמן", "18px 'Rubik Light'", "#2B2B2A");
	this.text_1.lineHeight = 26;
	this.text_1.parent = this;
	this.text_1.setTransform(-343.45,36.8);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// מנחים__רותם_ישראל_פישלזון_ויניב_סלע
	this.text_2 = new cjs.Text("מנחים: רותם ישראל-פישלזון ויניב סלע", "21px 'Rubik Light'", "#2B2B2A");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 31;
	this.text_2.parent = this;
	this.text_2.setTransform(342,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// ייצוג_זה_הופק_כחלק_מפרוייקט_משותף_לקורסים__ארגון_וייצוג_ידע__ו__מבוא_לתכנות_אינטרקציה___ואנימציה__בפקולטה_לטכנולוגיות_למידה_
	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(-41,-105.65,0.323,0.323);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// צברי___מנגנון_סינון_לטיולים
	this.text_3 = new cjs.Text("צברי - מנגנון סינון לטיולים", "24px 'Rubik Light'", "#2B2B2A");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 35;
	this.text_3.parent = this;
	this.text_3.setTransform(343.25,-141.8);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

	// Layer_9
	this.instance_1 = new lib.CachedBmp_38();
	this.instance_1.setTransform(255.1,-175.85,0.323,0.323);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_10
	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.setTransform(0,161,1,1,0,0,0,56.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_11
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.setTransform(-228,-49.45,1,1,0,0,0,131.9,78.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEEED").s().p("AyfMRQg4AAgngoQgognAAg4IAA0TQAAg4AogoQAngnA4AAMAk/AAAQA4AAAnAnQAoAoAAA4IAAUTQAAA4goAnQgnAog4AAg");
	this.shape.setTransform(-227.925,-49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3}]}).wait(1));

	// Layer_12
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEAEA").s().p("EgxIAhPQiQgBiDg3QiAg2hhhiQjQjQAAkmMAAAgsSQAAiPA4iEQA1iABjhiQBhhiCAg2QCDg4CQAAMBiQAAAQEmABDQDPQBiBiA2CAQA3CEAACPMAAAAsSQAACRg3CEQg2B/hiBiQjQDQkmAAg");
	this.shape_1.setTransform(-12.1,-5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F947C").s().p("EgxHAhOQiQAAiEg4Qh/g2hihiQhihig2h/Qg3iEAAiQMAAAgsRQAAiQA3iEQA2h/BihiQBihiB/g2QCEg4CQAAMBiPAAAQCQAACEA4QB/A2BiBiQBiBiA2B/QA4CEAACQMAAAAsRQAACRg4CDQg2B/hiBiQhiBih/A2QiEA4iQAAg");
	this.shape_2.setTransform(12.2,5.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.odot, new cjs.Rectangle(-397.4,-218.4,794.9,436.9), null);


// stage content:
(lib.tzabaryfilter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		
		stage.enableMouseOver(24);
		
		//עצירת המוביקליפים
		self.stop();
		
		self.water.stop();
		self.flower.stop();
		self.mountain.stop();
		self.north.stop();
		self.center.stop();
		self.south.stop();
		self.lvlEasy.stop();
		self.lvlMed.stop();
		self.lvlHard.stop();
		self.shortTime.stop();
		self.medTime.stop();
		self.longTime.stop();
		
		self.water2.stop();
		self.flower2.stop();
		self.mountain2.stop();
		self.north2.stop();
		self.center2.stop();
		self.south2.stop();
		self.lvlEasy2.stop();
		self.lvlMed2.stop();
		self.lvlHard2.stop();
		self.shortTime2.stop();
		self.medTime2.stop();
		self.longTime2.stop();
		
		self.nachal_dan.stop();
		self.turmus.stop();
		self.masada.stop();
		self.yakum.stop();
		self.dir_snid.stop();
		self.meshushim.stop();
		self.ramon.stop();
		self.akev.stop();
		self.shofet.stop();
		
		
		//הסתרת האייקונים המשוכפלים
		self.water2.visible = false;
		self.flower2.visible = false;
		self.mountain2.visible = false;
		self.north2.visible = false;
		self.center2.visible = false;
		self.south2.visible = false;
		self.lvlEasy2.visible = false;
		self.lvlMed2.visible = false;
		self.lvlHard2.visible = false;
		self.shortTime2.visible = false;
		self.medTime2.visible = false;
		self.longTime2.visible = false;
		
		//הסתרת הבועיות עם שם המסלול
		self.txtDan.visible = false;
		self.txtMeshushim.visible = false;
		self.txtShofet.visible = false;
		self.txtYakum.visible = false;
		self.txtTurmus.visible = false;
		self.txtSnid.visible = false;
		self.txtMasada.visible = false;
		self.txtAkev.visible = false;
		self.txtRamon.visible = false;
		
		//הסתרת כרטיסיות המידע
		self.infoDan.visible = false;
		self.infoMeshushim.visible = false;
		self.infoShofet.visible = false;
		self.infoYakum.visible = false;
		self.infoTurmus.visible = false;
		self.infoSnid.visible = false;
		self.infoMasada.visible = false;
		self.infoAkev.visible = false;
		self.infoRamon.visible = false;
		
		self.odot.visible = false;
		
		self.cancel.visible = false;
		
		//שינוי סמן העכבר שיראו לחיצים כמו כפתור
		self.water.cursor = "pointer";
		self.flower.cursor = "pointer";
		self.mountain.cursor = "pointer";
		self.north.cursor = "pointer";
		self.center.cursor = "pointer";
		self.south.cursor = "pointer";
		self.lvlEasy.cursor = "pointer";
		self.lvlMed.cursor = "pointer";
		self.lvlHard.cursor = "pointer";
		self.shortTime.cursor = "pointer";
		self.medTime.cursor = "pointer";
		self.longTime.cursor = "pointer";
		self.nachal_dan.cursor = "pointer";
		self.turmus.cursor = "pointer";
		self.masada.cursor = "pointer";
		self.yakum.cursor = "pointer";
		self.dir_snid.cursor = "pointer";
		self.meshushim.cursor = "pointer";
		self.ramon.cursor = "pointer";
		self.akev.cursor = "pointer";
		self.shofet.cursor = "pointer";
		
		
		var type = [self.water, self.flower, self.mountain]; //מערך לבחירת סינון סוג מסלול
		var type2 = [self.water2, self.flower2, self.mountain2]; //מערך לאייקונים הכפולים
		
		var area = [self.north, self.center, self.south]; //מערך לבחירת אזור
		var area2 = [self.north2, self.center2, self.south2];
		
		var level = [self.lvlEasy, self.lvlMed, self.lvlHard]; //מערך לבחירת רמת קושי
		var level2 = [self.lvlEasy2, self.lvlMed2, self.lvlHard2];
		
		var time = [self.shortTime, self.medTime, self.longTime]; // מערך לבחירת משך המסלול
		var time2 = [self.shortTime2, self.medTime2, self.longTime2];
		
		
		var array = [10, 10, 10, 10]; // [type,area,level,time] 
		// מערך שמתקשר עם פונקציה שבודקת בכל אירוע עכבר אילו נקודות להאיר על המפה
		
		//אירועי עכבר בנקודות על המפה
		self.nachal_dan.addEventListener("mouseover", nachal_danOver);
		self.nachal_dan.addEventListener("mouseout", nachal_danOut);
		self.turmus.addEventListener("mouseover", turmusOver);
		self.turmus.addEventListener("mouseout", turmusOut);
		self.masada.addEventListener("mouseover", masadaOver);
		self.masada.addEventListener("mouseout", masadaOut);
		self.yakum.addEventListener("mouseover", yakumOver);
		self.yakum.addEventListener("mouseout", yakumOut);
		self.dir_snid.addEventListener("mouseover", dir_snidOver);
		self.dir_snid.addEventListener("mouseout", dir_snidOut);
		self.meshushim.addEventListener("mouseover", meshushimOver);
		self.meshushim.addEventListener("mouseout", meshushimOut);
		self.ramon.addEventListener("mouseover", ramonOver);
		self.ramon.addEventListener("mouseout", ramonOut);
		self.akev.addEventListener("mouseover", akevOver);
		self.akev.addEventListener("mouseout", akevOut);
		self.shofet.addEventListener("mouseover", shofetOver);
		self.shofet.addEventListener("mouseout", shofetOut);
		
		self.odotbutt.addEventListener("click", odotClick);
		
		
		
		/*
		self.infoDan.x.addEventListener("click",xclick);*/
		
		//לולאה שתפקידה לזהות את בחירת המשתמש, על פי מקומו של הערך ב-4 המערכים השונים
		//ולפי הערך ואירוע העכבר, להפעיל את הפונקציה המתאימה
		for (let i = 0; i < 3; i++) {
		
			type[i].addEventListener("mouseover", typeOver);
			type[i].addEventListener("mouseout", typeOut);
			type[i].addEventListener("click", typeClick);
		
			area[i].addEventListener("mouseover", areaOver);
			area[i].addEventListener("mouseout", areaOut);
			area[i].addEventListener("click", areaClick);
		
			level[i].addEventListener("mouseover", levelOver);
			level[i].addEventListener("mouseout", levelOut);
			level[i].addEventListener("click", levelClick);
		
			time[i].addEventListener("mouseover", timeOver);
			time[i].addEventListener("mouseout", timeOut);
			time[i].addEventListener("click", timeClick);
		
			self.cancel.addEventListener("click", cancelFunc);
		
			self.nachal_dan.addEventListener("click", danClick);
			self.ramon.addEventListener("click", ramonClick);
			self.akev.addEventListener("click", akevClick);
			self.masada.addEventListener("click", masadaClick);
			self.dir_snid.addEventListener("click", dir_snidClick);
			self.turmus.addEventListener("click", turmusClick);
			self.yakum.addEventListener("click", yakumClick);
			self.shofet.addEventListener("click", shofetClick);
			self.meshushim.addEventListener("click", meshushimClick);
		
			function typeOver() {
				array[0] = i;
				self.water.gotoAndStop(1);
				self.flower.gotoAndStop(1);
				self.mountain.gotoAndStop(1);
				self.water.mouseEnabled = false;
				self.flower.mouseEnabled = false;
				self.mountain.mouseEnabled = false;
				type[i].gotoAndStop(0);
				type[i].mouseEnabled = true;
				type[i].scaleX = 1.2;
				type[i].scaleY = 1.2;
				check();
			}
		
			function typeOut() {
				self.water.gotoAndStop(0);
				self.flower.gotoAndStop(0);
				self.mountain.gotoAndStop(0);
				self.water.mouseEnabled = true;
				self.flower.mouseEnabled = true;
				self.mountain.mouseEnabled = true;
				type[i].scaleX = 1;
				type[i].scaleY = 1;
				array[0] = 10;
				checkOut();
				check();
		
			}
			function typeClick() {
				type[i].removeEventListener("mouseout", typeOut);
				type[i].visible = false;
				type2[i].visible = true;
				type2[i].addEventListener("click", type2click);
				type2[i].cursor = "pointer";
				self.cancel.visible = true;
			}
			function type2click() {
				type[i].addEventListener("mouseout", typeOut);
				typeOut();
				type2[i].visible = false;
				type[i].visible = true;
			}
		
		
			function areaOver() {
				array[1] = i;
				self.north.gotoAndStop(1);
				self.center.gotoAndStop(1);
				self.south.gotoAndStop(1);
				self.north.mouseEnabled = false;
				self.center.mouseEnabled = false;
				self.south.mouseEnabled = false;
				area[i].gotoAndStop(0);
				area[i].mouseEnabled = true;
				area[i].scaleX = 1.2;
				area[i].scaleY = 1.2;
				check();
		
		
			}
		
			function areaOut() {
				self.north.gotoAndStop(0);
				self.center.gotoAndStop(0);
				self.south.gotoAndStop(0);
				self.north.mouseEnabled = true;
				self.center.mouseEnabled = true;
				self.south.mouseEnabled = true;
				area[i].scaleX = 1;
				area[i].scaleY = 1;
				array[1] = 10;
				checkOut();
				check();
		
			}
			function areaClick() {
				area[i].removeEventListener("mouseout", areaOut);
				area[i].visible = false;
				area2[i].visible = true;
				area2[i].addEventListener("click", area2click);
				area2[i].cursor = "pointer";
				self.cancel.visible = true;
			}
			function area2click() {
				area[i].addEventListener("mouseout", areaOut);
				areaOut();
				area2[i].visible = false;
				area[i].visible = true;
			}
		
		
		
			function levelOver() {
				array[2] = i;
				self.lvlEasy.gotoAndStop(1);
				self.lvlMed.gotoAndStop(1);
				self.lvlHard.gotoAndStop(1);
				self.lvlEasy.mouseEnabled = false;
				self.lvlMed.mouseEnabled = false;
				self.lvlHard.mouseEnabled = false;
				level[i].gotoAndStop(0);
				level[i].mouseEnabled = true;
				level[i].scaleX = 1.2;
				level[i].scaleY = 1.2;
				check();
		
		
			}
		
			function levelOut() {
				self.lvlEasy.gotoAndStop(0);
				self.lvlMed.gotoAndStop(0);
				self.lvlHard.gotoAndStop(0);
				self.lvlEasy.mouseEnabled = true;
				self.lvlMed.mouseEnabled = true;
				self.lvlHard.mouseEnabled = true;
				level[i].scaleX = 1;
				level[i].scaleY = 1;
				array[2] = 10;
				checkOut();
				check();
		
			}
			function levelClick() {
				level[i].removeEventListener("mouseout", levelOut);
				level[i].visible = false;
				level2[i].visible = true;
				level2[i].addEventListener("click", level2click);
				level2[i].cursor = "pointer";
				self.cancel.visible = true;
			}
			function level2click() {
				level[i].addEventListener("mouseout", levelOut);
				levelOut();
				level[i].visible = true;
				level2[i].visible = false;
		
			}
		
		
		
			function timeOver() {
				array[3] = i;
				self.shortTime.gotoAndStop(1);
				self.medTime.gotoAndStop(1);
				self.longTime.gotoAndStop(1);
				self.shortTime.mouseEnabled = false;
				self.medTime.mouseEnabled = false;
				self.longTime.mouseEnabled = false;
				time[i].gotoAndStop(0);
				time[i].mouseEnabled = true;
				time[i].scaleX = 1.2;
				time[i].scaleY = 1.2;
				check();
		
			}
		
			function timeOut() {
				self.shortTime.gotoAndStop(0);
				self.medTime.gotoAndStop(0);
				self.longTime.gotoAndStop(0);
				self.shortTime.mouseEnabled = true;
				self.medTime.mouseEnabled = true;
				self.longTime.mouseEnabled = true;
				time[i].scaleX = 1;
				time[i].scaleY = 1;
				array[3] = 10;
				checkOut();
				check();
			}
			function timeClick() {
				time[i].removeEventListener("mouseout", timeOut);
				time[i].visible = false;
				time2[i].visible = true;
				time2[i].addEventListener("click", time2click);
				time2[i].cursor = "pointer";
				self.cancel.visible = true;
			}
			function time2click() {
				time[i].addEventListener("mouseout", timeOut);
				timeOut();
				time2[i].visible = false;
				time[i].visible = true;
			}
		
			function cancelFunc() {
				type2click();
				area2click();
				level2click();
				time2click();
			}
		
			function danClick() {
				self.infoDan.visible = true;
				point0();
				cancelFunc();
				array[0] = 10;
				array[1] = 10;
				array[2] = 10;
				array[3] = 10;
				nachal_danOver();
				mouseFalse();
				self.nachal_dan.removeEventListener("mouseout", nachal_danOut);
				self.infoDan.cancel.addEventListener("click", xclick);
			}
		
			function ramonClick() {
				self.infoRamon.visible = true;
				point0();
				cancelFunc();
				array[0] = 10;
				array[1] = 10;
				array[2] = 10;
				array[3] = 10;
				ramonOver();
				mouseFalse();
				self.ramon.removeEventListener("mouseout", ramonOut);
				self.infoRamon.cancel.addEventListener("click", xclick);
			}
		
			function akevClick() {
				self.infoAkev.visible = true;
				point0();
				cancelFunc();
				array[0] = 10;
				array[1] = 10;
				array[2] = 10;
				array[3] = 10;
				akevOver();
				mouseFalse();
				self.akev.removeEventListener("mouseout", akevOut);
				self.infoAkev.cancel.addEventListener("click", xclick);
			}
		
			function masadaClick() {
				self.infoMasada.visible = true;
				point0();
				cancelFunc();
				array[0] = 10;
				array[1] = 10;
				array[2] = 10;
				array[3] = 10;
				masadaOver();
				mouseFalse();
				self.masada.removeEventListener("mouseout", masadaOut);
				self.infoMasada.cancel.addEventListener("click", xclick);
		
			}
		
			function dir_snidClick() {
				self.infoSnid.visible = true;
				point0();
				cancelFunc();
				array[0] = 10;
				array[1] = 10;
				array[2] = 10;
				array[3] = 10;
				dir_snidOver();
				mouseFalse();
				self.dir_snid.removeEventListener("mouseout", dir_snidOut);
				self.infoSnid.cancel.addEventListener("click", xclick);
		
			}
		
			function turmusClick() {
				self.infoTurmus.visible = true;
				point0();
				cancelFunc();
				array[0] = 10;
				array[1] = 10;
				array[2] = 10;
				array[3] = 10;
				turmusOver();
				mouseFalse();
				self.turmus.removeEventListener("mouseout", turmusOut);
				self.infoTurmus.cancel.addEventListener("click", xclick);
		
			}
		
			function yakumClick() {
				self.infoYakum.visible = true;
				point0();
				cancelFunc();
				array[0] = 10;
				array[1] = 10;
				array[2] = 10;
				array[3] = 10;
				yakumOver();
				mouseFalse();
				self.yakum.removeEventListener("mouseout", yakumOut);
				self.infoYakum.cancel.addEventListener("click", xclick);
		
			}
		
			function shofetClick() {
				self.infoShofet.visible = true;
				point0();
				cancelFunc();
				array[0] = 10;
				array[1] = 10;
				array[2] = 10;
				array[3] = 10;
				shofetOver();
				mouseFalse();
				self.shofet.removeEventListener("mouseout", shofetOut);
				self.infoShofet.cancel.addEventListener("click", xclick);
		
			}
		
			function meshushimClick() {
				self.infoMeshushim.visible = true;
				point0();
				cancelFunc();
				array[0] = 10;
				array[1] = 10;
				array[2] = 10;
				array[3] = 10;
				meshushimOver();
				self.meshushim.removeEventListener("mouseout", meshushimOut);
				self.infoMeshushim.cancel.addEventListener("click", xclick);
				mouseFalse();
			}
		
		
		}
		
		
		
		
		function check() {
			console.log(array);
			self.nachal_dan.mouseEnabled = false;
			self.turmus.mouseEnabled = false;
			self.masada.mouseEnabled = false;
			self.yakum.mouseEnabled = false;
			self.dir_snid.mouseEnabled = false;
			self.meshushim.mouseEnabled = false;
			self.ramon.mouseEnabled = false;
			self.akev.mouseEnabled = false;
			self.shofet.mouseEnabled = false;
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				mouseTrue();
			}
			if (array[0] == 0) {
				self.nachal_dan.gotoAndStop(1);
				self.meshushim.gotoAndStop(1);
				self.shofet.gotoAndStop(1);
				self.nachal_dan.mouseEnabled = true;
				self.meshushim.mouseEnabled = true;
				self.shofet.mouseEnabled = true;
				if (array[1] == 1 || array[1] == 2 || array[2] == 1) {
					self.nachal_dan.gotoAndStop(0);
					self.meshushim.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.nachal_dan.mouseEnabled = false;
					self.meshushim.mouseEnabled = false;
					self.shofet.mouseEnabled = false;
				}
				if (array[2] == 0) {
					self.meshushim.gotoAndStop(0);
					self.meshushim.mouseEnabled = false;
				}
				if (array[2] == 2) {
					self.nachal_dan.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.nachal_dan.mouseEnabled = false;
					self.shofet.mouseEnabled = false;
				}
				if (array[3] == 0) {
					self.nachal_dan.gotoAndStop(0);
					self.meshushim.gotoAndStop(0);
					self.nachal_dan.mouseEnabled = false;
					self.meshushim.mouseEnabled = false;
				}
				if (array[3] == 1) {
					self.shofet.gotoAndStop(0);
					self.meshushim.gotoAndStop(0);
					self.shofet.mouseEnabled = false;
					self.meshushim.mouseEnabled = false;
				}
				if (array[3] == 2) {
					self.shofet.gotoAndStop(0);
					self.nachal_dan.gotoAndStop(0);
					self.shofet.mouseEnabled = false;
					self.nachal_dan.mouseEnabled = false;
				}
		
			}
			if (array[0] == 1) {
				self.turmus.gotoAndStop(1);
				self.yakum.gotoAndStop(1);
				self.dir_snid.gotoAndStop(1);
				self.turmus.mouseEnabled = true;
				self.yakum.mouseEnabled = true;
				self.dir_snid.mouseEnabled = true;
				if (array[1] == 0 || array[2] == 2 || array[3] == 1 || array[3] == 2) {
					self.turmus.gotoAndStop(0);
					self.yakum.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
					self.yakum.mouseEnabled = false;
					self.dir_snid.mouseEnabled = false;
				}
				if (array[1] == 1) {
					self.dir_snid.gotoAndStop(0);
					self.dir_snid.mouseEnabled = false;
				}
				if (array[1] == 2) {
					self.turmus.gotoAndStop(0);
					self.yakum.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
					self.yakum.mouseEnabled = false;
				}
				if (array[2] == 0) {
					self.turmus.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
				}
				if (array[2] == 1) {
					self.yakum.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.yakum.mouseEnabled = false;
					self.yakum.mouseEnabled = false;
				}
		
			}
		
			if (array[0] == 2) {
				self.masada.gotoAndStop(1);
				self.ramon.gotoAndStop(1);
				self.akev.gotoAndStop(1);
				self.masada.mouseEnabled = true;
				self.ramon.mouseEnabled = true;
				self.akev.mouseEnabled = true;
				if (array[1] == 1 || array[1] == 2 || array[2] == 0 || array[3] == 0) {
					self.masada.gotoAndStop(0);
					self.ramon.gotoAndStop(0);
					self.akev.gotoAndStop(0);
					self.masada.mouseEnabled = false;
					self.ramon.mouseEnabled = false;
					self.akev.mouseEnabled = false;
				}
				if (array[2] == 1) {
					self.masada.gotoAndStop(0);
					self.masada.mouseEnabled = false;
				}
				if (array[2] == 2) {
					self.ramon.gotoAndStop(0);
					self.akev.gotoAndStop(0);
					self.ramon.mouseEnabled = false;
					self.akev.mouseEnabled = false;
				}
				if (array[3] == 1) {
					self.akev.gotoAndStop(0);
					self.masada.gotoAndStop(0);
					self.akev.mouseEnabled = false;
					self.masada.mouseEnabled = false;
				}
				if (array[3] == 2) {
					self.ramon.gotoAndStop(0);
					self.ramon.mouseEnabled = false;
				}
			}
		
			if (array[1] == 0) {
				self.nachal_dan.gotoAndStop(1);
				self.shofet.gotoAndStop(1);
				self.meshushim.gotoAndStop(1);
				self.nachal_dan.mouseEnabled = true;
				self.shofet.mouseEnabled = true;
				self.meshushim.mouseEnabled = true;
				if (array[0] == 1 || array[0] == 2 || array[2] == 1) {
					self.shofet.gotoAndStop(0);
					self.meshushim.gotoAndStop(0);
					self.nachal_dan.gotoAndStop(0);
					self.shofet.mouseEnabled = false;
					self.meshushim.mouseEnabled = false;
					self.nachal_dan.mouseEnabled = false;
				}
				if (array[2] == 0) {
					self.meshushim.gotoAndStop(0);
					self.meshushim.mouseEnabled = false;
				}
				if (array[2] == 2 || array[3] == 2) {
					self.nachal_dan.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.shofet.mouseEnabled = false;
					self.nachal_dan.mouseEnabled = false;
				}
				if (array[3] == 0) {
					self.meshushim.gotoAndStop(0);
					self.nachal_dan.gotoAndStop(0);
					self.meshushim.mouseEnabled = false;
					self.nachal_dan.mouseEnabled = false;
				}
				if (array[3] == 1) {
					self.meshushim.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.meshushim.mouseEnabled = false;
					self.shofet.mouseEnabled = false;
				}
		
			}
		
			if (array[1] == 1) {
				self.turmus.gotoAndStop(1);
				self.yakum.gotoAndStop(1);
				self.turmus.mouseEnabled = true;
				self.yakum.mouseEnabled = true;
				if (array[0] == 2 || array[0] == 0 || array[2] == 2 || array[3] == 1 || array[3] == 2) {
					self.turmus.gotoAndStop(0);
					self.yakum.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
					self.yakum.mouseEnabled = false;
				}
				if (array[2] == 0) {
					self.turmus.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
				}
				if (array[2] == 1) {
					self.yakum.gotoAndStop(0);
					self.yakum.mouseEnabled = false;
				}
		
			}
		
			if (array[1] == 2) {
				self.masada.gotoAndStop(1);
				self.dir_snid.gotoAndStop(1);
				self.ramon.gotoAndStop(1);
				self.akev.gotoAndStop(1);
				self.masada.mouseEnabled = true;
				self.dir_snid.mouseEnabled = true;
				self.ramon.mouseEnabled = true;
				self.akev.mouseEnabled = true;
				if (array[0] == 0) {
					self.masada.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.ramon.gotoAndStop(0);
					self.akev.gotoAndStop(0);
					self.masada.mouseEnabled = false;
					self.dir_snid.mouseEnabled = false;
					self.ramon.mouseEnabled = false;
					self.akev.mouseEnabled = false;
				}
				if (array[0] == 1 || array[2] == 0 || array[3] == 0) {
					self.masada.gotoAndStop(0);
					self.ramon.gotoAndStop(0);
					self.akev.gotoAndStop(0);
					self.masada.mouseEnabled = false;
					self.ramon.mouseEnabled = false;
					self.akev.mouseEnabled = false;
				}
				if (array[0] == 2) {
					self.dir_snid.gotoAndStop(0);
					self.dir_snid.mouseEnabled = false;
				}
				if (array[2] == 2) {
					self.dir_snid.gotoAndStop(0);
					self.ramon.gotoAndStop(0);
					self.akev.gotoAndStop(0);
					self.dir_snid.mouseEnabled = false;
					self.ramon.mouseEnabled = false;
					self.akev.mouseEnabled = false;
				}
				if (array[2] == 1) {
					self.masada.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.masada.mouseEnabled = false;
					self.dir_snid.mouseEnabled = false;
				}
				if (array[3] == 1) {
					self.masada.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.akev.gotoAndStop(0);
					self.masada.mouseEnabled = false;
					self.dir_snid.mouseEnabled = false;
					self.akev.mouseEnabled = false;
				}
				if (array[3] == 2) {
					self.dir_snid.gotoAndStop(0);
					self.ramon.gotoAndStop(0);
					self.dir_snid.mouseEnabled = false;
					self.ramon.mouseEnabled = false;
				}
			}
		
		
			if (array[2] == 0) {
				self.nachal_dan.gotoAndStop(1);
				self.shofet.gotoAndStop(1);
				self.yakum.gotoAndStop(1);
				self.dir_snid.gotoAndStop(1);
				self.nachal_dan.mouseEnabled = true;
				self.shofet.mouseEnabled = true;
				self.yakum.mouseEnabled = true;
				self.dir_snid.mouseEnabled = true;
				if (array[0] == 0 || array[1] == 0) {
					self.yakum.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.yakum.mouseEnabled = false;
					self.dir_snid.mouseEnabled = false;
				}
				if (array[0] == 1 || array[1] == 1) {
					self.nachal_dan.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.nachal_dan.mouseEnabled = false;
					self.shofet.mouseEnabled = false;
				}
				if (array[1] == 1) {
					self.nachal_dan.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.nachal_dan.mouseEnabled = false;
					self.shofet.mouseEnabled = false;
					self.dir_snid.mouseEnabled = false;
				}
				if (array[0] == 2 || array[3] == 2) {
					self.nachal_dan.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.yakum.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.nachal_dan.mouseEnabled = false;
					self.shofet.mouseEnabled = false;
					self.dir_snid.mouseEnabled = false;
					self.yakum.mouseEnabled = false;
				}
				if (array[1] == 2) {
					self.nachal_dan.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.yakum.gotoAndStop(0);
					self.nachal_dan.mouseEnabled = false;
					self.shofet.mouseEnabled = false;
					self.yakum.mouseEnabled = false;
				}
				if (array[3] == 0) {
					self.nachal_dan.gotoAndStop(0);
					self.nachal_dan.mouseEnabled = false;
				}
				if (array[3] == 1) {
					self.shofet.gotoAndStop(0);
					self.yakum.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.shofet.mouseEnabled = false;
					self.yakum.mouseEnabled = false;
					self.dir_snid.mouseEnabled = false;
				}
		
			}
		
		
			if (array[2] == 1) {
				self.turmus.gotoAndStop(1);
				self.ramon.gotoAndStop(1);
				self.akev.gotoAndStop(1);
				self.turmus.mouseEnabled = true;
				self.ramon.mouseEnabled = true;
				self.akev.mouseEnabled = true;
				if (array[0] == 0 || array[1] == 0) {
					self.turmus.gotoAndStop(0);
					self.ramon.gotoAndStop(0);
					self.akev.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
					self.ramon.mouseEnabled = false;
					self.akev.mouseEnabled = false;
				}
				if (array[0] == 1 || array[1] == 1 || array[3] == 0) {
					self.ramon.gotoAndStop(0);
					self.akev.gotoAndStop(0);
					self.ramon.mouseEnabled = false;
					self.akev.mouseEnabled = false;
				}
				if (array[0] == 2 || array[1] == 2) {
					self.turmus.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
				}
		
				if (array[3] == 1) {
					self.turmus.gotoAndStop(0);
					self.akev.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
					self.akev.mouseEnabled = false;
				}
				if (array[3] == 2) {
					self.turmus.gotoAndStop(0);
					self.ramon.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
					self.ramon.mouseEnabled = false;
				}
			}
		
		
			if (array[2] == 2) {
				self.masada.gotoAndStop(1);
				self.meshushim.gotoAndStop(1);
				self.masada.mouseEnabled = true;
				self.meshushim.mouseEnabled = true;
				if (array[0] == 0 || array[1] == 0) {
					self.masada.gotoAndStop(0);
					self.masada.mouseEnabled = false;
				}
				if (array[0] == 1 || array[1] == 1 || array[3] < 2) {
					self.masada.gotoAndStop(0);
					self.meshushim.gotoAndStop(0);
					self.masada.mouseEnabled = false;
					self.meshushim.mouseEnabled = false;
				}
				if (array[0] == 2 || array[1] == 2) {
					self.meshushim.gotoAndStop(0);
					self.meshushim.mouseEnabled = false;
				}
		
			}
		
			if (array[3] == 0) {
				self.turmus.gotoAndStop(1);
				self.yakum.gotoAndStop(1);
				self.dir_snid.gotoAndStop(1);
				self.shofet.gotoAndStop(1);
				self.turmus.mouseEnabled = true;
				self.yakum.mouseEnabled = true;
				self.dir_snid.mouseEnabled = true;
				self.shofet.mouseEnabled = true;
				if (array[0] == 0 || array[1] == 0) {
					self.turmus.gotoAndStop(0);
					self.yakum.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
					self.yakum.mouseEnabled = false;
					self.dir_snid.mouseEnabled = false;
				}
				if (array[0] == 1) {
					self.shofet.gotoAndStop(0);
					self.shofet.mouseEnabled = false;
				}
				if (array[0] == 2 || array[2] == 2) {
					self.turmus.gotoAndStop(0);
					self.yakum.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
					self.yakum.mouseEnabled = false;
					self.dir_snid.mouseEnabled = false;
					self.shofet.mouseEnabled = false;
				}
				if (array[1] == 1) {
					self.dir_snid.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.dir_snid.mouseEnabled = false;
					self.shofet.mouseEnabled = false;
				}
				if (array[1] == 2) {
					self.turmus.gotoAndStop(0);
					self.yakum.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
					self.yakum.mouseEnabled = false;
					self.shofet.mouseEnabled = false;
				}
				if (array[2] == 0) {
					self.turmus.gotoAndStop(0);
					self.turmus.mouseEnabled = false;
				}
				if (array[2] == 1) {
					self.yakum.gotoAndStop(0);
					self.dir_snid.gotoAndStop(0);
					self.shofet.gotoAndStop(0);
					self.yakum.mouseEnabled = false;
					self.dir_snid.mouseEnabled = false;
					self.shofet.mouseEnabled = false;
				}
			}
		
			if (array[3] == 1) {
				self.nachal_dan.gotoAndStop(1);
				self.ramon.gotoAndStop(1);
				self.nachal_dan.mouseEnabled = true;
				self.ramon.mouseEnabled = true;
				if (array[0] == 0 || array[1] == 0 || array[2] == 0) {
					self.ramon.gotoAndStop(0);
					self.ramon.mouseEnabled = false;
				}
				if (array[0] == 2 || array[1] == 2 || array[2] == 1) {
					self.nachal_dan.gotoAndStop(0);
					self.nachal_dan.mouseEnabled = false;
				}
				if (array[0] == 1 || array[1] == 1 || array[2] == 2) {
					self.nachal_dan.gotoAndStop(0);
					self.ramon.gotoAndStop(0);
					self.nachal_dan.mouseEnabled = false;
					self.ramon.mouseEnabled = false;
				}
		
			}
		
			if (array[3] == 2) {
				self.masada.gotoAndStop(1);
				self.akev.gotoAndStop(1);
				self.meshushim.gotoAndStop(1);
				self.masada.mouseEnabled = true;
				self.akev.mouseEnabled = true;
				self.meshushim.mouseEnabled = true;
				if (array[0] == 0 || array[1] == 0) {
					self.masada.gotoAndStop(0);
					self.akev.gotoAndStop(0);
					self.masada.mouseEnabled = false;
					self.akev.mouseEnabled = false;
				}
				if (array[0] == 2 || array[1] == 2) {
					self.meshushim.gotoAndStop(0);
					self.meshushim.mouseEnabled = false;
				}
				if (array[0] == 1 || array[1] == 1 || array[2] == 0) {
					self.masada.gotoAndStop(0);
					self.akev.gotoAndStop(0);
					self.meshushim.gotoAndStop(0);
					self.masada.mouseEnabled = false;
					self.akev.mouseEnabled = false;
					self.meshushim.mouseEnabled = false;
				}
				if (array[2] == 1) {
					self.masada.gotoAndStop(0);
					self.meshushim.gotoAndStop(0);
					self.masada.mouseEnabled = false;
					self.meshushim.mouseEnabled = false;
				}
				if (array[2] == 2) {
					self.akev.gotoAndStop(0);
					self.akev.mouseEnabled = false;
				}
		
		
			}
		
		
		} //end of check()
		
		function checkOut() {
			point0();
			mouseTrue();
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				self.cancel.visible = false;
			}
		
		}
		
		function mouseFalse() {
			self.water.mouseEnabled = false;
			self.flower.mouseEnabled = false;
			self.mountain.mouseEnabled = false;
			self.north.mouseEnabled = false;
			self.center.mouseEnabled = false;
			self.south.mouseEnabled = false;
			self.lvlEasy.mouseEnabled = false;
			self.lvlMed.mouseEnabled = false;
			self.lvlHard.mouseEnabled = false;
			self.shortTime.mouseEnabled = false;
			self.medTime.mouseEnabled = false;
			self.longTime.mouseEnabled = false;
			self.nachal_dan.mouseEnabled = false;
			self.turmus.mouseEnabled = false;
			self.masada.mouseEnabled = false;
			self.yakum.mouseEnabled = false;
			self.dir_snid.mouseEnabled = false;
			self.meshushim.mouseEnabled = false;
			self.ramon.mouseEnabled = false;
			self.akev.mouseEnabled = false;
			self.shofet.mouseEnabled = false;
		}
		
		function mouseTrue() {
			self.nachal_dan.mouseEnabled = true;
			self.turmus.mouseEnabled = true;
			self.masada.mouseEnabled = true;
			self.yakum.mouseEnabled = true;
			self.dir_snid.mouseEnabled = true;
			self.meshushim.mouseEnabled = true;
			self.ramon.mouseEnabled = true;
			self.akev.mouseEnabled = true;
			self.shofet.mouseEnabled = true;
		}
		
		function point0() {
			self.nachal_dan.gotoAndStop(0);
			self.meshushim.gotoAndStop(0);
			self.shofet.gotoAndStop(0);
			self.turmus.gotoAndStop(0);
			self.masada.gotoAndStop(0);
			self.yakum.gotoAndStop(0);
			self.dir_snid.gotoAndStop(0);
			self.ramon.gotoAndStop(0);
			self.akev.gotoAndStop(0);
		}
		
		function nachal_danOver() {
			self.txtDan.visible = true;
			self.nachal_dan.gotoAndStop(1);
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				type[1].gotoAndStop(1);
				type[2].gotoAndStop(1);
				area[1].gotoAndStop(1);
				area[2].gotoAndStop(1);
				level[1].gotoAndStop(1);
				level[2].gotoAndStop(1);
				time[0].gotoAndStop(1);
				time[2].gotoAndStop(1);
			}
		}
		function nachal_danOut() {
			self.txtDan.visible = false;
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				self.nachal_dan.gotoAndStop(0);
				type[1].gotoAndStop(0);
				type[2].gotoAndStop(0);
				area[1].gotoAndStop(0);
				area[2].gotoAndStop(0);
				level[1].gotoAndStop(0);
				level[2].gotoAndStop(0);
				time[0].gotoAndStop(0);
				time[2].gotoAndStop(0);
			}
		
		}
		
		function turmusOver() {
			self.txtTurmus.visible = true;
			self.turmus.gotoAndStop(1);
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				type[0].gotoAndStop(1);
				type[2].gotoAndStop(1);
				area[0].gotoAndStop(1);
				area[2].gotoAndStop(1);
				level[0].gotoAndStop(1);
				level[2].gotoAndStop(1);
				time[1].gotoAndStop(1);
				time[2].gotoAndStop(1);
			}
		}
		
		function turmusOut() {
			self.txtTurmus.visible = false;
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				self.turmus.gotoAndStop(0);
				type[0].gotoAndStop(0);
				type[2].gotoAndStop(0);
				area[0].gotoAndStop(0);
				area[2].gotoAndStop(0);
				level[0].gotoAndStop(0);
				level[2].gotoAndStop(0);
				time[1].gotoAndStop(0);
				time[2].gotoAndStop(0);
			}
		}
		
		function masadaOver() {
			self.txtMasada.visible = true;
			self.masada.gotoAndStop(1);
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				type[0].gotoAndStop(1);
				type[1].gotoAndStop(1);
				area[0].gotoAndStop(1);
				area[1].gotoAndStop(1);
				level[0].gotoAndStop(1);
				level[1].gotoAndStop(1);
				time[0].gotoAndStop(1);
				time[1].gotoAndStop(1);
			}
		}
		
		function masadaOut() {
			self.txtMasada.visible = false;
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				self.masada.gotoAndStop(0);
				type[0].gotoAndStop(0);
				type[1].gotoAndStop(0);
				area[0].gotoAndStop(0);
				area[1].gotoAndStop(0);
				level[0].gotoAndStop(0);
				level[1].gotoAndStop(0);
				time[0].gotoAndStop(0);
				time[1].gotoAndStop(0);
			}
		}
		
		function yakumOver() {
			self.txtYakum.visible = true;
			self.yakum.gotoAndStop(1);
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				type[0].gotoAndStop(1);
				type[2].gotoAndStop(1);
				area[0].gotoAndStop(1);
				area[2].gotoAndStop(1);
				level[1].gotoAndStop(1);
				level[2].gotoAndStop(1);
				time[1].gotoAndStop(1);
				time[2].gotoAndStop(1);
			}
		}
		function yakumOut() {
			self.txtYakum.visible = false;
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				self.yakum.gotoAndStop(0);
				type[0].gotoAndStop(0);
				type[2].gotoAndStop(0);
				area[0].gotoAndStop(0);
				area[2].gotoAndStop(0);
				level[1].gotoAndStop(0);
				level[2].gotoAndStop(0);
				time[1].gotoAndStop(0);
				time[2].gotoAndStop(0);
			}
		}
		
		function dir_snidOver() {
			self.txtSnid.visible = true;
			self.dir_snid.gotoAndStop(1);
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				type[0].gotoAndStop(1);
				type[2].gotoAndStop(1);
				area[0].gotoAndStop(1);
				area[1].gotoAndStop(1);
				level[1].gotoAndStop(1);
				level[2].gotoAndStop(1);
				time[1].gotoAndStop(1);
				time[2].gotoAndStop(1);
			}
		}
		
		function dir_snidOut() {
			self.txtSnid.visible = false;
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				self.dir_snid.gotoAndStop(0);
				type[0].gotoAndStop(0);
				type[2].gotoAndStop(0);
				area[0].gotoAndStop(0);
				area[1].gotoAndStop(0);
				level[1].gotoAndStop(0);
				level[2].gotoAndStop(0);
				time[1].gotoAndStop(0);
				time[2].gotoAndStop(0);
			}
		}
		
		function meshushimOver() {
			self.txtMeshushim.visible = true;
			self.meshushim.gotoAndStop(1);
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				type[1].gotoAndStop(1);
				type[2].gotoAndStop(1);
				area[1].gotoAndStop(1);
				area[2].gotoAndStop(1);
				level[0].gotoAndStop(1);
				level[1].gotoAndStop(1);
				time[0].gotoAndStop(1);
				time[1].gotoAndStop(1);
			}
		}
		function meshushimOut() {
			self.txtMeshushim.visible = false;
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				self.meshushim.gotoAndStop(0);
				type[1].gotoAndStop(0);
				type[2].gotoAndStop(0);
				area[1].gotoAndStop(0);
				area[2].gotoAndStop(0);
				level[0].gotoAndStop(0);
				level[1].gotoAndStop(0);
				time[0].gotoAndStop(0);
				time[1].gotoAndStop(0);
			}
		}
		
		function ramonOver() {
			self.txtRamon.visible = true;
			self.ramon.gotoAndStop(1);
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				type[0].gotoAndStop(1);
				type[1].gotoAndStop(1);
				area[0].gotoAndStop(1);
				area[1].gotoAndStop(1);
				level[0].gotoAndStop(1);
				level[2].gotoAndStop(1);
				time[0].gotoAndStop(1);
				time[2].gotoAndStop(1);
			}
		}
		
		function ramonOut() {
			self.txtRamon.visible = false;
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				self.ramon.gotoAndStop(0);
				type[0].gotoAndStop(0);
				type[1].gotoAndStop(0);
				area[0].gotoAndStop(0);
				area[1].gotoAndStop(0);
				level[0].gotoAndStop(0);
				level[2].gotoAndStop(0);
				time[0].gotoAndStop(0);
				time[2].gotoAndStop(0);
			}
		}
		
		function akevOver() {
			self.txtAkev.visible = true;
			self.akev.gotoAndStop(1);
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				type[0].gotoAndStop(1);
				type[1].gotoAndStop(1);
				area[0].gotoAndStop(1);
				area[1].gotoAndStop(1);
				level[0].gotoAndStop(1);
				level[2].gotoAndStop(1);
				time[0].gotoAndStop(1);
				time[1].gotoAndStop(1);
			}
		}
		
		function akevOut() {
			self.txtAkev.visible = false;
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				self.akev.gotoAndStop(0);
				type[0].gotoAndStop(0);
				type[1].gotoAndStop(0);
				area[0].gotoAndStop(0);
				area[1].gotoAndStop(0);
				level[0].gotoAndStop(0);
				level[2].gotoAndStop(0);
				time[0].gotoAndStop(0);
				time[1].gotoAndStop(0);
			}
		}
		
		function shofetOver() {
			self.txtShofet.visible = true;
			self.shofet.gotoAndStop(1);
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				type[1].gotoAndStop(1);
				type[2].gotoAndStop(1);
				area[1].gotoAndStop(1);
				area[2].gotoAndStop(1);
				level[1].gotoAndStop(1);
				level[2].gotoAndStop(1);
				time[1].gotoAndStop(1);
				time[2].gotoAndStop(1);
			}
		}
		
		function shofetOut() {
			self.txtShofet.visible = false;
			if (array[0] == 10 && array[1] == 10 && array[2] == 10 && array[3] == 10) {
				self.shofet.gotoAndStop(0);
				type[1].gotoAndStop(0);
				type[2].gotoAndStop(0);
				area[1].gotoAndStop(0);
				area[2].gotoAndStop(0);
				level[1].gotoAndStop(0);
				level[2].gotoAndStop(0);
				time[1].gotoAndStop(0);
				time[2].gotoAndStop(0);
			}
		}
		
		
		function xclick() {
			self.nachal_dan.addEventListener("mouseout", nachal_danOut);
			self.ramon.addEventListener("mouseout", ramonOut);
			self.turmus.addEventListener("mouseout", turmusOut);
			self.masada.addEventListener("mouseout", masadaOut);
			self.yakum.addEventListener("mouseout", yakumOut);
			self.dir_snid.addEventListener("mouseout", dir_snidOut);
			self.meshushim.addEventListener("mouseout", meshushimOut);
			self.akev.addEventListener("mouseout", akevOut);
			self.shofet.addEventListener("mouseout", shofetOut);
			nachal_danOut();
			ramonOut();
			turmusOut();
			masadaOut();
			yakumOut();
			dir_snidOut();
			meshushimOut();
			akevOut();
			shofetOut();
			self.cancel.visible = false;
			self.infoDan.visible = false;
			self.infoMeshushim.visible = false;
			self.infoShofet.visible = false;
			self.infoYakum.visible = false;
			self.infoTurmus.visible = false;
			self.infoSnid.visible = false;
			self.infoMasada.visible = false;
			self.infoAkev.visible = false;
			self.infoRamon.visible = false;
			self.water.mouseEnabled = true;
			self.flower.mouseEnabled = true;
			self.mountain.mouseEnabled = true;
			self.north.mouseEnabled = true;
			self.center.mouseEnabled = true;
			self.south.mouseEnabled = true;
			self.lvlEasy.mouseEnabled = true;
			self.lvlMed.mouseEnabled = true;
			self.lvlHard.mouseEnabled = true;
			self.shortTime.mouseEnabled = true;
			self.medTime.mouseEnabled = true;
			self.longTime.mouseEnabled = true;
			mouseTrue();
		}
		
		function odotClick() {
			self.odot.visible = true;
			self.odot.xodot.addEventListener("click", odotx);
			self.odot.linkTELEM.addEventListener("click", openLink);
		}
		
		function odotx() {
			self.odot.visible = false;
			
		}
		
		function openLink() {
			window.open("https://www.hit.ac.il/telem/overview", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// odot
	this.odot = new lib.odot();
	this.odot.name = "odot";
	this.odot.setTransform(641.75,354.9,1.5481,1.5481);

	this.timeline.addTween(cjs.Tween.get(this.odot).wait(1));

	// odotbutt
	this.odotbutt = new lib.odotbutt();
	this.odotbutt.name = "odotbutt";
	this.odotbutt.setTransform(81.6,70.25);
	new cjs.ButtonHelper(this.odotbutt, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.odotbutt).wait(1));

	// akev
	this.infoAkev = new lib.ticket_akev();
	this.infoAkev.name = "infoAkev";
	this.infoAkev.setTransform(1000.45,479.6);

	this.timeline.addTween(cjs.Tween.get(this.infoAkev).wait(1));

	// dirsnid
	this.infoSnid = new lib.ticket_dirsnid();
	this.infoSnid.name = "infoSnid";
	this.infoSnid.setTransform(1000.45,479.6);

	this.timeline.addTween(cjs.Tween.get(this.infoSnid).wait(1));

	// meshushim
	this.infoMeshushim = new lib.ticket_meshushim();
	this.infoMeshushim.name = "infoMeshushim";
	this.infoMeshushim.setTransform(1000.45,479.6);

	this.timeline.addTween(cjs.Tween.get(this.infoMeshushim).wait(1));

	// ramon
	this.infoRamon = new lib.ticket_ramon();
	this.infoRamon.name = "infoRamon";
	this.infoRamon.setTransform(1000.45,479.6);

	this.timeline.addTween(cjs.Tween.get(this.infoRamon).wait(1));

	// shofet
	this.infoShofet = new lib.ticket_shofet();
	this.infoShofet.name = "infoShofet";
	this.infoShofet.setTransform(1000.45,479.6);

	this.timeline.addTween(cjs.Tween.get(this.infoShofet).wait(1));

	// masada
	this.infoMasada = new lib.ticket_masada();
	this.infoMasada.name = "infoMasada";
	this.infoMasada.setTransform(1000.45,479.6);

	this.timeline.addTween(cjs.Tween.get(this.infoMasada).wait(1));

	// turmus
	this.infoTurmus = new lib.ticket_turmus();
	this.infoTurmus.name = "infoTurmus";
	this.infoTurmus.setTransform(1000.45,479.6);

	this.timeline.addTween(cjs.Tween.get(this.infoTurmus).wait(1));

	// dan
	this.infoDan = new lib.ticket_dan();
	this.infoDan.name = "infoDan";
	this.infoDan.setTransform(1000.45,479.6);

	this.timeline.addTween(cjs.Tween.get(this.infoDan).wait(1));

	// yakum
	this.infoYakum = new lib.ticket_yakum();
	this.infoYakum.name = "infoYakum";
	this.infoYakum.setTransform(1000.45,479.6);

	this.timeline.addTween(cjs.Tween.get(this.infoYakum).wait(1));

	// cancel
	this.cancel = new lib.cancel();
	this.cancel.name = "cancel";
	this.cancel.setTransform(1006,307.1);
	new cjs.ButtonHelper(this.cancel, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.cancel).wait(1));

	// bubbles
	this.txtMeshushim = new lib.txtMeshushim();
	this.txtMeshushim.name = "txtMeshushim";
	this.txtMeshushim.setTransform(697.8,298.55);

	this.txtAkev = new lib.txtAkev();
	this.txtAkev.name = "txtAkev";
	this.txtAkev.setTransform(373.15,425.05);

	this.txtDan = new lib.txtDan();
	this.txtDan.name = "txtDan";
	this.txtDan.setTransform(661.5,270.65);

	this.txtMasada = new lib.txtMasada();
	this.txtMasada.name = "txtMasada";
	this.txtMasada.setTransform(470.25,422.05);

	this.txtRamon = new lib.txtRamon();
	this.txtRamon.name = "txtRamon";
	this.txtRamon.setTransform(330.2,459.4);

	this.txtShofet = new lib.txtShofet();
	this.txtShofet.name = "txtShofet";
	this.txtShofet.setTransform(598.15,284.25);

	this.txtSnid = new lib.txtSnid();
	this.txtSnid.name = "txtSnid";
	this.txtSnid.setTransform(429.35,347.75);

	this.txtYakum = new lib.txtYakum();
	this.txtYakum.name = "txtYakum";
	this.txtYakum.setTransform(538.45,293.75);

	this.txtTurmus = new lib.txtTurmus();
	this.txtTurmus.name = "txtTurmus";
	this.txtTurmus.setTransform(545.9,345.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtTurmus},{t:this.txtYakum},{t:this.txtSnid},{t:this.txtShofet},{t:this.txtRamon},{t:this.txtMasada},{t:this.txtDan},{t:this.txtAkev},{t:this.txtMeshushim}]}).wait(1));

	// ramon
	this.ramon = new lib.mapnav();
	this.ramon.name = "ramon";
	this.ramon.setTransform(325.45,503.8);

	this.timeline.addTween(cjs.Tween.get(this.ramon).wait(1));

	// akev
	this.akev = new lib.mapnav();
	this.akev.name = "akev";
	this.akev.setTransform(367.8,469.45);

	this.timeline.addTween(cjs.Tween.get(this.akev).wait(1));

	// dir_snid
	this.dir_snid = new lib.mapnav();
	this.dir_snid.name = "dir_snid";
	this.dir_snid.setTransform(424.6,392.15);

	this.timeline.addTween(cjs.Tween.get(this.dir_snid).wait(1));

	// masada
	this.masada = new lib.mapnav();
	this.masada.name = "masada";
	this.masada.setTransform(471,466.45);

	this.timeline.addTween(cjs.Tween.get(this.masada).wait(1));

	// meshushim
	this.meshushim = new lib.mapnav();
	this.meshushim.name = "meshushim";
	this.meshushim.setTransform(691.85,342.95);

	this.timeline.addTween(cjs.Tween.get(this.meshushim).wait(1));

	// nachal_dan
	this.nachal_dan = new lib.mapnav();
	this.nachal_dan.name = "nachal_dan";
	this.nachal_dan.setTransform(660.15,315.15);

	this.timeline.addTween(cjs.Tween.get(this.nachal_dan).wait(1));

	// shofet
	this.shofet = new lib.mapnav();
	this.shofet.name = "shofet";
	this.shofet.setTransform(593.85,328.65);

	this.timeline.addTween(cjs.Tween.get(this.shofet).wait(1));

	// yakum
	this.yakum = new lib.mapnav();
	this.yakum.name = "yakum";
	this.yakum.setTransform(534.35,338.15);

	this.timeline.addTween(cjs.Tween.get(this.yakum).wait(1));

	// turmus
	this.turmus = new lib.mapnav();
	this.turmus.name = "turmus";
	this.turmus.setTransform(540.55,389.45);

	this.timeline.addTween(cjs.Tween.get(this.turmus).wait(1));

	// text
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(885.75,353.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(358.6,31.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(535.1,42.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// filter_txt
	this.instance_3 = new lib.CachedBmp_19();
	this.instance_3.setTransform(156.1,218.7,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_18();
	this.instance_4.setTransform(227.4,218.7,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_17();
	this.instance_5.setTransform(302.4,218.7,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_16();
	this.instance_6.setTransform(417.65,218.7,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_15();
	this.instance_7.setTransform(498.25,218.7,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_14();
	this.instance_8.setTransform(585.25,218.7,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_13();
	this.instance_9.setTransform(692.65,218.7,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_12();
	this.instance_10.setTransform(762.9,218.7,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_11();
	this.instance_11.setTransform(843.6,218.7,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_10();
	this.instance_12.setTransform(972.75,218.7,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_9();
	this.instance_13.setTransform(198.4,132.7,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_8();
	this.instance_14.setTransform(479.55,132.7,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_7();
	this.instance_15.setTransform(760,132.7,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_6();
	this.instance_16.setTransform(1041.45,132.7,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_5();
	this.instance_17.setTransform(1063.8,218.7,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_4();
	this.instance_18.setTransform(1153.4,218.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// icons
	this.longTime = new lib._long();
	this.longTime.name = "longTime";
	this.longTime.setTransform(169.75,187.65);

	this.medTime = new lib.medtime();
	this.medTime.name = "medTime";
	this.medTime.setTransform(242.2,187.65);

	this.shortTime = new lib._short();
	this.shortTime.name = "shortTime";
	this.shortTime.setTransform(314.6,187.65);

	this.lvlHard = new lib.hard();
	this.lvlHard.name = "lvlHard";
	this.lvlHard.setTransform(431.6,187.65);

	this.lvlMed = new lib.medium();
	this.lvlMed.name = "lvlMed";
	this.lvlMed.setTransform(513.05,187.65);

	this.lvlEasy = new lib.easy();
	this.lvlEasy.name = "lvlEasy";
	this.lvlEasy.setTransform(594.15,187.65);

	this.south = new lib.south();
	this.south.name = "south";
	this.south.setTransform(706.35,187.65);

	this.center = new lib.center();
	this.center.name = "center";
	this.center.setTransform(777.3,187.65);

	this.north = new lib.north();
	this.north.name = "north";
	this.north.setTransform(855.45,187.65);

	this.mountain = new lib.mountain();
	this.mountain.name = "mountain";
	this.mountain.setTransform(986.15,187.65);

	this.flower = new lib.flower();
	this.flower.name = "flower";
	this.flower.setTransform(1082.4,188.05,1,1,0,0,0,1.1,0.4);

	this.water = new lib.water();
	this.water.name = "water";
	this.water.setTransform(1164.1,187.85,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.water},{t:this.flower},{t:this.mountain},{t:this.north},{t:this.center},{t:this.south},{t:this.lvlEasy},{t:this.lvlMed},{t:this.lvlHard},{t:this.shortTime},{t:this.medTime},{t:this.longTime}]}).wait(1));

	// icons_copy
	this.longTime2 = new lib._long();
	this.longTime2.name = "longTime2";
	this.longTime2.setTransform(169.75,187.65);

	this.medTime2 = new lib.medtime();
	this.medTime2.name = "medTime2";
	this.medTime2.setTransform(242.2,187.65);

	this.shortTime2 = new lib._short();
	this.shortTime2.name = "shortTime2";
	this.shortTime2.setTransform(314.6,187.65);

	this.lvlHard2 = new lib.hard();
	this.lvlHard2.name = "lvlHard2";
	this.lvlHard2.setTransform(431.6,187.65);

	this.lvlMed2 = new lib.medium();
	this.lvlMed2.name = "lvlMed2";
	this.lvlMed2.setTransform(513.05,187.65);

	this.lvlEasy2 = new lib.easy();
	this.lvlEasy2.name = "lvlEasy2";
	this.lvlEasy2.setTransform(594.15,187.65);

	this.south2 = new lib.south();
	this.south2.name = "south2";
	this.south2.setTransform(706.35,187.65);

	this.center2 = new lib.center();
	this.center2.name = "center2";
	this.center2.setTransform(777.3,187.65);

	this.north2 = new lib.north();
	this.north2.name = "north2";
	this.north2.setTransform(855.45,187.65);

	this.mountain2 = new lib.mountain();
	this.mountain2.name = "mountain2";
	this.mountain2.setTransform(986.15,187.65);

	this.flower2 = new lib.flower();
	this.flower2.name = "flower2";
	this.flower2.setTransform(1082.4,188.05,1,1,0,0,0,1.1,0.4);

	this.water2 = new lib.water();
	this.water2.name = "water2";
	this.water2.setTransform(1164.1,187.85,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.water2},{t:this.flower2},{t:this.mountain2},{t:this.north2},{t:this.center2},{t:this.south2},{t:this.lvlEasy2},{t:this.lvlMed2},{t:this.lvlHard2},{t:this.shortTime2},{t:this.medTime2},{t:this.longTime2}]}).wait(1));

	// map
	this.instance_19 = new lib.Group();
	this.instance_19.setTransform(225,303);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(649.2,376.7,630.7,485.7);
// library properties:
lib.properties = {
	id: '1DD2D14E38F8FF48ACC1981DE713FC6B',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/tzabaryfilter_atlas_1.png?1654340518026", id:"tzabaryfilter_atlas_1"},
		{src:"images/tzabaryfilter_atlas_2.png?1654340518026", id:"tzabaryfilter_atlas_2"},
		{src:"images/tzabaryfilter_atlas_3.png?1654340518026", id:"tzabaryfilter_atlas_3"},
		{src:"images/tzabaryfilter_atlas_4.png?1654340518027", id:"tzabaryfilter_atlas_4"},
		{src:"images/tzabaryfilter_atlas_5.png?1654340518029", id:"tzabaryfilter_atlas_5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1DD2D14E38F8FF48ACC1981DE713FC6B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;