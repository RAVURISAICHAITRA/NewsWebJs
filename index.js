console.log("hello")

let apiKey = '25b6c2b2e8fc40ddb3e1fa602745b94c'
let newsAccordion = document.getElementById('newsAccordion');
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=us&apiKey=25b6c2b2e8fc40ddb3e1fa602745b94c`,true);
//xhr.getResponseHeader('Content-type','application/json')
xhr.onload = function (){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        console.log(articles);
        articles.forEach(function(element,index) {
            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                    aria-expanded="true" aria-controls="collapse${index}">
                    <strong>Breaking News ${index + 1} : </strong> ${element["title"]}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="headingOne"
                data-bs-parent="#newsAccordion">
                <div class="accordion-body">${element["content"]}.<a href="${element["url"]}" target="_blank">Read more here</a></div>
            </div>
        </div>`;
        newsHtml+=news;
        
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("some error occured")
    }
}    

xhr.send()
