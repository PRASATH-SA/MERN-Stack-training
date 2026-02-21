import './footer.css'
function Footer(){
    return(
        
        <footer>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"></link>
            <div>
                <li><i className="fas fa-arrow-right"></i>Home</li><br />
                <li><i className="fas fa-arrow-right"></i>Products</li><br />
                <li><i className="fas fa-arrow-right"></i>Services</li><br />
                <li><i className="fas fa-arrow-right"></i>About</li>
            </div>
            <div>
                <li><i className="fas fa-arrow-right"></i>Facebook</li><br />
                <li><i className="fas fa-arrow-right"></i>YouTube</li><br />
                <li><i className="fas fa-arrow-right"></i>Instagram</li><br />
                <li><i className="fas fa-arrow-right"></i>LinkedIn</li>
            </div>
        </footer>
    )
}
export default Footer