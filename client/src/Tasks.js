import React, { Component } from 'react';
import logo from './OnTrak.png';
import avatar from './avatar.png';
import bell from './bell.png';
import './Tasks.css';
import Button from "./components/Button";
import Input from "./components/Input";
import TextArea from "./components/TextArea";

/*
A lot of components used from https://codesandbox.io/embed/x8omy0p9z.
Tentative file, just for testing functionality
*/
const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

class Tasks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      newTask: {
        name: "",
        taskDesc: ""
      },
      curTasks: []
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    this.fetchUsersWithFetchAPI();
  }

  fetchUsersWithFetchAPI = () => {
    this.setState({...this.state, isFetching: true});
    fetch('http://localhost:5000/db')
        .then(response => response.json())
        .then(result => {
            this.setState({...this.state, isFetching: false, curTasks: result})
        })
        .catch(e => {
            console.log(e);
            this.setState({...this.state, isFetching: false});
        });
      };

  //Bootleg way of querying our server

  handleFullName(e) {
     let value = e.target.value;
     this.setState(
       prevState => ({
         newTask: {
           ...prevState.newTask,
           name: value
         }
       }),
       () => console.log(this.state.newTask)
     );
   }

  handleInput(e) {
      let value = e.target.value;
      let name = e.target.name;
      this.setState(
        prevState => ({
          newTask: {
            ...prevState.newTask,
            [name]: value
          }
        }),
        () => console.log(this.state.newTask)
      );
    }

  handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
          prevState => ({
            newTask: {
              ...prevState.newTask,
              about: value
            }
          }),
          () => console.log(this.state.newTask)
        );
      }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newTask: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      }
    });
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newTask: {
          ...prevState.newTask,
          taskDesc: value
        }
      }),
      () => console.log(this.state.newTask)
    );
  }

    render() {
      return (
      <div className="App" id="app-div">

        <header>
            <img src={logo} className="logo" />
            <a href="#"><img src={avatar} className="avatar" /></a>
            <a href="#"><img src={bell} className="bell" /></a>


        </header>

        <div className="mainContainer">
          <div className="content">

            <h1>Tasks</h1>
            <div className="taskAddition">
              <h3 style={{color:'#2699FB'}}>Add Task:</h3>
            
              <div>
                <Input
                    inputtype={"text"}
                    title={"Task Name"}
                    name={"name"}
                    value={this.state.newTask.name}
                    placeholder={"Task name"}
                    handleChange={this.handleInput}
                  />{" "}

                  <TextArea
                      title={"Task Descsription"}
                      rows = {10}
                      value={this.state.newTask.taskDesc}
                      placeholder={"Describe the Task."}
                      handleChange={this.handleTextArea}
                    />{/* About the Task*/}
                    <Button
                    // action =  This is where we will work with the DB
                    type={"primary"}
                    title={"Submit"}
                    style={buttonStyle}
                    /> {" "} {/*Submit */}
              </div>
            </div>
            <div className = "curTasks"> 
            <h3 style={{color:'#2699FB'}}>Add Task:</h3>

              { console.log('Displaying Dates')}
              {console.log(this.state.curTasks)}
                
            
          </div>

        </div>
        </div>
      </div>
      );
      
      }
    }
  



  export default Tasks;
