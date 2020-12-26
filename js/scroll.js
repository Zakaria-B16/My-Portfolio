var sections = document.querySelectorAll("section");
var lastScrollTop = 0;
const navbar = document.querySelector("nav");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-70px";
  } else {
    navbar.style.top = top = "0";
  }
  lastScrollTop = scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav li").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `nav li a[href="#${id}"]`;
  document.querySelector(selector).parentNode.classList.add("active");
  if (id !== "wrapper" && navbar.style.top !== 0) {
    navbar.style.backgroundColor = "#f0f0f0";
    navbar.style.boxShadow = "0px 5px 15px -4px rgba(0,0,0,0.75)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
};

var navbarLinks = document.querySelectorAll("nav li");

navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});
