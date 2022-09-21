
import Image from "next/image";
export default function WebsiteCard({title,heroPhoto,slug,description}){
    return(
        <div className="flex">
                <div>
                    <img src={heroPhoto} alt='website photo'/>
                </div>
                <p className="montserrat-regular">{title}</p>
                <p className="montserrat-regular">{description}</p>
        </div>
    )
}