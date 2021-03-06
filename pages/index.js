import { useState, useEffect, useContext } from "react";
import Header from "../components/Header/Header"
import Progress from "../components/ProgressScroll/Progress";

import Hello from "../components/LandingPages/HelloPage/Hello"
import ProductDemo from "../components/LandingPages/ProductDemo/ProductDemo";
import AttachPage from "../components/LandingPages/AttachPage/AttachPage";

import LangSwitcher from "../components/LangSwitcher"
import InfoOfDev from "../components/InfoOfDev";

import { getHomePageContent } from "../queries/getHomePageContent";
import { getCallBackModuleContent } from "../queries/getCallBackModuleContent";
import { getProdDemoPageContent } from "../queries/getProdDemoPageContent";
import { getAttachPageContent } from "../queries/getAttachPageContent";

const HeaderContent = {
    "CatalogTitle":{
        "ru": "Каталог",
        "eng": "Catalog"
    },
    "SearchPlaceholder":{
        "ru": "Ищем что-то?",
        "eng": "Looking for something?"
    },
    "ContectsTitle":{
        "ru": "Контакты",
        "eng": "Contacts"
    },
    "CartTitle":{
        "ru": "Корзина",
        "eng": "Cart"
    },
    "LoginTitle":{
        "ru": "Войти",
        "eng": "LogIn"
    }
};

const HelloContent = {
    "Label": {
        "ru" : "ОБОРУДОВАНИЕ ДЛЯ ЛИФТОВ\ И ЭСКАЛАТОРОВ",
        "eng": "EQUIPMENT FOR ELEVATORS\ AND ESCALATORS"
    },
    "Tagline": {
        "ru": "Lift your business up \n with IST Elevator.",
        "eng": "Lift your business up \n with IST Elevator."
    },
    
    "SendFormTitle":{
        "ru": "Заказать звонок",
        "eng": "Callback request",
    },

    "SendFormName": {ru: "Имя", eng: "Name"},
    "SendFormPhone": {ru: "Телефон", eng: "Phone"},

    "SendFormSender":{
        "ru": "Отправить заявку",
        "eng": "Send a request"
    },

    "SendFormPhoneTitle":
    {
        "ru": "Наш телефон",
        "eng": "Our phone"
    },

    "CompanyPhone": {
        "ru": "+7(000)000-00-00",
        "eng": "+49(000)000-00-00"
    },
    
    "ScrollDown":{
        "ru": "Листай вниз",
        "eng": "Scroll down"
    }
};
const PDContent = {
    "Label":{
        "ru" : "БОЛЬШОЙ ВЫБОР ЗАПЧАСТЕЙ\nДЛЯ ГРУЗОПОДЪЕМНОЙ\nТЕХНИКИ",
        "eng" : "LARGE SELECTION OF PARTS\nFOR LIFTING EQUIPMENT"
    },
    "1stCard":{
        "img" : "https://res.cloudinary.com/dv9xitsjg/image/upload/v1644157443/ProductCards/lift_card_n1pcei.png",
        "ru" : "Запчасти для лифтов",
        "eng" : "Spare parts for elevators"
    },
    "2ndCard":{
        "img" : "https://res.cloudinary.com/dv9xitsjg/image/upload/v1644157443/ProductCards/escal_card_y5u29c.png",
        "ru" : "Запчасти для эскалаторов",
        "eng" : "Escalator\nParts"
    },
    "3thCard":{
        "img" : "https://res.cloudinary.com/dv9xitsjg/image/upload/v1644157443/ProductCards/btn_card_y26fg8.png",
        "ru" : "Модернизация и отделка",
        "eng" : "Modernization and finishing"
    },
    "OpenCatalog":{
        "ru" : "Открыть каталог",
        "eng" : "Open catalog"  
    },
    "AnyQuestions" :{
        "ru":"Возникли вопросы?",
        "eng":"Have questions?"
    },
    "LeaveReq" :{
        "ru": "Оставь {заявку} и мы перезвоним!",
        "eng": "Leave a {request} and we will call you back!"
    }
};

