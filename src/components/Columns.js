import React,{ useContext } from 'react';
import DataContext from '../context';
import ColumnItem from './ColumnItem';

const Columns = function() {
    const columns = useContext(DataContext)
    console.log(columns);

    function renderColumns(){
        return columns.map(item =>  
            <ColumnItem column={item} key={item.id}/>
        )
    }

    return (
        <div>
            {renderColumns()}
        </div>
    )
}

export default Columns;