import Checkbox from "@/components/ui/formFields/Checkbox";
import RadioButton from "@/components/ui/formFields/RadioButton";
import TextInput from "@/components/ui/formFields/TextInput";
import { useFormStore } from "@/store";
import type { FormElement } from "@/store/types";
import { type FormikProps, Field } from 'formik';
import { StyledErrorMessage } from "../../preview/styles";

type FormValues = Record<string, any>;


type FormElementRendererProps = {
  element: FormElement;
  formikProps?: FormikProps<FormValues> | null;
}

const FormElementRenderer = (
  { element, formikProps = null }: FormElementRendererProps
) => {
  const { elements } = useFormStore();

  if (element.conditionalLogic && formikProps) {
    const dependentField = elements.find(el => el.id === element.conditionalLogic?.dependsOn);
    if (dependentField) {
      const currentValue = formikProps.values[dependentField.id];
      if (String(currentValue) !== String(element.conditionalLogic.value)) {
        return null;
      }
    }
  }


  switch (element.type) {
    case 'textarea':
      return (
        <>
          <div>
            <Field
              as="textarea"
              name={element.id}
              disabled={element.disabled}
              placeholder={element.placeholder}
              rows={3}
            />
          </div>
          {formikProps?.errors?.[element.id] && (
            <StyledErrorMessage>{String(formikProps?.errors[element.id])}</StyledErrorMessage>
          )}
        </>
      );

    case 'select':
      return (
        <>
          <Field as="select" name={element.id}
            disabled={element.disabled}>
            <option value="">Select an option</option>
            {element.options?.map((option, idx) => (
              <option key={idx} value={option}>{option}</option>
            ))}
          </Field>
          {formikProps?.errors?.[element.id] && (
            <StyledErrorMessage>{String(formikProps?.errors[element.id])}</StyledErrorMessage>
          )}
        </>
      );

    case 'radio':
      return (
        <>
          {
            element.options?.map((option, idx) => (
              <Field key={idx} as={RadioButton} type="radio"
                disabled={element.disabled} name={element.id}
                value={option} title={option} />
            ))
          }
          {formikProps?.errors?.[element.id] && (
            <StyledErrorMessage>{String(formikProps?.errors[element.id])}</StyledErrorMessage>
          )}
        </>
      );

    case 'checkbox':
      return (
        <>
          <Field as={Checkbox} name={element.id}
            disabled={element.disabled}
          />
          <p></p>
          {formikProps?.errors?.[element.id] && (
            <StyledErrorMessage>{String(formikProps?.errors[element.id])}</StyledErrorMessage>
          )}
        </>
      );

    case 'date':
      return (
        <>
          <Field
            type="date"
            name={element.id}
            placeholder={element.placeholder}
            disabled={element.disabled}
          />
          {formikProps?.errors?.[element.id] && (
            <StyledErrorMessage>{String(formikProps?.errors[element.id])}</StyledErrorMessage>
          )}
        </>
      );

    default:
      return (
        <>
          <Field
            as={TextInput}
            type={element.type}
            name={element.id}
            placeholder={element.placeholder}
            disabled={element.disabled}
          />
          {formikProps?.errors?.[element.id] && (
            <StyledErrorMessage>{String(formikProps?.errors[element.id])}</StyledErrorMessage>
          )}
        </>
      );
  }
};

export default FormElementRenderer