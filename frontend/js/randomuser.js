function showrandomuser() {
})

    
    .then(function(data){
        var user = data.results[0];
        var name = user.name.title + " " + user.name.first + " "+ user.name.last;
        var gender = user.gender;
        var image = user.picture.large;
     document.getElementById("userimage").src=image;
     document.getElementById("username").textContent=name;
     document.getElementById("usergender").textContent=gender;
    });
}
   
