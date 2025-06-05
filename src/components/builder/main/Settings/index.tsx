import { useFormStore } from "@/store";
import {
    StyledSettingsCheckboxWraper, StyledSettingsHeading,
    StyledSettingsSelect, StyledSettingsTextarea, StyledSettingsWrapper
} from "./styled";
import TextInput from "@/components/ui/formFields/TextInput";
import Checkbox from "@/components/ui/formFields/Checkbox";
import { StyledFormPreviewLabel } from "../../preview/styles";
import type { FormElement } from "@/store/types";
import type { ChangeEvent } from "react";

const Settings = () => {
    const { selectedElement, elements, updateElement } = useFormStore();
    const element = elements.find(el => el.id === selectedElement);

    if (!element) return null;

    const handleUpdateElement = <K extends keyof FormElement>(
        field: K,
        value: FormElement[K]
    ) => {
        updateElement(element.id, { [field]: value });
    };

    return (
        <StyledSettingsWrapper>
            <StyledSettingsHeading>Element Properties</StyledSettingsHeading>

            <div>
                <StyledFormPreviewLabel>Label</StyledFormPreviewLabel>
                <TextInput
                    type="text"
                    name="label"
                    defaultValue={element.label}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateElement('label', e.target.value)}
                />
            </div>

            <div>
                <StyledFormPreviewLabel>Placeholder</StyledFormPreviewLabel>
                <TextInput
                    type="text"
                    name="placeholder"
                    defaultValue={element.placeholder || ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleUpdateElement('placeholder', e.target.value)}
                />
            </div>

            <StyledSettingsCheckboxWraper>
                <StyledFormPreviewLabel>Required</StyledFormPreviewLabel>
                <Checkbox
                    name="required"
                    isChecked={element.required || false}
                    onChange={(e) => handleUpdateElement('required', e.target.checked)}
                />
            </StyledSettingsCheckboxWraper>

            <StyledSettingsCheckboxWraper>
                <StyledFormPreviewLabel>Disabled</StyledFormPreviewLabel>
                <Checkbox
                    name="disabled"
                    isChecked={element.disabled || false}
                    onChange={(e) => handleUpdateElement('disabled', e.target.checked)}
                />
            </StyledSettingsCheckboxWraper>

            {(element.type === 'select' || element.type === 'radio') && (
                <div>
                    <StyledFormPreviewLabel>Options (one per line)</StyledFormPreviewLabel>
                    <StyledSettingsTextarea
                        value={element.options?.join('\n') || ''}
                        onChange={(e) =>
                            handleUpdateElement(
                                'options',
                                e.target.value.split('\n').filter(Boolean)
                            )
                        }
                        rows={4}
                    />
                </div>
            )}

            <div>
                <StyledFormPreviewLabel>Conditional Logic - Depends On</StyledFormPreviewLabel>
                <StyledSettingsSelect
                    value={element.conditionalLogic?.dependsOn || ''}
                    onChange={(e) =>
                        handleUpdateElement(
                            'conditionalLogic',
                            e.target.value
                                ? {
                                    dependsOn: e.target.value,
                                    value: element.conditionalLogic?.value || ''
                                }
                                : undefined
                        )
                    }
                >
                    <option value="">No dependency</option>
                    {elements
                        .filter(el => el.id !== element.id)
                        .map(el => (
                            <option key={el.id} value={el.id}>
                                {el.label}
                            </option>
                        ))}
                </StyledSettingsSelect>
            </div>

            {element.conditionalLogic?.dependsOn && (
                <div>
                    <StyledFormPreviewLabel>Show when value equals</StyledFormPreviewLabel>
                    <TextInput
                        type="text"
                        name="conditionalLogic"
                        defaultValue={element.conditionalLogic?.value || ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleUpdateElement('conditionalLogic', {
                                dependsOn: element.conditionalLogic?.dependsOn || '',
                                value: e.target.value
                            })
                        }
                    />
                </div>
            )}
        </StyledSettingsWrapper>
    );
};

export default Settings;
