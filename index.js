let count = 0
const getData = () => {
    count++;
    console.log("Fetching Data..."+count);
}

const doDebouncing = function (func, d) {
    // the function func will be called only after delay d
    let timer;
    return function() {
        let context = this,
        args = arguments;
        clearTimeout(timer);

        timer = setTimeout(()=> {
            func.apply(context, args);
        }, d)
    }

}

const betterImpl = doDebouncing(getData, 300);