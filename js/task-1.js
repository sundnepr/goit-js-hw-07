const listWithId = document.querySelectorAll(".item");

console.log("Number of categories: "+listWithId.length);

  function findLi (element){
    const listLi = element.querySelectorAll("li"); 
    const listTitle= document.querySelector("h2");  
    console.log("Category: "+listTitle.textContent);
    console.log("Elements: "+listLi.length);
}

listWithId.forEach((element) => findLi(element));


