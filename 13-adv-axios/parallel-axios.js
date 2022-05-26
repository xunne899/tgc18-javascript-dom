document.querySelector('#btnLoadSeq')
.addEventListener('click', async function(){
    let response1 = await axios.get("data1.json");
    let response2 = await axios.get('data2.json');

    console.log(response1.data);
    console.log(response2.data);

    document.querySelector('#content1').innerHTML = response1.data.text;
    document.querySelector('#content2').innerHTML = response2.data.text;
})

document.querySelector('#btnLoadParallel')
.addEventListener('click', function(){
    let request1 = axios.get('data1.json'); // get will load data at background // no await in front of axios
    let request2 = axios.get('data2.json');

    let response1 = await request1; // we only do await after all the axios.get has started
    let response2 = await request2;

    document.querySelector('#content1').innerHTML = response1.data.text;
    document.querySelector('#content2').innerHTML = response2.data.text;
})
