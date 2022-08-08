import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
      let {description,title,imgurl,newsurl,author,date,source}=this.props;
    return (
      <div>
        <div className="card my-3" style={{/*width: "18rem",*/textAlign:"center",height:"600px",/*border:"2px solid #75787a"*/border:"2px solid black",backgroundColor:"#4c4949",color:"white"}}>
            <span className="position-absolute top-0 left-0 badge bg-danger" style={{zIndex:"1"}}>{source}</span>
            <img src={imgurl} className="card-img-top" alt="..." style={{objectFit:"contain",maxHeight:"50%",width:"100%"}}/>
            <div className="card-body">
                <h5 className="card-title" style={{maxHeight:"60%"}}>{title}
                <span className="badge badge-dark" style={{backgroundColor:"#1fc795"}}>{(new Date().getDate()-new Date(date).getDate())<1?"New":""}</span>
                </h5>
                <p className="card-text" style={{maxheight:"40%"}}>{description}...</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            </div>
            <div className="d-flex justify-content-center" style={{height:"6%",position:"absolute",bottom:"0%"}}>
                <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-secondary btn-sm" style={{/*position:"relative",top:"5%"*/alignItems:"center",justifyContent:"center"}}>Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
