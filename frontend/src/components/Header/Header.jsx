import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LANGUAGES } from "../../constants";
import { useTranslation } from 'react-i18next';

const NavbarCustom = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <>
      <Navbar className='navbar-pretty' data-bs-theme="dark" sticky="top">
        {/* <Container>
          <Navbar.Brand href="#home">Salih Hakki Bak</Navbar.Brand>
        </Container> */}
        <Container className='justify-content-center'>
          <Nav>
            <Nav.Link href="#books" className='nav-text'>{t("books")}</Nav.Link>
            <Nav.Link href="#about" className='nav-text'>{t("about")}</Nav.Link>
            <Nav.Link href="#contact" className='nav-text'>{t("contact")}</Nav.Link>
          </Nav>
        </Container>

        <select defaultValue={i18n.language} onChange={onChangeLang} className='language-select'>
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </Navbar>
    </>
  )
};

export default NavbarCustom;