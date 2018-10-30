import React from 'react'



export function max(index, nbrMax){
    if(index < nbrMax){ return index } else { return false }
}



export function boucleDiv(customClass, content, nbrIter){
    let arrayContent = [];
    for(var i = 0; i<nbrIter; i++){
        arrayContent.push(content)
    } 
    //console.log('arrayContent',  arrayContent)
    return arrayContent.map((mycontent, i)=>{
        //console.log(' my content search', mycontent)
        return(
            <div key={i} className={customClass}>
                {mycontent}
            </div>
        )
    })
} 

