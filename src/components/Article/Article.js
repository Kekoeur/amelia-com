const Article = ({data}) => {
    console.log(data)
    return (
    <article>
        <img src="" alt=""  title=""/>
        <div className="article">
            <h2>{ data?.title }</h2>
            <p>
                data?.p
            </p>
        </div>
    </article>
    )
}

export default Article;