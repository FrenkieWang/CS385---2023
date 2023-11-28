import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      selectedDate: new Date(),
      isSelected: false
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(theDate){
    this.setState({isSelected: true});
    this.setState({selectedDate: theDate});
  }

  isFuture(){
    return this.state.selectedDate > new Date();
  }

  render(){
    return(
      <div className= "App">
        <div className = "container">
          <h1>Using a Date-Picker</h1>
          <form>
            Please choose a date: {" "}
            <div className = "form-group">
              <DatePicker
                dateFormat = "MMMM d, yyyy"
                closeOnScroll = {true}
                selected = {this.state.selectedDate}
                onChange = {this.handleDateChange}
              />
            </div>
          </form>

          {this.state.isSelected && (
            <p>You have choosen: {this.state.selectedDate.toString()}</p>
          )}
          {this.isFuture() && <p>This date is in the future</p>}
        </div>
      </div>
      
    ); // end of return statement
  } // end of render function
} // end of App Component

export default App;