export default function({ dispatch }) {
  return next => action => {
    // If the action doesn't have a payload or promie
    // sent it on to the next middleware
    if (!action || !action.payload.then) {
      return next(action);
    }
    
    console.log("We have a promise", action);
  };
}

/*
  export default function({dispatch}) {
    return function(next) {
      return function(action);
        console.log(action);
        
        next(action);
    }
  }
*/