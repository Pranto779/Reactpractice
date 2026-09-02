
export default function Condition({task,isBool}:any){
    let result ='';
        if(isBool){
result = ` Work: ${task} is done`
        }else{
           result = `Work: ${task} isn't done`
        }
   
return result

    
    


}