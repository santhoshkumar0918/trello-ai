import { create } from 'zustand'

interface BoardState


const useBoardStore = create<>((set) => {
  board: {
    
  },
  getBoard: async () => {
    const board =  await fetch()
  }
})