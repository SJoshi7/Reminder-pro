import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addReminder} from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:''
    }
  }

  addReminder = () => {
    this.props.addReminder(this.state.text);
  }

  renderReminders = () => {
    const {reminders} = this.props;
    return(
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return(
              <li key={reminder.id} className="list-group-item">
                <div>{reminder.text}</div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    return(
      <div className="app">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to ....."
              onChange={event=> this.setState({text:event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={()=>this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
          {this.renderReminders()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    reminders: state
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({addReminder},dispatch);
// }
//since we are only adding addReminder so instead of having a whole mapDispatchToProps function
// we can simply have an object here and place addReminder as key and value below

export default connect(mapStateToProps,{addReminder})(App);
