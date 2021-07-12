const Card = (props) => {
    return(
        <div className="container">
            <div className="card">
                <div className="title"><h1>{props.title}</h1></div>
                <h2>you have consumed <span className="cal">{props.cal}</span> cals today</h2>
            </div>
        </div>
    );
};
export default Card;