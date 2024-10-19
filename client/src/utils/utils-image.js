function getImageURL(name) {
  return new URL(
    `../../../server/public/colleges/banner/${name}`,
    import.meta.url
  ).href;
}
export { getImageURL };
