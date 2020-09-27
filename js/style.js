let comment_nav=document.querySelector("#comment_nav");
let report_nav=document.querySelector("#report_nav");
let cmt_nav=document.querySelector("#cmt_nav");
let rpt_nav=document.querySelector("#rpt_nav");

comment_nav.addEventListener("click",checkActive);
report_nav.addEventListener("click",checkActive);

function checkActive(){
    setTimeout(()=>{
    if(comment_nav.classList[1] == "active"){
        report_nav.style.color="black";
        comment_nav.style.color="#00cccc";

        rpt_nav.style.borderColor="#00cccc";
        cmt_nav.style.borderColor="#757572a8";
    }else if(report_nav.classList[1] == "active"){
        comment_nav.style.color="black";
        report_nav.style.color="#00cccc";

        rpt_nav.style.borderColor="#757572a8";
        cmt_nav.style.borderColor="#00cccc";
    }
    },50);
    
    // console.log(report_nav.classList);
} 