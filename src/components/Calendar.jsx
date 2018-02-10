import React, {Component} from "react";
import {connect} from "react-redux";
import DatePicker from "material-ui/DatePicker";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstDate: new Date(Date.now()),
      secondDate: new Date(Date.now()),
      diff: 0
    };
  }

  handleChange1 = (e, date) => {
    this.setState({
      firstDate: date
    });
  };

  handleChange2 = (e, date) => {
    this.setState({
      secondDate: date
    });
  };

  compareDates = (stateDate1, stateDate2) => {
    var date1 = new Date(stateDate1);
    var date2 = new Date(stateDate2);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
  };

  render() {
    return (
      <div className="calendar grid">
        <DatePicker
          name="firstDate"
          hintText="First Calendar"
          value={this.state.firstDate}
          onChange={this.handleChange1}
        />
        <DatePicker
          name="secondDate"
          hintText="Second Calendar"
          value={this.state.secondDate}
          onChange={this.handleChange2}
        />

        <p>
          Difference between two dates is:
          <span>&nbsp;</span>
          <code>
            {this.compareDates(this.state.firstDate, this.state.secondDate)}
          </code>
          <span>&nbsp;</span>
          day {this.state.diff > 1 ? `'s` : ""}
        </p>
      </div>
    );
  }
}

export default connect(null, {})(Calendar);
