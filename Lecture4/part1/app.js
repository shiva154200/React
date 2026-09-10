let count=0;
btn=document.getElementById('btn');
p=document.getElementById('para')
btn.addEventListener("click",()=>{
    // console.log(count);
    count++;
    p.textContent=`Count:${count}`

})
btn1=document.getElementById('btn1');


btn1.addEventListener("click",()=>{
    // console.log(count);
    count--;
    p.textContent=`Count:${count}`

})






p.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
        // Mouse wheel downward
        count--;
        p.textContent=`Count:${count}`
    } else {
        // Mouse wheel upward
        count++;
        p.textContent=`Count:${count}`
    }

    
});
