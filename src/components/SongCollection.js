import React from 'react';
import Song from './Song';

class SongCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let songs = this.props.songs.map(song => {
      let className;
      if (song.id === this.props.selectedSongId) {
        className = "selected"
      }

      let handleSongSelect = () => {
        this.props.onClick(song.id)
      }

      return(
        <Song
          key={song.id}
          id={song.id}
          name={song.name}
          artist={song.artist}
          album={song.album}
          className={className}
          handleClick={handleSongSelect}
        />
      )
    })

    return(
      <ul>
        {songs}
      </ul>
    )
  }
}

export default SongCollection;
