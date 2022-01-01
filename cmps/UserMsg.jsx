


export function UserMsg({ msg,type }) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {msg}!
        </div>
    )

   

}