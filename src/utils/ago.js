import { formatDistanceToNow } from "date-fns";

export const ago = (date) => {
  if (!date) return null;

  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
