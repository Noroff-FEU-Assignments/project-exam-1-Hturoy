const url = "https://henrikturoy.no/wp-json/wp/v2/posts?_embed=true&per_page=8"
const karusellSlide = document.querySelector(".karusellSlide");
const karusellContainer = document.querySelector(".karusellContainer")





// teller
let counter = 0;
const størrelse =  karusellContainer.clientWidth
console.log(størrelse)


// knapper
const prv = document.querySelector(".prv")
const nxt = document.querySelector(".nxt")




// karusellSlide.style.transform = `translateX(` + (-størrelse * counter) + `px)`;

// knapplisten

nxt.addEventListener(`click`,()=>{
    karusellSlide.style.transition = "transform 0.3s ease-in-out";
    counter++;
    karusellSlide.style.transform = `translateX(` + (-størrelse * counter) + `px)`;
    console.log(counter)
    });

prv.addEventListener(`click`,()=>{
    karusellSlide.style.transition = "transform 0.3s ease-in-out";
    counter--;
    karusellSlide.style.transform = `translateX(` + (-størrelse * counter) + `px)`;
    console.log(counter)
    });




    // Få tak i innhold
listPosts = (posts) => {
    
    for (let i of posts) { 
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
  karusellSlide.innerHTML = `<div class="error">Does not work</div>`;    
})
