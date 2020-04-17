
// sort fresh intervals list
const sortIntervals = (intervals) => {
   for(let i = 0 ; i <= intervals.length - 1; i++){
   for(let j = i + 1; j <= intervals.length - 1; j++){
      if(intervals[i][1] > intervals[j][1]){
       const prev = intervals[i]
       const curr = intervals[j]
       intervals[i] = curr
       intervals[j]  = prev   
     }
   }
 }
 return intervals
}


// find minimum and maximum intervals set
const sortFilteredIntervals = (numbers) => {
  return numbers.sort((a,b) => a - b)
}

// extract intervals helper
const extractIntervals = (sortedIntervals ) => {

const newIntervals = [];
let count = 0;



while (count <= sortedIntervals.length - 1 ){
   let start = sortedIntervals[count][0]
   let end =  sortedIntervals[count][1]

   if(count < sortedIntervals.length - 1){
   let nextStart = sortedIntervals[count + 1][0]
   let nextEnd = sortedIntervals[count + 1][1]

    if( start < nextStart && end < nextStart ){
       newIntervals.push([start, end])
         count++;
    } 

    if( nextStart >= start && nextStart <= end){
      const sortIntervals = sortFilteredIntervals([...sortedIntervals[count], ...sortedIntervals[count + 1]])
      newIntervals.push([sortIntervals[0], sortIntervals[sortIntervals.length - 1]]);
      count = count + 2
   }
  }
   else if(newIntervals[newIntervals.length -1 ][0] !== start) {
    newIntervals.push([start, end])
    count++;
  }
}

 return newIntervals;
}

// sum intervals
function sumIntervals(intervals){
 
 if(intervals.length === 1){
   return intervals[0][1] - intervals[0][0]
 }

const sortedIntervals = sortIntervals(intervals)
let newIntervals = extractIntervals(sortedIntervals)

console.log(newIntervals);

}

