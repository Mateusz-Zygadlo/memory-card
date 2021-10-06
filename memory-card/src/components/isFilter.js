const isFilter = (memoryArr) => {
    const newArr = [];
    let count = 0;

    if(!memoryArr.length == 0){        
        for(let i = 0; i < memoryArr.length; i++) {
            if(!newArr.includes(memoryArr[i])){
                newArr.push(memoryArr[i]);
            }else{
                count++;
            }
        }
    }

    if(count > 0){
        return true;
    }else{
        return false;
    }
        
}

export default isFilter;