const initState = {
  projects : [
    {id: '1', title: 'Develop stuff', content: 'bla bla bla'},
    {id: '2', title: 'Develop stuff 2', content: 'bla bla bla bla bla'},
    {id: '3', title: 'Develop stuff 3', content: 'bla bla bla bla bla bla bla'}
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
