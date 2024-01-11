import "./shopBagItem.css";
import { AppContext } from "../App";
import { useContext } from "react";

const ShopBagItem = ({ game, index }) => {
    const { bag, setBag } = useContext(AppContext);

    const handelRemoverFromBag = (game) => {
        setBag(bag.filter((item) => item._id !== game._id));
    };

    return (
        <tr className="shopBagItem">
            <th scope="row"> {index + 1}</th>
            <td>
                <img src={game.img} alt="" className="img-fluid" />
            </td>
            <td>{game.title}</td>
            <td>${game.price.toFixed(2)}</td>
            <td>{game.discount * 100}%</td>
            <td>${game.price * (1 - game.discount).toFixed(2)}</td>
            <td>
                <a href="#" onClick={() => handelRemoverFromBag(game)}>
                    <i className="bi bi-trash"></i>
                </a>
            </td>
        </tr>
    );
};

export default ShopBagItem;
