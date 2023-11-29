import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App(){

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSelected, setIsSelected] = useState(false);

  function handleDateChange(theDate){
    setIsSelected(true);
    setSelectedDate(theDate);
  }

  function isFuture(){
    return selectedDate > new Date();
  }


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
              selected = {selectedDate}
              onChange = {handleDateChange}
            />
          </div>
        </form>

        {isSelected && (
          <p>You have choosen: {selectedDate.toString()}</p>
        )}
        {isFuture() && <p>This date is in the future</p>}
      </div>
    </div>
  )
}

export default App;