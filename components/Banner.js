import Image from 'next/image'
import Logo from '../static/banner.png'

const styles = {
    wrapper : 'h-max-[5rem] flex items-center justify-center bg-[#FCC017] border-y border-black',
    content : 'max-w-7xl flex-1 flex items-center justify-between px-10 py-5',
    accentedButton : 'bg-black text-white py-2 px-4 rounded-full',
}

const Banner = ()=>{
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.content}>

                    <div className='space-y-5 flex-3'>
                        <h1 className='max-w-xl text-[4rem] font-mediumSerif'>Stay Curious</h1>
                        <h3 className='text-2xl'>Welcome to the website</h3>
                        <button className={styles.accentedButton}>Start Reading</button>
                    </div>

                    <Image 
                        className='hidden h-32 md:inline-flex object-contain flex-1'
                        src={Logo} 
                        height={300}
                        width={400}
                    />
                </div>
            </div>
        </>
    )
}

export default Banner