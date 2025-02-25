function introduction (name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage (name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage ('Aki', 'Ember.js')

function introductionWithLanguageOptional (name, language = "Ember.js") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage ('Aki')

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}


