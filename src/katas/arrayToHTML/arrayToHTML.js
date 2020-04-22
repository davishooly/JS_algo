const formatTableContent = (data, headers=false, index=false) => {
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
                tableContent.push(`<td>${value}</td>`)
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
