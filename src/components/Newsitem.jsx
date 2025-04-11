import React, { useContext } from 'react';
import { Datacontext } from '../context/Datacontext';

const Newsitem=(props)=> {
  const{alldata}= useContext(Datacontext)
  console.log(alldata)


    let { title, description, imageurl, newsUrl, author, date ,source} = props;
    return (
      <>

        <div className="card" style={{ width: "18rem" }}>
          <div style={{display:"flex",
                       justifyContent:"flex-end",
                       position:"absolute",
                       right:"0"
                       }}>
                       
        <span className=" badge rounded-pill bg-danger" >
              {source}
            </span>
            </div>
          <img src={imageurl ? imageurl : "https://etinsights.et-edge.com/wp-content/uploads/2024/01/shutterstock_1666159696.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...  </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>

      </>
    );
}

export default Newsitem;
