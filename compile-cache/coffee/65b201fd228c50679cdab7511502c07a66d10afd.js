(function() {
  var linter;

  linter = require("./linter");

  module.exports = {
    config: {
      validateOnSave: {
        type: 'boolean',
        "default": true
      },
      validateOnChange: {
        type: 'boolean',
        "default": false
      },
      hideOnNoErrors: {
        type: 'boolean',
        "default": false
      },
      useFoldModeAsDefault: {
        type: 'boolean',
        "default": false
      }
    },
    activate: function() {
      var editor, subscriptions;
      editor = atom.workspace.getActiveTextEditor();
      subscriptions = {
        onSave: null,
        onChange: null
      };
      atom.commands.add("atom-workspace", "csslint:lint", linter);
      atom.config.observe("csslint.validateOnSave", function(value) {
        if (value === true) {
          return atom.workspace.observeTextEditors(function(editor) {
            return subscriptions.onSave = editor.buffer.onDidSave(linter);
          });
        } else {
          return atom.workspace.observeTextEditors(function(editor) {
            var ref;
            return (ref = subscriptions.onSave) != null ? ref.dispose() : void 0;
          });
        }
      });
      return atom.config.observe("csslint.validateOnChange", function(value) {
        if (value === true) {
          return atom.workspace.observeTextEditors(function(editor) {
            return subscriptions.onChange = editor.buffer.onDidStopChanging(linter);
          });
        } else {
          return atom.workspace.observeTextEditors(function(editor) {
            var ref;
            return (ref = subscriptions.onChange) != null ? ref.dispose() : void 0;
          });
        }
      });
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvdHVua2VydC8uYXRvbS9wYWNrYWdlcy9jc3NsaW50L2xpYi9tYWluLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztFQUNULE1BQU0sQ0FBQyxPQUFQLEdBQ0U7SUFBQSxNQUFBLEVBQ0U7TUFBQSxjQUFBLEVBQ0U7UUFBQSxJQUFBLEVBQU0sU0FBTjtRQUNBLENBQUEsT0FBQSxDQUFBLEVBQVMsSUFEVDtPQURGO01BR0EsZ0JBQUEsRUFDRTtRQUFBLElBQUEsRUFBTSxTQUFOO1FBQ0EsQ0FBQSxPQUFBLENBQUEsRUFBUyxLQURUO09BSkY7TUFNQSxjQUFBLEVBQ0U7UUFBQSxJQUFBLEVBQU0sU0FBTjtRQUNBLENBQUEsT0FBQSxDQUFBLEVBQVMsS0FEVDtPQVBGO01BU0Esb0JBQUEsRUFDRTtRQUFBLElBQUEsRUFBTSxTQUFOO1FBQ0EsQ0FBQSxPQUFBLENBQUEsRUFBUyxLQURUO09BVkY7S0FERjtJQWNBLFFBQUEsRUFBVSxTQUFBO0FBQ1IsVUFBQTtNQUFBLE1BQUEsR0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFmLENBQUE7TUFDVCxhQUFBLEdBQ0U7UUFBQSxNQUFBLEVBQVEsSUFBUjtRQUNBLFFBQUEsRUFBVSxJQURWOztNQUdGLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBZCxDQUFrQixnQkFBbEIsRUFBb0MsY0FBcEMsRUFBb0QsTUFBcEQ7TUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQVosQ0FBb0Isd0JBQXBCLEVBQThDLFNBQUMsS0FBRDtRQUM1QyxJQUFHLEtBQUEsS0FBUyxJQUFaO2lCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWYsQ0FBa0MsU0FBQyxNQUFEO21CQUNoQyxhQUFhLENBQUMsTUFBZCxHQUF1QixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQWQsQ0FBd0IsTUFBeEI7VUFEUyxDQUFsQyxFQURGO1NBQUEsTUFBQTtpQkFJRSxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFmLENBQWtDLFNBQUMsTUFBRDtBQUNoQyxnQkFBQTs2REFBb0IsQ0FBRSxPQUF0QixDQUFBO1VBRGdDLENBQWxDLEVBSkY7O01BRDRDLENBQTlDO2FBUUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFaLENBQW9CLDBCQUFwQixFQUFnRCxTQUFDLEtBQUQ7UUFDOUMsSUFBRyxLQUFBLEtBQVMsSUFBWjtpQkFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFmLENBQWtDLFNBQUMsTUFBRDttQkFDaEMsYUFBYSxDQUFDLFFBQWQsR0FBeUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBZCxDQUFnQyxNQUFoQztVQURPLENBQWxDLEVBREY7U0FBQSxNQUFBO2lCQUlFLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWYsQ0FBa0MsU0FBQyxNQUFEO0FBQ2hDLGdCQUFBOytEQUFzQixDQUFFLE9BQXhCLENBQUE7VUFEZ0MsQ0FBbEMsRUFKRjs7TUFEOEMsQ0FBaEQ7SUFmUSxDQWRWOztBQUZGIiwic291cmNlc0NvbnRlbnQiOlsibGludGVyID0gcmVxdWlyZSBcIi4vbGludGVyXCJcbm1vZHVsZS5leHBvcnRzID1cbiAgY29uZmlnOlxuICAgIHZhbGlkYXRlT25TYXZlOlxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgdmFsaWRhdGVPbkNoYW5nZTpcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICBoaWRlT25Ob0Vycm9yczpcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB1c2VGb2xkTW9kZUFzRGVmYXVsdDpcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgZGVmYXVsdDogZmFsc2VcblxuICBhY3RpdmF0ZTogLT5cbiAgICBlZGl0b3IgPSBhdG9tLndvcmtzcGFjZS5nZXRBY3RpdmVUZXh0RWRpdG9yKClcbiAgICBzdWJzY3JpcHRpb25zID1cbiAgICAgIG9uU2F2ZTogbnVsbFxuICAgICAgb25DaGFuZ2U6IG51bGxcblxuICAgIGF0b20uY29tbWFuZHMuYWRkIFwiYXRvbS13b3Jrc3BhY2VcIiwgXCJjc3NsaW50OmxpbnRcIiwgbGludGVyXG4gICAgYXRvbS5jb25maWcub2JzZXJ2ZSBcImNzc2xpbnQudmFsaWRhdGVPblNhdmVcIiwgKHZhbHVlKSAtPlxuICAgICAgaWYgdmFsdWUgaXMgdHJ1ZVxuICAgICAgICBhdG9tLndvcmtzcGFjZS5vYnNlcnZlVGV4dEVkaXRvcnMgKGVkaXRvcikgLT5cbiAgICAgICAgICBzdWJzY3JpcHRpb25zLm9uU2F2ZSA9IGVkaXRvci5idWZmZXIub25EaWRTYXZlIGxpbnRlclxuICAgICAgZWxzZVxuICAgICAgICBhdG9tLndvcmtzcGFjZS5vYnNlcnZlVGV4dEVkaXRvcnMgKGVkaXRvcikgLT5cbiAgICAgICAgICBzdWJzY3JpcHRpb25zLm9uU2F2ZT8uZGlzcG9zZSgpXG5cbiAgICBhdG9tLmNvbmZpZy5vYnNlcnZlIFwiY3NzbGludC52YWxpZGF0ZU9uQ2hhbmdlXCIsICh2YWx1ZSkgLT5cbiAgICAgIGlmIHZhbHVlIGlzIHRydWVcbiAgICAgICAgYXRvbS53b3Jrc3BhY2Uub2JzZXJ2ZVRleHRFZGl0b3JzIChlZGl0b3IpIC0+XG4gICAgICAgICAgc3Vic2NyaXB0aW9ucy5vbkNoYW5nZSA9IGVkaXRvci5idWZmZXIub25EaWRTdG9wQ2hhbmdpbmcgbGludGVyXG4gICAgICBlbHNlXG4gICAgICAgIGF0b20ud29ya3NwYWNlLm9ic2VydmVUZXh0RWRpdG9ycyAoZWRpdG9yKSAtPlxuICAgICAgICAgIHN1YnNjcmlwdGlvbnMub25DaGFuZ2U/LmRpc3Bvc2UoKVxuIl19
