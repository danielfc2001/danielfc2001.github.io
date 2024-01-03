import { FC } from "react"
import { LenguagePillIconType } from "./Types"

const DescriptionPillIcon:FC<LenguagePillIconType> = ({className, icon, w, h}) => {
    return (
        <img className={className} src={icon} width={w} height={h} style={{borderRadius: ".5rem"}}/>
    )
}

export default DescriptionPillIcon