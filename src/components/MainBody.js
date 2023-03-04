import Cards from "./Cards"
import Charts from "./Charts"
import GridElements from "./GridElements"
import OtherStuff from "./OtherStuff"
const MainBody = ()=>{
    return(
        <div className="main-body">
            <Cards/>
            <Charts/>
            <GridElements/>
            <OtherStuff/>
        </div>
    )
}

export default MainBody