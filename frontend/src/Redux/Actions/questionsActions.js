import * as questionsApi from "../utility/questionsUtil";

export let RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export let RECEIVE_QUESTIONS_BY_CATEGORY = "RECEIVE_QUESTIONS_BY_CATEGORY"


export const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    categories: categories
  }
}


export const fetchCategories = () => dispatch => {
  return questionsApi
  .fetchCategories()
  .then(res => {
    return dispatch(receiveCategories(res.data.categories))
  })
  .catch(err => {
    console.log(err)
  })

}

export const receiveQuestionsByCategory = questions => {
  return {
    type: RECEIVE_QUESTIONS_BY_CATEGORY,
    questions: questions
  };
};

export const fetchQuestionsByCategory = (id) => dispatch => {
  return questionsApi
  .fetchQuestionsByCategory(id)
  .then(res => {
    return dispatch(receiveQuestionsByCategory(res.data.questions))
  })
  .catch(err => {
    console.log(err)
  });

};
