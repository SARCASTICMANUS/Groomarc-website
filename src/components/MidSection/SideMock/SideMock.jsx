import React, { Component } from 'react';
import SideMockup from '../../../assets/Icons/SideMock.svg';

class SideMock extends Component {
    render() {
        return (
            <div className='flex justify-center align-center sm:my-5 mx-0  p-0 m-0' >
                <img className='side-img w-130 ' src={SideMockup} alt="Side-Mock" />
            </div>
        );
    }
}

export default SideMock;
