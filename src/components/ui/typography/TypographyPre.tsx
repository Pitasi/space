// pre: {
//   color: 'var(--tw-prose-pre-code)',
//   backgroundColor: 'var(--tw-prose-pre-bg)',
//   overflowX: 'auto',
//   fontWeight: '400',
// },

import { classed } from "~/utils/tw";

export const TypographyPre = classed(
  "pre",
  "relative overflow-x-auto rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 [&>code]:bg-transparent"
);