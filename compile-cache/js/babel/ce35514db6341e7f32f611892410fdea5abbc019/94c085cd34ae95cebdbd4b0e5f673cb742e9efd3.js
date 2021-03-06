'use babel';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var messages = {

  noURI: 'No URI found for the given editor.'
};

exports.messages = messages;
function getMessage(error) {

  return typeof error === 'string' ? error : error.message || 'Unknown error';
}

function handleCatch(error) {

  if (!error) {

    return;
  }

  var message = getMessage(error);
  var type = error.type || 'warn';

  console[type] && console[type]('atom-ternjs: ' + message);
}

function handleCatchWithNotification(error) {

  var message = getMessage(error);

  handleCatch(error);
  atom.notifications.addWarning(message);
}

exports['default'] = {

  handleCatchWithNotification: handleCatchWithNotification,
  handleCatch: handleCatch
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bmtlcnQvLmF0b20vcGFja2FnZXMvYXRvbS10ZXJuanMvbGliL3NlcnZpY2VzL2RlYnVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsQ0FBQzs7Ozs7QUFFTCxJQUFNLFFBQVEsR0FBRzs7QUFFdEIsT0FBSyxFQUFFLG9DQUFvQztDQUM1QyxDQUFDOzs7QUFFRixTQUFTLFVBQVUsQ0FBQyxLQUFLLEVBQUU7O0FBRXpCLFNBQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLGVBQWUsQ0FBQztDQUM3RTs7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFLLEVBQUU7O0FBRTFCLE1BQUksQ0FBQyxLQUFLLEVBQUU7O0FBRVYsV0FBTztHQUNSOztBQUVELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQzs7QUFFbEMsU0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQWlCLE9BQU8sQ0FBRyxDQUFDO0NBQzNEOztBQUVELFNBQVMsMkJBQTJCLENBQUMsS0FBSyxFQUFFOztBQUUxQyxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRWxDLGFBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixNQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUN4Qzs7cUJBRWM7O0FBRWIsNkJBQTJCLEVBQTNCLDJCQUEyQjtBQUMzQixhQUFXLEVBQVgsV0FBVztDQUNaIiwiZmlsZSI6Ii9ob21lL3R1bmtlcnQvLmF0b20vcGFja2FnZXMvYXRvbS10ZXJuanMvbGliL3NlcnZpY2VzL2RlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlcyA9IHtcblxuICBub1VSSTogJ05vIFVSSSBmb3VuZCBmb3IgdGhlIGdpdmVuIGVkaXRvci4nXG59O1xuXG5mdW5jdGlvbiBnZXRNZXNzYWdlKGVycm9yKSB7XG5cbiAgcmV0dXJuIHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6IGVycm9yLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDYXRjaChlcnJvcikge1xuXG4gIGlmICghZXJyb3IpIHtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBnZXRNZXNzYWdlKGVycm9yKTtcbiAgY29uc3QgdHlwZSA9IGVycm9yLnR5cGUgfHwgJ3dhcm4nO1xuXG4gIGNvbnNvbGVbdHlwZV0gJiYgY29uc29sZVt0eXBlXShgYXRvbS10ZXJuanM6ICR7bWVzc2FnZX1gKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2F0Y2hXaXRoTm90aWZpY2F0aW9uKGVycm9yKSB7XG5cbiAgY29uc3QgbWVzc2FnZSA9IGdldE1lc3NhZ2UoZXJyb3IpO1xuXG4gIGhhbmRsZUNhdGNoKGVycm9yKTtcbiAgYXRvbS5ub3RpZmljYXRpb25zLmFkZFdhcm5pbmcobWVzc2FnZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBoYW5kbGVDYXRjaFdpdGhOb3RpZmljYXRpb24sXG4gIGhhbmRsZUNhdGNoXG59O1xuIl19