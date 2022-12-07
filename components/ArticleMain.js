import Image from 'next/image'
import {AiFillPlayCircle} from 'react-icons/ai'
import {IoLogoTwitter} from 'react-icons/io'
import {FaFacebook} from 'react-icons/fa'
import {GrLinkedin} from 'react-icons/gr'
import {HiOutlineLink} from 'react-icons/hi'
import {BiBookmarks} from 'react-icons/bi'
import {FiMoreHorizontal} from 'react-icons/fi'
import Banner from '../static/banner.png'

import Qazi from '../static/qazi.jpg'

const styles = {
    wrapper : 'flex items-center justify-center flex-[3] border-l border-r',
    content : 'h-screen w-full  p-[2rem]',
    postHeaderContainer : 'flex justify-between items-center mt-[2.2rem] mb-[1.2rem]',
    authorContainer : 'flex gap-[1rem]',
    authorProfileImageContainer : 'h-[3rem] w-[3rem] grid center rounded-full overflow-hidden',
    column : 'flex-1 flex flex-col justify-center',
    postDetails : 'flex gap-[.2rem] text-[#787878]',
    listenButton : 'flex items-center gap-[.2rem] text-[#1A8917]',
    socials : 'flex gap-[1rem] test-[#787878] cursor-pointer',
    space : 'w-[.5rem]',
    bannerContainer : 'h-[18rem] w-full grid center overflow-hidden mb-[2rem]',
    articleMainContainer : 'flex flex-col gap-[1rem]',
    image : 'object-cover',
    title : 'font-bold text-3xl',
    subtitle : 'font-mediumSerifItalic text-[1.4rem] text-[#292929]',
    articleText : 'font-mediumSerif text-[1.4rem] text-[#292929]' 
}
const ArticleMain = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}> 

                <div className={styles.postHeaderContainer}>

                    <div className={styles.authorContainer}>
                        
                        <div className={styles.authorProfileImageContainer}>
                            <Image
                                className={'object-cover'}
                                src = {Qazi}
                                height={100}
                                width={100}
                            />
                        </div>

                        <div className={styles.column}>
                            <div>Rafeil Qazi</div>
                            <div className={styles.postDetails}>
                                <span>
                                    June15 : 7 min read 
                                </span>
                                <span className={styles.listenButton}><AiFillPlayCircle/>Listen</span>
                            </div>
                        </div>

                    </div>

                    <div className={styles.socials}>
                        <IoLogoTwitter/>
                        <FaFacebook/>
                        <GrLinkedin/>
                        <HiOutlineLink/>
                        <div className={styles.space}/>
                        <BiBookmarks/>
                        <FiMoreHorizontal/>
                    </div>

                </div>

                <div className={styles.articleMainContainer}>
                    
                    <div className={styles.bannerContainer}>
                        <Image
                            src={Banner}
                            height={100}
                            width={100}
                            className = {styles.image}
                        />
                    </div>

                    <h1 className={styles.title}>7 tools that will make you productive in 2022</h1>
                    <h4 className={styles.subtitle}>
                        <div>
                            Mihir Karandikar , Jun 15 , 2022
                        </div>
                        <div>Brief : Productivity is a skill that can be learned</div>
                    </h4>
                    <div className={styles.articleText}>
                        Various educators teach rules governing the length of paragraphs. They may say that a paragraph should be 100 to 200 words long, or be no more than five or six sentences. But a good paragraph should not be measured in characters, words, or sentences. The true measure of your paragraphs should be ideas
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ArticleMain