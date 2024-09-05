import { create } from "zustand";
import { persist } from "zustand/middleware";

const containers = (set) => ({
  arr: [
    { id: 1, title: "Work 1" },
    { id: 2, title: "Work 2" },
  ],
  addArr: (newValue) =>
    set((state) => ({
      arr: [...state.arr, { id: Date.now(), title: newValue }],
    })),
  delArr: (id) =>
    set((state) => ({
      arr: state.arr.filter((item, index) => item.id !== id),
    })),
});

const usePersist = {
  // name: "containers",
  getStorage: () => localStorage,
  partialize: (state) => ({
    arr: state.arr,
  }),
};

const useStore = create(persist(containers, usePersist));

export default useStore;
