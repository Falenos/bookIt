var React = require('react');
var RoomList = require('RoomList');
var roomData = require('roomData');

var BookItApp = React.createClass({
  getInitialState: function () {
    return {
      date: "today",
      sorting: "",
      availFilter: false,
      searchTerm: "",
      data: roomData.dummyData // temporary, until request succeeds
    }
  },

  handlePrev: function () {
    console.log("prev is pressed");
    // build a date const that reduces the date prop by one day
    // get new data with roomData.getRooms
    // setState for date and data
  },

  handleNext: function () {
    console.log("next is pressed");
    // build a date const that increases the date prop by one day
    // get new data with roomData.getRooms
    // setState for date and data
  },

  handleSwitch: function () {
      if (document.getElementById('avail').checked) {
        this.setState({availFilter: true});
      } else {
        this.setState({availFilter: false});
      }
  },

  handleSearch: function () {
    this.setState({searchTerm: document.getElementById('search').value});
  },

  render: function () {
  // header and filters should become components
    return (
      <div>
        <header>
          <h1>BookIt</h1><hr/>
          <button type="button" className="hollow button primary prev" onClick={this.handlePrev}>Prev</button>
          <h2>{this.state.date} is the day</h2>
          <button type="button" className="hollow button primary next" onClick={this.handleNext}>Next</button>
        </header>
        <section className="Main">
          <div className="filters container">
            <div className="row">
              <form>
                <div className="search-container small-6 medium-4 large-3">
                  <label>Search for a room
                  <input type="search" id="search" placeholder="Room Name" onChange={this.handleSearch}/>
                  </label>
                </div>
                <div className="avail-container small-6 medium-4 large-3">
                  <label>Available the next hour</label>
                  <div className="switch">
                    <input className="switch-input" id="avail" type="checkbox" name="avail" onChange={this.handleSwitch}/>
                    <label className="switch-paddle" htmlFor="avail">
                      <span className="show-for-sr">See all available</span>
                    </label>
                  </div>
                </div>
              </form><hr/>
            </div>
          </div>
          <RoomList
            data={this.state.data}
            sorting={this.state.sorting}
            availFilter={this.state.availFilter}
          />
        </section>
      </div>
    );
  }
});

module.exports = BookItApp;
