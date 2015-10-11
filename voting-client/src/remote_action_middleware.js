export default store => next => action => {
  console.log('in middleware', action);
  next(action);
}
