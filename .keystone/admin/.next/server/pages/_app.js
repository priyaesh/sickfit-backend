module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@babel/runtime/helpers/extends.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "../../node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "../../node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "../../node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@babel/runtime/helpers/typeof.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var react = __webpack_require__(/*! react */ "react");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var pill = __webpack_require__(/*! @keystone-ui/pill */ "@keystone-ui/pill");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");

function useObjectURL(fileData) {
  let [objectURL, setObjectURL] = react.useState(undefined);
  react.useEffect(() => {
    if (fileData) {
      let url = URL.createObjectURL(fileData);
      setObjectURL(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [fileData]);
  return objectURL;
}

function Field({
  autoFocus,
  field,
  value,
  onChange
}) {
  const inputRef = react.useRef(null);
  const errorMessage = value.kind === 'upload' ? validateImage(value.data) : undefined;
  const imagePathFromUpload = useObjectURL(errorMessage === undefined && value.kind === 'upload' ? value.data.file : undefined);
  const imagePath = value.kind === 'from-server' ? value.data.publicUrlTransformed : imagePathFromUpload; // Generate a random input key when the value changes, to ensure the file input is unmounted and
  // remounted (this is the only way to reset its value and ensure onChange will fire again if
  // the user selects the same file again)

  const inputKey = react.useMemo(() => Math.random(), [value]);
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), value.kind === 'from-server' || value.kind === 'upload' ? core.jsx(core.Stack, {
    gap: "small"
  }, imagePath && errorMessage === undefined && core.jsx(Image, {
    src: imagePath,
    alt: field.path
  }), onChange && core.jsx(core.Stack, {
    across: true,
    gap: "small",
    align: "center"
  }, core.jsx(button.Button, {
    size: "small",
    onClick: () => {
      var _inputRef$current;

      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.click();
    }
  }, "Change image"), value.kind === 'from-server' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange({
        kind: 'remove',
        previous: value
      });
    }
  }, "Remove"), value.kind === 'upload' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange(value.previous);
    }
  }, "Cancel"), errorMessage ? core.jsx(pill.Pill, {
    tone: "negative",
    weight: "light"
  }, errorMessage) : value.kind === 'upload' && core.jsx(pill.Pill, {
    weight: "light",
    tone: "positive"
  }, "Save to upload this image"))) : core.jsx(core.Stack, {
    css: {
      alignItems: 'center'
    },
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    onClick: () => {
      var _inputRef$current2;

      (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.click();
    }
  }, "Upload Image"), value.kind === 'remove' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange === null || onChange === void 0 ? void 0 : onChange(value.previous);
    }
  }, "Undo removal"), value.kind === 'remove' && // NOTE -- UX decision is to not display this, I think it would only be relevant
  // for deleting uploaded images (and we don't support that yet)
  // <Pill weight="light" tone="warning">
  //   Save to remove this image
  // </Pill>
  null), core.jsx("input", {
    css: {
      display: 'none'
    },
    autoComplete: "off",
    autoFocus: autoFocus,
    ref: inputRef,
    key: inputKey,
    name: field.path,
    onChange: ({
      target: {
        validity,
        files
      }
    }) => {
      const file = files === null || files === void 0 ? void 0 : files[0];
      if (!file) return; // bail if the user cancels from the file browser

      onChange === null || onChange === void 0 ? void 0 : onChange({
        kind: 'upload',
        data: {
          file,
          validity
        },
        previous: value
      });
    },
    type: "file",
    disabled: onChange === undefined
  }));
}
function validateImage({
  file,
  validity
}) {
  if (!validity.valid) {
    return 'Something went wrong, please reload and try again.';
  } // check if the file is actually an image


  if (!file.type.includes('image')) {
    return 'Only image files are allowed. Please try again.';
  }
} // ==============================
// Styled Components
// ==============================

const Image = props => {
  const theme = core.useTheme();
  return core.jsx("div", {
    css: {
      backgroundColor: 'white',
      borderRadius: theme.radii.medium,
      border: `1px solid ${theme.colors.border}`,
      flexShrink: 0,
      lineHeight: 0,
      padding: 4,
      position: 'relative',
      textAlign: 'center',
      width: 130 // 120px image + chrome

    }
  }, core.jsx("img", _extends({
    css: {
      height: 'auto',
      maxWidth: '100%'
    }
  }, props)));
};

/* @jsx jsx */
const Cell = ({
  item,
  field
}) => {
  const data = item[field.path];
  if (!data) return null;
  return core.jsx("div", {
    css: {
      alignItems: 'center',
      display: 'flex',
      height: 24,
      lineHeight: 0,
      width: 24
    }
  }, core.jsx("img", {
    alt: data.filename,
    css: {
      maxHeight: '100%',
      maxWidth: '100%'
    },
    src: data.publicUrlTransformed
  }));
};
const CardValue = ({
  item,
  field
}) => {
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), data && core.jsx("img", {
    alt: data.filename,
    src: data.publicUrlTransformed
  }));
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path} {
        id
        filename
        publicUrlTransformed(transformation: { width: "120" crop: "limit" })
      }`,
    defaultValue: {
      kind: 'empty'
    },

    deserialize(item) {
      const value = item[config.path];
      if (!value) return {
        kind: 'empty'
      };
      return {
        kind: 'from-server',
        data: value
      };
    },

    validate(value) {
      return value.kind !== 'upload' || validateImage(value.data) === undefined;
    },

    serialize(value) {
      if (value.kind === 'upload') {
        return {
          [config.path]: value.data.file
        };
      }

      if (value.kind === 'remove') {
        return {
          [config.path]: null
        };
      }

      return {};
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cloudinary.cjs.dev.js */ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  type: "number",
  onChange: event => {
    onChange(event.target.value.replace(/\D/g, ''));
  },
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'number' ? value + '' : '';
    },
    serialize: value => ({
      [config.path]: value === '' ? null : parseInt(value, 10)
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          type: "number",
          onChange: event => {
            props.onChange(event.target.value.replace(/[^\d,\s]/g, ''));
          },
          value: props.value,
          autoFocus: props.autoFocus
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is' ? config.path : `${config.path}_${type}`;
        const valueWithoutWhitespace = value.replace(/\s/g, '');
        return {
          [key]: ['in', 'not_in'].includes(type) ? valueWithoutWhitespace.split(',').map(i => parseInt(i)) : parseInt(valueWithoutWhitespace)
        };
      },

      Label({
        label,
        value,
        type
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not exactly',
          initialValue: ''
        },
        gt: {
          label: 'Is greater than',
          initialValue: ''
        },
        lt: {
          label: 'Is less than',
          initialValue: ''
        },
        gte: {
          label: 'Is greater than or equal to',
          initialValue: ''
        },
        lte: {
          label: 'Is less than or equal to',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var types_text_views_dist_fields = __webpack_require__(/*! ../../../text/views/dist/fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
__webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',

    deserialize(item) {
      const value = item[config.path];
      return typeof value === 'string' ? value : '';
    },

    serialize(value) {
      return {
        [config.path]: value
      };
    },

    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql({
        type,
        value
      }) {
        switch (type) {
          case 'is':
            {
              return {
                [config.path]: value
              };
            }

          case 'not':
            {
              return {
                [`${config.path}_not`]: value
              };
            }

          case 'in':
            {
              return {
                [`${config.path}_in`]: value.split(',').map(value => value.trim())
              };
            }

          case 'not_in':
            {
              return {
                [`${config.path}_not_in`]: value.split(',').map(value => value.trim())
              };
            }
        }

        return {};
      },

      Label({
        label,
        type,
        value
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = types_text_views_dist_fields.CardValue;
exports.Cell = types_text_views_dist_fields.Cell;
exports.Field = types_text_views_dist_fields.Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var EyeIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeIcon */ "@keystone-ui/icons/icons/EyeIcon");
var EyeOffIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeOffIcon */ "@keystone-ui/icons/icons/EyeOffIcon");
var XIcon = __webpack_require__(/*! @keystone-ui/icons/icons/XIcon */ "@keystone-ui/icons/icons/XIcon");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

const Field = ({
  field,
  value,
  onChange,
  forceValidation,
  autoFocus
}) => {
  const [showInputValue, setShowInputValue] = React.useState(false);
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const shouldShowValidation = forceValidation || touchedFirstInput && touchedSecondInput;
  const validation = shouldShowValidation && value.kind === 'editing' ? value.value === value.confirm ? value.value.length >= field.minLength ? undefined : `The password must be at least ${field.minLength} characters long` : 'The passwords do not match' : undefined;
  const inputType = showInputValue ? 'text' : 'password';
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange === undefined ? value.isSet ? 'Password is set' : 'Password is not set' : value.kind === 'initial' ? core.jsx(button.Button, {
    autoFocus: autoFocus,
    onClick: () => {
      onChange({
        kind: 'editing',
        confirm: '',
        value: '',
        isSet: value.isSet
      });
    }
  }, value.isSet ? 'Change Password' : 'Set Password') : core.jsx(core.Stack, {
    gap: "small"
  }, core.jsx("div", {
    css: {
      display: 'flex'
    }
  }, core.jsx(fields.TextInput, {
    autoFocus: true,
    invalid: validation !== undefined,
    type: inputType,
    value: value.value,
    placeholder: "New Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedFirstInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(fields.TextInput, {
    invalid: validation !== undefined,
    type: inputType,
    value: value.confirm,
    placeholder: "Confirm Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        confirm: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedSecondInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      setShowInputValue(!showInputValue);
    }
  }, core.jsx(core.VisuallyHidden, null, showInputValue ? 'Hide Text' : 'Show Text'), showInputValue ? core.jsx(EyeOffIcon.EyeOffIcon, null) : core.jsx(EyeIcon.EyeIcon, null)), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      onChange({
        kind: 'initial',
        isSet: value.isSet
      });
    }
  }, core.jsx(core.VisuallyHidden, null, "Cancel"), core.jsx(XIcon.XIcon, null))), validation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validation)));
};
const Cell = ({
  item,
  field
}) => {
  return core.jsx(components.CellContainer, null, item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path}_is_set`,
    minLength: config.fieldMeta.minLength,
    defaultValue: {
      kind: 'initial',
      isSet: null
    },

    validate(state) {
      return state.kind === 'initial' || state.value === state.confirm && state.value.length >= config.fieldMeta.minLength;
    },

    deserialize: data => ({
      kind: 'initial',
      isSet: data[`${config.path}_is_set`]
    }),
    serialize: value => {
      if (value.kind === 'initial') return {};
      return {
        [config.path]: value.value
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(segmentedControl.SegmentedControl, {
          selectedIndex: Number(props.value),
          onChange: value => {
            props.onChange(!!value);
          },
          segments: ['Is Not Set', 'Is Set']
        });
      },

      graphql: ({
        type,
        value
      }) => {
        return {
          [`${config.path}_${type}`]: value
        };
      },

      Label({
        value
      }) {
        return value ? 'is set' : 'is not set';
      },

      types: {
        is_set: {
          label: 'Is Set',
          initialValue: true
        }
      }
    }
  };
};

