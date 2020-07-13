let someOptionalDependency;

try {
  someOptionalDependency = require("optional-dep")
} catch (e) {
}

if (someOptionalDependency) {
  console.log("Do something with this dependency");
} else{
  console.log("Do something else since the dependency is unavailable")
}