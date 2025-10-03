import { headerLogo } from "../../assets/images"
import { hamburger } from "../../assets/icons"
import { navLinks } from "../constants"

const NavBar = () => {
  return (
    <div className="flex justify-between items-center gap-10 lg:justify-items-center">
      <img src={headerLogo} alt="Nike Logo" className="w-33" />
      <ul className="hidden lg:flex justify-center gap-15 text-lg text-slate-500 font-montserrat items-center">
        {navLinks.map(n => (
            <li key={n.label} href={n.href}>{n.label}</li>
        ))}
      </ul>
      <p className="font-poppins text-lg pr-10 max-lg:hidden">Sign in / Explore now</p>
      <img src={hamburger} className="w-6 lg:hidden"/>
    </div>
  )
}

export default NavBar