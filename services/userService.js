module.exports =  {
    findAll: function () {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("Resolving...");
                resolve([{name: "root"}, {name: "user"}]);
            }, 0);
        });
    },
    getById: function (id) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("Resolving...");
                resolve({id:id, name: "root"});
            }, 500);
        });
    }
}