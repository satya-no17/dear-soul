// let btn = document.querySelector("button");
// btn.addEventListener("click",async (e)=>{
//     e.preventDefault();
//     let name = document.querySelector("#name").value;
//     let message = document.querySelector("#message").value;
//     let response =await fetch("http://localhost:3000/send", {
//         method:'POST',
//         headers: {
//             'Content-Type':"application/json"
//         },
//         body:JSON.stringify({name,message})
//     });   if (response.ok) {
//         alert("Message sent!");
//     } else {
//         alert("Failed to send message.");
//     }

// })