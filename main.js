

getData();

async function getData(url = './degrees.json', data ={}){
    try{
        const result = await fetch(url, {

        method: 'POST', 
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
});
return Response.json();
        const data = await result.json();
        createProjectList(data);

    }catch(err){
      handleError(err);
    }
}

//function createProjectList(projects) {
  //let str = `<dl>`;
//}
