import SourceTypes from "./SourceTypes";

interface ListItem {
  id: string;
  name: string;
  source: string;
  sourceType: SourceTypes;
  type: string;
}

interface LocalFilesListItem extends ListItem {
  sourceType: SourceTypes.LOCAL_FILES;
}

interface YoutubeListItem extends ListItem {
  sourceType: SourceTypes.YOUTUBE;
}

interface SpotifyListItem extends ListItem {
  sourceType: SourceTypes.SPOTIFY;
}

export { ListItem, LocalFilesListItem, YoutubeListItem, SpotifyListItem };
