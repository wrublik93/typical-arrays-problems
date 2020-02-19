
exports.min = function min (array) {
    if(!array || !array.length){
        return 0;
    } else {
        array.sort(function(a,b) {
            return a - b;
        });
        return array[0];
    }
}

exports.max = function max (array) {
    if(!array || !array.length){
        return 0;
    } else {
        array.sort(function(a,b){
            return a - b;
        });
        return array[array.length - 1];
    }
}

exports.avg = function avg (array) {
    if(!array || !array.length){
        return 0;
    } else {
        let filter = 0;
        array.forEach(function(item){
            filter += item;
        });
        return filter / array.length;
    }
}
