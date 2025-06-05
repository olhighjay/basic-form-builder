import { create } from "zustand";
import type { FormsStateType, FormStoreProps } from "./types";
import { persist } from "zustand/middleware";

const initialFormState: FormsStateType = {
  elements: [],
  selectedElement: null,
  history: [[]],
  historyIndex: 0,
  theme: 'light',
  previewData: {},
};

export const useFormStore = create<FormStoreProps>()(
  persist((set, get) => ({
    ...initialFormState,
    addElement: (element) => {
      set((state) => {
        const newElements = [...state.elements, element];
        const newHistory = state.history.slice(0, state.historyIndex + 1);
        newHistory.push(newElements);
        return {
          elements: newElements,
          history: newHistory,
          historyIndex: newHistory.length - 1
        };
      });
    },

    updateElement: (id, updates) => {
      set((state) => {
        const newElements = state.elements.map(el =>
          el.id === id ? { ...el, ...updates } : el
        );
        const newHistory = state.history.slice(0, state.historyIndex + 1);
        newHistory.push(newElements);
        return {
          elements: newElements,
          history: newHistory,
          historyIndex: newHistory.length - 1
        };
      });
    },

    removeElement: (id) => {
      set((state) => {
        const newElements = state.elements.filter(el => el.id !== id);
        const newHistory = state.history.slice(0, state.historyIndex + 1);
        newHistory.push(newElements);
        return {
          elements: newElements,
          selectedElement: state.selectedElement === id ? null : state.selectedElement,
          history: newHistory,
          historyIndex: newHistory.length - 1
        };
      });
    },

    selectElement: (id) => set({ selectedElement: id }),

    reorderElements: (dragIndex, hoverIndex) => {
      set((state) => {
        const newElements = [...state.elements];
        const draggedElement = newElements[dragIndex];
        newElements.splice(dragIndex, 1);
        newElements.splice(hoverIndex, 0, draggedElement);
        return { elements: newElements };
      });
    },

    undo: () => {
      set((state) => {
        if (state.historyIndex > 0) {
          const newIndex = state.historyIndex - 1;
          return {
            elements: state.history[newIndex],
            historyIndex: newIndex
          };
        }
        return state;
      });
    },

    redo: () => {
      set((state) => {
        if (state.historyIndex < state.history.length - 1) {
          const newIndex = state.historyIndex + 1;
          return {
            elements: state.history[newIndex],
            historyIndex: newIndex
          };
        }
        return state;
      });
    },

    toggleTheme: () => {
      // set((state) => ({ theme: 'dark' }))
      set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
    },

    setPreviewData: (data) => set({ previewData: data }),

    clearFormConfig: () => set({ elements: initialFormState.elements }),

    saveToHistory: () => {
      set((state) => {
        const newHistory = state.history.slice(0, state.historyIndex + 1);
        newHistory.push([...state.elements]);
        return {
          history: newHistory,
          historyIndex: newHistory.length - 1
        };
      });
    },

    loadFromJson: (json) => {
      try {
        const data = JSON.parse(json);
        set((state) => {
          const newHistory = state.history.slice(0, state.historyIndex + 1);
          newHistory.push(data.elements || []);
          return {
            elements: data.elements || [],
            history: newHistory,
            historyIndex: newHistory.length - 1
          };
        });
      } catch (error) {
        console.error('Invalid JSON');
      }
    },

    exportToJson: () => {
      const state = get();
      return JSON.stringify({
        elements: state.elements
      }, null, 2);
    }
  }),
    {
      name: 'form-store',
      partialize: (state) => ({
        elements: state.elements,
        // submittedForms: state.previewData,
      })
    }
  )
);