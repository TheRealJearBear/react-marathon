import React from 'react';
import Playlist from './Playlist'
class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let playlists = this.props.playlists.map((playlist) => {
      let className;
      if (playlist.id === this.props.selectedPlaylistId){
        className = 'selected'
      }
      let handlePlaylistSelect = () => {
        this.props.onClick(playlist.id)
      }
      return (
        <Playlist
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          songs={playlist.songs}
          className={className}
          handleClick={handlePlaylistSelect}
        />
      )
    });

    return(
      <ul>{playlists}</ul>
    )
  }
}

export default PlaylistCollection;
