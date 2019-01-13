export const api = 'https://images-api.nasa.gov';
export const apiAssets = 'https://images-assets.nasa.gov';
export const apiKey = '?api_key=ejPLPC3ZlGf2gRQLnw3CcFenw4TGgtvxiKeFF1aL';
export const ErrorTitle = 'Houston, we have a problem';
export const NoAssetTitle = 'No results found';
export const NoAssetSubtitle = `We couldn't find any information associated with that item ID.`;
export const NoItemsTitle = 'Search NASA media';
export const NoTitle = 'No title';
export const NoURL = '#';
export const NoDesc = 'No description available for this item.';
export const ThumbAlt = 'Click for more';
export const ReturnText = 'Return for more';
export const FullImage = 'Learn more';
export const SearchPlaceholder = 'Search';
export const requestType = {
  search: '/search?q=',
  asset: '/asset/',
};
export const mediaType = {
  video: 'video',
  image: 'image',
  audio: 'audio',
};
export const NoSearchData = [
  {
    title: NoAssetTitle,
    desc: NoAssetSubtitle,
    href: NoURL,
    itemID: null,
    type: null,
    link: 'null',
  },
];
export const loadDelay = 250;
export const inputFetchDelay = 2000;
