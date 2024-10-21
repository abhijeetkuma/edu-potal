function getImageURL(name) {
  return new URL(
    `../../../server/public/colleges/banner/${name}`,
    import.meta.url
  ).href;
}
function getGalleryURL(name) {
  return new URL(
    `../../../server/public/colleges/gallery/${name}`,
    import.meta.url
  ).href;
}
export { getImageURL, getGalleryURL };
