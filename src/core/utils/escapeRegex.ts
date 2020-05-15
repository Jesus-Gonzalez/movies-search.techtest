const escapedRegexQuery = /[-/\\^$*+?.()|[\]{}]/g;
export function escapeRegex(input: string) {
  return input.replace(escapedRegexQuery, '\\$&');
}
