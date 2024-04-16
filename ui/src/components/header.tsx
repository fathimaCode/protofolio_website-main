import Navbar from './navbar'
function Header() {
  return (
    <>
    <div className='header_bar'>
        <div className='logo'>
            <i className="ri-pages-line"></i>
            <span>Pro Builder</span>
            </div>
        <Navbar/>
    </div>
    </>
  )
}

export default Header