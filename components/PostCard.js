import Image from 'next/image'
import Logo from '../static/logo.png'
import {FiBookmark} from 'react-icons/fi'
import Link from 'next/link'

const styles = {
    wrapper : `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
    authorContainer : `flex gap-[.4rem]`,
    authorImageContainer : `grid place-items-center rounded-full overflow-hidden h-[1.4rem]`,
    authorName : `font-semibold`,
    postDetails : ``,
    title : `font-bold text-2xl`,
    briefing : `text-[#787878]`,
    detailsContainer : `flex items-center justify-between text-[#787878]`,
    articleDetails : `my-2 text-[.8rem]`,
    category : 'bg-[#F2F3F2] p-1 rounded-full',
    bookMarkContainer : `cursor-pointer`
}

const PostCard = ()=>{
    return(
        <>
            <Link href={'/post/123'}>
                <div className={styles.wrapper}>

                    <div className={styles.postDetails}>

                        <div className={styles.authorContainer}>
                                
                                <div className={styles.authorImageContainer}>
                                    <Image
                                        src={Logo}
                                        className='oject-cover'
                                        height={40}
                                        width={40}
                                    />
                                </div>

                                <div className={styles.authorName}>Mihir Karandikar</div>
                        </div>

                        <div className={styles.title}>7 tools that will make you more productive</div>
                        <div className={styles.briefing}>Productivity is a skill that can be learnt</div>

                        <div className={styles.detailsContainer}>
                            <span className={styles.articleDetails}>Jun15 : 5 min read : <span className={styles.category}>productivity</span></span>
                            <span className={styles.bookMarkContainer}>
                                <FiBookmark className='h-5 w-5'/>
                            </span>
                        </div>

                    </div>

                    <div className={styles.thumbnailContainer}>
                        <Image
                            height={100}
                            width={100}
                            src={Logo}
                            className = 'object-contain'
                        />
                    </div>
                </div>
            </Link>

        </>
    )
}

export default PostCard