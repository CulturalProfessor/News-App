//86e178c78bae474abaff2bac26f47e84
console.log("hey");
newsAccordion = document.getElementById("newsAccordion");
//news api parameters
source = "the-hindu";
let apiKey = "86e178c78bae474abaff2bac26f47e84";
//ajax request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);
//what to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles=json.articles;
    console.log(articles);
    let newsHtml="";
    articles.forEach(function(element,index){
        let news = `<div class="card container">
                                <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collaps${index}" aria-expanded="true" aria-controls="collapse${index}"><b>${index+1}. Breaking News</b>:
                                    ${element["title"]}
                                    </button>
                                </h2>
                                </div>

                                <div id="collaps${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body">
                                    ${element["content"]}.<a href="${element["url"]}" target="_blank">Read more here</a>
                                </div>
                                </div>
                            </div>`;
        newsHtml+=news;
    });
    newsAccordion.innerHTML=newsHtml;
  } else {
    console.log("some error occured");
  }
};

xhr.send();


