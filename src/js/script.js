window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("upArrow").style.display = "block";
  } else {
    document.getElementById("upArrow").style.display = "none";
  }
}

function backToTop() {
  let scrollDuration = 300;

  console.log(-window.scrollY);
  let scrollStep = -window.scrollY / (scrollDuration / 15),
    scrollInterval = setInterval(function() {
      if (window.scrollY != 0) {
        window.scrollBy(0, scrollStep);
      } else clearInterval(scrollInterval);
    }, 15);
}
