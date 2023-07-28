import { faShopify } from "@fortawesome/free-brands-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <>
            

            <nav class="navbar navbar-expand-lg bg-body-tertiary nav1">
                <div class="container-fluid">
                <h1 className="fashe">Tdergiin<span className="logo">.</span></h1>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav navlikat">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/about"}>About</NavLink>
                            <NavLink to={"/producs"} >Product</NavLink>
                            <NavLink to={"/contact"} >Contact</NavLink>
                        </div>
                        <div className="icons">
                        
                        <NavLink to={"/coeur"} ><FontAwesomeIcon icon={faHeart} beatFade style={{ color: "#0d0d0d", }} /></NavLink>
                        <NavLink to={"/panier"}><FontAwesomeIcon icon={faShopify} beatFade style={{ color: "#0d0d0d", }} /></NavLink>
                        </div>
                    </div>
                </div>
            </nav>






        </>
    )
}
