import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updateNews = async () => {
    props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=bab88daaf3944908bf712289e8ab1a83&page=${page}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let prasedData = await data.json()
    setarticles(prasedData.articles)
    settotalResults(prasedData.totalResults)
    props.setprogress(100);

  }
  
  useEffect(() => {
    document.title = `${props.category} - News`;
      updateNews();
      // eslint-disable-next-line
  }, []);


 const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=bab88daaf3944908bf712289e8ab1a83&page=${page+1}&pagesize=${props.pagesize}`;
    setpage(page+1)
    let data = await fetch(url);
    let prasedData = await data.json()
    setarticles(articles.concat(prasedData.articles))
    settotalResults(prasedData.totalResults)

  };



  return (
    <div className='container my-3'>
      <h1 className='text-center' style={{ margin: "40px 0px", marginTop:"90px " }}>News-Top headlines from {props.category}</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}

          </div>
        </div>
      </InfiniteScroll>
    </div>
  );

}

export default News;
