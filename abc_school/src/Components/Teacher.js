import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';
// import Drop from './multiselectdrop'
// import { Multiselect } from 'multiselect-react-dropdown';

import MultipleSelect from './MultipleSelect';



class Teacher extends Component
{
  constructor(props){
    super(props);
      this.state={
        title : "Teachers Registration",
        act : 0,
        index : '',
        datas : [],
      }

        this.handleChange = this.handleChange.bind(this);
      
      
    }
  
    state = {
      selectedOption: null,

    };

    handleChange(event) {
      this.setState({value: event.target.value});
    } 
    handleChange = selectedOption => {
      this.setState(
        { selectedOption },
        () => console.log(`Option selected:`, this.state.selectedOption)
      );
    };

    
    componentDidMount(){
      console.log(this.state);
      this.refs.tch_id.focus();
    }

    fSubmit = (e) => {
                  e.preventDefault();
                  console.log('try');

                  let datas =this.state.datas;
                  let t_id= this.refs.tch_id.value;
                  let t_name = this.refs.tch_name.value; 
                  let t_class = this.props.labelid.tch_class.value;
                  
                                    
                  if(this.state.act === 0){ //new
                      let data = {
                        t_id,t_name,t_class
                      }

                  datas.push(data);
                   }else{                      //update   
                      let index =this.state.index;
                      datas[index].tch_id =t_id;
                      datas[index].tch_name =t_name;
                      datas[index].tch_class =t_class;
                   }


      this.setState({
        datas : datas,
        act :0
       });

      this.refs.myForm.reset();
      this.refs.tch_id.focus();
    }

    fRemove = (i) =>{
      let datas =this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas : datas
       });

      this.refs.myForm.reset();
      this.refs.tch_id.focus();
    }

      fEdit = (i) =>{
            let data =this.state.datas[i];
            this.refs.tch_id.value =data.t_id;
            this.refs.tch_name.value =data.t_name;
            this.labelid.tch_class.value =data.t_class;

            this.setState({
              act: 1, 
              index: i
            });

      this.refs.tch_id.focus();

  }


  render(){

    
    let datas = this.state.datas;
    return(
      <div className= "container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-2">
                {/* <div className="btns1"><Button variant="contained" color="primary">List Teachers Details</Button></div> */}
                <div className="btns1"><Button variant="contained" color="primary"type="button" onClick={(e) => {
              e.preventDefault();
              window.location.href='http://localhost:3000';
              }}> Back</Button></div>
            </div>
            <div className="col">
                <div className="studentPageStyle">
                    <h2>{this.state.title}</h2>
                      <form id="1" ref="myForm" className="myForm">
                        <div>
                          <label> Teacher ID</label></div>
                          <div>
                          <input type= "text" ref="tch_id" placeholder="Admission ID"/>
                          </div>
                          <div>
                          <label> Teacher Name</label></div>
                          <div>
                          <input type= "text" ref="tch_name" placeholder="Enter Name"/>
                          </div>
                          <MultipleSelect>
{/*                               
                              {selected.map((value) =>
                                <li key={value} className= "myList">
                                  key={value}
                                </li>
                              )} */}
                          </MultipleSelect> 
                                                    
                          <Button variant="contained" color="primary" onClick={(e) => this.fSubmit(e)}>SAVE</Button>
                          
                  </form>
                </div>
              </div>
          </div>
          <pre>
        {datas.map((data,i) =>
          <li key={i} className= "myList">
            {i+1}.{data.t_id},{data.t_name},{data.t_class}
            <Button variant="contained" color="primary" onClick={() => this.fRemove(i)}>Remove</Button>
            <Button variant="contained" color="primary" onClick={() => this.fEdit(i)}>Edit </Button>
          </li>
        )}
        </pre>
    </div>
    )
  }
}


export default Teacher;

