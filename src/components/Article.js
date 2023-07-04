const Article = ({data}) => {
    console.log(data)
    return (
    <div>
        <img src={`/assets/${data.picture[0]}`}/>
        <h1>{ data.title.h1 }</h1>
        <p>{ data.title.p }</p>
        {Object.keys(data.content).map((elt) => (
            <p>{ data.content[elt] }</p>
        ))}
    </div>
    )
}

export default Article;