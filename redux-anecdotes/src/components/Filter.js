import { connect } from 'react-redux'
import { filter } from '../reducers/filterReducer'

const Filter = (props) => {

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    const input = event.target.value
    props.filter(input)


  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}



export default connect(
  null,
  { filter }
)(Filter)