const searchReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type) {
      case "SEARCH":
        return {
              ...oldstate,
              data: action.payload
            }
      default:
        return oldstate
    }


  }


  export default searchReducer
