import './UserPage.css'


function UserPage({user}) {
  return (
    <>
      <div>
        <h1>User Page</h1>
        <p>Welcome, {user.name}</p>
      </div>
    </>
  )
}

export default UserPage;