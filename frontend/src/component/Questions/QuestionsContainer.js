import { connect } from "react-redux";
import { QuestionList } from "./QuestionList";
import { fetchAllCategories, fetchQuestionsByCategory } from "../actions/questionActions";

const mapStateToProps = state => {

  return {
    categories: Object.values(state.categories)
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchAllCategories: () => dispatch(fetchAllCategories())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (QuestionList);
