import React from 'react'


const NewsItem = (props)=> {
   let { title, description, imageUrl, newsUrl, date, source } = props;
 return (
    <div>
        <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style ={{left:"90%",zIndex:1}}>
   {source}
    <span className="visually-hidden">unread messages</span>
    </span>
            <img src = {imageUrl == null ?"https://static.toiimg.com/thumb/msid-101261626,width-1070,height-580,imgsize-74926,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl} alt = "newsArticle"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"> published on {new Date(date).toGMTString()}</p>
                < a href={newsUrl} target = "blank" className="btn btn-primary">Read More</a>
            </div>
         </div>
     </div>
      
    )
  
}

export default NewsItem
