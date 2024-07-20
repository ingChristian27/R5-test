export const getStyles = (isActive: Boolean) => ({
  bookTitle: { textAlign: "center" },
  cardContainer: { height: isActive ? 470 : 400 },
  cardMediaContainer: { p: 2 },
  cardContend: { height: "115px" },
});
export default getStyles;
