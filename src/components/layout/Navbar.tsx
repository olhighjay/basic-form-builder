import styled from "styled-components";
import { Moon, Sun } from "lucide-react";
import useThemeContext from "@/contexts/ThemeContext";

const StyledNavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const StyledNavbarThemeSwitch = styled.span`
  cursor: pointer;
`;
const Navbar: React.FC = () => {
    const { themeMode, changeTheme } = useThemeContext();

    return (
        <StyledNavbarContainer>
            <StyledNavbarThemeSwitch onClick={() => changeTheme(themeMode === 'light' ? 'dark' : 'light')}>
                {themeMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </StyledNavbarThemeSwitch>
        </StyledNavbarContainer>
    )
}

export default Navbar