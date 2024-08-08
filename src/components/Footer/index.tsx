const Footer = () => {
    const currentDate = new Date().getFullYear();

    return(
        <footer>
            <p>&copy; {currentDate} | See repo in <a href='https://github.com/blombergalex/music-library2.0' target='_blank'>Github @ blombergalex</a></p>
        </footer>
    )
}

export default Footer;