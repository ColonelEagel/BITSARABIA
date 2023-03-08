// dynamic copy right
const yearEl = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// fade effect 
window.addEventListener('scroll', function ()
{
    var elements = document.querySelectorAll('.fade-in');
    for (var i = 0; i < elements.length; i++)
    {
        var element = elements[i];
        var bottom_of_element = element.offsetTop - 100 + element.offsetHeight;
        var bottom_of_window = window.pageYOffset + window.innerHeight;
        if (bottom_of_window > bottom_of_element)
        {
            element.classList.add('visible');
        }
    }
});