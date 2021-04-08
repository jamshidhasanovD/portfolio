
document.querySelector('header nav .links').children[1].href = 'index.html';


document.querySelector('.loader-window p').classList.add('animate__animated')

setInterval(function(){
    if(document.querySelector('.loader-window').classList.contains('show')){
        document.querySelector('.loader-window p').classList.add('animate__backInUp')
        document.querySelector('.loader-window p').classList.remove('animate__backOutUp')
    } else{
        document.querySelector('.loader-window p').classList.remove('animate__backInUp')
        document.querySelector('.loader-window p').classList.add('animate__backOutUp')
    }
})



document.getElementById('lets-talk-section').children[1].href = 'contact.html';
































