import React, {Component} from 'react';

function CategoriesList(props) {
      return ( 
      <ul className="categories">
      { props.categories.map(item =>
        <li>
            { item.name }
        </li>
      )}
      </ul>
    )}

export default CategoriesList