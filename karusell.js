const url = "https://henrikturoy.no/wp-json/wp/v2/posts?_embed=true&per_page=8"
const karusellSlide = document.querySelector(".karusellSlide");
const karusellBilde = document.querySelectorAll(".karusellBilde")

// Få tak i innhold
listPosts = (posts) => {
    
    for (let i of posts) { 
        // if(i === posts[8]){
        //     break
        // }
        console.log(i)
        let newContent = `
        <div class="slidePost">
            <h2>${i.title.rendered}</h2>
            <img class="postImg" src="${i._embedded["wp:featuredmedia"][0].source_url}"></img>
            <a href="blogPost.html?id=${i.id}"> Les mer </a>
             
            
        </div>
        `
       karusellSlide.innerHTML += newContent;
    }
}

fetch(url, {
	"method": "GET",
})
.then(response => response.json())
.then(data => listPosts(data))
.catch(error => {
  console.error(error.message);
  blogPosts.innerHTML = `<div class="error">Does not work</div>`;    
})







// knapper
const forrige = document.querySelector(".forrige")
const neste = document.querySelector(".neste")

// teller
let counter = 1;
const størrelse = karusellSlide.clientWidth


karusellSlide.style.transform = "translateX" + (-størrelse * counter) + "px"

// knapplisten

neste.addEventListener(`click`,()=>{
    karusellSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    karusellSlide.style.transform = "translateX" + (-størrelse * counter) + "px"
    console.log(counter)
    });

forrige.addEventListener(`click`,()=>{
    karusellSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    karusellSlide.style.transform = "translateX" + (-størrelse * counter) + "px"
    console.log(counter)
    });