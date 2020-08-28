import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Episodes extends Component {
  state = {
    episodes: [],
  };

  componentDidMount() {
    this.loadEpisodes();
  }

  loadEpisodes = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`seasons/${id}/episodes`);
    this.setState({ episodes: response.data });
  };

  render() {
    const { episodes } = this.state;

    return (
      <div className="shows-list">
        <div className="show-details">
          <div className="show-header"></div>
        </div>
        <div className="episodes-list">
          <h1>Episodes</h1>
          <div className="episodes">
            {episodes.map((episodes) => (
              <article key={episodes.id} className="episode-info">
                <img src={episodes.image.medium} alt={episodes.name} />
                <div>
                  <h2>{episodes.name}</h2>
                  <p class="summary">{episodes.summary.substring(0, 200)}</p>
                  <p>
                    {episodes.airdate} {episodes.airtime}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
