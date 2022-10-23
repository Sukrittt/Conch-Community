// To display the comments written in the comment box.
showText();
var intervalId;

document
  .getElementById("share-thought-btn")
  .addEventListener("click", function (e) {
    let textInput = document.getElementById("comment");

    // I am not allowing the user to use any cussword here in the comment section
    // If the value inside the text box matchex any of these cusswords then it will show a pop up.
    // An array to store all the possible cuss words
    let cussWordArray = [
      "dickhead",
      "madarchod",
      "behenchod",
      "lawde",
      "bastard",
      "pissoff",
      "asshole",
      "ass hole",
      "bitch",
      "cunt",
      "wanker",
      "twat",
      "boobs",
      "pussy",
      "ass",
      "sex",
      "chode",
      "gand",
      "chutiya",
      "chutiye",
      "lawda",
      "bugger",
      "dickweasel",
      "bakarchod",
    ];

    let textSplitArray = textInput.value.split(" ");
    outerloop: for (let i = 0; i < cussWordArray.length; i++) {
      for (let j = 0; j < textSplitArray.length; j++) {
        flag = isCussWord(cussWordArray, textSplitArray[j].toLowerCase());
        if (flag) {
          break outerloop;
        }
      }
    }
    // document.cookie =
    //   "name=Sukrit; expires=" + new Date(1999, 0, 1).toUTCString();
    // If the user has not used any cussword then proceed
    if (!flag) {
      if (textInput.value == "") {
        alert("Please write something in order to share with the community...");
      } else {
        let comments = localStorage.getItem("comments");
        // let cookieComments = document.cookie;
        // cookieComments = cookieComments.slice(9, cookieComments.length);
        if (comments == null) {
          commentsObj = [];
          // cookieObj = [];
        } else {
          commentsObj = JSON.parse(comments);
          // cookieObj = JSON.parse(cookieComments);
        }
        commentsObj.push(textInput.value);
        // cookieObj.push(textInput.value);

        localStorage.setItem("comments", JSON.stringify(commentsObj));
        // document.cookie =
        //   "comments=" +
        //   JSON.stringify(cookieObj) +
        //   "; expires=" +
        //   new Date(9999, 0, 1).toUTCString();
        showText();

        // When a user shares a comment, it should automatically scroll down to the recent message
        var elem = document.getElementById("comment-display");
        intervalId = window.setInterval(function () {
          elem.scrollTop = elem.scrollHeight;
        }, 0);
      }
    }

    textInput.value = "";
  });

document
  .getElementById("comment-display")
  .addEventListener("mouseover", function (e) {
    clearInterval(intervalId);
  });

// Performing linear search
function isCussWord(cussWordArray, word) {
  let flag = false;
  for (let i = 0; i < cussWordArray.length; i++) {
    if (word == cussWordArray[i]) {
      flag = true;
      alert("Please do not use any vulgar comments");
    }
  }
  return flag;
}

function showText() {
  let comments = localStorage.getItem("comments");
  // let cookieComments = document.cookie;
  // cookieComments = cookieComments.slice(9, cookieComments.length);
  if (comments == null) {
    commentsObj = [];
    // cookieObj = [];
  } else {
    commentsObj = JSON.parse(comments);
    // cookieObj = JSON.parse(cookieComments);
  }
  // console.log(cookieComments);
  // console.log(typeof cookieComments);

  // console.log(cookieObj);
  // console.log(typeof comments);
  // console.log(typeof cookieComments);
  // console.log(JSON.parse(cookieComments));
  let html = "";
  if (comments != null) {
    commentsObj = JSON.parse(comments);
    // cookieObj = JSON.parse(cookieComments);
    commentsObj.forEach(function (element) {
      html += `<div class="card mt-3 me-4 mb-2" style="width: 60em;background-color:#f19e39; color:#f2ecff; border:none">
          <div class="card-body">
                  <p class="card-text">${element}
                  <div class="dropdown">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="dropdown-toggle bi bi-three-dots-vertical" viewBox="0 0 16 16" data-bs-toggle="dropdown" style="position:absolute; right:20px;top: -24px; cursor:pointer">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>
                  <ul class="dropdown-menu">
                    <li><button class="dropdown-item" onclick="deleteComment(this.id)" >Delete</button></li>
                  </ul>
                  </div>
                  </p>
              </div>
          </div>`;
      let itemVariable = localStorage.getItem("comments");
      itemVariable = JSON.parse(itemVariable);
    });
  }
  let commentElement = document.getElementById("comment-display");
  commentElement.innerHTML = html;
}

// A function to delete the comment
function deleteComment(index) {
  let comments = localStorage.getItem("comments");
  if (comments == null) {
    commentsObj = [];
  } else {
    commentsObj = JSON.parse(comments);
  }
  commentsObj.splice(index, 1);
  localStorage.setItem("comments", JSON.stringify(commentsObj)); // Again sets a new local storage with updated array (after deletion of the card)
  showText();
}
