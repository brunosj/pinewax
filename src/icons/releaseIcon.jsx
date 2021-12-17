import * as React from "react"
import { Link } from "gatsby"
import {
  linkIcon,
} from "../components/releasesInfo.module.css"

const ReleaseIcon = ({ url, icon, text, textMargin}) => (

    <div className="flex">
    <a href={url} target="_blank" rel="noreferrer" className="">
        <div className={linkIcon}>
            {icon}
            <div className={textMargin}>
            <span className="hidden md:block text-xs md:text-sm">{text}</span></div>
            </div>        
    </a>
    </div>
  )

export default ReleaseIcon