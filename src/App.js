import React, { Component } from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./Searchbox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    // event.target.value always gets back what event is typed/entered.
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Cardlist robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
