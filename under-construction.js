// To show a Pop-up of Under Construction

if (document.getElementById("join-us") != null) {
  // Pop up showed when clicked on Join Us
  document.getElementById("join-us").addEventListener("click", function (e) {
    alert("Under Construction");
  });
}
// Pop up showed when clicked on share in the comment section
if (document.getElementById("share-thought-btn") != null) {
  document
    .getElementById("share-thought-btn")
    .addEventListener("click", function (e) {
      alert("Under Construction");
      let textInput = document.getElementById("comment");
      textInput.value = "";
    });
}

// Pop up showed when clicked on any one of the services
if (document.getElementById("s1") != null) {
  document.getElementById("s1").addEventListener("click", function (e) {
    alert("Under Construction");
  });
  document.getElementById("s2").addEventListener("click", function (e) {
    alert("Under Construction");
  });
  document.getElementById("s3").addEventListener("click", function (e) {
    alert("Under Construction");
  });
  document.getElementById("s4").addEventListener("click", function (e) {
    alert("Under Construction");
  });
  document.getElementById("s5").addEventListener("click", function (e) {
    alert("Under Construction");
  });
}
