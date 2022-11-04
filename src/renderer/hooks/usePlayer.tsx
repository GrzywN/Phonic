import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { playerActions } from "../store/player-slice";

const usePlayer = () => {
  const dispatch = useDispatch();

  const shuffleHandler = () => dispatch(playerActions.switchShuffle());
  const playPauseHandler = () => dispatch(playerActions.switchIsPlaying());
  const repeatHandler = () => dispatch(playerActions.switchRepeat());
  const currentTimeHandler = (second: number) => {
    dispatch(playerActions.setCurrentTrackSecond(second));
  };

  const title = useSelector(({ player }: RootState) => player.title);
  const source = useSelector(({ player }: RootState) => player.source);

  const shuffle = useSelector(({ player }: RootState) => player.shuffle);
  const playing = useSelector(({ player }: RootState) => player.isPlaying);
  const repeat = useSelector(({ player }: RootState) => player.repeat);
  const currentSecond = useSelector(({ player }: RootState) => player.currentTrackSecond);
  const totalLength = useSelector(({ player }: RootState) => player.totalTrackLength);

  const volume = useSelector(({ player }: RootState) => player.volume);

  const volumeHandler = (value: number) => {
    dispatch(playerActions.setVolume(value));
  };

  const muteHandler = () => {
    volume > 0 ? dispatch(playerActions.setVolume(0)) : dispatch(playerActions.setVolume(100));
  };

  return {
    title,
    source,
    shuffle,
    playing,
    repeat,
    currentSecond,
    totalLength,
    shuffleHandler,
    playPauseHandler,
    repeatHandler,
    currentTimeHandler,
    volume,
    volumeHandler,
    muteHandler,
  };
};

export default usePlayer;
