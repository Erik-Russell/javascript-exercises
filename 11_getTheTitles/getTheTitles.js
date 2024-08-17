const getTheTitles = function (arrLibrary) {
    let titles = [];
    for (let index = 0; index < arrLibrary.length; index++) {
        titles.push(arrLibrary[index].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
