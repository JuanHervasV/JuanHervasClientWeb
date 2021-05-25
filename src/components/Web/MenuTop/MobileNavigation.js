import NavLinks from "./NavLinks";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";
import "./MenuTop.scss";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburguericon = (
    <CgMenuRound
      className="hamburguer"
      size="40px"
      color="white"
      alignmentBaseline="center"
      onClick={() => setOpen(!open)}
    />
  );

  const closeicon = (
    <CgCloseO
      className="hamburguer"
      size="40px"
      color="white"
      alignmentBaseline="center"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobile-navigation">
      {open ? closeicon : hamburguericon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
