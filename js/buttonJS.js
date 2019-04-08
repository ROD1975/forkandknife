var btnInfo1 = document.querySelector('.btn-info');
var infoTxt1 = document.querySelector('.header-left-content1');


    function moveIn() {
        infoTxt1.classList.add('info-txt-animation');
        
    }
    btnInfo1.addEventListener('mouseover', moveIn);

    function moveOut() {
        infoTxt1.classList.remove('info-txt-animation');
        
    }
    btnInfo1.addEventListener('mouseout', moveOut);