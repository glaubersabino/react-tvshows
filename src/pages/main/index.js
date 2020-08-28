import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

export default class Main extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const response = await api.get("/shows");
    this.setState({ shows: response.data });
  };

  render() {
    const { shows } = this.state;

    return (
      <div className="shows-list">
        {shows.map((shows) => (
          <Link to={`/show/${shows.id}`} key={shows.id}>
            <article>
              <img src={shows.image.medium} alt={shows.name} />
            </article>
          </Link>
        ))}
      </div>
    );
  }
}
