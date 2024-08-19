import { Link } from "react-router-dom";
import Logo from "../../component/Logo/Logo";

const Footer2 = () => {
  return (
    <div className="footer max-w-6xl mx-auto items-center py-2    text-neutral-content">
      <aside className="items-center grid-flow-col">
       
        <Logo />
        <p>Copyright © 2024 | Developed By: BeTechLab | All Right Reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* <a>
       <span>Disciner</span>
        </a>
        <a>
          <span>
            Policy
          </span>
        </a>
        <a>
          <span>
            Terms
          </span>
        </a> */}
        <Link to="/dashboard">
        Dashboard
        </Link>
      </nav>
    </div>
  );
};

export default Footer2;
