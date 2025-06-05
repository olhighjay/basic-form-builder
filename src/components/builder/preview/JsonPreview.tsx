import { useFormStore } from "@/store";
import { StyledJsonCodeBlock, StyledJsonContainer, StyledJsonContent } from "./styles";

const JsonPreview = () => {
    return (
        <StyledJsonContainer>
      <StyledJsonContent>
        <StyledJsonCodeBlock>
          {useFormStore.getState().exportToJson()}
        </StyledJsonCodeBlock>
      </StyledJsonContent>
    </StyledJsonContainer>
      );
}

export default JsonPreview