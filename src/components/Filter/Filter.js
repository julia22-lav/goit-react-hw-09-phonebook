import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import selectors from '../../redux/contacts/contacts-selectors';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function Filter() {
  const filterState = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  const filterChange = useCallback(
    event => dispatch(actions.filterChange(event.target.value)),
    [dispatch],
  );

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

Filter.propTypes = {
  filters: PropTypes.string,
  filterChange: PropTypes.func,
};
