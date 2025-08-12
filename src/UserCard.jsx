
const UserCard = (props) => {


    const { name, age, city } = props;



    return <div className="user-card">
        <img src={props.img} alt="" />
        <h4>{name}</h4>
        <p>Age : {age}</p>
        <p>city : {city}</p>
    </div>
}


export default UserCard