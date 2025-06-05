import { useFormStore } from "@/store";

import { useState } from "react";
import FormPreview from "./FormPreview";
import JsonPreview from "./JsonPreview";
import { Download, Eye, Upload } from "lucide-react";
import { Code } from "lucide-react";
import {
    StyledFlexBetween, StyledHiddenInput,
    StyledPrevBtnFlex,
    StyledPreviewContainer, StyledPreviewIcon,
    StyledPreviewTabButton, StyledPreviewTabHeader,
    StyledSubmissionBtn
} from "./styles";

const PreviewPanel = () => {
    const [activeTab, setActiveTab] = useState('form');
    const {
        exportToJson,
        loadFromJson
    } = useFormStore();


    const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target?.result && typeof e.target.result === 'string') {
                    loadFromJson(e.target.result);
                }
            };
            reader.readAsText(file);
        }
    };

    const handleExport = () => {
        const json = exportToJson();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'form-builder.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <StyledPreviewContainer>
            <StyledFlexBetween>
                <StyledPreviewTabHeader>
                    <StyledPreviewTabButton
                        active={activeTab === 'form'}
                        onClick={() => setActiveTab('form')}
                    >
                        <StyledPreviewIcon><Eye size={16} /></StyledPreviewIcon>
                        Preview
                    </StyledPreviewTabButton>
                    <StyledPreviewTabButton
                        active={activeTab === 'json'}
                        onClick={() => setActiveTab('json')}
                    >
                        <StyledPreviewIcon><Code size={16} /></StyledPreviewIcon>
                        JSON
                    </StyledPreviewTabButton>
                </StyledPreviewTabHeader>
                <StyledPrevBtnFlex>
                    <StyledSubmissionBtn
                        onClick={handleExport}>
                        <Download size={20} />
                    </StyledSubmissionBtn>
                    <StyledSubmissionBtn>
                        <Upload size={20} />
                        <StyledHiddenInput type="file" accept=".json" onChange={handleImport} />
                    </StyledSubmissionBtn>
                </StyledPrevBtnFlex>
            </StyledFlexBetween>

            {activeTab === 'json' ? <JsonPreview /> : <FormPreview />}

        </StyledPreviewContainer>
    );
};

export default PreviewPanel