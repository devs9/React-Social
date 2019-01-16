import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import NewsWithLoad from '../../components/molecules/hoc/NewsWithLoad'
import { getNews } from '../../store/actions/news'

class News extends PureComponent {
  componentDidMount() {
    this.props.getNews()
  }
  render() {
    const { news } = this.props
    const { isFetch } = news
    return <NewsWithLoad isLoading={isFetch} />
  }
}
const mapStateToProps = state => ({
  news: state.news,
})
export default connect(
  mapStateToProps,
  { getNews }
)(News)
