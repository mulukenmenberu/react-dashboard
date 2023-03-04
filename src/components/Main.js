import TopBar from "./TopBar"
import '../styles/theme.css'
import MainBody from "./MainBody"
const Main = ()=>{
    return(
        <div className="main">
         <TopBar/>
         <MainBody/>
        </div>
    )
}

export default Main