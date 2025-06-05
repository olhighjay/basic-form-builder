import styled from "styled-components";

export const StyledFormBuilderContainer = styled.div`
    flex: 1;
    display: flex;
    max-width: 1320px;

    @media only screen and (max-width: 1024px) {
        flex-wrap: wrap;
        width: 100%;
    }
`