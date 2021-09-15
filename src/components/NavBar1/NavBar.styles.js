import styled from "styled-components";

export const NavHeading = styled.div`
  font-weight: 550;
  font-size: 2em;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const NavLink = styled.div`
  color: black;
  border-bottom: ${(props) => (props.active ? " #9ad3ff 1.5px solid" : "none")};
  padding: 0.25em 0.25em;

  &:hover {
    color: #9ad3ff;
    text-decoration: none;
  }
`;

export const NavLinkButton = styled.div`
  border: 2px solid #9ad3ff;
  padding: 0.5em 1em;
  transition: all 0.2s;

  &:hover {
    background-color: #9ad3ff;
    text-decoration: none;
    color: white;
    border-radius: 1px;
  }
`;
