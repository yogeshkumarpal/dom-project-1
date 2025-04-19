let arr = [{
    Image:"https://imgs.search.brave.com/5md97VRdPAOwQOs9ykApMEuKKhbUZj5G59OmJAR5IAU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/b3BlbmFydC5haS9w/dWJsaXNoZWQvdXNl/cl8yaTd6SUM0d2Vv/ZUd0QmxnRFNMQklz/Zzg4U1kvdUxQbl9Q/N0RfTWpSX181MTIu/d2VicA",
    username:'spiderman',
    age:'40 years',
    superpower:'web devloper'
},
{
    Image:"https://imgs.search.brave.com/OXjpawKy9WqDpls3lpcJnLf_prC-kr53JO9f2fWNmVg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDM3MDM0/MTcuanBn",
    username:'iron-man',
    age:'49 years',
    superpower:'AI devloper'
},
{
    Image:"https://imgs.search.brave.com/2zEe9LavDHiaYmI8wXwxnHOuvum-uacM6R3UNN8Ptqs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJ2/ZWxoZXJvZXNsaWJy/YXJ5LmNvbS9pbWFn/ZXMvY2hhcmFjdGVy/cy9IdWxrLmpwZw",
    username:'hulk',
    age:'39 years',
    superpower:'mechanical engineer'
},
{
    Image:"https://imgs.search.brave.com/I5OZSX3pf8souIqDS5dZSQ6uEGNsngOmsxZhZtMdBWc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE4MDg5/NDQuanBn",
    username:'captin america',
    age:'100 years',
    superpower:'anti aging'
}]

let sum = '';

arr.forEach(function(elem){
    sum = sum + `<div class ="card">
            <img src="${elem.Image}" alt="">
            <h1>${elem.username}</h1>
            <h2>${elem.age}</h2>
            <h2>${elem.superpower}</h2>
            <button class="btn">Add Friend</button>
        </div>`
    
})
let main = document.querySelector("#main")
main.innerHTML = sum ;

let btn = document.querySelectorAll(".btn")
 
btn.forEach(function(button){
    button.addEventListener("click",function() {
        if (button.innerHTML === "Add Friend") {
            button.innerHTML = "Remove Friend";
            button.style.backgroundColor = "crimson";
          } else {
            button.innerHTML = "Add Friend";
            button.style.backgroundColor = "royalblue";
          }       
    })

})
