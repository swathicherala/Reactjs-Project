const UserCard = (props) => {
    return (
        <div>
            {/* {
                props.users.map((user,index)=>(
                    <ul key={user}>
                        <li>{user.name}</li>
                        <li>{user.age}</li>
                        <li>{user.city}</li>
                    </ul>
                ))
            }
            {
                props.products.map((item,)=>(
                    <ul key={item}>
                        <li>{item.item}</li>
                        <li>{item.price}</li>
                    </ul>
                ))
            } */}
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}

export default UserCard