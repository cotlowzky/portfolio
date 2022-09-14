

export default function WebsiteCard({title,heroPhoto,slug}){
    return(
        <div>
                <div>
                    <img src={heroPhoto} alt='website photo'/>
                </div>
                {title}
        </div>
    )
}