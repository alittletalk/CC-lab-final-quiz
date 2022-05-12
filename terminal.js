var data = [
    {
      Text: "<span>In order to create a good Social Media Using environment<br/><br/>It is the responsibility of every citizen to be aware of and familiar with Social Media Code of Conduct<br/><br/>You will prove to us that you have learned and are proficient the Social Media Code of Conduct<br/><br/>by taking the following tests<br/><br/>Are you ready?<br/><br/><br/><br/><a href='logo.html'>Yes I am Ready<a/><span/>"
    }
  ];
  
  var allElements = document.getElementsByClassName("typeing");
  for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var devTypeText = currentElementIdContent;
  
    // type code
    var i = 0, isTag, text;
    (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 60);
    })();
  }
  