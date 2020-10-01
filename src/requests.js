const API_KEY="ea0dd2f57cf0047a8a5300c42c19f04b";
export default
{
     fetchTrending:`/trending/all/week?api_key=${API_KEY}`,
     fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
     fetchActionMovies:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
     fetchComedyMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
     fetchHorrorMovies:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
     fetchRomanceMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
     fetchMystery:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
     fetchSciFi:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
     fetchWestern:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
     fetchAnimation:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
     fetchTV:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    };


