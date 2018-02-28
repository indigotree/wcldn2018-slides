import React, {Component} from 'react';

function CategoriesList(props) {
      return ( 
      <ul>
      { props.categories.map(item =>
        <li>
            { item.name }
        </li>
      )}
      </ul>
    )}

export default CategoriesList