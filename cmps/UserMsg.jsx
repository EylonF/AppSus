


export function UserMsg({ msg,type }) {
    // console.log('success', success)
    return (
        <div className={`alert alert-${type}`} role="alert">
            {msg}!
        </div>
    )

   

}