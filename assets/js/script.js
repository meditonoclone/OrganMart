var iconNav = document.querySelector('.nav-icon');
var nav = document.querySelector('.nav-list');
var iconNavFlag = 0;
iconNav.addEventListener('click', openCloseNav);
function openCloseNav(){
    if(iconNavFlag === 0)
    {
        nav.classList.add('flex-on-mobile');
        iconNavFlag = 1;
    }else
    {
        nav.classList.remove('flex-on-mobile')
        iconNavFlag = 0;
    }
}

var navItemsHaveSub = 
[...document.querySelectorAll('.nav-item')].filter(item => item.querySelector('.sub-nav'));
var isOpening = null;
var flagSub = 0;
navItemsHaveSub.forEach(element => {
    element.addEventListener('click', openCloseSub);
})
function openCloseSub(){
    if(isOpening == null)
    {
        this.querySelector('a').classList.toggle('is-open');
        this.querySelector('a > i').classList.toggle('fa-angle-right');
        this.querySelector('a > i').classList.toggle('fa-angle-down');
        this.querySelector('.sub-nav').classList.toggle('show-subNav');
        this.classList.toggle('pd-bot0');
        isOpening = this;
    }else if(this == isOpening)
    {
        this.querySelector('a').classList.toggle('is-open');
        this.querySelector('a > i').classList.toggle('fa-angle-right');
        this.querySelector('a > i').classList.toggle('fa-angle-down');
        this.querySelector('.sub-nav').classList.toggle('show-subNav');
        this.classList.toggle('pd-bot0');
        isOpening = null;
    }else
    {
        isOpening.querySelector('a').classList.toggle('is-open');
        isOpening.querySelector('a > i').classList.toggle('fa-angle-right');
        isOpening.querySelector('a > i').classList.toggle('fa-angle-down');
        isOpening.querySelector('.sub-nav').classList.toggle('show-subNav');
        isOpening.classList.toggle('pd-bot0');
        this.querySelector('a').classList.toggle('is-open');
        this.querySelector('a > i').classList.toggle('fa-angle-right');
        this.querySelector('a > i').classList.toggle('fa-angle-down');
        this.querySelector('.sub-nav').classList.toggle('show-subNav');
        this.classList.toggle('pd-bot0');
        isOpening = this;
    }
}