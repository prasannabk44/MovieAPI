var search=document.getElementById("search");
search.addEventListener("keyup",e=>{
//console.log(e)
    var searchText=e.target.value;
        getMovies(searchText);
});
function getMovies(searchText){
    const imdbapi=`http://www.omdbapi.com/?s=${searchText}&apikey=aca874f5`;//http://www.omdbapi.com/?s=${searchText}&apikey=34696847
    window.fetch(imdbapi).then(movies=>
            {
                movies.json().then(data=>
                    {
                       // console.log(data.search);
                       var MovieData=data.Search;
                       var output=[];
                       for(let movie of MovieData)
                       {
                           output+=`<div class="container"><section id="movies"><h1>${movie.Title}</h1>
                           <span class="badge badge-success">${movie.Year}</span>
                           <p><img src="${movie.Poster}" class="imp-Poster"/>
                           <p><button class="btn btn-dark"> Go to movie</button></p>
                           </p>
                           </section>
                           </div>
                           `;
                           document.getElementById("template").innerHTML=output;
                       }
                    }
                ) .catch(err=>console.log(err));
            }
        ).catch(err=>console.log(err));
}
//OMDb ApI
