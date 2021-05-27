const getUrl = document.location.search
const para = new URLSearchParams (getUrl)

const id = para.get("id")
const url = `https://henrikturoy.no/wp-json/wp/v2/posts/${id}?_embed=true`
const postContent = document.querySelector(".postContent")
const postImg = document.querySelector(".popOut")
const postImgOpen =  document.querySelector(".postImgOpen")
const body = document.querySelector(".bodyx")


 listPost = (post) => {


    console.log(post)
    let newContent = `
    
        <h1>${post.title.rendered}</h1>
        <p> ${post.content.rendered}</p>  
   
    `
    let imgContent = `
    <img class="postImg" src="${post._embedded["wp:featuredmedia"][0].source_url}"></img>
    `
    postContent.innerHTML += newContent;
    postImg.innerHTML += imgContent;

    postImg.addEventListener("click", function(){
      postImg.classList.toggle("postImgOpen")
    })


    // window.onclick = function(event){
    //   if (event.target == postImg){
    //     postImg.style.display = "none"
    //   }
    // }
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


