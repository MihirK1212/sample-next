import ReadersNav from "../../components/ReadersNav"
import Recommendations from "../../components/Recommendations"
import ArticleMain from "../../components/ArticleMain"

const styles = {
    container : 'flex'
}

const Post = () => {
    return (
        <div className={styles.container}>
            <ReadersNav/>
            <ArticleMain/>
            <Recommendations/>
        </div>
    )
}

export default Post