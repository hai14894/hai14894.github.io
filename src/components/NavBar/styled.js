import styled from "@emotion/styled";

import { breakpoints } from "../layout/constant";
import Navbar from "react-bootstrap/Navbar";

export const Container = styled("div")`
  background: white;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0 10px;
  border-bottom: solid lightgray 1px;
  & .navbar-nav .nav-link {
    text-decoration: none;
    color: black;
  }
`;

export const StyledNav = styled(Navbar)`
  & > .navbar-collapse .inner-nav div:last-child .dropdown-menu {
    visibility: hidden;
  }
  & #logo-branch {
    margin-left: calc(50% - 57.5px);
  }
  @media (min-width: ${breakpoints.lg}px) {
    & > .navbar-collapse {
      margin-left: -131px;
    }
    & > .navbar-collapse .inner-nav {
      width: 100%;
      justify-content: center;
    }
    & > .navbar-collapse .inner-nav div:last-child {
      position: absolute;
      right: 0;
      & .dropdown-menu {
        visibility: hidden !important;
      }
    }
    & #logo-branch {
      margin-left: 0;
    }
  }
`;
