console.log("load");

function load() {
    let row = document.getElementById('row').value;
    let col = document.getElementById('col').value;


    let table = document.createElement('table');
    table.setAttribute('border', '1px solid red')
    table.style.borderCollapse = 'collapse';


    // 

    let thead = document.createElement('thead');
    let headerrow = document.createElement('tr');
    for (let i = 0; i < col; i++) {
        let th = document.createElement('th');
        th.textContent = i;
        headerrow.appendChild(th);
    }
    thead.appendChild(headerrow);
    table.appendChild(thead);

    //  row

    let tbody = document.createElement('tbody');

    for (let i = 0; i < row; i++) {
        let bodyrow = document.createElement('tr');

        for (let j = 0; j < col; j++) {
            let td = document.createElement('td');
            td.textContent = 'name';
            bodyrow.appendChild(td);
            td.style.padding = '10px'
        }
        tbody.append(bodyrow);
    }
    table.appendChild(tbody);

    let div = document.getElementById('tab');
    div.appendChild(table)

}
