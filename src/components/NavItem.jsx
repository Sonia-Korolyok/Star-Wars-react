import {useContext} from "react";
import {SWcontext} from "../utils/constants.js";

const NavItem = ({itemTitle}) => {
    const {changePage} = useContext(SWcontext);
    return (
        <li onClick={() => changePage(itemTitle)}
            className="bg-red-color border-black border-2 rounded-b-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white">{itemTitle}</li>
    );
};

export default NavItem;