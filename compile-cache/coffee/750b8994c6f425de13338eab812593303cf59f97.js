(function() {
  var fs, os, path;

  path = require("path");

  fs = require("fs");

  os = require("os");

  module.exports = function() {
    var config, defaultConfigPath, err, projectConfigPath;
    defaultConfigPath = path.normalize(path.join(os.homedir(), ".csslintrc"));
    projectConfigPath = path.normalize(path.join(atom.project.getPaths()[0], ".csslintrc"));
    config = null;
    try {
      config = JSON.parse(fs.readFileSync(defaultConfigPath, "utf-8"));
    } catch (error) {
      err = error;
      if (defaultConfigPath && err.code !== "ENOENT") {
        console.log("Error reading config file \"" + defaultConfigPath + "\": " + err);
      }
    }
    try {
      config = JSON.parse(fs.readFileSync(projectConfigPath, "utf-8"));
    } catch (error) {
      err = error;
      if (projectConfigPath && err.code !== "ENOENT") {
        console.log("Error reading config file \"" + projectConfigPath + "\": " + err);
      }
    }
    return config;
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvdHVua2VydC8uYXRvbS9wYWNrYWdlcy9jc3NsaW50L2xpYi9jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxJQUFBLEdBQU8sT0FBQSxDQUFRLE1BQVI7O0VBQ1AsRUFBQSxHQUFLLE9BQUEsQ0FBUSxJQUFSOztFQUNMLEVBQUEsR0FBSyxPQUFBLENBQVEsSUFBUjs7RUFFTCxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFBO0FBQ2YsUUFBQTtJQUFBLGlCQUFBLEdBQW9CLElBQUksQ0FBQyxTQUFMLENBQWUsSUFBSSxDQUFDLElBQUwsQ0FBVSxFQUFFLENBQUMsT0FBSCxDQUFBLENBQVYsRUFBd0IsWUFBeEIsQ0FBZjtJQUNwQixpQkFBQSxHQUFvQixJQUFJLENBQUMsU0FBTCxDQUFlLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFiLENBQUEsQ0FBd0IsQ0FBQSxDQUFBLENBQWxDLEVBQXNDLFlBQXRDLENBQWY7SUFDcEIsTUFBQSxHQUFTO0FBRVQ7TUFDRSxNQUFBLEdBQVMsSUFBSSxDQUFDLEtBQUwsQ0FBVyxFQUFFLENBQUMsWUFBSCxDQUFnQixpQkFBaEIsRUFBbUMsT0FBbkMsQ0FBWCxFQURYO0tBQUEsYUFBQTtNQUVNO01BQ0osSUFBa0YsaUJBQUEsSUFBc0IsR0FBRyxDQUFDLElBQUosS0FBYyxRQUF0SDtRQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksOEJBQUEsR0FBaUMsaUJBQWpDLEdBQXFELE1BQXJELEdBQThELEdBQTFFLEVBQUE7T0FIRjs7QUFJQTtNQUNFLE1BQUEsR0FBUyxJQUFJLENBQUMsS0FBTCxDQUFXLEVBQUUsQ0FBQyxZQUFILENBQWdCLGlCQUFoQixFQUFtQyxPQUFuQyxDQUFYLEVBRFg7S0FBQSxhQUFBO01BRU07TUFDSixJQUFrRixpQkFBQSxJQUFzQixHQUFHLENBQUMsSUFBSixLQUFjLFFBQXRIO1FBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSw4QkFBQSxHQUFpQyxpQkFBakMsR0FBcUQsTUFBckQsR0FBOEQsR0FBMUUsRUFBQTtPQUhGOztBQUtBLFdBQU87RUFkUTtBQUpqQiIsInNvdXJjZXNDb250ZW50IjpbInBhdGggPSByZXF1aXJlKFwicGF0aFwiKVxuZnMgPSByZXF1aXJlKFwiZnNcIilcbm9zID0gcmVxdWlyZShcIm9zXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gLT5cbiAgZGVmYXVsdENvbmZpZ1BhdGggPSBwYXRoLm5vcm1hbGl6ZShwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCBcIi5jc3NsaW50cmNcIikpXG4gIHByb2plY3RDb25maWdQYXRoID0gcGF0aC5ub3JtYWxpemUocGF0aC5qb2luKGF0b20ucHJvamVjdC5nZXRQYXRocygpWzBdLCBcIi5jc3NsaW50cmNcIikpXG4gIGNvbmZpZyA9IG51bGxcblxuICB0cnlcbiAgICBjb25maWcgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhkZWZhdWx0Q29uZmlnUGF0aCwgXCJ1dGYtOFwiKSlcbiAgY2F0Y2ggZXJyXG4gICAgY29uc29sZS5sb2cgXCJFcnJvciByZWFkaW5nIGNvbmZpZyBmaWxlIFxcXCJcIiArIGRlZmF1bHRDb25maWdQYXRoICsgXCJcXFwiOiBcIiArIGVyciAgaWYgZGVmYXVsdENvbmZpZ1BhdGggYW5kIGVyci5jb2RlIGlzbnQgXCJFTk9FTlRcIlxuICB0cnlcbiAgICBjb25maWcgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwcm9qZWN0Q29uZmlnUGF0aCwgXCJ1dGYtOFwiKSlcbiAgY2F0Y2ggZXJyXG4gICAgY29uc29sZS5sb2cgXCJFcnJvciByZWFkaW5nIGNvbmZpZyBmaWxlIFxcXCJcIiArIHByb2plY3RDb25maWdQYXRoICsgXCJcXFwiOiBcIiArIGVyciAgaWYgcHJvamVjdENvbmZpZ1BhdGggYW5kIGVyci5jb2RlIGlzbnQgXCJFTk9FTlRcIlxuXG4gIHJldHVybiBjb25maWdcbiJdfQ==
