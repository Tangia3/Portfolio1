$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('information-show', );
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.information');
  for (let elm of elements) {
    observer.observe(elm);
  }
