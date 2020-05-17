export const formatOpeningCrawl = (
  (content: string) => content
    .replace(/[\r\n]/g, ' ')
    .replace(/[.]/g, '. ')
    .substr(0, 123)
    .concat('...')
  );
