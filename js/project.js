// header
document.querySelectorAll('header nav .links a').forEach(item=>{
    item.onmousemove = function (e) {

        switch(e.target.innerText){
                case 'Projects':
                    document.querySelector('header nav')
                    .style
                    .cssText = "background-image: url('assets/images/loader1.jpg');background-size:cover;background-position:center;background-repeat: no-repeat;height: 100vh;bottom: 0;";
                    break;
                case 'About me':
                    document.querySelector('header nav')
                    .style
                    .cssText = "background-image: url('assets/images/loader-about.jpg');background-size:cover;background-position:center;background-repeat: no-repeat;height: 100vh;bottom: 0;";
                    break;
                default:
                    document.querySelector('header nav')
                    .style
                    .cssText = "background-image: url('assets/images/loader-contact.jpg');background-size:cover;background-position:center;background-repeat: no-repeat;height: 100vh;bottom: 0;";
                    break;
        }

    }
    item.onmouseleave = () => {
        document.querySelector('header nav').style.backgroundImage = '';
    }
})

// header bar close and open
document.getElementById('navbar-toggler-icon').onclick = function () {

    document.querySelector('header nav .links').style.opacity = '1';
    
    document.querySelector('header nav').classList.toggle('show');

    document.querySelector('header nav .links').classList.add('animate__animated');
    document.querySelector('header nav .links').classList.add('animate__bounceInDown');

    if(document.querySelector('header nav').classList.contains('show')){
        document.querySelector('header nav').style.cssText = "height: 100vh;bottom: 0;";
    } else {
        document.querySelector('header nav').style.cssText = "height: 0;top: 0;";
    }

    
    if(document.querySelector('header nav').classList.contains('show')){
        document.querySelector('header .logo svg path').style.cssText = "fill: darkgrey !important;";
        document.querySelectorAll('header .logo p').forEach(item=>{
            item.style.cssText = "color: darkgrey !important;";
        })
    
        document.querySelector('header .logo').onmousemove = function () {
            document.querySelectorAll('header .logo p').forEach(item=>{
                item.style.cssText = "color: #fff !important;";
            })    
            document.querySelector('header .logo svg path').style.cssText = "fill: #fff !important;";
        }
        document.querySelector('header .logo').onmouseleave = function () {
            document.querySelectorAll('header .logo p').forEach(item=>{
                item.style.cssText = "color: darkgrey !important;";
            })    
            document.querySelector('header .logo svg path').style.cssText = "fill: darkgrey !important;";
        }
    
    } else {

    }
}

document.querySelector('header nav').onclick = function () {
    document.querySelector('header nav .links').classList.remove('animate__animated');
    document.querySelector('header nav .links').classList.remove('animate__bounceInDown');
    document.querySelector('header nav .links').style.opacity = '0';
    document.querySelector('header nav').classList.toggle('show');
    document.querySelector('header .logo svg path').style.cssText = "fill: black !important;";
    document.querySelectorAll('header .logo p').forEach(item=>{
        item.style.cssText = "color: black !important;";
    })
    if(document.querySelector('header nav').classList.contains('show')){
        document.querySelector('header nav').style.cssText = "height: 100vh;bottom: 0;";
    } else {
        document.querySelector('header nav').style.cssText = "height: 0;top: 0;";
    }
    if(document.querySelector('header nav').classList.contains('show')){
        document.querySelector('header .logo svg path').style.cssText = "fill: darkgrey !important;";
        document.querySelectorAll('header .logo p').forEach(item=>{
            item.style.cssText = "color: darkgrey !important;";
        })
    
        document.querySelector('header .logo').onmousemove = function () {
            document.querySelectorAll('header .logo p').forEach(item=>{
                item.style.cssText = "color: #fff !important;";
            })    
            document.querySelector('header .logo svg path').style.cssText = "fill: #fff !important;";
        }
        document.querySelector('header .logo').onmouseleave = function () {
            document.querySelectorAll('header .logo p').forEach(item=>{
                item.style.cssText = "color: darkgrey !important;";
            })    
            document.querySelector('header .logo svg path').style.cssText = "fill: darkgrey !important;";
        }
    
    } else {
        document.querySelector('header .logo').onmousemove = function () {
            document.querySelectorAll('header .logo p').forEach(item=>{
                item.style.cssText = "color: darkgrey !important;";
            })    
            document.querySelector('header .logo svg path').style.cssText = "fill: darkgrey !important;";
        }
        document.querySelector('header .logo').onmouseleave = function () {
            document.querySelectorAll('header .logo p').forEach(item=>{
                item.style.cssText = "color: black !important;";
            })    
            document.querySelector('header .logo svg path').style.cssText = "fill: black !important;";
        }
    }
}

// scroll top
window.onscroll = function () {
    if(window.scrollY >= 700){
        document.querySelector('#scroll-top').style.display = 'flex';
        if(document.querySelector('#scroll-top').style.display == 'flex'){
            document.querySelector('#scroll-top').classList.add('animate__zoomIn');
            document.querySelector('#scroll-top').classList.remove('animate__zoomOutDown');
        } 
    } else {
        document.querySelector('#scroll-top').classList.remove('animate__zoomIn');
        document.querySelector('#scroll-top').classList.add('animate__zoomOutDown');
    }
}

// scroll to top
document.querySelector('#scroll-top').onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}


window.onload = function () {
    setTimeout(function(){
        document.querySelector('.loader-window').classList.remove('show');
    })
}



























