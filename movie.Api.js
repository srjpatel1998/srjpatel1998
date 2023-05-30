const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=[[Rang de basanti]&page-1";     
getMovies(APIURL)
async function getMovies(url)
{
    const resp = await fetch(url);
    const respData = await resp.json();
    showMovies(respData.results)
}
        async function getTrailer(id)
    {
         const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=[The shining]&language=en-US`);
         const respDataa = await resp.json();
         let results = respDataa.results;
         let keys = results[0].key;
         return keys;
    }
    
    
    function showMovies(movies){
      movies.forEach(movie => {
           const modals = document.createElement('div');
         modals.classList.add('modal');
         modals.innerHTML = `  <a target="_blank" href ="https://www.youtube.com/watch?v=${getTrailer(movie.id)}">Watch Trailer</a>`

}