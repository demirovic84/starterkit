import {Component} from "react";
import React from "react";
import './section-1.scss';



class Section1 extends Component {
    render() {
        return (
            <div className="section-wrapper sec1">
                    <h1>This is Section 1</h1>

                <div className="box-wrapper grid-container">
                        <div className="item item-1">Number one</div>
                        <div className="item item-2">Number two</div>
                        <div className="item item-3">Number three</div>
                        <div className="item item-4">Number four</div>
                        <div className="item item-5">Number five</div>
                        <div className="item item-6">Number six</div>
                        <div className="item item-7">7</div>
                        <div className="item item-8">8</div>
                        <div className="item item-9">9</div>
                        <div className="item item-10">10</div>
                    </div>

                </div>


        );
    }
}

export default Section1;