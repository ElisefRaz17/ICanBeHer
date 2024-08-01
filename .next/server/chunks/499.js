exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 3746:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 68787));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56822));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 33458));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27230, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73349))

/***/ }),

/***/ 68194:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 80772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68262, 23))

/***/ }),

/***/ 56822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AspirationContext: () => (/* binding */ AspirationContext),
/* harmony export */   AspirationProvider: () => (/* binding */ AspirationProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ AspirationContext,AspirationProvider auto */ 

const aspirationContextState = {
    aspiration: "",
    setAspiration: ()=>""
};
const AspirationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(aspirationContextState);
const AspirationProvider = ({ children })=>{
    const [aspiration, setAspiration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); /**FIXME: error occuring with state variables */ 
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AspirationContext.Provider, {
        value: {
            aspiration,
            setAspiration
        },
        children: children
    });
};


/***/ }),

/***/ 68787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Providers: () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs + 3 modules
var redux_toolkit_modern = __webpack_require__(75902);
// EXTERNAL MODULE: ./redux/features/bookmarkSlice.ts
var bookmarkSlice = __webpack_require__(96772);
;// CONCATENATED MODULE: ./redux/store.ts


const store = (0,redux_toolkit_modern/* configureStore */.xC)({
    reducer: {
        bookmark: bookmarkSlice/* default */.ZP
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        }),
    devTools: "production" !== "production"
});

// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(81368);
;// CONCATENATED MODULE: ./context/redux.provider.tsx
/* __next_internal_client_entry_do_not_use__ Providers auto */ 


function Providers({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_redux/* Provider */.zt, {
        store: store,
        children: children
    });
}


/***/ }),

/***/ 46974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ auth),
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31288);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40637);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57937);



const firebaseConfig = {
    apiKey: "AIzaSyDtsgHspBq5cP_PY93E-siKavg8PKE9IeA",
    authDomain: "icanbeher-52758.firebaseapp.com",
    projectId: "icanbeher-52758",
    storageBucket: "icanbeher-52758.appspot.com",
    messagingSenderId: "219706161343",
    appId: "1:219706161343:web:6f266353dc1cfb9bc12e0a"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getFirestore */ .ad)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__/* .getAuth */ .v0)(app);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (app)));


/***/ }),

/***/ 96772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xe: () => (/* binding */ addBookmarkFail),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   av: () => (/* binding */ setUser),
/* harmony export */   bU: () => (/* binding */ removeFromBookmarked),
/* harmony export */   bl: () => (/* binding */ updateBookmarks),
/* harmony export */   ix: () => (/* binding */ addAspirationToBookmarked),
/* harmony export */   yT: () => (/* binding */ getBookmarkError)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75902);

const initialState = {
    bookmarked: [],
    error: null,
    bookmarkError: null,
    user: null
};
const bookmarkSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .oM)({
    name: "bookmark",
    initialState,
    reducers: {
        addAspirationToBookmarked (state, action) {
            state.bookmarked.unshift(action.payload);
        },
        removeFromBookmarked (state, action) {
            state.bookmarked = state.bookmarked.filter((aspiration)=>aspiration.id !== action.payload);
        },
        addBookmarkFail (state, action) {
            state.error = action.payload;
        },
        getBookmarkError (state, action) {
            state.bookmarkError = action.payload;
        },
        setUser (state, action) {
            state.user = action.payload;
        },
        updateBookmarks (state, action) {
            state.bookmarked = action.payload;
        }
    }
});
const { addAspirationToBookmarked, removeFromBookmarked, addBookmarkFail, getBookmarkError, setUser, updateBookmarks } = bookmarkSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookmarkSlice.reducer);


/***/ }),

/***/ 31795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bb: () => (/* binding */ getBookmarksFromFirebaseDB),
/* harmony export */   HV: () => (/* binding */ addAspirationToBookmarkedDB),
/* harmony export */   kS: () => (/* binding */ logout),
/* harmony export */   nS: () => (/* binding */ googleSignIn),
/* harmony export */   yT: () => (/* binding */ removeAspirationFromBookmarks)
/* harmony export */ });
/* unused harmony exports notifySuccess, notifyError */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75902);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25174);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46974);
/* harmony import */ var _bookmarkSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96772);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57937);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33518);







