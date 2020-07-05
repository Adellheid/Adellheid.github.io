var detailedImage = document.querySelector('.detail-image');
var detailedTitle = document.querySelector('.detail-title');
var thumbnails = document.querySelectorAll('a');

function setDetails(thumbnail) {
    detailedImage.setAttribute('src',
        thumbnail.getAttribute('href'));
    detailedTitle.textContent = thumbnail.getAttribute('data-detailed-text');
}
function addListener(thumbnail) {
    thumbnail.addEventListener('click', function (event) {
        event.preventDefault();
        setDetails(thumbnail);
    })
}
for (var i = 0; i < thumbnails.length; i++) {
    addListener(thumbnails[i]);
}
