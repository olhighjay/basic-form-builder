import Modal from "@/components/ui/Modal";
import type { FormElement } from "@/store/types";
import {
    StyledSubmissionBtn,
    StyledSubmissionFieldContainer, StyledSubmissionFieldLabel,
    StyledSubmissionFieldList, StyledSubmissionFieldTypeBadge,
    StyledSubmissionFieldValue, StyledSubmissionFlexBetween,
    StyledSubmissionInfoContainer, StyledSubmissionInfoText
} from "./styles";

type SubmissionModalProps = {
    isOpen: boolean;
    onClose: () => void;
    formData: Record<string, any>;
    formElements: FormElement[];
};

const SubmissionModal = ({
    isOpen, onClose, formData, formElements
}: SubmissionModalProps) => {
    if (!isOpen) return null;

    const typeMap = {
        'text': 'Text',
        'email': 'Email',
        'phone': 'Phone',
        'number': 'Number',
        'date': 'Date',
        'textarea': 'Long Text',
        'select': 'Dropdown',
        'checkbox': 'Checkbox',
        'radio': 'Multiple Choice'
    } as const;

    const formatFieldType = (type: keyof typeof typeMap | string) => {
        return typeMap[type as keyof typeof typeMap] || type;
    };

    const handleDownload = () => {
        const dataStr = JSON.stringify(formData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `form-submission-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <StyledSubmissionInfoContainer>
                <StyledSubmissionInfoText>
                    Submission received on <b>{new Date().toLocaleString()}</b>
                </StyledSubmissionInfoText>
            </StyledSubmissionInfoContainer>

            <StyledSubmissionFieldList>
                {formElements.map((element) => {
                    const value = formData[element.id];

                    return (
                        <StyledSubmissionFieldContainer key={element.id}>
                            <StyledSubmissionFieldLabel>
                                {element.label}
                            </StyledSubmissionFieldLabel>
                            <StyledSubmissionFlexBetween>
                                <StyledSubmissionFieldValue>
                                    {value}
                                </StyledSubmissionFieldValue>
                                <StyledSubmissionFieldTypeBadge>
                                    {formatFieldType(element.type)}
                                </StyledSubmissionFieldTypeBadge>
                            </StyledSubmissionFlexBetween>
                        </StyledSubmissionFieldContainer>
                    );
                })}
            </StyledSubmissionFieldList>


            <StyledSubmissionBtn
                onClick={handleDownload}>
                Export Form data
            </StyledSubmissionBtn>
        </Modal>
    );
};

export default SubmissionModal;