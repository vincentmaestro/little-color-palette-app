//https://jsonplaceholder.typicode.com/todos/

// function geTodos (callback) {
//     const request = new XMLHttpRequest;

//     request.addEventListener('readystatechange', () =>{
//         if (request.readyState === 4 && request.status === 200){
//             callback('request ok', request.responseText)
//         }
//         else if (request.readyState === 4){
//             callback('failed to fetch data', '')
//         }
//     })

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.send();
// }

// geTodos((a, b)=>{
//     if (a === 'request ok'){
//         console.log(JSON.parse(b));
//     }
//     else{
//         console.log(a);
//     }
// });


// function fetchAlbums (album) {
//     return new Promise((resolve, reject) =>{
//         const fetch = new XMLHttpRequest;

//         fetch.addEventListener('readystatechange', () =>{
//             if (fetch.readyState === 4 && fetch.status === 200){
//                 resolve(fetch.responseText);
//             }
//             else if (fetch.readyState === 4){
//                 reject('could not fetch data');
//             }
//         });

//         fetch.open('GET', album);
//         fetch.send();
//     });
// };

// fetchAlbums('Albums/my best MIL songs.json').then((album) =>{
//     console.log(JSON.parse(album));
//     return fetchAlbums('Albums/my best TAT songs.json');
// }).then((album) =>{
//     console.log(JSON.parse(album));
//     return fetchAlbums('Albums/my best MMWTV songs.json');
// }).then((album) =>{
//     console.log(JSON.parse(album));
// }).catch((error_msg) =>{
//     console.log(error_msg);
// });

const text = document.createElement('h1');
text.textContent = 'Swipe on the boxes';
text.classList.add('text');
document.body.append(text);

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

for (i = 0; i < 400; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
}

const squares = document.querySelectorAll('.square');
const colors = ['#eb2020', '#7b1ef5', '#5aeb20', '#6f32a0', '#fff', '#1e7bf5', '#26daa4', '#ffd900', '#f091d0', '#2fc3ce', '#ee1ef5', '#98f51e', '#acce2f'];

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        const cc = colors[Math.round(Math.random() * 12)];
        square.style.backgroundColor = cc;
        container.style.border = `2px solid ${cc}`;
    });

    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = '#333';
        container.style.borderColor = 'transparent';
    });
});