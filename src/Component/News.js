import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:6,
        category:'general'
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    // articles=[
    //     {
    //     "source": {
    //     "id": "abc-news-au",
    //     "name": "ABC News (AU)"
    //     },
    //     "author": "ABC News",
    //     "title": "Justin Langer reveals why he rejected Cricket Australia's short-term contract extension as head coach",
    //     "description": "In his resignation letter, men's national team coach Justin Langer tells Cricket Australia he wanted to bow out with dignity and integrity rather than accept a short-term contract to continue as men's head coach.",
    //     "url": "http://www.abc.net.au/news/2022-02-06/sport-justin-langer-letter/100809072",
    //     "urlToImage": "https://live-production.wcms.abc-cdn.net.au/d1f2e67e1875d904fb00caebad9b13ec?impolicy=wcms_crop_resize&cropH=2100&cropW=3734&xPos=0&yPos=103&width=862&height=485",
    //     "publishedAt": "2022-02-06T09:34:51Z",
    //     "content": "Justin Langer told Cricket Australia (CA) he wanted to bow out with dignity and integrity rather than accept a short-term contract to continue as men's head coach.\r\n<ul><li>Langer's resignation lette… [+2864 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "bbc-sport",
    //     "name": "BBC Sport"
    //     },
    //     "author": "BBC Sport",
    //     "title": "India v West Indies - Cricket - BBC Sport",
    //     "description": "Find out the in depth batting and bowling figures for India v West Indies in the One Day International Series on BBC Sport.",
    //     "url": "https://www.bbc.co.uk/sport/cricket/scorecard/ECKO51921",
    //     "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
    //     "publishedAt": "2022-02-06T08:07:22.4365167Z",
    //     "content": "<table><tr><th>Batter</th><th>How Out</th><th>Bowler</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>Mins</th><th>SR</th></tr>\r\n<tr><th>Total</th><th>(1.1 overs)</th><th>4-for0wickets</th><t… [+1126 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "espn-cric-info",
    //     "name": "ESPN Cric Info"
    //     },
    //     "author": null,
    //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //     "publishedAt": "2020-04-27T11:41:47Z",
    //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "espn-cric-info",
    //     "name": "ESPN Cric Info"
    //     },
    //     "author": null,
    //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //     "publishedAt": "2020-03-30T15:26:05Z",
    //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    //     ]
    constructor(){
            super();
            this.state={
                articles:[],
                loading:false,
                page:1
            }
    }
    async componentDidMount()
    {
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b05b5eb88bd548e98866c2c9c72cb196&page=1&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parseData=await data.json()
        this.setState({articles:parseData.articles,totalResults:parseData.totalResults})
        console.log(this.state.totalResults);
        window.scroll(0,0);
    }
    handleprevclick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b05b5eb88bd548e98866c2c9c72cb196&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parseData=await data.json();
        this.setState({
            articles:parseData.articles,
            page:this.state.page-1
        })
        window.scroll(0,0);
    }
    
    handlenextclick=async()=>{
        
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
        {
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b05b5eb88bd548e98866c2c9c72cb196&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            let data=await fetch(url);
            let parseData=await data.json();
            this.setState({
            articles:parseData.articles,
            page:this.state.page+1
            })
        }
        window.scroll(0,0);
    }
  render() {
      
    return (
        <>
      <div className='container my-3'>
          <h2 style={{textAlign:"center"}}>Inshorts-Get {this.props.category} news in a click</h2>
          <div className="row">
              {this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description?element.description.slice(0,50):""} imgurl={element.urlToImage?element.urlToImage:"https://media.istockphoto.com/photos/network-business-connection-system-on-hong-kong-smart-city-scape-in-picture-id852631156"} newsurl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
                  </div>
              })}
          </div>
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handleprevclick}>&larr;Previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-secondary" onClick={this.handlenextclick}>Next&rarr;</button>
      </div>
      </>
    )
  }
}

export default News
