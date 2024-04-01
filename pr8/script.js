import { speak as speakGoodbye, speakAdd as speakAdditionalGoodbye} from "./lib/SpeakGoodBye.js"
import { speak as speakHello } from "./lib/SpeakHello.js"

(function() {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
  for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    if (currentName.charAt(0).toLowerCase() == 'j') {
      speakGoodbye(currentName);
    } else if (currentName.charAt(currentName.length - 1).toLowerCase() == "a") {
      speakAdditionalGoodbye(currentName)
    } else {
      speakHello(currentName);
    }
  }
})();