import './navBar.css'

function NavBar() {
  return (
    <>
        <div className="App">
            <nav id='nav'>
                <ol>
                    <li><img src="https://www.favoflex.com/FAVOFLEX.svg" width={30} alt="" /></li>
                    <li><a href='https://prasath.in'>Home</a></li>
                    <li><a href='https://favoflex.com'>Product</a></li>
                    <li><a href='https://prasath-sa.github.io/Calculator'>Services</a></li>
                </ol>
            </nav>
        </div>
    </>
  )
}
export default NavBar
