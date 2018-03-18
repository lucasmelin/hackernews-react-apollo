import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.link.description} ({this.props.link.url})
        </div>
      </div>
    );
  }

  _voteForLink = async () => {
    // To be implemented later
  };
}

export default Link;
