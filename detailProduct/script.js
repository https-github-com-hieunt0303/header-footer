// cái nút trượt lên đầu trang
window.addEventListener('scroll', function () {
    var someDiv = document.getElementById('top-page');
    var distanceToTop = someDiv.getBoundingClientRect().top;
    if (distanceToTop < 0)
        $('#anchor-top').css('display', 'block')
    else
        $('#anchor-top').css('display', 'none')
    // console.log(distanceToTop);
});