const notifySuccess = (message)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP.success(message);
const notifyError = (message)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP.error(message);
//user logout
const logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__/* .createAsyncThunk */ .hg)("auth/logout", async ()=>{
    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__/* .signOut */ .w7)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__/* .auth */ .I);
});
//Google sign-in
const googleSignIn = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__/* .createAsyncThunk */ .hg)("auth/googleSignIn", async ()=>{
    const googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__/* .GoogleAuthProvider */ .hJ();
    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__/* .signInWithPopup */ .rh)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__/* .auth */ .I, googleAuthProvider);
});
//add aspirations bookmarks
const addAspirationToBookmarkedDB = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__/* .createAsyncThunk */ .hg)("bookmark/addAspirationToBookmarked", async (aspiration, { dispatch, getState })=>{
    const state = getState();
    const user = state.bookmark.user;
    const aspirationId = aspiration.id.toString();
    const { image_path, id, name, description, role, userId } = aspiration;
    try {
        const bookmarkedItemRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .doc */ .JU)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `${user?.uid}`, aspirationId);
        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .getDoc */ .QT)(bookmarkedItemRef);
        if (docSnap.exists()) {
            const existItem = docSnap.data();
            dispatch((0,_bookmarkSlice__WEBPACK_IMPORTED_MODULE_2__/* .addBookmarkFail */ .Xe)(existItem.title + " already an existing item"));
        } else {
            notifySuccess(`adding ${name} to bookmarks`);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .setDoc */ .pl)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .doc */ .JU)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, "favoritesCollection", aspirationId), {
                image_path,
                role,
                id,
                name,
                description,
                userId: user?.uid
            });
            notifySuccess(`${name} has been successfully added`);
            dispatch((0,_bookmarkSlice__WEBPACK_IMPORTED_MODULE_2__/* .addAspirationToBookmarked */ .ix)(aspiration));
        }
    } catch (error) {
        notifyError(`failed to add  ${name}  ${error}`);
        dispatch((0,_bookmarkSlice__WEBPACK_IMPORTED_MODULE_2__/* .addBookmarkFail */ .Xe)(error.response && error.response.data.message ? error.response.data.message : "Failed to add " + name + ": " + error.message));
    }
});
//remove aspirations from bookmarks
const removeAspirationFromBookmarks = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__/* .createAsyncThunk */ .hg)("bookmark/removeAspirationFromBookmarks", async (id, { dispatch, getState })=>{
    const state = getState();
    const user = state.bookmark.user;
    const aspirationId = id.toString();
    try {
        dispatch((0,_bookmarkSlice__WEBPACK_IMPORTED_MODULE_2__/* .removeFromBookmarked */ .bU)(id));
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .deleteDoc */ .oe)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .doc */ .JU)(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db, `favoritesCollection`, aspirationId));
        notifySuccess(`Aspiration Id: ${id} was successfully deleted`);
    } catch (error) {
        notifyError(`failed to remove  ${id}`);
        dispatch({
            type: "ADD_BOOKMARK_FAIL",
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
});
//retrieve all bookmarked aspirations
const getBookmarksFromFirebaseDB = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__/* .createAsyncThunk */ .hg)("bookmark/getBookmarksFromFirebaseDB", async (_, { getState, dispatch })=>{
    const state = getState();
    const user = state.bookmark.user;
    const getBookmarkItems = async (db)=>{
        const bookmarkCol = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .query */ .IO)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .collection */ .hJ)(db, `favoritesCollection`), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .where */ .ar)("userId", "==", user?.uid));
        const bookmarkSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__/* .getDocs */ .PL)(bookmarkCol);
        const bookmarkList = bookmarkSnapshot.docs.map((doc)=>doc.data());
        return bookmarkList;
    };
    try {
        let allBookmarks = await getBookmarkItems(_firebase_config__WEBPACK_IMPORTED_MODULE_1__.db);
        dispatch((0,_bookmarkSlice__WEBPACK_IMPORTED_MODULE_2__/* .updateBookmarks */ .bl)(allBookmarks));
    } catch (error) {
        dispatch((0,_bookmarkSlice__WEBPACK_IMPORTED_MODULE_2__/* .getBookmarkError */ .yT)(error.response && error.response.data.message ? error.response.data.message : error.message));
    }
});


/***/ }),

/***/ 93197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector),
/* harmony export */   T: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81368);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useDispatch */ .I0)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9;


/***/ }),

