import React from 'react'
import HandymanSearchForm from '../../components/HandymanSearchFrom/HandymanSearchForm';

export default function SearchHandyMen(props) {


    return (
        <div className="landing__search">
            <HandymanSearchForm {...props} />
        </div>
    )
}