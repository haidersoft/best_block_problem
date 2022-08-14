

let requirments  = ["gym", "school", "store"];


let blocks = [
    {"gym":false , "school":true, "store":false},
    {"gym":true , "school":false, "store":false},
    {"gym":true , "school":true, "store":false},
    {"gym":false , "school":true, "store":true},
    
]

findMinDistance = ()=>{
  


found_block_utility = []; 
let recomended_block = undefined;   

let block_value = Object.values(blocks) ;

for(let i = 0; i < blocks.length;i++){
    block_value = Object.values(blocks[i]);

  for(let j = 0; j< requirments.length; j++){

    if(block_value[j] == true){

        if(found_block_utility.length == 0){
            found_block_utility.push({block: i, utility:j});
        }
        else{
          
           let isFound = false;
           found_block_utility.forEach(element => {
            
            if(element.utility == j ){
                element.block = i;
                isFound = true;
            }
            
           });
           if(!isFound){
            found_block_utility.push({block: i, utility:j});
           }
           let mindist = 0;
           if(found_block_utility.length == requirments.length){
              found_block_utility.forEach(element_i => {
                let block_dist=0;
                found_block_utility.forEach(element_j => {
                     let dist = element_i.block - element_j.block;
                     if(dist < 0) dist = dist*(-1);
                     block_dist+= dist;
                });
                // console.log(found_block_utility);
                // console.log(block_dist);
                if(mindist == 0) {
                    mindist = block_dist;
                    recomended_block = i;
                }
                else{
                    if(block_dist < mindist){
                        mindist = block_dist;
                        recomended_block = i;
                        
                    }
                }
              });
           }
        }
    }
    }
  }

  console.log(recomended_block);


}

findMinDistance();


