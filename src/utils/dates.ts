import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(RelativeTime);
dayjs.extend(LocalizedFormat);

export function formatDateRelative(date: Date) {
  return dayjs(date).fromNow();
}

export function formatDate(date: Date) {
  return dayjs(date).format("LL");
}
