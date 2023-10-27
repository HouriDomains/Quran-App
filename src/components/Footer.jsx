import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <footer>
                © <span>Sanni Aliyu {year}  </span>
            </footer>
        </div>
    )
}
export default Footer;