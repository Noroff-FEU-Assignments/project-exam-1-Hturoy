const getUrl = document.location.search
const para = new URLSearchParams (getUrl)

const id = para.get("id")
const url = `https://henrikturoy.no/wp-json/wp/v2/posts/${id}?_embed=true`
const postContent = document.querySelector(".postContent")


 listPost = (post) => {


    console.log(post)
    let newContent = `
    
        <h2>${post.title.rendered}</h2>
        <img class="postImg" src="${post._embedded["wp:featuredmedia"][0].source_url}"></img>
        <p> ${post.content.rendered}</p>  
   
    `
    postContent.innerHTML += newContent;
    
}

fetch(url, {
	"method": "GET",
})
.then(response => response.json())
.then(data => listPost(data))
.catch(error => {
  console.error(error.message);
  postContent.innerHTML = `<div class="error">Does not work</div>`;    
})


