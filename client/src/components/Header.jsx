import { FaHamburger } from "react-icons/fa"; 
import { Link } from "react-router-dom";


export default function Header() {
    return (
      <header className="py-2">
        <Link to="/" className="text-center cursor-pointer">
          <h1><FaHamburger size={55}/></h1>
          <h1>Yelp Review</h1>
        </Link>
      </header>
    )
  }
  