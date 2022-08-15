(function (window) {  
    var helloSpeaker = {};
    var speakWord = "Hello";

    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
        window.helloSpeaker = helloSpeaker;
    })(window);

    (function (window){
    var byeSpeaker = {};
    var speakWord = "Good Bye";

    byeSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }

     window.byeSpeaker = byeSpeaker;
    })(window);