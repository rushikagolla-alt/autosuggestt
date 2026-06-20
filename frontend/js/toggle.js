var user=[
    {
        "name":"john doe",
        "gender":"male",
        "image":"../images/john.png"
    },
    {
        "name":"jane doe",
        "gender":"female",
        "image":"../images/jane.png"
    }
]

var curid=0;
function toggle(){
     curid=(curid+1)%2;
     var user=users[curid];
     document.getElementById("userimage").src=user.image;
     document.getElementById("username").innerText=user.name;
     document.getElementById("usergender").innerText=user.gender;
}