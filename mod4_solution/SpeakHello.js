(function () {
  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = 'Hello';

  var helloSpeaker = {
    speak: function (window, name) {
      console.log(speakWord);
    },
  };

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;

});