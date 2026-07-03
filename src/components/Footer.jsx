import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function Footer(){
    const navigate = useNavigate()
    return (
        <footer>
            <button onClick={() =>  navigate("/footer/aboutus")}>Tesla 2026</button>
            <button onClick={() =>  navigate("/footer/contact")}>Contact</button>
            <button onClick={() =>  navigate("/footer/news")}>News</button>  
        </footer>
    )
}