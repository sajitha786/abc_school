import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';

class Student extends Component{

    constructor(props){
      super(props);
      this.state={
        title : "Students Registration",
        act : 0,
        index : '',
        datas : []
      }
    }

    componentDidMount(){
      console.log(this.state);
      this.refs.std_id.focus();
    }

    fSubmit = (e) => {
                  e.preventDefault();
                  console.log('try');

                  let datas =this.state.datas;
                  let s_id= this.refs.std_id.value;
                  let s_name = this.refs.std_name.value; 
                  let s_no= this.refs.std_no.value;
                  let s_class = this.refs.std_class.value;
                  let s_sec= this.refs.std_sec.value;
                  // let std_name = this.refs.std_name.value;
                  
                  if(this.state.act === 0){ //new
                      let data = {
                        s_id,s_name,s_no,s_class,s_sec
                      }

                  datas.push(data);
                   }else{
                      let index =this.state.index;
                      datas[index].std_id =s_id;
                      datas[index].std_name =s_name;
                      datas[index].std_no =s_no;
                      datas[index].std_class =s_class;
                      datas[index].std_sec =s_sec;
                  }


      this.setState({
        datas : datas,
        act :0
       });

      this.refs.myForm.reset();
      this.refs.std_id.focus();
    }

    fRemove = (i) =>{
      let datas =this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas : datas
       });

      this.refs.myForm.reset();
      this.refs.std_id.focus();
    }

      fEdit = (i) =>{
            let data =this.state.datas[i];
            this.refs.std_id.value =data.s_id;
            this.refs.std_name.value =data.s_name;
            this.refs.std_no.value =data.s_no;
            this.refs.std_class.value =data.s_class;
            this.refs.std_sec.value =data.s_sec;

            this.setState({
              act: 1,
              index: i
            });

      this.refs.std_id.focus();

      }
    

  render(){

    let datas = this.state.datas;
  return(
    <div className= "container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
            {/* <div className="btns1"><Button variant="contained" color="primary">List Students</Button></div> */}
            {/* <div className="btns1"><Button variant="contained" color="primary">Edit Student Details</Button></div>
            <div className="btns1"><Button variant="contained" color="primary">Delete Student Details</Button></div> */}
            <div className="btns1"><Button variant="contained" color="primary"type="button" onClick={(e) => {
              e.preventDefault();
              window.location.href='http://localhost:3000';
              }}> Back</Button></div>
        </div>
        <div className="col">
          <form id="1" ref="myForm" className="myForm">
            <h2>{this.state.title}</h2>
            <div key={this.state.timestamp} className="studentPageStyle">
                <label> Student ID</label>
                <input type= "text" ref="std_id" placeholder="Admission ID" onChange= {this.stdFormChange} name="std_id"/>
                <label> Name</label>
                <input type= "text" ref="std_name" placeholder="Enter Name" onChange= {this.stdFormChange} name="std_name"/>
                <label> Roll No </label>
                <input type= "text" ref="std_no" placeholder="Roll No" onChange= {this.stdFormChange} name="std_no"/>
                  <div>
                        <label htmlFor="std_class">Class:</label>

                            <select id="std_class"  ref="std_class" onSelect={this.stdFormChange} name="std_class">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                            </select>
                        <label for="std_sec">Section:</label>
                      
                            <select id="std_sec" ref="std_sec" onSelect={this.stdFormChange} name="std_sec">
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                              <option value="E">E</option>
                              <option value="F">F</option>
                            </select>
                   </div>
                <Button variant="contained" color="primary" onClick={(e) => this.fSubmit(e)} >submit</Button>
             </div>
          </form>
      </div>
      </div>
      <pre>
        {datas.map((data,i) =>
          <li key={i} className= "myList">
            {i+1}.{data.s_id},{data.s_name},{data.s_no},{data.s_class},{data.s_sec}
            <Button variant="contained" color="primary" onClick={() => this.fRemove(i)}>Remove</Button>
            <Button variant="contained" color="primary" onClick={() => this.fEdit(i)}>Edit </Button>
          </li>
        )}
      </pre>
    </div>
  )}
}

export default Student;