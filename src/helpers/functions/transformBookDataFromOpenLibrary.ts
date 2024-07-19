export const transformBookDataFromOpenLibrary = (data: any) => {
  return (data.docs || []).map((doc: any) => ({
    id: doc.key,
    volumeInfo: {
      title: doc.title,
      imageLinks: {
        thumbnail: doc.cover_i
          ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
          : "",
      },
    },
  }));
};

export default transformBookDataFromOpenLibrary;
