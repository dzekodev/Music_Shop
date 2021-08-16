import '../styles/MusicItem.css'
import Money from '../Assets/cash.png'
import Sold from '../Assets/sold.png'
function MusicItem({img,title,description,price,sold}){
    return(
        <li className="productItem">
            <div className="image">
                <img src={img} alt="fzfrf" /> 
            </div>
            <div className="info">
                <div className="info-1">
                    <h6>{title}</h6>
                    <h6>{description}</h6>
                </div>
                <div  className="info-2">
                    <div>
                        <img src={Money} alt={"Money Logo"}/>
                        <h6 style={{width:25}}>{price} $</h6>
                    </div>
                    <div id="sold">
                        <img src={Sold} alt={"sold logo"}/>
                        <h6 id="sells">{sold}</h6>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default MusicItem