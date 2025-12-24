function s({type:t="info",message:o="",duration:n=4e3}={}){window.dispatchEvent(new CustomEvent("show-toast",{detail:{type:t,message:o,duration:n}}))}export{s as showToast};
