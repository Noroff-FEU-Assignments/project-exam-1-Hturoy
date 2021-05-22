console.log("test")

const url = "https://henrikturoy.no/wp-json/wp/v2/posts?_embed=true&per_page=8"
const url2 = "https://henrikturoy.no/wp-json/wp/v2/posts?_embed=true&per_page=4&offset=8"

const blogPosts = document.querySelector(".blogPosts")
const seMer = document.querySelector(".seMer")




listPosts = (posts) => {
    
    for (let i of posts) { 
        // if(i === posts[8]){
        //     break
        // }
        console.log(i)
        let newContent = `
        <div class="blogContainerPost">
            <h2>${i.title.rendered}</h2>
            <img class="postImg" src="${i._embedded["wp:featuredmedia"][0].source_url}"></img>
            <a href="blogPost.html?id=${i.id}"> Les mer </a>
             
            
        </div>
        `
       blogPosts.innerHTML += newContent;
    }
}


// <p> ${i.content.rendered}</p>



fetch(url, {
	"method": "GET",
})
.then(response => response.json())
.then(data => listPosts(data))
.catch(error => {
  console.error(error.message);
  blogPosts.innerHTML = `<div class="error">Does not work</div>`;    
})



seMer.addEventListener("click", function(){
    fetch(url2, {
        "method": "GET",
    })
    .then(response => response.json())
    .then(data => listPosts(data))
    .catch(error => {
      console.error(error.message);
      blogPosts.innerHTML = `<div class="error">Does not work</div>`;    
    })})