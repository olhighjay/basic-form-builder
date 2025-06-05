import Sidebar from "@/components/builder/sidebar"
import { StyledFormBuilderContainer } from "./styles"
import BuilderMain from "@/components/builder/main/BuilderMain"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import PreviewPanel from "@/components/builder/preview"

const FormBuilder = () => {
    return (
        <StyledFormBuilderContainer>
            <DndProvider backend={HTML5Backend}>
                <Sidebar />
                <BuilderMain />
            </DndProvider>
            <PreviewPanel />
        </StyledFormBuilderContainer>
    )
}

export default FormBuilder