const Spacer = () => {
  const {
    spacing
  } = core.useTheme();
  return core.jsx("div", {
    css: {
      width: spacing.small,
      flexShrink: 0
    }
  });
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), field.displayMode === 'select' ? core.jsx(fields.Select, {
  isClearable: true,
  autoFocus: autoFocus,
  options: field.options,
  isDisabled: onChange === undefined,
  onChange: value => {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  },
  value: value,
  portalMenu: true
}) : core.jsx(segmentedControl.SegmentedControl, {
  segments: field.options.map(x => x.label),
  selectedIndex: value ? field.options.findIndex(x => x.value === value.value) : undefined,
  onChange: index => {
    onChange === null || onChange === void 0 ? void 0 : onChange(field.options[index]);
  }
}));
const Cell = ({
  item,
  field,
  linkTo
}) => {
  var _field$options$find;

  let value = item[field.path] + '';
  const label = (_field$options$find = field.options.find(x => x.value === value)) === null || _field$options$find === void 0 ? void 0 : _field$options$find.label;
  return linkTo ? core.jsx(components.CellLink, linkTo, label) : core.jsx(components.CellContainer, null, label);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  var _field$options$find2;

  const label = (_field$options$find2 = field.options.find(x => x.value === item[field.path])) === null || _field$options$find2 === void 0 ? void 0 : _field$options$find2.label;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), label);
};
const controller = config => {
  const optionsWithStringValues = config.fieldMeta.options.map(x => ({
    label: x.label,
    value: x.value.toString()
  }));
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: null,
    dataType: config.fieldMeta.dataType,
    displayMode: config.fieldMeta.displayMode,
    options: optionsWithStringValues,
    deserialize: data => {
      for (const option of config.fieldMeta.options) {
        if (option.value === data[config.path]) {
          return {
            label: option.label,
            value: option.value.toString()
          };
        }
      }

      return null;
    },
    serialize: value => {
      var _value$value;

      return {
        [config.path]: (_value$value = value === null || value === void 0 ? void 0 : value.value) !== null && _value$value !== void 0 ? _value$value : null
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(fields.MultiSelect, {
          onChange: props.onChange,
          options: optionsWithStringValues,
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value: options
      }) => {
        const inverted = type === 'not_matches';

        if (!options.length) {
          return {
            [`${config.path}${inverted ? '_not' : ''}`]: null
          };
        }

        const isMulti = options.length > 1;
        let key = config.path;

        if (isMulti && inverted) {
          key = `${config.path}_not_in`;
        } else if (isMulti) {
          key = `${config.path}_in`;
        } else if (inverted) {
          key = `${config.path}_not`;
        }

        const value = isMulti ? options.map(x => x.value) : options[0].value;
        return {
          [key]: value
        };
      },

      Label({
        type,
        value
      }) {
        if (!value.length) {
          return type === 'not_matches' ? `is set` : `has no value`;
        }

        if (value.length > 1) {
          const values = value.map(i => i.label).join(', ');
          return type === 'not_matches' ? `is not in [${values}]` : `is in [${values}]`;
        }

        const optionLabel = value[0].label;
        return type === 'not_matches' ? `is not ${optionLabel}` : `is ${optionLabel}`;
      },

      types: {
        matches: {
          label: 'Matches',
          initialValue: []
        },
        not_matches: {
          label: 'Does not match',
          initialValue: []
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? field.displayMode === 'textarea' ? core.jsx(fields.TextArea, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    displayMode: config.fieldMeta.displayMode,
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'string' ? value : '';
    },
    serialize: value => ({
      [config.path]: value
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is_i' ? `${config.path}_i` : `${config.path}_${type}`;
        return {
          [key]: value
        };
      },

      Label({
        label,
        value
      }) {
        return `${label.toLowerCase()}: "${value}"`;
      },

      types: {
        contains_i: {
          label: 'Contains',
          initialValue: ''
        },
        not_contains_i: {
          label: 'Does not contain',
          initialValue: ''
        },
        is_i: {
          label: 'Is exactly',
          initialValue: ''
        },
        not_i: {
          label: 'Is not exactly',
          initialValue: ''
        },
        starts_with_i: {
          label: 'Starts with',
          initialValue: ''
        },
        not_starts_with_i: {
          label: 'Does not start with',
          initialValue: ''
        },
        ends_with_i: {
          label: 'Ends with',
          initialValue: ''
        },
        not_ends_with_i: {
          label: 'Does not end with',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var dateFns = __webpack_require__(/*! date-fns */ "date-fns");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

const getTime = timeValue => {
  if (!timeValue) return [0, 0];
  return timeValue.split(':').map(n => Number(n));
};

function isValidDate(date) {
  if (!date) return false;
  return Boolean(dateFns.parseISO(date).toISOString());
}
function isValidTime(time) {
  if (!time) {
    return false;
  }

  return dateFns.isValid(dateFns.parse(time, 'HH:mm', new Date()));
}
function isValidISO(value) {
  try {
    // toISOString converts our string into zulu time
    // instead of checking for the timestamp to be specifically in zulu time
    // we relax the validation here a little, to just be a valid ISO string.
    return Boolean(dateFns.parseISO(constructTimestamp(value)).toISOString());
  } catch (err) {
    return false;
  }
}
function constructTimestamp({
  dateValue,
  timeValue
}) {
  let formattedDate = new Date(dateValue);
  const [hours, minutes] = getTime(timeValue);
  formattedDate.setHours(hours);
  formattedDate.setMinutes(minutes);
  return dateFns.formatISO(formattedDate);
}
function deconstructTimestamp(value) {
  return {
    dateValue: value,
    timeValue: resolveInitialTimeValue(value)
  };
}
function formatOutput(value) {
  if (!value) return '';
  const date = new Date(value);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
function resolveInitialTimeValue(value, defaultValue) {
  const date = value || defaultValue;
  if (!date) return '';
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

const TimePicker = ({
  autoFocus,
  onBlur,
  disabled,
  onChange,
  format = '24hr',
  value
}) => {
  return core.jsx(fields.TextInput, {
    autoFocus: autoFocus,
    maxLength: format === '24hr' ? 5 : 7,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    placeholder: format === '24hr' ? '00:00' : '00:00am',
    value: value
  });
};

const Field = ({
  field,
  value,
  onChange,
  forceValidation
}) => {
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const showValidation = touchedFirstInput && touchedSecondInput || forceValidation;

  const showDateError = dateValue => {
    if (!dateValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a date value.");
    }

    return !isValidDate(dateValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Incorrect date value");
  };

  const showTimeError = timeValue => {
    if (!timeValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a time value.");
    }

    return !isValidTime(timeValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Time must be in the form HH:mm");
  };

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(core.Stack, null, core.jsx(core.Inline, {
    gap: "small"
  }, core.jsx(core.Stack, null, core.jsx(fields.DatePicker, {
    onUpdate: date => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: date || ''
      }));
    },
    onClear: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: ''
      }));
    },
    onBlur: () => setTouchedFirstInput(true),
    value: value.dateValue
  }), showValidation && showDateError(value.dateValue)), core.jsx(core.Stack, null, core.jsx(TimePicker, {
    onBlur: () => setTouchedSecondInput(true),
    disabled: onChange === undefined,
    format: "24hr",
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      timeValue: event.target.value
    })),
    value: value.timeValue || ''
  }), showValidation && showTimeError(value.timeValue)))) : isValidISO(value) ? formatOutput(constructTimestamp(value)) : '');
};
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path];
  return linkTo ? core.jsx(components.CellLink, linkTo, formatOutput(value)) : core.jsx(components.CellContainer, null, formatOutput(value));
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      dateValue: '',
      timeValue: ''
    },
    deserialize: data => {
      const value = data[config.path];

      if (value) {
        return deconstructTimestamp(value);
      }

      return {
        dateValue: '',
        timeValue: ''
      };
    },
    serialize: ({
      dateValue,
      timeValue
    }) => {
      if (dateValue && timeValue && isValidISO({
        dateValue,
        timeValue
      })) {
        let formattedDate = constructTimestamp({
          dateValue,
          timeValue
        });
        return {
          [config.path]: formattedDate
        };
      }

      return {
        [config.path]: null
      };
    },

    validate({
      dateValue,
      timeValue
    }) {
      if (!dateValue && !timeValue) return true;
      if (!dateValue) return false;
      if (!timeValue) return false;
      return isValidISO({
        dateValue,
        timeValue
      });
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/HPHamsa/SickFit/Advanced-React/sick-fits/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-next/admin-ui/context */ "@keystone-next/admin-ui/context");
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/mongoId/views */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/text/views */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/password/views */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/timestamp/views */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/select/views */ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/integer/views */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/cloudinary/views */ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js");
/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_10__);











