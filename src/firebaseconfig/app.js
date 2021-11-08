import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/performance";

import config from "./config";

const app = firebase.initializeApp(config);
const db = app.firestore();
const perf = firebase.performance();

export { db , perf };
