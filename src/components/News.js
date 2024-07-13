import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

    const [articles,setArticles]= useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalResults,setTotalResults]=useState(0)
 
    

      const updateNews = async()=>{
       props.setProgress(0);
        const  url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
       setArticles(parsedData.articles)
       setTotalResults(parsedData.totalResults)
       setLoading(false)
       props.setProgress(100);
      }

       useEffect(() =>{
        document.title = `${props.category} - newsMonkey`
        updateNews();
        // eslint disable next line
       }, [])
        
        
       /*     const handlePreviousClick = async ()=>{
       setPage(page-1 )
       updateNews();
      }
         
      
        const  handleNextClick = async () =>{
         
          setPage(page+1 )
          updateNews();
        }*/

      const fetchMoreData = async() =>{
          const  url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
          setPage(page+1)
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData);
          setArticles(articles.concat(parsedData.articles))
          setTotalResults(parsedData.totalResults)
        }
        
      


   
    return (
      <div className ="container my-1">
       
       <h1 className="text-center"style ={{margin:"35px 0px" ,marginTop: "90px"}}>NewsMonkey-Top Headlines</h1> 
     {loading &&  <Spinner/> }
    
     <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={props.lengh!== totalResults}
          loader={<Spinner/>} >
          <div className="container">
        <div className="row mx-1"   >
        {articles.map((element) => {
  return (
    <div className="col-md-4" key={element.url}>
      <NewsItem
        title={element.title}
        description={element.description}
        imageUrl={element.urlToImage}
        newsUrl={element.url}
        date={element.publishedAt}
        source={element.source.name}
      />
    </div>
  );
})}

        </div>
        </div>
        </InfiniteScroll>

      {/*  <div  className="container d-flex justify-content-between">

        <button disabled={page<=1} type="button" className="btn btn-dark " onClick={handlePreviousClick}> &larr; previous </button>
        <button disabled = {page + 1 > Math.ceil(totalpropss/props.pageSize)} type="button" className="btn btn-dark " onClick={handleNextClick}> next &rarr;</button>
      </div>*/}
      </div>
    )
  
}
News.defaultprop={
  country :"in",
  pageSize: 5,
  category:"general"
 }
 News.propTypes ={
  country :PropTypes.string,
  pageSize:PropTypes.number
 } 

export default News
// so this much for today and now i have finished react course 25 and from tomorrow i will start from 26 and finish upto almost 30 okay good night.
