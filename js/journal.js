function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var splitBody = this.body.split(" ");
  return splitBody.length;
};

exports.entryModule = Entry;