const adminConfig = {};
const fieldViews = {
  view46d3ab9c: _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__,
  view9a51078a: _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__,
  vieweb5abe18: _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__,
  view699da2a9: _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7__,
  view85b723f5: _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_8__,
  view53546bf8: _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_9__,
  view6b37e828: _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_10__
};
const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'query',
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'keystone',
          loc: {
            start: 22,
            end: 30
          }
        },
        arguments: [],
        directives: [],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'adminMeta',
              loc: {
                start: 39,
                end: 48
              }
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'lists',
                  loc: {
                    start: 59,
                    end: 64
                  }
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [{
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'key',
                      loc: {
                        start: 77,
                        end: 80
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 77,
                      end: 80
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'isHidden',
                      loc: {
                        start: 91,
                        end: 99
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 91,
                      end: 99
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'fields',
                      loc: {
                        start: 110,
                        end: 116
                      }
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [{
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'path',
                          loc: {
                            start: 131,
                            end: 135
                          }
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 131,
                          end: 135
                        }
                      }, {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'createView',
                          loc: {
                            start: 148,
                            end: 158
                          }
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'fieldMode',
                              loc: {
                                start: 175,
                                end: 184
                              }
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 175,
                              end: 184
                            }
                          }],
                          loc: {
                            start: 159,
                            end: 198
                          }
                        },
                        loc: {
                          start: 148,
                          end: 198
                        }
                      }],
                      loc: {
                        start: 117,
                        end: 210
                      }
                    },
                    loc: {
                      start: 110,
                      end: 210
                    }
                  }],
                  loc: {
                    start: 65,
                    end: 220
                  }
                },
                loc: {
                  start: 59,
                  end: 220
                }
              }],
              loc: {
                start: 49,
                end: 228
              }
            },
            loc: {
              start: 39,
              end: 228
            }
          }],
          loc: {
            start: 31,
            end: 234
          }
        },
        loc: {
          start: 22,
          end: 234
        }
      }, {
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'authenticatedItem'
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'InlineFragment',
            typeCondition: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User'
              }
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id'
                }
              }, {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name'
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__["Core"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__["KeystoneProvider"], {
    adminConfig: adminConfig,
    adminMetaHash: "5j187k",
    fieldViews: fieldViews,
    lazyMetadataQuery: lazyMetadataQuery
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__["ErrorBoundary"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps))));
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@keystone-next/admin-ui/components":
/*!*****************************************************!*\
  !*** external "@keystone-next/admin-ui/components" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/components");

/***/ }),

/***/ "@keystone-next/admin-ui/context":
/*!**************************************************!*\
  !*** external "@keystone-next/admin-ui/context" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/context");

/***/ }),

/***/ "@keystone-ui/button":
/*!**************************************!*\
  !*** external "@keystone-ui/button" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/button");

/***/ }),

/***/ "@keystone-ui/core":
/*!************************************!*\
  !*** external "@keystone-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/core");

/***/ }),

/***/ "@keystone-ui/fields":
/*!**************************************!*\
  !*** external "@keystone-ui/fields" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/fields");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeIcon":
/*!***************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeIcon" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeOffIcon":
/*!******************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeOffIcon" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeOffIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/XIcon":
/*!*************************************************!*\
  !*** external "@keystone-ui/icons/icons/XIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/XIcon");

/***/ }),

/***/ "@keystone-ui/pill":
/*!************************************!*\
  !*** external "@keystone-ui/pill" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/pill");

/***/ }),

