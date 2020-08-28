import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

export default class Show extends Component {
  state = {
    tvshow: [],
    tvImage: "",
    tvRating: "",
    seasons: [],
  };

  componentDidMount() {
    this.loadMovie();
    this.loadSeasons();
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

  loadSeasons = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`/shows/${id}/seasons`);
    this.setState({ seasons: response.data });
  };

  render() {
    const { tvshow, tvImage, tvRating, seasons } = this.state;

    return (
      <div className="shows-list">
        <img src={tvImage} alt={tvshow.name} />

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
        <div className="seasons-list">
          <h1>Seasons</h1>
          <div className="seasons">
            {seasons.map((seasons) => (
              <Link to={`/episodes/${seasons.id}`} key={seasons.id}>
                <article>
                  <img
                    src={seasons.image.medium}
                    alt={`Season ${seasons.number}`}
                  />
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
