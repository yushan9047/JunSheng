let currentLang = "zh";

function toggleLanguage(){

const select = document.querySelector(".goog-te-combo");

if(!select) return;

if(currentLang === "zh"){

select.value = "en";
document.getElementById("lang-btn").innerText = "中文";
currentLang = "en";

}else{

select.value = "zh-TW";
document.getElementById("lang-btn").innerText = "EN";
currentLang = "zh";

}

select.dispatchEvent(new Event("change"));

}