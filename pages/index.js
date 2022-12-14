import Header from "../components/Header"
import Banner from "../components/Banner"
import PostCard from "../components/PostCard"
import { MediumContext } from "../context/MediumContext"
import { useContext } from "react"


const styles = {
  wrapper : 'mx-auto',
  main : `flex justify-center px-20`,
  container : `max-w-7xl flex-1`,
  postsList : `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-col-3`,
}


export default function Home() {

  const {posts} = useContext(MediumContext);
  console.log("hello",posts)

  return (
    <div className={styles.wrapper}>
      
      <Header/>
      <Banner/>

      <div className={styles.main}>
        <div className={styles.container}>
          
          <div className={styles.postsList}>
            <PostCard/>
            <PostCard/>
            <PostCard/>
          </div>

        </div>
      </div>
      
    </div>
  )
}
