import axios from "axios";

export const fetchCategories = (id) => {
  return axios.get(`/categories`)
}

export const fetchQuestionsByCategory = (id) => {
  return axios.get(`/questions/category/${id}`)
}
