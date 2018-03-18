import React, { Component } from "react";
import Link from "./Link";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class LinkList extends Component {
  render() {
    // Loading is true if the request is ongoing and no response
    // has been received
    if (this.props.feedQuery && this.props.feedQuery.loading) {
      return <div>Loading...</div>;
    }
    // If the request failed, the error prop contains info
    // about what exactly went wrong
    if (this.props.feedQuery && this.props.feedQuery.error) {
      return <div>Error</div>;
    }

    // Feed is the actual data received, which contains
    // a links property with all the Link elements
    const linksToRender = this.props.feedQuery.feed.links;

    return (
      <div>
        {linksToRender.map((link, index) => (
          <Link
            key={link.id}
            updateStoreAfterVote={this._updateCacheAfterVote}
            index={index}
            link={link}
          />
        ))}
      </div>
    );
  }

  _updateCacheAfterVote = (store, createVote, linkId) => {
    // Read the current state
    const data = store.readQuery({ query: FEED_QUERY });
    // Retrieve the voted-for link and change the votes
    const votedLink = data.feed.links.find(link => link.id === linkId);
    votedLink.votes = createVote.link.votes;
    // Write the modified data back to the store
    store.writeQuery({ query: FEED_QUERY, data });
  };
}
// Store the query
export const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

// Injected prop will be feedQuery instead of data
export default graphql(FEED_QUERY, { name: "feedQuery" })(LinkList);
