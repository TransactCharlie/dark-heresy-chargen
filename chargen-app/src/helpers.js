import React from 'react';

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
