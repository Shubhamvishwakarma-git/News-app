import React, { useContext, useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
import { Datacontext } from "../context/Datacontext";

const News = () => {
  const { alldata } = useContext(Datacontext);

  const [page, setpage] = useState(1);
  const [visibleData, setVisibleData] = useState([]);
  const pagesize = 9;

  useEffect(() => {
    setVisibleData(alldata.slice(0, pagesize));
    setpage(1);
  }, [alldata]);


  const fetchMoreData = () => {
    const nextpage = page + 1;
    const start = (nextpage - 1) * pagesize;
    const end = start + pagesize;
    console.log(`Fetching page ${nextpage}: items ${start} to ${end}`);
  
    const nextdata = alldata.slice(start, end);
  
    if (nextdata.length === 0) {
      console.log("No more data to load.");
      return;
    }
  
    setVisibleData((prev) => [...prev, ...nextdata]);
    setpage(nextpage);
  };
  

  return (
    <div className="container my-3">
      <h1
        className="text-center"
        style={{ margin: "40px 0px", marginTop: "90px " }}
      >
        News-Top headlines from {alldata.category}
      </h1>
      <InfiniteScroll
        dataLength={visibleData.length}
        next={fetchMoreData}
        hasMore={visibleData.length < alldata.length}
        loader={<h4>Loading...</h4>}
      >
        <div className="container">
          <div className="row">
            {visibleData.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
