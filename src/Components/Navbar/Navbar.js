import React from 'react'
import './Navbar.css'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = ({isopen,setopen}) => {
  
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const handleUserDetailsClick = () => {
    const userDetails = document.querySelector('.user-details');
    userDetails.classList.toggle('active');
  };
  
  const handleAddTaskClick = () => {
    if (!isAuthenticated) {
      alert('Please login first');
    } else {
      setopen(!isopen);
    }
  };

  return (
    <div className='nav'>
         <h1><span>N</span>otesApp</h1>
         
        <div className="right-corner"> 
            <div className='add' onClick={handleAddTaskClick}>
                    <span>+</span>
                    <p>Add Task</p>
              </div>

             {/* login logout & user details*/}

            <div className="auth">
                 { isAuthenticated ? 
                        <div className='user'>
                        <img src={user.picture} alt={user.name} onClick={handleUserDetailsClick} />
                        <div className='user-details'>
                              <h2>{user.name}</h2>
                              <p>{user.email}</p>
                               <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                          </div>
                     </div>
                     :
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                }
              </div>

          </div>
    </div>
  )
}

export default Navbar
