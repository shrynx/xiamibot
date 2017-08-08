const { searchSong } = require('music-api');

// xiami search
const xiamiSearch = async query => {
  const xiamiSongSearch = await searchSong('xiami', {
    key: query,
    limit: 10,
    page: 1,
  });

  const xiamiURL = 'http://www.xiami.com/song';

  return xiamiSongSearch.songList.map(({
    id, name, artists, album,
  }) => ({
    type: 'article',
    parse_mode: 'markdown',
    id: `${id}`,
    title: `${name} - ${artists[0].name}
${album.name}`,
    thumb_url: album.coverSmall,
    message_text: `[${name} - ${artists[0].name}](${xiamiURL}/${id})`,
  }));
};

module.exports = xiamiSearch;
