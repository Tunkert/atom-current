(function() {
  var LineMessageView, MessagePanelView, PlainMessageView, config, content, cssLint, editor, loophole, messages, ref, result;

  ref = require('atom-message-panel'), MessagePanelView = ref.MessagePanelView, PlainMessageView = ref.PlainMessageView, LineMessageView = ref.LineMessageView;

  config = require("./config");

  cssLint = require("csslint").CSSLint;

  loophole = require("loophole").allowUnsafeEval;

  messages = new MessagePanelView({
    title: "<span class=\"icon-bug\"></span> CSSLint report",
    rawTitle: true,
    closeMethod: "destroy"
  });

  editor = null;

  content = null;

  result = null;

  module.exports = function() {
    var i, len, msg, ref1;
    editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    if (editor.getGrammar().name !== "CSS") {
      return;
    }
    content = editor.getText();
    result = loophole(function() {
      return cssLint.verify(content, config());
    });
    messages.clear();
    messages.attach();
    if (atom.config.get("csslint.useFoldModeAsDefault") && messages.summary.css("display") === "none") {
      messages.toggle();
    }
    if (result.messages.length === 0) {
      atom.config.observe("csslint.hideOnNoErrors", function(value) {
        if (value === true) {
          return messages.close();
        } else {
          return messages.add(new PlainMessageView({
            message: "No errors were found!",
            className: "text-success"
          }));
        }
      });
    } else {
      ref1 = result.messages;
      for (i = 0, len = ref1.length; i < len; i++) {
        msg = ref1[i];
        messages.add(new LineMessageView({
          message: msg.message,
          line: msg.line,
          character: msg.col,
          preview: msg.evidence ? msg.evidence.trim() : void 0,
          className: "text-" + msg.type
        }));
      }
    }
    return atom.workspace.onDidChangeActivePaneItem(function() {
      return messages.close();
    });
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvdHVua2VydC8uYXRvbS9wYWNrYWdlcy9jc3NsaW50L2xpYi9saW50ZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxNQUF3RCxPQUFBLENBQVEsb0JBQVIsQ0FBeEQsRUFBQyx1Q0FBRCxFQUFtQix1Q0FBbkIsRUFBcUM7O0VBQ3JDLE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7RUFDVCxPQUFBLEdBQVUsT0FBQSxDQUFRLFNBQVIsQ0FBa0IsQ0FBQzs7RUFDN0IsUUFBQSxHQUFXLE9BQUEsQ0FBUSxVQUFSLENBQW1CLENBQUM7O0VBQy9CLFFBQUEsR0FBVyxJQUFJLGdCQUFKLENBQ1Q7SUFBQSxLQUFBLEVBQU8saURBQVA7SUFDQSxRQUFBLEVBQVUsSUFEVjtJQUVBLFdBQUEsRUFBYSxTQUZiO0dBRFM7O0VBSVgsTUFBQSxHQUFTOztFQUNULE9BQUEsR0FBVTs7RUFDVixNQUFBLEdBQVM7O0VBRVQsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQTtBQUNmLFFBQUE7SUFBQSxNQUFBLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBZixDQUFBO0lBRVQsSUFBQSxDQUFjLE1BQWQ7QUFBQSxhQUFBOztJQUNBLElBQWMsTUFBTSxDQUFDLFVBQVAsQ0FBQSxDQUFtQixDQUFDLElBQXBCLEtBQTRCLEtBQTFDO0FBQUEsYUFBQTs7SUFFQSxPQUFBLEdBQVUsTUFBTSxDQUFDLE9BQVAsQ0FBQTtJQUNWLE1BQUEsR0FBUyxRQUFBLENBQVMsU0FBQTthQUFHLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixFQUF3QixNQUFBLENBQUEsQ0FBeEI7SUFBSCxDQUFUO0lBRVQsUUFBUSxDQUFDLEtBQVQsQ0FBQTtJQUNBLFFBQVEsQ0FBQyxNQUFULENBQUE7SUFDQSxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQiw4QkFBaEIsQ0FBQSxJQUFvRCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQWpCLENBQXFCLFNBQXJCLENBQUEsS0FBbUMsTUFBMUY7TUFDRSxRQUFRLENBQUMsTUFBVCxDQUFBLEVBREY7O0lBR0EsSUFBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQWhCLEtBQTBCLENBQTdCO01BQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFaLENBQW9CLHdCQUFwQixFQUE4QyxTQUFDLEtBQUQ7UUFDNUMsSUFBRyxLQUFBLEtBQVMsSUFBWjtpQkFDRSxRQUFRLENBQUMsS0FBVCxDQUFBLEVBREY7U0FBQSxNQUFBO2lCQUdFLFFBQVEsQ0FBQyxHQUFULENBQWEsSUFBSSxnQkFBSixDQUNYO1lBQUEsT0FBQSxFQUFTLHVCQUFUO1lBQ0EsU0FBQSxFQUFXLGNBRFg7V0FEVyxDQUFiLEVBSEY7O01BRDRDLENBQTlDLEVBREY7S0FBQSxNQUFBO0FBU0U7QUFBQSxXQUFBLHNDQUFBOztRQUNFLFFBQVEsQ0FBQyxHQUFULENBQWEsSUFBSSxlQUFKLENBQ1g7VUFBQSxPQUFBLEVBQVMsR0FBRyxDQUFDLE9BQWI7VUFDQSxJQUFBLEVBQU0sR0FBRyxDQUFDLElBRFY7VUFFQSxTQUFBLEVBQVcsR0FBRyxDQUFDLEdBRmY7VUFHQSxPQUFBLEVBQWdDLEdBQUcsQ0FBQyxRQUEzQixHQUFBLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBYixDQUFBLENBQUEsR0FBQSxNQUhUO1VBSUEsU0FBQSxFQUFXLE9BQUEsR0FBUSxHQUFHLENBQUMsSUFKdkI7U0FEVyxDQUFiO0FBREYsT0FURjs7V0FpQkEsSUFBSSxDQUFDLFNBQVMsQ0FBQyx5QkFBZixDQUF5QyxTQUFBO2FBQ3ZDLFFBQVEsQ0FBQyxLQUFULENBQUE7SUFEdUMsQ0FBekM7RUEvQmU7QUFaakIiLCJzb3VyY2VzQ29udGVudCI6WyJ7TWVzc2FnZVBhbmVsVmlldywgUGxhaW5NZXNzYWdlVmlldywgTGluZU1lc3NhZ2VWaWV3fSA9IHJlcXVpcmUgJ2F0b20tbWVzc2FnZS1wYW5lbCdcbmNvbmZpZyA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKVxuY3NzTGludCA9IHJlcXVpcmUoXCJjc3NsaW50XCIpLkNTU0xpbnRcbmxvb3Bob2xlID0gcmVxdWlyZShcImxvb3Bob2xlXCIpLmFsbG93VW5zYWZlRXZhbFxubWVzc2FnZXMgPSBuZXcgTWVzc2FnZVBhbmVsVmlld1xuICB0aXRsZTogXCI8c3BhbiBjbGFzcz1cXFwiaWNvbi1idWdcXFwiPjwvc3Bhbj4gQ1NTTGludCByZXBvcnRcIlxuICByYXdUaXRsZTogdHJ1ZVxuICBjbG9zZU1ldGhvZDogXCJkZXN0cm95XCJcbmVkaXRvciA9IG51bGxcbmNvbnRlbnQgPSBudWxsXG5yZXN1bHQgPSBudWxsXG5cbm1vZHVsZS5leHBvcnRzID0gLT5cbiAgZWRpdG9yID0gYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpXG5cbiAgcmV0dXJuIHVubGVzcyBlZGl0b3JcbiAgcmV0dXJuIHVubGVzcyBlZGl0b3IuZ2V0R3JhbW1hcigpLm5hbWUgaXMgXCJDU1NcIlxuXG4gIGNvbnRlbnQgPSBlZGl0b3IuZ2V0VGV4dCgpXG4gIHJlc3VsdCA9IGxvb3Bob2xlIC0+IGNzc0xpbnQudmVyaWZ5IGNvbnRlbnQsIGNvbmZpZygpXG5cbiAgbWVzc2FnZXMuY2xlYXIoKVxuICBtZXNzYWdlcy5hdHRhY2goKVxuICBpZiBhdG9tLmNvbmZpZy5nZXQoXCJjc3NsaW50LnVzZUZvbGRNb2RlQXNEZWZhdWx0XCIpIGFuZCBtZXNzYWdlcy5zdW1tYXJ5LmNzcyhcImRpc3BsYXlcIikgaXMgXCJub25lXCJcbiAgICBtZXNzYWdlcy50b2dnbGUoKVxuXG4gIGlmIHJlc3VsdC5tZXNzYWdlcy5sZW5ndGggaXMgMFxuICAgIGF0b20uY29uZmlnLm9ic2VydmUgXCJjc3NsaW50LmhpZGVPbk5vRXJyb3JzXCIsICh2YWx1ZSkgLT5cbiAgICAgIGlmIHZhbHVlIGlzIHRydWVcbiAgICAgICAgbWVzc2FnZXMuY2xvc2UoKVxuICAgICAgZWxzZVxuICAgICAgICBtZXNzYWdlcy5hZGQgbmV3IFBsYWluTWVzc2FnZVZpZXdcbiAgICAgICAgICBtZXNzYWdlOiBcIk5vIGVycm9ycyB3ZXJlIGZvdW5kIVwiXG4gICAgICAgICAgY2xhc3NOYW1lOiBcInRleHQtc3VjY2Vzc1wiXG4gIGVsc2VcbiAgICBmb3IgbXNnIGluIHJlc3VsdC5tZXNzYWdlc1xuICAgICAgbWVzc2FnZXMuYWRkIG5ldyBMaW5lTWVzc2FnZVZpZXdcbiAgICAgICAgbWVzc2FnZTogbXNnLm1lc3NhZ2VcbiAgICAgICAgbGluZTogbXNnLmxpbmVcbiAgICAgICAgY2hhcmFjdGVyOiBtc2cuY29sXG4gICAgICAgIHByZXZpZXc6IG1zZy5ldmlkZW5jZS50cmltKCkgaWYgbXNnLmV2aWRlbmNlXG4gICAgICAgIGNsYXNzTmFtZTogXCJ0ZXh0LSN7bXNnLnR5cGV9XCJcblxuICBhdG9tLndvcmtzcGFjZS5vbkRpZENoYW5nZUFjdGl2ZVBhbmVJdGVtIC0+XG4gICAgbWVzc2FnZXMuY2xvc2UoKVxuIl19
