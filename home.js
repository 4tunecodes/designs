document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn1-2').addEventListener('click', ()=>{
        document.querySelector('.container').classList.add("signup-mode");
        /*document.querySelector('.leftpanel').style.height = "0%";
        document.querySelector('.rightpanel').style.height = "20%";*/
        document.querySelector('.leftpanel').style.width = "0%";
        document.querySelector('.rightpanel').style.width = "50%";
        document.querySelector('.leftpanel').style.zIndex = "1";
        document.querySelector('.rightpanel').style.zIndex = "7";
        document.querySelector('.leftpanel').style.opacity = "0";
        document.querySelector('.rightpanel').style.opacity = "1";
        document.getElementById('login-form').style.width = "0%";
        document.getElementById('register-form').style.width = "100%";
    })

    document.getElementById('btn2-2').addEventListener('click', ()=>{
        document.querySelector('.container').classList.remove("signup-mode");
        /*document.querySelector('.leftpanel').style.height = "20%";
        document.querySelector('.rightpanel').style.height = "0%";*/
        document.querySelector('.leftpanel').style.width = "50%";
        document.querySelector('.rightpanel').style.width = "0%";
        document.getElementById('login-form').style.width = "100%";
        document.getElementById('register-form').style.width = "0%";
        document.querySelector('.leftpanel').style.zIndex = "7";
        document.querySelector('.rightpanel').style.zIndex = "1";
        document.querySelector('.leftpanel').style.opacity = "1";
        document.querySelector('.rightpanel').style.opacity = "0";
    })

/*
    document.getElementById('opensidenav').addEventListener('click', ()=>{
        document.getElementById('sidenav').style.width = "230px";
        
    })

    document.getElementById('closesidenav').addEventListener('click', ()=>{
        document.getElementById('sidenav').style.width = "0px";
        
    })*/
})