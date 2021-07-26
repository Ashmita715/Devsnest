const btn=document.getElementById('btn');
const quote=document.getElementById('quote');
const author=document.getElementById('author');
const url="https://api.quotable.io/random";
btn.addEventListener('click',generateQuote);
function generateQuote(){
    fetch(url)
   .then(function(data) {
          return data.json();
     })
     .then(function(data){    
     document.getElementById("quote").innerHTML = data.content; document.getElementById("author").innerHTML = "- " + data.author;
    })
  .catch(function(err) {
     console.log(err); 
     });
  }
 setInterval(generateQuote() ,10000);