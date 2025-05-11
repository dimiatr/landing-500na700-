import Nav from "./header/Nav";
import Button from "./header/Button";

export default function Menu ({ toggleMenu, handleViewMenu, addStyleLink, toggleList, list, viewForm}) {

    return <div className="flex-1 flex flex-col justify-between gap-10 px-2.5 pb-5">
        <Nav  toggleMenu={toggleMenu} handleViewMenu={handleViewMenu} addStyleLink={addStyleLink} toggleList={toggleList} list={list}/>
        <Button text='связаться с нами' colorText={'white'} colorBg={'black'} onClick={viewForm}/>
    </div>
}