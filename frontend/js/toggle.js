var user=[
    {
        "name":"john doe",
        "gender":"male",
        "images":"/images/john.png"
    },
    {
        "name":"jane doe",
        "gender":"female",
        "images":"/images/jane.png"
    },
]

var curid=0;
function toggle(){
     curid=(curid+1)%2;
     var user=users[curid];
     document.getElementById("user-img").src=user.image;
     document.getElementById("user-name").innerText=user.name;
     document.getElementById("user-gender").innerText=user.gender;
}