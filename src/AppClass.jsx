import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{

  // code here
  render(props){
    return(
      <>
      <div>
        <h1>Kalvium gallary</h1>
        <div className="image-container">
          {
            this.props.data.map((item) => {
              return(
                <div key={item.id}>
                  <img src={item.img} alt="" />
                </div>
              )
            } )
          }
        </div>
      </div>
      </>
    )
  }
}
