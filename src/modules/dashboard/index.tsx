
import { useNavigate } from "react-router-dom";
import {
    StyledDashboardContainer,
    StyledFormsGrid,
    StyledHeader,
    StyledSubtitle,
    StyledTitle
} from "./style";
import { CreateFormCard } from "@/components/dashboard/CreateFormCard";
import { FormCard } from "@/components/dashboard/FormCard";
import { useFormStore } from "@/store";

const Dashboard: React.FC = () => {
    // const [forms, setForms] = useState<SavedForm[]>([]);
    const navigate = useNavigate();

    const goToForm = () => {
        navigate('/form-builder');
    };

    const createForm = () => {
        useFormStore.getState().clearFormConfig();
        goToForm()
    }

    return (
        <StyledDashboardContainer>
            <StyledHeader>
                <StyledTitle>My Forms</StyledTitle>
                <StyledSubtitle>Create, edit, and manage your forms</StyledSubtitle>
            </StyledHeader>

            <StyledFormsGrid>
                <CreateFormCard onClick={createForm} />
                {
                    <FormCard
                        onClick={goToForm}
                    />
                }
            </StyledFormsGrid>


        </StyledDashboardContainer>
    );
};

export default Dashboard;