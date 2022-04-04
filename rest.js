    
    module.exports=function findAverage(...args){
        var result =0;
        let n=0;
        args.forEach(function (value,index) {
            result += value;
            n++;
        });

        return result/n;
    }
   

   