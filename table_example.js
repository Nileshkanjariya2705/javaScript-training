
const data=['name','role' , 'department','type']

const row1=['nilesh','java developar' , 'IT','full time']
const row2=['dhiraj','backend developar' , 'IT','full time']
const row3=['parthiv','frentend developar' , 'IT','full time']
const row4=['rohit','devopp developar' , 'IT','full time']
const row5=['meet','wordpress developar' , 'IT','full time']
const row6=['parshant','DBA developar' , 'IT','full time']

const table=document.createElement('table');
table.setAttribute('border','1px solid black')

table.style.borderCollapse='collapse'

const thead=document.createElement('thead');
const headarrow=document.createElement('tr');
data.forEach((value) =>{
   const th= document.createElement('th');
   th.textContent=value
   headarrow.append(th); //
});

thead.appendChild(headarrow)

const tbody=document.createElement('tbody')
let bodyrow=document.createElement('tr');

//  row 1
row1.forEach((value) =>{
   const td= document.createElement('td');
   td.textContent=value
   bodyrow.appendChild(td); //
});

tbody.appendChild(bodyrow)

// -- row 2
 bodyrow=document.createElement('tr');

row2.forEach((value) =>{
   const td= document.createElement('td');
   td.textContent=value
   bodyrow.appendChild(td); //
});

tbody.appendChild(bodyrow)

// row 3
 bodyrow=document.createElement('tr');

row3.forEach((value) =>{
   const td= document.createElement('td');
   td.textContent=value
   bodyrow.appendChild(td); //
});

tbody.appendChild(bodyrow)

// - row 4

 bodyrow=document.createElement('tr');

row4.forEach((value) =>{
   const td= document.createElement('td');
   td.textContent=value
   bodyrow.appendChild(td); //
});

tbody.appendChild(bodyrow)

//  row 5
 bodyrow=document.createElement('tr');

row5.forEach((value) =>{
   const td= document.createElement('td');
   td.textContent=value
   bodyrow.appendChild(td); //
});

tbody.appendChild(bodyrow)



table.appendChild(thead)
table.appendChild(tbody)

const div=document.getElementById('table-container');
div.appendChild(table)
table.style.width='100%';
table.style.height='500px';
table.style.margin='auto'

// div.style.marginTop='200px'

