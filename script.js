document.querySelector("#ti-user").addEventListener("click", function () {
  document.querySelector("#bod-cont").style.transform = "scale(0.98)";
  document.querySelector("#bod-cont").style.marginTop = "0px";
  document.querySelector("#bod-cont").style.opacity = "0.5";
  document.querySelector("#user-s").style.display = "block";
  document.querySelector("#user-s").style.height = "220px";
  document.querySelector(".tabbar").style.display = "none";
  document.querySelector("#overlay").style.display = "block";
}); 

document.getElementById("user-s").addEventListener("swiped-down", function(e) {
    document.querySelector("#user-s").style.height = "0px";
  document.querySelector("#user-s").style.display = "none";
  document.querySelector("#bod-cont").style = "null";
  document.querySelector(".tabbar").style = "null";
  document.querySelector(".s-h").style = "null";
  document.querySelector("#overlay").style.display = "none";
});

document.querySelector("#streak-add-t").addEventListener("click", function () {
  document.querySelector("#bod-cont").style.transform = "scale(0.98)";
  document.querySelector("#bod-cont").style.marginTop = "0px";
  document.querySelector("#bod-cont").style.opacity = "0.5";
  document.querySelector("#add-s").style.display = "block";
  document.querySelector("#add-s").style.height = "auto";
  document.querySelector(".tabbar").style.display = "none";
  document.querySelector("#overlay").style.display = "block";
}); 

document.getElementById("add-s").addEventListener("swiped-down", function(e) {
    document.querySelector("#add-s").style.height = "0px";
  document.querySelector("#add-s").style.display = "none";
  document.querySelector("#bod-cont").style = "null";
  document.querySelector(".tabbar").style = "null";
  document.querySelector(".s-h").style = "null";
  document.querySelector("#overlay").style.display = "none";
});

document.querySelector("#add-s-c").addEventListener("click", function () {
  document.querySelector("#add-s").style.height = "0px";
  document.querySelector("#add-s").style.display = "none";
  document.querySelector("#bod-cont").style = "null";
  document.querySelector(".tabbar").style = "null";
  document.querySelector(".s-h").style = "null";
  document.querySelector("#overlay").style.display = "none";
}); 

document.getElementById("streak-s-c").addEventListener("click", function() {
  document.querySelector("#add-s").style.height = "0px";
  document.querySelector("#add-s").style.display = "none";
  document.querySelector("#bod-cont").style = "null";
  document.querySelector(".tabbar").style = "null";
  document.querySelector(".s-h").style = "null";
  document.querySelector("#overlay").style.display = "none";
  emojisplosion();
});

document.querySelector("#settings-s-t").addEventListener("click", function () {
  document.querySelector("#bod-cont").style.display = "none";
  document.querySelector("#user-s").style.height = "calc(100% - 25px)";
  document.querySelector("#user-s").style.width = "calc(100% - 30px)";
  document.querySelector("#settings-s").style.display = "block";
  document.querySelector("#overlay").style.display = "block";
  document.querySelector("#overlay-2").style.display = "block";
});

document.querySelector("#edit-t").addEventListener("click", function () {
  document.querySelector("#bod-cont").style.display = "none";
  document.querySelector("#user-s").style.height = "calc(100% - 25px)";
  document.querySelector("#user-s").style.width = "calc(100% - 30px)";
  document.querySelector("#settings-s").style.display = "block";
  document.querySelector("#overlay").style.display = "block";
  document.querySelector("#overlay-2").style.display = "block";
});

document.getElementById("settings-s").addEventListener("swiped-up", function(e) {
    document.querySelector("#s-s-h").style.background = "#22222280";
});

document.getElementById("settings-s").addEventListener("swiped-down", function(e) {
    document.querySelector("#s-s-h").style.background = "#111111";
});

document.getElementById("s-s-h").addEventListener("swiped-down", function(e) {
  document.querySelector("#settings-s").style.display = "none";
  document.querySelector("#bod-cont").style.display = "block";
  document.querySelector("#bod-cont").style.transform = "scale(0.98)";
  document.querySelector("#bod-cont").style.marginTop = "0px";
  document.querySelector("#bod-cont").style.opacity = "0.5";
  document.querySelector(".s-h").style = "null";
  document.querySelector("#user-s").style.width = "initial";
  document.querySelector("#user-s").style.height = "initial";
  document.querySelector("#overlay-2").style.display = "none";
});

