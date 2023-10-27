import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <footer>
                © <span>Sanni Aliyu {year}  </span>
            </footer>
        </div>
    )
}
