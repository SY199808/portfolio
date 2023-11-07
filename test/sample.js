"use strict";
{
  /*------------
      ヒーロー
    ------------*/

  document.querySelector(".hero .header").style.transition =
    "opacity 1s, top 1s";

  setTimeout(function () {
    let heroHeader = document.querySelector(".hero .header");
    heroHeader.style.opacity = "1";
    heroHeader.style.top = "50%";
  }, 500);

  /*------------
      アバウトページ
    ------------*/

  //DOM取得
  const aboutTargets = document.querySelectorAll(".about-myself .content h2");
  //オプション
  const aboutOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: [0.5],
  };
  //非同期処理
  function aboutCallback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aboutTitleVisible");
      }
    });
  }

  //初期化
  const aboutobserver = new IntersectionObserver(aboutCallback, aboutOptions);

  //監視
  aboutTargets.forEach((target) => {
    aboutobserver.observe(target);
  });

  /*------------
       経歴ページ
    ------------*/

  const expTargets = document.querySelectorAll(
    ".experience .content ul li .hidden"
  );

  const expOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: [0.5],
  };

  function expCallback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = "opacity 1s, margin-left 0.6s";
        entry.target.style.opacity = "1";
        entry.target.style.marginLeft = "0";
      }
    });
  }

  const expObserver = new IntersectionObserver(expCallback, expOptions);

  expTargets.forEach((target) => {
    expObserver.observe(target);
  });

  /*------------
      スキルページ
    ------------*/
  let devIsVisible = false;
  const skillTargets = document.querySelectorAll(".skills-bar-container li");

  const skillOptions = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: [1],
  };

  function skillCallback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !devIsVisible) {
        let barContainers = document.querySelectorAll(
          ".skills-bar-container li"
        );
        barContainers.forEach((container) => {
          let barContainer = container.querySelector(".bar-container");
          let dataPercent = parseInt(barContainer.dataset.percent);
          let elem = container.querySelector(".progressbar");
          let percent = container.querySelector(".percent");
          let width = 0;
          let id = setInterval(() => {
            if (width >= dataPercent) {
              clearInterval(id);
            } else {
              width++;
              elem.style.width = width + "%";
              percent.innerHTNL = width + " %";
            }
          }, 15);
        });
        devIsVisible = true;
      }
    });
  }

  const skillObserver = new IntersectionObserver(skillCallback, skillOptions);
  skillTargets.forEach((target) => {
    skillObserver.observe(target);
  });
}