document.querySelector("#overlay").addEventListener("click", function () {
  document.querySelector("#user-s").style.height = "0px";
  document.querySelector("#user-s").style.display = "none";
  document.querySelector("#add-s").style.height = "0px";
  document.querySelector("#add-s").style.display = "none";
  document.querySelector("#bod-cont").style = "null";
  document.querySelector(".tabbar").style = "null";
  document.querySelector(".s-h").style = "null";
  document.querySelector("#overlay").style.display = "none";
}); 

document.querySelector("#overlay-2").addEventListener("click", function () {
  document.querySelector("#settings-s").style.display = "none";
  document.querySelector("#bod-cont").style.display = "block";
  document.querySelector("#bod-cont").style.transform = "scale(0.98)";
  document.querySelector("#bod-cont").style.marginTop = "0px";
  document.querySelector("#bod-cont").style.opacity = "0.5";
  document.querySelector(".s-h").style = "null";
  document.querySelector("#user-s").style.width = "initial";
  document.querySelector("#user-s").style.height = "initial";
  document.querySelector("#overlay-2").style.display = "none";
  document.querySelector("#overlay").style.display = "block";
});

document.querySelector("#user-s-c").addEventListener("click", function () {
  document.querySelector("#user-s").style.height = "0px";
  document.querySelector("#user-s").style.display = "none";
  document.querySelector("#bod-cont").style = "null";
  document.querySelector(".tabbar").style = "null";
  document.querySelector(".s-h").style = "null";
  document.querySelector("#overlay").style.display = "none";
}); 

document.querySelector("#appic-s-t").addEventListener("click", function () {
  document.querySelector("#appic-s").style.display = "block";
}); 

document.getElementById("appic-s").addEventListener("swiped-right", function(e) {
    document.querySelector("#appic-s").style.display = "none";
});

document.querySelector("#appic-s-c").addEventListener("click", function () {
  document.querySelector("#appic-s").style.display = "none";
});

document.querySelector("#lang-s-t").addEventListener("click", function () {
  document.querySelector("#lang-s").style.display = "block";
}); 

document.getElementById("lang-s").addEventListener("swiped-right", function(e) {
    document.querySelector("#lang-s").style.display = "none";
});

document.querySelector("#lang-s-c").addEventListener("click", function () {
  document.querySelector("#lang-s").style.display = "none";
});

document.querySelector("#danger-s-t").addEventListener("click", function () {
  document.querySelector("#danger-s").style.display = "block";
}); 

document.getElementById("danger-s").addEventListener("swiped-right", function(e) {
    document.querySelector("#danger-s").style.display = "none";
});

document.querySelector("#danger-s-c").addEventListener("click", function () {
  document.querySelector("#danger-s").style.display = "none";
}); 

document.querySelector("#ti-laugh").addEventListener("click", function () {
  document.querySelector("#laugh-sel").style.display = "block";
  document.querySelector("#laugh-no").style.display = "none";
  document.querySelector("#streak-sel").style.display = "none";
  document.querySelector("#streak-no").style.display = "block";
  document.querySelector("#laugh-sel").style.left = "-1px";
  document.querySelector("#laugh-no").style.left = "-1px";
  document.querySelector("#streak-sel").style.left = "-1px";
  document.querySelector("#streak-no").style.left = "-1px";
  document.querySelector("#ti-l-t").style.fontWeight = "600";
  document.querySelector("#ti-s-t").style.fontWeight = "";
  document.querySelector("#ti-l-t").style.top = "-18px";
  document.querySelector("#ti-s-t").style.top = "-18px";
  document.querySelector("#ti-m-t").style.top = "-18px";
  document.querySelector("#user-s-t").style.top = "-12px";
  document.querySelector("#max-title-laugh").style.display = "block";
  document.querySelector("#max-title-streak").style.display = "none";
  document.querySelector("#laugh-t").style.display = "block";
  document.querySelector("#streak-t").style.display = "none";
  document.querySelector("#streak-add-t").style.display = "none";
});

document.getElementById("laugh-t").addEventListener("swiped-down", function(e) {
    laughAttempts();
    puns();
});

document.querySelector("#ti-streak").addEventListener("click", function () {
  document.querySelector("#laugh-sel").style.display = "none";
  document.querySelector("#laugh-no").style.display = "block";
  document.querySelector("#streak-sel").style.display = "block";
  document.querySelector("#streak-no").style.display = "none";
  document.querySelector("#laugh-sel").style.left = "-1px";
  document.querySelector("#laugh-no").style.left = "-1px";
  document.querySelector("#streak-sel").style.left = "-1px";
  document.querySelector("#streak-no").style.left = "-1px";
  document.querySelector("#ti-l-t").style.fontWeight = "";
  document.querySelector("#ti-s-t").style.fontWeight = "600";
  document.querySelector("#ti-l-t").style.top = "-18px";
  document.querySelector("#ti-s-t").style.top = "-18px";
  document.querySelector("#ti-m-t").style.top = "-18px";
  document.querySelector("#user-s-t").style.top = "-12px";
  document.querySelector("#max-title-laugh").style.display = "none";
  document.querySelector("#max-title-streak").style.display = "block";
  document.querySelector("#laugh-t").style.display = "none";
  document.querySelector("#streak-t").style.display = "block";
  document.querySelector("#streak-add-t").style.display = "block";
});

