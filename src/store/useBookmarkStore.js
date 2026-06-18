import { create } from "zustand";
import { setItem, getItem, removeItem } from "../utils/storage";

const useBookmarkStore = create((set, get) => ({
  bookmarks: [],
  addBookmark: async (article) => {
    const updatedBookmarks = [
      ...get().bookmarks,
      article,
    ];

    set({
      bookmarks: updatedBookmarks,
    });

    await setItem("bookmarks", updatedBookmarks);
  },

  removeBookmark: async (articleId) => {
    const updatedBookmarks = get().bookmarks.filter(
      (article) => article.id !== articleId
    );

    set({
      bookmarks: updatedBookmarks,
    });

    await removeItem("bookmarks");
    await setItem("bookmarks", updatedBookmarks);
  },
}));

export default useBookmarkStore;