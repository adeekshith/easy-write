/**
 * Created by Deekshith Allamaneni on 3/31/16.
 * Copyright Deekshith Allamaneni 2016
 */
//"use strict";

function highlightTextAreaWithGivenWords(set1, set2, set3, set4, set5) {
    $('textarea').highlightTextarea({
            words: [
                {
                    words: ['browser', 'online'],
                    color: "#FDD01C"
                },
                {
                    words: ['ergonomics', 'malignant'],
                    color: "#fab22b"
                },
                {
                    words: ['quintessence'],
                    color: "#f8943a"
                },
                {
                    words: ['quantum'],
                    color: "#f67749"
                },
                {
                    words: ['javascript'],
                    color: "#f35958"
                }
            ]
        }
    );
}

//document.getElementById("easy-text-textarea").oninput=highlightTextAreaWithGivenWords([],[],[],[],[]);