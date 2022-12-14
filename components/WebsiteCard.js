import styles from '../styles/work.module.css'
import Link from 'next/link';

export default function WebsiteCard({title,heroPhoto,slug,description,github}){
    return(
        <div className={`w-20 m-1 p-2 ${styles.workWrapper}`}>
                <div className="flex flex-column">
                    <p className="montserrat-bold text-small-caps text-20">{title}</p>
                    <p className="montserrat-regular text-12 text-small-caps">{description}</p>
                </div>
                <div className='flex flex-space-around'>
                    <div className={`${styles.detailsButton}`}>
                        <p className='text-upper montserrat-regular text-11 text-white text-center'>check details</p>
                    </div>
                    <div className={`${styles.githubButton}`}>
                        <Link href={`${github}`}><p className='text-upper montserrat-regular text-11 text-white text-center'>github</p></Link>
                    </div>
                </div>
        </div>
    )
}