export interface FormElement {
    id: string;
    type: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    options?: string[];
    validation?: any;
    gridColumn?: number;
    conditionalLogic?: {
      dependsOn: string;
      value: any;
    };
  }

  export interface FormsStateType {
    elements: FormElement[];
    selectedElement: string | null;
    history: FormElement[][];
    historyIndex: number;
    theme: 'light' | 'dark';
    previewData: any;
}

interface FormsActionsType {
    addElement: (element: FormElement) => void;
    updateElement: (id: string, updates: Partial<FormElement>) => void;
    removeElement: (id: string) => void;
    selectElement: (id: string | null) => void;
    reorderElements: (dragIndex: number, hoverIndex: number) => void;
    undo: () => void;
    redo: () => void;
    toggleTheme: () => void;
    setPreviewData: (data: any) => void;
    clearFormConfig: () => void;
    saveToHistory: () => void;
    loadFromJson: (json: string) => void;
    exportToJson: () => string;

}

export type FormStoreProps = FormsStateType & FormsActionsType