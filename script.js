const button = document.getElementById('_button');
const border = document.querySelector('.border');
const allTextElements = document.querySelectorAll('.border *');

button.addEventListener('click', function() {
    border.style.backgroundColor = 'pink';
    border.style.borderColor = 'yellow';
    allTextElements.forEach(element => {
        element.style.color = 'purple';
    });
});

button.addEventListener('mouseover', function() {
    button.style.color = 'yellow';
    button.style.borderColor = 'yellow';
});

button.addEventListener('mouseout', function() {
    button.style.color = 'white';
    button.style.borderColor = 'black';
    border.style.outline = '1px solid black';
});

window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        body.style.padding = '2%';
        container.style.textAlign = 'center';
        photo.style.margin = '20px auto';
        line.style.marginLeft = '0';
    } else {
        body.style.padding = '1% 2% 1% 2%';
        container.style.textAlign = 'left';
        photo.style.margin = '-230px 1100px 0 0';
        line.style.marginLeft = '70px';
    }
});
