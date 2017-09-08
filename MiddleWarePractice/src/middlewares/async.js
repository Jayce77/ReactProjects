export default function({ dispatch }) {
  return next => action => {
    // If the action doesn't have a payload or promie
    // sent it on to the next middleware
    if (!action || !action.payload.then) {
      return next(action);
    }
    
    //Make sure the action's promise resolves
    action.payload
      .then(function(response){
        //Take everything from the current action
        //Then replace promise with response
        const newAction = { ...action, payload: response }
        //dispatch sends action back through all middlewares agian
        dispatch(newAction);
    });
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