'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var optionalDep = _interopDefault(require('optional-dep'));

let someOptionalDependency;

try {
  someOptionalDependency = optionalDep;
} catch (e) {
}

if (someOptionalDependency) {
  console.log("Do something with this dependency");
} else {
  console.log("Do something else since the dependency is unavailable");
}
