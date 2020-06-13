$(document).ready(function() {
    let films = JSON.parse(movies);

    for (let i = 0; i < films.length; i++) {
        //Get Data from JSON.file
        const movieName = films[i].movieName;
        const description = films[i].description;
        const poster = films[i].poster;
        
        let filmBox = `<div class="filmContainer">
                            <div class="poster">
                                <img src="${poster}" alt="Movie Poster">
                            </div>
                            <div class="filmTxt">
                                <div class="infoBox">
                                    <h2 class="movieTitel">${movieName}</h2>
                                    <span class="description">${description}</span>
                                </div>
                                <div class="like">
                                    <div class="thumb">Like &#128077</div>
                                    <span class="likeCount">0</span>
                                </div>
                            </div>
                        </div>`;
        
        $("#wrapper").append(filmBox);
        
    }
    // LIKE COUNTER
    let like = $(".like");
    let likeCount = $(".likeCount");
    
    for ( let i = 0; i < like.length; i++) {
        let count = 0;
        $(like[i]).on("click" , function(){
            count += 1;
            $(likeCount[i]).text(count); 
        })
    }
    
}) 
window.alert("Hi dear Trainers! Welcome to the Code Review No. 5.");
