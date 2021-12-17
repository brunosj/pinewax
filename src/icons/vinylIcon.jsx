import * as React from "react"
import { Link } from "gatsby"
import {
  linkIcon,
} from "../components/releasesInfo.module.css"

const VinylIcon = ({ url, icon, text}) => (

  <Link to={url}>
        <div className={linkIcon}>
            {icon}
            <span className="text-xs md:text-sm ml-2">{text}</span>
            </div>        
    </Link>
  )

export default VinylIcon