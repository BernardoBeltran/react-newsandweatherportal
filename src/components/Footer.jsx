import "../styles/footer.css";
const Footer = () => {
    return (
        <footer>
            <p className="texto-footer">
                &copy; {new Date().getFullYear()} NotiCALI - Todos los derechos
                reservados
            </p>
        </footer>
    );
};

export default Footer;
