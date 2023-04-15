import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(RelativeTime);

export function formatDateRelative(date: Date) {
  return dayjs(date).fromNow();
}
