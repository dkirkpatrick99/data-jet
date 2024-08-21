import { Link } from "react-router-dom";
import reedsLogo from "../../../public/reedsLogo.png"


function HeaderLogo({ route }: {route: string}) {
  return (
    <Link className="mx-2 lg:mx-0" to={route}>
      <img src={reedsLogo} className="h-20" alt="" />
    </Link>
  )
}

export default HeaderLogo;