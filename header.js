const Searching = Search.prototype;
const Searched = document.querySelector(".search input");
const menuBtn = document.querySelector(".siteLogo");

function Search() {
  console.log("aa");
  this.keyword = document.querySelector('input[name = "search"]');
  this.engine = document.querySelector(".selectSearch");
  this.form = document.querySelector(".search");

  this.Engine();
}

function btnClicked() {
  location.reload();
}

Searching.Engine = function () {
  this.form.addEventListener("submit", (e) => {
    console.log("22");
    e.preventDefault();
    let engine = this.engine.value;
    let keyword = this.keyword.value;
    console.log(keyword);
    console.log(engine);
    if (engine === "Google") {
      console.log("keyword");
      location.href = "https://www.google.co.kr/search?q=" + keyword;
    } else {
      location.href = "https://search.naver.com/search.naver?query=" + keyword;
    }
  });
};

//Mark: addEvent
menuBtn.addEventListener("click", btnClicked);

new Search();

13a2ceaa34497a130927866446b29447
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