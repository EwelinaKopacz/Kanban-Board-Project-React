import React,{ useContext } from 'react';
import ColumnContext from '../context';
import ColumnItem from './ColumnItem';
import './styles.css'

const Columns = function() {
    const columns = useContext(ColumnContext)

    function renderColumns(){
        return columns.map(item =>
            <ColumnItem column={item} key={item.id}/>
        )
    }

    return (
        <div className='columns__container'>
            {renderColumns()}
        </div>
    )
}

export default Columns;