document.querySelector("#laugh-s-c").addEventListener("click", function () {
  document.querySelector("#laugh-sel").style.display = "none";
  document.querySelector("#laugh-no").style.display = "block";
  document.querySelector("#streak-sel").style.display = "block";
  document.querySelector("#streak-no").style.display = "none";
  document.querySelector("#laugh-sel").style.left = "-1px";
  document.querySelector("#laugh-no").style.left = "-1px";
  document.querySelector("#streak-sel").style.left = "-1px";
  document.querySelector("#streak-no").style.left = "-1px";
  document.querySelector("#ti-l-t").style.fontWeight = "";
  document.querySelector("#ti-s-t").style.fontWeight = "600";
  document.querySelector("#ti-l-t").style.top = "-18px";
  document.querySelector("#ti-s-t").style.top = "-18px";
  document.querySelector("#ti-m-t").style.top = "-18px";
  document.querySelector("#user-s-t").style.top = "-12px";
  document.querySelector("#max-title-laugh").style.display = "none";
  document.querySelector("#max-title-streak").style.display = "block";
  document.querySelector("#laugh-t").style.display = "none";
  document.querySelector("#streak-t").style.display = "block";
  document.querySelector("#streak-add-t").style.display = "block";
  emojisplosion();
});

document.querySelector("#streak-s-i").addEventListener("click", function () {
  document.querySelector("#laugh-sel").style.display = "none";
  document.querySelector("#laugh-no").style.display = "block";
  document.querySelector("#streak-sel").style.display = "block";
  document.querySelector("#streak-no").style.display = "none";
  document.querySelector("#laugh-sel").style.left = "-1px";
  document.querySelector("#laugh-no").style.left = "-1px";
  document.querySelector("#streak-sel").style.left = "-1px";
  document.querySelector("#streak-no").style.left = "-1px";
  document.querySelector("#ti-l-t").style.fontWeight = "";
  document.querySelector("#ti-s-t").style.fontWeight = "600";
  document.querySelector("#ti-l-t").style.top = "-18px";
  document.querySelector("#ti-s-t").style.top = "-18px";
  document.querySelector("#ti-m-t").style.top = "-18px";
  document.querySelector("#user-s-t").style.top = "-12px";
  document.querySelector("#max-title-laugh").style.display = "none";
  document.querySelector("#max-title-streak").style.display = "block";
  document.querySelector("#laugh-t").style.display = "none";
  document.querySelector("#streak-t").style.display = "block";
  document.querySelector("#settings-s").style.display = "none";
  document.querySelector("#overlay").style.display = "none";
  document.querySelector("#overlay-2").style.display = "none";
  document.querySelector("#user-s").style.width = "initial";
  document.querySelector("#user-s").style.height = "initial";
  document.querySelector("#user-s").style.display = "none";
  document.querySelector("#bod-cont").style = "null";
  document.querySelector(".tabbar").style = "null";
});

document.querySelector("#name-i-s").addEventListener("click", function () {
  document.querySelector("#i-cont").style.border = "solid 1.4px #FFFFFF";
}); 

function unfocus() {
  document.querySelector("#i-cont").style.border = "solid 1.4px #FFFFFF20";
  document.querySelector("#i-cont-o").style.border = "solid 1.4px #FFFFFF20";
}

const shareData = {
  title: "LaughNow",
  text: "The point is to make you laugh",
  url: document.location.href,
};

const btn = document.querySelector("#share-i");

btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (err) {
  }
});

function userp() {
  var x = localStorage.getItem("userp");
  document.getElementById("user-s-t").src = x;
  document.getElementById("user-prev").src = x;
  document.getElementById("user-edit").src = x;
}

function setname() {
  var n = document.getElementById("name-i-s").value;
  localStorage.setItem("username", n);
  document.getElementById("name-prev").innerHTML = n;
}

function setnO() {
  var nO = document.getElementById("name-i-o").value;
  localStorage.setItem("username", nO);
  document.getElementById("name-prev").innerHTML = nO;
  document.getElementById("o-name").innerHTML = nO;
}

