import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Show extends Component {
  state = {
    tvshow: [],
    tvImage: "",
    tvRating: "",
  };

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`/shows/${id}`);
    this.setState({
      tvshow: response.data,
      tvImage: response.data.image.medium,
      tvRating: response.data.rating.average,
    });
  };

  render() {
    const { tvshow, tvImage, tvRating } = this.state;
    return (
      <div className="shows-list">
        <img src={tvImage} />

        <div className="show-details">
          <div className="show-header">
            <h1>{tvshow.name}</h1>
            <p>{tvRating}</p>
          </div>
          <p>{tvshow.genres}</p>
          <p>{tvshow.status}</p>
          <p>{tvshow.language}</p>
          <p className="summary">{tvshow.summary}</p>
        </div>
      </div>
    );
  }
}
