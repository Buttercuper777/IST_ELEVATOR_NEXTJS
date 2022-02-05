import Logo from "../Logo"
import CatalogBtn from "./CatalogBtn"
import Search from "./Search"
import Contacts from "./Contacts"
import Cart from "./Cart"
import Login from "./Login"

import styles from "../../styles/Header.module.css"
export default function  Header({HeaderLangChecker, content, lang}){
    return(
        <>
         <div className={styles.header}>
            <div className="container">
                <div className={styles.HeaderContent}>
                    <Logo w="218" h="65" href="./"/>

                    <div className={styles.catalogAndSearch}>
                        <CatalogBtn text={
                           HeaderLangChecker(content,
                            "Каталог",
                            "CatalogTitle",
                            lang)
                        }/>
                        <Search placeholder={
                           HeaderLangChecker(content,
                            "Ищем что-то?",
                            "SearchPlaceholder",
                            lang)
                        }/>
                    </div>

                    <div className={styles.infoLoginCart}>
                        <Contacts contTitle={
                           HeaderLangChecker(content,
                            "Контакты",
                            "ContectsTitle",
                            lang)
                        }/>
                        <Cart cartTitle={
                           HeaderLangChecker(content,
                            "Корзина",
                            "CartTitle",
                            lang)
                        }/>
                        <Login loginTitle={
                           HeaderLangChecker(content,
                            "Войти",
                            "LoginTitle",
                            lang)
                        }/>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}
