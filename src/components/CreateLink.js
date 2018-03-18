import React, { Component } from "react";

class CreateLink extends Component {
  state = {
    description: "",
    url: ""
  };

  render() {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="The URL for the Link"
          />
        </div>
        <button onClick={() => this._createLink()}>Submit</button>
      </div>
    );
  }

  _createLink = async () => {
    // To be implemented
  };
}

export default CreateLink;
