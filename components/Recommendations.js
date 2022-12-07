import {AiOutlineSearch} from 'react-icons/ai'
import {MdMarkEmailUnread} from 'react-icons/md'
import ReplitLogo from '../static/replit.png'
import TutorialImg from '../static/tutorial.jpg'
import CPLogo from '../static/cp.png'
import Qazi from '../static/qazi.jpg'
import JSLogo from '../static/jsLogo.png'

import Image from 'next/image'

const styles = {
    wrapper : 'h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]',
    accentedButton : 'flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full',
    searchBar : 'flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full',
    searchInput : 'border-none outline-none bg-none w-full',
    authorContainer : 'my-[2rem]',
    authorImageContainer : 'h-[5rem] w-[5rem] rounded-full overflow-hidden',
    authorName : 'font-semibold mb-[.2rem] mt-[1rem]',
    authorFollowing : 'text-[#787878]',
    authorActions : 'flex gap-[.6rem] my-[1rem]',
    actionButton : 'bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm',
    recommendationAuthorContainer : 'flex items-center gap-[.6rem]',
    recommendationAuthorImageContainer : 'rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    recommendationAuthorName : 'text-sm',
    recommendationTitle : 'font-bold',
    recommendationThumbnailContainer : 'flex flex-1 items-center justify-center h-[4rem] width-[4rem] p-2',
    recommendationThumbnail : 'object-cover',
    articleContentWrapper : 'flex items-center justify-between cursor-pointer my-[1rem]',
    articleContent : 'flex-[4]'
}



const Recommendations = () => {
    return (
        <div className={styles.wrapper}>
            
            <div className={styles.accentedButton}>
                Get Unlimited Access
            </div>
            
            <div className={styles.searchBar}>
                <AiOutlineSearch/>
                <input
                    className={styles.searchInput}
                    placeholder='Search'
                    type='text'
                />
            </div>

            <div className={styles.authorContainer}>
                
                <div className={styles.authorImageContainer}>
                    <Image
                        src={Qazi}
                        height={100}
                        width={100}
                    />
                </div>

                <div className={styles.authorName}>
                    Mihir Karandikar
                </div>

                <div className={styles.authorFollowing}>
                    1M Followers
                </div>

                <div className={styles.authorActions}>
                    <button className={styles.actionButton}>Follow</button>
                    <button className={styles.actionButton}><MdMarkEmailUnread/></button>
                </div>

            </div>

            <div className={styles.recommendationsConatiner}>
                <div className={styles.title}>More from Medium</div>


                <div className={styles.articlesContainer}>

                    {
                        recommendedPosts.map((post)=>(
                            <div className={styles.articleContentWrapper}>

                                <div className={styles.articleContent}>
                                    
                                    <div className={styles.recommendationAuthorContainer}>
                                        <div className={styles.recommendationAuthorImageContainer}><Image src={post.author.image} height={100} width={100}/></div>
                                        <div className={styles.recommendationAuthorName}>{post.author.name}</div>
                                    </div>

                                    <div className={styles.recommendationTitle}>
                                        {post.title}
                                    </div>
                                </div>
                                
                                <div className={styles.recommendationThumbnailContainer}>
                                    <Image src={post.image} className={styles.recommendationThumbnail} height={100} width={100}/>
                                </div>  

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default Recommendations

const recommendedPosts = [
    {
        title : 'How to deal with JS Projects',
        image : ReplitLogo,
        author : {
            name : 'Mihir Karandikar',
            image : CPLogo
        }
    },
    {
        title : 'Learn NextJS in 4 hours',
        image : TutorialImg,
        author : {
            name : 'Ramesh Yadav',
            image : Qazi
        }
    },
    {
        title : 'Is MERN stack the best webd framework?',
        image : JSLogo,
        author : {
            name : 'Sachin Tendulkar',
            image : CPLogo
        }
    },
]