/***/ "@keystone-ui/segmented-control":
/*!*************************************************!*\
  !*** external "@keystone-ui/segmented-control" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/segmented-control");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0hQSGFtc2EvU2lja0ZpdC9BZHZhbmNlZC1SZWFjdC9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvSFBIYW1zYS9TaWNrRml0L0FkdmFuY2VkLVJlYWN0L3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0hQSGFtc2EvU2lja0ZpdC9BZHZhbmNlZC1SZWFjdC9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9IUEhhbXNhL1NpY2tGaXQvQWR2YW5jZWQtUmVhY3Qvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0hQSGFtc2EvU2lja0ZpdC9BZHZhbmNlZC1SZWFjdC9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9IUEhhbXNhL1NpY2tGaXQvQWR2YW5jZWQtUmVhY3Qvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9IUEhhbXNhL1NpY2tGaXQvQWR2YW5jZWQtUmVhY3Qvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2Nsb3VkaW5hcnkvdmlld3MvZGlzdC9jbG91ZGluYXJ5LmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0hQSGFtc2EvU2lja0ZpdC9BZHZhbmNlZC1SZWFjdC9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvY2xvdWRpbmFyeS92aWV3cy9kaXN0L2Nsb3VkaW5hcnkuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9IUEhhbXNhL1NpY2tGaXQvQWR2YW5jZWQtUmVhY3Qvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9pbnRlZ2VyL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0hQSGFtc2EvU2lja0ZpdC9BZHZhbmNlZC1SZWFjdC9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL2ludGVnZXIvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9IUEhhbXNhL1NpY2tGaXQvQWR2YW5jZWQtUmVhY3Qvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9tb25nb0lkL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0hQSGFtc2EvU2lja0ZpdC9BZHZhbmNlZC1SZWFjdC9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL21vbmdvSWQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9IUEhhbXNhL1NpY2tGaXQvQWR2YW5jZWQtUmVhY3Qvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9wYXNzd29yZC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9IUEhhbXNhL1NpY2tGaXQvQWR2YW5jZWQtUmVhY3Qvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9wYXNzd29yZC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0hQSGFtc2EvU2lja0ZpdC9BZHZhbmNlZC1SZWFjdC9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3NlbGVjdC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9IUEhhbXNhL1NpY2tGaXQvQWR2YW5jZWQtUmVhY3Qvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9zZWxlY3Qvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9IUEhhbXNhL1NpY2tGaXQvQWR2YW5jZWQtUmVhY3Qvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90ZXh0L3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0hQSGFtc2EvU2lja0ZpdC9BZHZhbmNlZC1SZWFjdC9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RleHQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9IUEhhbXNhL1NpY2tGaXQvQWR2YW5jZWQtUmVhY3Qvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90aW1lc3RhbXAvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvSFBIYW1zYS9TaWNrRml0L0FkdmFuY2VkLVJlYWN0L3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGltZXN0YW1wL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb250ZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2ZpZWxkc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVJY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZU9mZkljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvWEljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvcGlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9zZWdtZW50ZWQtY29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJhZG1pbkNvbmZpZyIsImZpZWxkVmlld3MiLCJ2aWV3NDZkM2FiOWMiLCJ2aWV3OWE1MTA3OGEiLCJ2aWV3ZWI1YWJlMTgiLCJ2aWV3Njk5ZGEyYTkiLCJ2aWV3ODViNzIzZjUiLCJ2aWV3NTM1NDZiZjgiLCJ2aWV3NmIzN2U4MjgiLCJsYXp5TWV0YWRhdGFRdWVyeSIsImtpbmQiLCJkZWZpbml0aW9ucyIsIm9wZXJhdGlvbiIsInNlbGVjdGlvblNldCIsInNlbGVjdGlvbnMiLCJuYW1lIiwidmFsdWUiLCJsb2MiLCJzdGFydCIsImVuZCIsImFyZ3VtZW50cyIsImRpcmVjdGl2ZXMiLCJ0eXBlQ29uZGl0aW9uIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsb0JBQW9CLG1CQUFPLENBQUMsc0ZBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0c7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esd0c7Ozs7Ozs7Ozs7O0FDZEEscUJBQXFCLG1CQUFPLENBQUMsd0ZBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDhHOzs7Ozs7Ozs7OztBQ3RCQSxjQUFjLG1CQUFPLENBQUMsd0VBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Rzs7Ozs7Ozs7Ozs7QUNYQSxjQUFjLG1CQUFPLENBQUMsd0VBQWE7QUFDbkMsa0JBQWtCLG1CQUFPLENBQUMsa0ZBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEc7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsdUc7Ozs7Ozs7Ozs7OztBQ1RhOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RCxXQUFXLG1CQUFPLENBQUMsNENBQW1CO0FBQ3RDLGVBQWUsbUJBQU8sQ0FBQyw0RkFBZ0M7QUFDdkQsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLGFBQWEsbUJBQU8sQ0FBQyxnREFBcUI7QUFDMUMsV0FBVyxtQkFBTyxDQUFDLDRDQUFtQjtBQUN0QyxhQUFhLG1CQUFPLENBQUMsZ0RBQXFCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EseUdBQXlHO0FBQ3pHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFD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QTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsWUFBWTtBQUMxRTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdk9hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztB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QWlCLEVBQUVRO0FBSnJCLGtCQU1FLDJEQUFDLGdGQUFELHFCQUNFLDJEQUFDLFNBQUQsRUFBZWdCLFNBQWYsQ0FERixDQU5GLENBREYsQ0FERjtBQWNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE5ELCtEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5LmpzXCIpO1xuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkMiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciBwaWxsID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3BpbGwnKTtcbnZhciBidXR0b24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvYnV0dG9uJyk7XG5cbmZ1bmN0aW9uIHVzZU9iamVjdFVSTChmaWxlRGF0YSkge1xuICBsZXQgW29iamVjdFVSTCwgc2V0T2JqZWN0VVJMXSA9IHJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIHJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZpbGVEYXRhKSB7XG4gICAgICBsZXQgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlRGF0YSk7XG4gICAgICBzZXRPYmplY3RVUkwodXJsKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbZmlsZURhdGFdKTtcbiAgcmV0dXJuIG9iamVjdFVSTDtcbn1cblxuZnVuY3Rpb24gRmllbGQoe1xuICBhdXRvRm9jdXMsXG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2Vcbn0pIHtcbiAgY29uc3QgaW5wdXRSZWYgPSByZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IHZhbHVlLmtpbmQgPT09ICd1cGxvYWQnID8gdmFsaWRhdGVJbWFnZSh2YWx1ZS5kYXRhKSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgaW1hZ2VQYXRoRnJvbVVwbG9hZCA9IHVzZU9iamVjdFVSTChlcnJvck1lc3NhZ2UgPT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5raW5kID09PSAndXBsb2FkJyA/IHZhbHVlLmRhdGEuZmlsZSA6IHVuZGVmaW5lZCk7XG4gIGNvbnN0IGltYWdlUGF0aCA9IHZhbHVlLmtpbmQgPT09ICdmcm9tLXNlcnZlcicgPyB2YWx1ZS5kYXRhLnB1YmxpY1VybFRyYW5zZm9ybWVkIDogaW1hZ2VQYXRoRnJvbVVwbG9hZDsgLy8gR2VuZXJhdGUgYSByYW5kb20gaW5wdXQga2V5IHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMsIHRvIGVuc3VyZSB0aGUgZmlsZSBpbnB1dCBpcyB1bm1vdW50ZWQgYW5kXG4gIC8vIHJlbW91bnRlZCAodGhpcyBpcyB0aGUgb25seSB3YXkgdG8gcmVzZXQgaXRzIHZhbHVlIGFuZCBlbnN1cmUgb25DaGFuZ2Ugd2lsbCBmaXJlIGFnYWluIGlmXG4gIC8vIHRoZSB1c2VyIHNlbGVjdHMgdGhlIHNhbWUgZmlsZSBhZ2FpbilcblxuICBjb25zdCBpbnB1dEtleSA9IHJlYWN0LnVzZU1lbW8oKCkgPT4gTWF0aC5yYW5kb20oKSwgW3ZhbHVlXSk7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIHZhbHVlLmtpbmQgPT09ICdmcm9tLXNlcnZlcicgfHwgdmFsdWUua2luZCA9PT0gJ3VwbG9hZCcgPyBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgZ2FwOiBcInNtYWxsXCJcbiAgfSwgaW1hZ2VQYXRoICYmIGVycm9yTWVzc2FnZSA9PT0gdW5kZWZpbmVkICYmIGNvcmUuanN4KEltYWdlLCB7XG4gICAgc3JjOiBpbWFnZVBhdGgsXG4gICAgYWx0OiBmaWVsZC5wYXRoXG4gIH0pLCBvbkNoYW5nZSAmJiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgYWNyb3NzOiB0cnVlLFxuICAgIGdhcDogXCJzbWFsbFwiLFxuICAgIGFsaWduOiBcImNlbnRlclwiXG4gIH0sIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgdmFyIF9pbnB1dFJlZiRjdXJyZW50O1xuXG4gICAgICAoX2lucHV0UmVmJGN1cnJlbnQgPSBpbnB1dFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaW5wdXRSZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2lucHV0UmVmJGN1cnJlbnQuY2xpY2soKTtcbiAgICB9XG4gIH0sIFwiQ2hhbmdlIGltYWdlXCIpLCB2YWx1ZS5raW5kID09PSAnZnJvbS1zZXJ2ZXInICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgdG9uZTogXCJuZWdhdGl2ZVwiLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAga2luZDogJ3JlbW92ZScsXG4gICAgICAgIHByZXZpb3VzOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBcIlJlbW92ZVwiKSwgdmFsdWUua2luZCA9PT0gJ3VwbG9hZCcgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB0b25lOiBcIm5lZ2F0aXZlXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UodmFsdWUucHJldmlvdXMpO1xuICAgIH1cbiAgfSwgXCJDYW5jZWxcIiksIGVycm9yTWVzc2FnZSA/IGNvcmUuanN4KHBpbGwuUGlsbCwge1xuICAgIHRvbmU6IFwibmVnYXRpdmVcIixcbiAgICB3ZWlnaHQ6IFwibGlnaHRcIlxuICB9LCBlcnJvck1lc3NhZ2UpIDogdmFsdWUua2luZCA9PT0gJ3VwbG9hZCcgJiYgY29yZS5qc3gocGlsbC5QaWxsLCB7XG4gICAgd2VpZ2h0OiBcImxpZ2h0XCIsXG4gICAgdG9uZTogXCJwb3NpdGl2ZVwiXG4gIH0sIFwiU2F2ZSB0byB1cGxvYWQgdGhpcyBpbWFnZVwiKSkpIDogY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGNzczoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIGdhcDogXCJzbWFsbFwiLFxuICAgIGFjcm9zczogdHJ1ZVxuICB9LCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIHZhciBfaW5wdXRSZWYkY3VycmVudDI7XG5cbiAgICAgIChfaW5wdXRSZWYkY3VycmVudDIgPSBpbnB1dFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaW5wdXRSZWYkY3VycmVudDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pbnB1dFJlZiRjdXJyZW50Mi5jbGljaygpO1xuICAgIH1cbiAgfSwgXCJVcGxvYWQgSW1hZ2VcIiksIHZhbHVlLmtpbmQgPT09ICdyZW1vdmUnICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgdG9uZTogXCJuZWdhdGl2ZVwiLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZSh2YWx1ZS5wcmV2aW91cyk7XG4gICAgfVxuICB9LCBcIlVuZG8gcmVtb3ZhbFwiKSwgdmFsdWUua2luZCA9PT0gJ3JlbW92ZScgJiYgLy8gTk9URSAtLSBVWCBkZWNpc2lvbiBpcyB0byBub3QgZGlzcGxheSB0aGlzLCBJIHRoaW5rIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgLy8gZm9yIGRlbGV0aW5nIHVwbG9hZGVkIGltYWdlcyAoYW5kIHdlIGRvbid0IHN1cHBvcnQgdGhhdCB5ZXQpXG4gIC8vIDxQaWxsIHdlaWdodD1cImxpZ2h0XCIgdG9uZT1cIndhcm5pbmdcIj5cbiAgLy8gICBTYXZlIHRvIHJlbW92ZSB0aGlzIGltYWdlXG4gIC8vIDwvUGlsbD5cbiAgbnVsbCksIGNvcmUuanN4KFwiaW5wdXRcIiwge1xuICAgIGNzczoge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSxcbiAgICBhdXRvQ29tcGxldGU6IFwib2ZmXCIsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgcmVmOiBpbnB1dFJlZixcbiAgICBrZXk6IGlucHV0S2V5LFxuICAgIG5hbWU6IGZpZWxkLnBhdGgsXG4gICAgb25DaGFuZ2U6ICh7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsaWRpdHksXG4gICAgICAgIGZpbGVzXG4gICAgICB9XG4gICAgfSkgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IGZpbGVzID09PSBudWxsIHx8IGZpbGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmaWxlc1swXTtcbiAgICAgIGlmICghZmlsZSkgcmV0dXJuOyAvLyBiYWlsIGlmIHRoZSB1c2VyIGNhbmNlbHMgZnJvbSB0aGUgZmlsZSBicm93c2VyXG5cbiAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZSh7XG4gICAgICAgIGtpbmQ6ICd1cGxvYWQnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZmlsZSxcbiAgICAgICAgICB2YWxpZGl0eVxuICAgICAgICB9LFxuICAgICAgICBwcmV2aW91czogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdHlwZTogXCJmaWxlXCIsXG4gICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWRcbiAgfSkpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVJbWFnZSh7XG4gIGZpbGUsXG4gIHZhbGlkaXR5XG59KSB7XG4gIGlmICghdmFsaWRpdHkudmFsaWQpIHtcbiAgICByZXR1cm4gJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgcmVsb2FkIGFuZCB0cnkgYWdhaW4uJztcbiAgfSAvLyBjaGVjayBpZiB0aGUgZmlsZSBpcyBhY3R1YWxseSBhbiBpbWFnZVxuXG5cbiAgaWYgKCFmaWxlLnR5cGUuaW5jbHVkZXMoJ2ltYWdlJykpIHtcbiAgICByZXR1cm4gJ09ubHkgaW1hZ2UgZmlsZXMgYXJlIGFsbG93ZWQuIFBsZWFzZSB0cnkgYWdhaW4uJztcbiAgfVxufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0eWxlZCBDb21wb25lbnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgSW1hZ2UgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHRoZW1lID0gY29yZS51c2VUaGVtZSgpO1xuICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwge1xuICAgIGNzczoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZWRpdW0sXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgbGluZUhlaWdodDogMCxcbiAgICAgIHBhZGRpbmc6IDQsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogMTMwIC8vIDEyMHB4IGltYWdlICsgY2hyb21lXG5cbiAgICB9XG4gIH0sIGNvcmUuanN4KFwiaW1nXCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfSwgcHJvcHMpKSk7XG59O1xuXG4vKiBAanN4IGpzeCAqL1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBpdGVtW2ZpZWxkLnBhdGhdO1xuICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xuICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwge1xuICAgIGNzczoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBoZWlnaHQ6IDI0LFxuICAgICAgbGluZUhlaWdodDogMCxcbiAgICAgIHdpZHRoOiAyNFxuICAgIH1cbiAgfSwgY29yZS5qc3goXCJpbWdcIiwge1xuICAgIGFsdDogZGF0YS5maWxlbmFtZSxcbiAgICBjc3M6IHtcbiAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgc3JjOiBkYXRhLnB1YmxpY1VybFRyYW5zZm9ybWVkXG4gIH0pKTtcbn07XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICBjb25zdCBkYXRhID0gaXRlbVtmaWVsZC5wYXRoXTtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgZGF0YSAmJiBjb3JlLmpzeChcImltZ1wiLCB7XG4gICAgYWx0OiBkYXRhLmZpbGVuYW1lLFxuICAgIHNyYzogZGF0YS5wdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICB9KSk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBgJHtjb25maWcucGF0aH0ge1xuICAgICAgICBpZFxuICAgICAgICBmaWxlbmFtZVxuICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZCh0cmFuc2Zvcm1hdGlvbjogeyB3aWR0aDogXCIxMjBcIiBjcm9wOiBcImxpbWl0XCIgfSlcbiAgICAgIH1gLFxuICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAga2luZDogJ2VtcHR5J1xuICAgIH0sXG5cbiAgICBkZXNlcmlhbGl6ZShpdGVtKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1bY29uZmlnLnBhdGhdO1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHtcbiAgICAgICAga2luZDogJ2VtcHR5J1xuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6ICdmcm9tLXNlcnZlcicsXG4gICAgICAgIGRhdGE6IHZhbHVlXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmtpbmQgIT09ICd1cGxvYWQnIHx8IHZhbGlkYXRlSW1hZ2UodmFsdWUuZGF0YSkgPT09IHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ3VwbG9hZCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZS5kYXRhLmZpbGVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlLmtpbmQgPT09ICdyZW1vdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2NvbmZpZy5wYXRoXTogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vY2xvdWRpbmFyeS5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vY2xvdWRpbmFyeS5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGF1dG9Gb2N1c1xufSkgPT4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBvbkNoYW5nZSA/IGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gIHR5cGU6IFwibnVtYmVyXCIsXG4gIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuICB9LFxuICB2YWx1ZTogdmFsdWVcbn0pIDogdmFsdWUpO1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goY29tcG9uZW50cy5DZWxsTGluaywgbGlua1RvLCB2YWx1ZSkgOiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIHZhbHVlKTtcbn07XG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bZmllbGQucGF0aF0pO1xufTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXG4gICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbY29uZmlnLnBhdGhdO1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSArICcnIDogJyc7XG4gICAgfSxcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+ICh7XG4gICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZSA9PT0gJycgPyBudWxsIDogcGFyc2VJbnQodmFsdWUsIDEwKVxuICAgIH0pLFxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1teXFxkLFxcc10vZywgJycpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgICBhdXRvRm9jdXM6IHByb3BzLmF1dG9Gb2N1c1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWw6ICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHR5cGUgPT09ICdpcycgPyBjb25maWcucGF0aCA6IGAke2NvbmZpZy5wYXRofV8ke3R5cGV9YDtcbiAgICAgICAgY29uc3QgdmFsdWVXaXRob3V0V2hpdGVzcGFjZSA9IHZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2tleV06IFsnaW4nLCAnbm90X2luJ10uaW5jbHVkZXModHlwZSkgPyB2YWx1ZVdpdGhvdXRXaGl0ZXNwYWNlLnNwbGl0KCcsJykubWFwKGkgPT4gcGFyc2VJbnQoaSkpIDogcGFyc2VJbnQodmFsdWVXaXRob3V0V2hpdGVzcGFjZSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIExhYmVsKHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB0eXBlXG4gICAgICB9KSB7XG4gICAgICAgIGxldCByZW5kZXJlZFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKFsnaW4nLCAnbm90X2luJ10uaW5jbHVkZXModHlwZSkpIHtcbiAgICAgICAgICByZW5kZXJlZFZhbHVlID0gdmFsdWUuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gdmFsdWUudHJpbSgpKS5qb2luKCcsICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2xhYmVsLnRvTG93ZXJDYXNlKCl9OiAke3JlbmRlcmVkVmFsdWV9YDtcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGlzOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBleGFjdGx5JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdDoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgbm90IGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgZ3Q6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGdyZWF0ZXIgdGhhbicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBsdDoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgbGVzcyB0aGFuJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGd0ZToge1xuICAgICAgICAgIGxhYmVsOiAnSXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGx0ZToge1xuICAgICAgICAgIGxhYmVsOiAnSXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGluOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBvbmUgb2YnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2luOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBub3Qgb25lIG9mJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzID0gcmVxdWlyZSgnLi4vLi4vLi4vdGV4dC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGRlZmF1bHRWYWx1ZTogJycsXG5cbiAgICBkZXNlcmlhbGl6ZShpdGVtKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1bY29uZmlnLnBhdGhdO1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6ICcnO1xuICAgIH0sXG5cbiAgICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtjb25maWcucGF0aF06IHZhbHVlXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBmaWx0ZXI6IHtcbiAgICAgIEZpbHRlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWwoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpcyc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ25vdCc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW2Ake2NvbmZpZy5wYXRofV9ub3RgXTogdmFsdWVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ2luJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbYCR7Y29uZmlnLnBhdGh9X2luYF06IHZhbHVlLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IHZhbHVlLnRyaW0oKSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ25vdF9pbic6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW2Ake2NvbmZpZy5wYXRofV9ub3RfaW5gXTogdmFsdWUuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gdmFsdWUudHJpbSgpKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pIHtcbiAgICAgICAgbGV0IHJlbmRlcmVkVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoWydpbicsICdub3RfaW4nXS5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICAgIHJlbmRlcmVkVmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiB2YWx1ZS50cmltKCkpLmpvaW4oJywgJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7bGFiZWwudG9Mb3dlckNhc2UoKX06ICR7cmVuZGVyZWRWYWx1ZX1gO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgaXM6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBub3QnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG9uZSBvZicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3RfaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBvbmUgb2YnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gdHlwZXNfdGV4dF92aWV3c19kaXN0X2ZpZWxkcy5DYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzLkNlbGw7XG5leHBvcnRzLkZpZWxkID0gdHlwZXNfdGV4dF92aWV3c19kaXN0X2ZpZWxkcy5GaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX29iamVjdFNwcmVhZCA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMicpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9idXR0b24nKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG52YXIgRXllSWNvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVJY29uJyk7XG52YXIgRXllT2ZmSWNvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVPZmZJY29uJyk7XG52YXIgWEljb24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvWEljb24nKTtcbnZhciBzZWdtZW50ZWRDb250cm9sID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sJyk7XG5cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgZm9yY2VWYWxpZGF0aW9uLFxuICBhdXRvRm9jdXNcbn0pID0+IHtcbiAgY29uc3QgW3Nob3dJbnB1dFZhbHVlLCBzZXRTaG93SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3VjaGVkRmlyc3RJbnB1dCwgc2V0VG91Y2hlZEZpcnN0SW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG91Y2hlZFNlY29uZElucHV0LCBzZXRUb3VjaGVkU2Vjb25kSW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaG91bGRTaG93VmFsaWRhdGlvbiA9IGZvcmNlVmFsaWRhdGlvbiB8fCB0b3VjaGVkRmlyc3RJbnB1dCAmJiB0b3VjaGVkU2Vjb25kSW5wdXQ7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSBzaG91bGRTaG93VmFsaWRhdGlvbiAmJiB2YWx1ZS5raW5kID09PSAnZWRpdGluZycgPyB2YWx1ZS52YWx1ZSA9PT0gdmFsdWUuY29uZmlybSA/IHZhbHVlLnZhbHVlLmxlbmd0aCA+PSBmaWVsZC5taW5MZW5ndGggPyB1bmRlZmluZWQgOiBgVGhlIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgJHtmaWVsZC5taW5MZW5ndGh9IGNoYXJhY3RlcnMgbG9uZ2AgOiAnVGhlIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gnIDogdW5kZWZpbmVkO1xuICBjb25zdCBpbnB1dFR5cGUgPSBzaG93SW5wdXRWYWx1ZSA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIG9uQ2hhbmdlID09PSB1bmRlZmluZWQgPyB2YWx1ZS5pc1NldCA/ICdQYXNzd29yZCBpcyBzZXQnIDogJ1Bhc3N3b3JkIGlzIG5vdCBzZXQnIDogdmFsdWUua2luZCA9PT0gJ2luaXRpYWwnID8gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAga2luZDogJ2VkaXRpbmcnLFxuICAgICAgICBjb25maXJtOiAnJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBpc1NldDogdmFsdWUuaXNTZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgdmFsdWUuaXNTZXQgPyAnQ2hhbmdlIFBhc3N3b3JkJyA6ICdTZXQgUGFzc3dvcmQnKSA6IGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwic21hbGxcIlxuICB9LCBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgY3NzOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9XG4gIH0sIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgaW52YWxpZDogdmFsaWRhdGlvbiAhPT0gdW5kZWZpbmVkLFxuICAgIHR5cGU6IGlucHV0VHlwZSxcbiAgICB2YWx1ZTogdmFsdWUudmFsdWUsXG4gICAgcGxhY2Vob2xkZXI6IFwiTmV3IFBhc3N3b3JkXCIsXG4gICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBvbkJsdXI6ICgpID0+IHtcbiAgICAgIHNldFRvdWNoZWRGaXJzdElucHV0KHRydWUpO1xuICAgIH1cbiAgfSksIGNvcmUuanN4KFNwYWNlciwgbnVsbCksIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICBpbnZhbGlkOiB2YWxpZGF0aW9uICE9PSB1bmRlZmluZWQsXG4gICAgdHlwZTogaW5wdXRUeXBlLFxuICAgIHZhbHVlOiB2YWx1ZS5jb25maXJtLFxuICAgIHBsYWNlaG9sZGVyOiBcIkNvbmZpcm0gUGFzc3dvcmRcIixcbiAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGNvbmZpcm06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSkpO1xuICAgIH0sXG4gICAgb25CbHVyOiAoKSA9PiB7XG4gICAgICBzZXRUb3VjaGVkU2Vjb25kSW5wdXQodHJ1ZSk7XG4gICAgfVxuICB9KSwgY29yZS5qc3goU3BhY2VyLCBudWxsKSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIHNldFNob3dJbnB1dFZhbHVlKCFzaG93SW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9LCBjb3JlLmpzeChjb3JlLlZpc3VhbGx5SGlkZGVuLCBudWxsLCBzaG93SW5wdXRWYWx1ZSA/ICdIaWRlIFRleHQnIDogJ1Nob3cgVGV4dCcpLCBzaG93SW5wdXRWYWx1ZSA/IGNvcmUuanN4KEV5ZU9mZkljb24uRXllT2ZmSWNvbiwgbnVsbCkgOiBjb3JlLmpzeChFeWVJY29uLkV5ZUljb24sIG51bGwpKSwgY29yZS5qc3goU3BhY2VyLCBudWxsKSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAga2luZDogJ2luaXRpYWwnLFxuICAgICAgICBpc1NldDogdmFsdWUuaXNTZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgY29yZS5qc3goY29yZS5WaXN1YWxseUhpZGRlbiwgbnVsbCwgXCJDYW5jZWxcIiksIGNvcmUuanN4KFhJY29uLlhJY29uLCBudWxsKSkpLCB2YWxpZGF0aW9uICYmIGNvcmUuanN4KGNvcmUuVGV4dCwge1xuICAgIGNvbG9yOiBcInJlZDYwMFwiLFxuICAgIHNpemU6IFwic21hbGxcIlxuICB9LCB2YWxpZGF0aW9uKSkpO1xufTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goY29tcG9uZW50cy5DZWxsQ29udGFpbmVyLCBudWxsLCBpdGVtW2Ake2ZpZWxkLnBhdGh9X2lzX3NldGBdID8gJ0lzIHNldCcgOiAnSXMgbm90IHNldCcpO1xufTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bYCR7ZmllbGQucGF0aH1faXNfc2V0YF0gPyAnSXMgc2V0JyA6ICdJcyBub3Qgc2V0Jyk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBgJHtjb25maWcucGF0aH1faXNfc2V0YCxcbiAgICBtaW5MZW5ndGg6IGNvbmZpZy5maWVsZE1ldGEubWluTGVuZ3RoLFxuICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAga2luZDogJ2luaXRpYWwnLFxuICAgICAgaXNTZXQ6IG51bGxcbiAgICB9LFxuXG4gICAgdmFsaWRhdGUoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5raW5kID09PSAnaW5pdGlhbCcgfHwgc3RhdGUudmFsdWUgPT09IHN0YXRlLmNvbmZpcm0gJiYgc3RhdGUudmFsdWUubGVuZ3RoID49IGNvbmZpZy5maWVsZE1ldGEubWluTGVuZ3RoO1xuICAgIH0sXG5cbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiAoe1xuICAgICAga2luZDogJ2luaXRpYWwnLFxuICAgICAgaXNTZXQ6IGRhdGFbYCR7Y29uZmlnLnBhdGh9X2lzX3NldGBdXG4gICAgfSksXG4gICAgc2VyaWFsaXplOiB2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ2luaXRpYWwnKSByZXR1cm4ge307XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZS52YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmpzeChzZWdtZW50ZWRDb250cm9sLlNlZ21lbnRlZENvbnRyb2wsIHtcbiAgICAgICAgICBzZWxlY3RlZEluZGV4OiBOdW1iZXIocHJvcHMudmFsdWUpLFxuICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZSghIXZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlZ21lbnRzOiBbJ0lzIE5vdCBTZXQnLCAnSXMgU2V0J11cbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBncmFwaHFsOiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgJHtjb25maWcucGF0aH1fJHt0eXBlfWBdOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyAnaXMgc2V0JyA6ICdpcyBub3Qgc2V0JztcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGlzX3NldDoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgU2V0JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IFNwYWNlciA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHNwYWNpbmdcbiAgfSA9IGNvcmUudXNlVGhlbWUoKTtcbiAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IHtcbiAgICAgIHdpZHRoOiBzcGFjaW5nLnNtYWxsLFxuICAgICAgZmxleFNocmluazogMFxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIHNlZ21lbnRlZENvbnRyb2wgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvc2VnbWVudGVkLWNvbnRyb2wnKTtcblxuLyogQGpzeCBqc3ggKi9cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgYXV0b0ZvY3VzXG59KSA9PiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGZpZWxkLmRpc3BsYXlNb2RlID09PSAnc2VsZWN0JyA/IGNvcmUuanN4KGZpZWxkcy5TZWxlY3QsIHtcbiAgaXNDbGVhcmFibGU6IHRydWUsXG4gIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICBvcHRpb25zOiBmaWVsZC5vcHRpb25zLFxuICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICBvbkNoYW5nZTogdmFsdWUgPT4ge1xuICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZSh2YWx1ZSk7XG4gIH0sXG4gIHZhbHVlOiB2YWx1ZSxcbiAgcG9ydGFsTWVudTogdHJ1ZVxufSkgOiBjb3JlLmpzeChzZWdtZW50ZWRDb250cm9sLlNlZ21lbnRlZENvbnRyb2wsIHtcbiAgc2VnbWVudHM6IGZpZWxkLm9wdGlvbnMubWFwKHggPT4geC5sYWJlbCksXG4gIHNlbGVjdGVkSW5kZXg6IHZhbHVlID8gZmllbGQub3B0aW9ucy5maW5kSW5kZXgoeCA9PiB4LnZhbHVlID09PSB2YWx1ZS52YWx1ZSkgOiB1bmRlZmluZWQsXG4gIG9uQ2hhbmdlOiBpbmRleCA9PiB7XG4gICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKGZpZWxkLm9wdGlvbnNbaW5kZXhdKTtcbiAgfVxufSkpO1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgdmFyIF9maWVsZCRvcHRpb25zJGZpbmQ7XG5cbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xuICBjb25zdCBsYWJlbCA9IChfZmllbGQkb3B0aW9ucyRmaW5kID0gZmllbGQub3B0aW9ucy5maW5kKHggPT4geC52YWx1ZSA9PT0gdmFsdWUpKSA9PT0gbnVsbCB8fCBfZmllbGQkb3B0aW9ucyRmaW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkb3B0aW9ucyRmaW5kLmxhYmVsO1xuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goY29tcG9uZW50cy5DZWxsTGluaywgbGlua1RvLCBsYWJlbCkgOiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIGxhYmVsKTtcbn07XG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHZhciBfZmllbGQkb3B0aW9ucyRmaW5kMjtcblxuICBjb25zdCBsYWJlbCA9IChfZmllbGQkb3B0aW9ucyRmaW5kMiA9IGZpZWxkLm9wdGlvbnMuZmluZCh4ID0+IHgudmFsdWUgPT09IGl0ZW1bZmllbGQucGF0aF0pKSA9PT0gbnVsbCB8fCBfZmllbGQkb3B0aW9ucyRmaW5kMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ZpZWxkJG9wdGlvbnMkZmluZDIubGFiZWw7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGxhYmVsKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgY29uc3Qgb3B0aW9uc1dpdGhTdHJpbmdWYWx1ZXMgPSBjb25maWcuZmllbGRNZXRhLm9wdGlvbnMubWFwKHggPT4gKHtcbiAgICBsYWJlbDogeC5sYWJlbCxcbiAgICB2YWx1ZTogeC52YWx1ZS50b1N0cmluZygpXG4gIH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkYXRhVHlwZTogY29uZmlnLmZpZWxkTWV0YS5kYXRhVHlwZSxcbiAgICBkaXNwbGF5TW9kZTogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSxcbiAgICBvcHRpb25zOiBvcHRpb25zV2l0aFN0cmluZ1ZhbHVlcyxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBjb25maWcuZmllbGRNZXRhLm9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gZGF0YVtjb25maWcucGF0aF0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5sYWJlbCxcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUudG9TdHJpbmcoKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+IHtcbiAgICAgIHZhciBfdmFsdWUkdmFsdWU7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtjb25maWcucGF0aF06IChfdmFsdWUkdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUudmFsdWUpICE9PSBudWxsICYmIF92YWx1ZSR2YWx1ZSAhPT0gdm9pZCAwID8gX3ZhbHVlJHZhbHVlIDogbnVsbFxuICAgICAgfTtcbiAgICB9LFxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuTXVsdGlTZWxlY3QsIHtcbiAgICAgICAgICBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgb3B0aW9uczogb3B0aW9uc1dpdGhTdHJpbmdWYWx1ZXMsXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWw6ICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlOiBvcHRpb25zXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGludmVydGVkID0gdHlwZSA9PT0gJ25vdF9tYXRjaGVzJztcblxuICAgICAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtgJHtjb25maWcucGF0aH0ke2ludmVydGVkID8gJ19ub3QnIDogJyd9YF06IG51bGxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNNdWx0aSA9IG9wdGlvbnMubGVuZ3RoID4gMTtcbiAgICAgICAgbGV0IGtleSA9IGNvbmZpZy5wYXRoO1xuXG4gICAgICAgIGlmIChpc011bHRpICYmIGludmVydGVkKSB7XG4gICAgICAgICAga2V5ID0gYCR7Y29uZmlnLnBhdGh9X25vdF9pbmA7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgIGtleSA9IGAke2NvbmZpZy5wYXRofV9pbmA7XG4gICAgICAgIH0gZWxzZSBpZiAoaW52ZXJ0ZWQpIHtcbiAgICAgICAgICBrZXkgPSBgJHtjb25maWcucGF0aH1fbm90YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNNdWx0aSA/IG9wdGlvbnMubWFwKHggPT4geC52YWx1ZSkgOiBvcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB0eXBlID09PSAnbm90X21hdGNoZXMnID8gYGlzIHNldGAgOiBgaGFzIG5vIHZhbHVlYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUubWFwKGkgPT4gaS5sYWJlbCkuam9pbignLCAnKTtcbiAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ25vdF9tYXRjaGVzJyA/IGBpcyBub3QgaW4gWyR7dmFsdWVzfV1gIDogYGlzIGluIFske3ZhbHVlc31dYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWVbMF0ubGFiZWw7XG4gICAgICAgIHJldHVybiB0eXBlID09PSAnbm90X21hdGNoZXMnID8gYGlzIG5vdCAke29wdGlvbkxhYmVsfWAgOiBgaXMgJHtvcHRpb25MYWJlbH1gO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgbWF0Y2hlczoge1xuICAgICAgICAgIGxhYmVsOiAnTWF0Y2hlcycsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBbXVxuICAgICAgICB9LFxuICAgICAgICBub3RfbWF0Y2hlczoge1xuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3QgbWF0Y2gnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGF1dG9Gb2N1c1xufSkgPT4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBvbkNoYW5nZSA/IGZpZWxkLmRpc3BsYXlNb2RlID09PSAndGV4dGFyZWEnID8gY29yZS5qc3goZmllbGRzLlRleHRBcmVhLCB7XG4gIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICBvbkNoYW5nZTogZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKSxcbiAgdmFsdWU6IHZhbHVlXG59KSA6IGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gIG9uQ2hhbmdlOiBldmVudCA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpLFxuICB2YWx1ZTogdmFsdWVcbn0pIDogdmFsdWUpO1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goY29tcG9uZW50cy5DZWxsTGluaywgbGlua1RvLCB2YWx1ZSkgOiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIHZhbHVlKTtcbn07XG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bZmllbGQucGF0aF0pO1xufTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXG4gICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICBkaXNwbGF5TW9kZTogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbY29uZmlnLnBhdGhdO1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6ICcnO1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiB2YWx1ZSA9PiAoe1xuICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWVcbiAgICB9KSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIEZpbHRlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWw6ICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHR5cGUgPT09ICdpc19pJyA/IGAke2NvbmZpZy5wYXRofV9pYCA6IGAke2NvbmZpZy5wYXRofV8ke3R5cGV9YDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBba2V5XTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIExhYmVsKHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSB7XG4gICAgICAgIHJldHVybiBgJHtsYWJlbC50b0xvd2VyQ2FzZSgpfTogXCIke3ZhbHVlfVwiYDtcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGNvbnRhaW5zX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0NvbnRhaW5zJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9jb250YWluc19pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBjb250YWluJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGlzX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBleGFjdGx5JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0c193aXRoX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ1N0YXJ0cyB3aXRoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9zdGFydHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBzdGFydCB3aXRoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGVuZHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdFbmRzIHdpdGgnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2VuZHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBlbmQgd2l0aCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGRhdGVGbnMgPSByZXF1aXJlKCdkYXRlLWZucycpO1xudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xuXG5jb25zdCBnZXRUaW1lID0gdGltZVZhbHVlID0+IHtcbiAgaWYgKCF0aW1lVmFsdWUpIHJldHVybiBbMCwgMF07XG4gIHJldHVybiB0aW1lVmFsdWUuc3BsaXQoJzonKS5tYXAobiA9PiBOdW1iZXIobikpO1xufTtcblxuZnVuY3Rpb24gaXNWYWxpZERhdGUoZGF0ZSkge1xuICBpZiAoIWRhdGUpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEJvb2xlYW4oZGF0ZUZucy5wYXJzZUlTTyhkYXRlKS50b0lTT1N0cmluZygpKTtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRUaW1lKHRpbWUpIHtcbiAgaWYgKCF0aW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVGbnMuaXNWYWxpZChkYXRlRm5zLnBhcnNlKHRpbWUsICdISDptbScsIG5ldyBEYXRlKCkpKTtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRJU08odmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyB0b0lTT1N0cmluZyBjb252ZXJ0cyBvdXIgc3RyaW5nIGludG8genVsdSB0aW1lXG4gICAgLy8gaW5zdGVhZCBvZiBjaGVja2luZyBmb3IgdGhlIHRpbWVzdGFtcCB0byBiZSBzcGVjaWZpY2FsbHkgaW4genVsdSB0aW1lXG4gICAgLy8gd2UgcmVsYXggdGhlIHZhbGlkYXRpb24gaGVyZSBhIGxpdHRsZSwgdG8ganVzdCBiZSBhIHZhbGlkIElTTyBzdHJpbmcuXG4gICAgcmV0dXJuIEJvb2xlYW4oZGF0ZUZucy5wYXJzZUlTTyhjb25zdHJ1Y3RUaW1lc3RhbXAodmFsdWUpKS50b0lTT1N0cmluZygpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBjb25zdHJ1Y3RUaW1lc3RhbXAoe1xuICBkYXRlVmFsdWUsXG4gIHRpbWVWYWx1ZVxufSkge1xuICBsZXQgZm9ybWF0dGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGVWYWx1ZSk7XG4gIGNvbnN0IFtob3VycywgbWludXRlc10gPSBnZXRUaW1lKHRpbWVWYWx1ZSk7XG4gIGZvcm1hdHRlZERhdGUuc2V0SG91cnMoaG91cnMpO1xuICBmb3JtYXR0ZWREYXRlLnNldE1pbnV0ZXMobWludXRlcyk7XG4gIHJldHVybiBkYXRlRm5zLmZvcm1hdElTTyhmb3JtYXR0ZWREYXRlKTtcbn1cbmZ1bmN0aW9uIGRlY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZGF0ZVZhbHVlOiB2YWx1ZSxcbiAgICB0aW1lVmFsdWU6IHJlc29sdmVJbml0aWFsVGltZVZhbHVlKHZhbHVlKVxuICB9O1xufVxuZnVuY3Rpb24gZm9ybWF0T3V0cHV0KHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHJldHVybiAnJztcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgcmV0dXJuIGAke2RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCl9ICR7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1gO1xufVxuZnVuY3Rpb24gcmVzb2x2ZUluaXRpYWxUaW1lVmFsdWUodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICBjb25zdCBkYXRlID0gdmFsdWUgfHwgZGVmYXVsdFZhbHVlO1xuICBpZiAoIWRhdGUpIHJldHVybiAnJztcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICBob3VyMTI6IGZhbHNlXG4gIH0pO1xufVxuXG5jb25zdCBUaW1lUGlja2VyID0gKHtcbiAgYXV0b0ZvY3VzLFxuICBvbkJsdXIsXG4gIGRpc2FibGVkLFxuICBvbkNoYW5nZSxcbiAgZm9ybWF0ID0gJzI0aHInLFxuICB2YWx1ZVxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIG1heExlbmd0aDogZm9ybWF0ID09PSAnMjRocicgPyA1IDogNyxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIG9uQmx1cjogb25CbHVyLFxuICAgIHBsYWNlaG9sZGVyOiBmb3JtYXQgPT09ICcyNGhyJyA/ICcwMDowMCcgOiAnMDA6MDBhbScsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pO1xufTtcblxuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBmb3JjZVZhbGlkYXRpb25cbn0pID0+IHtcbiAgY29uc3QgW3RvdWNoZWRGaXJzdElucHV0LCBzZXRUb3VjaGVkRmlyc3RJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3VjaGVkU2Vjb25kSW5wdXQsIHNldFRvdWNoZWRTZWNvbmRJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3dWYWxpZGF0aW9uID0gdG91Y2hlZEZpcnN0SW5wdXQgJiYgdG91Y2hlZFNlY29uZElucHV0IHx8IGZvcmNlVmFsaWRhdGlvbjtcblxuICBjb25zdCBzaG93RGF0ZUVycm9yID0gZGF0ZVZhbHVlID0+IHtcbiAgICBpZiAoIWRhdGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICAgIH1cbiAgICAgIH0sIFwiUGxlYXNlIHNlbGVjdCBhIGRhdGUgdmFsdWUuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNWYWxpZERhdGUoZGF0ZVZhbHVlKSAmJiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgICBjc3M6IHtcbiAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICB9XG4gICAgfSwgXCJJbmNvcnJlY3QgZGF0ZSB2YWx1ZVwiKTtcbiAgfTtcblxuICBjb25zdCBzaG93VGltZUVycm9yID0gdGltZVZhbHVlID0+IHtcbiAgICBpZiAoIXRpbWVWYWx1ZSkge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICAgIH1cbiAgICAgIH0sIFwiUGxlYXNlIHNlbGVjdCBhIHRpbWUgdmFsdWUuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNWYWxpZFRpbWUodGltZVZhbHVlKSAmJiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgICBjc3M6IHtcbiAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICB9XG4gICAgfSwgXCJUaW1lIG11c3QgYmUgaW4gdGhlIGZvcm0gSEg6bW1cIik7XG4gIH07XG5cbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBjb3JlLmpzeChjb3JlLlN0YWNrLCBudWxsLCBjb3JlLmpzeChjb3JlLklubGluZSwge1xuICAgIGdhcDogXCJzbWFsbFwiXG4gIH0sIGNvcmUuanN4KGNvcmUuU3RhY2ssIG51bGwsIGNvcmUuanN4KGZpZWxkcy5EYXRlUGlja2VyLCB7XG4gICAgb25VcGRhdGU6IGRhdGUgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGRhdGVWYWx1ZTogZGF0ZSB8fCAnJ1xuICAgICAgfSkpO1xuICAgIH0sXG4gICAgb25DbGVhcjogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGRhdGVWYWx1ZTogJydcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIG9uQmx1cjogKCkgPT4gc2V0VG91Y2hlZEZpcnN0SW5wdXQodHJ1ZSksXG4gICAgdmFsdWU6IHZhbHVlLmRhdGVWYWx1ZVxuICB9KSwgc2hvd1ZhbGlkYXRpb24gJiYgc2hvd0RhdGVFcnJvcih2YWx1ZS5kYXRlVmFsdWUpKSwgY29yZS5qc3goY29yZS5TdGFjaywgbnVsbCwgY29yZS5qc3goVGltZVBpY2tlciwge1xuICAgIG9uQmx1cjogKCkgPT4gc2V0VG91Y2hlZFNlY29uZElucHV0KHRydWUpLFxuICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIGZvcm1hdDogXCIyNGhyXCIsXG4gICAgb25DaGFuZ2U6IGV2ZW50ID0+IG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgdGltZVZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KSksXG4gICAgdmFsdWU6IHZhbHVlLnRpbWVWYWx1ZSB8fCAnJ1xuICB9KSwgc2hvd1ZhbGlkYXRpb24gJiYgc2hvd1RpbWVFcnJvcih2YWx1ZS50aW1lVmFsdWUpKSkpIDogaXNWYWxpZElTTyh2YWx1ZSkgPyBmb3JtYXRPdXRwdXQoY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKSkgOiAnJyk7XG59O1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXTtcbiAgcmV0dXJuIGxpbmtUbyA/IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbExpbmssIGxpbmtUbywgZm9ybWF0T3V0cHV0KHZhbHVlKSkgOiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIGZvcm1hdE91dHB1dCh2YWx1ZSkpO1xufTtcbkNlbGwuc3VwcG9ydHNMaW5rVG8gPSB0cnVlO1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgaXRlbVtmaWVsZC5wYXRoXSk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcucGF0aCxcbiAgICBkZWZhdWx0VmFsdWU6IHtcbiAgICAgIGRhdGVWYWx1ZTogJycsXG4gICAgICB0aW1lVmFsdWU6ICcnXG4gICAgfSxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbY29uZmlnLnBhdGhdO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZVZhbHVlOiAnJyxcbiAgICAgICAgdGltZVZhbHVlOiAnJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogKHtcbiAgICAgIGRhdGVWYWx1ZSxcbiAgICAgIHRpbWVWYWx1ZVxuICAgIH0pID0+IHtcbiAgICAgIGlmIChkYXRlVmFsdWUgJiYgdGltZVZhbHVlICYmIGlzVmFsaWRJU08oe1xuICAgICAgICBkYXRlVmFsdWUsXG4gICAgICAgIHRpbWVWYWx1ZVxuICAgICAgfSkpIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBjb25zdHJ1Y3RUaW1lc3RhbXAoe1xuICAgICAgICAgIGRhdGVWYWx1ZSxcbiAgICAgICAgICB0aW1lVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2NvbmZpZy5wYXRoXTogZm9ybWF0dGVkRGF0ZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBbY29uZmlnLnBhdGhdOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB2YWxpZGF0ZSh7XG4gICAgICBkYXRlVmFsdWUsXG4gICAgICB0aW1lVmFsdWVcbiAgICB9KSB7XG4gICAgICBpZiAoIWRhdGVWYWx1ZSAmJiAhdGltZVZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICghZGF0ZVZhbHVlKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoIXRpbWVWYWx1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGlzVmFsaWRJU08oe1xuICAgICAgICBkYXRlVmFsdWUsXG4gICAgICAgIHRpbWVWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEtleXN0b25lUHJvdmlkZXIgfSBmcm9tICdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb250ZXh0JztcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IENvcmUgfSBmcm9tICdAa2V5c3RvbmUtdWkvY29yZSc7XG5cbmltcG9ydCAqIGFzIHZpZXc0NmQzYWI5YyBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL21vbmdvSWQvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlldzlhNTEwNzhhIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGV4dC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3ZWI1YWJlMTggZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9wYXNzd29yZC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3Njk5ZGEyYTkgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90aW1lc3RhbXAvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlldzg1YjcyM2Y1IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvc2VsZWN0L3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXc1MzU0NmJmOCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL2ludGVnZXIvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlldzZiMzdlODI4IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9jbG91ZGluYXJ5L3ZpZXdzJztcblxuY29uc3QgYWRtaW5Db25maWcgPSB7fTtcblxuY29uc3QgZmllbGRWaWV3cyA9IHtcbiAgdmlldzQ2ZDNhYjljLFxuICB2aWV3OWE1MTA3OGEsXG4gIHZpZXdlYjVhYmUxOCxcbiAgdmlldzY5OWRhMmE5LFxuICB2aWV3ODViNzIzZjUsXG4gIHZpZXc1MzU0NmJmOCxcbiAgdmlldzZiMzdlODI4LFxufTtcblxuY29uc3QgbGF6eU1ldGFkYXRhUXVlcnkgPSB7XG4gIGtpbmQ6ICdEb2N1bWVudCcsXG4gIGRlZmluaXRpb25zOiBbXG4gICAge1xuICAgICAga2luZDogJ09wZXJhdGlvbkRlZmluaXRpb24nLFxuICAgICAgb3BlcmF0aW9uOiAncXVlcnknLFxuICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ2tleXN0b25lJyxcbiAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAyMiwgZW5kOiAzMCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdhZG1pbk1ldGEnLFxuICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDM5LCBlbmQ6IDQ4IH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xpc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA1OSwgZW5kOiA2NCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdrZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDc3LCBlbmQ6IDgwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA3NywgZW5kOiA4MCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2lzSGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA5MSwgZW5kOiA5OSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogOTEsIGVuZDogOTkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdmaWVsZHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDExMCwgZW5kOiAxMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAncGF0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTMxLCBlbmQ6IDEzNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTMxLCBlbmQ6IDEzNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2NyZWF0ZVZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE0OCwgZW5kOiAxNTggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmllbGRNb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNzUsIGVuZDogMTg0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNzUsIGVuZDogMTg0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNTksIGVuZDogMTk4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNDgsIGVuZDogMTk4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTcsIGVuZDogMjEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTAsIGVuZDogMjEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA2NSwgZW5kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDU5LCBlbmQ6IDIyMCB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNDksIGVuZDogMjI4IH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAzOSwgZW5kOiAyMjggfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDMxLCBlbmQ6IDIzNCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYzogeyBzdGFydDogMjIsIGVuZDogMjM0IH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgbmFtZTogeyBraW5kOiAnTmFtZScsIHZhbHVlOiAnYXV0aGVudGljYXRlZEl0ZW0nIH0sXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBraW5kOiAnSW5saW5lRnJhZ21lbnQnLFxuICAgICAgICAgICAgICAgICAgdHlwZUNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZWRUeXBlJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogeyBraW5kOiAnTmFtZScsIHZhbHVlOiAnVXNlcicgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7IGtpbmQ6ICdGaWVsZCcsIG5hbWU6IHsga2luZDogJ05hbWUnLCB2YWx1ZTogJ2lkJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBraW5kOiAnRmllbGQnLCBuYW1lOiB7IGtpbmQ6ICdOYW1lJywgdmFsdWU6ICduYW1lJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENvcmU+XG4gICAgICA8S2V5c3RvbmVQcm92aWRlclxuICAgICAgICBhZG1pbkNvbmZpZz17YWRtaW5Db25maWd9XG4gICAgICAgIGFkbWluTWV0YUhhc2g9XCI1ajE4N2tcIlxuICAgICAgICBmaWVsZFZpZXdzPXtmaWVsZFZpZXdzfVxuICAgICAgICBsYXp5TWV0YWRhdGFRdWVyeT17bGF6eU1ldGFkYXRhUXVlcnl9XG4gICAgICA+XG4gICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgPC9LZXlzdG9uZVByb3ZpZGVyPlxuICAgIDwvQ29yZT5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29udGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9maWVsZHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZUljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZU9mZkljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL1hJY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9waWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9zZWdtZW50ZWQtY29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9