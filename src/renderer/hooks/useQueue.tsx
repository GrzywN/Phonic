import { useDispatch, useSelector } from "react-redux";
import { updatePlayerState, queueActions } from "../store/queue-slice";

import type { RootState } from "../store";
import type { ListItem } from "../../types";

const useQueue = () => {
  const dispatch = useDispatch();

  const addToQueueHandler = (queueItem: ListItem) => {
    dispatch(queueActions.addItem(queueItem));
  };

  const removeFromQueueHandler = (queueItem: ListItem) => {
    dispatch(queueActions.removeItem(queueItem));
  };

  const playHandler = (queueItem: ListItem) => {
    dispatch(queueActions.playItem(queueItem));
    dispatch(updatePlayerState(queueItem));
  };

  const items = useSelector(({ queue }: RootState) => queue.items);

  return { items, addToQueueHandler, removeFromQueueHandler, playHandler };
};

export default useQueue;
