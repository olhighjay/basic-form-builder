import FormElementRenderer from "../main/FormElementRenderer";
import { useFormStore } from "@/store";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { StyledFormPreviewContainer, StyledFormPreviewEmptyMessage, StyledFormPreviewFieldWrapper, StyledFormPreviewLabel, StyledFormPreviewRequiredAsterisk, StyledFormPreviewScrollableContent, StyledFormPreviewStyledForm, StyledFormPreviewSubmitButton } from "./styles";
import SubmissionModal from "./SubmissionModal";
import { useState } from "react";

const FormPreview = () => {
    const { elements, setPreviewData, previewData } = useFormStore();
    const [showSubmissionModal, setShowSubmissionModal] = useState(false)

    const generateValidationSchema = () => {
        const schema: Record<string, Yup.Schema<any>> = {};
        elements.forEach(element => {
            if (element.required) {
                switch (element.type) {
                    case 'email':
                        schema[element.id] = Yup.string().email('Invalid email').required(`${element.label} is equired`);
                        break;
                    case 'number':
                        schema[element.id] = Yup.number().typeError('Must be a number').required(`${element.label} is equired`);
                        break;
                    case 'phone':
                        schema[element.id] = Yup.string().matches(/^(?:\+234|0)[789][01]\d{8}$/, 'Invalid phone number').required(`${element.label} is equired`);
                        break;
                    case 'checkbox':
                        schema[element.id] = Yup.boolean().oneOf([true], 'This field must be checked');
                        break;
                    case 'select':
                    case 'radio':
                        schema[element.id] = Yup.string().required('Please select an option');
                        break;
                    default:
                        schema[element.id] = Yup.string().required(`${element.label} is equired`);
                }
            } else {
                switch (element.type) {
                    case 'email':
                        schema[element.id] = Yup.string().email('Invalid email address');
                        break;
                    case 'number':
                        schema[element.id] = Yup.number().typeError('Must be a number');
                        break;
                    case 'phone':
                        schema[element.id] = Yup.string().matches(/^(?:\+234|0)[789][01]\d{8}$/, 'Invalid phone number');

                        break;
                }
            }
        });
        return Yup.object(schema);
    };

    const initialValues: Record<string, any> = {};
    elements.forEach(element => {
        initialValues[element.id] = element.type === 'checkbox' ? false : '';
    });

    return (
        <StyledFormPreviewContainer>
            <StyledFormPreviewScrollableContent>
                {elements.length === 0 ? (
                    <StyledFormPreviewEmptyMessage>
                        Drag elements to the form builder to see preview
                    </StyledFormPreviewEmptyMessage>
                ) : (
                    <Formik
                        initialValues={initialValues}
                        validationSchema={generateValidationSchema()}
                        onSubmit={(values) => {
                            setPreviewData(values);
                            setShowSubmissionModal(true)
                        }}
                        validateOnBlur
                        validateOnChange={false}
                    >
                        {(formikProps) => {
                            const { validateForm, submitForm } = formikProps;

                            const handleSubmitClick = async () => {
                                const validationErrors = await validateForm();
                                submitForm();
                            };

                            return (
                                <StyledFormPreviewStyledForm>
                                    {elements.map((element) => (
                                        <StyledFormPreviewFieldWrapper key={element.id}>
                                            <StyledFormPreviewLabel>
                                                {element.label}
                                                {element.required && <StyledFormPreviewRequiredAsterisk>*</StyledFormPreviewRequiredAsterisk>}
                                            </StyledFormPreviewLabel>
                                            <FormElementRenderer element={element} formikProps={formikProps} />
                                        </StyledFormPreviewFieldWrapper>
                                    ))}

                                    {elements.length > 0 && (
                                        <StyledFormPreviewSubmitButton type="button" onClick={handleSubmitClick}>
                                            Submit Form
                                        </StyledFormPreviewSubmitButton>
                                    )}
                                </StyledFormPreviewStyledForm>
                            );
                        }}
                    </Formik>

                )}
            </StyledFormPreviewScrollableContent>

            <SubmissionModal
                isOpen={showSubmissionModal}
                formElements={elements}
                formData={previewData}
                onClose={() => setShowSubmissionModal(false)}
            />
        </StyledFormPreviewContainer>
    );
}

export default FormPreview