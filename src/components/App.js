import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId
    }

    this.handleSongSelect = this.handleSongSelect.bind(this);
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this)
  }

  handleSongSelect(id) {
    this.setState({
      selectedSongId: id
    })
  }

  handlePlaylistSelect(id) {
    this.setState({
      selectedPlaylistId: id,
      selectedSongId: this.props.data.playlists[id-1].songs[0]
    })
  }

  render() {
    console.log(this.state)
    let data = this.props.data

    let songIdsFromSelectedPlaylist = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return songIdsFromSelectedPlaylist.includes(obj.id);
    }

    let songsFromSelectedPlaylist = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="columns small-6">
          <h1>Playlists</h1>
          <PlaylistCollection
            playlists={data.playlists}
            selectedPlaylistId={this.state.selectedPlaylistId}
            onClick={this.handlePlaylistSelect}
          />
        </div>
        <div className="columns small-6">
          <h1>Songs</h1>
          <SongCollection
            songs={songsFromSelectedPlaylist}
            selectedSongId={this.state.selectedSongId}
            onClick={this.handleSongSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
