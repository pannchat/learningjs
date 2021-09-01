var prom = new Promise((성공,실패)=>{
    setTimeout(()=>{
        성공();
    },1000)


});

prom.then((res)=>{
    console.log('성공했어요')
}).catch(()=>{

})


async function 더하기(){
    var prom = new Promise((성공,실패)=>{
        var 힘든연산 = 1+1;
        성공();
    });
    // prom.then(()=>{
    //     console.log('성공했어요');ㄴ
    // })
    var 결과 = await prom;
    console.log(결과);
}