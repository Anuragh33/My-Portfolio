import styled from "styled-components";
import { device } from "../device";

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`;

export const HamburgerButton = styled.button`
  border: none;
  background-color: #fff;
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
    background-color: #9f5dbe;
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const NavBar = styled.div`
  width: 100%;
  border: 0.5px solid #cccccc;
  background-color: white;
  position: relative;
  border-radius: 8px;
  padding: 23px 15px;
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 8px;
  margin-top: 45px;
  z-index: 2;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    font-weight: 700;
    cursor: pointer;
    transition: all 0.5s;
  }
`;

export const DesktopNav = styled.div`
  display: none;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    font-weight: 900;
    cursor: pointer;
    transition: all 0.5s;
  }

  .margin-right {
    margin-right: 30px;
  }

  .div {
    display: flex;
    flex-direction: column;
  }

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
