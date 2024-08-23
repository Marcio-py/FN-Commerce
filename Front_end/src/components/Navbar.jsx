import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import "../index.css";

const Container = styled.div`
  height: 60px;
  margin-bottom: 1rem;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "24px" })}
// `;

const NavLinkLogo = styled(Link)`
  font-size: 2em;
  line-height: 1.2;
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <NavLinkLogo to="/">FN</NavLinkLogo>
        </Center>
        <Right>
          <MenuItem to="/login">SIGN IN</MenuItem>
          <MenuItem to="/Register">REGISTER</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <MenuItem to="/login"> <ShoppingCartOutlinedIcon /></MenuItem>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
