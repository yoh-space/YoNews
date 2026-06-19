import {create} from 'zustand';
import { setItem , removeItem, getItem } from '../utils/storage';

const useBookmarkStore = create((set,get)=> ({
    bookmarks: [],
    addBookmark: async (bookmark) => {
        const updatedBookmarks = [...get().bookmarks, bookmark];
        set({ bookmarks: updatedBookmarks });
        await setItem('bookmarks', JSON.stringify(updatedBookmarks));
    },
    removeBookmark: async (bookmarkId) => {
        const updatedBookmarks = get().bookmarks.filter((b) => (b.id !== bookmarkId)); 
        set({ bookmarks: updatedBookmarks });
        await setItem('bookmarks', JSON.stringify(updatedBookmarks));
    }

}))

export default useBookmarkStore;