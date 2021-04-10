
var parentList = document.querySelectorAll('.list'),
    btnMore = document.querySelectorAll('.btn-more'),
    btnClose = document.querySelectorAll('[data-close]'),
    btnOpen = document.querySelectorAll('[data-open]'),
    modal = document.querySelectorAll('[data-item]'),
    burger = document.querySelector('.burger');

function hideList () {
    parentList.forEach(function (item) {
        var child = item.children;
        
        // var listVisibleLength = child.classList.contains('isVisible');
        // console.log(listVisibleLength.length);

        for (var i = 12; i < child.length; i++) {
            child[i].classList.add('d-none');
        }
    });
}

hideList();

// function showList () {}
btnMore.forEach(function (item) {
    item.addEventListener('click', () => {
        var siblings = item.previousElementSibling;
        var child = siblings.children;
        item.classList.toggle('active');

        for (var i = 12; i < child.length; i++) {
            child[i].classList.toggle('d-none') ;
            if (item.classList.contains('active')) {
                item.innerHTML = 'close';
            } else {
                item.innerHTML = 'show more';
            }
        }
    });
});

document.querySelector('.menu').addEventListener('click', (e) => {
    e.stopPropagation();
});

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