function usern() {
  var na = localStorage.getItem("username");
  document.getElementById("name-prev").innerHTML = na;
  document.getElementById("name-i-s").value = na;
}

function laat() {
  var attemptcount = localStorage.getItem("attcount");
  document.getElementById("la-track-2").innerHTML = attemptcount;
document.getElementById("la-track-1").innerHTML = attemptcount;
}

function stat() {
  var streak = localStorage.getItem("laughstreak");
  document.getElementById("streak-track-1").innerHTML = streak;
    document.getElementById("streak-track-2").innerHTML = streak;
    document.getElementById("streak-track-3").innerHTML = streak;
  document.getElementById("streak-track-4").innerHTML = streak;
}

function laughAttempts() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.attcount) {
      localStorage.attcount = Number(localStorage.attcount)+1;
    } else {
      localStorage.attcount = 1;
    }
    document.getElementById("la-track-1").innerHTML = localStorage.attcount;
    document.getElementById("la-track-2").innerHTML = localStorage.attcount;
  } else {
    document.getElementById("la-track-1").innerHTML = localStorage.attcount;
    document.getElementById("la-track-2").innerHTML = localStorage.attcount;
  }
}

function streak() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.laughstreak) {
      localStorage.laughstreak = Number(localStorage.laughstreak)+1;
    } else {
      localStorage.laughstreak = 1;
    }
    document.getElementById("streak-track-1").innerHTML = localStorage.laughstreak;
    document.getElementById("streak-track-2").innerHTML = localStorage.laughstreak;
    document.getElementById("streak-track-3").innerHTML = localStorage.laughstreak;
    document.getElementById("streak-track-4").innerHTML = localStorage.laughstreak;
  } else {
    document.getElementById("streak-track-1").innerHTML = localStorage.laughstreak;
    document.getElementById("streak-track-2").innerHTML = localStorage.laughstreak;
    document.getElementById("streak-track-3").innerHTML = localStorage.laughstreak;
    document.getElementById("streak-track-4").innerHTML = localStorage.laughstreak;
  }
}

document.querySelector("#attcount-d").addEventListener("click", function () {
  localStorage.removeItem("attcount");
  document.getElementById("la-track-2").innerHTML = "0";
}); 

document.querySelector("#data-d").addEventListener("click", function () {
  localStorage.clear();
  window.location.reload();
});

document.querySelector("#lang-o-m").addEventListener("click", function () {
  document.querySelector("#o-m").style.display = "block";
  document.querySelector("#o-m").className = "m emerge";
  document.querySelector("#overlay-o").style.display = "block";
}); 

document.querySelector("#overlay-o").addEventListener("click", function () {
  document.querySelector("#o-m").className = "m immerse";
  document.querySelector("#overlay-o").style.display = "none";
});

document.querySelector("#name-i-o").addEventListener("click", function () {
  document.querySelector("#i-cont-o").style.border = "solid 1.4px #FFFFFF";
}); 

document.querySelector("#cont-o-1").addEventListener("click", function () {
  document.querySelector("#o-1").style.display = "none";
  document.querySelector("#o-2").style.display = "block";
}); 

document.querySelector("#cont-o-2").addEventListener("click", function () {
  document.querySelector("#o-2").style.display = "none";
  document.querySelector("#onboarding").style.display = "none";
}); 

if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.querySelector("#ath").src = "https://cdn.laughnow.app/mobile/o_ath_ios.mp4";
  document.querySelector("#ath-o").display = "block";
}
else if (/android/i.test(navigator.userAgent)) {
      document.querySelector("#ath").src = "https://cdn.laughnow.app/mobile/o_ath_android.mp4";
  document.querySelector("#ath-o").display = "block";  
}
else {
  document.querySelector("#ath-o").display = "none"; 
}

document.querySelector("#lang-g-t").addEventListener("click", function () {
  document.querySelector("#lang-g").style.display = "block";
  document.querySelector("#landing-o").style.display = "block";
}); 

document.querySelector("#landing-o").addEventListener("click", function () {
  document.querySelector("#lang-g").style.display = "none";
  document.querySelector("#landing-o").style.display = "none";
});

function laughjs() {
  var src = localStorage.getItem("laughjs");
  document.getElementById("laughscript").src = src;
}

document.querySelector("#lang-en").addEventListener("click", function () {
  localStorage.setItem("laughscript", "laugh.js");
  document.getElementById("laughscript").src = "laugh.js";
});

document.querySelector("#lang-ca").addEventListener("click", function () {
  localStorage.setItem("laughscript", "https://cdn.laughnow.app/src/laugh-ca.js");
  document.getElementById("laughscript").src = "https://cdn.laughnow.app/src/laugh-ca.js";
});

