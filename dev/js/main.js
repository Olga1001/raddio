
var parentList = document.querySelectorAll('.list'),
    btnMore = document.querySelectorAll('.btn-more'),
    btnClose = document.querySelectorAll('[data-close]'),
    btnOpen = document.querySelectorAll('[data-open]'),
    modal = document.querySelectorAll('[data-item]'),
    burger = document.querySelector('.burger');

function hideList () {
    parentList.forEach(function (item) {
        var child = item.children;
        var listVisibleLength = item.getElementsByClassName('isVisible').length;
        for (var i = listVisibleLength; i < child.length; i++) {
            child[i].classList.add('d-none');
        }
    });
}

hideList();

function showStationList() {
    var parentListStations = document.querySelector('.radio-stations .list');
    var childStation = parentListStations.children;
    
    if (window.matchMedia("(max-width: 767px)").matches) {
        for (var i = 4; i < childStation.length; i++) {
            childStation[i].classList.remove('isVisible');
            childStation[i].classList.add('d-none');
        }
    } else {
        hideList();
    }
    
}
if (document.querySelector('.radio-stations .list')) {
    showStationList();
}

// function showList () {}
btnMore.forEach(function (item) {
    item.addEventListener('click', () => {
        var siblings = item.previousElementSibling,
            child = siblings.children,
            listVisibleLength = siblings.getElementsByClassName('isVisible').length;
            
        item.classList.toggle('active');

        for (var i = listVisibleLength; i < child.length; i++) {
            child[i].classList.toggle('d-none') ;
            if (item.classList.contains('active')) {
                item.innerHTML = 'close';
            } else {
                item.innerHTML = 'show more';
            }
        }
    });
});

document.querySelectorAll('.stopPropagation').forEach(function (item) {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
    });
})

// open pop-ups
btnOpen.forEach(function (item) {
    item.addEventListener('click', () => {
        var attributeValue = item.getAttribute('data-open');
        modal.forEach(function (e) {
            var attributeValueModal = e.getAttribute('data-item');
        
            if (attributeValueModal === attributeValue){
                e.classList.toggle('active');
                if (attributeValue === 'menu') {
                
                    burger.classList.toggle('active');
                }
            }
        });
    });
});

// close pop-ups
btnClose.forEach(function (item) {
    item.addEventListener('click', () => {
        modal.forEach(function (e) {
            e.classList.remove('active');
            burger.classList.remove('active');
        });
    });
});

//smooth scroll
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
    }
};

document.getElementById('up').addEventListener('click', () => {
    scrollToTop();
});

document.querySelectorAll('.menu-link').forEach(function (item) {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('active');
        
    });
});

//tabs
document.querySelectorAll('.tabs li[data-tab]').forEach((item) => {
    item.addEventListener('click', (e) => {
        document.querySelectorAll(`.content ul[data-tab="${item.dataset.tab}"]`).forEach((el) => {
            e.target.parentElement.querySelectorAll('.active').forEach( e => e.classList.remove('active'));
            e.target.classList.add('active');
            el.parentElement.querySelectorAll('.active').forEach( e => e.classList.remove('active'));
            el.classList.add('active');
        });
    });
});