/***/ 33458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./redux/hooks.ts
var hooks = __webpack_require__(93197);
// EXTERNAL MODULE: ./redux/features/bookmarkThunk.ts
var bookmarkThunk = __webpack_require__(31795);
// EXTERNAL MODULE: ./redux/features/bookmarkSlice.ts
var bookmarkSlice = __webpack_require__(96772);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs + 3 modules
var dist = __webpack_require__(57937);
// EXTERNAL MODULE: ./firebase.config.ts
var firebase_config = __webpack_require__(46974);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/assets/I (3).png
/* harmony default export */ const I_3_ = ({"src":"/_next/static/media/I (3).110c83ec.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqklEQVR42mOAgey0lYyT+ncxdbZtYwr1XcjIQDRIT1wOVp0UvdSuJH9NRnHW6sxIn4UWILEY34VMDP09O5lAnKLc1RntTVvnFVSun+EVtDAKJOYRtZiJobRgLVhBasyytKzsVdMW5W5a0xO6Mg0ktjhmHTNDuD/EQVEBi8w9vedHzgxclTk1ZBXYioWha5gYcIHbMTtRfRIbtJjJPXAB0+bIDcyLw9fCdQIAqGo4hXxlq3cAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/FavoriteBorderOutlined.js
var FavoriteBorderOutlined = __webpack_require__(79730);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Dashboard.js
var Dashboard = __webpack_require__(14141);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/InfoOutlined.js
var InfoOutlined = __webpack_require__(93872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(64085);
;// CONCATENATED MODULE: ./src/app/components/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 















const Header = ()=>{
    const pathname = (0,navigation.usePathname)();
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const user = (0,hooks/* useAppSelector */.C)((state)=>state.bookmark.user);
    const bookmarkedAspirations = (0,hooks/* useAppSelector */.C)((state)=>state.bookmark.bookmarked);
    const [firebaseError, setFirebaseError] = (0,react_.useState)("");
    const handleGoogleSignIn = async ()=>{
        try {
            await dispatch((0,bookmarkThunk/* googleSignIn */.nS)());
        } catch (error) {
            setFirebaseError(error.message);
        }
    };
    const handleLogout = ()=>{
        try {
            dispatch((0,bookmarkThunk/* logout */.kS)());
        } catch (error) {
            setFirebaseError(error.message);
        }
    };
    (0,react_.useEffect)(()=>{
        const unsubscribe = (0,dist/* onAuthStateChanged */.Aj)(firebase_config/* auth */.I, (currentUser)=>{
            dispatch((0,bookmarkSlice/* setUser */.av)(currentUser));
        });
        dispatch((0,bookmarkThunk/* getBookmarksFromFirebaseDB */.Bb)());
        return ()=>{
            unsubscribe();
        };
    }, [
        dispatch
    ]);
    const length = bookmarkedAspirations.length;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex px-4 py-4 items-center let-900 justify-between pattern-dots pattern-indigo-500 pattern-bg-orange-100   pattern-size-2 pattern-opacity-20 opacity-100",
        children: [
            firebaseError && /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-red-600 bg-red-100 px-2 py-2 rounded-md text-sm w-[20em]",
                children: firebaseError
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: I_3_,
                    height: 70,
                    width: 90,
                    style: {
                        justifyContent: "center",
                        display: "flex",
                        paddingTop: "10px"
                    },
                    alt: "logo"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        className: "text-black",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            variant: "contained",
                            className: "px-3 py-2 bg-green-200",
                            sx: {
                                ":hover": {
                                    bgcolor: "darkgreen",
                                    color: "white"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(node.Tooltip, {
                                title: "About Page",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(InfoOutlined/* default */.Z, {
                                    sx: {
                                        color: "black"
                                    }
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/dashboard",
                        className: "text-white",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            variant: "contained",
                            className: "px-3 py-2 bg-blue-300",
                            sx: {
                                ":hover": {
                                    bgcolor: "darkorchid",
                                    color: "white"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(node.Tooltip, {
                                title: "Dashboard",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Dashboard/* default */.Z, {})
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                        className: "px-3 py-2 bg-pink-500 text-sm text-white rounded-full",
                        sx: {
                            ":hover": {
                                bgcolor: "deeppink",
                                color: "white"
                            }
                        },
                        onClick: user ? handleLogout : handleGoogleSignIn,
                        children: user ? "Sign out" : "Sign in"
                    }),
                    user && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: user?.photoURL ? user?.photoURL : "",
                        alt: user?.email ? user?.email : "",
                        width: 500,
                        height: 500,
                        className: "w-[30px] h-[30px] rounded-full text-white via-cyan-900 to-stone-500 bg-gradient-to-r max-sm:cursor-pointer",
                        "data-cy": "user-profile-image",
                        priority: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/bookmarks",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Tooltip, {
                            title: "Favorites",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Button, {
                                variant: "contained",
                                className: `${pathname === "/bookmarked" ? "text-red-400 font-semibold" : "text-white"} block relative bg-indigo-400 bg-cover`,
                                sx: {
                                    ":hover": {
                                        bgcolor: "darkviolet",
                                        color: "white"
                                    }
                                },
                                "data-cy": "bookmark-icon",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(FavoriteBorderOutlined/* default */.Z, {}),
                                    length && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "absolute -top-[8px] -right-[10px] w-5 h-5 bg-white rounded-full flex items-center font-normal justify-center text-black text-xs",
                                        children: user ? `${length}` : "0"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 68605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Montserrat","arguments":[{"weight":["400","700"],"subsets":["latin"],"variable":"--font-monstserrat"}],"variableName":"monstserrat"}
var target_path_src_app_layout_tsx_import_Montserrat_arguments_weight_400_700_subsets_latin_variable_font_monstserrat_variableName_monstserrat_ = __webpack_require__(67121);
var target_path_src_app_layout_tsx_import_Montserrat_arguments_weight_400_700_subsets_latin_variable_font_monstserrat_variableName_monstserrat_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Montserrat_arguments_weight_400_700_subsets_latin_variable_font_monstserrat_variableName_monstserrat_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./context/redux.provider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\elise\Documents\ICanBeHer\i-can-be-her\context\redux.provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

;// CONCATENATED MODULE: ./src/app/components/Header.tsx

const Header_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\elise\Documents\ICanBeHer\i-can-be-her\src\app\components\Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Header_esModule, $$typeof: Header_$$typeof } = Header_proxy;
const Header_default_ = Header_proxy.default;


/* harmony default export */ const Header = (Header_default_);
;// CONCATENATED MODULE: ./context/aspiration.provider.tsx

const aspiration_provider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\elise\Documents\ICanBeHer\i-can-be-her\context\aspiration.provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: aspiration_provider_esModule, $$typeof: aspiration_provider_$$typeof } = aspiration_provider_proxy;
const aspiration_provider_default_ = aspiration_provider_proxy.default;

const aspiration_provider_e0 = aspiration_provider_proxy["AspirationContext"];

const e1 = aspiration_provider_proxy["AspirationProvider"];

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(46261);
;// CONCATENATED MODULE: ./src/assets/Logo.png
/* harmony default export */ const Logo = ({"src":"/_next/static/media/Logo.9c4324ef.png","height":253,"width":345,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAWElEQVR42mMAgTd1h4SBWOJV/WERBmzgNVDibd1h0fd1R+TeVB7QXxXRJQSTg5nA8bL5EMfHysOyn8sOmb8v3m/6u/gEEwPJ4H31YcZPFYcZ3xbvYyRaEwC8piWo0hwwNAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(3501);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/components/Footer.tsx




function Footer() {
    return(// <div className="mt-auto">
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-orange-100 footer bottom-0 w-full",
        style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            bottom: 0,
            marginTop: "auto"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: Logo,
                height: 100,
                width: 100,
                alt: "footer logo",
                style: {
                    paddingTop: "20px"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                style: {
                    padding: "20px",
                    marginLeft: "auto"
                },
                children: [
                    " ",
                    "Created by Elise | Beautiful Me Technologies \xa9 2024"
                ]
            })
        ]
    }));
}
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/app/layout.tsx







const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: `${(target_path_src_app_layout_tsx_import_Montserrat_arguments_weight_400_700_subsets_latin_variable_font_monstserrat_variableName_monstserrat_default()).className} min-h-screen flex flex-col`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 73349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Logo.9c4324ef.png","height":253,"width":345,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAWElEQVR42mMAgTd1h4SBWOJV/WERBmzgNVDibd1h0fd1R+TeVB7QXxXRJQSTg5nA8bL5EMfHysOyn8sOmb8v3m/6u/gEEwPJ4H31YcZPFYcZ3xbvYyRaEwC8piWo0hwwNAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;