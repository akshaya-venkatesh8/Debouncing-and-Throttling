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
        // we keep clearing the timer for continuous clicks
        clearTimeout(timer);

        timer = setTimeout(()=> {
            func.apply(context, args);
        }, d)
    }

}

const doThrottling = function (func, d) {
    let flag = true
    return function() {
        if (flag){
            context = this,
            args = arguments
            func.apply(context,args)
            flag = false
        }
        setTimeout(() => {
            flag = true
        }, d)
    }

}
const betterImplUsingDebounce = doDebouncing(getData, 300);
const betterImplUsingThrottle = doThrottling(getData, 1000);