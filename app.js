 let m = [];
  async function load(){
const data1 = await fetch('./response.json');
const data2 = await data1.json();

for(let a=0; a<data2.products.length; a++)
{
 
for(let b=0 ; b<data2.products[a].images.length; b++)


{
m.push(data2.products[a].images[b].src); 
}
}

for(let i=0; i<m.length; i++)
{
  document.querySelector(".v"+i+"s").style.backgroundImage = "url("+m[i]+")";      
}
 
 

} 
       load();

 