"use strict";
{
  //オープニングイベント設定 ここから

  const jsLoaderBg = ".js-loader-bg";
  const jsHeader = ".loader-title-item";
  const jsSlide = ".swiper";
  const jsTitle = ".header";

  gsap.set(jsHeader, {
    y: 50,
  });
  gsap.set(jsTitle, {
    y: 50,
  });

  const tl = gsap.timeline();

  tl.to(jsHeader, {
    opacity: 1,
    y: 0,
    stagger: {
      //amount: 1,
      from: "start",
      ease: "sine.in",
    },
  })
    .to(jsLoaderBg, {
      y: "100%",
      delay: 2,
    })
    .to(jsSlide, {
      opacity: 1,
    })
    .to(jsTitle, {
      opacity: 1,
      y: 0,
    });

  //スポット 横スクロール設定

  const scrollElements = document.querySelectorAll(".spot-lists-list");

  scrollElements.forEach((scrollElement) => {
    scrollElement.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      const maxScrollLeft =
        scrollElement.scrollWidth - scrollElement.clientWidth;
      if (
        (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
        (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
      )
        return;
      e.preventDefault();
      scrollElement.scrollLeft += e.deltaY;
    });
  });

  //フッター スクロールイベント

  const footerTargets = document.querySelectorAll(".footer-hidden");
  /*const footerSubTitle = document.querySelector(".footer-subtitle");
  const footerSiteMap = document.querySelector(".footer-sitemap");*/

  const footerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0.8],
  };

  function footerCallBack(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = "opacity 2s, top 1s";
        entry.target.style.opacity = "1";
      }
    });
  }

  const footerObserver = new IntersectionObserver(
    footerCallBack,
    footerOptions
  );

  footerTargets.forEach((target) => {
    footerObserver.observe(target);
  });
}
