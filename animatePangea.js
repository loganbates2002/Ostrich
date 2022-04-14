var slider = document.getElementById('sliderRange');
 
var frame001 = document.getElementById("frame001");
var frame002 = document.getElementById("frame002");
var frame003 = document.getElementById("frame003");
var frame004 = document.getElementById("frame004");
var frame005 = document.getElementById("frame005");
var frame006 = document.getElementById("frame006");
var frame007 = document.getElementById("frame007");
var frame008 = document.getElementById("frame008");
var frame009 = document.getElementById("frame009");
var frame010 = document.getElementById("frame010");
var frame011 = document.getElementById("frame011");
var frame012 = document.getElementById("frame012");
var frame013 = document.getElementById("frame013");
var frame014 = document.getElementById("frame014");
var frame015 = document.getElementById("frame015");
var frame016 = document.getElementById("frame016");
var frame017 = document.getElementById("frame017");
var frame018 = document.getElementById("frame018");
var frame019 = document.getElementById("frame019");
var frame020 = document.getElementById("frame020");
var frame021 = document.getElementById("frame021");
var frame022 = document.getElementById("frame022");
var frame023 = document.getElementById("frame023");
var frame024 = document.getElementById("frame024");
var frame025 = document.getElementById("frame025");
var frame026 = document.getElementById("frame026");
var frame027 = document.getElementById("frame027");
var frame028 = document.getElementById("frame028");
var frame029 = document.getElementById("frame029");
var frame030 = document.getElementById("frame030");
var frame031 = document.getElementById("frame031");
var frame032 = document.getElementById("frame032");
var frame033 = document.getElementById("frame033");
var frame034 = document.getElementById("frame034");
var frame035 = document.getElementById("frame035");
var frame036 = document.getElementById("frame036");
var frame037 = document.getElementById("frame037");
 
const frameList = [frame001, frame002, frame003, frame004, frame005, frame006, frame007, frame008, frame009, frame010, frame011, frame012, frame013, frame014, frame015, frame016, frame017, frame018, frame019, frame020, frame021, frame022, frame023, frame024, frame025, frame026, frame027, frame028, frame029, frame030, frame031, frame032, frame033, frame034, frame035, frame036, frame037];

slider.oninput = function(){
    frameList[this.value-1].classList.remove("hidden");
    for(var i = 0; i < frameList.length; i++){
        if(i != this.value-1){
            frameList[i].classList.add("hidden");
        }
    }
    console.log(this.value);
 }