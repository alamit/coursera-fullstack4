// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

(function () {
  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = 'Good Bye';

  var byeSpeaker = {
    speak: function (name) {
      console.log(speakWord + ' ' + name);
    },
  };

  this.byeSpeaker = byeSpeaker;

})();
