const navLinks = document.querySelectorAll("header nav a");
const logoLinks = document.querySelector(".logo");
const sections = document.querySelectorAll("section");

const activePage = () => {

const barsBox = document.querySelector(".bars-box");
const header = document.querySelector("header");

  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 800);

navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barsBox.classList.remove("active");
  setTimeout(() => {
      barsBox.classList.add("active");

  }, 1100);

sections.forEach((section) => {
  section.classList.remove("active");
});

};

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    activePage();
    link.classList.add("active");

    setTimeout(() => {
      sections[idx].classList.add("active");
    }, 1100);

  });
});

logoLinks.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();

    navLinks[0].classList.add("active");

     setTimeout(() => {
       sections[0].classList.add("active");
     }, 400);

  }
});

const resumeBTn = document.querySelectorAll(".resume-btn");

resumeBTn.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDEAtils = document.querySelectorAll(".resume-detail");
    resumeBTn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDEAtils.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDEAtils[idx].classList.add("active");
  });
});

const arowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);

const arowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");

  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });

  portfolioDetails[index].classList.add("active");
};

arowRight.addEventListener("click", () => {
  if (index < 3) {
    index++;
    arowLeft.classList.remove("disabled");
  } else {
    index = 4;
    arowRight.classList.add("disabled");
  }

  activePortfolio();
});
arowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arowRight.classList.remove("disabled");
  } else {
    index = 0;
    arowLeft.classList.add("disabled");
  }

  activePortfolio();
});
