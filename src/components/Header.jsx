import './Header.css'
import profileImg from '../assets/profile.jpg' 

function Header({ homeRef, projectsRef, aboutRef, contactRef }) {
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <nav className="nav">

        {/* 왼쪽 영역 */}
        <div className="nav-left" onClick={() => scrollTo(homeRef)}>
          <img src={profileImg} alt="profile" className="profile-img" />
          <span className="logo-text">Minjeong Kim</span>
        </div>

        {/* 오른쪽 영역 */}
        <div className="nav-right">
         
          <button onClick={() => scrollTo(aboutRef)}>About Me</button>
           <button onClick={() => scrollTo(projectsRef)}>Projects</button>
          <button onClick={() => scrollTo(contactRef)}>Contact</button>
        </div>

      </nav>
    </header>
  )
}

export default Header
