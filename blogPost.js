const getUrl = document.location.search
const para = new URLSearchParams (getUrl)

const id = para.get("id")
const url = `https://henrikturoy.no/wp-json/wp/v2/posts/${id}?_embed=true`
const postContent = document.querySelector(".postContent")
const postImg = document.querySelector(".popOut")
const postImgOpen =  document.querySelector(".postImgOpen")

const body = document.querySelector(".bodyx")
const modal = document.querySelector(".modal")

const footer = document.querySelector("footer")
const spacer = document.querySelector(".spacer2")




 listPost = (post) => {

    document.title = `Sjødyrbloggen | ${post.title.rendered}`
    console.log(post)
    let newContent = `
    
        <h1>${post.title.rendered}</h1>
        <p> ${post.content.rendered}</p>  
   
    `
    let imgContent = `
    <img onClick = "modalImg()" class="postImg" src="${post._embedded["wp:featuredmedia"][0].source_url}"alt = "${post._embedded["wp:featuredmedia"][0].alt_text}"></img>
    `
    postContent.innerHTML += newContent;
    postImg.innerHTML += imgContent;

    modal.innerHTML = `<img class = "modalBilde" src="${post._embedded["wp:featuredmedia"][0].source_url}""alt = "${post._embedded["wp:featuredmedia"][0].alt_text}"></img>`

}

const modalImg = ()=> {
  const modalImgc = document.querySelector(".postImg")
  modal.style.display = "flex"
  body.classList.add(".modalBig")
  document.documentElement.scrollTop = "0";
  footer.style.display = "none"
  spacer.style.display = "none"
}

modal.addEventListener("click", ()=>{
  modal.style.display = "none"
  body.classList.remove(".modalBig")
  footer.style.display = "flex"
  spacer.style.display = "flex"
})

fetch(url, {
	"method": "GET",
})
.then(response => response.json())
.then(data => listPost(data))
.catch(error => {
  console.error(error.message);
  postContent.innerHTML = `<div class="error">Does not work</div>`;    
})




