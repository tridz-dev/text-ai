import React from "react";
import {useTranslation} from "react-i18next";
import ButtonHolder from "./../../../components/ButtonHolder";
import MainButton from "./../../../components/buttons/MainButton";

function InputQuery({setQuery,submitQuery}){
    const {t}=useTranslation();
    function handleCreate(){
        const queryText=document.getElementById("queryText").value;
        if(queryText){
            setQuery(queryText);
            submitQuery();
        }
    }
    return (
        <div className="flex flex-col">
            <textarea id="queryText"
            defaultValue={t("Write Placeholder")}
            className="border-0 resize-none h-36 p-5"
            style={{"boxShadow":"none"}}/>
            <ButtonHolder>
                <MainButton text={t("create")} onClickHandler={handleCreate}/>
            </ButtonHolder>
        </div>
    );
}

export default InputQuery;