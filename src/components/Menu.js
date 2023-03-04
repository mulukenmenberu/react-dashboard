import { useState } from "react"
import { Link } from "react-router-dom";
import { Navigation } from "../navigation/Navigation"
const Menu = ()=>{
    const [isactive, setActive] = useState('Home')
    const changeActiveMenu = (title)=>{
      setActive(title)
    }

    return(
        <div className="menu">
            <div className="menu-list">
            {
            Navigation.map((item,index)=>{
                
              return (
                
                <div className={isactive===item.title? 'menu-item active' : 'menu-item'} key={index} onClick={()=>changeActiveMenu(item.title)}>
                  <span><item.icon/></span>
                  <span><Link to={item.link}>{item.title}</Link> </span>
                  </div>
                   
              )
            })}
        </div>
        </div>
    )
}

export default Menu