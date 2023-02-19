const menuHome = document.querySelector('#menu-home');
const menuSchedule = document.querySelector('#menu-schedule');
const tabHome = document.querySelector('#tab-home');
const tabSchedule = document.querySelector('#tab-schedule');
menuHome.addEventListener('click', () => {
    openTab("tab-home");
});
menuSchedule.addEventListener('click', () => {
    openTab("tab-schedule");
});


function openTab(tabName){
    var tabcontent=document.getElementsByClassName("tab-content");
    for (var i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

document.getElementById("tab-home").click();