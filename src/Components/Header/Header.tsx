import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsBell, BsMicFill, BsSearch } from "react-icons/bs";
import { BiSolidVideoPlus } from "react-icons/bi";
import logo from "../../asset/images/ylogo.png";
import { InputGroup, InputGroupText, Input } from "reactstrap";
const Header = () => {
  return (
    <header className="header">
      <div className="d-flex align-items-center justify-content-center">
        <span>
          <RxHamburgerMenu size="1.4rem" color="white" />
        </span>
        <div className="header-logo mx-2 d-flex aling-items-center justify-content-center">
          <img src={logo} alt="" className="w-100" />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-grow-1">
        <InputGroup className=" header-search">
          <Input
            type="text"
            className="header-search-input"
            placeholder="Search..."
          />
          <InputGroupText className="header-input-group-text">
            <BsSearch size="1.4rem" color="white" />
          </InputGroupText>
        </InputGroup>

        <span>
          <BsMicFill size="1.4rem" color="white" />
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="me-4">
          <BiSolidVideoPlus size="1.4rem" color="white" />
        </div>
        <div>
          <BsBell size="1.4rem" color="white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
