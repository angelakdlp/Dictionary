
document.getElementById("searchBtn").addEventListener("click", function () {
    var wordInput = document.getElementById("wordInput");
    var word = wordInput.value.trim();

    if (!word) {
        alert("Please enter a word.");
        return;
    }

    // Predefined set of words and their definitions
    var localDictionary = {
        "yes": {
            word: "yes",
            meanings: [
                {
                    partOfSpeech: "noun",
                    definitions: [
                        "Used to give an affirmative response.",
                        "Used as a response to someone addressing one or otherwise trying to attract one's attention."
                    ]
                }
            ]
        },
        "panacea": {
            word: "panacea",
            meanings: [
                {
                    partOfSpeech: "noun",
                    definitions: ["An answer or solution for all problems or difficulties."]
                }
            ]
        },
        "concatenation": {
            word: "concatenation",
            meanings: [
                {
                    partOfSpeech: "noun",
                    definitions: ["A series of interconnected or interdependent things or events."]
                }
            ]
        },
        "saw": {
            word: "saw",
            meanings: [
                {
                    partOfSpeech: "verb",
                    definitions: [
                        "Cut (something) using a saw.",
                        "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."
                    ]
                }
            ]
        },
        "found": {
            word: "found",
            meanings: [
                {
                    partOfSpeech: "adjective",
                    definitions: [
                        "Having been discovered by chance or unexpectedly.",
                        "(of a ship) Equipped; Supplied."
                    ]
                }
            ]
        },
        "crane": {
            word: "crane",
            meanings: [
                {
                    partOfSpeech: "verb",
                    definitions: [
                        "Stretch out one's body or neck in order to see something.",
                        "Move (a heavy object) with a crane."
                    ]
                }
            ]
        },
        "minute": {
            word: "minute",
            meanings: [
                {
                    partOfSpeech: "noun",
                    definitions: [
                        "A period of time equal to sixty seconds or a sixtieth of an hour.",
                        "A sixtieth of a degree of angular measurement (symbol: ʹ)"
                    ]
                }
            ]
        },
        "grotesque": {
            word: "grotesque",
            meanings: [
                {
                    partOfSpeech: "adjective",
                    definitions: ["Comically or repulsively ugly or distorted."]
                }
            ]
        },
        "label": {
            word: "label",
            meanings: [
                {
                    partOfSpeech: "noun",
                    definitions: ["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
                }
            ]
        },
        "debacle": {
            word: "debacle",
            meanings: [
                {
                    partOfSpeech: "noun",
                    definitions: ["A sudden and ignominious failure; a fiasco."]
                }
            ]
        },
        // Add more words and definitions as needed
    };

    displayDefinition(localDictionary[word] || null);

    function displayDefinition(entry) {
        var outputContainer = document.getElementById("outputContainer");
        outputContainer.innerHTML = "";

        if (!entry) {
            displayError();
            return;
        }

        var wordDiv = createDivElement("word", entry.word);
        outputContainer.appendChild(wordDiv);

        entry.meanings.forEach(meaning => {
            var partOfSpeechDiv = createDivElement("partOfSpeech", `Part of Speech: ${meaning.partOfSpeech}`);
            outputContainer.appendChild(partOfSpeechDiv);

            meaning.definitions.forEach(definition => {
                var definitionDiv = createDivElement("definition", `Definition: ${definition}`);
                outputContainer.appendChild(definitionDiv);
            });
        });
    }

    function displayError() {
        var outputContainer = document.getElementById("outputContainer");
        outputContainer.innerHTML = "Word not found";
    }

    function createDivElement(className, textContent) {
        var div = document.createElement("div");
        div.className = className;
        div.textContent = textContent;
        return div;
    }
});