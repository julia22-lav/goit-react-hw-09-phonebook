import { Component } from 'react';
import { v4 as genId } from 'uuid';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Filter extends Component {
  render() {
    const { filterState, filterChange } = this.props;

    return (
      <Form inline>
        <FormControl
          type="text"
          name="filter"
          value={filterState}
          onChange={filterChange}
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button className={s.Button} variant="primary">
          Search by contact name
        </Button>
      </Form>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.string,
  filterChange: PropTypes.func,
};

const mapStateToProps = state => ({
  filterState: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  filterChange: event => dispatch(actions.filterChange(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
