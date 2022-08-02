

export default function CardQuote(props) {
    let { quotess } = props

    return <div className="d-flex flex-wrap">
        {quotess.map((e)=>{ return <div className="card-body bg-danger m-5" style={{width:500,height:500}}><h3>{e.author}</h3> <p>{e.content}</p></div>})}
    </div>
                
            
            

    
    
}