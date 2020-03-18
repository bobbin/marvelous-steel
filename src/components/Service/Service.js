import React, { Component } from 'react';

export default class Service extends React.Component {
    render() {
        return (
            
<section className="post">
    <div className="image">
        <img src={this.props.image}></img>
        </div>
        <div className="content">
            <h3>{this.props.h3}</h3>
            <p>
            {this.props.p}            
            </p>
    </div>
</section>

        );
    }
}

