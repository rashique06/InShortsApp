import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small special-color-dark pt-4">
        <div className="container">
            <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item" style={{zIndex:"16"}}>
                <a className="btn-floating btn-fb mx-1" href="/">
                <i className="fab fa-facebook-f"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="btn-floating btn-tw mx-1" href="/">
                <i className="fab fa-twitter"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="btn-floating btn-gplus mx-1" href="/">
                <i className="fab fa-google-plus-g"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="btn-floating btn-li mx-1" href="/">
                <i className="fab fa-linkedin-in"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="btn-floating btn-dribbble mx-1" href="/">
                <i className="fab fa-dribbble"> </i>
                </a>
            </li>
            </ul>
        </div>
        <div className="footer-copyright text-center py-3" style={{backgroundColor:"black",color:"white"}}>© 2020 Copyright: Inshorts.com
        </div>
        </footer>
      </div>
    )
  }
}

export default Footer
