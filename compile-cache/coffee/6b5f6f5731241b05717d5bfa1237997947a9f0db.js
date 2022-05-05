(function() {
  module.exports = {
    config: {
      forceInline: {
        title: 'Force Inline',
        order: 1,
        description: 'Elements in this comma delimited list will render their closing tags on the same line, even if they are block by default. Use * to force all closing tags to render inline',
        type: 'array',
        "default": ['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      },
      forceBlock: {
        title: 'Force Block',
        order: 2,
        description: 'Elements in this comma delimited list will render their closing tags after a tabbed line, even if they are inline by default. Values are ignored if Force Inline is *',
        type: 'array',
        "default": ['head']
      },
      neverClose: {
        title: 'Never Close Elements',
        order: 3,
        description: 'Comma delimited list of elements to never close',
        type: 'array',
        "default": ['br', 'hr', 'img', 'input', 'link', 'meta', 'area', 'base', 'col', 'command', 'embed', 'keygen', 'param', 'source', 'track', 'wbr']
      },
      makeNeverCloseSelfClosing: {
        title: 'Make Never Close Elements Self-Closing',
        order: 4,
        description: 'Closes elements with " />" (ie &lt;tag&gt; becomes &lt;tag /&gt;)',
        type: 'boolean',
        "default": true
      },
      makeUnrecognizedBlock: {
        title: 'Make Unrecognized Elements Block Tags',
        order: 5,
        description: 'Unrecognized/non-standard HTML elements will render their closing tags after a tabbed line. This may be useful for custom XML tags',
        type: 'boolean',
        "default": true
      },
      legacyMode: {
        title: "Legacy/International Mode",
        order: 6,
        description: "Do not use this unless you use a non-US or non-QWERTY keyboard and/or the plugin isn't working otherwise. USING THIS OPTION WILL OPT YOU OUT OF NEW IMPROVEMENTS/FEATURES POST 0.22.0",
        type: 'boolean',
        "default": false
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvdHVua2VydC8uYXRvbS9wYWNrYWdlcy9hdXRvY2xvc2UtaHRtbC1wbHVzL2xpYi9jb25maWd1cmF0aW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQ0k7SUFBQSxNQUFBLEVBQ0k7TUFBQSxXQUFBLEVBQ0k7UUFBQSxLQUFBLEVBQU8sY0FBUDtRQUNBLEtBQUEsRUFBTyxDQURQO1FBRUEsV0FBQSxFQUFhLDRLQUZiO1FBR0EsSUFBQSxFQUFNLE9BSE47UUFJQSxDQUFBLE9BQUEsQ0FBQSxFQUFTLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsSUFBbEMsRUFBd0MsSUFBeEMsQ0FKVDtPQURKO01BTUEsVUFBQSxFQUNJO1FBQUEsS0FBQSxFQUFPLGFBQVA7UUFDQSxLQUFBLEVBQU8sQ0FEUDtRQUVBLFdBQUEsRUFBYSx1S0FGYjtRQUdBLElBQUEsRUFBTSxPQUhOO1FBSUEsQ0FBQSxPQUFBLENBQUEsRUFBUyxDQUFDLE1BQUQsQ0FKVDtPQVBKO01BWUEsVUFBQSxFQUNJO1FBQUEsS0FBQSxFQUFPLHNCQUFQO1FBQ0EsS0FBQSxFQUFPLENBRFA7UUFFQSxXQUFBLEVBQWEsaURBRmI7UUFHQSxJQUFBLEVBQU0sT0FITjtRQUlBLENBQUEsT0FBQSxDQUFBLEVBQVMsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWIsRUFBb0IsT0FBcEIsRUFBNkIsTUFBN0IsRUFBcUMsTUFBckMsRUFBNkMsTUFBN0MsRUFBcUQsTUFBckQsRUFBNkQsS0FBN0QsRUFBb0UsU0FBcEUsRUFBK0UsT0FBL0UsRUFBd0YsUUFBeEYsRUFBa0csT0FBbEcsRUFBMkcsUUFBM0csRUFBcUgsT0FBckgsRUFBOEgsS0FBOUgsQ0FKVDtPQWJKO01Ba0JBLHlCQUFBLEVBQ0k7UUFBQSxLQUFBLEVBQU8sd0NBQVA7UUFDQSxLQUFBLEVBQU8sQ0FEUDtRQUVBLFdBQUEsRUFBYSxtRUFGYjtRQUdBLElBQUEsRUFBTSxTQUhOO1FBSUEsQ0FBQSxPQUFBLENBQUEsRUFBUyxJQUpUO09BbkJKO01Bd0JBLHFCQUFBLEVBQ0k7UUFBQSxLQUFBLEVBQU8sdUNBQVA7UUFDQSxLQUFBLEVBQU8sQ0FEUDtRQUVBLFdBQUEsRUFBYSxvSUFGYjtRQUdBLElBQUEsRUFBTSxTQUhOO1FBSUEsQ0FBQSxPQUFBLENBQUEsRUFBUyxJQUpUO09BekJKO01BOEJBLFVBQUEsRUFDSTtRQUFBLEtBQUEsRUFBTywyQkFBUDtRQUNBLEtBQUEsRUFBTyxDQURQO1FBRUEsV0FBQSxFQUFhLHVMQUZiO1FBR0EsSUFBQSxFQUFNLFNBSE47UUFJQSxDQUFBLE9BQUEsQ0FBQSxFQUFTLEtBSlQ7T0EvQko7S0FESjs7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID1cbiAgICBjb25maWc6XG4gICAgICAgIGZvcmNlSW5saW5lOlxuICAgICAgICAgICAgdGl0bGU6ICdGb3JjZSBJbmxpbmUnXG4gICAgICAgICAgICBvcmRlcjogMVxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdFbGVtZW50cyBpbiB0aGlzIGNvbW1hIGRlbGltaXRlZCBsaXN0IHdpbGwgcmVuZGVyIHRoZWlyIGNsb3NpbmcgdGFncyBvbiB0aGUgc2FtZSBsaW5lLCBldmVuIGlmIHRoZXkgYXJlIGJsb2NrIGJ5IGRlZmF1bHQuIFVzZSAqIHRvIGZvcmNlIGFsbCBjbG9zaW5nIHRhZ3MgdG8gcmVuZGVyIGlubGluZSdcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheSdcbiAgICAgICAgICAgIGRlZmF1bHQ6IFsndGl0bGUnLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXVxuICAgICAgICBmb3JjZUJsb2NrOlxuICAgICAgICAgICAgdGl0bGU6ICdGb3JjZSBCbG9jaydcbiAgICAgICAgICAgIG9yZGVyOiAyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VsZW1lbnRzIGluIHRoaXMgY29tbWEgZGVsaW1pdGVkIGxpc3Qgd2lsbCByZW5kZXIgdGhlaXIgY2xvc2luZyB0YWdzIGFmdGVyIGEgdGFiYmVkIGxpbmUsIGV2ZW4gaWYgdGhleSBhcmUgaW5saW5lIGJ5IGRlZmF1bHQuIFZhbHVlcyBhcmUgaWdub3JlZCBpZiBGb3JjZSBJbmxpbmUgaXMgKidcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheSdcbiAgICAgICAgICAgIGRlZmF1bHQ6IFsnaGVhZCddXG4gICAgICAgIG5ldmVyQ2xvc2U6XG4gICAgICAgICAgICB0aXRsZTogJ05ldmVyIENsb3NlIEVsZW1lbnRzJ1xuICAgICAgICAgICAgb3JkZXI6IDNcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29tbWEgZGVsaW1pdGVkIGxpc3Qgb2YgZWxlbWVudHMgdG8gbmV2ZXIgY2xvc2UnXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknXG4gICAgICAgICAgICBkZWZhdWx0OiBbJ2JyJywgJ2hyJywgJ2ltZycsICdpbnB1dCcsICdsaW5rJywgJ21ldGEnLCAnYXJlYScsICdiYXNlJywgJ2NvbCcsICdjb21tYW5kJywgJ2VtYmVkJywgJ2tleWdlbicsICdwYXJhbScsICdzb3VyY2UnLCAndHJhY2snLCAnd2JyJ11cbiAgICAgICAgbWFrZU5ldmVyQ2xvc2VTZWxmQ2xvc2luZzpcbiAgICAgICAgICAgIHRpdGxlOiAnTWFrZSBOZXZlciBDbG9zZSBFbGVtZW50cyBTZWxmLUNsb3NpbmcnXG4gICAgICAgICAgICBvcmRlcjogNFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDbG9zZXMgZWxlbWVudHMgd2l0aCBcIiAvPlwiIChpZSAmbHQ7dGFnJmd0OyBiZWNvbWVzICZsdDt0YWcgLyZndDspJ1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIG1ha2VVbnJlY29nbml6ZWRCbG9jazpcbiAgICAgICAgICAgIHRpdGxlOiAnTWFrZSBVbnJlY29nbml6ZWQgRWxlbWVudHMgQmxvY2sgVGFncydcbiAgICAgICAgICAgIG9yZGVyOiA1XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VucmVjb2duaXplZC9ub24tc3RhbmRhcmQgSFRNTCBlbGVtZW50cyB3aWxsIHJlbmRlciB0aGVpciBjbG9zaW5nIHRhZ3MgYWZ0ZXIgYSB0YWJiZWQgbGluZS4gVGhpcyBtYXkgYmUgdXNlZnVsIGZvciBjdXN0b20gWE1MIHRhZ3MnXG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgbGVnYWN5TW9kZTpcbiAgICAgICAgICAgIHRpdGxlOiBcIkxlZ2FjeS9JbnRlcm5hdGlvbmFsIE1vZGVcIlxuICAgICAgICAgICAgb3JkZXI6IDZcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRvIG5vdCB1c2UgdGhpcyB1bmxlc3MgeW91IHVzZSBhIG5vbi1VUyBvciBub24tUVdFUlRZIGtleWJvYXJkIGFuZC9vciB0aGUgcGx1Z2luIGlzbid0IHdvcmtpbmcgb3RoZXJ3aXNlLiBVU0lORyBUSElTIE9QVElPTiBXSUxMIE9QVCBZT1UgT1VUIE9GIE5FVyBJTVBST1ZFTUVOVFMvRkVBVFVSRVMgUE9TVCAwLjIyLjBcIlxuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuIl19
