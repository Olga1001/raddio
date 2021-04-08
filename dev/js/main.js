
var parentList = document.querySelectorAll('.list');
var btnMore = document.querySelectorAll('.btn-more');

function hideList () {
    parentList.forEach(function (item) {
        var child = item.children;
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
        // var listVisibleLength = child.classList.contains('isVisible');
        // console.log(listVisibleLength);
        item.classList.toggle('close');

        for (var i = 12; i < child.length; i++) {
            child[i].classList.toggle('d-none') ;
            if (item.classList.contains('close')) {
                item.innerHTML = 'close';
            } else {
                item.innerHTML = 'show more';
            }
        }
    });
});
