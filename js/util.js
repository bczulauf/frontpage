const Util = (function() {
    return {
        closest: (num, arr) => {
            var curr = arr[0];
            var diff = Math.abs(num - curr);
            for (var i = 0; i < arr.length; i++) {
                var newdiff = Math.abs (num - arr[i]);
                if (newdiff < diff) {
                    diff = newdiff;
                    curr = arr[i];
                }
            }
            return curr;
        },
        createLookup: (arr1, arr2) => {
            const obj = {};
            for (let i = 0; i < arr1.length; i++) {
                obj[arr1[i]] = arr2[i];
            }
            return obj;
        },
        traverse: (obj) => {
            for (let i = 0; i < obj.options.content.length; i++) {
                const nextObj = obj.options.content[i];
                const options = nextObj.options;
                console.log(nextObj.type);

                if (options && options.content) {
                    Util.traverse(nextObj);
                }
            }
        }
    }
}());