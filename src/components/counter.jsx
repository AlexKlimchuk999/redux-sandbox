import React from "react";
import { connect } from "react-redux";
import { increment, decrement, random } from "../reducer";

const Counter = ({ counter, increment, decrement, random }) => {
    return (
        <div id="root" className="jumbotron">
            <h2>{ counter }</h2>
            <button onClick={() => decrement()} className="btn btn-primary btn-lg">DEC</button>
            <button onClick={() => increment()} className="btn btn-primary btn-lg">INC</button>
            <button onClick={() => random(Math.floor(Math.random() * 10))} className="btn btn-primary btn-lg">RND</button>
        </div>
    );
};


const mapStateToProps = (state) => ({
    counter: state
});

const mapDispatchToProps = {
    increment,
    decrement,
    random
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);