const Languages = {
    "Title" : {
        "ru" : "Язык",
        "eng" : "Language"
    },
    "ChangeText":{
        "ru" : "Переключить язык на \"ENG\" ",
        "eng" : "Switch language to \"RU\" "
    }
};





export default function Index(){
    const[globalLng, setLang] = useState("eng");
    const[height, setHeight] = useState(0);


    const[helloPageData, setHelloPageData] = useState();
    const[callBackReqContent, setcallBackReqContent] = useState();
    const[prodDemoContent, setProdDemoContent]= useState();
    const[attachPageContent, setAttachPageContent] = useState();
    // const {status, data: homePageContent, error, isFetching, isSuccess} = useQuery("HomePage_Main", async() => await getHomePageContent())
    

    // [1] MainPage get data
    useEffect(()=>{
        async function helloLoad(){
            const response = await getHomePageContent();
            setHelloPageData(response);
        }

        if(!helloPageData){
            helloLoad();
        }
    },[]);


    //[CallBack Req] 
    useEffect(()=>{
        async function CallBack(){
            const response = await getCallBackModuleContent();
            setcallBackReqContent(response);
        }

        if(!callBackReqContent){
            CallBack();
        }
    },[]);

    // [2] ProdDemo get data
    useEffect(()=>{
        async function ProdLoad(){
            const response = await getProdDemoPageContent();
            setProdDemoContent(response);
        }

        if(!prodDemoContent){
            ProdLoad();
        }
    },[]);

    // [3] AttachPage get data
    useEffect(()=>{
        async function AttachLoad(){
            const response = await getAttachPageContent();
            setAttachPageContent(response);
        }

        if(!prodDemoContent){
            AttachLoad();
        }
    },[]);
    
    // useEffect(()=>{
    //     console.log("is_index: ", api_cont);
    // });

    useEffect(()=>{
        setHeight(document.body.offsetHeight);
        
    },[]);

    function ToggleLang(){
        globalLng === "ru" ? setLang("eng") : setLang("ru");
    }

    function LangChecker(data, def, settings, lng){ 
        try{
            return (data[settings])[lng] === undefined ? def : (data[settings])[lng];
        } 
        catch{
            return def;
        }
    }

    return(
        <>
            {/* <InfoOfDev header="Информация о разработке :D">
                <b>Такое кол-во одинаковых страниц только для примера работы счетчика страниц</b><br/>
                План такой(подробнее в trello):<br/>
                ✅Сначала сделаю форму для звонка<br/>
                ✅Потом уже перейду
                к штуке которая номера страниц отображает.<br/>
                ✍Сейчас делаю адаптив того, что уже готово.<br/>
                📝Надо будет прокачать перевод, а то я изначально сделал нормально, но лучше переделать, не все случаи предусмотрел.<br/>
                📝Далее накинусь на [3] страницу.<br/><br/>
                + надо будет устроить созвон по поводу других
                страниц лендоса, но они уже после того как
                закончу с нынешним шаблоном
            </InfoOfDev> */}

            <Progress/>

            {/* <LangSwitcher
                switchFnc={ToggleLang}
                SwLangChecker={LangChecker}
                lang={globalLng}
                content={Languages}
            /> */}

            <div className="nb_container" id="LandPageContainer">
                <Hello
                HelloLangChecker={LangChecker}
                content={HelloContent}
                lang={globalLng}
                api_cont = {helloPageData}
                callBack_api = {callBackReqContent}/>

                <ProductDemo
                PDLangChecker={LangChecker}
                content={PDContent}
                lang={globalLng}
                api_cont={prodDemoContent}
                callBack_api= {callBackReqContent}/>
                
                <AttachPage/>


                <ProductDemo
                PDLangChecker={LangChecker}
                content={PDContent}
                lang={globalLng}/>

                <ProductDemo
                PDLangChecker={LangChecker}
                content={PDContent}
                lang={globalLng}/>

            </div>



            <style jsx global>
                {`
                    body{
                        min-height: ${height}px;
                    }
                `}
            </style>
        </>
    )
}


// Index.getInitialProps = async () => {
//     let api_cont = await getHomePageContent();
//     console.log("::", api_cont);
//     return {api_cont}
// }