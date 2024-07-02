import './AdminPage.css'

function AdminPage({user}) {
  return (
    <>
      <div>
        <h1>Admin Page</h1>
        <p>Welcome, {user.name}</p>
      </div>
    </>
  )
}

export default AdminPage;