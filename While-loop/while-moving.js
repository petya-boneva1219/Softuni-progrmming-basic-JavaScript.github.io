function move(params) {
   let shiroko= Number(params[0]);
   let duljina= Number(params[1]);
   let visochina= Number(params[2]);
   let area= shiroko*duljina*visochina;
   let sum=0;
let i=3
while (area >= 0) {
   let element=params[i];
   

  if(element==="Done"){
      console.log(`${area} Cubic meters left.`);
      return;
  }
  sum+=element;
    area-=element;
i++;
}
console.log(`No more free space! You need ${Math.abs(area)} Cubic meters more.`);

 
}
move([10,
   10,
   2,
   20,
   20,
   20,
   20,
   122
   ])