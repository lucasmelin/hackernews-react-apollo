import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

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

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

// ombine te component with the mutation
export default graphql(POST_MUTATION, { name: "postMutation" })(CreateLink);
