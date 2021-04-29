// Posts from WP
const url = "https://henrikturoy.no/wp-json/wp/v2/posts?_embed=true"

const content = document.querySelector (".contentHome")

 
// Loop x2 to get photo
// gettin Posts
const listPosts = (posts) => {
    content.innerHTML = ``;
    for (let i of posts) {
        console.log(i)
        let newContent = `
        <p>Is workin?</p>
        `
    
        content.innerHTML += newContent;
    }
    
}

fetch(url, {
	"method": "GET",
})

.then(response => response.json())
.then(data => listPosts(data))
.catch(error =>{
	console.error(error.message);
	content.innerHTML = `<div class="error">An error has occurred</div>`

});
