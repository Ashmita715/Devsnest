console.log("Array questions");

// question no. 1
console.log("Question 1");
function is_array(x) {
  if (toString.call(x) === "[object Array]")
    return true;
  return false;   
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// question no. 2
console.log("Question 2");
function array_clone(list) {
  console.log(list.splice(0));
}
array_clone([1, 2, 4, 0]);
array_clone([1, 2, [4, 0]]);

// question No. 3
console.log("Question 3");
function first_element(list,n) {
  if (list == null) 
    return void 0;
  if (n == null) 
    return list[0];
  if (n < 0)
    return [];
  return list.slice(0, n);
}
console.log(first_element([7,9,0,-2]));
console.log(first_element([],3));
console.log(first_element([7,9,0,-2],3));
console.log(first_element([7, 9, 0, -2],6));
console.log(first_element([7, 9, 0, -2],-3));


// question no. 4
console.log("Question 4");
function join_elements(list) {
  console.log('"'+list.join(',')+'"');
  console.log('"'+list.join('+')+'"');
}
join_elements(["Red","Green","White","Black"]);

// question no. 5
console.log("Question 5");
function freq(list) {
  maxf=0;
  c=0;
  for(i=0;i<list.length;i++)
  {
    for(j=1;j<list.length;j++)
    {
      if(list[j] == list[i])
      {
        c++;
      }
      if(maxf<c)
      {
        maxf = c;
        item = list[i];
      }
    }
    c=0;
  }
  console.log(item+'('+maxf+' times)');
}
freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);