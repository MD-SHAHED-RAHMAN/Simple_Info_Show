function InFo_Show(){
  let body=  document.getElementById("tbody");
  let Url="https://jsonplaceholder.typicode.com/posts"
  axios.get(Url).then((res)=>{
    console.log(res.data);
    let posts=res.data
    posts.map((post)=>{
        body.innerHTML+= `
        <tr>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>

        </tr>

        `
    })
  })
}
window.onload=InFo_Show