// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.


// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
    const regexp = /\d{3}-\d{3}-\d{3}\s\d{2}/
    return regexp.test(string);
}


// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
    const regexp = /\d{3}-\d{3}-\d{3}\s\d{2}/;
    let match = string.match(regexp);
    if (match) {
        return match[0]
    }
    else {
        return null
    }
}


// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {
    const regexp = /\d{3}-\d{3}-\d{3}\s\d{2}/g;
    let matches = string.match(regexp);
    if (matches) {
        return matches
    }
    else {
        return null
    }
}

console.log(grabAllSNILS("The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94"))

// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {
    const regexp = /\d{3}-\d{3}-\d{3}\s\d{2}/g;
    let matches = string.match(regexp);
    let hidden = string.replace(/\d{3}-\d{3}-\d{3}/g, "XXX-XXX-XXX")
    return hidden;
}



// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {
    const regexp = /\d{3}[\s.-]?\d{3}[\s.-]?-\d{3}[\s.-]?\d{2}/g
    let format = string.replace(/\d{3}-\d{3}-\d{3}\s\d{2}/g);
    return format;
}

module.exports = {
    hasSNILS,
    grabSNILS,
    grabAllSNILS,
    hideAllSNILS,
    formatSNILS
};
