import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./index.css";
import Menu from "./components/Menu";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const [size, setSize] = useState(null);
  const [menu, setMenu] = useState(false);
  const [list, setList] = useState(false);
  const [view, setView] = useState({ menu: false, view: false, overlay: false, viewForm: false });
  const [news, setNews] = useState(null);
  const [formInpts, setFormInpts] = useState({
    name: '',
    phone: '',
    email: '',
  })

  useEffect(() => {
    function widthWindow() {
      setSize(window.innerWidth);
      if (size > 768) {
        setMenu(false);
      }
    }

    widthWindow();
    window.addEventListener("resize", widthWindow);
    return () => window.removeEventListener("resize", widthWindow);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const addNews = setTimeout(() => {
      async function getData() {
        try {
          const res = await fetch(`${import.meta.env.BASE_URL}data.json`);
          if (!res.ok) {
            throw new Error(`Ошибка при загрузке: ${res.statusText}`);
          }
          const data = await res.json();
          if (isMounted) {
            setNews(data);
          }
        } catch (error) {
          if (isMounted) {
            console.error("Fetch error:", error);
          }
        }
      }
      getData();
    }, 1000);

    return () => {
      clearTimeout(addNews);
      isMounted = false;
    };
  }, []);

  function toggleMenu() {
    setMenu((prev) => !prev);
  }

  function toggleList() {
    setList((prev) => !prev);
  }

  function addStyleLink() {
    return list ? "text-white/50" : "hover:text-white/50";
  }

  function handleViewMenu(isHover) {
    if (list) {
      setView((prev) => ({
        ...prev,
        menu: true,
        view: true,
      }));
    } else if (isHover) {
      setView((prev) => ({
        ...prev,
        menu: true,
        view: false,
      }));

      setTimeout(() => {
        setView((prev) => ({
          ...prev,
          view: true,
        }));
      }, 100);
    } else {
      setView((prev) => ({
        ...prev,
        menu: false,
        view: false,
      }));
    }
  }

  function viewForm() {
    setView((prev) => ({
      ...prev,
      overlay: true,
      viewForm: false,
    }));

    setTimeout(() => {
      setView((prev) => ({
        ...prev,
        viewForm: true,
      }));
    }, 100);
  }

  function closeForm() {
    setView((prev) => ({
      ...prev,
      overlay: false,
      viewForm: false,
    }));
  }

  function inptsChange(e) {
    const { name, value } = e.target;
    setFormInpts((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-black">
        <Header
          size={size}
          menu={menu}
          toggleMenu={toggleMenu}
          handleViewMenu={handleViewMenu}
          addStyleLink={addStyleLink}
          toggleList={toggleList}
          view={view}
          list={list}
          viewForm={viewForm}
        />
        {size < 768 && menu && <Menu toggleMenu={toggleMenu} handleViewMenu={handleViewMenu}
          addStyleLink={addStyleLink}
          toggleList={toggleList} list={list} viewForm={viewForm} />}
        {!menu && (
          <>
            <Main news={news} size={size} />
            <Footer size={size}/>
          </>
        )}
        {view.overlay && <Form formInpts={formInpts} view={view} closeForm={closeForm} size={size} inptsChange={inptsChange} />}
      </div>
    </>
  );
}

export default App;