document.querySelector("#lang-da").addEventListener("click", function () {
  localStorage.setItem("laughscript", "https://cdn.laughnow.app/src/laugh-da.js");
  document.getElementById("laughscript").src = "https://cdn.laughnow.app/src/laugh-da.js";
});

document.querySelector("#lang-de").addEventListener("click", function () {
  localStorage.setItem("laughscript", "https://cdn.laughnow.app/src/laugh-de.js");
  document.getElementById("laughscript").src = "https://cdn.laughnow.app/src/laugh-de.js";
});

document.querySelector("#lang-es").addEventListener("click", function () {
  localStorage.setItem("laughscript", "https://cdn.laughnow.app/src/laugh-es.js");
  document.getElementById("laughscript").src = "https://cdn.laughnow.app/src/laugh-es.js";
});

document.querySelector("#lang-fr").addEventListener("click", function () {
  localStorage.setItem("laughscript", "https://cdn.laughnow.app/src/laugh-fr.js");
  document.getElementById("laughscript").src = "https://cdn.laughnow.app/src/laugh-fr.js";
});

document.querySelector("#lang-it").addEventListener("click", function () {
  localStorage.setItem("laughscript", "https://cdn.laughnow.app/src/laugh-it.js");
  document.getElementById("laughscript").src = "https://cdn.laughnow.app/src/laugh-it.js";
});

document.querySelector("#lang-nl").addEventListener("click", function () {
  localStorage.setItem("laughscript", "https://cdn.laughnow.app/src/laugh-nl.js");
  document.getElementById("laughscript").src = "https://cdn.laughnow.app/src/laugh-nl.js";
});

document.querySelector("#lang-nb").addEventListener("click", function () {
  localStorage.setItem("laughscript", "https://cdn.laughnow.app/src/laugh-nb.js");
  document.getElementById("laughscript").src = "https://cdn.laughnow.app/src/laugh-nb.js";
});

document.querySelector("#lang-pt").addEventListener("click", function () {
  localStorage.setItem("laughscript", "https://cdn.laughnow.app/src/laugh-pt.js");
  document.getElementById("laughscript").src = "https://cdn.laughnow.app/src/laugh-pt.js";
});

document.querySelector("#lang-sv").addEventListener("click", function () {
  localStorage.setItem("laughscript", "https://cdn.laughnow.app/src/laugh-sv.js");
  document.getElementById("laughscript").src = "https://cdn.laughnow.app/src/laugh-sv.js";
});

var textarea = document.getElementById("textarea");
var limit = 80;
textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, limit) + "px";
};

function sharetext() {
  var text = document.getElementById("textarea").value;
    document.getElementById("sharetext").value = text;
}

const btn2 = document.querySelector("#share-t");

btn2.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: localStorage.getItem("username") + " on LaughNow: " + document.getElementById("sharetext").value,
      url: document.location.href
    }).then(() => {
      console.log('');
    })
    .catch(console.error);
  } else {
  }
});

var input = document.querySelector("#pic-up");

      input.addEventListener("change", preview);
      function preview() {
        var fileObject = this.files[0];
        var fileReader = new FileReader();
        fileReader.readAsDataURL(fileObject);
        fileReader.onload = function () {
          var result = fileReader.result;
          var img = document.querySelector("#user-s-t");
          var img2 = document.querySelector("#user-prev");
          var img3 = document.querySelector("#user-edit");
          img.src = result;
          img2.src = result;
          img3.src = result;
          localStorage.setItem("userp", result);
        };
      }

 var onboardpic = document.querySelector("#pic-up-o");

      onboardpic.addEventListener("change", preview2);
      function preview2() {
        var fileObject2 = this.files[0];
        var fileReader2 = new FileReader();
        fileReader2.readAsDataURL(fileObject2);
        fileReader2.onload = function () {
          var oresult = fileReader2.result;
          var imgone = document.querySelector("#user-s-t");
          var imgtwo = document.querySelector("#user-prev");
          var imgthree = document.querySelector("#user-edit");
          var oimg = document.querySelector("#user-o");
          var imgme = document.querySelector("#img-me");
          imgone.src = oresult;
          imgtwo.src = oresult;
          imgthree.src = oresult;
          oimg.src = oresult;
          imgme.src = oresult;
          localStorage.setItem("userp", oresult);
        };
      }

$( document ).ready(function() {
             if (localStorage.getItem("pageloadcount")) { $("#onboarding").hide();
$("#ath-o").hide();      
         } 
             localStorage.setItem("pageloadcount", "1");
         });
