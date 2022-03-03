import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

export default function PaginationControl() {
  const [{ totalPages, pageNumber }, dispatch] = useStateValue()

  const handleChange = (event, value) => {
    dispatch({
      type: actionTypes.PAGE_NUMBER,
      pageNumber: value
    })

  };

  return (
    <div >

      <Pagination count={totalPages}
        page={pageNumber}
        onChange={handleChange}
        color="primary"
        size='large'
        style={{ width: "100%" }} />

    </div>
  );
}
