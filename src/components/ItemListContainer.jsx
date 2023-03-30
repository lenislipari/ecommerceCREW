const Container = ({greeting}) => {
    return (
        <div className="alert alert-dark" role="alert">
        <h1 className="text-center">{greeting}</h1>
        </div>
        
    )
}

export default Container