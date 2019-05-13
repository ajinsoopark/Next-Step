import React, { Component } from 'react'
import axios from 'axios'
import Auth from '../../Auth/Auth'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import AnswerFeedSort from './answerFeedSort'
import AnswerPost from './answerPost'

import './answerFeed.css'

class AnswerFeed extends Component {
    constructor () {
        super ()
        this.state = {
            currentUserAnswers: '',
            categories: '',
            categoryTabIndex: 0,
            sortTabIndex: 0
        }
    }

    componentDidMount () {
        let all = { category: 'All' }
        this.props.function_checkStatus()
        this.fetchSortedAnswers(this.state.categoryTabIndex, this.state.sortTabIndex)
            .then(() => {
                axios.get('/api/categories')
                .then(res => {
                    let categories = res.data.categories
                    categories.unshift(all)
                    this.setState({ categories: categories })
                })
            }).catch(err => console.log(err))
    }

    fetchSortedAnswers = async (category, sort) => {
        if (category === 0) {
            axios.get(`/api/answers/${this.convertSort(sort)}/${Auth.getTokenID()}`)
            .then(res => {
                let answers = res.data.answers
                this.setState({ currentUserAnswers: answers })
            }).catch(err => console.log(err))
        } else {
            axios.get(`/api/answers/category/${this.convertSort(sort)}/${Auth.getTokenID()}/${this.state.categoryTabIndex}`)
            .then(res => {
                let answers = res.data.answers
                this.setState({ currentUserAnswers: answers })
            }).catch(err => console.log(err))
        }
    }

    convertSort = (sortNum) => {
        switch (sortNum) {
            case 0: return 'popular'
            case 1: return 'unpopular'
            case 2: return 'new'
            case 3: return 'old'
            default: return null
        }
    }

    categoryTabSelection = (tabIndex) => {
        this.setState({
            categoryTabIndex: tabIndex,
            sortTabIndex: 0
        }, () => this.fetchSortedAnswers(this.state.categoryTabIndex, this.state.sortTabIndex))
        
    }

    sortTabSelection = (tabIndex) => {
        this.setState({ 
            sortTabIndex: tabIndex 
        }, () => this.fetchSortedAnswers(this.state.categoryTabIndex, this.state.sortTabIndex))
    }

    createCategoryTabs = () => {
        if (this.state.categories) {
            return this.state.categories.map((categoryObj, i) => {
                return <Tab key={i}> {categoryObj.category} </Tab>
            })
        }
    }

    createAnswerPanels = () => {
        let sortCount = [1,2,3,4]
        return sortCount.map((obj, i) => {
            return (
                <TabPanel key={i}>
                    <div className='sortedAnswerFeed'>
                        {this.displayAnswers()}
                    </div>
                </TabPanel>
            )
        })
    }

    createSortTabs = () => {
        if (this.state.categories) {
            return this.state.categories.map((categoryObj, i) => {
                return (
                    <TabPanel key={i}> 
                        <Tabs 
                         selectedIndex={this.state.sortTabIndex} 
                         onSelect={(tabIndex) => {
                            this.sortTabSelection(tabIndex)
                            this.fetchSortedAnswers(this.state.categoryTabIndex, this.state.sortTabIndex)
                             }}>
                            <TabList>
                                <Tab>Most Popular</Tab>
                                <Tab>Least Popular</Tab>
                                <Tab>Newest</Tab>
                                <Tab>Oldest</Tab>
                            </TabList>
                                {this.createAnswerPanels()}
                        </Tabs>
                    </TabPanel>
                )
            })
        }
    }

    displayAnswers = () => {
        if (this.state.currentUserAnswers) {
            return this.state.currentUserAnswers.map(answerObj => {
                return (
                    <AnswerPost
                     key={answerObj.id}
                     id={answerObj.id}
                     user_id={answerObj.user_id}
                     answer_body={answerObj.answer_body}
                     username={answerObj.username}
                     question_body={answerObj.question_body}
                     category={answerObj.category}
                     like_count={answerObj.like_count}
                     fetchSortedAnswers={this.fetchSortedAnswers}
                     categoryIndex={this.state.categoryTabIndex}
                     sortIndex={this.state.sortTabIndex}/>
                )
            })
        }
    }

    render () {

        const { categoryTabIndex, sortTabIndex } = this.state

        return (
            <div className='personalAnswerFeedContainer'>
                <div className='personalAnswer'>
                    My Answers
                </div>
                <div className='pickCat'>Pick a Category</div>
                <div className='answerTabs'>
                    <AnswerFeedSort
                     categoryTabIndex={categoryTabIndex}
                     sortTabIndex={sortTabIndex}
                     displayAnswers={this.displayAnswers}
                     createCategoryTabs={this.createCategoryTabs}
                     categoryTabSelection={this.categoryTabSelection}
                     sortTabSelection={this.sortTabSelection}
                     createSortTabs={this.createSortTabs}
                     fetchSortedAnswers={this.fetchSortedAnswers}/>
                </div>
            </div>
        )
    }

}

export default AnswerFeed