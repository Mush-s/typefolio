"use strict";
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TE": () => (/* binding */ CREATE_FRIEND),
/* harmony export */   "dm": () => (/* binding */ DELETE_FRIEND),
/* harmony export */   "t4": () => (/* binding */ GET_FRIENDS)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_FRIENDS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    friends {
      id
      name
      color
    }
  }
`;
const CREATE_FRIEND = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation FriendCreate($name: String!, $color: String!) {
    friendCreate(name: $name, color: $color) {
      userErrors {
        message
      }
      friend {
        id
        name
        color
      }
    }
  }
`;
const DELETE_FRIEND = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation DeleteFriend($id: Int!) {
    friendDelete(id: $id) {
      userErrors {
        message
      }
      friend {
        id
        name
        color
      }
    }
  }
`;


/***/ }),

/***/ 944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sx": () => (/* binding */ CREATE_POST),
/* harmony export */   "Xv": () => (/* binding */ DELETE_POST),
/* harmony export */   "p$": () => (/* binding */ GET_POSTS),
/* harmony export */   "vG": () => (/* binding */ UPDATE_POST)
/* harmony export */ });
/* unused harmony export GET_SAMECOLOR_POSTS */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_POSTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    posts {
      length
      title
      content
      date
      color
    }
  }
`;
const GET_SAMECOLOR_POSTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query ($color: String!) {
    friend(color: $color) {
      id
      name
      color
      posts {
        title
        content
      }
    }
  }
`;
const CREATE_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation CreatePost(
    $title: String!
    $date: String!
    $content: String!
    $color: String!
  ) {
    postCreate(title: $title, date: $date, content: $content, color: $color) {
      userErrors {
        message
      }
      post {
        title
        date
        length
        content
        color
      }
    }
  }
`;
const UPDATE_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation UpdatePost(
    $lengthId: Int!
    $title: String
    $content: String
    $color: String
  ) {
    postUpdate(
      lengthId: $lengthId
      title: $title
      content: $content

      color: $color
    ) {
      userErrors {
        message
      }
      post {
        content
        title
        content
        date

        color
      }
    }
  }
`;
const DELETE_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation PostDelete($lengthId: Int!) {
    postDelete(lengthId: $lengthId) {
      userErrors {
        message
      }
      post {
        length
      }
    }
  }
`;


/***/ })

};
;