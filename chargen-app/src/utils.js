import React from 'react';

export function mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
        return callback(key, object[key]);
    });
}

export class PrintObject extends React.Component {
    render(){
        const jd = JSON.stringify(this.props.payload, null, 4);
        return (
            <div>
                <pre>{jd}</pre>
            </div>
        );
    }
}
