import React,{useState} from "react";

function InputQuery({setAnalyzeText,submitAnalyze}){
    // const handleCreate=()=>{
    //     const queryText=document.getElementById("queryText").value;
    //     // queryText && setQuery(queryText) && submitQuery();
    //     if(queryText){
    //         setQuery(queryText);
    //         submitQuery();
    //     }
    // }
    const handleAnalyze=()=>{
        const analyzeText=document.getElementById("analyzeText").value;
        if(analyzeText){
            setAnalyzeText(analyzeText);
            submitAnalyze();
        }
    }
    return (
        <div className="h-full">
            <div className="text-4xl font-bold">Analyze</div>
            <div className="flex flex-col p-5 mt-12 border border-black border-dashed rounded-md">
                <textarea id="analyzeText"
                defaultValue="The nation wants to know"
                className="border-0 resize-none h-36"
                style={{"boxShadow":"none"}}/>
                <div className="mt-2">
                    <button className="h-9 items-center rounded-md border float-right
                    border-transparent bg-slate-900 px-4 py-2 text-sm font-medium 
                    text-white hover:bg-slate-700 focus:outline-none focus:ring-2 
                    focus:ring-brand-500 focus:ring-offset-2"
                    onClick={handleAnalyze}
                    >
                        Create</button>
                </div>
            </div>
        </div>
    );
}

export default InputQuery;