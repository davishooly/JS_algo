// The task is simple - given a 2D array (list), generate an HTML table representing the data from this array.
//
//     You need to write a function called to_table/toTable, that takes three arguments:
//
//     data - a 2D array (list),
// headers - an optional boolean value. If True, the first row of the array is considered a header (see below). Defaults to False,
// index - an optional boolean value. If True, the first column in the table should contain 1-based indices of the corresponding row. If headers arguments is True, this column should have an empty header. Defaults to False.
//     and returns a string containing HTML tags representing the table.

export const formatTableContent = (data, headers=false, index=false) => {
    const tableContentHeader = [];
    const tableContent = [];
    let result = '';
    data.forEach((element, i) => {
        if(headers && i === 0 ) {
            if(index) {
                tableContentHeader.push(`<th></th>`)
            }
            element.forEach(value => {
                tableContentHeader.push(`<th>${value}</th>`)
            })
        }
        else {
            tableContent.push(`<tr>`)
            if(index) {
                tableContent.push(`<td>${!headers ? i + 1 : i }</td>`)
            }
            element.forEach((value) => {
                tableContent.push(`<td>${value === null ? '' : value }</td>`)
            })
            tableContent.push(`</tr>`)
        }
    })

    if(tableContentHeader.length){
        result = `<table><thead><tr>${tableContentHeader.join("")}</tr></thead><tbody>${tableContent.join("")}</tbody></table>`
    }
    else {
        result = `<table><tbody>${tableContent.join("")}</tbody></table>`
    }

   return result;
}
