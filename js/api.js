const getdata=()=>{
    url=`https://restcountries.com/v3.1/all`;
    fetch(url)
    .then(res => res.json())
    .then(data => display(data));
}
const display=(data)=>{

    const showdata=document.getElementById('abc');

    data.forEach(element => {
        const div=document.createElement('div')
        
        div.classList.add('col-md-3');
        div.innerHTML=`
        <div class="card">
  <img src="${element.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.name.common}</h5>
    <a  onclick="onDet('${element.cca2}')" class="btn btn-primary">Reac More</a>
  </div>
</div>
        `;
        showdata.appendChild(div);
    
    });

}

const onDet=(code)=>{
   // console.log(code);
    url=`https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => show(data));
}

const show=(det)=>{
 
    const showdata=document.getElementById('acd');

    det.forEach(item => {
        const div=document.createElement('div')
        
        div.classList.add('col-md-3','mx-auto','mb-3');
        div.innerHTML=`
        <div class="card">
  <img src="${item.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name.common}</h5>
  </div>
</div>
        `;
        showdata.appendChild(div);
    
    });
}
getdata(); 