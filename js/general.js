
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




let aTags = [];

document.querySelectorAll('a').forEach(item=>{
    aTags.push(item);
})




for(let i=0;i<aTags.length;i++){
    if(aTags[i].href != '#' && aTags[i].getAttribute('href')){
        aTags[i].setAttribute('target','_blank');
    }
}




























