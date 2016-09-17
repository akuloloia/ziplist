/**
 *
 * Created by Tony on 9/17/2016.
 */

function zipList(first, second)
{
  if(first.length == second.length) {
    let i = 0;
    let j = 0;
    let k = 0;
    let concat = [];

    while(j < first.length)
    {
      concat[i] = first[j];
      j++;
      i++;
      concat[i] = second[k];
      k++;
      i++;
    }
    return concat;
  }
  else{
    return ("The two inputs are not the same length.");
  }
}

let list1 = ["a","b","c"];
let list2 = [1,2,3];

console.log(zipList(list1, list2));

function zipListTheSimpleWay(first, second)
{
  return _.flatten(_.zip(first, second));
}

console.log(zipListTheSimpleWay(list1, list2));