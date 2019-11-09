import React from 'react';
    const cardStyle = {
        color : 'black'
    };

 export default class Pane extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                <h5>{this.props.groupTitle}</h5>
                  <p class="card-text" style={cardStyle}>{this.props.desc}</p>
                  <a href="#" class="btn btn-primary">Group Dashboard</a>
                </div>
              </div>
            </div>
        );
      }


 }