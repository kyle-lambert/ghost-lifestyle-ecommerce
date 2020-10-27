import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import * as S from "./StyledFooter.js";

import {
  footerShopRoutes,
  footerInformationRoutes,
  footerSocialLinks,
} from "../../data/";

import BrandLogo from "../BrandLogo";

function Footer(props) {
  return (
    <S.Footer>
      <nav className="nav">
        <S.List>
          <S.ListTitle>Shop</S.ListTitle>
          {footerShopRoutes.map((route) => (
            <li key={uuidv4()} className="item">
              <S.RouteLink to={route.path}>{route.name}</S.RouteLink>
            </li>
          ))}
        </S.List>
        <S.List>
          <S.ListTitle>Information</S.ListTitle>
          {footerInformationRoutes.map((route) => (
            <li key={uuidv4()} className="item">
              <S.RouteLink to={route.path}>{route.name}</S.RouteLink>
            </li>
          ))}
        </S.List>
        <S.List>
          <S.ListTitle>Socials</S.ListTitle>
          {footerSocialLinks.map((link) => (
            <li key={uuidv4()} className="item">
              <S.Anchor href={link.href}>{link.name}</S.Anchor>
            </li>
          ))}
        </S.List>
      </nav>
      <S.LogoWrapper>
        <Link to="/">
          <BrandLogo light />
        </Link>
      </S.LogoWrapper>
    </S.Footer>
  );
}

export default Footer;
