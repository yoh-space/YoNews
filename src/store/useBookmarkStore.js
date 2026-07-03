import { create } from "zustand";
import { setItem, getItem, removeItem } from "../utils/storage";

const useBookmarkStore = create((set, get) => ({
  bookmarks: [],
  setBookmarks: (bookmarks) => set({bookmarks: bookmarks}),
  addBookmark: async (article) => {
    const updatedBookmarks = [
      ...get().bookmarks,
      article,
    ];

    set({
      bookmarks: updatedBookmarks,
    });

    await setItem("bookmarks", JSON.stringify(updatedBookmarks));
  },

  removeBookmark: async (articleId) => {
    const updatedBookmarks = get().bookmarks.filter(
      (article) => article.id !== articleId
    );

    set({
      bookmarks: updatedBookmarks,
    });

    await removeItem("bookmarks");
    await setItem("bookmarks", JSON.stringify(updatedBookmarks));
  },
}));

export default useBookmarkStore;